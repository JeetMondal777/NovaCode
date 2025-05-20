
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Check } from "lucide-react";

const ApplySection = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const handleApply = () => {
    if (agreedToTerms) {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScb0ltqNx3bhi-7wYfnxIw8Na5qdlqoMXpiGxG0Nk-gm1t82g/viewform", "_blank");
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      <div className="absolute top-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-novacode-lightpurple/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-novacode-purple/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
        >
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-novacode-purple to-novacode-lightpurple flex items-center justify-center mx-auto mb-6 shadow-md">
            <Check className="text-white w-8 h-8" />
          </div>
          
          <h2 className="text-2xl font-heading font-bold text-center mb-3">Apply Now</h2>
          
          <p className="text-center text-gray-600 mb-8">
            Take the first step towards your new career
          </p>
          
          <div className="flex items-start space-x-3 mb-8 bg-gray-50 p-4 rounded-lg">
            <Checkbox 
              id="terms" 
              checked={agreedToTerms} 
              onCheckedChange={(checked) => setAgreedToTerms(!!checked)} 
              className="mt-1"
            />
            <div>
              <label 
                htmlFor="terms" 
                className="font-medium text-gray-800 block mb-1"
              >
                Terms and Conditions
              </label>
              <p className="text-sm text-gray-600">
                By checking this box, I agree to Novacode's Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
          
          <Button 
            onClick={handleApply} 
            disabled={!agreedToTerms}
            className="w-full bg-gradient-to-r from-novacode-purple to-novacode-darkpurple hover:from-novacode-darkpurple hover:to-novacode-purple text-white flex items-center justify-center gap-2 py-6 shadow-lg transition-all duration-300"
          >
            <span className="text-base">Apply with Google Forms</span>
            <ExternalLink className="h-5 w-5" />
          </Button>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Have questions about the application?
            </p>
            <a href="mailto:internship@novacode.live" className="text-novacode-purple hover:underline font-medium">
              internship@novacode.live
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ApplySection;
