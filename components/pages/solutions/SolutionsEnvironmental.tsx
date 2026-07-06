'use client';

import { motion } from 'framer-motion';
import { Wind, Leaf, Sun, MapPin } from 'lucide-react';

const highlights = [
  { icon: Wind, label: 'Climate Monitoring & Analytics', desc: 'Real-time air, water, and climate monitoring systems that turn environmental data into insight.' },
  { icon: Leaf, label: 'Carbon Tracking & ESG Reporting', desc: 'Carbon footprint measurement and sustainability compliance dashboards for organizations.' },
  { icon: Sun, label: 'Renewable Energy Optimization', desc: 'Solar and clean energy management platforms that maximize efficiency and reduce waste.' },
  { icon: MapPin, label: 'GIS Environmental Intelligence', desc: 'Geospatial environmental mapping and natural resource monitoring across ecosystems.' },
];

const solutions = [
  'Air, water, and climate monitoring systems',
  'Carbon footprint and emissions tracking tools',
  'Solar and renewable energy management platforms',
  'GIS-based environmental intelligence systems',
  'Sustainability and ESG compliance dashboards',
];

export default function SolutionsEnvironmental() {
  return (
    <section id="environmental" className="section-padding bg-gradient-to-br from-gray-50 to-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[4/3] rounded-card overflow-hidden premium-shadow">
              <img
                src="/environment3.jpg"
                alt="Clean energy and environmental technology"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-deep-navy font-semibold text-sm uppercase tracking-wider block mb-4">
              CleanTech
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-4 leading-tight">
              Environmental &amp; Climate Technology
            </h2>
            <p className="text-lg text-graphite/70 leading-relaxed mb-8">
              Driving sustainability through environmental intelligence and clean energy systems —
              turning data into actionable insights that support climate resilience and
              sustainable development.
            </p>

            <div className="space-y-5 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-burgundy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-5 h-5 text-burgundy" />
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
                    <span className="text-burgundy mt-0.5 flex-shrink-0">&#10003;</span>
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
