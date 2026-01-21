import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShoppingBag } from 'lucide-react';
import { MOCK_PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';

export const Home: React.FC = () => {
  const { addToCart } = useCart();
  const featuredProducts = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Hero Banner */}
      <div className="bg-brand-600 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">Exclusive Resident Delivery</h1>
          <p className="text-brand-100 mb-4 text-sm max-w-[80%]">
            Groceries delivered directly to your building unit. Valid ID required.
          </p>
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 bg-white text-brand-700 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-brand-50 transition-colors"
          >
            Start Shopping <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] opacity-20 transform rotate-12">
          <ShoppingBag size={140} />
        </div>
      </div>

      {/* Categories */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Categories</h2>
        </div>
        <div className="grid grid-cols-4 gap-4">
          {['Produce', 'Dairy', 'Bakery', 'Meat'].map((cat) => (
            <Link key={cat} to={`/products?category=${cat}`} className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center border border-gray-100">
                <span className="text-2xl">
                  {cat === 'Produce' ? '🥬' : cat === 'Dairy' ? '🥛' : cat === 'Bakery' ? '🥖' : '🍖'}
                </span>
              </div>
              <span className="text-xs font-medium text-gray-600">{cat}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Items */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">Featured Today</h2>
          <Link to="/products" className="text-sm text-brand-600 font-medium">View All</Link>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-32 object-cover rounded-lg mb-3" />
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800 text-sm line-clamp-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.unit}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="w-8 h-8 bg-brand-50 text-brand-600 rounded-full flex items-center justify-center hover:bg-brand-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};