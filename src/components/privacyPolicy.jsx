import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6" style={{padding: "2%"}}>
      <div className="max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Privacy Policy</h1>
        <p className="text-gray-600 text-sm text-center mb-4">
          <strong>Effective Date: February 21, 2025</strong>
        </p>
        <p className="text-gray-700 mb-4">
          At <strong>දේව වන්දනා දහර</strong>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and share your data when you use our mobile application.
        </p>
        
        <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li><strong>Usage Data:</strong> We may collect information about how you interact with the app, such as the features you use and the actions you take.</li>
          <li><strong>Personal Information:</strong> We do not collect any personal information such as your name, email address, or phone number.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Provide you with a personalized experience within the app.</li>
          <li>Improve our app's functionality and user experience.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-4">3. Data Sharing and Disclosure</h2>
        <p className="text-gray-700">We do not share your personal information with third parties except as described in this Privacy Policy or with your consent.</p>

        <h2 className="text-xl font-semibold mt-4">4. Data Security</h2>
        <p className="text-gray-700">
          We take appropriate security measures to protect your personal data from unauthorized access, alteration, or disclosure. However, no method of data transmission or storage is 100% secure, so we cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-4">5. Third-Party Links</h2>
        <p className="text-gray-700">
          Our app may contain links to external websites or services that are operated by us. We are responsible for the privacy practices of those services, and we encourage you to review their privacy policies.
        </p>

        <h2 className="text-xl font-semibold mt-4">6. Changes to This Privacy Policy</h2>
        <p className="text-gray-700">
          We may update this Privacy Policy from time to time. Any changes will be posted in the app, and we will update the "Effective Date" at the top of this policy. We encourage you to review this policy periodically.
        </p>

        <h2 className="text-xl font-semibold mt-4">7. Contact Us</h2>
        <p className="text-gray-700">
          If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
          <br />
          <strong>archdiocesanliturgycolombo@gmail.com</strong>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
