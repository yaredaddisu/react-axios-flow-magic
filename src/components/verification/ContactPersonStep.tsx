
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface FormData {
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

interface ContactPersonStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const ContactPersonStep: React.FC<ContactPersonStepProps> = ({ formData, updateFormData }) => {
  const handleDateChange = (field: 'day' | 'month' | 'year', value: string) => {
    updateFormData({
      dateOfBirth: {
        ...formData.dateOfBirth,
        [field]: value
      }
    });
  };

  const handleFileUpload = (file: File | null) => {
    updateFormData({ idDocument: file });
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
  const years = Array.from({ length: 100 }, (_, i) => (2024 - i).toString());

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Contact Person</h2>
        <p className="text-gray-600">Dedicated Contact Person (A person who has authority to do business on behalf of the organization.)</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="contactPersonName">Contact Person Name *</Label>
            <Input
              id="contactPersonName"
              value={formData.contactPersonName}
              onChange={(e) => updateFormData({ contactPersonName: e.target.value })}
              placeholder="Enter full name"
            />
          </div>

          <div>
            <Label htmlFor="contactPersonPhone">Contact Person Phone *</Label>
            <Input
              id="contactPersonPhone"
              type="tel"
              value={formData.contactPersonPhone}
              onChange={(e) => updateFormData({ contactPersonPhone: e.target.value })}
              placeholder="Enter phone number"
            />
          </div>

          <div>
            <Label htmlFor="contactPersonEmail">Contact Person Email *</Label>
            <Input
              id="contactPersonEmail"
              type="email"
              value={formData.contactPersonEmail}
              onChange={(e) => updateFormData({ contactPersonEmail: e.target.value })}
              placeholder="Enter email address"
            />
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="gender">Gender *</Label>
            <Select value={formData.gender} onValueChange={(value) => updateFormData({ gender: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Date of Birth *</Label>
            <div className="grid grid-cols-3 gap-2">
              <Select value={formData.dateOfBirth.month} onValueChange={(value) => handleDateChange('month', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month, index) => (
                    <SelectItem key={month} value={(index + 1).toString()}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={formData.dateOfBirth.day} onValueChange={(value) => handleDateChange('day', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {days.map(day => (
                    <SelectItem key={day} value={day}>
                      {day}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={formData.dateOfBirth.year} onValueChange={(value) => handleDateChange('year', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Address Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Address Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="address">Address *</Label>
            <Input
              id="address"
              value={formData.address}
              onChange={(e) => updateFormData({ address: e.target.value })}
              placeholder="Your Address in full format please"
            />
          </div>

          <div>
            <Label htmlFor="contactRegion">Region *</Label>
            <Select value={formData.contactRegion} onValueChange={(value) => updateFormData({ contactRegion: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="addis-ababa">Addis Ababa</SelectItem>
                <SelectItem value="oromia">Oromia</SelectItem>
                <SelectItem value="amhara">Amhara</SelectItem>
                <SelectItem value="tigray">Tigray</SelectItem>
                <SelectItem value="snnp">SNNP</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* ID Document Upload */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">ID Document Upload</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="idDocumentType">ID Document Type *</Label>
            <Select value={formData.idDocumentType} onValueChange={(value) => updateFormData({ idDocumentType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Please select document to verify your identity with" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="national-id">National ID</SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="driving-license">Driving License</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Contact Person ID *</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-green-400 transition-colors">
              <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
              {formData.idDocument && (
                <p className="text-sm text-green-600 mb-2">
                  ✓ {formData.idDocument.name}
                </p>
              )}
              <input
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                className="hidden"
                id="id-document-upload"
                onChange={(e) => {
                  const selectedFile = e.target.files?.[0] || null;
                  handleFileUpload(selectedFile);
                }}
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => {
                  const input = document.getElementById('id-document-upload') as HTMLInputElement;
                  input?.click();
                }}
                className="hover:bg-green-50 hover:border-green-400"
              >
                Upload File
              </Button>
              <p className="text-xs text-gray-500 mt-1">
                The document must show exactly the legal name of person. Avoid nicknames.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPersonStep;
