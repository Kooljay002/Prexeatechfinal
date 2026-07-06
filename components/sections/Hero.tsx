'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://res.cloudinary.com/dmtitg1ow/video/upload/q_auto/Prexea_loop2_h7nsxi.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content — pt offsets the fixed nav (36px top bar + 80px main bar = 116px) + 15pt extra push */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-6 sm:px-10 text-center pt-[151px] pb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h1 className="font-heading text-[32px] sm:text-[44px] lg:text-[60px] text-soft-white mb-16 leading-[1.1]" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.55), 0 1px 4px rgba(0,0,0,0.4)' }}>
            Connecting African Markets to{' '}
            <span className="text-coral-red">Transformative Technologies</span>
          </h1>

          {/* Sub-heading colour boxes */}
          <motion.div
            className="flex flex-nowrap justify-center gap-2 mb-14"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="bg-deep-navy text-soft-white text-xs font-semibold px-3 py-2 rounded-md whitespace-nowrap border border-white/20">
              Precision Agritech
            </span>
            <span className="bg-deep-navy text-soft-white text-xs font-semibold px-3 py-2 rounded-md border border-white/20 whitespace-nowrap">
              Enterprise Solutions
            </span>
            <span className="bg-burgundy text-soft-white text-xs font-semibold px-3 py-2 rounded-md whitespace-nowrap">
              Science-Led Commercialisation
            </span>
            <span className="bg-gray-500 text-soft-white text-xs font-semibold px-3 py-2 rounded-md whitespace-nowrap">
              Built for African Markets
            </span>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <Button variant="secondary" size="lg" href="/solutions" className="group">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" href="/partnerships" className="bg-transparent border-white/40 text-soft-white hover:bg-blue-600 hover:border-blue-600 hover:text-white">
              Become a Partner
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-white/25 rounded-full flex justify-center"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
              animate={{ scaleY: [1, 0.4, 1] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}