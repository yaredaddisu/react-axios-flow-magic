
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import ProgressIndicator from '@/components/verification/ProgressIndicator';
import BusinessInformationStep from '@/components/verification/BusinessInformationStep';
import BusinessContactStep from '@/components/verification/BusinessContactStep';
import DocumentsVerificationStep from '@/components/verification/DocumentsVerificationStep';
import ContactPersonStep from '@/components/verification/ContactPersonStep';
import { submitBusinessVerification } from '@/services/verificationService';

interface FormData {
  // Business Information
  businessPhone: string;
  businessEmail: string;
  businessAddress: string;
  region: string;
  woreda: string;
  kebele: string;
  houseNo: string;
  friendlyAddress: string;
  
  // Business Classification
  industry: string;
  category: string;
  staffSize: string;
  transactionVolume: string;
  
  // Business Identity
  legalBusinessName: string;
  businessRegistrationNo: string;
  tinNumber: string;
  incorporationType: string;
  
  // VAT & Additional Info
  isVatRegistered: boolean;
  isBettingOrFantasy: boolean;
  
  // Documents
  tradeLicense: File | null;
  tinCertificate: File | null;
  memorandumOfAssociation: File | null;
  
  // Contact Person
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

const BusinessVerification = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    businessPhone: '',
    businessEmail: '',
    businessAddress: '',
    region: '',
    woreda: '',
    kebele: '',
    houseNo: '',
    friendlyAddress: '',
    industry: '',
    category: '',
    staffSize: '',
    transactionVolume: '',
    legalBusinessName: '',
    businessRegistrationNo: '',
    tinNumber: '',
    incorporationType: '',
    isVatRegistered: false,
    isBettingOrFantasy: false,
    tradeLicense: null,
    tinCertificate: null,
    memorandumOfAssociation: null,
    contactPersonName: '',
    contactPersonPhone: '',
    contactPersonEmail: '',
    gender: '',
    dateOfBirth: {
      day: '',
      month: '',
      year: ''
    },
    address: '',
    contactRegion: '',
    idDocumentType: '',
    idDocument: null
  });

  const steps = [
    { number: 1, title: 'Business Information', completed: currentStep > 1 },
    { number: 2, title: 'Business Contact', completed: currentStep > 2 },
    { number: 3, title: 'Documents & Verification', completed: currentStep > 3 },
    { number: 4, title: 'Contact Person', completed: currentStep > 4 }
  ];

  const updateFormData = (stepData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      console.log('Submitting form data:', formData);
      await submitBusinessVerification(formData);
      toast({
        title: "Success!",
        description: "Business verification submitted successfully. We'll review your information and get back to you soon.",
      });
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: "Error",
        description: "Failed to submit verification. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <BusinessInformationStep formData={formData} updateFormData={updateFormData} />;
      case 2:
        return <BusinessContactStep formData={formData} updateFormData={updateFormData} />;
      case 3:
        return <DocumentsVerificationStep formData={formData} updateFormData={updateFormData} />;
      case 4:
        return <ContactPersonStep formData={formData} updateFormData={updateFormData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Business Verification</h1>
          <p className="text-gray-600">Complete your business verification to start accepting payments</p>
        </div>

        {/* Progress Indicator */}
        <ProgressIndicator steps={steps} currentStep={currentStep} />

        {/* Form Card */}
        <Card className="p-8 mt-8">
          {renderCurrentStep()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="px-6"
            >
              Previous
            </Button>
            
            {currentStep < 4 ? (
              <Button
                onClick={nextStep}
                className="px-6 bg-green-600 hover:bg-green-700"
              >
                Next
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 bg-green-600 hover:bg-green-700"
              >
                {isSubmitting ? 'Submitting...' : 'Submit for Review'}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BusinessVerification;
