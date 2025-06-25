
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

interface FormData {
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
}

interface BusinessInformationStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const BusinessInformationStep: React.FC<BusinessInformationStepProps> = ({ formData, updateFormData }) => {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Business Information</h2>
        <p className="text-gray-600">Tell us about your business classification and identity</p>
      </div>

      {/* Business Classification */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Business Classification</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="industry">Industry *</Label>
            <Select value={formData.industry} onValueChange={(value) => updateFormData({ industry: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select industry" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="digital-products">Digital Products</SelectItem>
                <SelectItem value="retail">Retail</SelectItem>
                <SelectItem value="services">Services</SelectItem>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="category">Category *</Label>
            <Select value={formData.category} onValueChange={(value) => updateFormData({ category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="blogs-written-content">Blogs And Written Content</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Business Size & Volume */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Business Size & Volume</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="staffSize">Staff Size *</Label>
            <Select value={formData.staffSize} onValueChange={(value) => updateFormData({ staffSize: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select staff size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-10">1-10 people</SelectItem>
                <SelectItem value="11-50">11-50 people</SelectItem>
                <SelectItem value="51-200">51-200 people</SelectItem>
                <SelectItem value="200+">200+ people</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="transactionVolume">Transaction Volume (Monthly) *</Label>
            <Select value={formData.transactionVolume} onValueChange={(value) => updateFormData({ transactionVolume: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select volume" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="50000-100000">50,000-100,000 ETB</SelectItem>
                <SelectItem value="100000-500000">100,000-500,000 ETB</SelectItem>
                <SelectItem value="500000+">500,000+ ETB</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Business Identity */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Business Identity</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="legalBusinessName">Legal Business Name *</Label>
            <Input
              id="legalBusinessName"
              value={formData.legalBusinessName}
              onChange={(e) => updateFormData({ legalBusinessName: e.target.value })}
              placeholder="Enter legal business name"
            />
          </div>

          <div>
            <Label htmlFor="businessRegistrationNo">Business Registration No *</Label>
            <Input
              id="businessRegistrationNo"
              value={formData.businessRegistrationNo}
              onChange={(e) => updateFormData({ businessRegistrationNo: e.target.value })}
              placeholder="Enter registration number"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="tinNumber">TIN Number *</Label>
            <Input
              id="tinNumber"
              value={formData.tinNumber}
              onChange={(e) => updateFormData({ tinNumber: e.target.value })}
              placeholder="Enter TIN number"
            />
          </div>

          <div>
            <Label htmlFor="incorporationType">Type of Incorporation *</Label>
            <Select value={formData.incorporationType} onValueChange={(value) => updateFormData({ incorporationType: value })}>
              <SelectTrigger>
                <SelectValue placeholder="Select incorporation type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sole-proprietorship">Sole Proprietorship</SelectItem>
                <SelectItem value="partnership">Partnership</SelectItem>
                <SelectItem value="private-limited">Private Limited Company</SelectItem>
                <SelectItem value="public-limited">Public Limited Company</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Additional Information</h3>
        
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="vatRegistered"
                checked={formData.isVatRegistered}
                onCheckedChange={(checked) => updateFormData({ isVatRegistered: !!checked })}
              />
              <Label htmlFor="vatRegistered">Are you VAT Registered?</Label>
            </div>
            
            {formData.isVatRegistered && (
              <div className="ml-6">
                <Label htmlFor="vatRegistrationNumber">VAT Registration Number *</Label>
                <Input
                  id="vatRegistrationNumber"
                  value={formData.vatRegistrationNumber || ''}
                  onChange={(e) => updateFormData({ vatRegistrationNumber: e.target.value })}
                  placeholder="Enter VAT registration number"
                />
              </div>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="bettingFantasy"
                checked={formData.isBettingOrFantasy}
                onCheckedChange={(checked) => updateFormData({ isBettingOrFantasy: !!checked })}
              />
              <Label htmlFor="bettingFantasy">Are you a Betting Or Fantasy Sports company?</Label>
            </div>
            
            {formData.isBettingOrFantasy && (
              <div className="ml-6">
                <Label htmlFor="bettingLicenseNumber">Betting License Number *</Label>
                <Input
                  id="bettingLicenseNumber"
                  value={formData.bettingLicenseNumber || ''}
                  onChange={(e) => updateFormData({ bettingLicenseNumber: e.target.value })}
                  placeholder="Enter betting license number"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformationStep;
