'use client';

import { motion } from 'framer-motion';
import { Shield, Download, Play, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function FeaturedTechnology() {
  return (
    <section className="section-padding bg-deep-navy text-soft-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23FF5B5B' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
          {/* Left Side — Image at 60% */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-card overflow-hidden">
              <img
                src="/Sentinel_X_image.png"
                alt="Sentinel-X — Advanced Non-Chemical Crop Protection Technology"
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Right Side — Content at 40% */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-4">
              <span className="text-coral-red font-semibold text-xs uppercase tracking-wider">
                Featured Technology
              </span>
            </div>

            <h2 className="font-heading text-lg md:text-xl lg:text-2xl mb-5 leading-tight">
              Sentinel-X: Advanced Crop Protection
            </h2>

            <p className="text-sm text-white mb-5 leading-relaxed">
              Revolutionary non-chemical crop protection technology that enhances agricultural
              productivity while maintaining environmental sustainability. Scientifically proven
              to improve crop health and yield without harmful chemical interventions.
            </p>

            <div className="space-y-3 mb-7">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-coral-red rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-white text-xs leading-relaxed">
                  Photonic technology for enhanced crop protection
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-coral-red rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-white text-xs leading-relaxed">
                  Environmentally sustainable and chemical-free
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-coral-red rounded-full mt-1.5 flex-shrink-0" />
                <p className="text-white text-xs leading-relaxed">
                  Proven results in African agricultural conditions
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
              <Button variant="secondary" size="sm" href="/contact" className="group">
                <Play className="mr-1.5 w-3.5 h-3.5" />
                Request Demo
              </Button>

              <Button variant="outline" size="sm" className="group bg-transparent border-soft-white text-soft-white hover:bg-soft-white hover:text-deep-navy">
                <Download className="mr-1.5 w-3.5 h-3.5" />
                Download Brochure
              </Button>

              <a
                href="https://sentinel.maestromfb.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-soft-white bg-forest-green/80 hover:bg-forest-green border border-forest-green/60 rounded-lg px-4 py-2 transition-colors duration-200"
              >
                Agents Login
              </a>

              <a
                href="/field-agents-application"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-soft-white bg-[#7A1E3A]/80 hover:bg-[#7A1E3A] border border-[#7A1E3A]/60 rounded-lg px-4 py-2 transition-colors duration-200"
              >
                Become an Agent
              </a>

              <a
                href="/sentinel-x"
                className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-coral-red hover:text-white border border-coral-red/40 hover:border-white/40 rounded-lg px-4 py-2 transition-colors duration-200"
              >
                Learn More
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
