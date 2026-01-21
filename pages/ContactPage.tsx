
import React from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Twitter, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-red-600 font-cinzel text-sm mb-4 tracking-[0.5em] font-bold uppercase">Get in touch</h2>
          <h1 className="text-5xl md:text-7xl font-cinzel font-black mb-10 leading-none text-black">CONTACT US</h1>
          
          <div className="space-y-10 mb-16">
            <div className="flex items-start space-x-6 p-6 bg-gray-50 border border-gray-100 rounded-3xl shadow-sm">
              <div className="p-4 bg-black text-white rounded-xl shrink-0 shadow-lg">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm font-cinzel text-black">STUDIO ADDRESS</h4>
                <p className="text-gray-600 leading-relaxed font-medium italic font-serif">{CONTACT_INFO.address}</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6 p-6 bg-gray-50 border border-gray-100 rounded-3xl shadow-sm">
              <div className="p-4 bg-black text-white rounded-xl shrink-0 shadow-lg">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm font-cinzel text-black">PHONE</h4>
                <p className="text-gray-600 leading-relaxed font-medium italic font-serif">{CONTACT_INFO.phone}</p>
              </div>
            </div>

            <div className="flex items-start space-x-6 p-6 bg-gray-50 border border-gray-100 rounded-3xl shadow-sm">
              <div className="p-4 bg-black text-white rounded-xl shrink-0 shadow-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold tracking-widest mb-2 text-sm font-cinzel text-black">EMAIL</h4>
                <p className="text-gray-600 leading-relaxed font-medium italic font-serif">{CONTACT_INFO.email}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-cinzel text-xs font-bold mb-6 tracking-widest uppercase text-gray-400">Follow the rebellion</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all rounded-xl shadow-sm"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all rounded-xl shadow-sm"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-12 h-12 border-2 border-gray-100 flex items-center justify-center text-black hover:bg-black hover:text-white transition-all rounded-xl shadow-sm"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        <div className="bg-white border-2 border-gray-100 p-8 md:p-12 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-400 font-cinzel">YOUR NAME</label>
              <input 
                type="text" 
                className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all rounded-2xl font-serif italic"
                placeholder="ENTER NAME"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-400 font-cinzel">YOUR EMAIL</label>
              <input 
                type="email" 
                className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all rounded-2xl font-serif italic"
                placeholder="ENTER EMAIL"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-400 font-cinzel">SUBJECT</label>
              <select className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all rounded-2xl font-serif italic">
                <option>GENERAL INQUIRY</option>
                <option>TATTOO CONSULTATION</option>
                <option>SHOP / ORDER ISSUE</option>
                <option>PRESS / COLLABORATION</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] tracking-widest font-bold text-gray-400 font-cinzel">MESSAGE</label>
              <textarea 
                rows={6}
                className="w-full bg-gray-50 border border-gray-100 p-4 text-black focus:border-black outline-none transition-all resize-none rounded-2xl font-serif italic"
                placeholder="HOW CAN WE HELP?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-black text-white font-bold tracking-widest text-sm hover:bg-red-600 transition-all flex items-center justify-center group rounded-2xl font-cinzel shadow-xl"
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
