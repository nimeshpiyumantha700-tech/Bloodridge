
import React from 'react';
import { Link } from 'react-router-dom';
import { CartItem } from '../types';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';

interface Props {
  cart: CartItem[];
  removeFromCart: (id: string, size: string) => void;
  updateQuantity: (id: string, size: string, delta: number) => void;
}

const CartPage: React.FC<Props> = ({ cart, removeFromCart, updateQuantity }) => {
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-4">
        <ShoppingBag className="w-16 h-16 text-gray-600 mb-8" />
        <h1 className="text-3xl font-cinzel font-bold mb-4">YOUR BAG IS EMPTY</h1>
        <p className="text-gray-400 mb-12">Looks like you haven't added anything to your collection yet.</p>
        <Link to="/shop" className="px-10 py-4 bg-white text-black font-bold tracking-widest text-xs hover:bg-red-500 hover:text-white transition-all rounded-2xl font-cinzel">
          EXPLORE SHOP
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-cinzel font-bold mb-16">SHOPPING BAG</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-8">
          {cart.map((item, idx) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex gap-6 p-6 bg-zinc-950 border border-white/5 rounded-3xl animate-in fade-in slide-in-from-bottom-2">
              <div className="w-32 h-40 bg-zinc-900 overflow-hidden shrink-0 border border-white/5 rounded-2xl">
                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover grayscale" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-cinzel font-bold tracking-widest uppercase">{item.name}</h3>
                    <button onClick={() => removeFromCart(item.id, item.selectedSize)} className="text-gray-500 hover:text-red-500 transition-colors">
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="flex space-x-4 text-xs tracking-widest text-gray-400 mb-4 font-bold font-cinzel">
                    <span>SIZE: {item.selectedSize}</span>
                    <span>PRICE: ${item.price}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center border border-white/20 rounded-xl overflow-hidden">
                    <button onClick={() => updateQuantity(item.id, item.selectedSize, -1)} className="p-2 hover:bg-white/10"><Minus className="w-4 h-4" /></button>
                    <span className="px-4 text-sm font-bold font-cinzel">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.selectedSize, 1)} className="p-2 hover:bg-white/10"><Plus className="w-4 h-4" /></button>
                  </div>
                  <span className="font-cinzel font-bold">${item.price * item.quantity}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-950 border border-white/10 p-8 h-fit sticky top-28 rounded-3xl">
          <h2 className="text-xl font-cinzel font-bold mb-8">ORDER SUMMARY</h2>
          
          <div className="space-y-4 mb-8 font-cinzel">
            <div className="flex justify-between text-sm tracking-widest text-gray-400">
              <span>SUBTOTAL</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between text-sm tracking-widest text-gray-400">
              <span>SHIPPING</span>
              <span className="text-green-500 font-bold">FREE</span>
            </div>
            <div className="pt-4 border-t border-white/10 flex justify-between text-xl font-bold tracking-widest">
              <span>TOTAL</span>
              <span>${subtotal}</span>
            </div>
          </div>

          <button className="w-full py-4 bg-white text-black font-bold tracking-widest text-xs hover:bg-red-500 hover:text-white transition-all flex items-center justify-center group rounded-2xl font-cinzel">
            PROCEED TO CHECKOUT <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="mt-6 flex flex-col items-center space-y-4">
             <div className="flex space-x-2">
                <div className="w-10 h-6 bg-zinc-800 rounded-md"></div>
                <div className="w-10 h-6 bg-zinc-800 rounded-md"></div>
                <div className="w-10 h-6 bg-zinc-800 rounded-md"></div>
             </div>
             <p className="text-[10px] text-gray-500 tracking-widest font-bold font-cinzel uppercase">Secure SSL Payment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
