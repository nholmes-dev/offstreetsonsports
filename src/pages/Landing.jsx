import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, CreditCard, Paintbrush, Package, ChevronDown, ChevronRight } from 'lucide-react';
import heroBg from '../hero-bg1.png';
import logo from '../logo.png';
import logoGold from '../logo-gold.png';

const steps = [
  {
    number: '01',
    icon: Mail,
    title: 'Build & Submit Your Kit',
    description: 'Use my kit builder to select your garments, quantities, and customisations. Submit your enquiry and email any logos or artwork to',
    highlight: 'offstreetsonsports@gmail.com',
    highlightHref: 'mailto:offstreetsonsports@gmail.com',
  },
  {
    number: '02',
    icon: CreditCard,
    title: 'Pay Your Deposit',
    description: 'Once I\'ve reviewed your order, a £50 non-refundable design deposit is required to secure your place in my production schedule and get the process started.',
    highlight: null,
  },
  {
    number: '03',
    icon: Paintbrush,
    title: 'Approve Your Mock-Up',
    description: 'I\'ll create your design and send over a full mock-up for your approval before anything goes into production. Nothing is printed until you\'re happy.',
    highlight: null,
  },
  {
    number: '04',
    icon: Package,
    title: 'Wear It & Win',
    description: 'Once you\'re happy with the design, your kit goes into production and gets delivered to your door. All that\'s left is to step into the ring and own it.',
    highlight: null,
  },
];

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Landing() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ── */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 shrink-0">

        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-zinc-950/80 z-10" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-20 text-center"
        >
          <img src={logo} alt="Off Streets On Sports" className="h-64 md:h-80 lg:h-96 w-auto mx-auto mb-10 lg:mb-4 drop-shadow-2xl" />

          <p className="text-zinc-300 text-lg md:text-xl max-w-lg mx-auto mb-10 drop-shadow-md font-medium">
            Premium, personalised fightwear and team kits built for the streets and the spotlight. I am not just a brand, I am a brand with purpose
          </p>

          <div className="flex justify-center mt-4">
            <Link to="/customise" className="bg-brand text-black font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl hover:bg-[#c99338] hover:scale-105 transition-all shadow-[0_0_25px_rgba(182,131,50,0.3)]">
              Build Your Kit
            </Link>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-20 z-20 flex flex-col items-center gap-1 text-zinc-500"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">How It Works</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>

      </div>

      {/* ── How It Works ── */}
      <section className="relative bg-zinc-950 border-t border-zinc-800/60 px-6 py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.04] pointer-events-none select-none"
          style={{ backgroundImage: `url(${logo})` }}
        />
        <div className="max-w-5xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
              The Process
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              How It <span className="text-brand">Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-brand/40 transition-colors group"
              >

                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-black text-brand/20 leading-none select-none group-hover:text-brand/30 transition-colors">
                    {step.number}
                  </span>
                  <div className="bg-brand/10 border border-brand/20 rounded-xl p-3 group-hover:bg-brand/20 transition-colors">
                    <step.icon className="text-brand" size={22} />
                  </div>
                </div>

                <h3 className="text-xl font-black uppercase tracking-tight mb-3">
                  {step.title}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed">
                  {step.description}
                  {step.highlight && (
                    <>
                      {' '}
                      <a
                        href={step.highlightHref}
                        className="text-brand font-bold hover:underline break-all"
                      >
                        {step.highlight}
                      </a>
                    </>
                  )}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/customise"
              className="inline-flex items-center gap-2 bg-brand text-black font-black uppercase tracking-wide px-10 py-4 rounded-lg text-lg hover:bg-[#c99338] hover:scale-105 transition-all shadow-[0_0_25px_rgba(182,131,50,0.3)]"
            >
              Start Your Order <ChevronRight size={20} />
            </Link>
          </motion.div>

        </div>
      </section>


    </div>
  );
}
