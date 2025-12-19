import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Truck, RefreshCcw, Heart, Minus, Plus } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { ALL_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, isInWishlist } = useCart();
  
  const product = ALL_PRODUCTS.find(p => p.id === Number(id));
  
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto max-w-[1170px] px-4 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Product not found</h2>
        <Link to="/" className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-hoverButton transition inline-block">
          Go to Home
        </Link>
      </div>
    );
  }

  // Get related products from same category
  const relatedProducts = ALL_PRODUCTS.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleBuyNow = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    navigate('/cart');
  };

  const handleWishlist = () => {
    addToWishlist(product);
  };

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-10 md:py-20">
       {showNotification && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          Added {quantity} item(s) to cart!
        </div>
      )}

       <div className="text-[14px] text-gray-500 mb-10">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to={`/products?category=${product.category}`} className="hover:text-black"> {product.category}</Link> / 
          <span className="text-black"> {product.name}</span>
       </div>

       <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-20 md:mb-32">
          {/* Images */}
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8 flex-1">
             <div className="flex flex-row md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                {[1, 2, 3, 4].map(i => (
                   <div key={i} className="bg-[#F5F5F5] p-4 rounded-[4px] min-w-[120px] md:w-[170px] h-[100px] md:h-[138px] flex items-center justify-center cursor-pointer hover:border-2 border-primary transition">
                      <img src={product.image} alt="thumb" className="max-w-full max-h-full object-contain mix-blend-multiply" />
                   </div>
                ))}
             </div>
             <div className="bg-[#F5F5F5] rounded-[4px] flex-1 flex items-center justify-center p-8 h-[400px] md:h-[600px]">
                <img src={product.image} alt={product.name} className="w-full max-h-full object-contain mix-blend-multiply" />
             </div>
          </div>

          {/* Info */}
          <div className="w-full lg:w-[400px]">
             <h1 className="text-2xl font-semibold mb-4 font-inter">{product.name}</h1>
             <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div className="flex text-[#FFAD33]">
                   {[...Array(5)].map((_,i) => (
                     <Star 
                       key={i} 
                       size={16} 
                       fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                       className={i >= Math.floor(product.rating) ? "text-gray-300" : ""} 
                     />
                   ))}
                </div>
                <span className="text-gray-400 text-[14px] font-medium">({product.reviews} Reviews)</span>
                <span className="text-gray-400">|</span>
                <span className="text-[#00FF66] text-[14px]">In Stock</span>
             </div>
             <div className="text-2xl font-normal mb-2 font-inter text-primary">${product.price}</div>
             {product.originalPrice && (
               <div className="text-lg text-gray-500 line-through mb-4">${product.originalPrice}</div>
             )}
             <p className="text-[14px] text-black leading-normal mb-8 border-b border-black/50 pb-6 md:pb-10 font-poppins">
                {product.category === 'Phones' && 'Premium smartphone with cutting-edge features, stunning display, and powerful performance for all your needs.'}
                {product.category === 'Vapes' && 'High-quality vaping device with smooth performance, long battery life, and premium build quality.'}
                {product.category === 'Fireworks' && 'Professional-grade fireworks for spectacular displays. Safe, reliable, and designed for unforgettable celebrations.'}
                {product.category === 'Electronics' && 'Top-tier electronics with advanced features, reliable performance, and modern design for tech enthusiasts.'}
             </p>
             
             {product.colors && product.colors.length > 0 && (
               <div className="flex items-center gap-4 mb-6">
                  <span className="text-[20px] font-normal">Colours:</span>
                  {product.colors.map((color, idx) => (
                    <div 
                      key={idx}
                      className={`w-6 h-6 rounded-full cursor-pointer transition ${
                        selectedColor === idx ? 'ring-2 ring-black ring-offset-2' : ''
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(idx)}
                    ></div>
                  ))}
               </div>
             )}

             {(product.category === 'Phones' || product.category === 'Electronics') && (
               <div className="flex items-center gap-4 mb-8 flex-wrap">
                  <span className="text-[20px] font-normal">Size:</span>
                  {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                     <button 
                       key={s} 
                       onClick={() => setSelectedSize(s)}
                       className={`w-10 h-10 text-sm border rounded-[4px] hover:bg-primary hover:text-white hover:border-primary transition font-medium ${
                         selectedSize === s ? 'bg-primary text-white border-primary' : 'border-gray-300'
                       }`}
                     >
                        {s}
                     </button>
                  ))}
               </div>
             )}

             <div className="flex items-center gap-4 mb-10 flex-wrap">
                <div className="flex items-center border border-gray-300 rounded-[4px]">
                   <button 
                     className="px-3 py-2 hover:bg-primary hover:text-white border-r border-gray-300 transition" 
                     onClick={() => setQuantity(Math.max(1, quantity - 1))}
                   >
                     <Minus size={16} />
                   </button>
                   <span className="px-6 md:px-8 font-medium text-center text-[20px] min-w-[60px]">
                     {quantity < 10 ? `0${quantity}` : quantity}
                   </span>
                   <button 
                     className="px-3 py-2 hover:bg-primary hover:text-white border-l border-gray-300 transition" 
                     onClick={() => setQuantity(quantity + 1)}
                   >
                     <Plus size={16} />
                   </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="bg-primary text-white px-8 md:px-12 py-2.5 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px] h-[44px]"
                >
                  Add To Cart
                </button>
                <button 
                  onClick={handleBuyNow}
                  className="bg-black text-white px-8 md:px-12 py-2.5 rounded-[4px] hover:bg-gray-800 transition font-medium text-[16px] h-[44px]"
                >
                  Buy Now
                </button>
                <button 
                  onClick={handleWishlist}
                  className={`border p-2 rounded-[4px] hover:bg-gray-50 h-[44px] w-[44px] flex items-center justify-center transition ${
                    isInWishlist(product.id) ? 'bg-red-500 border-red-500 text-white' : 'border-gray-300'
                  }`}
                >
                   <Heart size={20} className={isInWishlist(product.id) ? 'fill-current' : ''} />
                </button>
             </div>

             <div className="border border-black/50 rounded-[4px] overflow-hidden">
                <div className="flex items-center gap-4 p-4 md:p-6 border-b border-black/50">
                   <Truck size={40} strokeWidth={1} className="shrink-0" />
                   <div>
                      <div className="font-medium text-[14px] md:text-[16px] mb-1">Free Delivery</div>
                      <div className="text-[12px] text-black underline font-medium cursor-pointer">Enter your postal code for Delivery Availability</div>
                   </div>
                </div>
                <div className="flex items-center gap-4 p-4 md:p-6">
                   <RefreshCcw size={40} strokeWidth={1} className="shrink-0" />
                   <div>
                      <div className="font-medium text-[14px] md:text-[16px] mb-1">Return Delivery</div>
                      <div className="text-[12px] text-black font-medium">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></div>
                   </div>
                </div>
             </div>
          </div>
       </div>

       {/* Related Products */}
       {relatedProducts.length > 0 && (
         <div className="mb-20">
            <div className="flex items-center gap-4 mb-12">
               <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
               <span className="text-primary font-bold text-[16px]">Related Items</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
               {relatedProducts.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
         </div>
       )}
    </div>
  );
};

export default ProductDetail;