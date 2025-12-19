import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
       <div className="flex justify-between items-center mb-20 text-[14px]">
          <div className="text-gray-500">
             <Link to="/" className="hover:text-black">Home</Link> / <span className="text-black">My Account</span>
          </div>
          <div>Welcome! <span className="text-primary">Md Rimel</span></div>
       </div>

       <div className="flex flex-col md:flex-row gap-24">
          {/* Sidebar */}
          <div className="w-full md:w-[250px] space-y-6">
             <div>
                <h3 className="font-medium text-[16px] mb-4">Manage My Account</h3>
                <ul className="space-y-2 text-gray-500 ml-9 text-[16px]">
                   <li className="text-primary cursor-pointer">My Profile</li>
                   <li className="hover:text-black cursor-pointer">Address Book</li>
                   <li className="hover:text-black cursor-pointer">My Payment Options</li>
                </ul>
             </div>
             <div>
                <h3 className="font-medium text-[16px] mb-4">My Orders</h3>
                <ul className="space-y-2 text-gray-500 ml-9 text-[16px]">
                   <li className="hover:text-black cursor-pointer">My Returns</li>
                   <li className="hover:text-black cursor-pointer">My Cancellations</li>
                </ul>
             </div>
             <div>
                <h3 className="font-bold text-[16px] cursor-pointer">My WishList</h3>
             </div>
          </div>

          {/* Form */}
          <div className="flex-1 bg-white shadow-[0px_1px_13px_0px_rgba(0,0,0,0.05)] rounded-[4px] p-10 md:p-20">
             <h2 className="text-[20px] font-medium text-primary mb-6">Edit Your Profile</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
                <div className="flex flex-col gap-2">
                   <label className="text-[16px]">First Name</label>
                   <input type="text" placeholder="Md" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none placeholder:text-black" />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[16px]">Last Name</label>
                   <input type="text" placeholder="Rimel" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none placeholder:text-black" />
                </div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-6">
                <div className="flex flex-col gap-2">
                   <label className="text-[16px]">Email</label>
                   <input type="email" placeholder="rimel111@gmail.com" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none placeholder:text-black" />
                </div>
                <div className="flex flex-col gap-2">
                   <label className="text-[16px]">Address</label>
                   <input type="text" placeholder="Kingston, 5236, United State" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none placeholder:text-black" />
                </div>
             </div>

             <div className="space-y-4 mb-8">
                <label className="text-[16px] block">Password Changes</label>
                <input type="password" placeholder="Current Password" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none w-full placeholder:text-gray-500" />
                <input type="password" placeholder="New Password" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none w-full placeholder:text-gray-500" />
                <input type="password" placeholder="Confirm New Password" className="bg-[#F5F5F5] px-4 h-[50px] rounded-[4px] outline-none w-full placeholder:text-gray-500" />
             </div>

             <div className="flex justify-end gap-8 items-center mt-10">
                <button className="text-black hover:text-primary text-[16px]">Cancel</button>
                <button className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition text-[16px] font-medium">Save Changes</button>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Account;