import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, BicepsFlexed, Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  // State to track if the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-colors duration-500 ${isHome && !isMenuOpen ? 'bg-transparent border-transparent' : 'bg-zinc-950/90 backdrop-blur-md border-zinc-800/50'}`}>
      <div className="p-4 md:p-6 flex justify-between items-center">
        
        {/* 1. Mobile-Optimized Logo Area */}
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 md:gap-3 text-lg sm:text-xl md:text-2xl font-black uppercase tracking-tighter shrink-0">
          <BicepsFlexed className="text-brand size-7 md:size-8 shrink-0" strokeWidth={2.5} />
          {/* Stacks the text cleanly on mobile, inline on desktop */}
          <div className="flex flex-col sm:flex-row sm:gap-2 leading-none md:leading-normal">
            <span>Off Streets</span>
            <span className="hidden sm:inline text-brand">-</span>
            <span className="text-brand">On Sports</span>
          </div>
        </Link>
        
        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-5 text-zinc-300">
            <a href="tel:+447939233017" className="hover:text-brand transition-all"><Phone size={20} /></a>
            <a href="mailto:offstreetsonsports@gmail.com" className="hover:text-brand transition-all"><Mail size={20} /></a>
            <a href="https://www.instagram.com/offstreetsonsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/OffstreetsOnsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Facebook size={20} /></a>
          </div>
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
        <div className="lg:hidden border-t border-zinc-800/50 bg-zinc-950/95 px-4 py-6 flex flex-col gap-6 shadow-2xl">
          <Link 
            to="/customise" 
            onClick={() => setIsMenuOpen(false)} 
            className="bg-brand text-black text-center px-4 py-4 rounded-md font-black uppercase tracking-wide text-lg hover:bg-[#c99338] transition-all shadow-[0_0_15px_rgba(182,131,50,0.2)]"
          >
            Customise Now
          </Link>
          
          <div className="flex justify-center gap-8 text-zinc-300 pt-4 border-t border-zinc-800/50">
            <a href="tel:+447939233017" className="hover:text-brand transition-all"><Phone size={24} /></a>
            <a href="mailto:offstreetsonsports@gmail.com" className="hover:text-brand transition-all"><Mail size={24} /></a>
            <a href="https://www.instagram.com/offstreetsonsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Instagram size={24} /></a>
            <a href="https://www.facebook.com/OffstreetsOnsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Facebook size={24} /></a>
          </div>
        </div>
      )}
    </nav>
  );
}
