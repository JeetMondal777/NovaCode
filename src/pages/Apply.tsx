
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Apply = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  
  const handleApply = () => {
    if (agreedToTerms) {
      window.open("https://docs.google.com/forms/d/e/1FAIpQLScb0ltqNx3bhi-7wYfnxIw8Na5qdlqoMXpiGxG0Nk-gm1t82g/viewform", "_blank");
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 py-16">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Apply Now</h2>
          <p className="text-center text-gray-600 mb-6">
            Click below to fill out our official application form:
          </p>
          
          <div className="flex items-center space-x-2 mb-8">
            <Checkbox 
              id="terms" 
              checked={agreedToTerms} 
              onCheckedChange={(checked) => setAgreedToTerms(!!checked)} 
            />
            <label 
              htmlFor="terms" 
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the Terms and Conditions
            </label>
          </div>
          
          <Button 
            onClick={handleApply} 
            disabled={!agreedToTerms}
            className="w-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.218 19h-1.782v-1.542h1.782v1.542zm-0.261-2.465-0.522-0.174c-0.403-0.13-0.778-0.298-0.778-0.917 0-0.478 0.31-0.786 0.809-0.927 0.266-0.075 0.524-0.093 0.778-0.06v2.078zm0.531-2.068v-2.066c0.46-0.084 0.908 0.068 1.298 0.244 0.537 0.243 0.863 0.583 0.863 1.213 0 0.717-0.383 1.006-0.863 1.223-0.311 0.141-0.628 0.258-1.298 0.174v-0.788zm1.878-8.467h-5.736v10.5h5.736v-10.5z"/>
            </svg>
            Apply with Google Forms
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-6">
            For any questions, please contact us at: internship@novacode.live
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mt-16 px-6">
          <h3 className="text-2xl font-semibold mb-6">Why join our internship program?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Gain Real Experience</h4>
              <p className="text-gray-600">Work on actual projects that will build your portfolio and resume.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Learn from Experts</h4>
              <p className="text-gray-600">Get mentorship from industry professionals who know what it takes to succeed.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-semibold mb-2">Launch Your Career</h4>
              <p className="text-gray-600">Access job placement services after successful completion of the program.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-novacode-purple">
            <p className="italic text-gray-700">
              "Applying to Novacode was one of the best decisions I made for my career. The experience 
              and connections I gained were invaluable."
            </p>
            <p className="mt-4 font-medium">- Former Intern, now employed at a Fortune 500 company</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Apply;
