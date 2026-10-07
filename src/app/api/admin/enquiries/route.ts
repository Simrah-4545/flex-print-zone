import { NextRequest, NextResponse } from 'next/server';
import { getAllEnquiries, updateEnquiryStatus, deleteEnquiry } from '@/lib/storage';

export async function GET(req: NextRequest) {
  try {
    const list = getAllEnquiries();
    return NextResponse.json({ success: true, enquiries: list });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error fetching enquiries' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, notes } = body;
    if (!id || !status) {
      return NextResponse.json({ error: 'Missing id or status' }, { status: 400 });
    }
    const updated = updateEnquiryStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ error: 'Enquiry not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, enquiry: updated });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error updating enquiry' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Missing id' }, { status: 400 });
    }
    const deleted = deleteEnquiry(id);
    return NextResponse.json({ success: deleted });
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Error deleting enquiry' }, { status: 500 });
  }
}
