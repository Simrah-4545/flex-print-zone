import { NextRequest, NextResponse } from 'next/server';
import { saveEnquiry } from '@/lib/storage';
import path from 'path';
import fs from 'fs';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || '';
    let body: any = {};
    let uploadedFileName = '';

    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      for (const [key, value] of Array.from(formData.entries())) {
        if (key === 'artworkFile' && value instanceof File) {
          const file = value as File;
          if (file.size > 0) {
            // Validate file extension
            const ext = path.extname(file.name).toLowerCase().replace('.', '');
            const allowed = ['jpg', 'jpeg', 'png', 'pdf', 'ai', 'cdr', 'psd'];
            if (!allowed.includes(ext)) {
              throw new Error(`Invalid file format .${ext}. Allowed formats: JPG, PNG, PDF, AI, CDR, PSD.`);
            }
            if (file.size > 50 * 1024 * 1024) { // 50MB limit
              throw new Error('File size exceeds maximum allowed limit of 50MB.');
            }
            // Save file
            const uploadDir = path.join(process.cwd(), 'public', 'uploads');
            if (!fs.existsSync(uploadDir)) {
              fs.mkdirSync(uploadDir, { recursive: true });
            }
            const safeName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
            const targetPath = path.join(uploadDir, safeName);
            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            fs.writeFileSync(targetPath, buffer);
            uploadedFileName = safeName;
          }
        } else if (key === 'finishing') {
          if (!body.finishing) body.finishing = [];
          body.finishing.push(String(value));
        } else {
          body[key] = String(value);
        }
      }
    } else {
      body = await req.json();
    }

    // Validation
    const { fullName, mobileNumber, printingRequirement, quantity } = body;

    if (!fullName || !fullName.trim()) {
      return NextResponse.json({ error: 'Please enter your full name.' }, { status: 400 });
    }

    if (!mobileNumber || !mobileNumber.trim()) {
      return NextResponse.json({ error: 'Please enter your mobile number.' }, { status: 400 });
    }

    // Indian mobile number validation (10 digits)
    const cleanMobile = mobileNumber.replace(/\D/g, '');
    if (cleanMobile.length < 10) {
      return NextResponse.json({ error: 'Please enter a valid 10-digit mobile number.' }, { status: 400 });
    }

    if (!printingRequirement || !printingRequirement.trim()) {
      return NextResponse.json({ error: 'Please select a printing requirement.' }, { status: 400 });
    }

    const numQty = quantity ? parseInt(String(quantity), 10) : 1;
    const finalQty = (isNaN(numQty) || numQty < 1) ? 1 : numQty;

    const finishingList = Array.isArray(body.finishing)
      ? body.finishing
      : typeof body.finishing === 'string'
      ? body.finishing.split(',').filter(Boolean)
      : [];

    const enquiryData = {
      fullName: body.fullName.trim(),
      mobileNumber: cleanMobile,
      whatsappNumber: body.whatsappNumber ? body.whatsappNumber.replace(/\D/g, '') : cleanMobile,
      email: body.email ? body.email.trim() : '',
      printingRequirement: body.printingRequirement,
      customRequirement: body.customRequirement || '',
      width: body.width || '',
      height: body.height || '',
      unit: body.unit || 'Feet',
      dontKnowSize: body.dontKnowSize === 'true' || body.dontKnowSize === true,
      quantity: finalQty,
      printingType: body.printingType || 'Single Side',
      finishing: finishingList,
      hasArtwork: body.hasArtwork || 'No',
      artworkFileName: uploadedFileName || undefined,
      deliveryOption: body.deliveryOption || 'Pickup',
      deliveryAddress: body.deliveryAddress || '',
      installationLocation: body.installationLocation || '',
      requiredDate: body.requiredDate || '',
      timePreference: body.timePreference || 'No Preference',
      projectDetails: body.projectDetails || '',
      source: body.source || 'Website',
    };

    const saved = saveEnquiry(enquiryData);

    // Format WhatsApp message
    const sizeText = enquiryData.dontKnowSize 
      ? 'Size: Size assistance needed' 
      : `Size: ${enquiryData.width || '-'} x ${enquiryData.height || '-'} ${enquiryData.unit}`;
    
    const finishingText = enquiryData.finishing.length > 0 ? enquiryData.finishing.join(', ') : 'None';
    
    const whatsappMessage = `Hello Flex Print Zone,
I would like to request a quotation.
*Enquiry ID:* ${saved.id}
*Name:* ${enquiryData.fullName}
*Mobile:* ${enquiryData.mobileNumber}
*WhatsApp:* ${enquiryData.whatsappNumber}
*Printing Requirement:* ${enquiryData.printingRequirement}${enquiryData.customRequirement ? ` (${enquiryData.customRequirement})` : ''}
*${sizeText}*
*Quantity:* ${enquiryData.quantity}
*Printing Type:* ${enquiryData.printingType}
*Finishing:* ${finishingText}
*Required Date:* ${enquiryData.requiredDate || 'Not specified'} (${enquiryData.timePreference})
*Delivery Option:* ${enquiryData.deliveryOption}
${enquiryData.deliveryAddress ? `*Delivery Address:* ${enquiryData.deliveryAddress}\n` : ''}${enquiryData.installationLocation ? `*Installation Site:* ${enquiryData.installationLocation}\n` : ''}*Artwork Status:* ${enquiryData.hasArtwork}${enquiryData.artworkFileName ? ' (File Attached)' : ''}
*Project Details:* ${enquiryData.projectDetails || 'None'}

Please share the quotation.`;

    return NextResponse.json({
      success: true,
      enquiryId: saved.id,
      whatsappMessage: encodeURIComponent(whatsappMessage),
    });
  } catch (err: any) {
    console.error('Enquiry Submission Error:', err);
    return NextResponse.json({ error: err.message || 'Server error processing enquiry.' }, { status: 500 });
  }
}
