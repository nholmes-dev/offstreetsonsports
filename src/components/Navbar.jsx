import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, Menu, X, ChevronDown } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import logo from '../logo.png';

const sportLinks = [
  { label: 'Fight Wear', href: '/fight-wear' },
  { label: 'Rugby Kits', href: '/team-sports' },
  { label: 'Football Kits', href: '/team-sports' },
  { label: 'Gym Wear', href: '/gym-wear' },
  { label: 'Dancewear', href: '/dancewear' },
  { label: 'Custom & Other', href: '/custom' },
];

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSportsOpen, setIsSportsOpen] = useState(false);
  const [isMobileSportsOpen, setIsMobileSportsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsSportsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsSportsOpen(false);
    setIsMobileSportsOpen(false);
  }, [location.pathname]);

  return (
    <nav className={`fixed top-0 w-full z-50 border-b transition-colors duration-500 ${isHome && !isMenuOpen ? 'bg-transparent border-transparent' : 'bg-zinc-950/90 backdrop-blur-md border-zinc-800/50'}`}>
      <div className="px-4 md:px-6 h-24 md:h-32 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 md:gap-3 shrink-0">
          <img src={logo} alt="Off Streets On Sports" className="h-20 md:h-36 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <div className="flex gap-5 text-zinc-300">
            <a href="tel:+447309728053" className="hover:text-brand transition-all"><Phone size={20} /></a>
            <a href="mailto:offstreetsonsports@gmail.com" className="hover:text-brand transition-all"><Mail size={20} /></a>
            <a href="https://www.instagram.com/offstreetsonsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Instagram size={20} /></a>
            <a href="https://www.facebook.com/OffstreetsOnsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><Facebook size={20} /></a>
            <a href="https://www.tiktok.com/@offstreets_onsports" target="_blank" rel="noreferrer" className="hover:text-brand transition-all"><TikTokIcon size={20} /></a>
          </div>

          {/* Our Sports dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsSportsOpen(v => !v)}
              className="flex items-center gap-1 text-zinc-300 font-bold uppercase text-sm hover:text-brand transition-all"
            >
              Our Sports <ChevronDown size={16} className={`transition-transform ${isSportsOpen ? 'rotate-180' : ''}`} />
            </button>
            {isSportsOpen && (
              <div className="absolute right-0 top-full mt-3 w-48 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl overflow-hidden z-50">
                {sportLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    to={href}
                    className="block px-5 py-3 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-brand transition-colors font-semibold"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" className="border border-brand text-brand px-6 py-2.5 rounded-md font-bold uppercase text-sm hover:bg-brand hover:text-black transition-all">About</Link>
          <Link to="/customise" className="bg-brand text-black px-6 py-2.5 rounded-md font-bold uppercase text-sm hover:bg-[#c99338] transition-all shadow-[0_0_15px_rgba(182,131,50,0.2)]">
            Design Your Kit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white hover:text-brand transition-colors p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800/50 bg-zinc-950/95 px-4 py-6 flex flex-col gap-4 shadow-2xl">
          <Link
            to="/customise"
            className="bg-brand text-black text-center px-4 py-4 rounded-md font-black uppercase tracking-wide text-lg hover:bg-[#c99338] transition-all shadow-[0_0_15px_rgba(182,131,50,0.2)]"
          >
            Design Your Kit
          </Link>

          {/* Mobile sports dropdown */}
          <button
            onClick={() => setIsMobileSportsOpen(v => !v)}
            className="flex items-center justify-center gap-2 text-zinc-300 text-center py-3 font-bold uppercase tracking-wide border border-zinc-800 rounded-md hover:border-zinc-600 hover:text-white transition-all"
          >
            Our Sports <ChevronDown size={16} className={`transition-transform ${isMobileSportsOpen ? 'rotate-180' : ''}`} />
          </button>
          {isMobileSportsOpen && (
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
              {sportLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="block px-5 py-3 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-brand transition-colors font-semibold border-b border-zinc-800/50 last:border-0"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <Link
            to="/about"
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
