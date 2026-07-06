'use client';

import { motion } from 'framer-motion';

const metrics = [
  { value: 'Kaduna State', label: 'Pilot Deployment', sub: 'Northern Nigeria' },
  { value: 'Kano State', label: 'Pilot Deployment', sub: 'Northern Nigeria' },
  { value: '10–14 Days', label: 'Observed Recovery Window', sub: 'Post-intervention' },
  { value: '10,000+', label: 'Farmer Scale-Up Target', sub: 'National deployment goal' },
  { value: 'Multiple', label: 'Stakeholders Engaged', sub: 'Govt, research & farmer bodies' },
  { value: 'Deployment Ready', label: 'Commercial Status', sub: 'Scale-up activities initiated' },
];

export default function SentinelDashboard() {
  return (
    <section id="dashboard" style={{ backgroundColor: '#0A2342' }} className="relative overflow-hidden">
      {/* Subtle topographic lines */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.6) 20px, rgba(255,255,255,0.6) 21px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Results Dashboard</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] text-white mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800 }}
          >
            Field Outcomes
          </h2>
          <p className="text-white/50 max-w-lg mx-auto text-sm">
            Documented outcomes from pilot field deployments across Northern Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              className="relative rounded-lg p-7 border"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-6 right-6 h-px" style={{ backgroundColor: '#5B8C51' }} />

              <div
                className="text-2xl sm:text-3xl font-bold mb-1.5 leading-tight"
                style={{ fontFamily: '"Open Sans", sans-serif', color: '#5B8C51' }}
              >
                {m.value}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{m.label}</div>
              <div className="text-white/40 text-xs">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
