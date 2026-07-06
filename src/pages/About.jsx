import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Users, Star, ChevronRight } from 'lucide-react';
import lioness from '../lioness.jpg';

const fadeUp = {
  hidden: { y: 30, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.15 }
  })
};

const values = [
  {
    icon: Shield,
    title: 'Built for Fighters',
    body: 'Every garment is designed with performance in mind. Whether you\'re stepping into the ring or repping your gym, your kit should move with you, not against you.'
  },
  {
    icon: Users,
    title: 'Community First',
    body: 'We believe sport changes lives. Off Streets On Sports was built to support athletes, teams, and gyms who live and breathe their craft every single day.'
  },
  {
    icon: Star,
    title: 'Identity & Confidence',
    body: 'We don\'t just make clothing — we create identity. When you wear your kit, you carry your story, your team, and your purpose with you.'
  }
];

export default function About() {
  return (
    <div className="pt-24 pb-16">

      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${lioness})` }}
        />
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            <span className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
              Our Story
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6"
          >
            The Lioness &<br />
            <span className="text-brand">Off Streets On Sports</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="w-16 h-1 bg-brand mb-8"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-zinc-300 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            Part of the reason people call me <strong className="text-white">The Lioness</strong> is because of my strength, determination, and passion for developing fighters throughout my career. My journey in combat sports has always been about helping people reach their full potential — just as a lioness leads, protects, and cares for her pride.
          </motion.p>
        </div>
      </div>

      {/* Main Story Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
              Breaking Barriers <br />
              <span className="text-brand">In Combat Sports</span>
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Having worked in a sport that was once dominated by men, it has been inspiring to watch so many women step forward, break barriers, and lead the way in combat sports.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              That drive — that refusal to accept limits — is woven into every single piece we create at Off Streets On Sports. We build kit for fighters who don't back down.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-full -translate-y-16 translate-x-16 pointer-events-none" />
            <blockquote className="relative z-10">
              <div className="text-brand text-5xl font-black leading-none mb-4">"</div>
              <p className="text-white text-xl md:text-2xl font-bold leading-snug italic mb-6">
                Sport can change lives, create opportunities, and inspire people to achieve their goals.
              </p>
              <cite className="text-zinc-400 font-bold uppercase tracking-wider text-sm not-italic">
                — The Lioness, Founder
              </cite>
            </blockquote>
          </motion.div>
        </div>

        {/* Brand Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            What We <span className="text-brand">Stand For</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My passion for sport led me to create Off Streets On Sports — a custom fightwear and sportswear brand dedicated to athletes, fighters, and teams who value quality, performance, and individuality.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.5}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-brand/50 transition-colors group"
            >
              <v.icon className="text-brand mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-black uppercase mb-3">{v.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{v.body}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center bg-zinc-900 border border-zinc-800 rounded-2xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            Ready to Build <span className="text-brand">Your Kit?</span>
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Join the fighters and teams who trust Off Streets On Sports to deliver quality, performance, and identity in every stitch.
          </p>
          <Link
            to="/customise"
            className="inline-flex items-center gap-2 bg-brand text-black font-black uppercase tracking-wide px-10 py-4 rounded-lg text-lg hover:bg-[#c99338] hover:scale-105 transition-all shadow-[0_0_25px_rgba(182,131,50,0.3)]"
          >
            Build Your Kit <ChevronRight size={20} />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
