import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 w-full p-6 flex justify-between items-center z-50 transition-all ${isHome ? 'bg-transparent' : 'bg-zinc-950 border-b border-zinc-800'}`}>
      <Link to="/" className="text-xl font-black uppercase tracking-tighter">
        Off Streets
      </Link>
      <div className="flex gap-6 font-bold uppercase text-sm items-center">
        <Link to="/customise" className="hover:text-brand transition-colors">Portfolio</Link>
        <Link to="/customise" className="bg-brand text-black px-4 py-2 rounded-md hover:bg-lime-400 transition-colors">
          Customise Now
        </Link>
      </div>
    </nav>
  );
}