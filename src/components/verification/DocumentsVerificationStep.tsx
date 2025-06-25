
import React from 'react';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload } from 'lucide-react';

interface FormData {
  tradeLicense: File | null;
  tinCertificate: File | null;
  memorandumOfAssociation: File | null;
}

interface DocumentsVerificationStepProps {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
}

const DocumentsVerificationStep: React.FC<DocumentsVerificationStepProps> = ({ formData, updateFormData }) => {
  const handleFileUpload = (field: keyof FormData, file: File | null) => {
    updateFormData({ [field]: file });
  };

  const FileUploadButton = ({ 
    label, 
    file, 
    onChange, 
    required = false 
  }: {
    label: string;
    file: File | null;
    onChange: (file: File | null) => void;
    required?: boolean;
  }) => (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-green-400 transition-colors">
      <Upload className="mx-auto h-12 w-12 text-gray-400 mb-4" />
      <div className="mb-4">
        <Label className="text-sm font-medium text-gray-700">
          {label} {required && '*'}
        </Label>
        {file && (
          <p className="text-sm text-green-600 mt-1">
            ✓ {file.name}
          </p>
        )}
      </div>
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        className="hidden"
        id={`file-${label.replace(/\s+/g, '-').toLowerCase()}`}
        onChange={(e) => {
          const selectedFile = e.target.files?.[0] || null;
          onChange(selectedFile);
        }}
      />
      <Button
        type="button"
        variant="outline"
        onClick={() => {
          const input = document.getElementById(`file-${label.replace(/\s+/g, '-').toLowerCase()}`) as HTMLInputElement;
          input?.click();
        }}
        className="hover:bg-green-50 hover:border-green-400"
      >
        {file ? 'Change File' : 'Upload File'}
      </Button>
      <p className="text-xs text-gray-500 mt-2">
        PDF, JPG, PNG up to 10MB
      </p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Documents & Verification</h2>
        <p className="text-gray-600">Upload the required documents for business verification</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Required Documents</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUploadButton
            label="Trade License"
            file={formData.tradeLicense}
            onChange={(file) => handleFileUpload('tradeLicense', file)}
            required
          />

          <FileUploadButton
            label="TIN Certificate"
            file={formData.tinCertificate}
            onChange={(file) => handleFileUpload('tinCertificate', file)}
            required
          />
        </div>

        <div className="max-w-md">
          <FileUploadButton
            label="Memorandum of Association"
            file={formData.memorandumOfAssociation}
            onChange={(file) => handleFileUpload('memorandumOfAssociation', file)}
            required
          />
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-medium text-blue-900 mb-2">Document Requirements:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• All documents must be clear and legible</li>
          <li>• Documents should be in PDF, JPG, or PNG format</li>
          <li>• Maximum file size is 10MB per document</li>
          <li>• Ensure all information is visible and matches your form entries</li>
        </ul>
      </div>
    </div>
  );
};

export default DocumentsVerificationStep;
