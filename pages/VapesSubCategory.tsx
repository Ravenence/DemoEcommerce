import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ALL_PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';

// Map URL slugs to display names and folder names
const SUB_CATEGORY_MAP: Record<string, { display: string; folder: string }> = {
  'bundles': { display: 'Bundles', folder: 'Bundles' },
  'coils-pods': { display: 'Coils & Pods', folder: 'Coils & Pods' },
  'nic-salts': { display: 'Nic Salts', folder: 'Nic Salts' },
  'nicotine-pouches': { display: 'Nicotine Pouches', folder: 'Nicotine Pouches' },
  'prefilled-pods': { display: 'Prefilled Pods', folder: 'Prefilled Pods' },
  'prefilled-vape-kits': { display: 'Prefilled Vape Kits', folder: 'Prefilled Vape Kits' },
  'savacco': { display: 'Savacco', folder: 'Savacco' },
  'short-fills': { display: 'Short Fills', folder: 'Short Fills' },
  'vape-kits': { display: 'Vape Kits', folder: 'Vape Kits' }
};

const VapesSubCategory = () => {
  const { subcategory } = useParams<{ subcategory: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subcategory]);

  const subCategoryInfo = subcategory ? SUB_CATEGORY_MAP[subcategory] : null;
  
  if (!subCategoryInfo) {
    return (
      <div className="container mx-auto max-w-[1170px] px-4 py-20 text-center">
        <h2 className="text-[32px] font-semibold mb-4">Category Not Found</h2>
        <Link to="/vapes" className="text-primary hover:underline">
          ← Back to Vapes
        </Link>
      </div>
    );
  }

  // Filter products by sub-category
  const products = ALL_PRODUCTS.filter(p => p.subCategory === subCategoryInfo.display);

  return (
    <div className="pb-20 bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto max-w-[1170px] px-4 pt-10">
        <div className="text-[14px] text-gray-500 mb-10">
          <Link to="/" className="hover:text-black">Home</Link> / 
          <Link to="/vapes" className="hover:text-black"> Vapes</Link> / 
          <span className="text-black"> {subCategoryInfo.display}</span>
        </div>
      </div>

      {/* Header */}
      <section className="container mx-auto max-w-[1170px] px-4 mb-12">
        <Link 
          to="/vapes" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All Categories
        </Link>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-[20px] h-[40px] bg-primary rounded-[4px]"></div>
          <span className="text-primary font-semibold text-[16px]">Vapes</span>
        </div>
        <h1 className="text-[36px] font-semibold tracking-[0.04em] font-inter text-black mb-4">
          {subCategoryInfo.display}
        </h1>
        <p className="text-gray-600 text-[16px] max-w-2xl">
          Explore our selection of premium {subCategoryInfo.display.toLowerCase()} products
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
              to="/vapes" 
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

export default VapesSubCategory;
