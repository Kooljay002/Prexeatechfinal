'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download, ChevronDown } from 'lucide-react';

export default function SentinelHero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Maize fields"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(10,35,66,0.88) 0%, rgba(10,35,66,0.65) 50%, rgba(91,140,81,0.35) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,35,66,0.7) 0%, transparent 60%)' }} />
      </div>

      {/* Subtle motion overlay — horizontal light sweep */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.03) 50%, transparent 70%)' }}
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 4 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-40 pb-28">
        {/* Label strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.2em]">Sentinel-X — Crop Protection Technology</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-heading text-[42px] sm:text-[58px] lg:text-[72px] leading-[1.05] text-white mb-6 max-w-4xl"
          style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800 }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          Protecting Crops.<br />
          Improving Yields.<br />
          <span style={{ color: '#5B8C51' }}>Advancing Food Security.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          Sentinel-X is a proven non-chemical crop protection platform helping Nigerian farmers combat Fall Armyworm and improve agricultural productivity.
        </motion.p>

        <motion.p
          className="text-base text-white/60 max-w-xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.62 }}
        >
          Successfully piloted in Northern Nigeria through collaboration with farmers, extension agents, research institutions and government stakeholders.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 mb-14"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.75 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded"
            style={{ backgroundColor: '#E85D5D' }}
          >
            Request a Demonstration
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded border border-white/30 hover:bg-white/10 transition-colors duration-300"
          >
            <Download className="w-4 h-4" />
            Download Program Brochure
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          className="flex flex-wrap items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
        >
          {['Pilot Deployments in Kaduna State', 'Pilot Deployments in Kano State', 'Green Field Day Hosted', 'Government Stakeholders Engaged'].map((item) => (
            <div key={item} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#5B8C51' }} />
              <span className="text-white/70 text-xs font-medium">{item}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#challenge"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
