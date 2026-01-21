
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants.tsx';
import { ShoppingBag, ArrowUpRight, Flame } from 'lucide-react';

const ShopPage: React.FC = () => {
  const [category, setCategory] = useState<string>('All');
  const categories = ['All', 'Tees', 'Hoodies', 'Outerwear', 'Accessories'];

  const filteredProducts = category === 'All' ? PRODUCTS : PRODUCTS.filter(p => p.category === category);

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-20">
        <h2 className="text-red-500 font-cinzel text-sm mb-4 tracking-[0.5em] flex items-center font-bold uppercase">
          <Flame className="w-4 h-4 mr-2" /> Drop 001: The First Spark
        </h2>
        <h1 className="text-5xl md:text-7xl font-cinzel font-black mb-8">STREETWEAR</h1>
        
        <div className="flex flex-wrap gap-4">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`px-6 py-2 border border-white/20 text-xs tracking-widest hover:border-red-600 transition-all font-cinzel font-bold rounded-xl ${
                category === c ? 'bg-red-600 text-white border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'text-white'
              }`}
            >
              {c.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="group block"
          >
            <div className="aspect-[4/5] bg-zinc-900 overflow-hidden mb-6 relative border border-white/5 group-hover:border-red-600/50 transition-colors rounded-3xl">
              <img 
                src={product.images[0]} 
                alt={product.name}
                className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 p-2 bg-black/80 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <div className="absolute bottom-0 left-0 w-full p-4 translate-y-full group-hover:translate-y-0 transition-transform bg-white text-black flex items-center justify-between font-cinzel font-bold">
                <span className="text-xs tracking-widest uppercase">Add To Blaze</span>
                <ShoppingBag className="w-4 h-4" />
              </div>
            </div>
            <div className="flex justify-between items-start font-cinzel px-2">
              <div>
                <h3 className="font-bold text-sm tracking-widest uppercase mb-1 group-hover:text-red-500 transition-colors">{product.name}</h3>
                <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold">{product.category}</p>
              </div>
              <span className="font-bold text-sm">${product.price}</span>
            </div>
          </Link>
        ))}
      </div>

      <section className="mt-40 py-24 border border-white/10 text-center rounded-3xl bg-zinc-950">
        <h2 className="text-3xl md:text-5xl font-cinzel font-bold mb-8 italic text-red-600 uppercase">Feed the flame</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-12 italic text-lg leading-relaxed">
          Join the inner circle. Be the first to witness our newest forgeries and exclusive tattoo concept drops.
        </p>
        <div className="flex max-w-md mx-auto px-4">
          <input 
            type="email" 
            placeholder="ENTER EMAIL" 
            className="flex-grow bg-transparent border border-white/20 px-4 py-3 text-xs tracking-widest focus:border-red-600 outline-none transition-colors font-cinzel font-bold rounded-l-2xl"
          />
          <button className="bg-red-600 text-white px-6 py-3 font-bold text-xs tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] font-cinzel uppercase rounded-r-2xl border-l-0">
            Ignite
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
