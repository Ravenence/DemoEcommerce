import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
      <div className="text-[14px] text-gray-500 mb-10">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link> / <span className="text-black">Privacy Policy</span>
      </div>

      <div className="bg-white rounded-[4px] shadow-sm border p-8 md:p-12">
        <h1 className="text-[36px] font-bold mb-8 font-inter">Privacy Policy</h1>
        
        <div className="space-y-6 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">1. Information We Collect</h2>
            <p className="text-gray-700">
              We collect information you provide directly to us, such as when you create an account, make a purchase, 
              or contact us for support. This may include your name, email address, postal address, phone number, 
              and payment information.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Send you order confirmations and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Send you promotional communications (with your consent)</li>
              <li>Improve our website and customer service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">3. Information Sharing</h2>
            <p className="text-gray-700">
              We do not sell, trade, or rent your personal information to third parties. We may share your information 
              with trusted service providers who assist us in operating our website, conducting our business, or servicing you.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">4. Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate security measures to protect your personal information. However, no method of 
              transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">5. Cookies</h2>
            <p className="text-gray-700">
              We use cookies to enhance your experience on our website. You can choose to disable cookies through 
              your browser settings, but this may affect some functionality of our site.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">6. Your Rights</h2>
            <p className="text-gray-700">
              You have the right to access, update, or delete your personal information at any time. You may also 
              opt out of receiving promotional communications from us.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">7. Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact us at privacy@harrisvale.co.uk
            </p>
          </section>

          <p className="text-gray-500 text-[14px] mt-12">
            Last updated: December 19, 2025
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
