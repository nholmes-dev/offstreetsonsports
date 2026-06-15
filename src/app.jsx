import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Upload, CheckCircle } from 'lucide-react';

export default function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    garmentType: '',
    quantity: '',
    customText: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Framer Motion animation variants for sliding steps in and out
  const slideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.2 } },
  };

  return (
    <div className="min-h-screen bg-zinc-950 font-sans selection:bg-brand selection:text-black">
      {/* Header */}
      <header className="p-6 border-b border-zinc-800 flex justify-center">
        <h1 className="text-3xl font-black tracking-tighter uppercase">
          Off Streets <span className="text-brand">On Sports</span>
        </h1>
      </header>

      {/* Main Form Container */}
      <main className="max-w-2xl mx-auto mt-12 p-6">
        
        {/* Progress Bar */}
        <div className="mb-8 flex items-center justify-between gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div 
                className={`h-full bg-brand transition-all duration-500 ${step >= i ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-2xl relative overflow-hidden min-h-[400px]">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: GARMENT SELECTION */}
            {step === 1 && (
              <motion.div key="step1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col h-full">
                <h2 className="text-2xl font-bold uppercase mb-2">Select Your Gear</h2>
                <p className="text-zinc-400 mb-6">What are we customizing today?</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {['Boxing Shorts', 'Tracksuits', 'Ring Jackets', 'Training Vests'].map((item) => (
                    <button 
                      key={item}
                      onClick={() => setFormData({...formData, garmentType: item})}
                      className={`p-4 rounded-lg border-2 text-left transition-all font-bold uppercase ${formData.garmentType === item ? 'border-brand text-brand bg-brand/10' : 'border-zinc-700 hover:border-zinc-500'}`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
                <div className="mt-auto flex justify-end">
                  <button onClick={nextStep} disabled={!formData.garmentType} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-lime-400 disabled:opacity-50">
                    Next Step <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: SIZING & DETAILS */}
            {step === 2 && (
              <motion.div key="step2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col h-full">
                <h2 className="text-2xl font-bold uppercase mb-6">Quantities & Sizing</h2>
                {/* Placeholder for complex sizing grid */}
                <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800 flex items-center justify-center h-32 mb-8 text-zinc-500">
                  [Sizing Grid Component Will Go Here]
                </div>
                <div className="mt-auto flex justify-between">
                  <button onClick={prevStep} className="text-zinc-400 hover:text-white px-4 py-3 font-bold flex items-center gap-2">
                    <ChevronLeft size={20} /> Back
                  </button>
                  <button onClick={nextStep} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-lime-400">
                    Next Step <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: CUSTOMIZATION (LOGOS & TEXT) */}
            {step === 3 && (
              <motion.div key="step3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col h-full">
                <h2 className="text-2xl font-bold uppercase mb-2">Make It Yours</h2>
                <p className="text-zinc-400 mb-6">Upload logos and specify printing details.</p>
                
                <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-brand transition-colors cursor-pointer mb-6">
                  <Upload className="text-zinc-400 mb-4" size={32} />
                  <p className="font-bold mb-1">Click to upload your logo</p>
                  <p className="text-sm text-zinc-500">PNG, SVG, or AI files only</p>
                </div>

                <div className="mt-auto flex justify-between">
                  <button onClick={prevStep} className="text-zinc-400 hover:text-white px-4 py-3 font-bold flex items-center gap-2">
                    <ChevronLeft size={20} /> Back
                  </button>
                  <button onClick={nextStep} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-lime-400">
                    Review Order <ChevronRight size={20} />
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: REVIEW */}
            {step === 4 && (
              <motion.div key="step4" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col h-full text-center items-center justify-center">
                <CheckCircle className="text-brand mb-6" size={64} />
                <h2 className="text-3xl font-black uppercase mb-4">Ready for the Ring</h2>
                <p className="text-zinc-400 mb-8 max-w-sm">
                  Review your specs below. Once submitted, our team will verify the details and send your final invoice.
                </p>
                <div className="mt-auto flex justify-between w-full">
                  <button onClick={prevStep} className="text-zinc-400 hover:text-white px-4 py-3 font-bold flex items-center gap-2">
                    <ChevronLeft size={20} /> Edit Details
                  </button>
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-zinc-200 uppercase tracking-wide">
                    Submit Request
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
