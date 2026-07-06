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
    title: 'Built to Perform',
    body: 'From the boxing ring to the rugby pitch, the dance studio to the gym floor — every piece is designed to perform under pressure and carry the identity of the person or team wearing it.'
  },
  {
    icon: Users,
    title: 'Every Sport, Every Team',
    body: 'We work with individuals, clubs, gyms, schools, and organisations across a wide range of sports. Whether it\'s a full team kit or a one-off custom piece, no order is too big or too small.'
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
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ backgroundImage: `url(${lioness})`, backgroundPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-zinc-950/75" />
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <span className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full">
              My Story
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6"
          >
            I am<br />
            <span className="text-brand">The Lioness</span>
          </motion.h1>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className="w-16 h-1 bg-brand mb-8" />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="text-zinc-300 text-lg md:text-xl max-w-3xl leading-relaxed"
          >
            I'm Naomi — but everyone calls me The Lioness. I'm the founder of <strong className="text-white">OFF Streets–ON Sports</strong>, and I create premium custom sportswear for fighters, athletes, teams, and clubs who expect more than just another kit.
          </motion.p>
        </div>
      </div>

      {/* Main Story Section */}
      <div className="max-w-5xl mx-auto px-6 py-16 md:py-24">

        {/* Story + Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-6">
              From the Ring <br />
              <span className="text-brand">To Every Sport</span>
            </h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Off Streets on Sports was founded with one clear passion — combat sports. What started as a business specialising in custom boxing and fight wear has grown into something much bigger.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              With roots firmly planted in boxing, we built our reputation by creating high-quality, fully customised apparel for fighters who wanted to stand out. As our customers grew, so did we. Today, Off Streets on Sports proudly designs and manufactures custom clothing for athletes and teams across a wide range of sports.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              From custom gym wear and dancewear to rugby kits, football kits, fight wear, and much more — we work with individuals, clubs, gyms, schools, and organisations to create apparel that's made to perform and designed to represent their identity.
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
                When you order from me, know this — you'll get the very best I have to give. Honesty, whether it's what you want to hear or not. No empty promises. No shortcuts. No pretending.
              </p>
              <cite className="text-zinc-400 font-bold uppercase tracking-wider text-sm not-italic">
                — The Lioness, Founder
              </cite>
            </blockquote>
          </motion.div>
        </div>

        {/* Brand Mission */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-4">
            What I <span className="text-brand">Stand For</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our journey has always been driven by a passion for sport, quality craftsmanship, and helping athletes look and feel their best. No matter the sport, the goal remains the same — premium custom clothing that combines performance, style, and durability.
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

        {/* Respect quote block */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-b border-zinc-800 py-14 mb-16 text-center"
        >
          <div className="space-y-2">
            {['You can buy quality.', 'You can buy style.', 'You can buy expensive.'].map((line, i) => (
              <motion.p
                key={line}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.3}
                className="text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-400"
              >
                {line}
              </motion.p>
            ))}
          </div>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1.2}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mt-6"
          >
            But you can't buy <span className="text-brand">respect.</span>
          </motion.p>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1.5}
            className="text-zinc-500 uppercase tracking-widest text-sm mt-4"
          >
            In this game, respect is earned.
          </motion.p>
        </motion.div>

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
            From the boxing ring to sports fields, dance studios, and gyms across the country — join the athletes, teams, and clubs who trust Off Streets On Sports to deliver quality, performance, and identity in every stitch.
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
