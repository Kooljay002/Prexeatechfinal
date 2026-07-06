'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';

const sections = [
  { title: 'Information We Collect', body: 'We collect information you provide directly (name, email, organisation) when you contact us, submit partnership enquiries, or subscribe to our newsletter. We also collect usage data to improve our services.' },
  { title: 'How We Use Your Information', body: 'Your information is used to respond to enquiries, deliver contracted services, send relevant communications you have opted into, and improve our platform. We do not sell personal data to third parties.' },
  { title: 'Data Storage and Security', body: 'Data is stored on secure servers within compliant cloud infrastructure. We employ encryption in transit and at rest, access controls, and regular security reviews to protect your information.' },
  { title: 'Your Rights', body: 'You have the right to access, correct, or request deletion of your personal data at any time. Contact privacy@prexeatech.com to exercise these rights.' },
  { title: 'Cookies', body: 'We use essential cookies to operate our website and analytics cookies to understand usage patterns. You can manage cookie preferences at any time through our cookie settings.' },
  { title: 'Contact', body: 'For privacy-related queries, contact our Data Protection Officer at privacy@prexeatech.com or write to us at our Abuja office address.' },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 bg-deep-navy text-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="font-heading text-5xl text-soft-white mb-4">Privacy Policy</h1>
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
