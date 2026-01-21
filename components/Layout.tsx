import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, User, ShoppingCart, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { itemCount } = useCart();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path ? 'text-brand-600' : 'text-gray-500';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pb-20 md:pb-0">
      {/* Desktop Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-brand-700 flex items-center gap-2">
            <Truck className="h-6 w-6" />
            ResidentMart
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-gray-600 hover:text-brand-600 font-medium">Shop</Link>
            <Link to="/orders" className="text-gray-600 hover:text-brand-600 font-medium">Orders</Link>
            <Link to="/cart" className="relative p-2 hover:bg-gray-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {itemCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-6">
        {children}
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-6 py-3 flex justify-between items-center safe-area-bottom">
        <Link to="/" className={`flex flex-col items-center gap-1 ${isActive('/')}`}>
          <Home className="h-6 w-6" />
          <span className="text-[10px] font-medium">Home</span>
        </Link>
        <Link to="/products" className={`flex flex-col items-center gap-1 ${isActive('/products')}`}>
          <ShoppingBag className="h-6 w-6" />
          <span className="text-[10px] font-medium">Shop</span>
        </Link>
        <Link to="/cart" className={`relative flex flex-col items-center gap-1 ${isActive('/cart')}`}>
          <div className="relative">
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-2 bg-brand-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {itemCount}
              </span>
            )}
          </div>
          <span className="text-[10px] font-medium">Cart</span>
        </Link>
        <Link to="/orders" className={`flex flex-col items-center gap-1 ${isActive('/orders')}`}>
          <User className="h-6 w-6" />
          <span className="text-[10px] font-medium">Account</span>
        </Link>
      </nav>
    </div>
  );
};