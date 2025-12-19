import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Smartphone, Zap, Sparkles, Monitor, ChevronRight } from 'lucide-react';
import { CATEGORIES, FLASH_SALES, BEST_SELLING, EXPLORE_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { Truck, Headset, CheckCircle } from 'lucide-react';

const FeaturedBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        // Countdown logic
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Reset to initial values when countdown reaches 0
                days = 5;
                hours = 23;
                minutes = 59;
                seconds = 35;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <section className="container mx-auto max-w-[1170px] px-4 mb-[70px]">
      <div className="bg-gradient-to-r from-primary to-hoverButton text-white px-6 md:px-14 py-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden min-h-[500px] rounded-[4px]">
        <div className="z-10 w-full md:w-[45%] lg:w-[40%] pt-8 text-center md:text-left">
          <span className="text-[#FFD700] font-semibold text-[16px] mb-8 block">Featured Products</span>
          <h2 className="text-[32px] md:text-[48px] font-semibold leading-tight mb-8 font-inter tracking-[0.04em]">Premium Phones<br/>& Accessories</h2>
          <div className="flex gap-6 mb-10 justify-center md:justify-start">
            {[
              {val: formatTime(timeLeft.hours), lab:'Hours'}, 
              {val: formatTime(timeLeft.days), lab:'Days'}, 
              {val: formatTime(timeLeft.minutes), lab:'Minutes'}, 
              {val: formatTime(timeLeft.seconds), lab:'Seconds'}
            ].map((t, i) => (
              <div key={i} className="bg-white text-black w-[62px] h-[62px] rounded-full flex flex-col items-center justify-center leading-none">
                <span className="font-bold text-[16px] mb-0.5 font-poppins">{t.val}</span>
                <span className="text-[11px] font-medium font-poppins">{t.lab}</span>
              </div>
            ))}
          </div>
          <Link to="/products" className="inline-block bg-white text-primary font-medium px-12 py-4 rounded-[4px] hover:bg-gray-100 transition text-[16px]">Buy Now!</Link>
        </div>
        
        <div className="relative z-10 w-full md:w-[50%] lg:w-[55%] h-full flex items-center justify-center mt-10 md:mt-0">
          {/* Blurred glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[400px] lg:w-[450px] h-[300px] md:h-[400px] lg:h-[450px] bg-white/20 blur-[100px] rounded-full pointer-events-none"></div>
          <img 
            src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Phones" 
            className="relative z-10 max-w-[90%] md:max-w-[85%] lg:max-w-[75%] h-auto object-contain drop-shadow-2xl" 
          />
        </div>
      </div>
    </section>
  );
};

const SectionHeader = ({ title, subtitle, timer }: { title: string, subtitle: string, timer?: boolean }) => (
  <div className="flex items-end gap-[87px] mb-[40px] flex-wrap">
    <div>
      <div className="flex items-center gap-4 mb-5">
        <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
        <span className="text-primary font-semibold text-[16px]">{title}</span>
      </div>
      <h2 className="text-[36px] font-semibold tracking-[0.04em] font-inter text-black leading-none">{subtitle}</h2>
    </div>
    {timer && <Timer />}
  </div>
);

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              } else {
                // Reset to initial values
                days = 3;
                hours = 23;
                minutes = 19;
                seconds = 56;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="flex items-end gap-4 pb-2">
      <div className="text-left">
          <div className="text-[12px] font-medium mb-1 text-black">Days</div>
          <div className="text-[32px] font-bold leading-none font-inter text-black">{formatTime(timeLeft.days)}</div>
      </div>
      <span className="text-primary text-[32px] leading-none mb-1 font-bold">:</span>
      <div className="text-left">
          <div className="text-[12px] font-medium mb-1 text-black">Hours</div>
          <div className="text-[32px] font-bold leading-none font-inter text-black">{formatTime(timeLeft.hours)}</div>
      </div>
      <span className="text-primary text-[32px] leading-none mb-1 font-bold">:</span>
      <div className="text-left">
          <div className="text-[12px] font-medium mb-1 text-black">Minutes</div>
          <div className="text-[32px] font-bold leading-none font-inter text-black">{formatTime(timeLeft.minutes)}</div>
      </div>
      <span className="text-primary text-[32px] leading-none mb-1 font-bold">:</span>
      <div className="text-left">
          <div className="text-[12px] font-medium mb-1 text-black">Seconds</div>
          <div className="text-[32px] font-bold leading-none font-inter text-black">{formatTime(timeLeft.seconds)}</div>
      </div>
    </div>
  );
};

const Home = () => {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const videos = [
    { url: '/videos/phoneBannerVideo.mp4', title: 'Latest Smartphones', subtitle: 'New iPhone 17 & Galaxy S24' },
    { url: '/videos/vapeBannerVideo.mp4', title: 'Premium Vapes', subtitle: 'Best Quality Vaping Products' },
    { url: '/videos/fireworksBannerVideo.mp4', title: 'Spectacular Fireworks', subtitle: 'Light Up Your Celebrations' },
    { url: '/videos/ElactronicsBannerVideo.mp4', title: 'Electronics', subtitle: 'Latest Tech & Accessories' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 bg-white">
      {/* Hero Section */}
      <section className="container mx-auto max-w-[1170px] mb-[140px] px-4">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar - Visible on md and up */}
          <div className="w-full md:w-[233px] md:border-r border-gray-200 pt-10 pb-0 md:pr-6 space-y-4 text-[16px] text-black hidden md:block font-poppins shrink-0">
             <Link to="/products" className="flex justify-between items-center cursor-pointer hover:text-primary transition group">
                <div className="flex items-center gap-3">
                  <Smartphone size={20} />
                  <span className="font-medium">Phones</span>
                </div>
                <ChevronRight size={20} className="text-black group-hover:text-primary" />
             </Link>
             <Link to="/products" className="flex justify-between items-center cursor-pointer hover:text-primary transition group">
                <div className="flex items-center gap-3">
                  <Zap size={20} />
                  <span className="font-medium">Vapes</span>
                </div>
                <ChevronRight size={20} className="text-black group-hover:text-primary" />
             </Link>
             <Link to="/products" className="flex justify-between items-center cursor-pointer hover:text-primary transition group">
                <div className="flex items-center gap-3">
                  <Sparkles size={20} />
                  <span className="font-medium">Fireworks</span>
                </div>
                <ChevronRight size={20} className="text-black group-hover:text-primary" />
             </Link>
             <Link to="/products" className="flex justify-between items-center cursor-pointer hover:text-primary transition group">
                <div className="flex items-center gap-3">
                  <Monitor size={20} />
                  <span className="font-medium">Electronics</span>
                </div>
                <ChevronRight size={20} className="text-black group-hover:text-primary" />
             </Link>
          </div>
          
          {/* Main Banner with Video */}
          <div className="flex-1 md:pl-[45px] pt-10">
             <div className="bg-black text-white px-6 md:px-16 py-14 flex items-center justify-between relative overflow-hidden h-[500px] md:h-[600px] lg:h-[650px] w-full rounded-[4px] md:rounded-none">
                {/* Video Background */}
                <video
                  key={currentVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute top-0 left-0 w-full h-full object-cover scale-110"
                >
                  <source src={videos[currentVideo].url} type="video/mp4" />
                </video>
                
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-[1]"></div>
                
                <div className="z-10 max-w-[90%] md:max-w-lg pt-4 relative text-white">
                    <div className="flex items-center gap-3 md:gap-6 mb-4 md:mb-6">
                       <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                         {currentVideo === 0 && <Smartphone size={24} className="md:w-7 md:h-7 text-white" />}
                         {currentVideo === 1 && <Zap size={24} className="md:w-7 md:h-7 text-white" />}
                         {currentVideo === 2 && <Sparkles size={24} className="md:w-7 md:h-7 text-white" />}
                         {currentVideo === 3 && <Monitor size={24} className="md:w-7 md:h-7 text-white" />}
                       </div>
                       <span className="text-[14px] md:text-[16px] font-light font-poppins text-white drop-shadow-lg">{videos[currentVideo].title}</span>
                    </div>
                    <h1 className="text-white text-[32px] md:text-[52px] lg:text-[56px] font-bold leading-[1.15] mb-4 md:mb-6 font-inter tracking-tight drop-shadow-2xl">{videos[currentVideo].subtitle}</h1>
                    <Link to="/products" className="inline-flex items-center gap-2 bg-primary/90 backdrop-blur-sm px-8 py-3 rounded-lg font-medium hover:bg-primary text-white text-[15px] md:text-[16px] group shadow-lg transition-all hover:scale-105">
                      Shop Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform md:w-5 md:h-5" />
                    </Link>
                </div>
                
                {/* Carousel Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                  {videos.map((_, index) => (
                    <div
                      key={index}
                      onClick={() => setCurrentVideo(index)}
                      className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
                        index === currentVideo
                          ? 'bg-primary border-2 border-white'
                          : 'bg-gray-500/50 hover:bg-white'
                      }`}
                    ></div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Flash Sales */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-20 border-b border-gray-200 pb-16">
         <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
             <SectionHeader title="Today's" subtitle="Flash Sales" timer={true} />
         </div>
         
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] justify-items-center pb-10">
            {FLASH_SALES.map(p => (
               <ProductCard key={p.id} product={p} />
            ))}
         </div>
         
         <div className="text-center mt-6">
            <Link to="/products" className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px] inline-block">View All Products</Link>
         </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-20 border-b border-gray-200 pb-16">
          <div className="flex justify-between items-end mb-16 flex-wrap gap-4">
             <SectionHeader title="Categories" subtitle="Browse By Category" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
             {CATEGORIES.map(cat => (
                <Link 
                  key={cat.id} 
                  to={cat.name === 'Phones' ? '/phones' : cat.name === 'Vapes' ? '/vapes' : cat.name === 'Fireworks' ? '/fireworks' : cat.name === 'Electronics' ? '/electronics' : `/products?category=${cat.name}`}
                  className="border border-black/30 rounded-[4px] flex flex-col items-center justify-center h-[145px] gap-4 cursor-pointer hover:bg-primary hover:text-white hover:border-primary transition group"
                >
                   <cat.icon size={56} strokeWidth={1} />
                   <span className="text-[16px] font-normal">{cat.name}</span>
                </Link>
             ))}
          </div>
      </section>

      {/* Best Selling */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-[140px]">
         <div className="flex justify-between items-end mb-12 flex-wrap gap-4">
            <SectionHeader title="This Month" subtitle="Best Selling Products" />
            <Link to="/products" className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px] mb-6 inline-block">View All</Link>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] justify-items-center">
            {BEST_SELLING.map(p => <ProductCard key={p.id} product={p} />)}
         </div>
      </section>

      {/* Featured Categories Banner */}
      <FeaturedBanner />

      {/* Explore Products */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-32">
         <div className="flex justify-between items-end mb-16 flex-wrap gap-4">
            <SectionHeader title="Our Products" subtitle="Explore Our Products" />
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[30px] gap-y-[60px] justify-items-center">
            {EXPLORE_PRODUCTS.map(p => <ProductCard key={p.id} product={p} />)}
         </div>
         <div className="text-center mt-16">
            <Link to="/products" className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px] inline-block">View All Products</Link>
         </div>
      </section>

      {/* New Arrival - Bento Grid */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-32">
         <SectionHeader title="Featured" subtitle="New Arrival" />
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] h-auto lg:h-[600px]">
            {/* Left Big Item - Phones */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 relative rounded-[4px] text-white p-[30px] flex flex-col justify-end h-[400px] lg:h-full overflow-hidden group hover:shadow-2xl transition-all duration-300">
               <img src="/phone/download (1).jpeg" alt="Latest Phones" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[80%] w-auto object-contain group-hover:scale-110 transition-transform duration-500" />
               <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
               <div className="relative z-10 w-[280px]">
                 <h3 className="text-[24px] font-semibold mb-3 font-inter tracking-[0.03em]">Latest Smartphones</h3>
                 <p className="text-[#FAFAFA] text-[14px] mb-4 font-poppins leading-[21px]">Discover cutting-edge technology with premium devices at unbeatable prices.</p>
                 <Link to="/phones" className="underline underline-offset-4 font-medium hover:text-gray-300 text-[16px] font-poppins">Shop Now</Link>
               </div>
            </div>
            
            {/* Right Column */}
            <div className="grid grid-rows-2 gap-[30px] h-[600px] lg:h-full">
               {/* Top Wide - Vapes */}
               <div className="bg-gradient-to-br from-purple-900 to-indigo-900 relative rounded-[4px] text-white pl-[24px] pb-[24px] flex flex-col justify-end overflow-hidden group hover:shadow-2xl transition-all duration-300">
                   <img src="/Vapes/Bundles/Picture1.png" alt="Vapes" className="absolute top-1/2 right-8 -translate-y-1/2 h-[70%] w-auto object-contain opacity-90 group-hover:scale-110 transition-transform duration-500" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                   <div className="relative z-10 max-w-[255px]">
                     <h3 className="text-[24px] font-semibold mb-3 font-inter tracking-[0.03em]">Premium Vapes</h3>
                     <p className="text-[#FAFAFA] text-[14px] mb-3 font-poppins leading-[21px]">High-quality vaping devices and accessories for the best experience.</p>
                     <Link to="/vapes" className="underline underline-offset-4 font-medium hover:text-gray-300 text-[16px] font-poppins">Shop Now</Link>
                   </div>
               </div>
               {/* Bottom Split */}
               <div className="grid grid-cols-2 gap-[30px]">
                   <div className="bg-gradient-to-br from-red-800 to-red-900 relative rounded-[4px] text-white p-[24px] flex flex-col justify-end overflow-hidden group hover:shadow-2xl transition-all duration-300">
                      <img src="/Best seller fireworks/Sky Raider (£3.00 each).png" alt="Fireworks" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%] w-auto object-contain opacity-80 group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                       <div className="relative z-10">
                        <h3 className="text-[24px] font-semibold mb-2 font-inter tracking-[0.03em]">Fireworks</h3>
                        <p className="text-[#FAFAFA] text-[14px] mb-2 font-poppins">Spectacular displays for celebrations</p>
                        <Link to="/fireworks" className="underline underline-offset-4 font-medium text-[16px] hover:text-gray-300 font-poppins">Shop Now</Link>
                      </div>
                   </div>
                   <div className="bg-gradient-to-br from-orange-700 to-red-800 relative rounded-[4px] text-white p-[24px] flex flex-col justify-end overflow-hidden group hover:shadow-2xl transition-all duration-300">
                       <img src="/Best seller fireworks/Falcons (£6.00 each).png" alt="Party Fireworks" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[65%] w-auto object-contain opacity-80 group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                       <div className="relative z-10">
                        <h3 className="text-[24px] font-semibold mb-2 font-inter tracking-[0.03em]">Party Sets</h3>
                        <p className="text-[#FAFAFA] text-[14px] mb-2 font-poppins">Complete celebration packages</p>
                        <Link to="/fireworks" className="underline underline-offset-4 font-medium text-[16px] hover:text-gray-300 font-poppins">Shop Now</Link>
                      </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* Services */}
      <section className="container mx-auto max-w-[1170px] px-4 flex flex-col md:flex-row justify-center gap-10 md:gap-[88px] text-center py-[100px]">
         <div className="flex flex-col items-center">
            <div className="bg-black border-[10px] border-[#C1C1C1]/30 rounded-full w-20 h-20 flex items-center justify-center text-white mb-6">
               <Truck size={28} />
            </div>
            <h3 className="font-bold uppercase text-[20px] mb-2 font-inter">FREE AND FAST DELIVERY</h3>
            <p className="text-[14px] text-black font-poppins">Free delivery for all orders over £140</p>
         </div>
         <div className="flex flex-col items-center">
            <div className="bg-black border-[10px] border-[#C1C1C1]/30 rounded-full w-20 h-20 flex items-center justify-center text-white mb-6">
               <Headset size={28} />
            </div>
            <h3 className="font-bold uppercase text-[20px] mb-2 font-inter">24/7 CUSTOMER SERVICE</h3>
            <p className="text-[14px] text-black font-poppins">Friendly 24/7 customer support</p>
         </div>
         <div className="flex flex-col items-center">
            <div className="bg-black border-[10px] border-[#C1C1C1]/30 rounded-full w-20 h-20 flex items-center justify-center text-white mb-6">
               <CheckCircle size={28} />
            </div>
            <h3 className="font-bold uppercase text-[20px] mb-2 font-inter">MONEY BACK GUARANTEE</h3>
            <p className="text-[14px] text-black font-poppins">We reurn money within 30 days</p>
         </div>
      </section>
    </div>
  );
};

export default Home;