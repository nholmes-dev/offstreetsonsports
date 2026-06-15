import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Customise from './pages/Customise';

export default function App() {
  return (
    <Router>
      <div className="bg-zinc-950 min-h-screen text-white font-sans selection:bg-brand selection:text-black flex flex-col">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/customise" element={<Customise />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
