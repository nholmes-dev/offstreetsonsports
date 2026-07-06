import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle, Calculator, Plus, Trash2, User, Info, Mail, Sparkles } from 'lucide-react';

const categories = [
  {
    label: 'Fighter Bundles',
    note: 'Includes Ring Jacket, Fight Shorts, and T-Shirt or Vest',
    items: [
      { name: 'Kids Fighter Bundle', fromPrice: 150 },
      { name: 'Adults Fighter Bundle', fromPrice: 250 },
    ],
  },
  {
    label: 'Fight Shorts',
    items: [
      { name: 'Standard Fight Shorts', fromPrice: 120 },
      { name: 'Gladiator Shorts', fromPrice: 140 },
    ],
  },
  {
    label: 'Training Kit',
    items: [
      { name: 'Training T-Shirt & Shorts Set', fromPrice: 40 },
    ],
  },
  {
    label: 'Clothing',
    items: [
      { name: 'T-Shirt', fromPrice: 25 },
      { name: 'Vest', fromPrice: 20 },
      { name: 'Hoodie', fromPrice: 35 },
    ],
  },
  {
    label: 'T-Shirt Bundles',
    items: [
      { name: '10 T-Shirts', fixedPrice: 200 },
      { name: '20 T-Shirts', fixedPrice: 350 },
    ],
  },
  {
    label: 'Flags & Walkout Banners',
    items: [
      { name: 'Fighter Walkout Flag/Banner', fromPrice: 20 },
    ],
  },
  {
    label: 'Team & Club Orders',
    note: 'Minimum order of 10 pieces — pricing confirmed on enquiry.',
    items: [
      { name: 'Muay Thai Shorts', enquiryOnly: true },
      { name: 'Jiu-Jitsu Gis', enquiryOnly: true },
      { name: 'MMA Gear', enquiryOnly: true },
      { name: 'Football Kits', enquiryOnly: true },
      { name: 'Rugby Kits', enquiryOnly: true },
    ],
  },
];

const getProductInfo = (name) => {
  for (const cat of categories) {
    const found = cat.items.find((i) => i.name === name);
    if (found) return found;
  }
  return null;
};

const priceLabel = (product) => {
  if (!product) return '';
  if (product.enquiryOnly) return 'Price on enquiry';
  if (product.fixedPrice) return `£${product.fixedPrice}`;
  return `From £${product.fromPrice}`;
};

const calculateItemEstimate = (item) => {
  const product = getProductInfo(item.garmentType);
  if (!product || product.enquiryOnly) return null;
  const qty = parseInt(item.quantity) || 1;
  return (product.fixedPrice ?? product.fromPrice) * qty;
};

const FIGHT_SHORTS = ['Standard Fight Shorts', 'Gladiator Shorts'];

const emptyItem = {
  garmentType: '',
  quantity: 1,
  customText: '',
  furtherInfo: '',
  premiumMaterials: false,
  embroideredSideBand: false,
};

export default function Customise() {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState('idle');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    gymOrCompany: '',
  });

  const [cart, setCart] = useState([]);
  const [currentItem, setCurrentItem] = useState(emptyItem);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const grandEstimate = cart.reduce((sum, item) => sum + (calculateItemEstimate(item) ?? 0), 0);
  const hasEnquiryItems = cart.some((item) => getProductInfo(item.garmentType)?.enquiryOnly);

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
    const updated = cart.filter((_, i) => i !== indexToRemove);
    setCart(updated);
    if (updated.length === 0) setStep(2);
  };

  const handleSubmit = async () => {
    setStatus('submitting');
    const formspreeUrl = 'https://formspree.io/f/YOUR_FORMSPREE_ID';
    try {
      const response = await fetch(formspreeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          customerDetails: customerInfo,
          orderItems: cart,
          estimatedTotal: grandEstimate > 0 ? `From £${grandEstimate}` : 'Price on enquiry',
          note: hasEnquiryItems ? 'Order includes items priced on enquiry' : undefined,
        }),
      });
      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('idle');
        alert('There was an issue submitting your request. Please try again.');
      }
    } catch {
      setStatus('idle');
      alert('Network error. Please check your connection.');
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
        <p className="text-zinc-400 mb-2">
          Thanks, {customerInfo.fullName.split(' ')[0]}! We'll review your specs and be in touch shortly.
        </p>
        <p className="text-zinc-500 text-sm">
          Don't forget to email any logos or artwork to{' '}
          <a href="mailto:offstreetsonsports@gmail.com" className="text-brand font-bold hover:underline">
            offstreetsonsports@gmail.com
          </a>
        </p>
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

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-2xl relative overflow-hidden flex flex-col">
        <AnimatePresence mode="wait">

          {/* STEP 1: CUSTOMER INFO */}
          {step === 1 && (
            <motion.div key="s1" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col">
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
                    onChange={(e) => setCustomerInfo({ ...customerInfo, fullName: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-zinc-400 mb-1 font-bold uppercase text-xs">Email Address *</label>
                  <input
                    type="email"
                    placeholder="e.g. champ@boxing.com"
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-zinc-400 mb-1 font-bold uppercase text-xs">Phone Number</label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, phone: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1 font-bold uppercase text-xs">Gym / Team Name</label>
                    <input
                      type="text"
                      value={customerInfo.gymOrCompany}
                      onChange={(e) => setCustomerInfo({ ...customerInfo, gymOrCompany: e.target.value })}
                      className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-3 focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
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
            <motion.div key="s2" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-2">Select Your Gear</h2>
              <p className="text-zinc-500 text-sm flex items-center gap-2 mb-6">
                <Info size={15} className="shrink-0 text-zinc-600" />
                Prices shown are estimates — final cost confirmed once we review your order.
              </p>

              <div className="space-y-6 mb-6">
                {categories.map((cat) => (
                  <div key={cat.label}>
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-xs font-black uppercase tracking-widest text-brand">{cat.label}</h3>
                      {cat.note && (
                        <span className="text-xs text-zinc-500 truncate">{cat.note}</span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.items.map((product) => (
                        <button
                          key={product.name}
                          onClick={() => setCurrentItem({
                          ...currentItem,
                          garmentType: product.name,
                          premiumMaterials: FIGHT_SHORTS.includes(product.name) ? currentItem.premiumMaterials : false,
                          embroideredSideBand: FIGHT_SHORTS.includes(product.name) ? currentItem.embroideredSideBand : false,
                        })}
                          className={`p-4 rounded-lg border-2 text-left transition-all font-bold ${
                            currentItem.garmentType === product.name
                              ? 'border-brand text-brand bg-brand/10'
                              : 'border-zinc-700 hover:border-zinc-500'
                          }`}
                        >
                          <div className="text-sm uppercase">{product.name}</div>
                          <div className={`text-xs font-normal mt-1 ${product.enquiryOnly ? 'text-zinc-500 italic' : 'text-zinc-400'}`}>
                            {priceLabel(product)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {cart.length > 0 && (
                <div className="text-brand text-sm font-bold mb-4">
                  You currently have {cart.length} item(s) in your order.
                </div>
              )}

              <div className="flex justify-between pt-2">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2 hover:text-white">
                  <ChevronLeft size={20} /> Back
                </button>
                <button
                  onClick={nextStep}
                  disabled={!currentItem.garmentType}
                  className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 disabled:opacity-50 hover:bg-[#c99338] transition-colors"
                >
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: QUANTITY */}
          {step === 3 && (
            <motion.div key="s3" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col min-h-[400px]">
              <h2 className="text-2xl font-bold uppercase mb-6">How many do you need?</h2>
              <div className="mb-8">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-sm">
                  Quantity for {currentItem.garmentType}
                </label>
                <input
                  type="number"
                  min="1"
                  value={currentItem.quantity}
                  onChange={(e) => setCurrentItem({ ...currentItem, quantity: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 text-xl focus:border-brand focus:outline-none"
                />
                {(() => {
                  const p = getProductInfo(currentItem.garmentType);
                  if (!p || p.enquiryOnly) return null;
                  const qty = parseInt(currentItem.quantity) || 1;
                  const est = (p.fixedPrice ?? p.fromPrice) * qty;
                  return (
                    <p className="text-zinc-500 text-sm mt-3">
                      Estimated cost: <span className="text-brand font-bold">from £{est}</span>
                    </p>
                  );
                })()}
              </div>
              <div className="mt-auto flex justify-between">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2 hover:text-white">
                  <ChevronLeft size={20} /> Back
                </button>
                <button onClick={nextStep} className="bg-brand text-black px-6 py-3 rounded-lg font-bold flex items-center gap-2 hover:bg-[#c99338] transition-colors">
                  Next <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: CUSTOMISATION */}
          {step === 4 && (
            <motion.div key="s4" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6">Make It Yours</h2>

              <div className="mb-5">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-xs">Custom Text / Initials</label>
                <input
                  type="text"
                  placeholder="e.g. 'THE CHAMP' on waistband"
                  value={currentItem.customText}
                  onChange={(e) => setCurrentItem({ ...currentItem, customText: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 focus:border-brand focus:outline-none"
                />
              </div>

              {/* Optional upgrades — fight shorts only */}
              {FIGHT_SHORTS.includes(currentItem.garmentType) && <div className="mb-5">
                <label className="block text-zinc-400 mb-3 font-bold uppercase text-xs">Optional Upgrades</label>
                <div className="space-y-3">
                  <label className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${currentItem.premiumMaterials ? 'border-brand bg-brand/10' : 'border-zinc-700 hover:border-zinc-500'}`}>
                    <input
                      type="checkbox"
                      checked={currentItem.premiumMaterials}
                      onChange={(e) => setCurrentItem({ ...currentItem, premiumMaterials: e.target.checked })}
                      className="accent-brand w-4 h-4 shrink-0"
                    />
                    <Sparkles size={18} className={currentItem.premiumMaterials ? 'text-brand shrink-0' : 'text-zinc-500 shrink-0'} />
                    <div>
                      <div className="font-bold text-sm uppercase">Premium Materials</div>
                      <div className="text-xs text-zinc-400">Fur, sequins, glitter leather, etc. — from £20</div>
                    </div>
                  </label>

                  <label className={`flex items-center gap-4 p-4 rounded-lg border-2 cursor-pointer transition-all ${currentItem.embroideredSideBand ? 'border-brand bg-brand/10' : 'border-zinc-700 hover:border-zinc-500'}`}>
                    <input
                      type="checkbox"
                      checked={currentItem.embroideredSideBand}
                      onChange={(e) => setCurrentItem({ ...currentItem, embroideredSideBand: e.target.checked })}
                      className="accent-brand w-4 h-4 shrink-0"
                    />
                    <div className={`font-black text-lg leading-none shrink-0 ${currentItem.embroideredSideBand ? 'text-brand' : 'text-zinc-500'}`}>✦</div>
                    <div>
                      <div className="font-bold text-sm uppercase">Embroidered Side Band</div>
                      <div className="text-xs text-zinc-400">+£15 per side</div>
                    </div>
                  </label>
                </div>
              </div>}

              <div className="mb-5">
                <label className="block text-zinc-400 mb-2 font-bold uppercase text-xs">Precise Specs & Additional Info</label>
                <textarea
                  placeholder="e.g. Gold embroidery thread, specific colours, design notes..."
                  value={currentItem.furtherInfo}
                  onChange={(e) => setCurrentItem({ ...currentItem, furtherInfo: e.target.value })}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-lg p-4 focus:border-brand focus:outline-none min-h-[90px] resize-y"
                />
              </div>

              {/* Logo note */}
              <div className="bg-zinc-950 border border-zinc-800 rounded-xl p-4 flex items-start gap-3 mb-6">
                <Mail size={18} className="text-brand mt-0.5 shrink-0" />
                <p className="text-sm text-zinc-400 leading-relaxed">
                  Have a logo or artwork? Email your files directly to{' '}
                  <a href="mailto:offstreetsonsports@gmail.com" className="text-brand font-bold hover:underline">
                    offstreetsonsports@gmail.com
                  </a>{' '}
                  and we'll handle the rest.
                </p>
              </div>

              <div className="flex justify-between items-end">
                <button onClick={prevStep} className="text-zinc-400 font-bold flex items-center gap-2 hover:text-white">
                  <ChevronLeft size={20} /> Back
                </button>
                <div className="flex flex-col sm:flex-row gap-3">
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
            <motion.div key="s5" variants={slideVariants} initial="hidden" animate="visible" exit="exit" className="flex flex-col">
              <h2 className="text-2xl font-bold uppercase mb-6 flex justify-between items-center">
                Review Your Order
                <button onClick={() => setStep(2)} className="text-sm border border-zinc-700 px-4 py-2 rounded text-zinc-300 hover:text-white hover:border-white transition flex gap-2 items-center">
                  <Plus size={16} /> Add Gear
                </button>
              </h2>

              <div className="bg-zinc-950 rounded-lg p-4 mb-5 border border-zinc-800 text-sm text-zinc-300">
                <div className="font-bold text-white mb-2 uppercase border-b border-zinc-800 pb-2">Your Details</div>
                <div><span className="text-zinc-500">Name:</span> {customerInfo.fullName}</div>
                <div><span className="text-zinc-500">Email:</span> {customerInfo.email}</div>
                {customerInfo.phone && <div><span className="text-zinc-500">Phone:</span> {customerInfo.phone}</div>}
                {customerInfo.gymOrCompany && <div><span className="text-zinc-500">Team/Gym:</span> {customerInfo.gymOrCompany}</div>}
              </div>

              <div className="mb-5 space-y-4">
                {cart.map((item, index) => {
                  const est = calculateItemEstimate(item);
                  const product = getProductInfo(item.garmentType);
                  return (
                    <div key={index} className="bg-zinc-950 rounded-lg p-5 border border-zinc-800 relative">
                      <button
                        onClick={() => removeItem(index)}
                        className="absolute top-4 right-4 text-zinc-600 hover:text-red-500 transition-colors"
                        title="Remove"
                      >
                        <Trash2 size={18} />
                      </button>

                      <div className="text-base font-black uppercase text-brand mb-3">
                        {item.quantity}× {item.garmentType}
                      </div>
                      <div className="grid grid-cols-2 gap-y-1.5 text-sm text-zinc-300 mb-3">
                        {item.premiumMaterials && <div className="col-span-2 text-zinc-400">✦ Premium Materials (from £20)</div>}
                        {item.embroideredSideBand && <div className="col-span-2 text-zinc-400">✦ Embroidered Side Band (+£15/side)</div>}
                        {item.customText && <div className="col-span-2"><span className="text-zinc-500">Custom Text:</span> {item.customText}</div>}
                        {item.furtherInfo && (
                          <div className="col-span-2 mt-1 pt-2 border-t border-zinc-800">
                            <span className="text-zinc-500 block mb-1">Additional Info:</span>
                            <span className="italic text-sm">"{item.furtherInfo}"</span>
                          </div>
                        )}
                      </div>
                      <div className="text-right font-bold text-sm border-t border-zinc-800 pt-3 text-zinc-300">
                        {product?.enquiryOnly
                          ? <span className="text-zinc-500 italic">Price on enquiry</span>
                          : <span>Est. from <span className="text-brand">£{est}</span></span>
                        }
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-zinc-950 p-5 rounded-lg border border-brand mb-2 flex justify-between items-center">
                <span className="font-black text-lg flex items-center gap-2">
                  <Calculator size={22} /> Estimated Total:
                </span>
                <div className="text-right">
                  {grandEstimate > 0
                    ? <span className="font-black text-brand text-3xl">From £{grandEstimate}</span>
                    : <span className="font-black text-brand text-xl">Price on enquiry</span>
                  }
                </div>
              </div>
              <p className="text-xs text-zinc-600 mb-6 text-right">
                {hasEnquiryItems
                  ? 'Some items are priced on enquiry and are not included in the estimate above.'
                  : 'Final pricing confirmed once we\'ve reviewed your order.'
                }
              </p>

              <div className="space-y-4">
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
