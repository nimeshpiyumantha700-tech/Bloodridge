
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TATTOOS } from '../constants.tsx';
import { brainstormTattooIdea } from '../services/geminiService.ts';
import { Sparkles, Loader2, X } from 'lucide-react';

const TattoosPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiResult, setAiResult] = useState<any>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const styles = ['All', 'Blackwork', 'Cyberpunk', 'Traditional', 'Realism', 'Geometric'];
  const filteredTattoos = filter === 'All' ? TATTOOS : TATTOOS.filter(t => t.style === filter);

  const handleAiConsult = async () => {
    if (!aiPrompt.trim()) return;
    setIsAiLoading(true);
    try {
      const result = await brainstormTattooIdea(aiPrompt);
      setAiResult(result);
    } catch (error) {
      console.error(error);
      alert('AI consultation failed. Please try again.');
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="mb-20">
        <h2 className="text-red-500 font-cinzel text-sm mb-4 tracking-[0.5em] font-bold uppercase">Artistry</h2>
        <h1 className="text-5xl md:text-7xl font-cinzel font-black mb-8">TATTOO GALLERY</h1>
        
        <div className="flex flex-wrap gap-4">
          {styles.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-6 py-2 border border-white/20 text-xs tracking-widest hover:border-white transition-all font-cinzel font-bold rounded-xl ${
                filter === s ? 'bg-white text-black border-white' : 'text-white'
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {filteredTattoos.map(tattoo => (
          <div key={tattoo.id} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5 rounded-3xl">
            <img 
              src={tattoo.image} 
              alt={tattoo.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
              <span className="text-red-500 text-xs tracking-[0.3em] mb-2 uppercase font-cinzel font-bold">{tattoo.style}</span>
              <h3 className="text-2xl font-cinzel font-bold mb-4">{tattoo.title}</h3>
              <p className="text-sm text-gray-300 mb-6 italic">Artist: {tattoo.artist}</p>
              <Link to="/booking" className="px-6 py-2 bg-white text-black text-xs font-bold tracking-widest hover:bg-red-500 hover:text-white transition-colors font-cinzel rounded-xl">
                RESERVE SIMILAR
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* AI Concept Section */}
      <section className="bg-zinc-950 border border-white/10 p-8 md:p-16 rounded-3xl">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="text-red-500 w-8 h-8" />
            <h2 className="text-3xl font-cinzel font-bold tracking-widest">BLOODRIDGE AI CONSULTANT</h2>
          </div>
          <p className="text-gray-400 mb-8 font-medium italic text-lg leading-relaxed">
            Need a starting point for your next piece? Tell our AI assistant your interests or mood, and let it generate a concept in the classic Bloodridge aesthetic.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 font-cinzel">
            <input 
              type="text" 
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="e.g. 'Cybernetic heart with thorny vines'"
              className="flex-grow bg-black border border-white/20 p-4 text-white focus:border-white outline-none font-serif italic rounded-2xl"
            />
            <button 
              onClick={handleAiConsult}
              disabled={isAiLoading}
              className="px-8 py-4 bg-white text-black font-bold tracking-widest hover:bg-red-500 hover:text-white transition-all disabled:opacity-50 flex items-center justify-center font-cinzel rounded-2xl"
            >
              {isAiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'GENERATE CONCEPT'}
            </button>
          </div>

          {aiResult && (
            <div className="mt-12 bg-black border border-red-500/30 p-8 rounded-3xl animate-in fade-in slide-in-from-top-4">
              <div className="flex justify-between items-start mb-6 font-cinzel">
                <h3 className="text-2xl font-bold text-red-500 uppercase">{aiResult.conceptName}</h3>
                <button onClick={() => setAiResult(null)} className="p-1 hover:text-red-500"><X className="w-5 h-5" /></button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs tracking-widest text-gray-500 mb-2 font-bold font-cinzel">THE CONCEPT</h4>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">{aiResult.description}</p>
                  
                  <h4 className="text-xs tracking-widest text-gray-500 mb-2 font-bold font-cinzel">RECOMMENDED STYLE</h4>
                  <p className="text-sm text-white mb-6 font-bold font-cinzel">{aiResult.styleSuggestion}</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest text-gray-500 mb-2 font-bold font-cinzel">SUGGESTED PLACEMENT</h4>
                  <p className="text-sm text-white mb-6 font-bold font-cinzel">{aiResult.placement}</p>

                  <h4 className="text-xs tracking-widest text-gray-500 mb-2 font-bold font-cinzel">KEY ELEMENTS</h4>
                  <ul className="flex flex-wrap gap-2">
                    {aiResult.keyElements.map((el: string, i: number) => (
                      <li key={i} className="px-3 py-1 bg-white/10 text-[10px] tracking-widest border border-white/5 font-cinzel font-bold rounded-lg">{el.toUpperCase()}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 flex justify-center">
                <Link to="/booking" className="text-sm font-bold tracking-widest hover:text-red-500 flex items-center group font-cinzel">
                  BOOK A SESSION FOR THIS CONCEPT <Sparkles className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default TattoosPage;
