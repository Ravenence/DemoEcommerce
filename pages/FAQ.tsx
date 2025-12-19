import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your delivery times?",
      answer: "We offer next-day delivery for orders placed before 2 PM Monday to Friday. Standard delivery takes 2-3 business days. Weekend and bank holiday orders will be processed on the next working day."
    },
    {
      question: "Do you ship internationally?",
      answer: "Currently, we only ship within the United Kingdom. We're working on expanding our international shipping options in the near future."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most products. Items must be unused and in their original packaging. Please note that vapes, fireworks, and certain electronics may have different return restrictions for safety and hygiene reasons."
    },
    {
      question: "Are there age restrictions on certain products?",
      answer: "Yes, you must be 18 or over to purchase vapes, fireworks, and certain other products. We use age verification at checkout and may request ID upon delivery."
    },
    {
      question: "How do I track my order?",
      answer: "Once your order is dispatched, you'll receive a tracking number via email. You can use this to track your order through our courier's website, or check your order status in your account dashboard."
    },
    {
      question: "Do you offer warranty on electronics?",
      answer: "Yes, all electronics come with a manufacturer's warranty. The warranty period varies by product and manufacturer, typically ranging from 1 to 2 years. Extended warranty options may be available at checkout."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "You can modify or cancel your order within 1 hour of placement by contacting our customer service. After this time, the order may have already been processed and dispatched."
    },
    {
      question: "Are fireworks safe to use?",
      answer: "All our fireworks meet UK safety standards. Always follow the safety instructions provided with each product, maintain safe distances, and never return to a lit firework. We recommend supervising children at all times."
    },
    {
      question: "How do I contact customer service?",
      answer: "You can reach us via phone at +44 20 7946 0958 (24/7), email at support@harrisvale.co.uk, or through the contact form on our Contact page. We aim to respond within 24 hours."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
      <div className="text-[14px] text-gray-500 mb-10">
        <Link to="/" className="text-gray-500 hover:text-black">Home</Link> / <span className="text-black">FAQ</span>
      </div>

      <div className="bg-white rounded-[4px] shadow-sm border p-8 md:p-12">
        <h1 className="text-[36px] font-bold mb-4 font-inter">Frequently Asked Questions</h1>
        <p className="text-gray-600 mb-12 text-[16px]">Find answers to common questions about our products and services</p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-[4px] overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-[18px] font-medium pr-8">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700 text-[16px] leading-relaxed border-t border-gray-200 pt-4 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 rounded-[4px]">
          <h3 className="text-[20px] font-semibold mb-2">Still have questions?</h3>
          <p className="text-gray-600 mb-4">Can't find the answer you're looking for? Please contact our customer support team.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-primary text-white px-8 py-3 rounded-[4px] hover:bg-hoverButton transition font-medium"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
