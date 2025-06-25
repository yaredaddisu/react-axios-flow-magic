
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface Step {
  number: number;
  title: string;
  completed: boolean;
}

interface ProgressIndicatorProps {
  steps: Step[];
  currentStep: number;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-col items-center">
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold
                ${step.completed 
                  ? 'bg-green-600 text-white' 
                  : step.number === currentStep 
                    ? 'bg-green-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }
              `}>
                {step.completed ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  step.number
                )}
              </div>
              <span className={`
                mt-2 text-sm font-medium text-center max-w-24
                ${step.number === currentStep ? 'text-green-600' : 'text-gray-500'}
              `}>
                {step.title}
              </span>
            </div>
            
            {index < steps.length - 1 && (
              <div className={`
                flex-1 h-1 mx-4 rounded
                ${step.completed ? 'bg-green-600' : 'bg-gray-200'}
              `} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;
