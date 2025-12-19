import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ALL_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

// Map URL slugs to display names
const SUB_CATEGORY_MAP: Record<string, { display: string }> = {
  'iphone': { display: 'iPhone' },
  'samsung': { display: 'Samsung' },
  'google-pixel': { display: 'Google Pixel' },
  'accessories': { display: 'Accessories' }
};

const PhonesSubCategory = () => {
  const { subcategory } = useParams<{ subcategory: string }>();

  const subCategoryInfo = subcategory ? SUB_CATEGORY_MAP[subcategory] : null;
  
  if (!subCategoryInfo) {
    return (
      <div className="container mx-auto max-w-[1170px] px-4 py-20 text-center">
        <h2 className="text-[32px] font-semibold mb-4">Category Not Found</h2>
        <Link to="/phones" className="text-primary hover:underline">
          ← Back to Phones
        </Link>
      </div>
    );
  }

  // Filter products - for phones, we'll filter by brand name in the product name
  const products = ALL_PRODUCTS.filter(p => {
    if (p.category !== 'Phones') return false;
    
    const productName = p.name.toLowerCase();
    const categoryDisplay = subCategoryInfo.display.toLowerCase();
    
    if (categoryDisplay === 'iphone') {
      return productName.includes('iphone');
    } else if (categoryDisplay === 'samsung') {
      return productName.includes('samsung') || productName.includes('galaxy');
    } else if (categoryDisplay === 'google pixel') {
      return productName.includes('pixel') || productName.includes('google');
    } else if (categoryDisplay === 'accessories') {
      // For now, return empty - can add accessories later
      return false;
    }
    return false;
  });

  return (
    <div className="pb-20 bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto max-w-[1170px] px-4 pt-10">
        <div className="text-[14px] text-gray-500 mb-10">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/phones" className="hover:text-black"> Phones</Link> / 
          <span className="text-black"> {subCategoryInfo.display}</span>
        </div>
      </div>

      {/* Header */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-12">
        <Link 
          to="/phones" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All Categories
        </Link>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
          <span className="text-primary font-semibold text-[16px]">Phones</span>
        </div>
        <h1 className="text-[36px] font-semibold tracking-[0.04em] font-inter text-black mb-4">
          {subCategoryInfo.display}
        </h1>
        <p className="text-gray-600 text-[16px] max-w-2xl">
          Explore our selection of premium {subCategoryInfo.display} smartphones
        </p>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto max-w-[1170px] px-4">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-600 text-[18px] mb-6">
              No products available in this category yet.
            </p>
            <Link 
              to="/phones" 
              className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-hoverButton transition"
            >
              Browse All Categories
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default PhonesSubCategory;
