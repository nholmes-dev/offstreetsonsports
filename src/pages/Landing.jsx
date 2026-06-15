import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="relative h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Dark gritty radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800 to-zinc-950 -z-10" />

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          Rule The <br />
          <span className="text-brand">Ring.</span>
        </h1>
        
        <p className="text-zinc-400 text-lg md:text-xl max-w-lg mx-auto mb-10">
          Premium, personalized fightwear and team kits built for the streets and the spotlight. No compromises.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/customise" className="bg-brand text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg text-lg hover:bg-lime-400 hover:scale-105 transition-all">
            Build Your Kit
          </Link>
          <Link to="/customise" className="bg-transparent border-2 border-zinc-700 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg text-lg hover:border-white transition-all">
            Get a Quote
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
