'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '17', label: 'Farms deployed' },
  { value: '15', label: 'Acreage covered' },
  { value: '5', label: 'Partners' },
  { value: '2', label: 'Governments reached' },
];

const partnerLogos = [
  { src: '/Federal-Ministry-of-Agriculture-Rural-Development-FMARD-600x495 copy copy copy copy copy.png', alt: 'Federal Ministry of Agriculture and Food Security' },
  { src: '/informiton_logo copy copy copy.png', alt: 'Informiton' },
  { src: '/Quarantine_service_logo copy copy copy.jpg', alt: 'Nigeria Agricultural Quarantine Service' },
  { src: '/images/trusted-partners/Optimum_Consult_logo.jpeg', alt: 'The Optimum Consult Nig Ltd' },
];

export default function TrustSection() {
  return (
    <section className="bg-deep-navy py-20 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-coral-red text-xs font-bold uppercase tracking-widest mb-3">
            Trusted Partnerships
          </p>
          <h2 className="font-heading text-2xl md:text-3xl text-white leading-snug">
            Working with Leading Institutions
          </h2>
        </motion.div>

        {/* Partner Logos Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-2xl mx-auto">
          {partnerLogos.map(({ src, alt }, index) => (
            <motion.div
              key={src}
              className="bg-white rounded-2xl flex items-center justify-center py-6 px-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
            >
              <img
                src={src}
                alt={alt}
                className="h-14 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-16" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="font-heading text-4xl font-bold text-coral-red mb-2">
                {stat.value}
              </div>
              <div className="text-white text-sm tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}