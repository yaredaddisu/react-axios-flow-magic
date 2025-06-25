
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { CheckCircle, FileText, Users, Shield } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: "Document Upload",
      description: "Securely upload and verify business documents"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Business Information",
      description: "Comprehensive business profile and classification"
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "Secure Verification",
      description: "Multi-step verification process for compliance"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Quick Approval",
      description: "Fast-track your business verification process"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">BusinessVerify</span>
            </div>
            <Button 
              onClick={() => navigate('/business-verification')}
              className="bg-green-600 hover:bg-green-700"
            >
              Start Verification
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Complete Business Verification
            <span className="text-green-600"> Made Simple</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your business compliance with our comprehensive verification platform. 
            Upload documents, verify information, and get approved quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate('/business-verification')}
              className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
            >
              Start Verification Process
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg border-green-600 text-green-600 hover:bg-green-50"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Verification Platform?
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need for seamless business verification
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple 4-Step Process
            </h2>
            <p className="text-gray-600 text-lg">
              Get verified in minutes with our streamlined process
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Business Info", desc: "Provide business classification and identity details" },
              { step: "2", title: "Contact Details", desc: "Share business contact and address information" },
              { step: "3", title: "Upload Documents", desc: "Submit required business documents securely" },
              { step: "4", title: "Contact Person", desc: "Designate authorized contact person details" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Verified?
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Join thousands of businesses that trust our verification platform
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/business-verification')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
          >
            Start Your Verification Now
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 BusinessVerify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
