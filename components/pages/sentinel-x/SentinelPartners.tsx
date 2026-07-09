'use client';

import { motion } from 'framer-motion';

const partners = [
  {
    name: 'Informiton Inc.',
    role: 'Technology Provider',
    country: 'USA',
    logo: '/informiton_logo.png',
  },
  {
    name: 'Prexea Technology Ltd',
    role: 'Program Lead — Nigeria',
    country: 'NG',
    logo: '/Prexea_icon.png',
  },
  {
    name: 'Optimum Consult',
    role: 'Government Liaison & Field Coordination',
    country: 'NG',
    logo: '/images/trusted-partners/Optimum_Consult_logo.jpeg',
  },
];

const stakeholders = [
  'Farmer Associations',
  'Agricultural Cooperatives',
  'Extension Networks',
  'Research Institutions',
  'State Agricultural Stakeholders',
  'Federal Agricultural Stakeholders',
];

export default function SentinelPartners() {
  return (
    <section id="partners" style={{ backgroundColor: '#F8F8F6' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Partnerships</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
          >
            Strategic Partners
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Sentinel-X is delivered through collaboration between technology providers, agricultural institutions and implementation partners.
          </p>
        </motion.div>

        {/* Primary partner cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <img src={p.logo} alt={p.name} className="h-12 object-contain mb-4" />
              <h4 className="font-semibold text-sm mb-1" style={{ color: '#0A2342' }}>{p.name}</h4>
              <p className="text-gray-400 text-xs mb-2">{p.role}</p>
              <span
                className="text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded"
                style={{ backgroundColor: 'rgba(10,35,66,0.07)', color: '#0A2342' }}
              >
                {p.country === 'USA' ? 'United States' : 'Nigeria'}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Supporting stakeholders */}
        <motion.div
          className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4
            className="text-sm font-semibold uppercase tracking-widest mb-6 text-center"
            style={{ color: '#0A2342' }}
          >
            Supporting Stakeholders
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {stakeholders.map((s) => (
              <span
                key={s}
                className="text-xs font-medium px-4 py-2 rounded border"
                style={{ borderColor: '#5B8C51', color: '#5B8C51', backgroundColor: 'rgba(91,140,81,0.06)' }}
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
