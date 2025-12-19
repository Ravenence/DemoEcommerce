import React, { useEffect } from 'react';
import { ProductCard } from '../components/ProductCard';
import { BEST_SELLING } from '../constants';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlistItems, addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMoveAllToBag = () => {
    wishlistItems.forEach(item => addToCart(item));
  };

  if (wishlistItems.length === 0) {
    return (
      <div className="container mx-auto max-w-[1170px] px-4 py-20">
        <div className="text-center py-20">
          <h2 className="text-2xl font-semibold mb-4">Your wishlist is empty</h2>
          <p className="text-gray-600 mb-8">Save items you love for later!</p>
          <Link to="/" className="bg-primary text-white px-12 py-4 rounded-[4px] hover:bg-hoverButton transition font-medium text-[16px] inline-block">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14 gap-4">
        <h2 className="text-[20px] font-normal">Wishlist ({wishlistItems.length})</h2>
        <button 
          onClick={handleMoveAllToBag}
          className="border border-black/50 px-8 md:px-12 py-4 rounded-[4px] font-medium hover:bg-gray-50 transition text-[16px] w-full sm:w-auto"
        >
          Move All To Bag
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20 justify-items-center">
         {wishlistItems.map((item) => (
             <ProductCard key={item.id} product={item} isWishlist={true} />
         ))}
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-14 gap-4">
         <div className="flex items-center gap-4">
             <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
             <span className="text-[20px] font-normal">Just For You</span>
         </div>
         <Link to="/products" className="border border-black/50 px-8 md:px-12 py-4 rounded-[4px] font-medium hover:bg-gray-50 transition text-[16px] w-full sm:w-auto text-center">
            See All
         </Link>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-10 justify-items-center">
         {BEST_SELLING.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
};

export default Wishlist;