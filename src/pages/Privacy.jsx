import { motion } from 'framer-motion';
import logo from '../logo.png';

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (i = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

const sections = [
  {
    number: '01',
    title: 'Who I Am',
    content: `Off Streets On Sports is a custom fightwear and sportswear brand based in the United Kingdom.\n\nIf you have any questions about how I handle your data, contact me at: offstreetsonsports@gmail.com`
  },
  {
    number: '02',
    title: 'What Data I Collect',
    content: `When you submit a kit enquiry through my website, I collect the following personal information:\n\n• Full name\n• Email address\n• Phone number (optional)\n• Gym or team name (optional)\n• Order details and specifications you provide\n\nI do not collect payment card information. All payments are handled separately and directly.`
  },
  {
    number: '03',
    title: 'How I Use Your Data',
    content: `I use the information you provide solely to:\n\n• Respond to and process your kit enquiry\n• Communicate with you about your order\n• Send design mock-ups and approve your order before production\n\nI will never sell, rent, or share your personal data with third parties for marketing purposes.`
  },
  {
    number: '04',
    title: 'How Your Data Is Stored',
    content: `Enquiry forms on this website are processed via Formspree, a third-party form service. Your submission is transmitted securely to my email. Formspree's privacy policy governs how form data is processed in transit.\n\nI retain your order details for a reasonable period to fulfil your order and handle any follow-up queries. You may request deletion of your data at any time.`
  },
  {
    number: '05',
    title: 'Cookies',
    content: `This website does not use tracking, advertising, or analytics cookies. I do not run any third-party advertising or retargeting scripts.\n\nIf this changes in future, this policy will be updated accordingly.`
  },
  {
    number: '06',
    title: 'Your Rights (GDPR)',
    content: `Under the UK General Data Protection Regulation (UK GDPR), you have the right to:\n\n• Access the personal data I hold about you\n• Request correction of inaccurate data\n• Request deletion of your data\n• Object to processing of your data\n• Lodge a complaint with the Information Commissioner's Office (ICO)\n\nTo exercise any of these rights, please contact me at offstreetsonsports@gmail.com.`
  },
  {
    number: '07',
    title: 'Changes to This Policy',
    content: `I may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of this website after changes constitutes acceptance of the updated policy.\n\nLast updated: July 2025`
  }
];

export default function Privacy() {
  return (
    <div className="pt-24 pb-16">

      {/* Header */}
      <div className="relative overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${logo})` }}
        />
        <div className="absolute inset-0 bg-zinc-900/60" />
        <div className="max-w-4xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="inline-block text-brand font-black uppercase tracking-widest text-sm mb-4 border border-brand/40 px-3 py-1 rounded-full"
          >
            Legal
          </motion.span>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4"
          >
            Privacy<br />
            <span className="text-brand">Policy</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.3, duration: 0.4, transformOrigin: 'left' }}
            className="w-16 h-1 bg-brand mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 max-w-xl"
          >
            I respect your privacy and am committed to protecting your personal data. This policy explains how I handle the information you provide.
          </motion.p>
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-4xl mx-auto px-6 py-14 space-y-6">
        {sections.map((section, i) => (
          <motion.div
            key={section.number}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            custom={i * 0.3}
            className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition-colors"
          >
            <div className="flex items-start gap-5">
              <span className="text-brand font-black text-3xl md:text-4xl leading-none shrink-0 opacity-60 select-none">
                {section.number}
              </span>
              <div>
                <h2 className="text-xl font-black uppercase tracking-tight mb-4 text-white">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.split('\n\n').map((para, j) => (
                    <p key={j} className="text-zinc-300 leading-relaxed whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand/10 border border-brand/30 rounded-xl p-6 text-center"
        >
          <p className="text-zinc-300 text-sm">
            Data enquiries:{' '}
            <a
              href="mailto:offstreetsonsports@gmail.com"
              className="text-brand font-bold hover:underline"
            >
              offstreetsonsports@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
