'use client';

import { motion } from 'framer-motion';
import { Heart, Microscope, FileText, Package } from 'lucide-react';

const highlights = [
  { icon: Heart, label: 'Telemedicine & Remote Healthcare', desc: 'Virtual consultation platforms connecting patients and providers across distance and geography.' },
  { icon: Microscope, label: 'AI Diagnostics & Clinical Intelligence', desc: 'AI-assisted diagnostic tools that accelerate accurate clinical decision-making.' },
  { icon: FileText, label: 'Digital Health Records (EHR)', desc: 'Hospital and patient management systems that centralise health data for better outcomes.' },
  { icon: Package, label: 'Healthcare Supply Chain', desc: 'End-to-end medical logistics tracking to ensure availability of medicines and equipment.' },
];

const solutions = [
  'Telemedicine and virtual consultation platforms',
  'AI diagnostic and clinical decision tools',
  'Hospital and patient management systems (EHR)',
  'Healthcare logistics and supply chain tracking',
  'Community and rural health outreach platforms',
];

export default function SolutionsHealthcare() {
  return (
    <section id="healthcare" className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-2"
          >
            <div className="aspect-[4/3] rounded-card overflow-hidden premium-shadow">
              <img
                src="/healthcare.jpg"
                alt="Digital healthcare and telemedicine solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-1"
          >
            <span className="text-deep-navy font-semibold text-sm uppercase tracking-wider block mb-4">
              HealthTech
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-4 leading-tight">
              Healthcare Technology Solutions
            </h2>
            <p className="text-lg text-graphite/70 leading-relaxed mb-8">
              Expanding access to quality healthcare through digital innovation — connecting patients,
              providers, and institutions for faster diagnosis and improved delivery, especially in
              underserved communities.
            </p>

            <div className="space-y-5 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-deep-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-5 h-5 text-deep-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-0.5">{h.label}</h4>
                    <p className="text-graphite/60 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-xs font-bold text-deep-navy uppercase tracking-widest mb-3">Core Solutions</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-graphite/70">
                    <span className="text-deep-navy mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
