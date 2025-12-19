import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
      <div className="text-[14px] text-gray-500 mb-10">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link> / <span className="text-black">Terms Of Use</span>
      </div>

      <div className="bg-white rounded-[4px] shadow-sm border p-8 md:p-12">
        <h1 className="text-[36px] font-bold mb-8 font-inter">Terms Of Use</h1>
        
        <div className="space-y-6 text-[16px] leading-relaxed">
          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">1. Acceptance of Terms</h2>
            <p className="text-gray-700">
              By accessing and using the UK Ecommerce website, you accept and agree to be bound by the terms and 
              provision of this agreement. If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">2. Use License</h2>
            <p className="text-gray-700 mb-4">
              Permission is granted to temporarily download one copy of the materials on UK Ecommerce's website for 
              personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
            </p>
            <p className="text-gray-700">Under this license you may not:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4 mt-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">3. Product Information</h2>
            <p className="text-gray-700">
              We strive to ensure that product descriptions and prices are accurate. However, we do not warrant that 
              product descriptions, pricing, or other content is accurate, complete, reliable, or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">4. Orders and Pricing</h2>
            <p className="text-gray-700">
              We reserve the right to refuse or cancel any order for any reason, including limitations on quantities 
              available for purchase, inaccuracies in product or pricing information, or problems identified by our 
              fraud prevention department.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">5. Age Restrictions</h2>
            <p className="text-gray-700">
              Certain products sold on our website (including vapes, fireworks, and electronics) may have age restrictions. 
              By purchasing these products, you confirm that you meet the legal age requirements in the United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">6. Returns and Refunds</h2>
            <p className="text-gray-700">
              Please refer to our Returns Policy for detailed information about returns, exchanges, and refunds. 
              Some products may not be eligible for return due to safety or hygiene reasons.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              UK Ecommerce shall not be liable for any damages arising from the use or inability to use our website 
              or products, even if we have been notified of the possibility of such damages.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">8. Governing Law</h2>
            <p className="text-gray-700">
              These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom.
            </p>
          </section>

          <section>
            <h2 className="text-[24px] font-semibold mb-4 mt-8">9. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these Terms of Use, please contact us at support@harrisvale.co.uk
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

export default Terms;
