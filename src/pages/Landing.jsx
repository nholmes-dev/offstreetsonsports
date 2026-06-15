import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <div className="relative h-[calc(100vh-80px)] flex flex-col items-center justify-center overflow-hidden px-4">
      
      {/* 1. The Boxing Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{ 
          // Placeholder Unsplash image - you can swap this URL with one of her actual brand photos later
          backgroundImage: "url('https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop')" 
        }}
      />
      
      {/* 2. The Dark Overlay - Keeps the image moody and the text readable */}
      <div className="absolute inset-0 bg-zinc-950/80 -z-10" />

      {/* Hero Content */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-none mb-6">
          Rule The <br />
          <span className="text-brand drop-shadow-lg">Ring.</span>
        </h1>
        
        <p className="text-zinc-300 text-lg md:text-xl max-w-lg mx-auto mb-10 drop-shadow-md font-medium">
          Premium, personalized fightwear and team kits built for the streets and the spotlight. No compromises.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/customise" className="bg-brand text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg text-lg hover:bg-lime-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(204,255,0,0.3)]">
            Build Your Kit
          </Link>
          <Link to="/customise" className="bg-zinc-950/50 backdrop-blur-sm border-2 border-zinc-700 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-lg text-lg hover:border-white transition-all">
            Get a Quote
          </Link>
        </div>
      </motion.div>

      {/* 3. Your Developer Footer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-6 z-10 text-xs text-zinc-500 uppercase tracking-widest font-semibold"
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
