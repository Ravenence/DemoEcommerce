import React, { useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingCart, User, Menu, X, Send, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { getTotalItems, wishlistItems } = useCart();

  const navLinkClass = (path: string) => 
    `hover:underline underline-offset-4 decoration-gray-400 ${location.pathname === path ? 'underline' : ''}`;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-black text-white text-[12px] sm:text-[14px] py-3">
        <div className="container mx-auto px-4 max-w-[1170px] flex justify-between items-center h-full">
          <div className="flex-1 flex justify-center items-center gap-2">
            <span className="opacity-90 hidden sm:inline">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <span className="opacity-90 sm:hidden">Summer Sale - OFF 50%!</span>
            <span className="font-semibold underline cursor-pointer ml-2">ShopNow</span>
          </div>
          <div className="hidden md:flex items-center gap-2 cursor-pointer">
            English <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="border-b pt-6 pb-4 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 max-w-[1170px] flex justify-between items-center">
          <Link to="/" className="text-xl sm:text-2xl font-bold tracking-[0.03em] font-inter">HARRIS VALE</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12 text-black text-[16px]">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            <Link to="/contact" className={navLinkClass('/contact')}>Contact</Link>
            <Link to="/about" className={navLinkClass('/about')}>About</Link>
            <Link to="/signup" className={navLinkClass('/signup')}>Sign Up</Link>
          </div>

          {/* Search & Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex bg-[#F5F5F5] px-4 py-2 rounded-[4px] items-center w-[200px] xl:w-[243px]">
              <input 
                type="text" 
                placeholder="What are you looking for?" 
                className="bg-transparent text-[12px] w-full outline-none placeholder:text-text2 opacity-70"
              />
              <Search className="w-5 h-5 text-black cursor-pointer opacity-70" />
            </div>
            <div className="flex items-center gap-3 sm:gap-4">
               <Link to="/wishlist" className="relative">
                 <Heart className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-primary transition-colors" />
                 {wishlistItems.length > 0 && (
                   <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                     {wishlistItems.length}
                   </span>
                 )}
               </Link>
               <Link to="/cart" className="relative">
                 <ShoppingCart className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer hover:text-primary transition-colors" />
                 {getTotalItems() > 0 && (
                   <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                     {getTotalItems()}
                   </span>
                 )}
               </Link>
            </div>
            
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t p-4 flex flex-col space-y-4 animate-fade-in">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition">Home</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition">Contact</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition">About</Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition">Sign Up</Link>
            <Link to="/account" onClick={() => setIsMenuOpen(false)} className="py-2 hover:text-primary transition">Account</Link>
            <div className="flex bg-[#F5F5F5] px-4 py-2 rounded-[4px] items-center">
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-transparent text-[14px] w-full outline-none"
              />
              <Search className="w-5 h-5 text-black cursor-pointer" />
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-6 font-poppins">
      <div className="container mx-auto px-4 max-w-[1170px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Column 1: Exclusive */}
        <div className="space-y-6">
          <h3 className="text-[24px] font-bold font-inter tracking-[0.03em]">Exclusive</h3>
          <p className="text-[20px] font-medium">Subscribe</p>
          <p className="text-[16px]">Get 10% off your first order</p>
          <div className="border border-white rounded-[4px] px-4 py-3 flex items-center w-full max-w-[217px] group focus-within:border-primary transition-colors">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent outline-none flex-1 text-[16px] placeholder:text-gray-500 text-white"
            />
            <Send className="w-5 h-5 text-white cursor-pointer hover:text-primary transition" />
          </div>
        </div>

        {/* Column 2: Support */}
        <div className="space-y-6">
          <h3 className="text-[20px] font-medium">Support</h3>
          <p className="text-[16px] leading-relaxed">123 High Street, London,<br/>United Kingdom, SW1A 1AA</p>
          <p className="text-[16px]">support@harrisvale.co.uk</p>
          <p className="text-[16px]">+44 20 7946 0958</p>
        </div>

        {/* Column 3: Account */}
        <div className="space-y-6">
          <h3 className="text-[20px] font-medium">Account</h3>
          <div className="flex flex-col space-y-4 text-[16px]">
            <Link to="/account" className="hover:text-gray-300 transition">My Account</Link>
            <Link to="/signup" className="hover:text-gray-300 transition">Login / Register</Link>
            <Link to="/cart" className="hover:text-gray-300 transition">Cart</Link>
            <Link to="/wishlist" className="hover:text-gray-300 transition">Wishlist</Link>
            <Link to="/" className="hover:text-gray-300 transition">Shop</Link>
          </div>
        </div>

        {/* Column 4: Quick Link */}
        <div className="space-y-6">
          <h3 className="text-[20px] font-medium">Quick Link</h3>
          <div className="flex flex-col space-y-4 text-[16px]">
            <Link to="/privacy" className="hover:text-gray-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gray-300 transition">Terms Of Use</Link>
            <Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link>
            <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-[#3D3D3D] text-[16px] border-t border-[#141414] pt-4 font-normal">
        &copy; Copyright Plabon 2025. All right reserved
      </div>
    </footer>
  );
};

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
