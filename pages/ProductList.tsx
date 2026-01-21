import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { Search, Filter } from 'lucide-react';

export const ProductList: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = MOCK_PRODUCTS.filter(p => {
    const matchesCategory = categoryFilter ? p.category === categoryFilter : true;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input 
          type="text" 
          placeholder="Search groceries..." 
          className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-gray-900">
          {categoryFilter || 'All Products'}
        </h1>
        <button className="flex items-center gap-1 text-sm text-gray-500">
          <Filter className="h-4 w-4" /> Filter
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col">
            <div className="relative mb-3">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg" />
              <span className="absolute top-2 left-2 bg-white/90 px-2 py-0.5 rounded text-[10px] font-bold text-gray-600">
                {product.category}
              </span>
            </div>
            <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{product.name}</h3>
            <p className="text-xs text-gray-500 mb-3">{product.description}</p>
            <div className="mt-auto flex items-center justify-between">
              <div>
                <span className="block font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <span className="text-[10px] text-gray-400">/{product.unit}</span>
              </div>
              <button 
                onClick={() => addToCart(product)}
                className="px-3 py-1.5 bg-brand-600 text-white text-xs font-bold rounded-lg hover:bg-brand-700"
              >
                ADD
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12 text-gray-400">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
};