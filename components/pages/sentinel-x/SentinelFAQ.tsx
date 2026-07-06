'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'What is Sentinel-X?',
    a: 'Sentinel-X is a non-chemical crop protection technology developed to help farmers detect, control and suppress pest infestations — particularly Fall Armyworm — in maize and other crops. It represents an innovative, science-led alternative to conventional pesticide-based interventions.',
  },
  {
    q: 'Is Sentinel-X a pesticide?',
    a: 'No. Sentinel-X is not a pesticide and contains no chemical agents. It operates through a proprietary non-chemical mechanism that suppresses pest activity without leaving residues on crops, in soil, or in the environment.',
  },
  {
    q: 'How quickly does it work?',
    a: 'Field data from Northern Nigeria pilot deployments shows that within 10–14 days of treatment, extension teams documented zero visible larvae, elimination of egg masses, and visible crop recovery in treated areas.',
  },
  {
    q: 'Can governments deploy Sentinel-X statewide?',
    a: 'Yes. Sentinel-X is specifically designed for scalable institutional deployment through government agricultural programs, State ADP networks, and federal intervention schemes. Prexea Technology works directly with government stakeholders to develop program-specific deployment plans.',
  },
  {
    q: 'Can commercial farms participate?',
    a: 'Absolutely. Sentinel-X is applicable across smallholder plots, commercial maize operations, outgrower schemes, and commodity production programs. Commercial farm engagements are managed through direct program agreements with Prexea Technology.',
  },
  {
    q: 'How can organizations become partners?',
    a: 'Organizations interested in deploying Sentinel-X — whether as government bodies, development partners, NGOs, cooperatives, or commercial entities — can contact Prexea Technology through the form below or by requesting a formal program demonstration.',
  },
];

export default function SentinelFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">FAQs</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
          >
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-2">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              className="border border-gray-100 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm pr-4" style={{ color: '#0A2342' }}>{item.q}</span>
                <span className="flex-shrink-0">
                  {open === i
                    ? <Minus className="w-4 h-4" style={{ color: '#E85D5D' }} />
                    : <Plus className="w-4 h-4 text-gray-400" />
                  }
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm text-gray-500 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
