import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-grow container mx-auto py-16 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-10 border border-gray-100">
        <h1 className="text-4xl font-bold text-center mb-8 text-novacode-purple">Privacy Policy</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Effective Date: May 21, 2025
        </p>
        <div className="space-y-6 text-gray-800">
          <p>
            At NovaCode (www.novacode.live), your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website and services.
          </p>
          
          <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
            <li><span className="font-medium">Personal Information:</span> Name, email address, phone number, educational background, and other details you provide through registration or contact forms.</li>
            <li><span className="font-medium">Internship-Related Information:</span> Project submissions, performance data, feedback, and certificate eligibility status.</li>
            <li><span className="font-medium">Technical Information:</span> IP address, browser type, device information, and interaction data such as page views and session duration.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
            <li>Provide access to internships and manage participation in our programs.</li>
            <li>Send certificates, updates, feedback, and important notifications.</li>
            <li>Improve our website functionality and user experience.</li>
            <li>Respond to questions, feedback, or support requests.</li>
            <li>Share promotional or informational emails related to NovaCode (users can unsubscribe anytime).</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6">3. Data Sharing and Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information. We may share your data only with:</p>
          <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
            <li>Trusted third-party services for hosting, analytics, and communication (e.g., domain/email providers).</li>
            <li>Legal authorities if required by law or to protect our rights and users.</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-6">4. Cookies</h2>
          <p>Our website uses cookies to improve your experience, analyze usage patterns, and enhance performance. You can choose to disable cookies in your browser settings if preferred.</p>
          
          <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
          <p>As a user, you have the right to:</p>
          <ul className="list-disc list-inside ml-6 space-y-2 mt-2">
            <li>Request access to or correction of your personal information.</li>
            <li>Request deletion of your data from our records.</li>
            <li>Opt out of receiving marketing or promotional communications.</li>
          </ul>
          <p className="mt-2">To exercise any of these rights, please contact us at <a href="mailto:internships@novacode.live" className="text-novacode-purple hover:underline">internships@novacode.live</a>.</p>
          
          <h2 className="text-xl font-semibold mt-6">6. Data Security</h2>
          <p>We take appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, or misuse. Our systems are regularly monitored and updated to ensure security.</p>
          
          <h2 className="text-xl font-semibold mt-6">7. Changes to This Policy</h2>
          <p>NovaCode may update this Privacy Policy occasionally. Any changes will be posted on this page along with the updated effective date. We encourage you to review this policy periodically.</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;