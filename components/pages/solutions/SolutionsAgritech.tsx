'use client';

import { motion } from 'framer-motion';
import { Sprout, Cpu, Droplets, ShieldCheck } from 'lucide-react';

const highlights = [
  { icon: Sprout, label: 'Precision Crop Monitoring', desc: 'AI and satellite-driven crop health tracking for smallholder and commercial farms.' },
  { icon: Cpu, label: 'AI, IoT & Soil Intelligence', desc: 'Integrated sensor networks, satellite data, and agronomic AI for real-time decisions.' },
  { icon: Droplets, label: 'Smart Irrigation & Automation', desc: 'Water-efficient irrigation and farm automation systems that reduce cost and waste.' },
  { icon: ShieldCheck, label: 'Photonic Crop Protection', desc: 'Non-chemical, photonic pest and disease control systems proven in field deployments.' },
];

const solutions = [
  'Precision crop monitoring and yield optimization',
  'Soil analytics and land suitability mapping',
  'Smart irrigation and farm automation systems',
  'AI-driven agronomic advisory and forecasting',
  'Non-chemical and photonic crop protection systems',
];

export default function SolutionsAgritech() {
  return (
    <section id="agritech" className="section-padding bg-gradient-to-br from-gray-50 to-soft-white">
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
                src="/Agriculture.jpg"
                alt="Precision agriculture technology on African farmland"
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
              Agritech Solutions
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-4 leading-tight">
              Agriculture Technology &amp; Smart Farming
            </h2>
            <p className="text-lg text-graphite/70 leading-relaxed mb-8">
              Empowering data-driven, climate-resilient agriculture across Africa through precision tools
              that increase yields, reduce risk, and strengthen food security.
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
