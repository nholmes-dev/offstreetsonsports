import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// 1. THIS IS THE MAGIC KEY: Import the image directly from your src folder
import heroBg from '../hero-bg1.png'; 

export default function Landing() {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4">
      
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
          Premium, personalised fightwear and team kits built for the streets and the spotlight. We are not just any brand, we are a brand with purpose
        </p>

        <div className="flex justify-center mt-4">
          <Link to="/customise" className="bg-brand text-black font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl hover:bg-[#c99338] hover:scale-105 transition-all shadow-[0_0_25px_rgba(182,131,50,0.3)]">
            Build Your Kit
          </Link>
        </div>
      </motion.div>


    </div>
  );
}
