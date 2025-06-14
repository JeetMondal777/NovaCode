import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-grow container mx-auto py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 border border-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-novacode-purple">Terms and Conditions</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Our internships are <span className="font-semibold text-novacode-purple">100% free</span> with a small platform fee of <span className="font-semibold">₹50-70</span> only.
        </p>
        <ol className="list-decimal list-inside space-y-6 text-gray-800">
          <li>
            <span className="font-semibold">Internship Program</span>
            <p className="mt-2 text-gray-600">Novacode offers 100% free internship programs in Marketing and Web Development. The knowledge, mentorship, and training provided are completely free of charge.</p>
          </li>
          <li>
            <span className="font-semibold">Platform Fee</span>
            <p className="mt-2 text-gray-600">A nominal platform fee of ₹199-249 is charged to cover administrative costs, digital infrastructure, and certificate issuance. This one-time fee is collected upon acceptance into the program.</p>
          </li>
          <li>
            <span className="font-semibold">What's Included</span>
            <ul className="list-disc list-inside mt-2 ml-6 space-y-1 text-gray-600">
              <li>Full access to all training materials and resources</li>
              <li>Mentorship from industry professionals</li>
              <li>Hands-on experience with real projects</li>
              <li>Digital certificate upon successful completion</li>
              <li>Career guidance and placement assistance</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Payment Process</span>
            <p className="mt-2 text-gray-600">The platform fee is payable only after your application has been reviewed and accepted. You will receive payment instructions via email. We accept various payment methods including UPI, net banking, and credit/debit cards.</p>
          </li>
          <li>
            <span className="font-semibold">Refund Policy</span>
            <p className="mt-2 text-gray-600">The platform fee is non-refundable once the internship materials have been accessed. However, if you decide to withdraw before accessing any materials (within 24 hours of payment), a full refund will be processed.</p>
          </li>
          <li>
            <span className="font-semibold">Duration and Commitment</span>
            <p className="mt-2 text-gray-600">Internships typically run for 4-8 weeks. Participants are expected to commit at least 10 hours per week to complete assignments and projects.</p>
          </li>
          <li>
            <span className="font-semibold">Certification</span>
            <p className="mt-2 text-gray-600">Digital certificates will be issued to participants who successfully complete all required assignments and projects with satisfactory performance.</p>
          </li>
        </ol>
        <div className="mt-10 text-gray-700 text-base">
          By applying for our internship programs, you acknowledge that you have read, understood, and agree to these terms and conditions. Novacode reserves the right to modify these terms at any time, with notice provided to participants.
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default TermsAndConditions;