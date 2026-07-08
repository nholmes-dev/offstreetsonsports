import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, CreditCard, Paintbrush, Package, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import heroBg from '../hero-bg1.png';
import logo from '../logo.png';

const fadeUp = {
  hidden: { y: 40, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
};

const sports = [
  {
    name: 'Fight Wear',
    tagline: 'Built for the Ring',
    desc: 'Boxing, MMA, Muay Thai, BJJ — fighter bundles, shorts, walkout jackets and more.',
    href: '/fight-wear',
    gradient: 'from-red-950/80 via-zinc-950/90 to-zinc-950',
    accent: 'border-red-800/40 hover:border-red-600/60',
    tag: 'Fight Sports',
  },
  {
    name: 'Rugby Kits',
    tagline: 'Kit Your Whole Club',
    desc: 'Custom match jerseys, training kits, and full club packages for rugby teams of any size.',
    href: '/team-sports',
    gradient: 'from-green-950/80 via-zinc-950/90 to-zinc-950',
    accent: 'border-green-800/40 hover:border-green-600/60',
    tag: 'Team Sports',
  },
  {
    name: 'Football Kits',
    tagline: 'Your Colours, Your Crest',
    desc: 'Home & away kits, goalkeeper sets, tracksuits — full grassroots to semi-pro packages.',
    href: '/team-sports',
    gradient: 'from-blue-950/80 via-zinc-950/90 to-zinc-950',
    accent: 'border-blue-800/40 hover:border-blue-600/60',
    tag: 'Team Sports',
  },
  {
    name: 'Gym Wear',
    tagline: 'Train in Style',
    desc: 'Custom T-shirts, hoodies, training sets and vests for gyms, PTs, and fitness brands.',
    href: '/gym-wear',
    gradient: 'from-purple-950/80 via-zinc-950/90 to-zinc-950',
    accent: 'border-purple-800/40 hover:border-purple-600/60',
    tag: 'Fitness',
  },
  {
    name: 'Dancewear',
    tagline: 'Perform with Confidence',
    desc: 'Competition costumes, street dance kits, cheerleading uniforms and academy wear.',
    href: '/dancewear',
    gradient: 'from-pink-950/80 via-zinc-950/90 to-zinc-950',
    accent: 'border-pink-800/40 hover:border-pink-600/60',
    tag: 'Performing Arts',
  },
  {
    name: 'Custom & Other',
    tagline: 'If You Dream It, We Make It',
    desc: 'Walkout flags, event gear, school uniforms, one-off pieces — any sport, any brief.',
    href: '/custom',
    gradient: 'from-amber-950/80 via-zinc-950/90 to-zinc-950',
    accent: 'border-amber-800/40 hover:border-amber-600/60',
    tag: 'Bespoke',
  },
];

const stats = [
  { value: '100+', label: 'Clubs Kitted' },
  { value: '10+', label: 'Sports Covered' },
  { value: '500+', label: 'Custom Pieces' },
  { value: '24hr', label: 'Quote Turnaround' },
];

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
    description: "Once I've reviewed your order, a £50 non-refundable design deposit is required to secure your place in my production schedule and get the process started.",
    highlight: null,
  },
  {
    number: '03',
    icon: Paintbrush,
    title: 'Approve Your Mock-Up',
    description: "I'll create your design and send over a full mock-up for your approval before anything goes into production. Nothing is printed until you're happy.",
    highlight: null,
  },
  {
    number: '04',
    icon: Package,
    title: 'Wear It & Win',
    description: "Once you're happy with the design, your kit goes into production and gets delivered to your door. All that's left is to step up and own it.",
    highlight: null,
  },
];

export default function Landing() {
  return (
    <div className="flex flex-col">

      {/* Hero */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-4 shrink-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-zinc-950/75 z-10" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 text-center"
        >
          <img
            src={logo}
            alt="Off Streets On Sports"
            className="h-64 md:h-80 lg:h-96 w-auto mx-auto mb-10 lg:mb-6 drop-shadow-2xl"
          />
          <p className="text-zinc-300 text-lg md:text-xl max-w-lg mx-auto mb-10 drop-shadow-md font-medium">
            Premium custom sportswear for fighters, clubs, gyms & performers — designed from scratch, built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/customise"
              className="bg-brand text-black font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl hover:bg-[#c99338] hover:scale-105 transition-all shadow-[0_0_25px_rgba(182,131,50,0.3)]"
            >
              Design Your Kit
            </Link>
            <a
              href="#sports"
              className="border border-white/20 text-white font-bold uppercase tracking-wide px-10 py-5 rounded-lg text-xl hover:border-brand hover:text-brand transition-all"
            >
              Our Sports
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 z-20 flex flex-col items-center gap-1 text-zinc-500"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="bg-brand">
        <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-black text-center">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="text-3xl md:text-4xl font-black">{s.value}</div>
              <div className="text-sm font-bold uppercase tracking-widest opacity-70">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sport Categories */}
      <section id="sports" className="bg-zinc-950 border-t border-zinc-800/60 px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Your Sport.<br /><span className="text-brand">Your Kit.</span>
            </h2>
            <p className="text-zinc-400 mt-6 text-lg max-w-xl mx-auto">
              We create fully custom sportswear for every discipline — click your sport to see what we offer and get a quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sports.map((sport, i) => (
              <motion.div
                key={sport.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.1}
              >
                <Link
                  to={sport.href}
                  className={`block bg-gradient-to-br ${sport.gradient} border ${sport.accent} rounded-2xl p-8 transition-all duration-300 group hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
                >
                  <span className="inline-block text-brand font-bold uppercase tracking-widest text-xs mb-3 border border-brand/30 px-2 py-0.5 rounded-full">
                    {sport.tag}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight mb-1 group-hover:text-brand transition-colors">
                    {sport.name}
                  </h3>
                  <p className="text-brand font-bold text-sm mb-3">{sport.tagline}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                    {sport.desc}
                  </p>
                  <div className="flex items-center gap-1 text-brand font-bold text-sm group-hover:gap-2 transition-all">
                    View & Enquire <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="bg-zinc-900/50 border-t border-zinc-800/60 px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Our <span className="text-brand">Work</span>
            </h2>
            <p className="text-zinc-400 mt-6 text-lg max-w-xl mx-auto">
              A selection of custom kits, fight wear, and apparel created for clubs and athletes across the UK.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-12">
            {[
              { label: 'Fighter Bundle', bg: 'from-red-950 to-zinc-900' },
              { label: 'Rugby Kit', bg: 'from-green-950 to-zinc-900' },
              { label: 'Football Kit', bg: 'from-blue-950 to-zinc-900' },
              { label: 'Gym Wear', bg: 'from-purple-950 to-zinc-900' },
              { label: 'Fight Shorts', bg: 'from-red-950 to-zinc-900' },
              { label: 'Dancewear', bg: 'from-pink-950 to-zinc-900' },
              { label: 'Walkout Jacket', bg: 'from-amber-950 to-zinc-900' },
              { label: 'Club Package', bg: 'from-teal-950 to-zinc-900' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.08}
                className={`bg-gradient-to-br ${item.bg} border border-zinc-800 rounded-xl aspect-square flex items-end p-4 group hover:border-brand/40 transition-colors`}
              >
                <span className="text-zinc-500 text-xs font-bold uppercase tracking-wider group-hover:text-zinc-300 transition-colors">
                  {item.label}
                </span>
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
            <p className="text-zinc-500 text-sm mb-6">Follow us for the latest work</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/offstreetsonsports"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-700 text-zinc-300 font-bold uppercase text-sm tracking-wide px-6 py-3 rounded-lg hover:border-brand hover:text-brand transition-all"
              >
                Instagram
              </a>
              <a
                href="https://www.tiktok.com/@offstreets_onsports"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-700 text-zinc-300 font-bold uppercase text-sm tracking-wide px-6 py-3 rounded-lg hover:border-brand hover:text-brand transition-all"
              >
                TikTok
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* How It Works */}
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

      {/* Bottom CTA Banner */}
      <section className="bg-brand px-6 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black mb-4"
          >
            Ready to Get Kitted?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="text-black/70 text-lg mb-8 max-w-lg mx-auto font-medium"
          >
            Click your sport above or use the kit builder — we'll get back to you within 24 hours with a quote.
          </motion.p>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/customise"
              className="bg-black text-brand font-black uppercase tracking-wide px-10 py-4 rounded-lg text-lg hover:bg-zinc-900 transition-all"
            >
              Kit Builder
            </Link>
            <a
              href="mailto:offstreetsonsports@gmail.com"
              className="border-2 border-black text-black font-black uppercase tracking-wide px-10 py-4 rounded-lg text-lg hover:bg-black/10 transition-all"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

