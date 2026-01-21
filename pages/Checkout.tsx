import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { validateBuildingId } from '../supabaseClient';
import { MOCK_SLOTS } from '../constants';
import { MapPin, Clock, CreditCard, CheckCircle, AlertCircle } from 'lucide-react';

export const Checkout: React.FC = () => {
  const { cartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [buildingId, setBuildingId] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [error, setError] = useState('');
  const [selectedSlot, setSelectedSlot] = useState('');

  const handleBuildingValidation = async () => {
    if (!buildingId) {
      setError('Please enter a building ID');
      return;
    }
    setIsValidating(true);
    setError('');
    
    try {
      const isValid = await validateBuildingId(buildingId);
      if (isValid) {
        setStep(2);
      } else {
        setError('Invalid Building ID. Delivery is currently restricted to registered residential complexes.');
      }
    } catch (e) {
      setError('Validation failed. Please try again.');
    } finally {
      setIsValidating(false);
    }
  };

  const handlePlaceOrder = () => {
    // In a real app, this would write to Supabase 'orders' table
    setTimeout(() => {
      clearCart();
      navigate('/order-tracking');
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Checkout</h1>
      
      {/* Step Indicators */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3].map((s) => (
          <div key={s} className={`h-1.5 flex-1 rounded-full ${s <= step ? 'bg-brand-500' : 'bg-gray-200'}`} />
        ))}
      </div>

      {step === 1 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4 text-brand-700">
            <MapPin className="h-6 w-6" />
            <h2 className="text-lg font-bold">Delivery Location</h2>
          </div>
          <p className="text-sm text-gray-500 mb-6">
            Enter your Building ID code to verify delivery eligibility.
            (Try <span className="font-mono bg-gray-100 px-1">RES-101</span>)
          </p>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Building ID</label>
              <input
                type="text"
                value={buildingId}
                onChange={(e) => setBuildingId(e.target.value)}
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-500 outline-none uppercase font-mono ${error ? 'border-red-500' : 'border-gray-200'}`}
                placeholder="e.g., RES-101"
              />
              {error && (
                <div className="flex items-center gap-2 text-red-500 text-xs mt-2">
                  <AlertCircle className="h-3 w-3" /> {error}
                </div>
              )}
            </div>
            
            <button
              onClick={handleBuildingValidation}
              disabled={isValidating}
              className="w-full bg-brand-600 text-white py-3 rounded-lg font-bold disabled:opacity-50 hover:bg-brand-700 transition-colors"
            >
              {isValidating ? 'Verifying...' : 'Verify Building ID'}
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4 text-brand-700">
            <Clock className="h-6 w-6" />
            <h2 className="text-lg font-bold">Choose Delivery Slot</h2>
          </div>
          
          <div className="space-y-3">
            {MOCK_SLOTS.map((slot) => (
              <button
                key={slot.id}
                disabled={!slot.available}
                onClick={() => setSelectedSlot(slot.id)}
                className={`w-full p-4 border rounded-xl flex items-center justify-between transition-all ${
                  selectedSlot === slot.id 
                    ? 'border-brand-500 bg-brand-50 ring-1 ring-brand-500' 
                    : 'border-gray-200 hover:border-brand-200'
                } ${!slot.available ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}`}
              >
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{slot.date}</div>
                  <div className="text-sm text-gray-500">{slot.time}</div>
                </div>
                {slot.available ? (
                   selectedSlot === slot.id && <CheckCircle className="h-5 w-5 text-brand-600" />
                ) : (
                  <span className="text-xs font-bold text-red-400">FULL</span>
                )}
              </button>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <button onClick={() => setStep(1)} className="flex-1 py-3 text-gray-600 font-medium">Back</button>
            <button
              disabled={!selectedSlot}
              onClick={() => setStep(3)}
              className="flex-[2] bg-brand-600 text-white py-3 rounded-lg font-bold disabled:opacity-50 hover:bg-brand-700"
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4 text-brand-700">
              <CreditCard className="h-6 w-6" />
              <h2 className="text-lg font-bold">Payment & Confirm</h2>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-900 mb-2">Order Summary</h3>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Building</span>
                <span className="font-mono text-gray-900">{buildingId}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Slot</span>
                <span className="text-gray-900">
                  {MOCK_SLOTS.find(s => s.id === selectedSlot)?.time}
                </span>
              </div>
              <div className="border-t border-gray-200 mt-2 pt-2 flex justify-between font-bold text-gray-900">
                <span>Total to Pay</span>
                <span>${(cartTotal + 1.99).toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-200 hover:bg-brand-700"
            >
              Pay & Place Order
            </button>
          </div>
          <button onClick={() => setStep(2)} className="w-full py-2 text-gray-500 text-sm">Back to Slots</button>
        </div>
      )}
    </div>
  );
};