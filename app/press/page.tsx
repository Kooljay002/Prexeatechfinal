'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import { Download, ArrowRight } from 'lucide-react';

const coverage = [
  { outlet: 'BusinessDay Nigeria', headline: 'Prexea Technology Closes Landmark Agritech Deal with West African Farmers Cooperative', date: 'November 2024' },
  { outlet: 'The Guardian Nigeria', headline: 'How Photonic Crop Protection is Changing the Game for Nigerian Smallholders', date: 'October 2024' },
  { outlet: 'African Business Magazine', headline: 'Prexea: The Commercialisation Bridge Africa Has Been Waiting For', date: 'September 2024' },
];

export default function PressPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }} />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Media</span>
            <h1 className="font-heading text-5xl md:text-7xl text-soft-white mb-6">Press & Media</h1>
            <p className="text-xl text-soft-white/80 max-w-2xl mx-auto">News, coverage, and resources for journalists and media partners.</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Press Release */}
      <section className="bg-soft-white pt-16 pb-4">
        <div className="max-w-5xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-card overflow-hidden premium-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src="/press/QM3.jpeg"
                  alt="Prexea Technology and NAQS meeting at NAQS headquarters in Abuja"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-coral-red mb-3">Press Release · July 1, 2026</span>
                <h2 className="font-heading text-2xl text-deep-navy leading-snug mb-4">
                  Prexea Technology, NAQS Align on Phase II Trial of Sentinel X Pest Control Technology
                </h2>
                <p className="text-graphite/70 text-sm leading-relaxed mb-6">
                  High-level discussions at NAQS headquarters in Abuja focused on finalising operational modalities for the proposed wet-season Phase II trial of Sentinel X, including inspection procedures, implementation protocols, and the framework for data sharing between all participating stakeholders.
                </p>
                <a
                  href="/insights/prexea-technology-naqs-align-on-phase-ii-trial-of-sentinel-x"
                  className="inline-flex items-center gap-2 text-deep-navy font-semibold text-sm hover:text-burgundy transition-colors"
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Second Press Release */}
      <section className="bg-soft-white pb-4">
        <div className="max-w-5xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-card overflow-hidden premium-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src="/press/MVC6 copy.jpeg"
                  alt="Prexea Technology CEO Dr. Jay Osi Samuels with Federal Ministry of Agriculture Maize Value Chain Desk officials"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-coral-red mb-3">Press Release · July 1, 2026</span>
                <h2 className="font-heading text-2xl text-deep-navy leading-snug mb-4">
                  Prexea Technology Engages Federal Ministry of Agriculture on Maize Value Chain Partnership
                </h2>
                <p className="text-graphite/70 text-sm leading-relaxed mb-6">
                  Prexea Technology Limited met with officials of the Maize Value Chain Desk at the Federal Ministry of Agriculture to explore partnership opportunities for deploying Sentinel-X as a sustainable solution for controlling fall armyworm and strengthening Nigeria&apos;s maize production.
                </p>
                <a
                  href="/insights/prexea-technology-engages-fmard-maize-value-chain"
                  className="inline-flex items-center gap-2 text-deep-navy font-semibold text-sm hover:text-burgundy transition-colors"
                >
                  Read Full Story <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-soft-white">
        <div className="max-w-5xl mx-auto px-9 sm:px-11 lg:px-13">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="font-heading text-3xl text-gradient mb-8">Recent Coverage</h2>
              <div className="space-y-6">
                {coverage.map((item, i) => (
                  <motion.div key={i} className="bg-white rounded-card p-6 premium-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                    <p className="text-burgundy text-sm font-semibold mb-2">{item.outlet} · {item.date}</p>
                    <h3 className="font-heading text-lg text-deep-navy leading-tight">{item.headline}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h2 className="font-heading text-3xl text-gradient mb-8">Press Kit</h2>
              <div className="space-y-4">
                {['Company Overview (PDF)', 'Logo Assets (ZIP)', 'Executive Headshots (ZIP)', 'Product Images (ZIP)'].map((item) => (
                  <motion.a key={item} href="#" className="flex items-center space-x-3 bg-white rounded-card p-4 premium-shadow hover-lift group" whileHover={{ x: 4 }}>
                    <Download className="w-5 h-5 text-deep-navy flex-shrink-0" />
                    <span className="text-deep-navy text-sm font-medium group-hover:text-burgundy transition-colors">{item}</span>
                  </motion.a>
                ))}
              </div>
              <div className="mt-8 bg-deep-navy rounded-card p-6">
                <p className="text-soft-white/70 text-sm mb-2">Press enquiries</p>
                <p className="text-coral-red font-medium">press@prexeatech.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
