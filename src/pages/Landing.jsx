import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 1. THIS IS THE MAGIC KEY: Import the image directly from your src folder
import heroBg from '../hero-bg.png'; 

export default function Landing() {
  return (
    <div className="relative h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden px-4">
      
      {/* 2. The Background Image (Now layered at z-0) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          // 3. We inject the imported variable directly into the CSS
          backgroundImage: `url(${heroBg})` 
        }}
      />
      
      {/* 4. The Dark Overlay (Layered above the image at z-10) */}
      <div className="absolute inset-0 bg-zinc-950/80 z-10" />

      {/* Hero Content (Layered above everything at z-20) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 text-center"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          Rule The <br />
          <span className="text-brand drop-shadow-lg">Ring.</span>
        </h1>
        
        <p className="text-zinc-300 text-lg md:text-xl max-w-lg mx-auto mb-10 drop-shadow-md font-medium">
          Premium, personalized fightwear and team kits built for the streets and the spotlight. No compromises.
        </p>

        <div className="flex justify-center mt-4">
          <Link to="/customise" className="bg-brand text-black font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl hover:bg-lime-400 hover:scale-105 transition-all shadow-[0_0_25px_rgba(204,255,0,0.3)]">
            Build Your Kit
          </Link>
        </div>
      </motion.div>

      {/* Your Developer Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 z-20 text-xs text-zinc-500 uppercase tracking-widest font-semibold"
      >
        Website created by{' '}
        <a 
          href="https://nhwebdesign.co.uk" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-zinc-400 hover:text-brand transition-colors"
        >
          NHWebDesign
        </a>
      </motion.div>

    </div>
  );
}
