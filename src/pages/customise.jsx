import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Upload, CheckCircle, Calculator } from 'lucide-react';

// Live pricing logic mapped out
const pricingMap = {
  'Boxing Shorts': 45,
  'Tracksuits': 75,
  'Ring Jackets': 80,
  'Training Vests': 25
};

export default function Customise() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle'); // idle, submitting, success
  const [formData, setFormData] = useState({
    garmentType: '',
    quantity: 1,
    hasLogo: false,
    customText: '',
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const calculateTotal = () => {
    const basePrice = pricingMap[formData.garmentType] || 0;
    const quantity = parseInt(formData.quantity) || 1;
    const logoFee = formData.hasLogo ? 15 : 0;
    return (basePrice * quantity) + (logoFee * quantity);
  };

  const handleSubmit = async () => {
    setStatus('submitting');
    
    // Replace this URL with her real Formspree endpoint
    const formspreeUrl = "https://formspree.io/f/xrevjbrg"; 
    
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          estimatedQuote: `£${calculateTotal()}`
        }),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert("There was an issue submitting your request. Please try again.");
      }
    } catch (error) {
      setStatus('idle');
      alert("Network error. Please try again.");
    }
  };

  const slideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.2 } },
  };

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto mt-12 p-6 text-center">
        <CheckCircle className="text-brand w-24 h-24 mx-auto mb-6" />
        <h2 className="text-4xl font-black uppercase mb-4">Request Sent!</h2>
        <p className="text-zinc-400">Our team will review your specs and be in touch shortly to finalize your order and collect payment.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="mb-8 flex items-center justify-between gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
            <div className={`h-full bg-brand transition-all duration-500 ${step >= i ? 'w-full' : 'w-0'}`} />
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: GARMENT */}
          {step === 1 && (
            <motion.div key="s1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-2">Select Your Gear</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.keys(pricingMap).map((item) => (
                  <button 
                    key={item}
                    onClick={() => setFormData({...formData, garmentType: item})}
                    className={`p-6 rounded-lg border-2 text-left transition-all font-bold uppercase ${formData.garmentType === item ? 'border-brand text-brand bg-brand/10' : 'border-zinc-700 hover:border-zinc-500'}`}
                  >
                    <div>{item}</div>
                    <div className="text-sm font-normal text-zinc-400 mt-2">From £{pricingMap[item]}</div>
                  </button>
                ))}
              </div>
              <div className="mt-auto flex justify-end">
                <button onClick={nextStep} disabled={!formData.garmentType} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 disabled:opacity-50">
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: QUANTITY */}
          {step === 2 && (
            <motion.div key="s2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6">How many do you need?</h2>
              <div className="mb-8">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-sm">Total Quantity</label>
                <input 
                  type="number" 
                  min="1"
                  value={formData.quantity}
                  onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 text-xl focus:border-brand focus:outline-none"
                />
              </div>
              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2"><ChevronLeft size={20} /> Back</button>
                <button onClick={nextStep} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2">Next <ChevronRight size={20} /></button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: CUSTOMIZATION */}
          {step === 3 && (
            <motion.div key="s3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6">Make It Yours</h2>
              
              <div className="mb-6">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-sm">Custom Text / Initials</label>
                <input 
                  type="text" 
                  placeholder="e.g. 'THE CHAMP' on waistband"
                  value={formData.customText}
                  onChange={(e) => setFormData({...formData, customText: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 focus:border-brand focus:outline-none"
                />
              </div>

              <div 
                onClick={() => setFormData({...formData, hasLogo: !formData.hasLogo})}
                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${formData.hasLogo ? 'border-brand bg-brand/5' : 'border-zinc-700 hover:border-zinc-500'}`}
              >
                <Upload className={formData.hasLogo ? "text-brand mb-4" : "text-zinc-400 mb-4"} size={32} />
                <p className="font-bold mb-1">{formData.hasLogo ? "Logo Added (+£15/item)" : "I want to add a logo (+£15/item)"}</p>
                <p className="text-sm text-zinc-500">We will email you to collect files after submission</p>
              </div>

              <div className="mt-auto flex justify-between pt-8">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2"><ChevronLeft size={20} /> Back</button>
                <button onClick={nextStep} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2">Review Quote <ChevronRight size={20} /></button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: REVIEW & SUBMIT */}
          {step === 4 && (
            <motion.div key="s4" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6">Review & Submit</h2>
              
              <div className="bg-zinc-950 rounded-lg p-6 mb-8 border border-zinc-800">
                <div className="flex justify-between mb-2">
                  <span className="text-zinc-400">Garment:</span>
                  <span className="font-bold">{formData.garmentType}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-zinc-400">Quantity:</span>
                  <span className="font-bold">{formData.quantity}</span>
                </div>
                <div className="flex justify-between mb-4 border-b border-zinc-800 pb-4">
                  <span className="text-zinc-400">Logo Print:</span>
                  <span className="font-bold">{formData.hasLogo ? 'Yes' : 'No'}</span>
                </div>
                
                <div className="flex justify-between items-center mt-4 text-xl">
                  <span className="font-black flex items-center gap-2"><Calculator size={20}/> Estimated Total:</span>
                  <span className="font-black text-brand text-3xl">£{calculateTotal()}</span>
                </div>
              </div>

              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2"><ChevronLeft size={20} /> Edit</button>
                <button 
                  onClick={handleSubmit} 
                  disabled={status === 'submitting'}
                  className="bg-white text-black px-8 py-3 rounded-lg font-bold hover:bg-zinc-200 uppercase tracking-wide disabled:opacity-50"
                >
                  {status === 'submitting' ? 'Sending...' : 'Submit Request'}
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}