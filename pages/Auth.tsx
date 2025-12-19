import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const AuthLayout = () => {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="container mx-auto max-w-[1305px] py-14 flex flex-col md:flex-row items-center gap-10 lg:gap-32 mb-10">
       <div className="w-full md:w-[805px] bg-[#CBE4E8] rounded-r-[4px] overflow-hidden">
          <img src="https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Shopping Cart Phone" className="object-cover w-full h-[700px] mix-blend-multiply opacity-90" />
       </div>
       
       <div className="w-full md:w-[371px] px-4 md:px-0">
          <h1 className="text-[36px] font-medium tracking-[0.04em] font-inter mb-6">
             {isLogin ? 'Log in to Exclusive' : 'Create an account'}
          </h1>
          <p className="text-[16px] text-black mb-12">Enter your details below</p>
          
          <form className="flex flex-col gap-10">
             {!isLogin && (
                <input type="text" placeholder="Name" className="border-b border-gray-400 py-2 outline-none text-[16px] placeholder:text-gray-500" />
             )}
             <input type="text" placeholder="Email or Phone Number" className="border-b border-gray-400 py-2 outline-none text-[16px] placeholder:text-gray-500" />
             <input type="password" placeholder="Password" className="border-b border-gray-400 py-2 outline-none text-[16px] placeholder:text-gray-500" />
             
             <div className="flex flex-col gap-4 mt-2">
                <button className="bg-primary text-white h-[56px] rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px]">
                   {isLogin ? 'Log In' : 'Create Account'}
                </button>
                
                {!isLogin && (
                   <button type="button" className="border border-gray-400 h-[56px] rounded-[4px] flex items-center justify-center gap-4 hover:bg-gray-50 transition">
                      <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-6 h-6" alt="Google" />
                      <span className="text-[16px] text-black">Sign up with Google</span>
                   </button>
                )}
                
                <div className="flex justify-between items-center mt-4">
                   {isLogin ? (
                      <span className="text-primary text-[16px] cursor-pointer hover:underline">Forget Password?</span>
                   ) : (
                      <div className="text-gray-600 text-[16px]">
                         Already have account? <Link to="/login" className="text-gray-800 font-medium border-b border-gray-500 ml-2 pb-0.5">Log in</Link>
                      </div>
                   )}
                </div>
             </div>
          </form>
       </div>
    </div>
  );
};