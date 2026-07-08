import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';

const fadeUp = {
  hidden: { y: 20, opacity: 0 },
  visible: (i = 0) => ({ y: 0, opacity: 1, transition: { duration: 0.5, delay: i * 0.08 } }),
};

const SPORT_FIELDS = {
  'Fight Wear': [
    { id: 'discipline', label: 'Fight Discipline', type: 'select', options: ['Boxing', 'MMA', 'Muay Thai', 'Brazilian Jiu-Jitsu', 'Kickboxing', 'Other'] },
    { id: 'items', label: 'Items Needed', type: 'select', options: ['Fight Shorts', 'Ring Jacket', 'Full Fighter Bundle (Shorts + Jacket + Top)', 'Training Kit', 'Other / Multiple'] },
    { id: 'fighterName', label: 'Fighter / Gym Name for Customisation', type: 'text', placeholder: 'e.g. Team Lioness Boxing' },
  ],
  'Rugby Kits': [
    { id: 'teamName', label: 'Team / Club Name', type: 'text', placeholder: 'e.g. Northfields RFC' },
    { id: 'kitType', label: 'Kit Type', type: 'select', options: ['Home Kit', 'Away Kit', 'Home & Away', 'Training Kit', 'Full Club Package'] },
    { id: 'league', label: 'League / Division (optional)', type: 'text', placeholder: 'e.g. National League 2' },
  ],
  'Football Kits': [
    { id: 'teamName', label: 'Team / Club Name', type: 'text', placeholder: 'e.g. Oakfield FC' },
    { id: 'kitType', label: 'Kit Type', type: 'select', options: ['Home Kit', 'Away Kit', 'Home & Away', 'Goalkeeper Kit', 'Training Kit', 'Full Club Package'] },
    { id: 'league', label: 'League / Division (optional)', type: 'text', placeholder: 'e.g. Sunday League Division 1' },
  ],
  'Gym Wear': [
    { id: 'gymName', label: 'Gym / Brand Name', type: 'text', placeholder: 'e.g. Elite Fitness' },
    { id: 'items', label: 'Items Needed', type: 'select', options: ['T-Shirts', 'Hoodies', 'Shorts', 'Full Training Set', 'Mixed Items'] },
  ],
  'Dancewear': [
    { id: 'danceStyle', label: 'Dance Style', type: 'select', options: ['Street Dance', 'Ballet / Contemporary', 'Cheerleading', 'Competition Dance', 'Other'] },
    { id: 'groupName', label: 'Group / School Name', type: 'text', placeholder: 'e.g. Rhythm Dance Academy' },
    { id: 'eventType', label: 'Event / Purpose', type: 'text', placeholder: 'e.g. Competition, end of year show' },
  ],
  'Custom & Other': [
    { id: 'itemType', label: 'What Are You Looking For?', type: 'text', placeholder: 'e.g. Walkout flag, banner, custom hoodie...' },
    { id: 'purpose', label: 'Purpose / Event', type: 'text', placeholder: 'e.g. Fight night walkout, club fundraiser' },
  ],
};

export default function SportEnquiryForm({ sport }) {
  const sportFields = SPORT_FIELDS[sport] || SPORT_FIELDS['Custom & Other'];

  const [form, setForm] = useState({
    fullName: '', email: '', phone: '', quantity: '', colours: '', additionalInfo: '',
    ...Object.fromEntries(sportFields.map(f => [f.id, ''])),
  });
  const [status, setStatus] = useState('idle');

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const isValid = form.fullName.length > 2 && form.email.includes('@');

  const handleSubmit = async () => {
    setStatus('submitting');
    const payload = {
      'Sport Category': sport,
      'Name': form.fullName,
      'Email': form.email,
      'Phone': form.phone || 'Not provided',
      'Quantity': form.quantity || 'Not specified',
      'Colour Preferences': form.colours || 'Not specified',
      'Additional Info': form.additionalInfo || 'None',
    };
    sportFields.forEach(f => { if (form[f.id]) payload[f.label] = form[f.id]; });

    try {
      const res = await fetch('https://formspree.io/f/xkolebrp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      res.ok ? setStatus('success') : setStatus('idle');
    } catch {
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle className="text-brand w-16 h-16 mx-auto mb-4" />
        <h3 className="text-2xl font-black uppercase mb-2">Enquiry Sent!</h3>
        <p className="text-zinc-400 mb-1">Thanks, {form.fullName.split(' ')[0]}! I'll be in touch shortly.</p>
        <p className="text-zinc-500 text-sm">Don't forget to email any logos or artwork to <span className="text-brand">offstreetsonsports@gmail.com</span></p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Contact details */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {[
          { key: 'fullName', label: 'Full Name *', placeholder: 'Your name' },
          { key: 'email', label: 'Email Address *', placeholder: 'you@example.com' },
          { key: 'phone', label: 'Phone Number', placeholder: '+44...' },
          { key: 'quantity', label: 'Approx. Quantity', placeholder: 'e.g. 15 kits' },
        ].map(({ key, label, placeholder }) => (
          <motion.div key={key} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-1.5">{label}</label>
            <input
              type="text"
              value={form[key]}
              onChange={e => set(key, e.target.value)}
              placeholder={placeholder}
              className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
            />
          </motion.div>
        ))}
      </div>

      {/* Sport-specific fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {sportFields.map((field, i) => (
          <motion.div key={field.id} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}>
            <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-1.5">{field.label}</label>
            {field.type === 'select' ? (
              <select
                value={form[field.id]}
                onChange={e => set(field.id, e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
              >
                <option value="">Select...</option>
                {field.options.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            ) : (
              <input
                type="text"
                value={form[field.id]}
                onChange={e => set(field.id, e.target.value)}
                placeholder={field.placeholder}
                className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Colours */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-1.5">Colour Preferences</label>
        <input
          type="text"
          value={form.colours}
          onChange={e => set('colours', e.target.value)}
          placeholder="e.g. Red and white, or match our club badge colours"
          className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
        />
      </motion.div>

      {/* Additional info */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <label className="block text-xs font-black uppercase tracking-widest text-zinc-400 mb-1.5">Additional Information</label>
        <textarea
          value={form.additionalInfo}
          onChange={e => set('additionalInfo', e.target.value)}
          placeholder="Any other details — logos, specific design ideas, deadlines, etc."
          rows={4}
          className="w-full bg-zinc-900 border border-zinc-700 focus:border-brand rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
        />
      </motion.div>

      <button
        onClick={handleSubmit}
        disabled={!isValid || status === 'submitting'}
        className="w-full bg-brand text-black font-black uppercase tracking-wide py-4 rounded-lg text-lg hover:bg-[#c99338] transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(182,131,50,0.3)]"
      >
        <Send size={18} />
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
      </button>
      <p className="text-center text-zinc-600 text-xs">We'll get back to you within 24 hours.</p>
    </div>
  );
}
