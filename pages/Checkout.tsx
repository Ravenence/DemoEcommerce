import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const InputGroup = ({ label, required = false }: { label: string, required?: boolean }) => (
  <div className="flex flex-col gap-2 mb-8">
    <label className="text-gray-400 text-[16px]">{label}<span className="text-primary">{required ? '*' : ''}</span></label>
    <input type="text" className="bg-[#F5F5F5] rounded-[4px] h-[50px] px-4 outline-none focus:ring-1 ring-primary/50" />
  </div>
);

const Checkout = () => {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="container mx-auto max-w-[1170px] px-4 sm:px-6 lg:px-4 py-8 sm:py-12 lg:py-20">
       <div className="text-[12px] sm:text-[14px] text-gray-500 mb-8 sm:mb-12 lg:mb-20 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="text-gray-500 hover:text-black">Account</Link> / <Link to="/account" className="text-gray-500 hover:text-black">My Account</Link> / <Link to="/cart" className="text-gray-500 hover:text-black">Product</Link> / <Link to="/cart" className="text-gray-500 hover:text-black">View Cart</Link> / <span className="text-black">CheckOut</span>
       </div>

       <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-medium tracking-[0.04em] font-inter mb-8 sm:mb-10 lg:mb-12">Billing Details</h1>

       <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-20 xl:gap-40">
          {/* Form */}
          <div className="flex-1 w-full lg:max-w-[470px]">
             <InputGroup label="First Name" required />
             <InputGroup label="Company Name" />
             <InputGroup label="Street Address" required />
             <InputGroup label="Apartment, floor, etc. (optional)" />
             <InputGroup label="Town/City" required />
             <InputGroup label="Phone Number" required />
             <InputGroup label="Email Address" required />
             <div className="flex items-start sm:items-center gap-3 sm:gap-4 mt-6">
               <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary rounded-[4px] flex items-center justify-center text-white text-xs cursor-pointer flex-shrink-0">✓</div>
               <span className="text-[14px] sm:text-[16px] leading-tight">Save this information for faster check-out next time</span>
             </div>
          </div>

          {/* Summary */}
          <div className="flex-1 w-full lg:max-w-[527px] pt-0 sm:pt-4 lg:pt-8">
             <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between gap-2 sm:gap-4">
                     <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 flex-1 min-w-0">
                        <img src={item.image} alt={item.name} className="w-10 h-10 sm:w-12 sm:h-12 object-contain flex-shrink-0" />
                        <span className="text-[13px] sm:text-[15px] lg:text-[16px] truncate">{item.name} x {item.quantity}</span>
                     </div>
                     <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-medium flex-shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
             </div>

             <div className="space-y-3 sm:space-y-4 border-b border-gray-300 pb-6 sm:pb-8 mb-6 sm:mb-8">
                <div className="flex justify-between text-[14px] sm:text-[15px] lg:text-[16px]">
                   <span>Subtotal:</span>
                   <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[14px] sm:text-[15px] lg:text-[16px]">
                   <span>Shipping:</span>
                   <span>Free</span>
                </div>
                <div className="flex justify-between text-[14px] sm:text-[15px] lg:text-[16px] font-medium">
                   <span>Total:</span>
                   <span>${getTotalPrice().toFixed(2)}</span>
                </div>
             </div>

             <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <div className="flex items-center justify-between gap-4">
                   <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 border border-black rounded-full cursor-pointer flex-shrink-0"></div>
                      <span className="text-[14px] sm:text-[16px]">Bank</span>
                   </div>
                   <div className="flex gap-1 sm:gap-2">
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white border border-gray-200"></div>
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white border border-gray-200"></div>
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white border border-gray-200 hidden sm:block"></div>
                      <div className="w-8 h-5 sm:w-10 sm:h-6 bg-white border border-gray-200 hidden sm:block"></div>
                   </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                   <div className="w-5 h-5 sm:w-6 sm:h-6 border border-primary rounded-full flex items-center justify-center cursor-pointer flex-shrink-0">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-black rounded-full"></div>
                   </div>
                   <span className="text-[14px] sm:text-[16px]">Cash on delivery</span>
                </div>
             </div>

             <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                <input type="text" placeholder="Coupon Code" className="border border-black rounded-[4px] px-4 sm:px-6 py-3 sm:py-4 flex-1 outline-none text-[14px] sm:text-[16px]" />
                <button className="bg-primary text-white px-6 sm:px-8 lg:px-12 py-3 sm:py-4 rounded-[4px] hover:bg-hoverButton transition text-[14px] sm:text-[16px] font-medium whitespace-nowrap">Apply Coupon</button>
             </div>

             <button className="bg-primary text-white px-8 sm:px-10 lg:px-12 py-3 sm:py-4 rounded-[4px] font-medium hover:bg-hoverButton transition text-[14px] sm:text-[16px] w-full sm:w-auto">Place Order</button>
          </div>
       </div>
    </div>
  );
};

export default Checkout;