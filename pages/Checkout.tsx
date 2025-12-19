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
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
       <div className="text-[14px] text-gray-500 mb-20">
          <Link to="/" className="text-gray-500 hover:text-black">Account</Link> / <Link to="/account" className="text-gray-500 hover:text-black">My Account</Link> / <Link to="/cart" className="text-gray-500 hover:text-black">Product</Link> / <Link to="/cart" className="text-gray-500 hover:text-black">View Cart</Link> / <span className="text-black">CheckOut</span>
       </div>

       <h1 className="text-[36px] font-medium tracking-[0.04em] font-inter mb-12">Billing Details</h1>

       <div className="flex flex-col lg:flex-row gap-20 lg:gap-40">
          {/* Form */}
          <div className="flex-1 max-w-[470px]">
             <InputGroup label="First Name" required />
             <InputGroup label="Company Name" />
             <InputGroup label="Street Address" required />
             <InputGroup label="Apartment, floor, etc. (optional)" />
             <InputGroup label="Town/City" required />
             <InputGroup label="Phone Number" required />
             <InputGroup label="Email Address" required />
             <div className="flex items-center gap-4 mt-6">
               <div className="w-6 h-6 bg-primary rounded-[4px] flex items-center justify-center text-white text-xs cursor-pointer">✓</div>
               <span className="text-[16px]">Save this information for faster check-out next time</span>
             </div>
          </div>

          {/* Summary */}
          <div className="flex-1 max-w-[527px] pt-8">
             <div className="flex flex-col gap-8 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between">
                     <div className="flex items-center gap-6">
                        <img src={item.image} alt={item.name} className="w-12 h-12 object-contain" />
                        <span className="text-[16px]">{item.name} x {item.quantity}</span>
                     </div>
                     <span className="text-[16px]">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
             </div>

             <div className="space-y-4 border-b border-gray-300 pb-8 mb-8">
                <div className="flex justify-between text-[16px]">
                   <span>Subtotal:</span>
                   <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-[16px]">
                   <span>Shipping:</span>
                   <span>Free</span>
                </div>
                <div className="flex justify-between text-[16px]">
                   <span>Total:</span>
                   <span>${getTotalPrice().toFixed(2)}</span>
                </div>
             </div>

             <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="w-6 h-6 border border-black rounded-full cursor-pointer"></div>
                      <span className="text-[16px]">Bank</span>
                   </div>
                   <div className="flex gap-2">
                      <div className="w-10 h-6 bg-white border border-gray-200"></div>
                      <div className="w-10 h-6 bg-white border border-gray-200"></div>
                      <div className="w-10 h-6 bg-white border border-gray-200"></div>
                      <div className="w-10 h-6 bg-white border border-gray-200"></div>
                   </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-6 h-6 border border-primary rounded-full flex items-center justify-center cursor-pointer">
                      <div className="w-3 h-3 bg-black rounded-full"></div>
                   </div>
                   <span className="text-[16px]">Cash on delivery</span>
                </div>
             </div>

             <div className="flex gap-4 mb-8">
                <input type="text" placeholder="Coupon Code" className="border border-black rounded-[4px] px-6 py-4 flex-1 outline-none text-[16px]" />
                <button className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition text-[16px] font-medium">Apply Coupon</button>
             </div>

             <button className="bg-primary text-white px-12 py-4 rounded-[4px] font-medium hover:bg-hoverButton transition text-[16px]">Place Order</button>
          </div>
       </div>
    </div>
  );
};

export default Checkout;