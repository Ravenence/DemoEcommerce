import React from 'react';
import { Link } from 'react-router-dom';
import { Store, DollarSign, ShoppingBag, Wallet, Twitter, Instagram, Linkedin } from 'lucide-react';
import { TEAM } from '../constants';
import { Truck, Headset, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
       <div className="text-[14px] text-gray-500 mb-12">
          <Link to="/" className="text-gray-500 hover:text-black">Home</Link> / <span className="text-black">About</span>
       </div>

       {/* Story Section */}
       <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-[75px] mb-32">
          <div className="flex-1 max-w-[525px]">
             <h1 className="text-[54px] font-semibold mb-10 tracking-[0.06em] font-inter leading-none">Our Story</h1>
             <p className="text-black leading-7 mb-6 text-[16px]">
               Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region.
             </p>
             <p className="text-black leading-7 text-[16px]">
               Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from consumer.
             </p>
          </div>
          <div className="flex-1 h-[609px] w-full rounded-[4px] overflow-hidden">
             <img src="https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Two women shopping" className="w-full h-full object-cover object-top" />
          </div>
       </div>

       {/* Stats */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { icon: Store, num: '10.5k', label: 'Sallers active our site' },
            { icon: DollarSign, num: '33k', label: 'Mopnthly Produduct Sale', active: true },
            { icon: ShoppingBag, num: '45.5k', label: 'Customer active in our site' },
            { icon: Wallet, num: '25k', label: 'Anual gross sale in our site' },
          ].map((stat, i) => (
             <div key={i} className={`border border-black/30 rounded-[4px] p-8 flex flex-col items-center justify-center text-center group hover:bg-primary hover:text-white hover:border-primary transition cursor-pointer min-h-[230px] ${stat.active ? 'bg-primary text-white border-primary' : ''}`}>
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 border-[10px] ${stat.active ? 'bg-white text-black border-white/30' : 'bg-black text-white border-[#C1C1C1]/30 group-hover:bg-white group-hover:text-black group-hover:border-white/30'} transition`}>
                   <stat.icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-[32px] font-bold mb-1 font-inter">{stat.num}</h3>
                <p className="text-[16px] font-normal">{stat.label}</p>
             </div>
          ))}
       </div>

       {/* Team */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {TEAM.map(member => (
             <div key={member.id} className="group">
                <div className="bg-[#F5F5F5] rounded-[4px] h-[430px] flex items-end justify-center pt-10 overflow-hidden mb-8">
                   <img src={member.image} alt={member.name} className="h-[90%] object-contain object-bottom" />
                </div>
                <h3 className="text-[32px] font-medium mb-2 font-inter tracking-[0.04em]">{member.name}</h3>
                <p className="text-black mb-4 text-[16px]">{member.role}</p>
                <div className="flex gap-4">
                   <Twitter size={20} className="cursor-pointer hover:text-primary" />
                   <Instagram size={20} className="cursor-pointer hover:text-primary" />
                   <Linkedin size={20} className="cursor-pointer hover:text-primary" />
                </div>
             </div>
          ))}
       </div>

       {/* Services */}
       <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-[88px] text-center mb-10">
         <div className="flex flex-col items-center">
            <div className="bg-black border-[10px] border-[#C1C1C1]/30 rounded-full w-20 h-20 flex items-center justify-center text-white mb-6">
               <Truck size={28} />
            </div>
            <h3 className="font-bold uppercase text-[20px] mb-2">FREE AND FAST DELIVERY</h3>
            <p className="text-[14px] text-black">Free delivery for all orders over $140</p>
         </div>
         <div className="flex flex-col items-center">
            <div className="bg-black border-[10px] border-[#C1C1C1]/30 rounded-full w-20 h-20 flex items-center justify-center text-white mb-6">
               <Headset size={28} />
            </div>
            <h3 className="font-bold uppercase text-[20px] mb-2">24/7 CUSTOMER SERVICE</h3>
            <p className="text-[14px] text-black">Friendly 24/7 customer support</p>
         </div>
         <div className="flex flex-col items-center">
            <div className="bg-black border-[10px] border-[#C1C1C1]/30 rounded-full w-20 h-20 flex items-center justify-center text-white mb-6">
               <CheckCircle size={28} />
            </div>
            <h3 className="font-bold uppercase text-[20px] mb-2">MONEY BACK GUARANTEE</h3>
            <p className="text-[14px] text-black">We reurn money within 30 days</p>
         </div>
      </div>
    </div>
  );
};

export default About;