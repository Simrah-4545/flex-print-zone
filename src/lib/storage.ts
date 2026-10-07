import fs from 'fs';
import path from 'path';

export interface Enquiry {
  id: string;
  createdAt: string;
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  email?: string;
  printingRequirement: string;
  customRequirement?: string;
  width?: string;
  height?: string;
  unit?: string;
  dontKnowSize: boolean;
  quantity: number;
  printingType: string;
  finishing: string[];
  hasArtwork: string;
  artworkFileName?: string;
  deliveryOption: string;
  deliveryAddress?: string;
  installationLocation?: string;
  requiredDate?: string;
  timePreference?: string;
  projectDetails?: string;
  source?: string;
  status: 'New' | 'Contacted' | 'Quote Sent' | 'Order Confirmed' | 'Completed' | 'Cancelled';
  internalNotes?: string;
}

const dataDir = path.join(process.cwd(), 'src', 'data');
const filePath = path.join(dataDir, 'enquiries.json');

function ensureDataFile() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, JSON.stringify([], null, 2), 'utf-8');
  }
}

export function getAllEnquiries(): Enquiry[] {
  ensureDataFile();
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error("Error reading enquiries:", error);
    return [];
  }
}

export function saveEnquiry(enquiry: Omit<Enquiry, 'id' | 'createdAt' | 'status'>): Enquiry {
  ensureDataFile();
  const list = getAllEnquiries();
  const newEnquiry: Enquiry = {
    ...enquiry,
    id: `FPZ-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: 'New',
  };
  list.unshift(newEnquiry);
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8');
  return newEnquiry;
}

export function updateEnquiryStatus(id: string, status: Enquiry['status'], notes?: string): Enquiry | null {
  ensureDataFile();
  const list = getAllEnquiries();
  const index = list.findIndex(e => e.id === id);
  if (index === -1) return null;
  list[index].status = status;
  if (notes !== undefined) {
    list[index].internalNotes = notes;
  }
  fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8');
  return list[index];
}

export function deleteEnquiry(id: string): boolean {
  ensureDataFile();
  let list = getAllEnquiries();
  const initialLen = list.length;
  list = list.filter(e => e.id !== id);
  if (list.length !== initialLen) {
    fs.writeFileSync(filePath, JSON.stringify(list, null, 2), 'utf-8');
    return true;
  }
  return false;
}
