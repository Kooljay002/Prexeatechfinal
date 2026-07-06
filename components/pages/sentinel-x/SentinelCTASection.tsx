'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Users, Building2, Sprout, Globe } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'For Governments',
    body: 'Deploy Sentinel-X across state and federal agricultural programs for measurable food security impact.',
    cta: 'Request Program Briefing',
  },
  {
    icon: Sprout,
    title: 'For Commercial Farms',
    body: 'Improve crop performance, reduce yield losses, and lower dependence on costly chemical inputs.',
    cta: 'Explore Commercial Options',
  },
  {
    icon: Users,
    title: 'For Farmer Cooperatives',
    body: 'Provide members access to innovative, affordable crop protection technology across the growing season.',
    cta: 'Partner With Us',
  },
  {
    icon: Globe,
    title: 'For Development Partners',
    body: 'Support scalable, evidence-based food security initiatives that reach thousands of smallholder farmers.',
    cta: 'Explore Partnership',
  },
];

export default function SentinelCTA() {
  return (
    <section id="cta" className="relative overflow-hidden" style={{ backgroundColor: '#0A2342' }}>
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(10,35,66,0.92) 0%, rgba(10,35,66,0.98) 100%)' }} />

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
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Get Involved</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[48px] leading-[1.1] text-white mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800 }}
          >
            Partner With Sentinel-X
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            Help transform agricultural productivity across Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              className="rounded-lg p-6 border flex flex-col"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.08)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.09 }}
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 flex-shrink-0" style={{ backgroundColor: 'rgba(91,140,81,0.2)' }}>
                <a.icon className="w-5 h-5" style={{ color: '#5B8C51' }} />
              </div>
              <h4
                className="font-semibold text-sm text-white mb-2"
                style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}
              >
                {a.title}
              </h4>
              <p className="text-white/55 text-xs leading-relaxed flex-1 mb-4">{a.body}</p>
              <a
                href="#contact"
                className="text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-200"
                style={{ color: '#E85D5D' }}
              >
                {a.cta} <ArrowRight className="w-3 h-3" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Main CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded"
            style={{ backgroundColor: '#E85D5D' }}
          >
            Request a Demonstration <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded border border-white/25 hover:bg-white/10 transition-colors duration-300"
          >
            Become a Strategic Partner
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded border border-white/25 hover:bg-white/10 transition-colors duration-300"
          >
            Schedule a Meeting
          </a>
        </motion.div>
      </div>
    </section>
  );
}
