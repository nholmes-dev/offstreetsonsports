import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
<nav className={`fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-50 transition-all ${isHome ? 'bg-transparent' : 'bg-zinc-950/60 backdrop-blur-md border-b border-zinc-800/50'}`}> 
<Link to="/" className="text-xl md:text-2xl font-black uppercase tracking-tighter">
  OFF STREETS - <span className="text-brand">ON SPORTS</span>
</Link>
      
      <div className="flex gap-4 md:gap-8 items-center">
        {/* Contact & Social Icons */}
        <div className="flex gap-3 md:gap-5 text-zinc-300">
          <a href="tel:+447939233017" title="Call Us" className="hover:text-brand hover:scale-110 transition-all">
            <Phone size={20} />
          </a>
          <a href="mailto:offstreetsonsports@gmail.com" title="Email Us" className="hover:text-brand hover:scale-110 transition-all">
            <Mail size={20} />
          </a>
          <a href="https://www.instagram.com/offstreetsonsports" target="_blank" rel="noreferrer" title="Instagram" className="hover:text-brand hover:scale-110 transition-all">
            <Instagram size={20} />
          </a>
          <a href="https://www.facebook.com/OffstreetsOnsports" target="_blank" rel="noreferrer" title="Facebook" className="hover:text-brand hover:scale-110 transition-all">
            <Facebook size={20} />
          </a>
        </div>

        {/* Call To Action */}
        <Link to="/customise" className="bg-brand text-black px-4 py-2 md:px-6 md:py-2.5 rounded-md font-bold uppercase text-sm hover:bg-lime-400 hover:scale-105 transition-all whitespace-nowrap shadow-[0_0_15px_rgba(204,255,0,0.2)]">
          Customise Now
        </Link>
      </div>
    </nav>
  );
}
