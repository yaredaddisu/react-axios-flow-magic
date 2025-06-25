
import axios from 'axios';

// Configure axios instance
const api = axios.create({
  baseURL: 'https://api.example.com', // Replace with your actual API endpoint
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

interface FormData {
  businessPhone: string;
  businessEmail: string;
  businessAddress: string;
  region: string;
  woreda: string;
  kebele: string;
  houseNo: string;
  friendlyAddress: string;
  industry: string;
  category: string;
  staffSize: string;
  transactionVolume: string;
  legalBusinessName: string;
  businessRegistrationNo: string;
  tinNumber: string;
  incorporationType: string;
  isVatRegistered: boolean;
  vatRegistrationNumber?: string;
  isBettingOrFantasy: boolean;
  bettingLicenseNumber?: string;
  tradeLicense: File | null;
  tinCertificate: File | null;
  memorandumOfAssociation: File | null;
  contactPersonName: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  gender: string;
  dateOfBirth: {
    day: string;
    month: string;
    year: string;
  };
  address: string;
  contactRegion: string;
  idDocumentType: string;
  idDocument: File | null;
}

export const submitBusinessVerification = async (formData: FormData) => {
  try {
    console.log('Preparing form data for submission...');
    
    // Create FormData object for multipart/form-data submission
    const submitData = new FormData();
    
    // Add text fields
    submitData.append('businessPhone', formData.businessPhone);
    submitData.append('businessEmail', formData.businessEmail);
    submitData.append('businessAddress', formData.businessAddress);
    submitData.append('region', formData.region);
    submitData.append('woreda', formData.woreda);
    submitData.append('kebele', formData.kebele);
    submitData.append('houseNo', formData.houseNo);
    submitData.append('friendlyAddress', formData.friendlyAddress);
    submitData.append('industry', formData.industry);
    submitData.append('category', formData.category);
    submitData.append('staffSize', formData.staffSize);
    submitData.append('transactionVolume', formData.transactionVolume);
    submitData.append('legalBusinessName', formData.legalBusinessName);
    submitData.append('businessRegistrationNo', formData.businessRegistrationNo);
    submitData.append('tinNumber', formData.tinNumber);
    submitData.append('incorporationType', formData.incorporationType);
    
    // Handle VAT registration - send the actual number if registered, otherwise send 'false'
    if (formData.isVatRegistered && formData.vatRegistrationNumber) {
      submitData.append('vatRegistration', formData.vatRegistrationNumber);
    } else {
      submitData.append('vatRegistration', 'false');
    }
    
    // Handle betting license - send the actual number if applicable, otherwise send 'false'
    if (formData.isBettingOrFantasy && formData.bettingLicenseNumber) {
      submitData.append('bettingLicense', formData.bettingLicenseNumber);
    } else {
      submitData.append('bettingLicense', 'false');
    }
    
    submitData.append('contactPersonName', formData.contactPersonName);
    submitData.append('contactPersonPhone', formData.contactPersonPhone);
    submitData.append('contactPersonEmail', formData.contactPersonEmail);
    submitData.append('gender', formData.gender);
    submitData.append('dateOfBirth', JSON.stringify(formData.dateOfBirth));
    submitData.append('address', formData.address);
    submitData.append('contactRegion', formData.contactRegion);
    submitData.append('idDocumentType', formData.idDocumentType);
    
    // Add file uploads
    if (formData.tradeLicense) {
      submitData.append('tradeLicense', formData.tradeLicense);
      console.log('Added trade license file:', formData.tradeLicense.name);
    }
    
    if (formData.tinCertificate) {
      submitData.append('tinCertificate', formData.tinCertificate);
      console.log('Added TIN certificate file:', formData.tinCertificate.name);
    }
    
    if (formData.memorandumOfAssociation) {
      submitData.append('memorandumOfAssociation', formData.memorandumOfAssociation);
      console.log('Added memorandum file:', formData.memorandumOfAssociation.name);
    }
    
    if (formData.idDocument) {
      submitData.append('idDocument', formData.idDocument);
      console.log('Added ID document file:', formData.idDocument.name);
    }
    
    console.log('VAT Registration:', formData.isVatRegistered ? formData.vatRegistrationNumber || 'No number provided' : 'Not registered');
    console.log('Betting License:', formData.isBettingOrFantasy ? formData.bettingLicenseNumber || 'No number provided' : 'Not applicable');
    console.log('Sending business verification request...');
    
    // Make the API request
    const response = await api.post('/business-verification', submitData);
    
    console.log('Business verification submitted successfully:', response.data);
    return response.data;
    
  } catch (error) {
    console.error('Error submitting business verification:', error);
    
    if (axios.isAxiosError(error)) {
      console.error('Response data:', error.response?.data);
      console.error('Response status:', error.response?.status);
      console.error('Response headers:', error.response?.headers);
    }
    
    throw error;
  }
};

// Additional utility functions for API communication
export const checkVerificationStatus = async (verificationId: string) => {
  try {
    const response = await api.get(`/business-verification/${verificationId}/status`);
    return response.data;
  } catch (error) {
    console.error('Error checking verification status:', error);
    throw error;
  }
};

export const uploadDocument = async (documentType: string, file: File) => {
  try {
    const uploadData = new FormData();
    uploadData.append('document', file);
    uploadData.append('type', documentType);
    
    const response = await api.post('/documents/upload', uploadData);
    return response.data;
  } catch (error) {
    console.error('Error uploading document:', error);
    throw error;
  }
};
