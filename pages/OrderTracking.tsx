import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Package, Truck, Home } from 'lucide-react';

export const OrderTracking: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="h-10 w-10 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Order Confirmed!</h1>
        <p className="text-gray-500">Order #RM-8821</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="font-bold text-gray-900 mb-6">Tracking Status</h2>
        
        <div className="relative space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-gray-200 -z-10"></div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-500 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
              <Check className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Order Placed</h3>
              <p className="text-xs text-gray-500">Just now</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-brand-100 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
              <Package className="h-5 w-5 text-brand-600" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Packing</h3>
              <p className="text-xs text-gray-500">Estimated: 4:30 PM</p>
            </div>
          </div>

          <div className="flex gap-4 opacity-50">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
              <Truck className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Out for Delivery</h3>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
          </div>

          <div className="flex gap-4 opacity-50">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0 border-4 border-white shadow-sm">
              <Home className="h-5 w-5 text-gray-400" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900">Arrived at Unit</h3>
              <p className="text-xs text-gray-500">Pending</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Link to="/" className="flex-1 bg-white border border-gray-300 py-3 rounded-lg text-center font-semibold text-gray-700">
          Go Home
        </Link>
        <Link to="/products" className="flex-1 bg-brand-600 py-3 rounded-lg text-center font-semibold text-white">
          Shop Again
        </Link>
      </div>
    </div>
  );
};