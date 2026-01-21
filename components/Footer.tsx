
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-black flex items-center justify-center rounded-xl shadow-md overflow-hidden">
              <img src="logo.png" alt="Bloodridge Logo" className="w-6 h-6 object-contain" />
            </div>
            <span className="font-cinzel text-xl font-bold tracking-tighter text-black">BLOODRIDGE</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed mb-6 italic">
            A sanctuary for the rebellious. Merging the permanent art of tattoos with the transient culture of streetwear.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition-all shadow-sm"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition-all shadow-sm"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="w-10 h-10 border border-gray-100 rounded-xl flex items-center justify-center text-gray-400 hover:text-red-600 hover:border-red-600 transition-all shadow-sm"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-cinzel text-sm font-bold mb-6 tracking-widest text-black">EXPLORE</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><Link to="/tattoos" className="hover:text-black transition-colors font-medium">Tattoo Gallery</Link></li>
            <li><Link to="/shop" className="hover:text-black transition-colors font-medium">Streetwear Shop</Link></li>
            <li><Link to="/about" className="hover:text-black transition-colors font-medium">Our Story</Link></li>
            <li><Link to="/booking" className="hover:text-black transition-colors font-medium">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-sm font-bold mb-6 tracking-widest text-black">SUPPORT</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-black transition-colors font-medium">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-black transition-colors font-medium">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-black transition-colors font-medium">Size Guide</a></li>
            <li><a href="#" className="hover:text-black transition-colors font-medium">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-sm font-bold mb-6 tracking-widest text-black">CONTACT</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-red-600 shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-red-600 shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-red-600 shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-gray-100 text-center text-[10px] text-gray-300 tracking-[0.3em] font-cinzel">
        &copy; {new Date().getFullYear()} BLOODRIDGE STUDIO. FORGED BY REBELLION.
      </div>
    </footer>
  );
};

export default Footer;
