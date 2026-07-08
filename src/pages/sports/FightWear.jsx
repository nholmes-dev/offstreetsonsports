import { motion } from 'framer-motion';
import { Shield, Zap, Star, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SportEnquiryForm from '../../components/SportEnquiryForm';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const products = [
  { name: 'Fighter Bundles', desc: 'Ring Jacket + Fight Shorts + Top — fully customised as a set', price: 'From £150' },
  { name: 'Fight Shorts', desc: 'Standard and Gladiator styles — custom design, name, and colours', price: 'From £120' },
  { name: 'Ring / Walk-Out Jackets', desc: 'Make your entrance unforgettable — fully personalised', price: 'From £80' },
  { name: 'Training Kits', desc: 'T-shirt & shorts sets for gym and sparring sessions', price: 'From £40' },
  { name: 'Muay Thai Shorts', desc: 'Traditional cut with modern custom design', price: 'Price on enquiry' },
  { name: 'MMA Gear', desc: 'Shorts, rash guards, and full MMA kit packages', price: 'Price on enquiry' },
  { name: 'Jiu-Jitsu Gis', desc: 'Custom embroidered and printed Gi sets', price: 'Price on enquiry' },
  { name: 'Walkout Flags & Banners', desc: 'Make your ringside presence known', price: 'From £20' },
];

export default function FightWear() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-zinc-950">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #3f0000 0%, #0a0a0a 60%, #1a0a00 100%)' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #B68332 0, #B68332 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
            Fight Wear
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Built for the<br /><span className="text-brand">Ring.</span>
          </motion.h1>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="w-16 h-1 bg-brand mb-6" />
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-zinc-300 text-lg max-w-2xl leading-relaxed mb-8">
            Custom boxing, MMA, Muay Thai, and BJJ apparel. From fight night bundles to training kits — every piece is designed to carry your identity into the ring.
          </motion.p>
          <motion.a variants={fadeUp} initial="hidden" animate="visible" custom={4}
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-brand text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-[#c99338] transition-all shadow-[0_0_20px_rgba(182,131,50,0.3)]">
            Get a Quote <ChevronRight size={18} />
          </motion.a>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">What We <span className="text-brand">Create</span></h2>
          <p className="text-zinc-500">Minimum orders apply on some items — all pricing is confirmed on enquiry.</p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {products.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-brand/50 transition-colors">
              <h3 className="font-black uppercase text-sm mb-1">{p.name}</h3>
              <p className="text-zinc-500 text-xs leading-relaxed mb-3">{p.desc}</p>
              <span className="text-brand font-bold text-sm">{p.price}</span>
            </motion.div>
          ))}
        </div>

        {/* Why us */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { icon: Shield, title: 'Combat Sports Roots', body: 'We started in the fight world. We know what fighters need — performance, identity, and kit that holds up.' },
            { icon: Zap, title: 'Fully Custom', body: 'Your name, your gym, your colours. No templates — every piece is designed from scratch for you.' },
            { icon: Star, title: 'Premium Quality', body: 'Materials built to last. Whether it\'s fight night or daily training, your kit performs as hard as you do.' },
          ].map(({ icon: Icon, title, body }, i) => (
            <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Icon className="text-brand mb-3" size={28} />
              <h3 className="font-black uppercase text-sm mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Enquiry form */}
        <div id="enquiry" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Get Your <span className="text-brand">Quote</span></h2>
            <p className="text-zinc-400">Tell us what you need and we'll come back to you within 24 hours.</p>
          </motion.div>
          <SportEnquiryForm sport="Fight Wear" />
        </div>
      </div>
    </div>
  );
}
