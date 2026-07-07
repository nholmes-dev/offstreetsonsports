import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Menu, X } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import logo from '../logo.png';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-colors duration-500 ${isHome && !isMenuOpen ? 'bg-transparent border-transparent' : 'bg-zinc-950/90 backdrop-blur-md border-zinc-800/50'}`}>
      <div className="px-4 md:px-6 h-24 flex justify-between items-center">
        
        {/* 1. Mobile-Optimized Logo Area */}
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 md:gap-3 text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter shrink-0">
          <img src={logo} alt="Off Streets On Sports" className="h-24 w-auto" />
        </Link>
        
        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-5 text-zinc-300">
            <a href="tel:+447309728053" className="hover:text-brand transition-all"><Phone size={20} /></a>
            <a href="mailto:offstreetsonsports@gmail.com" className="hover:text-brand transition-all"><Mail size={20} /></a>
            <a href="https://www.instagram.com/offstreetsonsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/OffstreetsOnsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Facebook size={20} /></a>
            <a href="https://www.tiktok.com/@offstreets_onsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><TikTokIcon size={20} /></a>
          </div>
          <Link to="/about" className="border border-brand text-brand px-6 py-2.5 rounded-md font-bold uppercase text-sm hover:bg-brand hover:text-black transition-all">About</Link>
          <Link to="/customise" className="bg-brand text-black px-6 py-2.5 rounded-md font-bold uppercase text-sm hover:bg-[#c99338] transition-all shadow-[0_0_15px_rgba(182,131,50,0.2)]">
            Customise Now
          </Link>
        </div>

        {/* 3. Mobile Hamburger Button (Hidden on Desktop) */}
        <button 
          className="lg:hidden text-white hover:text-brand transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* 4. Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800/50 bg-zinc-950/95 px-4 py-6 flex flex-col gap-4 shadow-2xl">
          <Link
            to="/customise"
            onClick={() => setIsMenuOpen(false)}
            className="bg-brand text-black text-center px-4 py-4 rounded-md font-black uppercase tracking-wide text-lg hover:bg-[#c99338] transition-all shadow-[0_0_15px_rgba(182,131,50,0.2)]"
          >
            Customise Now
          </Link>
          <Link
            to="/about"
            onClick={() => setIsMenuOpen(false)}
            className="text-zinc-300 text-center py-3 font-bold uppercase tracking-wide border border-zinc-800 rounded-md hover:border-zinc-600 hover:text-white transition-all"
          >
            About Me
          </Link>

          <div className="flex justify-center gap-8 text-zinc-300 pt-4 border-t border-zinc-800/50">
            <a href="tel:+447309728053" className="hover:text-brand transition-all"><Phone size={24} /></a>
            <a href="mailto:offstreetsonsports@gmail.com" className="hover:text-brand transition-all"><Mail size={24} /></a>
            <a href="https://www.instagram.com/offstreetsonsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Instagram size={24} /></a>
            <a href="https://www.facebook.com/OffstreetsOnsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Facebook size={24} /></a>
            <a href="https://www.tiktok.com/@offstreets_onsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><TikTokIcon size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
