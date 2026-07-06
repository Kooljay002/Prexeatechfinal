'use client';

import { motion } from 'framer-motion';
import { Zap, Leaf, FlaskConical, Sun } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Photonic Technology',
    description: 'Uses targeted light frequencies to disrupt pest lifecycles and strengthen natural plant immunity — no residues, no resistance build-up.',
  },
  {
    icon: Leaf,
    title: 'Zero Chemical Inputs',
    description: 'Eliminates reliance on synthetic pesticides, reducing farmer costs and ensuring export-grade produce free of chemical residues.',
  },
  {
    icon: FlaskConical,
    title: 'Scientifically Validated',
    description: 'Peer-reviewed efficacy data from controlled trials and on-farm studies across Nigeria, Kenya, and Ghana.',
  },
  {
    icon: Sun,
    title: 'Solar-Powered Operation',
    description: 'Designed for off-grid African environments — fully powered by solar with autonomous operation requiring minimal farmer intervention.',
  },
];

export default function SentinelFeatures() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-6">
            How Sentinel-X Works
          </h2>
          <p className="text-xl text-graphite/70 max-w-2xl mx-auto leading-relaxed">
            A science-first approach to crop protection that works with nature, not against it.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              className="flex items-start space-x-6 bg-white rounded-card p-8 premium-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-deep-navy to-burgundy rounded-xl flex items-center justify-center flex-shrink-0">
                <f.icon className="w-7 h-7 text-soft-white" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-deep-navy mb-3">{f.title}</h3>
                <p className="text-graphite/70 leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/3] rounded-card overflow-hidden premium-shadow">
              <img
                src="https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Sentinel-X field deployment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="font-heading text-3xl text-deep-navy mb-6">Proven in African Conditions</h3>
            <p className="text-lg text-graphite/70 leading-relaxed mb-6">
              Sentinel-X has been deployed across smallholder and commercial farms in West and East Africa,
              consistently delivering yield improvements between 30–60% while eliminating chemical input costs.
            </p>
            <p className="text-lg text-graphite/70 leading-relaxed">
              Each unit is ruggedised for heat, humidity, and dust — designed specifically for the
              environments where it operates, not retrofitted from temperate-climate products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
