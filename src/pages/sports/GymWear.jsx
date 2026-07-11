import { motion } from 'framer-motion';
import { Dumbbell, Layers, Zap, ChevronRight } from 'lucide-react';
import SportEnquiryForm from '../../components/SportEnquiryForm';
import heroImg from '../../PT Gear 1.jpg';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const products = [
  { name: 'T-Shirts', desc: 'Custom printed or embroidered — gym name, logo, slogan', price: 'From £25' },
  { name: 'Hoodies', desc: 'Heavyweight pullover or zip hoodies with full custom print', price: 'From £35' },
  { name: 'Training Shorts', desc: 'Comfortable performance shorts with custom design', price: 'From £30' },
  { name: 'Training Sets', desc: 'Matching T-shirt & shorts set — perfect for gym branding', price: 'From £40' },
  { name: 'Vests', desc: 'Lightweight training vests — bold designs that stand out', price: 'From £20' },
  { name: 'Full Gym Packages', desc: 'Bulk orders for your whole gym — best pricing available', price: 'Price on enquiry' },
];

export default function GymWear() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-zinc-950">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/65" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(20,0,50,0.5) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
            Gym Wear
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Train in<br /><span className="text-brand">Style.</span>
          </motion.h1>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="w-16 h-1 bg-brand mb-6" />
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-zinc-300 text-lg max-w-2xl leading-relaxed mb-8">
            Custom gym wear for gyms, personal trainers, and fitness brands. T-shirts, hoodies, training sets — your brand, your identity, built to perform.
          </motion.p>
          <motion.a variants={fadeUp} initial="hidden" animate="visible" custom={4}
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-brand text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-[#c99338] transition-all shadow-[0_0_20px_rgba(182,131,50,0.3)]">
            Get a Quote <ChevronRight size={18} />
          </motion.a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">What We <span className="text-brand">Make</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {products.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.2}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-brand/50 transition-colors">
              <h3 className="font-black uppercase text-sm mb-1">{p.name}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-3">{p.desc}</p>
              <span className="text-brand font-bold text-sm">{p.price}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { icon: Dumbbell, title: 'For Gyms & PTs', body: 'Whether you\'re branding your gym or launching a PT clothing line — we make it happen.' },
            { icon: Layers, title: 'Bulk Discounts', body: 'Order for your whole gym and benefit from better pricing the more you order.' },
            { icon: Zap, title: 'Quick Turnaround', body: 'We know gyms are busy. We work efficiently to get your kit to you as fast as possible.' },
          ].map(({ icon: Icon, title, body }, i) => (
            <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Icon className="text-brand mb-3" size={28} />
              <h3 className="font-black uppercase text-sm mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        <div id="enquiry" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Start Your <span className="text-brand">Order</span></h2>
            <p className="text-zinc-400">Tell us about your gym or brand and we'll get back to you within 24 hours.</p>
          </motion.div>
          <SportEnquiryForm sport="Gym Wear" />
        </div>
      </div>
    </div>
  );
}

