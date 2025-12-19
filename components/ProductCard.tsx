import React, { useState } from 'react';
import { Heart, Eye, Star, Trash2, ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  isWishlist?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, isWishlist = false }) => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const handleCardClick = () => {
    navigate(`/product/${product.id}`);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleRemoveFromWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeFromWishlist(product.id);
  };

  return (
    <div className="group w-full max-w-[270px] mx-auto cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl" onClick={handleCardClick}>
      {showNotification && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          Added to cart!
        </div>
      )}
      <div className="relative bg-[#F5F5F5] h-[250px] flex items-center justify-center rounded-[4px] overflow-hidden mb-4 transition-all duration-300 group-hover:bg-gray-100">
        {/* Badges */}
        {product.discount && (
          <span className="absolute top-3 left-3 bg-primary text-white text-[12px] px-3 py-1 rounded-[4px] z-10">
            -{product.discount}%
          </span>
        )}
        {product.isNew && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-white text-[12px] px-3 py-1 rounded-[4px] z-10">
            NEW
          </span>
        )}

        {/* Action Icons */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 z-10">
          {isWishlist ? (
             <button 
               className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center shadow-sm hover:bg-red-500 hover:text-white transition" 
               onClick={handleRemoveFromWishlist}
               title="Remove from wishlist"
             >
               <Trash2 className="w-5 h-5" />
             </button>
          ) : (
            <>
              <button 
                className={`bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center shadow-sm transition ${
                  isInWishlist(product.id) ? 'bg-red-500 text-white' : 'hover:bg-gray-100'
                }`}
                onClick={handleWishlist}
                title={isInWishlist(product.id) ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart className={`w-5 h-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
              </button>
              <button 
                className="bg-white w-[34px] h-[34px] rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition" 
                onClick={(e) => { e.stopPropagation(); navigate(`/product/${product.id}`); }}
                title="Quick view"
              >
                <Eye className="w-5 h-5 text-black" />
              </button>
            </>
          )}
        </div>

        {/* Image */}
        <img src={product.image} alt={product.name} className="h-[180px] w-auto max-w-[200px] object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300 p-2" />

        {/* Add To Cart Overlay */}
        <button 
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 w-full bg-black text-white text-center py-2 transition-all duration-300 font-medium hover:bg-primary ${
            isWishlist ? 'opacity-100' : 'translate-y-full group-hover:translate-y-0'
          }`}
        >
           <span className="text-[16px] flex items-center justify-center gap-2">
             <ShoppingCart size={18} />
             Add To Cart
           </span>
        </button>
      </div>

      <div>
        <h3 className="font-medium text-[16px] truncate text-black mb-2 font-poppins">{product.name}</h3>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-primary font-medium text-[16px] font-poppins">£{product.price}</span>
          {product.originalPrice && (
            <span className="text-gray-500 line-through text-[16px] font-medium opacity-50 font-poppins">£{product.originalPrice}</span>
          )}
        </div>
        {!isWishlist && (
           <div className="flex items-center gap-2">
             <div className="flex gap-1">
                 {[...Array(5)].map((_, i) => (
                    <Star 
                       key={i} 
                       size={14}
                       className={i < Math.floor(product.rating) ? 'text-[#FFAD33] fill-[#FFAD33]' : 'text-gray-300 fill-gray-300'} 
                    />
                 ))}
             </div>
             <span className="text-gray-400 text-[14px] font-semibold font-poppins">({product.reviews})</span>
           </div>
        )}
        
        {/* Color Circles */}
        {product.colors && (
           <div className="flex gap-2 mt-2">
              {product.colors.map((c, i) => (
                 <div key={i} className={`w-[20px] h-[20px] rounded-full border-2 border-white ring-1 ring-black cursor-pointer hover:scale-110`} style={{ backgroundColor: c }}></div>
              ))}
           </div>
        )}
      </div>
    </div>
  );
};