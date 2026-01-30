import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo2.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <Link to="/" className="inline-block">
            <img src={logo} alt="Logo" className="h-10 brightness-0 invert" />
          </Link>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Providing cutting-edge security solutions and advanced surveillance 
            technology to keep your premises safe and secure 24/7.
          </p>
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">f</div>
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">t</div>
            <div className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">in</div>
          </div>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-3">Quick Links</h4>
          <ul className="space-y-4 text-zinc-400">
            <li><Link to="/" className="hover:text-green-500 transition-colors">Home</Link></li>
            <li><Link to="/company" className="hover:text-green-500 transition-colors">Company</Link></li>
            <li><Link to="/blog" className="hover:text-green-500 transition-colors">Latest News</Link></li>
            <li><Link to="/contact" className="hover:text-green-500 transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-3">Services</h4>
          <ul className="space-y-4 text-zinc-400">
            <li><button className="hover:text-green-500 transition-colors">CCTV Installation</button></li>
            <li><button className="hover:text-green-500 transition-colors">Access Control</button></li>
            <li><button className="hover:text-green-500 transition-colors">Alarm Systems</button></li>
            <li><button className="hover:text-green-500 transition-colors">Maintenance</button></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-bold mb-6 border-l-4 border-green-600 pl-3">Contact Info</h4>
          <ul className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">📍</span>
              123 Random Street, Tech City, ST 12345
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">📞</span>
              +1 (xx) xxxxxxx
            </li>
            <li className="flex items-center">
              <span className="text-green-500 mr-2">✉️</span>
              example@Random.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-xs">
        <p>&copy; {currentYear} Khadija Hanif. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;