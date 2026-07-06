'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '60%', label: 'Reduction in chemical inputs', sub: 'vs. conventional practice' },
  { value: '40%', label: 'Average yield increase', sub: 'across all crop types' },
  { value: '5,000+', label: 'Farms deployed', sub: 'across 3 countries' },
  { value: '95%', label: 'Farmer retention rate', sub: 'after first season' },
];

export default function SentinelResults() {
  return (
    <section className="section-padding bg-deep-navy text-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-soft-white mb-6">
            Results That Speak for Themselves
          </h2>
          <p className="text-xl text-coral-red max-w-2xl mx-auto">
            Documented outcomes from independent field trials and commercial deployments.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center bg-soft-white/5 rounded-card p-8 border border-soft-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-5xl font-heading font-bold text-coral-red mb-3">{stat.value}</div>
              <div className="text-soft-white font-semibold mb-2">{stat.label}</div>
              <div className="text-coral-red text-sm">{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
