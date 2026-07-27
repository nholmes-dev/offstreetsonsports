import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import TikTokIcon from './TikTokIcon';
import logo from '../logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/60 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="Off Streets On Sports" className="h-20 w-auto" />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Premium custom fightwear and sportswear built for athletes, fighters, and teams who live and breathe sport.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Navigate</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Me', to: '/about' },
                { label: 'Build Your Kit', to: '/customise' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-zinc-400 hover:text-brand transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Legal */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-widest text-zinc-400 mb-4">Contact</h3>
            <ul className="space-y-2.5 mb-6">
              <li>
                <a href="tel:+447309728053" className="text-zinc-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
                  <Phone size={14} className="shrink-0" /> +44 7309 728053
                </a>
              </li>
              <li>
                <a href="mailto:offstreetsonsports@gmail.com" className="text-zinc-400 hover:text-brand transition-colors text-sm flex items-center gap-2">
                  <Mail size={14} className="shrink-0" /> offstreetsonsports@gmail.com
                </a>
              </li>
            </ul>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/offstreetsonsports" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-brand transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/OffstreetsOnsports" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-brand transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.tiktok.com/@offstreets_onsports" target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-brand transition-colors">
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800/60 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-zinc-600 uppercase tracking-normal sm:tracking-widest">
          <span>© {year} Off Streets On Sports. All rights reserved.</span>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <Link to="/terms" className="hover:text-brand transition-colors">Terms</Link>
            <span className="text-zinc-700">·</span>
            <Link to="/privacy" className="hover:text-brand transition-colors">Privacy</Link>
            <span className="text-zinc-700">·</span>
            <span>
              Website by{' '}
              <a
                href="https://nhwebdesign.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-brand transition-colors"
              >
                NHWebDesign
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
