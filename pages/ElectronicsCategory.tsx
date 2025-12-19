import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor } from 'lucide-react';

interface ElectronicsCategory {
  id: number;
  name: string;
  image: string;
  description: string;
  slug: string;
}

const ELECTRONICS_CATEGORIES: ElectronicsCategory[] = [
  {
    id: 1,
    name: 'Gaming Accessories',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Controllers, headsets, and gaming gear',
    slug: 'gaming-accessories'
  },
  {
    id: 2,
    name: 'Power Banks',
    image: 'https://images.pexels.com/photos/4526406/pexels-photo-4526406.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Portable power solutions for all devices',
    slug: 'power-banks'
  },
  {
    id: 4,
    name: 'Keyboards & Mice',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Mechanical keyboards and gaming mice',
    slug: 'keyboards-mice'
  },
  {
    id: 5,
    name: 'Audio Devices',
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'Headphones, earbuds, and speakers',
    slug: 'audio-devices'
  },
  {
    id: 7,
    name: 'Monitors & Displays',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: '4K monitors and gaming displays',
    slug: 'monitors-displays'
  }
];

const ElectronicsCategory = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videos = [
    { url: '/videos/ElactronicsBannerVideo.mp4', title: 'Premium Electronics', subtitle: 'Next-Gen Tech & Gaming' },
    { url: '/videos/ElactronicsBannerVideo.mp4', title: 'Latest Technology', subtitle: 'Best Electronics Collection' },
  ];

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
          <Link to="/" className="hover:text-black">Home</Link> / <span className="text-black">Electronics</span>
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
            className="absolute top-0 left-0 w-full h-full object-cover scale-110"
          >
            <source src={videos[currentVideo].url} type="video/mp4" />
          </video>

          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[1]"></div>

          <div className="container mx-auto max-w-[1170px] px-4 md:px-6 h-full flex items-center relative z-10">
            <div className="max-w-3xl text-center md:text-left mx-auto md:mx-0 text-white">
              <div className="flex items-center gap-4 md:gap-6 mb-6 justify-center md:justify-start">
                <div className="w-[70px] h-[70px] bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                  <Monitor size={36} className="text-white" />
                </div>
                <span className="text-[18px] font-light font-poppins drop-shadow-lg text-white">{videos[currentVideo].title}</span>
              </div>
              <h1 className="text-white text-[42px] md:text-[64px] lg:text-[72px] font-bold leading-[1.1] mb-6 font-inter tracking-tight drop-shadow-2xl">
                {videos[currentVideo].subtitle}
              </h1>
              <p className="text-white text-[18px] md:text-[20px] mb-10 drop-shadow-lg max-w-2xl">
                Explore our cutting-edge collection of electronics and gaming gear
              </p>
              <div className="flex gap-4 justify-center md:justify-start">
                <button className="bg-primary text-white px-10 py-5 rounded-lg hover:bg-hoverButton transition font-medium text-[18px] shadow-xl hover:shadow-2xl transform hover:scale-105">
                  Shop All Electronics
                </button>
              </div>
            </div>
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
      </section>

      {/* Categories Grid */}
      <section className="container mx-auto max-w-[1170px] px-4">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
            <span className="text-primary font-semibold text-[16px]">Categories</span>
          </div>
          <h2 className="text-[36px] font-semibold tracking-[0.04em] font-inter text-black">
            Browse Electronics Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {ELECTRONICS_CATEGORIES.map(category => (
            <Link
              key={category.id}
              to={`/electronics/${category.slug}`}
              className="group w-full max-w-[370px] bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-[250px] bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-[200px] w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-semibold mb-2 font-inter group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-[14px] mb-4">
                  {category.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-4 transition-all">
                  Shop Now <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ElectronicsCategory;
