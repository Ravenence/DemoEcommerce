import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
       <div className="text-[14px] text-gray-500 mb-20">
          <Link to="/" className="text-gray-500 hover:text-black">Home</Link> / <span className="text-black">Contact</span>
       </div>

       <div className="flex flex-col lg:flex-row gap-8">
          {/* Info Side */}
          <div className="w-full lg:w-[340px] shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] border-white border p-10 rounded-[4px] bg-white">
             <div className="mb-8 border-b border-black pb-8">
                <div className="flex items-center gap-4 mb-6">
                   <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Phone size={20} />
                   </div>
                   <h3 className="font-medium text-[16px]">Call To Us</h3>
                </div>
                <p className="text-[14px] text-black mb-4">We are available 24/7, 7 days a week.</p>
                <p className="text-[14px] text-black">Phone: +44 20 7946 0958</p>
             </div>
             
             <div>
                <div className="flex items-center gap-4 mb-6">
                   <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center">
                      <Mail size={20} />
                   </div>
                   <h3 className="font-medium text-[16px]">Write To US</h3>
                </div>
                <p className="text-[14px] text-black mb-4">Fill out our form and we will contact you within 24 hours.</p>
                <p className="text-[14px] text-black mb-2">Emails: customer@harrisvale.co.uk</p>
                <p className="text-[14px] text-black">Emails: support@harrisvale.co.uk</p>
             </div>
          </div>

          {/* Form Side */}
          <div className="flex-1 shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] border-white border p-10 rounded-[4px] bg-white">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <input type="text" placeholder="Your Name *" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none text-[16px]" />
                <input type="email" placeholder="Your Email *" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none text-[16px]" />
                <input type="text" placeholder="Your Phone *" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none text-[16px]" />
             </div>
             <textarea placeholder="Your Massage" className="w-full bg-[#F5F5F5] px-4 py-4 rounded-[4px] outline-none h-[207px] mb-8 resize-none text-[16px]"></textarea>
             <div className="flex justify-end">
                <button className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px]">Send Massage</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Contact;