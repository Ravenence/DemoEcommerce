import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smartphone } from 'lucide-react';

interface PhoneCategory {
  id: number;
  name: string;
  image: string;
  description: string;
  slug: string;
}

const PHONE_CATEGORIES: PhoneCategory[] = [
  {
    id: 1,
    name: 'iPhone',
    image: '/phone/download (1).jpeg',
    description: 'Latest iPhone models and accessories',
    slug: 'iphone'
  },
  {
    id: 2,
    name: 'Samsung',
    image: '/phone/download (4).jpeg',
    description: 'Galaxy series and Samsung smartphones',
    slug: 'samsung'
  }
];

const PhonesCategory = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { url: '/videos/phoneBannerVideo.mp4', title: 'Latest Smartphones', subtitle: 'New iPhone 17 & Galaxy S24' },
    { url: '/videos/phoneBannerVideo.mp4', title: 'Premium Devices', subtitle: 'Best Mobile Technology' },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pb-20 bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto max-w-[1170px] px-4 pt-10">
        <div className="text-[14px] text-gray-500 mb-10">
          <Link to="/" className="hover:text-black">Home</Link> / <span className="text-black">Phones</span>
        </div>
      </div>

      {/* Hero Section with Video */}
      <section className="relative w-full mb-20 -mx-4 md:mx-0">
        <div className="relative overflow-hidden h-[500px] md:h-[600px] lg:h-[700px] w-full">
          {/* Video Background */}
          <video
            key={currentVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src={videos[currentVideo].url} type="video/mp4" />
          </video>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-[1]"></div>
          
          {/* Content */}
          <div className="relative z-10 container mx-auto max-w-[1170px] px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <span className="text-white text-lg font-light">{videos[currentVideo].title}</span>
              </div>
              <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                {videos[currentVideo].subtitle}
              </h1>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-xl">
                Explore our collection of premium smartphones from top brands. Latest models with cutting-edge technology.
              </p>
              <Link 
                to="/products?category=Phones" 
                className="inline-flex items-center gap-3 bg-primary hover:bg-hoverButton text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-2xl"
              >
                Shop Now <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Video Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentVideo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentVideo
                    ? 'bg-primary w-8'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-20">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
            <span className="text-primary font-semibold text-[16px]">Categories</span>
          </div>
          <h2 className="text-[36px] font-semibold tracking-[0.04em] font-inter text-black">
            Browse Phone Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {PHONE_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              to={`/phones/${category.slug}`}
              className="group relative overflow-hidden rounded-lg bg-white border-2 border-gray-100 hover:border-primary transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-50">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black group-hover:text-primary transition-colors mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <div className="flex items-center text-primary font-medium">
                  <span className="group-hover:mr-2 transition-all">Explore</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto max-w-[1170px] px-4">
        <div className="bg-gradient-to-r from-primary to-hoverButton rounded-2xl p-12 text-center text-white">
          <Smartphone className="w-16 h-16 mx-auto mb-6 opacity-90" />
          <h2 className="text-4xl font-bold mb-4">Find Your Perfect Phone</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover the latest smartphones with advanced features, stunning designs, and powerful performance.
          </p>
          <Link
            to="/products?category=Phones"
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-105 shadow-xl"
          >
            View All Phones <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PhonesCategory;
