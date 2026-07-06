'use client';

import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle } from 'lucide-react';

const tiers = [
  {
    name: 'Technology Developer',
    description: 'For companies with proven technology seeking African market entry.',
    benefits: [
      'Exclusive in-country representation',
      'Regulatory navigation support',
      'Distribution network access',
      'Field trial management',
      'Ongoing market intelligence',
    ],
    highlight: false,
  },
  {
    name: 'Strategic Partner',
    description: 'For organisations seeking deep co-development and long-term market presence.',
    benefits: [
      'All Technology Developer benefits',
      'Co-branded programme delivery',
      'Joint grant and funding applications',
      'Shared IP commercialisation',
      'Executive advisory access',
      'Multi-country deployment roadmap',
    ],
    highlight: true,
  },
  {
    name: 'Research Institution',
    description: 'For universities and research bodies seeking commercialisation pathways.',
    benefits: [
      'Spin-out commercialisation support',
      'Field trial hosting',
      'Industry connection brokerage',
      'Publication-to-product pipeline',
      'Funding identification',
    ],
    highlight: false,
  },
];

export default function PartnershipsTiers() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-6">
            Partnership Models
          </h2>
          <p className="text-xl text-graphite/70 max-w-2xl mx-auto leading-relaxed">
            Structured engagement options designed for different types of organisations
            and collaboration objectives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className={`rounded-card p-8 ${
                tier.highlight
                  ? 'bg-deep-navy text-soft-white ring-2 ring-burgundy'
                  : 'bg-white text-graphite'
              } premium-shadow hover-lift`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {tier.highlight && (
                <div className="text-coral-red text-xs font-bold uppercase tracking-widest mb-4">
                  Most Popular
                </div>
              )}
              <h3 className={`font-heading text-2xl mb-3 ${tier.highlight ? 'text-soft-white' : 'text-deep-navy'}`}>
                {tier.name}
              </h3>
              <p className={`mb-8 leading-relaxed ${tier.highlight ? 'text-soft-white/70' : 'text-graphite/70'}`}>
                {tier.description}
              </p>
              <ul className="space-y-3">
                {tier.benefits.map((b) => (
                  <li key={b} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-coral-red' : 'text-deep-navy'}`} />
                    <span className={`text-sm leading-relaxed ${tier.highlight ? 'text-soft-white/80' : 'text-graphite/70'}`}>
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
