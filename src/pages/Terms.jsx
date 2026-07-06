import { motion } from 'framer-motion';

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
    title: 'Design Deposit',
    content: `A £50 non-refundable deposit is required for all designs. This deposit secures your place in our production schedule and allows us to begin the design process. The deposit will be deducted from your final balance.`
  },
  {
    number: '02',
    title: 'Payment Terms',
    content: `All custom individual kits must be paid in full before production begins. This also applies to any additional add-on orders, which must be paid immediately once agreed.\n\nPayment must be made within the timeframe specified by us. If no timeframe is provided, full payment must be received no later than 4 weeks before the date the kit is required.\n\nLate payment may result in production being postponed and potential delivery delays. Off Streets on Sports cannot be held responsible for any delays caused by late payment.`
  },
  {
    number: '03',
    title: 'Part Payments',
    content: `If a part payment has been made but the remaining balance is not paid within the agreed timeframe, you may lose your reserved production slot.\n\nPlease note:\n• Deposits and part payments are non-refundable.\n• Your order will only be processed once full payment has been received.\n• If payment is completed late, your order may be moved to the back of the production queue.`
  },
  {
    number: '04',
    title: 'Design Approval & Refund Policy',
    content: `We do not offer refunds on custom kits once designs have been approved.\n\nCustomers will receive design mocks and/or test prints before production begins. It is the customer's responsibility to carefully review and approve all designs.\n\nOnce approval has been given and the kits have been printed, the order is considered final.`
  },
  {
    number: '05',
    title: 'Quality Guarantee',
    content: `While custom orders cannot be refunded after approval, we are committed to maintaining high-quality standards.\n\nIf any product does not meet our quality standards, we will offer a replacement or refund where appropriate.`
  },
  {
    number: '06',
    title: 'Sizing Responsibility',
    content: `Off Streets on Sports cannot be held responsible for sizing issues if measurements have been provided by the customer.\n\nIf kits are produced according to the measurements supplied, they will be considered correctly manufactured, even if the sizing later proves unsuitable.`
  }
];

export default function Terms() {
  return (
    <div className="pt-24 pb-16">

      {/* Header */}
      <div className="relative overflow-hidden bg-zinc-900 border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-br from-brand/10 via-transparent to-transparent pointer-events-none" />
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
            Terms &<br />
            <span className="text-brand">Disclaimer Policy</span>
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
            Please read these terms carefully before placing your order. By proceeding with a deposit or payment, you agree to the conditions set out below.
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

        {/* Contact note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-brand/10 border border-brand/30 rounded-xl p-6 text-center"
        >
          <p className="text-zinc-300 text-sm">
            Questions about these terms?{' '}
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
