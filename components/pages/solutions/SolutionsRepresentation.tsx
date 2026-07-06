'use client';

import { motion } from 'framer-motion';
import { Globe, Handshake, ChartBar as BarChart3 } from 'lucide-react';

const features = [
  { icon: Globe, label: 'Global Technology Scouting', desc: 'Identifying best-in-class technologies ready for African market entry.' },
  { icon: Handshake, label: 'Exclusive Distribution Agreements', desc: 'Securing regional rights to ensure focused, accountable commercialization.' },
  { icon: BarChart3, label: 'Market Validation', desc: 'Pilot programmes and field trials that generate real-world performance data.' },
];

export default function SolutionsRepresentation() {
  return (
    <section id="representation" className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-deep-navy font-semibold text-sm uppercase tracking-wider block mb-4">
              Technology Representation
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-8 leading-tight">
              Bringing World-Class Technologies to African Markets
            </h2>
            <p className="text-lg text-graphite/70 leading-relaxed mb-8">
              We act as the exclusive in-market representative for technology developers
              who want to enter African markets with credibility, speed, and local expertise.
            </p>
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-deep-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <f.icon className="w-6 h-6 text-deep-navy" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-navy mb-1">{f.label}</h4>
                    <p className="text-graphite/60 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
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
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Technology representation in African markets"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
