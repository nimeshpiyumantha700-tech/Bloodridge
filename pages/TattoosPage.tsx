
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
    <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <div className="mb-20">
        <h2 className="text-red-600 font-cinzel text-sm mb-4 tracking-[0.5em] font-bold uppercase">Artistry</h2>
        <h1 className="text-5xl md:text-7xl font-cinzel font-black mb-8 text-black">TATTOO GALLERY</h1>
        
        <div className="flex flex-wrap gap-4">
          {styles.map(s => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`px-6 py-2 border-2 transition-all font-cinzel font-bold rounded-xl ${
                filter === s 
                  ? 'bg-black text-white border-black' 
                  : 'bg-white text-black border-gray-100 hover:border-black'
              }`}
            >
              {s.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
        {filteredTattoos.map(tattoo => (
          <div key={tattoo.id} className="group relative aspect-[3/4] overflow-hidden bg-gray-50 border border-gray-100 rounded-3xl">
            <img 
              src={tattoo.image} 
              alt={tattoo.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-8 text-center">
              <span className="text-red-400 text-xs tracking-[0.3em] mb-2 uppercase font-cinzel font-bold">{tattoo.style}</span>
              <h3 className="text-2xl font-cinzel font-bold mb-4 text-white">{tattoo.title}</h3>
              <p className="text-sm text-gray-300 mb-6 italic">Artist: {tattoo.artist}</p>
              <Link to="/booking" className="px-6 py-2 bg-white text-black text-xs font-bold tracking-widest hover:bg-red-600 hover:text-white transition-colors font-cinzel rounded-xl">
                RESERVE SIMILAR
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* AI Concept Section */}
      <section className="bg-gray-50 border border-gray-100 p-8 md:p-16 rounded-3xl shadow-sm">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center space-x-3 mb-6">
            <Sparkles className="text-red-600 w-8 h-8" />
            <h2 className="text-3xl font-cinzel font-bold tracking-widest text-black">BLOODRIDGE AI CONSULTANT</h2>
          </div>
          <p className="text-gray-600 mb-8 font-medium italic text-lg leading-relaxed">
            Need a starting point for your next piece? Tell our AI assistant your interests or mood, and let it generate a concept in the classic Bloodridge aesthetic.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 font-cinzel">
            <input 
              type="text" 
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="e.g. 'Cybernetic heart with thorny vines'"
              className="flex-grow bg-white border border-gray-200 p-4 text-black focus:border-black outline-none font-serif italic rounded-2xl transition-colors"
            />
            <button 
              onClick={handleAiConsult}
              disabled={isAiLoading}
              className="px-8 py-4 bg-black text-white font-bold tracking-widest hover:bg-red-600 transition-all disabled:opacity-50 flex items-center justify-center font-cinzel rounded-2xl"
            >
              {isAiLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'GENERATE CONCEPT'}
            </button>
          </div>

          {aiResult && (
            <div className="mt-12 bg-white border border-gray-200 p-8 rounded-3xl animate-in fade-in slide-in-from-top-4 shadow-xl">
              <div className="flex justify-between items-start mb-6 font-cinzel">
                <h3 className="text-2xl font-bold text-red-600 uppercase">{aiResult.conceptName}</h3>
                <button onClick={() => setAiResult(null)} className="p-1 text-gray-400 hover:text-black transition-colors"><X className="w-5 h-5" /></button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xs tracking-widest text-gray-400 mb-2 font-bold font-cinzel">THE CONCEPT</h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-6 italic">{aiResult.description}</p>
                  
                  <h4 className="text-xs tracking-widest text-gray-400 mb-2 font-bold font-cinzel">RECOMMENDED STYLE</h4>
                  <p className="text-sm text-black mb-6 font-bold font-cinzel">{aiResult.styleSuggestion}</p>
                </div>
                <div>
                  <h4 className="text-xs tracking-widest text-gray-400 mb-2 font-bold font-cinzel">SUGGESTED PLACEMENT</h4>
                  <p className="text-sm text-black mb-6 font-bold font-cinzel">{aiResult.placement}</p>

                  <h4 className="text-xs tracking-widest text-gray-400 mb-2 font-bold font-cinzel">KEY ELEMENTS</h4>
                  <ul className="flex flex-wrap gap-2">
                    {aiResult.keyElements.map((el: string, i: number) => (
                      <li key={i} className="px-3 py-1 bg-gray-100 text-black text-[10px] tracking-widest border border-gray-200 font-cinzel font-bold rounded-lg">{el.toUpperCase()}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-gray-100 flex justify-center">
                <Link to="/booking" className="text-sm font-bold tracking-widest text-black hover:text-red-600 flex items-center group font-cinzel transition-colors">
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
