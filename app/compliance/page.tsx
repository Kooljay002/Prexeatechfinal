'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import { ShieldCheck } from 'lucide-react';

const frameworks = [
  { title: 'Nigeria Data Protection Act (NDPA)', desc: 'Prexea operates in full compliance with the NDPA 2023, including lawful basis for processing, data subject rights, and mandatory breach notifications.' },
  { title: 'NAFDAC Regulatory Compliance', desc: 'All agricultural technology products we deploy, including Sentinel-X, meet relevant NAFDAC registration and safety requirements.' },
  { title: 'Corporate Affairs Commission (CAC)', desc: 'Prexea Technology Nigeria Limited is fully registered with the CAC and maintains all required corporate filings and disclosures.' },
  { title: 'ECOWAS Regional Standards', desc: 'Where applicable, our agritech and enterprise solutions conform to ECOWAS regional standards for interoperability and safety.' },
];

export default function CompliancePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 bg-deep-navy text-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="font-heading text-5xl text-soft-white mb-4">Compliance</h1>
            <p className="text-soft-white/60">Our commitment to regulatory integrity and ethical business practice.</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center justify-center w-16 h-16 bg-deep-navy/10 rounded-full mb-6">
              <ShieldCheck className="w-8 h-8 text-deep-navy" />
            </div>
            <p className="text-lg text-graphite/70 max-w-2xl mx-auto leading-relaxed">
              Regulatory compliance is not a checkbox for Prexea — it is central to our credibility as a
              technology commercialisation partner operating across African markets.
            </p>
          </motion.div>
          <div className="space-y-6">
            {frameworks.map((fw, i) => (
              <motion.div key={fw.title} className="bg-white rounded-card p-8 premium-shadow border-l-4 border-deep-navy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <h3 className="font-heading text-xl text-deep-navy mb-3">{fw.title}</h3>
                <p className="text-graphite/70 leading-relaxed">{fw.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div className="mt-12 bg-deep-navy rounded-card p-8 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <p className="text-soft-white/70 mb-2">For compliance-related enquiries or audit requests</p>
            <p className="text-coral-red font-semibold text-lg">compliance@prexeatech.com</p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
