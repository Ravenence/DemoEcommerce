import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20 text-center">
       <div className="text-[14px] text-gray-500 mb-36 text-left">
          <Link to="/" className="text-gray-500 hover:text-black">Home</Link> / <span className="text-black">404 Error</span>
       </div>

       <h1 className="text-[110px] font-medium leading-none mb-10 font-inter tracking-[0.03em]">404 Not Found</h1>
       <p className="text-black mb-20 text-[16px]">Your visited page not found. You may go home page.</p>
       
       <Link to="/" className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px]">
          Back to home page
       </Link>
    </div>
  );
};

export default NotFound;