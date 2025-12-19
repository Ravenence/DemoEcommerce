import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { X, ChevronUp, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto max-w-[1170px] px-4 py-20">
        <div className="text-[14px] text-gray-500 mb-20">
          <Link to="/" className="hover:text-black">Home</Link> / <span className="text-black">Cart</span>
        </div>
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some products to get started!</p>
          <Link to="/" className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px] inline-block">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
       <div className="text-[14px] text-gray-500 mb-20">
          <Link to="/" className="hover:text-black">Home</Link> / <span className="text-black">Cart</span>
       </div>

       {/* Table Header - Hidden on mobile */}
       <div className="hidden md:grid grid-cols-4 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] p-6 mb-10 font-normal text-[16px]">
          <div>Product</div>
          <div className="text-center">Price</div>
          <div className="text-center">Quantity</div>
          <div className="text-right">Subtotal</div>
       </div>

       {/* Cart Items */}
       <div className="space-y-6 md:space-y-10 mb-10">
          {cartItems.map((item) => (
             <div key={item.id} className="grid grid-cols-1 md:grid-cols-4 items-center bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] p-4 md:p-6 group gap-4 md:gap-0">
                <div className="flex items-center gap-4 relative">
                   <button 
                     onClick={() => removeFromCart(item.id)}
                     className="absolute -left-2 -top-2 md:-left-3 md:-top-3 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition shadow-md z-10"
                   >
                      <X size={12} />
                   </button>
                   <img src={item.image} alt={item.name} className="w-14 h-14 md:w-14 md:h-14 object-contain" />
                   <span className="text-[14px] md:text-[16px]">{item.name}</span>
                </div>
                <div className="flex justify-between md:block">
                  <span className="md:hidden font-medium">Price:</span>
                  <span className="text-center text-[14px] md:text-[16px] md:block">£{item.price}</span>
                </div>
                <div className="flex justify-between md:justify-center items-center">
                    <span className="md:hidden font-medium">Quantity:</span>
                    <div className="border border-gray-400 rounded-[4px] w-[72px] px-3 py-2 flex items-center justify-between">
                       <span className="text-[16px]">{String(item.quantity).padStart(2, '0')}</span>
                       <div className="flex flex-col -mr-1">
                          <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <ChevronUp size={16} className="cursor-pointer hover:text-primary" />
                          </button>
                          <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <ChevronDown size={16} className="cursor-pointer hover:text-primary" />
                          </button>
                       </div>
                    </div>
                </div>
                <div className="flex justify-between md:block">
                  <span className="md:hidden font-medium">Subtotal:</span>
                  <span className="text-right text-[14px] md:text-[16px] font-medium md:block">£{(item.price * item.quantity).toFixed(2)}</span>
                </div>
             </div>
          ))}
       </div>

       <div className="flex flex-col md:flex-row justify-between mb-20 gap-4">
          <Link to="/" className="border border-black/50 px-8 md:px-12 py-4 rounded-[4px] font-medium hover:bg-gray-50 text-[16px] text-center">Return To Shop</Link>
          <button 
            onClick={() => {
              if (window.confirm('Are you sure you want to clear your cart?')) {
                clearCart();
              }
            }}
            className="border border-red-500 text-red-500 px-8 md:px-12 py-4 rounded-[4px] font-medium hover:bg-red-50 text-[16px]"
          >
            Clear Cart
          </button>
       </div>

       <div className="flex flex-col lg:flex-row justify-between gap-10 items-start">
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
             <input 
               type="text" 
               placeholder="Coupon Code" 
               value={couponCode}
               onChange={(e) => setCouponCode(e.target.value)}
               className="border border-black rounded-[4px] px-6 w-full sm:w-[300px] h-[56px] outline-none placeholder:text-gray-400" 
             />
             <button className="bg-primary text-white px-8 md:px-12 h-[56px] rounded-[4px] hover:bg-hoverButton transition text-[16px] font-medium">Apply Coupon</button>
          </div>

          <div className="border-[1.5px] border-black rounded-[4px] p-6 md:p-8 w-full lg:w-[470px]">
             <h3 className="font-medium text-[20px] mb-6">Cart Total</h3>
             <div className="flex justify-between border-b border-gray-300 pb-4 mb-4 text-[16px]">
                <span>Subtotal:</span>
                <span>£{getTotalPrice().toFixed(2)}</span>
             </div>
             <div className="flex justify-between border-b border-gray-300 pb-4 mb-4 text-[16px]">
                <span>Shipping:</span>
                <span>Free</span>
             </div>
             <div className="flex justify-between mb-8 text-[16px] font-medium">
                <span>Total:</span>
                <span>£{getTotalPrice().toFixed(2)}</span>
             </div>
             <div className="flex justify-center">
                <button 
                  onClick={() => navigate('/checkout')}
                  className="block text-center bg-primary text-white py-4 px-12 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px] w-full"
                >
                    Proceed to checkout
                </button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Cart;