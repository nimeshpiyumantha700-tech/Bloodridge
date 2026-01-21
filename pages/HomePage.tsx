
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scissors, ShoppingBag, Calendar, Flame } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image - Styled to match the provided artwork */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale brightness-75 transition-transform duration-[10s] hover:scale-110"
          />
          {/* Fire/Embers Overlay Effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
          
          {/* Bottom Fire Glow */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-orange-600/20 to-transparent mix-blend-screen"></div>
        </div>

        {/* Floating Embers (CSS Animation) */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="ember-container">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`ember ember-${i % 5}`} style={{ 
                left: `${Math.random() * 100}%`, 
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}></div>
            ))}
          </div>
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl">
          <h2 className="text-red-500 font-syncopate text-sm md:text-lg mb-4 tracking-[0.5em] flex items-center justify-center gap-3 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">
            <Flame className="w-5 h-5 animate-pulse" /> FUEL THE FIRE <Flame className="w-5 h-5 animate-pulse" />
          </h2>
          <h1 className="text-7xl md:text-[10rem] font-syncopate font-bold tracking-tighter mb-8 leading-none select-none">
            BLOOD<br /><span className="text-outline-white text-transparent hover:text-white transition-colors duration-700">RIDGE</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-light leading-relaxed drop-shadow-lg">
            Where your permanent legacy is forged. Unleash your inner fire with world-class artistry and aggressive streetwear.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              to="/booking" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-black font-bold tracking-widest hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center group shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              RESERVE A SLOT <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/shop" 
              className="w-full sm:w-auto px-10 py-5 border border-white text-white font-bold tracking-widest hover:bg-red-600 hover:border-red-600 transition-all duration-300 flex items-center justify-center group backdrop-blur-sm"
            >
              ORDER NOW <ShoppingBag className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Categories / Split Section */}
      <section className="flex flex-col md:flex-row min-h-screen border-t border-white/10 bg-black">
        <div className="flex-1 relative group overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <img 
            src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&w=2071&auto=format&fit=crop" 
            alt="Tattoos" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-black/40 group-hover:bg-black/10 transition-colors">
            <h3 className="text-4xl md:text-6xl font-syncopate font-bold mb-6">THE FORGE</h3>
            <p className="text-gray-300 mb-8 max-w-md italic tracking-widest text-sm uppercase">Permanent markers of rebellion.</p>
            <Link to="/tattoos" className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-red-600 hover:text-white transition-all">VIEW ARTISTRY</Link>
          </div>
        </div>
        <div className="flex-1 relative group overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2070&auto=format&fit=crop" 
            alt="Streetwear" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-black/40 group-hover:bg-black/10 transition-colors">
            <h3 className="text-4xl md:text-6xl font-syncopate font-bold mb-6">THE LABEL</h3>
            <p className="text-gray-300 mb-8 max-w-md italic tracking-widest text-sm uppercase">Streetwear for the heat of the night.</p>
            <Link to="/shop" className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-red-600 hover:text-white transition-all">EXPLORE DROP</Link>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-32 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:rotate-[360deg] transition-transform duration-700">
                <Scissors className="text-black w-8 h-8" />
              </div>
              <h4 className="font-syncopate text-xl font-bold mb-4">MASTER ARTISTRY</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Aggressive blackwork and cyberpunk realism. We don't just ink; we forge legacies.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:rotate-[360deg] transition-transform duration-700">
                <ShoppingBag className="text-black w-8 h-8" />
              </div>
              <h4 className="font-syncopate text-xl font-bold mb-4">FORGED APPAREL</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Heavy-weight, ethically forged threads designed for the bold and the restless.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-white rounded-sm flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:rotate-[360deg] transition-transform duration-700">
                <Calendar className="text-black w-8 h-8" />
              </div>
              <h4 className="font-syncopate text-xl font-bold mb-4">INSTANT BOOK</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                Don't let the fire fade. Secure your transformation with our real-time booking system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .text-outline-white {
          -webkit-text-stroke: 1px rgba(255,255,255,0.6);
        }
        .ember {
          position: absolute;
          bottom: -20px;
          width: 2px;
          height: 2px;
          background: #ff6600;
          border-radius: 50%;
          filter: blur(1px);
          animation: float-up linear infinite;
        }
        .ember-1 { width: 3px; height: 3px; background: #ff3300; }
        .ember-2 { width: 4px; height: 4px; background: #ffaa00; }
        
        @keyframes float-up {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.8; }
          100% { transform: translateY(-100vh) translateX(50px) scale(0); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
