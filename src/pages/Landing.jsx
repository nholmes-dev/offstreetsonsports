import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, CreditCard, Paintbrush, Package, ChevronRight, ArrowRight } from 'lucide-react';

import heroBg from '../fight2.jpg';
import logo from '../logo.png';

import fightWearImg from '../Great photo.jpg';
import rugbyImg from '../Rugby shirt.jpg';
import footballImg from '../Football team.jpg';
import gymImg from '../PT Gear 1.jpg';
import danceImg from '../Dance team.jpg';
import customImg from '../team kit.jpg';

import galleryFight from '../fight.jpg';
import galleryRobe from '../Great photo.jpg';
import galleryRobeBack from '../Great photo 1.jpg';
import galleryBoxingGear from '../Boxing gear.jpg';
import galleryTeam from '../team photo.jpg';
import galleryColour from '../colour kit.jpg';
import galleryLioness from '../lioness.jpg';
import galleryShorts from '../Boxing shorts.jpg';
import galleryTraining from '../training kit.jpg';

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
    img: fightWearImg,
    accent: 'from-red-950/80',
  },
  {
    name: 'Rugby Kits',
    tagline: 'Kit Your Whole Club',
    desc: 'Custom match jerseys, training kits, and full club packages for rugby teams of any size.',
    href: '/team-sports',
    img: rugbyImg,
    accent: 'from-emerald-950/80',
  },
  {
    name: 'Football Kits',
    tagline: 'Your Colours, Your Crest',
    desc: 'Home & away kits, goalkeeper sets, tracksuits — full grassroots to semi-pro packages.',
    href: '/team-sports',
    img: footballImg,
    accent: 'from-blue-950/80',
  },
  {
    name: 'Gym Wear',
    tagline: 'Train in Style',
    desc: 'Custom T-shirts, hoodies, training sets and vests for gyms, PTs, and fitness brands.',
    href: '/gym-wear',
    img: gymImg,
    accent: 'from-purple-950/80',
  },
  {
    name: 'Dancewear',
    tagline: 'Perform with Confidence',
    desc: 'Competition costumes, street dance kits, cheerleading uniforms and academy wear.',
    href: '/dancewear',
    img: danceImg,
    accent: 'from-pink-950/80',
  },
  {
    name: 'Custom & Other',
    tagline: 'If You Dream It, We Make It',
    desc: 'Walkout flags, event gear, school uniforms, one-off pieces — any sport, any brief.',
    href: '/custom',
    img: customImg,
    accent: 'from-amber-950/80',
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

const tickerItems = [
  'FIGHT WEAR', 'BOXING ROBES', 'WALKOUT JACKETS', 'RUGBY KITS',
  'FOOTBALL KITS', 'GYM WEAR', 'TRAINING SETS', 'DANCEWEAR',
  'CHEERLEADING', 'CUSTOM GEAR', 'BUILT DIFFERENT',
];

const galleryItems = [
  { img: galleryFight,      label: 'Boxing Action',  span: 'lg:col-span-2 lg:row-span-2' },
  { img: galleryRobe,       label: 'Custom Robe',    span: '' },
  { img: galleryBoxingGear, label: 'Boxing Kit',     span: '' },
  { img: galleryTeam,       label: 'Club Team',      span: '' },
  { img: galleryColour,     label: 'Full Bundle',    span: '' },
  { img: galleryLioness,    label: 'Custom Fit',     span: 'lg:col-span-2' },
  { img: galleryShorts,     label: 'Boxing Shorts',  span: '' },
  { img: galleryTraining,   label: 'Training Kit',   span: '' },
];

export default function Landing() {
  return (
    <div className="flex flex-col">

      {/* ── Hero ───────────────────────────────────────────── */}
      <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/20 via-zinc-950/55 to-zinc-950/95 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/50 via-transparent to-zinc-950/50 z-10" />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative z-20 text-center px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="inline-flex items-center gap-2 border border-brand/50 text-brand text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-sm bg-zinc-950/20"
          >
            Premium Custom Sportswear · UK Wide
          </motion.div>

          <h1 className="text-[4.5rem] sm:text-8xl md:text-[9rem] lg:text-[11rem] font-black uppercase leading-none tracking-tighter mb-6 drop-shadow-2xl">
            BUILT<br /><span className="text-brand">DIFFERENT</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl max-w-lg mx-auto mb-10 drop-shadow-md font-medium leading-relaxed">
            Custom sportswear for fighters, clubs, gyms & performers —<br className="hidden md:block" /> designed from scratch, built to last.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/customise"
              className="bg-brand text-black font-black uppercase tracking-wide px-10 py-5 rounded-lg text-xl hover:bg-[#c99338] hover:scale-105 transition-all shadow-[0_0_35px_rgba(182,131,50,0.45)]"
            >
              Design Your Kit
            </Link>
            <a
              href="#sports"
              className="border-2 border-white/25 text-white font-bold uppercase tracking-wide px-10 py-5 rounded-lg text-xl hover:border-brand hover:text-brand transition-all backdrop-blur-sm"
            >
              Our Sports
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-8 z-20 flex flex-col items-center gap-2 text-zinc-400"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-5 h-8 border border-zinc-600/60 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-brand rounded-full" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Ticker ─────────────────────────────────────────── */}
      <div className="bg-brand py-3 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-5 mx-5 text-black font-black uppercase text-sm tracking-[0.2em]">
              {item}
              <span className="text-black/25 text-xs">◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Stats Bar ──────────────────────────────────────── */}
      <div className="bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-zinc-800">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <div className="text-4xl md:text-5xl font-black text-brand">{s.value}</div>
              <div className="text-[11px] font-black uppercase tracking-[0.15em] text-zinc-500 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Sport Categories ───────────────────────────────── */}
      <section id="sports" className="bg-zinc-950 px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >
            <span className="inline-block text-brand font-black uppercase tracking-[0.15em] text-xs mb-4 border border-brand/40 px-3 py-1 rounded-full">
              What We Do
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Your Sport.<br /><span className="text-brand">Your Kit.</span>
            </h2>
            <p className="text-zinc-400 mt-4 text-lg max-w-xl">
              Fully custom sportswear for every discipline — click your sport to see what we offer and get a quote.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                  className="relative block overflow-hidden rounded-2xl aspect-[4/3] group cursor-pointer"
                >
                  <img
                    src={sport.img}
                    alt={sport.name}
                    className="absolute inset-0 w-full h-full object-cover brightness-70 group-hover:brightness-90 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${sport.accent} via-transparent to-transparent`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-transparent" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    <div>
                      <span className="inline-block text-brand font-black uppercase tracking-[0.12em] text-[10px] border border-brand/50 bg-zinc-950/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {sport.name}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black uppercase tracking-tight text-white mb-1 group-hover:text-brand transition-colors duration-200">
                        {sport.name}
                      </h3>
                      <p className="text-brand font-bold text-sm mb-3">{sport.tagline}</p>
                      <p className="text-zinc-300 text-xs leading-relaxed mb-4 max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-300">
                        {sport.desc}
                      </p>
                      <div className="flex items-center gap-1 text-brand font-black text-sm group-hover:gap-2 transition-all">
                        View & Enquire <ArrowRight size={14} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Showcase ───────────────────────────────────────── */}
      <section className="bg-zinc-950 border-t border-zinc-800/60 px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="inline-block text-brand font-black uppercase tracking-[0.15em] text-xs mb-6 border border-brand/40 px-3 py-1 rounded-full">
                The Craft
              </span>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                Every piece<br /><span className="text-brand">designed</span><br />from scratch.
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-5">
                No templates. No off-the-shelf designs. Every kit is built around your club, your fighters, your brand — from the first sketch to the final stitch.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                Whether you're stepping into the ring or taking to the pitch, your kit should make a statement before you throw a single punch or kick a single ball.
              </p>
              <Link
                to="/customise"
                className="inline-flex items-center gap-2 bg-brand text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg hover:bg-[#c99338] hover:scale-105 transition-all shadow-[0_0_25px_rgba(182,131,50,0.3)]"
              >
                Start Your Design <ChevronRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="grid grid-cols-2 gap-4"
            >
              <div className="rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl">
                <img src={galleryRobe} alt="Custom boxing robe front" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] mt-10 shadow-2xl">
                <img src={galleryRobeBack} alt="Custom boxing robe back" className="w-full h-full object-cover" />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Gallery ────────────────────────────────────────── */}
      <section className="bg-zinc-900/40 border-t border-zinc-800/60 px-4 sm:px-6 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="inline-block text-brand font-black uppercase tracking-[0.15em] text-xs mb-4 border border-brand/40 px-3 py-1 rounded-full">
              Portfolio
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Real Kits.<br /><span className="text-brand">Real Athletes.</span>
            </h2>
            <p className="text-zinc-500 mt-4 text-base">
              A selection of custom kits, fight wear, and apparel created for clubs and athletes across the UK.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[220px]">
            {galleryItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.06}
                className={`relative overflow-hidden rounded-xl group cursor-pointer ${item.span}`}
              >
                <img
                  src={item.img}
                  alt={item.label}
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-xs font-black uppercase tracking-wider drop-shadow">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex gap-4 flex-wrap"
          >
            <a
              href="https://www.instagram.com/offstreetsonsports"
              target="_blank"
              rel="noreferrer"
              className="border border-zinc-700 text-zinc-300 font-bold uppercase text-sm tracking-wide px-6 py-3 rounded-lg hover:border-brand hover:text-brand transition-all"
            >
              Follow on Instagram
            </a>
            <a
              href="https://www.tiktok.com/@offstreets_onsports"
              target="_blank"
              rel="noreferrer"
              className="border border-zinc-700 text-zinc-300 font-bold uppercase text-sm tracking-wide px-6 py-3 rounded-lg hover:border-brand hover:text-brand transition-all"
            >
              Follow on TikTok
            </a>
          </motion.div>

        </div>
      </section>

      {/* ── How It Works ───────────────────────────────────── */}
      <section className="relative bg-zinc-950 border-t border-zinc-800/60 px-4 sm:px-6 py-20 md:py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-[0.03] pointer-events-none select-none"
          style={{ backgroundImage: `url(${logo})` }}
        />
        <div className="max-w-5xl mx-auto relative z-10">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="inline-block text-brand font-black uppercase tracking-[0.15em] text-xs mb-4 border border-brand/40 px-3 py-1 rounded-full">
              The Process
            </span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              How It <span className="text-brand">Works</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-brand/40 transition-colors group overflow-hidden"
              >
                <span className="absolute -top-4 -right-2 text-[6rem] font-black text-white/[0.035] select-none leading-none group-hover:text-brand/[0.07] transition-colors">
                  {step.number}
                </span>
                <div className="relative">
                  <div className="bg-brand/10 border border-brand/20 rounded-xl p-3 inline-block mb-5 group-hover:bg-brand/20 transition-colors">
                    <step.icon className="text-brand" size={20} />
                  </div>
                  <h3 className="text-lg font-black uppercase tracking-tight mb-3">
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
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

      {/* ── CTA ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden flex min-h-[500px]">

        {/* Diagonal cut at very top — the dark section above bleeds in as a black triangle,
            so the gold doesn't start with a straight horizontal line */}
        <div
          className="absolute top-0 inset-x-0 h-16 md:h-24 z-30 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom right, #09090b 50%, transparent 50%)' }}
        />

        {/* Left: brand gold panel */}
        <div className="relative z-10 bg-brand flex-1 flex items-center px-8 md:px-14 py-28 overflow-hidden">

          {/* Diagonal pinstripes — sports-jersey graphic texture */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(45deg, rgba(0,0,0,0.06) 0px, rgba(0,0,0,0.06) 2px, transparent 2px, transparent 22px)',
            }}
          />

          {/* Ghost "BUILT DIFFERENT" watermark at bottom of panel */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none select-none leading-none pb-1">
            <span className="block text-[4.5rem] md:text-[6.5rem] font-black uppercase tracking-tighter text-black/[0.08] whitespace-nowrap">
              BUILT DIFFERENT
            </span>
          </div>

          <div className="relative">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-black mb-5 leading-none"
            >
              Ready to Get<br />Kitted?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="text-black/70 text-lg mb-8 font-medium leading-relaxed max-w-sm"
            >
              Use the kit builder or email us directly — we'll get back to you within 24 hours with a quote and design options.
            </motion.p>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/customise"
                className="bg-black text-brand font-black uppercase tracking-wide px-8 py-4 rounded-lg text-lg hover:bg-zinc-900 transition-all text-center"
              >
                Kit Builder
              </Link>
              <a
                href="mailto:offstreetsonsports@gmail.com"
                className="border-2 border-black text-black font-black uppercase tracking-wide px-8 py-4 rounded-lg text-lg hover:bg-black/10 transition-all text-center"
              >
                Email Us
              </a>
            </motion.div>
          </div>
        </div>

        {/* Right: lifestyle photo */}
        <div className="hidden lg:block relative w-[38%] shrink-0">
          <img
            src={galleryLioness}
            alt="Custom kit — bespoke fit"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* Diagonal left-edge cut in brand colour */}
          <div
            className="absolute inset-y-0 left-0 w-20 bg-brand z-10"
            style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
          />
        </div>

      </section>

    </div>
  );
}
