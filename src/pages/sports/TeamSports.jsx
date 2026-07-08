import { motion } from 'framer-motion';
import { Users, Award, Truck, ChevronRight } from 'lucide-react';
import SportEnquiryForm from '../../components/SportEnquiryForm';
import heroImg from '../../Football team.jpg';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.6, delay: i * 0.12 } }),
};

const sports = [
  { sport: 'Rugby', items: ['Match Jerseys', 'Training Kits', 'Shorts & Socks', 'Hoodies & Jackets', 'Full Club Packages'] },
  { sport: 'Football', items: ['Home & Away Kits', 'Goalkeeper Kits', 'Training Wear', 'Matchday Tracksuits', 'Full Club Packages'] },
];

export default function TeamSports() {
  return (
    <div className="pt-24 md:pt-32 pb-16 bg-zinc-950">

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-zinc-800">
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-zinc-950/65" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,30,60,0.5) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
          <motion.span variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
            Team Sports
          </motion.span>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-4">
            Kit Your<br /><span className="text-brand">Whole Club.</span>
          </motion.h1>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="w-16 h-1 bg-brand mb-6" />
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={3}
            className="text-zinc-300 text-lg max-w-2xl leading-relaxed mb-8">
            Custom rugby and football kits designed for your club, your colours, your identity. From grassroots to national leagues â€” we kit teams of all sizes.
          </motion.p>
          <motion.a variants={fadeUp} initial="hidden" animate="visible" custom={4}
            href="#enquiry"
            className="inline-flex items-center gap-2 bg-brand text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-[#c99338] transition-all shadow-[0_0_20px_rgba(182,131,50,0.3)]">
            Get a Club Quote <ChevronRight size={18} />
          </motion.a>
        </div>
      </div>

      {/* Sports */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">Sports We <span className="text-brand">Cover</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {sports.map(({ sport, items }, i) => (
            <motion.div key={sport} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-brand/50 transition-colors">
              <h3 className="text-xl font-black uppercase mb-4">{sport}</h3>
              <ul className="space-y-2">
                {items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-zinc-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
          {[
            { icon: Users, title: 'Any Size Squad', body: 'From a small 5-a-side team to a full 80-player club â€” we handle orders of all sizes.' },
            { icon: Award, title: 'Club Badging', body: 'Your crest, your sponsor logos, player names and numbers â€” all included as standard.' },
            { icon: Truck, title: 'Nationwide Delivery', body: 'We deliver to clubs and teams all across the UK, direct to your door.' },
          ].map(({ icon: Icon, title, body }, i) => (
            <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.3}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <Icon className="text-brand mb-3" size={28} />
              <h3 className="font-black uppercase text-sm mb-2">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>

        {/* Enquiry */}
        <div id="enquiry" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 md:p-12">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Get Your Club <span className="text-brand">Quote</span></h2>
            <p className="text-zinc-400">Tell us about your club and what you need â€” pricing confirmed within 24 hours.</p>
          </motion.div>
          <SportEnquiryForm sport="Rugby Kits" />
        </div>
      </div>
    </div>
  );
}

