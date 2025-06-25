
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface FormData {
  businessPhone: string;
  businessEmail: string;
  businessAddress: string;
  region: string;
  woreda: string;
  kebele: string;
  houseNo: string;
  friendlyAddress: string;
}

interface BusinessContactStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const BusinessContactStep: React.FC<BusinessContactStepProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Business Contact</h2>
        <p className="text-gray-600">Provide your business contact information and address</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="businessPhone">Business Phone *</Label>
            <Input
              id="businessPhone"
              type="tel"
              value={formData.businessPhone}
              onChange={(e) => updateFormData({ businessPhone: e.target.value })}
              placeholder="Enter business phone"
            />
          </div>

          <div>
            <Label htmlFor="businessEmail">Business Email *</Label>
            <Input
              id="businessEmail"
              type="email"
              value={formData.businessEmail}
              onChange={(e) => updateFormData({ businessEmail: e.target.value })}
              placeholder="Enter business email"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="businessAddress">Business Address *</Label>
          <Input
            id="businessAddress"
            value={formData.businessAddress}
            onChange={(e) => updateFormData({ businessAddress: e.target.value })}
            placeholder="Enter full business address"
          />
        </div>
      </div>

      {/* Address Details */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Address Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="region">Region *</Label>
            <Select value={formData.region} onValueChange={(value) => updateFormData({ region: value })}>
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

          <div>
            <Label htmlFor="woreda">Woreda *</Label>
            <Input
              id="woreda"
              value={formData.woreda}
              onChange={(e) => updateFormData({ woreda: e.target.value })}
              placeholder="Enter woreda"
            />
          </div>

          <div>
            <Label htmlFor="kebele">Kebele</Label>
            <Input
              id="kebele"
              value={formData.kebele}
              onChange={(e) => updateFormData({ kebele: e.target.value })}
              placeholder="Enter kebele"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="houseNo">House No *</Label>
            <Input
              id="houseNo"
              value={formData.houseNo}
              onChange={(e) => updateFormData({ houseNo: e.target.value })}
              placeholder="Enter house number"
            />
          </div>

          <div>
            <Label htmlFor="friendlyAddress">Friendly Business Address *</Label>
            <Input
              id="friendlyAddress"
              value={formData.friendlyAddress}
              onChange={(e) => updateFormData({ friendlyAddress: e.target.value })}
              placeholder="Enter friendly address"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessContactStep;
