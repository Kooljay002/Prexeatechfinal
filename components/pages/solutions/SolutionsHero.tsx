'use client';

import { motion } from 'framer-motion';

export default function SolutionsHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2132974/pexels-photo-2132974.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
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
            What We Offer
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-soft-white mb-6 leading-tight">
            Solutions Built for<br />African Realities
          </h1>
          <p className="text-xl text-soft-white/80 max-w-3xl mx-auto leading-relaxed">
            From smart farming and digital governance to healthcare, enterprise automation,
            clean technology, and research commercialization — every solution is validated,
            contextualised, and deployed for lasting impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
