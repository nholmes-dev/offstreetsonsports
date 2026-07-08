import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Landing from './pages/Landing';
import Customise from './pages/Customise';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import FightWear from './pages/sports/FightWear';
import TeamSports from './pages/sports/TeamSports';
import GymWear from './pages/sports/GymWear';
import Dancewear from './pages/sports/Dancewear';
import CustomGear from './pages/sports/CustomGear';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-6">
      <p className="text-brand font-black uppercase tracking-widest text-sm mb-4">404</p>
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Page Not Found</h1>
      <p className="text-zinc-400 mb-8 max-w-sm">This page does not exist. Head back and build your kit.</p>
      <Link to="/" className="bg-brand text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-[#c99338] transition-all">
        Back Home
      </Link>
    </div>
  );
}

function AppLayout() {
  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-brand selection:text-black flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customise" element={<Customise />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/fight-wear" element={<FightWear />} />
          <Route path="/team-sports" element={<TeamSports />} />
          <Route path="/gym-wear" element={<GymWear />} />
          <Route path="/dancewear" element={<Dancewear />} />
          <Route path="/custom" element={<CustomGear />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}
