
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-red-500 font-syncopate text-sm mb-4 tracking-[0.5em]">GET IN TOUCH</h2>
          <h1 className="text-5xl md:text-7xl font-syncopate font-bold mb-10 leading-none">CONTACT US</h1>
          
          <div className="space-y-10 mb-16">
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-white text-black rounded-sm shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm">STUDIO ADDRESS</h4>
                <p className="text-gray-400 leading-relaxed font-light">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="p-4 bg-white text-black rounded-sm shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm">PHONE</h4>
                <p className="text-gray-400 leading-relaxed font-light">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="p-4 bg-white text-black rounded-sm shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm">EMAIL</h4>
                <p className="text-gray-400 leading-relaxed font-light">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-syncopate text-xs font-bold mb-6 tracking-widest">FOLLOW THE REBELLION</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="bg-zinc-950 border border-white/10 p-8 md:p-12">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500">YOUR NAME</label>
              <input 
                type="text" 
                className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors"
                placeholder="ENTER NAME"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500">YOUR EMAIL</label>
              <input 
                type="email" 
                className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors"
                placeholder="ENTER EMAIL"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500">SUBJECT</label>
              <select className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors">
                <option>GENERAL INQUIRY</option>
                <option>TATTOO CONSULTATION</option>
                <option>SHOP / ORDER ISSUE</option>
                <option>PRESS / COLLABORATION</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-500">MESSAGE</label>
              <textarea 
                rows={6}
                className="w-full bg-black border border-white/20 p-4 text-white focus:border-white outline-none transition-colors resize-none"
                placeholder="HOW CAN WE HELP?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-white text-black font-bold tracking-widest text-sm hover:bg-red-500 hover:text-white transition-all flex items-center justify-center group"
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
