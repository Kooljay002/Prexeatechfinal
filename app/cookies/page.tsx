'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';

const cookieTypes = [
  { name: 'Essential Cookies', desc: 'Required for the website to function correctly. These cannot be disabled.', examples: 'Session cookies, security tokens' },
  { name: 'Analytics Cookies', desc: 'Help us understand how visitors interact with our website so we can improve it.', examples: 'Page views, session duration, referral source' },
  { name: 'Preference Cookies', desc: 'Remember your settings and preferences for a better experience on return visits.', examples: 'Language preference, display settings' },
  { name: 'Marketing Cookies', desc: 'Used to track the effectiveness of our marketing campaigns. Only active with your consent.', examples: 'Campaign tracking, conversion tracking' },
];

export default function CookiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="pt-32 pb-16 bg-deep-navy text-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Legal</span>
            <h1 className="font-heading text-5xl text-soft-white mb-4">Cookie Policy</h1>
            <p className="text-soft-white/60">Last updated: December 2024</p>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.p className="text-lg text-graphite/70 leading-relaxed mb-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            This policy explains what cookies are, how Prexea Technology uses them, and the choices you have regarding their use. Cookies are small text files stored on your device when you visit our website.
          </motion.p>
          <div className="space-y-6">
            {cookieTypes.map((ct, i) => (
              <motion.div key={ct.name} className="bg-white rounded-card p-8 premium-shadow" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <h3 className="font-heading text-xl text-deep-navy mb-3">{ct.name}</h3>
                <p className="text-graphite/70 leading-relaxed mb-3">{ct.desc}</p>
                <p className="text-sm text-graphite/50"><span className="font-medium">Examples: </span>{ct.examples}</p>
              </motion.div>
            ))}
          </div>
          <motion.p className="text-graphite/60 mt-10 leading-relaxed" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            To change your cookie preferences or withdraw consent, contact us at privacy@prexeatech.com. Note that disabling non-essential cookies may affect some website functionality.
          </motion.p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
