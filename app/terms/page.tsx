'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';

const sections = [
  { title: 'Acceptance of Terms', body: 'By accessing Prexea Technology\'s website or using our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.' },
  { title: 'Services', body: 'Prexea Technology provides technology commercialisation, agritech deployment, and enterprise solutions services. Specific service terms are governed by individual service agreements between Prexea and its clients.' },
  { title: 'Intellectual Property', body: 'All content on this website, including text, images, and branding, is the property of Prexea Technology Nigeria Limited or its licensors and is protected by applicable intellectual property laws.' },
  { title: 'Limitation of Liability', body: 'Prexea Technology shall not be liable for indirect, incidental, or consequential damages arising from use of our website or services beyond the extent permitted by applicable Nigerian law.' },
  { title: 'Governing Law', body: 'These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the jurisdiction of Nigerian courts.' },
  { title: 'Changes to Terms', body: 'We reserve the right to update these terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised terms.' },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 bg-deep-navy text-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="font-heading text-5xl text-soft-white mb-4">Terms of Service</h1>
            <p className="text-soft-white/60">Last updated: December 2024</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <div className="prose max-w-none">
            {sections.map((s, i) => (
              <motion.div key={s.title} className="mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}>
                <h2 className="font-heading text-2xl text-deep-navy mb-4">{s.title}</h2>
                <p className="text-graphite/70 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
