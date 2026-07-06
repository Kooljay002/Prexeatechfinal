'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import { FileText, BookOpen, Wrench, FlaskConical } from 'lucide-react';

const sections = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    items: ['Platform Overview', 'Onboarding Guide', 'System Requirements', 'Quick Start Tutorial'],
  },
  {
    icon: Wrench,
    title: 'Integration Guides',
    items: ['API Reference', 'Data Formats', 'Webhook Events', 'Authentication'],
  },
  {
    icon: FlaskConical,
    title: 'Sentinel-X Technical Docs',
    items: ['Hardware Specifications', 'Installation Manual', 'Calibration Protocols', 'Field Maintenance'],
  },
  {
    icon: FileText,
    title: 'Policies & Compliance',
    items: ['Data Governance', 'Security Standards', 'Regulatory Compliance', 'Audit Logs'],
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-deep-navy" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Reference</span>
            <h1 className="font-heading text-5xl md:text-7xl text-soft-white mb-6">Documentation</h1>
            <p className="text-xl text-soft-white/80 max-w-2xl mx-auto">Technical guides, API references, and operational manuals.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-soft-white">
        <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                className="bg-white rounded-card p-8 premium-shadow hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-deep-navy to-burgundy rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-soft-white" />
                  </div>
                  <h3 className="font-heading text-xl text-deep-navy">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item}>
                      <motion.a href="#" className="flex items-center text-graphite/70 hover:text-deep-navy transition-colors duration-200 group" whileHover={{ x: 4 }}>
                        <span className="w-1.5 h-1.5 bg-burgundy rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
