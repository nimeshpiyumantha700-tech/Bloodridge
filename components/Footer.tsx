
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="inline-block mb-6">
            <span className="font-cinzel text-2xl font-bold tracking-tighter">BLOODRIDGE</span>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 italic">
            A sanctuary for the rebellious. Merging the permanent art of tattoos with the transient culture of streetwear.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-red-500 transition-colors"><Facebook className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-cinzel text-sm font-bold mb-6 tracking-widest">EXPLORE</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/tattoos" className="hover:text-white transition-colors">Tattoo Gallery</Link></li>
            <li><Link to="/shop" className="hover:text-white transition-colors">Streetwear Shop</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
            <li><Link to="/booking" className="hover:text-white transition-colors">Book Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-sm font-bold mb-6 tracking-widest">SUPPORT</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinzel text-sm font-bold mb-6 tracking-widest">CONTACT</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-white shrink-0" />
              <span>{CONTACT_INFO.address}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-white shrink-0" />
              <span>{CONTACT_INFO.phone}</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-white shrink-0" />
              <span>{CONTACT_INFO.email}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20 pt-8 border-t border-white/5 text-center text-xs text-gray-600 tracking-widest font-cinzel">
        &copy; {new Date().getFullYear()} BLOODRIDGE STUDIO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;
