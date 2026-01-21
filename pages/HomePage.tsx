
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag, Calendar, Flame } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale brightness-100 opacity-90 transition-transform duration-[10s] hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-red-100/30 to-transparent mix-blend-multiply"></div>
        </div>

        {/* Floating Embers */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="ember-container">
            {[...Array(15)].map((_, i) => (
              <div key={i} className={`ember ember-${i % 3}`} style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          {/* Logo Mark */}
          <div className="mb-12 flex justify-center animate-in fade-in zoom-in duration-1000">
            <div className="w-24 h-24 bg-black rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden border-2 border-white/20">
              <img src="logo.png" alt="Bloodridge Mark" className="w-16 h-16 object-contain" />
            </div>
          </div>
          
          <h2 className="text-red-600 font-cinzel text-sm md:text-lg mb-4 tracking-[0.5em] flex items-center justify-center gap-3 drop-shadow-sm uppercase font-bold">
            <Flame className="w-5 h-5 animate-pulse" /> Fuel the fire <Flame className="w-5 h-5 animate-pulse" />
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-cinzel font-black tracking-tighter mb-8 leading-none select-none text-black">
            BLOOD<br /><span className="text-outline-black text-transparent hover:text-black transition-all duration-700">RIDGE</span>
          </h1>
          <p className="text-gray-800 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium italic leading-relaxed">
            Where your permanent legacy is forged. Unleash your inner fire with world-class artistry and aggressive streetwear.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/booking" 
              className="w-full sm:w-auto px-10 py-5 bg-black text-white font-bold tracking-widest hover:bg-red-600 transition-all duration-300 flex items-center justify-center group shadow-xl font-cinzel rounded-2xl"
            >
              RESERVE A SLOT <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/shop" 
              className="w-full sm:w-auto px-10 py-5 border-2 border-black text-black font-bold tracking-widest hover:bg-black hover:text-white transition-all duration-300 flex items-center justify-center group backdrop-blur-sm font-cinzel rounded-2xl"
            >
              ORDER NOW <ShoppingBag className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories / Split Section */}
      <section className="flex flex-col md:flex-row min-h-screen border-t border-gray-100 bg-white p-4 gap-4">
        <div className="flex-1 relative group overflow-hidden border border-gray-100 bg-gray-50 rounded-3xl">
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop" 
            alt="Tattoos" 
            className="w-full h-full object-cover grayscale brightness-100 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-white/20 group-hover:bg-white/10 transition-colors">
            <h3 className="text-4xl md:text-6xl font-cinzel font-bold mb-6 tracking-widest text-white drop-shadow-lg">THE FORGE</h3>
            <p className="text-white mb-8 max-w-md italic tracking-widest text-sm uppercase font-bold drop-shadow-md">Permanent markers of rebellion.</p>
            <Link to="/tattoos" className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-red-600 hover:text-white transition-all font-cinzel rounded-xl shadow-lg">VIEW ARTISTRY</Link>
          </div>
        </div>
        <div className="flex-1 relative group overflow-hidden border border-gray-100 bg-gray-50 rounded-3xl">
          <img 
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop" 
            alt="Streetwear" 
            className="w-full h-full object-cover grayscale brightness-100 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-white/20 group-hover:bg-white/10 transition-colors">
            <h3 className="text-4xl md:text-6xl font-cinzel font-bold mb-6 tracking-widest text-white drop-shadow-lg">THE LABEL</h3>
            <p className="text-white mb-8 max-w-md italic tracking-widest text-sm uppercase font-bold drop-shadow-md">Streetwear for the heat of the night.</p>
            <Link to="/shop" className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-red-600 hover:text-white transition-all font-cinzel rounded-xl shadow-lg">EXPLORE DROP</Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 font-cinzel">
            <div className="text-center group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:rotate-[360deg] transition-transform duration-700">
                <img src="logo.png" alt="Artistry" className="w-8 h-8 object-contain" />
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-widest text-black">MASTER ARTISTRY</h4>
              <p className="text-gray-600 font-medium italic leading-relaxed font-serif">
                Aggressive blackwork and cyberpunk realism. We don't just ink; we forge legacies.
              </p>
            </div>
            <div className="text-center group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:rotate-[360deg] transition-transform duration-700">
                <ShoppingBag className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-widest text-black">FORGED APPAREL</h4>
              <p className="text-gray-600 font-medium italic leading-relaxed font-serif">
                Heavy-weight, ethically forged threads designed for the bold and the restless.
              </p>
            </div>
            <div className="text-center group p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:rotate-[360deg] transition-transform duration-700">
                <Calendar className="text-white w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-widest text-black">INSTANT BOOK</h4>
              <p className="text-gray-600 font-medium italic leading-relaxed font-serif">
                Don't let the fire fade. Secure your transformation with our real-time booking system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
