import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { ALL_PRODUCTS } from '../constants';
import { Smartphone, Zap, Sparkles, Monitor, Filter } from 'lucide-react';

const Products = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam || 'All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = [
    { name: 'All', icon: Filter },
    { name: 'Phones', icon: Smartphone },
    { name: 'Vapes', icon: Zap },
    { name: 'Fireworks', icon: Sparkles },
    { name: 'Electronics', icon: Monitor },
  ];

  // Filter products by category
  let filteredProducts = selectedCategory === 'All' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="container mx-auto max-w-[1170px] px-4 py-10 md:py-20">
      {/* Breadcrumb */}
      <div className="text-[14px] text-gray-500 mb-10">
        <Link to="/" className="hover:text-black">Home</Link> / 
        <span className="text-black"> {selectedCategory === 'All' ? 'All Products' : selectedCategory}</span>
      </div>

      {/* Page Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 font-inter">
          {selectedCategory === 'All' ? 'All Products' : selectedCategory}
        </h1>
        <p className="text-gray-600">
          Browse our collection of {filteredProducts.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className="w-full lg:w-[250px] shrink-0">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
            <h3 className="text-xl font-semibold mb-6">Categories</h3>
            <div className="space-y-3">
              {categories.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    selectedCategory === cat.name
                      ? 'bg-primary text-white'
                      : 'hover:bg-gray-100'
                  }`}
                >
                  <cat.icon size={20} />
                  <span className="font-medium">{cat.name}</span>
                </button>
              ))}
            </div>

            {/* Sort Options */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-semibold mb-4">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-primary cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold mb-4">No products found</h3>
              <p className="text-gray-600 mb-8">Try selecting a different category</p>
              <button
                onClick={() => setSelectedCategory('All')}
                className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-hoverButton transition"
              >
                View All Products
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
