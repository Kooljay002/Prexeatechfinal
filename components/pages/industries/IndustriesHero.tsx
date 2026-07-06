'use client';

import { motion } from 'framer-motion';

export default function IndustriesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2284170/pexels-photo-2284170.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
          }}
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">
            Sectors We Serve
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-soft-white mb-6 leading-tight">
            Industries We<br />Transform
          </h1>
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            Technology deployment across the sectors that matter most for
            Africa&apos;s long-term economic growth and human development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
