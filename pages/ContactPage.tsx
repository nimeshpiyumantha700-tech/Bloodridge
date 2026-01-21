
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-red-500 font-cinzel text-sm mb-4 tracking-[0.5em] font-bold uppercase">Get in touch</h2>
          <h1 className="text-5xl md:text-7xl font-cinzel font-black mb-10 leading-none">CONTACT US</h1>
          
          <div className="space-y-10 mb-16">
            <div className="flex items-start space-x-6 p-6 bg-zinc-950/50 border border-white/5 rounded-3xl">
              <div className="p-4 bg-white text-black rounded-xl shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm font-cinzel">STUDIO ADDRESS</h4>
                <p className="text-gray-400 leading-relaxed font-medium italic font-serif">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 bg-zinc-950/50 border border-white/5 rounded-3xl">
              <div className="p-4 bg-white text-black rounded-xl shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm font-cinzel">PHONE</h4>
                <p className="text-gray-400 leading-relaxed font-medium italic font-serif">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-zinc-950/50 border border-white/5 rounded-3xl">
              <div className="p-4 bg-white text-black rounded-xl shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm font-cinzel">EMAIL</h4>
                <p className="text-gray-400 leading-relaxed font-medium italic font-serif">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-xs font-bold mb-6 tracking-widest uppercase">Follow the rebellion</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-xl"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-xl"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all rounded-xl"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/10 p-8 md:p-12 rounded-3xl shadow-xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500 font-cinzel">YOUR NAME</label>
              <input 
                type="text" 
                className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors rounded-2xl font-serif italic"
                placeholder="ENTER NAME"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500 font-cinzel">YOUR EMAIL</label>
              <input 
                type="email" 
                className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors rounded-2xl font-serif italic"
                placeholder="ENTER EMAIL"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500 font-cinzel">SUBJECT</label>
              <select className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors rounded-2xl font-serif italic">
                <option>GENERAL INQUIRY</option>
                <option>TATTOO CONSULTATION</option>
                <option>SHOP / ORDER ISSUE</option>
                <option>PRESS / COLLABORATION</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500 font-cinzel">MESSAGE</label>
              <textarea 
                rows={6}
                className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors resize-none rounded-2xl font-serif italic"
                placeholder="HOW CAN WE HELP?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-white text-black font-bold tracking-widest text-sm hover:bg-red-500 hover:text-white transition-all flex items-center justify-center group rounded-2xl font-cinzel shadow-lg"
            >
              SEND MESSAGE <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
