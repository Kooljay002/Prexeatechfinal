'use client';

import { motion } from 'framer-motion';
import { Microscope, Lightbulb, TrendingUp, Globe } from 'lucide-react';

const highlights = [
  { icon: Microscope, label: 'Research Partnerships & Ecosystems', desc: 'University and industry collaboration frameworks that bridge scientific discovery and market need.' },
  { icon: Lightbulb, label: 'IP Licensing & Technology Transfer', desc: 'Structured processes for intellectual property licensing and transferring lab breakthroughs to industry.' },
  { icon: TrendingUp, label: 'Prototype & Pilot Deployment', desc: 'Rapid prototype development and field pilot programs that validate technologies at real-world scale.' },
  { icon: Globe, label: 'Market Validation & Scaling', desc: 'Market validation frameworks and scaling support to move innovations from concept to commercial deployment.' },
];

const solutions = [
  'Research partnerships and innovation ecosystems',
  'IP licensing and technology transfer systems',
  'Prototype and pilot deployment programs',
  'Market validation and scaling support',
  'Innovation advisory and scouting',
];

export default function SolutionsResearch() {
  return (
    <section id="research" className="section-padding bg-deep-navy text-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">
              R&amp;D
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-soft-white mb-4 leading-tight">
              Research, Innovation &amp; Technology Commercialization
            </h2>
            <p className="text-lg text-soft-white/70 leading-relaxed mb-8">
              Turning scientific discoveries into real-world impact — bridging the gap between
              academia and industry through technology licensing, applied research, and
              innovation partnerships.
            </p>

            <div className="space-y-5 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-soft-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-5 h-5 text-coral-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-white mb-0.5">{h.label}</h4>
                    <p className="text-soft-white/60 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-soft-white/20 pt-6">
              <p className="text-xs font-bold text-coral-red uppercase tracking-widest mb-3">Core Solutions</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-soft-white/70">
                    <span className="text-coral-red mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="aspect-[4/3] rounded-card overflow-hidden premium-shadow">
              <img
                src="/researcher.jpg"
                alt="Research and innovation commercialization laboratory"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
