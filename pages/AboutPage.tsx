
import React from 'react';
import { CONTACT_INFO } from '../constants.tsx';
import { Flame } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative h-[60vh] flex items-center justify-center bg-black border-b border-white/10">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2074&auto=format&fit=crop&grayscale=true" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-cinzel font-black tracking-tighter uppercase">Our Vision</h1>
          <div className="flex items-center justify-center mt-6 gap-3">
            <div className="w-8 h-[1px] bg-red-600"></div>
            <p className="text-gray-400 tracking-[0.5em] uppercase text-sm font-cinzel font-bold italic">Fuel the fire</p>
            <div className="w-8 h-[1px] bg-red-600"></div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-4xl font-cinzel font-bold mb-8 italic text-red-600 uppercase">A Spark in the Shadows</h2>
          <p className="text-gray-400 text-xl leading-relaxed mb-8 font-medium italic font-serif">
            Founded by artist Nimesh Piyumantha, Bloodridge began with a simple mission: to fuel the fire of rebellion within every individual. We believe that self-expression should be as permanent and bold as the ink we place on your skin.
          </p>
          <p className="text-gray-400 text-xl leading-relaxed font-medium italic font-serif">
            Our dual identity as a tattoo studio and a streetwear label allows us to bridge the gap between permanent art and transient fashion. We aren't just selling clothes or ink; we're providing the fuel for your creative identity. Every drop, every piece of art, and every stitch is forged to withstand the heat of the streets.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <img src="https://images.unsplash.com/photo-1590208653882-96519194d73e?q=80&w=1961&auto=format&fit=crop&grayscale=true" className="w-full h-80 object-cover border border-white/10 grayscale rounded-3xl" />
          <img src="https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=2070&auto=format&fit=crop&grayscale=true" className="w-full h-80 object-cover mt-12 border border-white/10 grayscale rounded-3xl" />
        </div>
      </section>

      <section className="bg-zinc-950 py-32">
        <div className="max-w-7xl mx-auto px-4 text-center mb-20">
          <h2 className="text-4xl font-cinzel font-bold mb-4 tracking-widest uppercase">THE COLLECTIVE</h2>
          <p className="text-red-600 tracking-widest text-xs uppercase font-bold italic font-cinzel">Forging the Future</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { name: 'NIMESH', role: 'Founder & Lead Artist', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&grayscale=true' },
            { name: 'PIYUMANTHA', role: 'Cyberpunk Specialist', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&grayscale=true' },
            { name: 'VIHAN', role: 'Realism & Blackwork', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&grayscale=true' },
          ].map(artist => (
            <div key={artist.name} className="group text-center">
              <div className="aspect-[3/4] overflow-hidden mb-6 border border-white/5 bg-black rounded-3xl shadow-xl">
                <img src={artist.img} className="w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="text-xl font-cinzel font-bold mb-1 tracking-widest uppercase">{artist.name}</h3>
              <p className="text-red-600 text-xs tracking-widest font-bold font-cinzel uppercase">{artist.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-4 border-t border-white/10 text-center font-cinzel">
        <h2 className="text-3xl font-bold mb-8 italic uppercase tracking-widest">Find the Forge</h2>
        <p className="text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed text-xl font-serif italic">
          {CONTACT_INFO.address}
        </p>
        <div className="max-w-5xl mx-auto h-[400px] bg-zinc-900 border border-white/10 flex items-center justify-center grayscale rounded-3xl overflow-hidden shadow-2xl">
           <span className="text-gray-500 font-bold tracking-widest uppercase">Map Integration</span>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
