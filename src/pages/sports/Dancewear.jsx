import { motion } from 'framer-motion';
import { Sparkles, Star, Heart, ChevronRight } from 'lucide-react';
import SportEnquiryForm from '../../components/SportEnquiryForm';
import heroImg from '../../Dance team.jpg';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const products = [
  { name: 'Street Dance Kits', desc: 'Bold, urban designs for crews and academies', price: 'Price on enquiry' },
  { name: 'Competition Costumes', desc: 'Stand-out stage wear for competitions and showcases', price: 'Price on enquiry' },
  { name: 'Cheerleading Uniforms', desc: 'Custom tops, skirts, and full cheerleading packages', price: 'Price on enquiry' },
  { name: 'Dance Academy Wear', desc: 'Branded hoodies, T-shirts, and bags for your school', price: 'From Â£25' },
  { name: 'Contemporary / Ballet', desc: 'Elegant, custom performance wear', price: 'Price on enquiry' },
  { name: 'Full Group Packages', desc: 'Dress your whole crew or school in one order', price: 'Price on enquiry' },
];

export default function Dancewear() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-zinc-950">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
        <div className="absolute inset-0 bg-zinc-950/65" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(45,0,50,0.5) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
            Dancewear
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Perform with<br /><span className="text-brand">Confidence.</span>
          </motion.h1>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="w-16 h-1 bg-brand mb-6" />
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-zinc-300 text-lg max-w-2xl leading-relaxed mb-8">
            Custom dancewear and performance costumes for dance schools, crews, and academies. From street dance to competition â€” designed to make you stand out on stage.
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
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">What We <span className="text-brand">Create</span></h2>
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
            { icon: Sparkles, title: 'Stage-Ready Designs', body: 'Every costume is designed to look incredible under stage lights and in competition settings.' },
            { icon: Star, title: 'School & Academy Packages', body: 'Brand your dance school with custom apparel your students will be proud to wear.' },
            { icon: Heart, title: 'Made with Passion', body: 'We care about every detail â€” from the fabric to the finish, your dancers deserve the best.' },
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
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Get Your <span className="text-brand">Quote</span></h2>
            <p className="text-zinc-400">Tell us about your dance group or school and we'll get back to you within 24 hours.</p>
          </motion.div>
          <SportEnquiryForm sport="Dancewear" />
        </div>
      </div>
    </div>
  );
}

