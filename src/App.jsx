import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Customise from './pages/Customise';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function AppLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-brand selection:text-black flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/customise" element={<Customise />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      {!isHome && <Footer />}
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
