'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
            Who We Are
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-soft-white mb-6 leading-tight">
            Bridging Technology<br />and African Markets
          </h1>
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            Prexea Technology is a purpose-driven commercialization firm connecting
            world-class innovations to the markets, people, and systems that need them most.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
