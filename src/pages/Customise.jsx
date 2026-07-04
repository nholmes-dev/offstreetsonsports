import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Upload, CheckCircle, Calculator, Plus, Trash2, User, Info } from 'lucide-react';

const pricingMap = {
  'Boxing Shorts': 45,
  'Tracksuits': 75,
  'Ring Jackets': 80,
  'Training Vests': 25
};

const emptyItem = {
  garmentType: '',
  quantity: 1,
  hasLogo: false,
  customText: '',
  furtherInfo: '',
};

export default function Customise() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle');
  const [termsAccepted, setTermsAccepted] = useState(false);
  
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    gymOrCompany: ''
  });

  const [cart, setCart] = useState([]);
  const [currentItem, setCurrentItem] = useState(emptyItem);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const calculateItemTotal = (item) => {
    const basePrice = pricingMap[item.garmentType] || 0;
    const quantity = parseInt(item.quantity) || 1;
    const logoFee = item.hasLogo ? 15 : 0;
    return (basePrice * quantity) + (logoFee * quantity);
  };

  const calculateGrandTotal = () => {
    const cartTotal = cart.reduce((sum, item) => sum + calculateItemTotal(item), 0);
    const currentTotal = currentItem.garmentType ? calculateItemTotal(currentItem) : 0;
    return cartTotal + currentTotal;
  };

  const handleReviewOrder = () => {
    setCart([...cart, currentItem]);
    setCurrentItem(emptyItem);
    setStep(5);
  };

  const handleAddAnotherItem = () => {
    setCart([...cart, currentItem]);
    setCurrentItem(emptyItem);
    setStep(2);
  };

  const removeItem = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
    if (cart.length === 1) setStep(2); 
  };

  const handleSubmit = async () => {
    setStatus('submitting');
    
    // Remember to keep your real Formspree ID here!
    const formspreeUrl = "https://formspree.io/f/YOUR_FORMSPREE_ID"; 
    
    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          customerDetails: customerInfo,
          orderItems: cart,
          grandTotal: `£${calculateGrandTotal()}`
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
      alert("Network error. Please check your connection.");
    }
  };

  const slideVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    exit: { x: -50, opacity: 0, transition: { duration: 0.2 } },
  };

  const isCustomerInfoValid = customerInfo.fullName.length > 2 && customerInfo.email.includes('@');

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto mt-12 p-6 text-center">
        <CheckCircle className="text-brand w-24 h-24 mx-auto mb-6" />
        <h2 className="text-4xl font-black uppercase mb-4">Request Sent!</h2>
        <p className="text-zinc-400">Thanks, {customerInfo.fullName.split(' ')[0]}! Our team will review your specs and be in touch shortly.</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 pt-28">
      
      {step < 5 && (
        <div className="mb-8 flex items-center justify-between gap-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-2 w-full rounded-full bg-zinc-800 overflow-hidden">
              <div className={`h-full bg-brand transition-all duration-500 ${step >= i ? 'w-full' : 'w-0'}`} />
            </div>
          ))}
        </div>
      )}

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-2xl relative overflow-hidden min-h-[500px] flex flex-col">
        <AnimatePresence mode="wait">
          
          {/* STEP 1: CUSTOMER INFO */}
          {step === 1 && (
            <motion.div key="s1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-2 flex items-center gap-3">
                <User className="text-brand" /> Your Details
              </h2>
              <p className="text-zinc-400 mb-6">Let's get your contact info before we build your kit.</p>
              
              <div className="space-y-4 mb-8">
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold uppercase text-xs">Full Name *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Tyson Fury"
                    value={customerInfo.fullName}
                    onChange={(e) => setCustomerInfo({...customerInfo, fullName: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold uppercase text-xs">Email Address *</label>
                  <input 
                    type="email" 
                    placeholder="e.g. champ@boxing.com"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 mb-1 font-bold uppercase text-xs">Phone Number</label>
                    <input 
                      type="tel" 
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1 font-bold uppercase text-xs">Gym / Team Name</label>
                    <input 
                      type="text" 
                      value={customerInfo.gymOrCompany}
                      onChange={(e) => setCustomerInfo({...customerInfo, gymOrCompany: e.target.value})}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-auto flex justify-end">
                <button 
                  onClick={nextStep} 
                  disabled={!isCustomerInfoValid} 
                  className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#c99338] transition-colors"
                >
                  Start Building <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: GARMENT SELECTION */}
          {step === 2 && (
            <motion.div key="s2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-2">Select Your Gear</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {Object.keys(pricingMap).map((item) => (
                  <button 
                    key={item}
                    onClick={() => setCurrentItem({...currentItem, garmentType: item})}
                    className={`p-6 rounded-lg border-2 text-left transition-all font-bold uppercase ${currentItem.garmentType === item ? 'border-brand text-brand bg-brand/10' : 'border-zinc-700 hover:border-zinc-500'}`}
                  >
                    <div>{item}</div>
                    <div className="text-sm font-normal text-zinc-400 mt-2">From £{pricingMap[item]}</div>
                  </button>
                ))}
              </div>
              
              <p className="text-sm text-zinc-500 flex items-center gap-2 mb-6">
                <Info size={16} className="text-zinc-600 shrink-0" />
                Note: You can come back here later to add more items to your kit.
              </p>
              
              {cart.length > 0 && (
                 <div className="text-brand text-sm font-bold mb-4">You currently have {cart.length} item(s) in your cart.</div>
              )}

              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2 hover:text-white">
                  <ChevronLeft size={20} /> Back
                </button>
                <button onClick={nextStep} disabled={!currentItem.garmentType} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 disabled:opacity-50 hover:bg-[#c99338] transition-colors">
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: QUANTITY */}
          {step === 3 && (
            <motion.div key="s3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6">How many do you need?</h2>
              <div className="mb-8">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-sm">Total Quantity for {currentItem.garmentType}</label>
                <input 
                  type="number" 
                  min="1"
                  value={currentItem.quantity}
                  onChange={(e) => setCurrentItem({...currentItem, quantity: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 text-xl focus:border-brand focus:outline-none"
                />
              </div>
              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2 hover:text-white"><ChevronLeft size={20} /> Back</button>
                <button onClick={nextStep} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#c99338] transition-colors">Next <ChevronRight size={20} /></button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: CUSTOMIZATION */}
          {step === 4 && (
            <motion.div key="s4" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6">Make It Yours</h2>
              
              <div className="mb-6">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-sm">Custom Text / Initials</label>
                <input 
                  type="text" 
                  placeholder="e.g. 'THE CHAMP' on waistband"
                  value={currentItem.customText}
                  onChange={(e) => setCurrentItem({...currentItem, customText: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 focus:border-brand focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-sm">Precise Specs & Additional Info</label>
                <textarea 
                  placeholder="e.g. Please ensure the embroidery thread is gold to match my logo."
                  value={currentItem.furtherInfo}
                  onChange={(e) => setCurrentItem({...currentItem, furtherInfo: e.target.value})}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 focus:border-brand focus:outline-none min-h-[100px] resize-y"
                />
              </div>

              <div 
                onClick={() => setCurrentItem({...currentItem, hasLogo: !currentItem.hasLogo})}
                className={`border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer transition-colors ${currentItem.hasLogo ? 'border-brand bg-brand/5' : 'border-zinc-700 hover:border-zinc-500'}`}
              >
                <Upload className={currentItem.hasLogo ? "text-brand mb-2" : "text-zinc-400 mb-2"} size={24} />
                <p className="font-bold mb-1">{currentItem.hasLogo ? "Logo Selected (+£15/item)" : "Add a logo (+£15/item)"}</p>
                <p className="text-xs text-zinc-500">We will collect files via email</p>
              </div>

              <div className="mt-auto flex justify-between items-end pt-8">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2 hover:text-white"><ChevronLeft size={20} /> Back</button>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={handleAddAnotherItem} className="border-2 border-zinc-700 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:border-white transition-colors">
                    <Plus size={20} /> Add Gear
                  </button>
                  <button onClick={handleReviewOrder} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#c99338] transition-colors">
                    Review Order <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 5: REVIEW & SUBMIT */}
          {step === 5 && (
            <motion.div key="s5" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex-grow flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6 flex justify-between items-center">
                Review Your Kit
                <button onClick={() => setStep(2)} className="text-sm border border-zinc-700 px-4 py-2 rounded text-zinc-300 hover:text-white hover:border-white transition flex gap-2 items-center">
                   <Plus size={16}/> Add Gear
                </button>
              </h2>
              
              <div className="bg-zinc-950 rounded-lg p-4 mb-6 border border-zinc-800 text-sm text-zinc-300">
                <div className="font-bold text-white mb-2 uppercase border-b border-zinc-800 pb-2">Your Details</div>
                <div><span className="text-zinc-500">Name:</span> {customerInfo.fullName}</div>
                <div><span className="text-zinc-500">Email:</span> {customerInfo.email}</div>
                {customerInfo.gymOrCompany && <div><span className="text-zinc-500">Team/Gym:</span> {customerInfo.gymOrCompany}</div>}
              </div>

              <div className="flex-grow overflow-y-auto mb-6 pr-2 space-y-4">
                {cart.map((item, index) => (
                  <div key={index} className="bg-zinc-950 rounded-lg p-6 border border-zinc-800 relative group">
                    <button 
                      onClick={() => removeItem(index)} 
                      className="absolute top-4 right-4 text-zinc-600 hover:text-red-500 transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 size={20} />
                    </button>

                    <div className="text-lg font-black uppercase text-brand mb-4">{item.quantity}x {item.garmentType}</div>
                    <div className="grid grid-cols-2 gap-y-2 text-sm text-zinc-300">
                      <div><span className="text-zinc-500">Logo Print:</span> {item.hasLogo ? 'Yes (+£15)' : 'No'}</div>
                      <div><span className="text-zinc-500">Custom Text:</span> {item.customText || 'None'}</div>
                      {item.furtherInfo && (
                        <div className="col-span-2 mt-2 pt-2 border-t border-zinc-800">
                          <span className="text-zinc-500 block mb-1">Precise Specs:</span>
                          <span className="italic">"{item.furtherInfo}"</span>
                        </div>
                      )}
                    </div>
                    <div className="mt-4 text-right font-bold text-lg border-t border-zinc-800 pt-4">
                      Item Total: £{calculateItemTotal(item)}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-zinc-950 p-6 rounded-lg border border-brand mb-6 flex justify-between items-center">
                  <span className="font-black text-xl flex items-center gap-2"><Calculator size={24}/> Grand Total:</span>
                  <span className="font-black text-brand text-4xl">£{calculateGrandTotal()}</span>
              </div>

              <div className="mt-auto space-y-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="mt-1 shrink-0 accent-brand w-4 h-4 cursor-pointer"
                  />
                  <span className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors leading-snug">
                    I have read and agree to the{' '}
                    <a href="/terms" target="_blank" rel="noreferrer" className="text-brand hover:underline font-bold">Terms & Disclaimer</a>
                    {' '}and{' '}
                    <a href="/privacy" target="_blank" rel="noreferrer" className="text-brand hover:underline font-bold">Privacy Policy</a>
                  </span>
                </label>

                <button
                  onClick={handleSubmit}
                  disabled={status === 'submitting' || !termsAccepted}
                  className="bg-white text-black px-10 py-4 rounded-lg font-black hover:bg-zinc-200 uppercase tracking-wide disabled:opacity-50 disabled:cursor-not-allowed text-lg w-full sm:w-auto transition-all"
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
