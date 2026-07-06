'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import { Mail, Phone, MessageSquare, Clock } from 'lucide-react';

const channels = [
  { icon: Mail, title: 'Email Support', desc: 'support@prexeatech.com', sub: 'Response within 24 hours' },
  { icon: Phone, title: 'Phone Support', desc: '+234-703-458-7469', sub: 'Mon–Fri, 8am–6pm WAT' },
  { icon: MessageSquare, title: 'Live Chat', desc: 'Available on platform', sub: 'Mon–Fri, 9am–5pm WAT' },
  { icon: Clock, title: 'Emergency Line', desc: '+234-703-458-7469', sub: '24/7 for critical field issues' },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-deep-navy" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Help Centre</span>
            <h1 className="font-heading text-5xl md:text-7xl text-soft-white mb-6">Support</h1>
            <p className="text-xl text-soft-white/80 max-w-2xl mx-auto">We are here to ensure your technology deployment succeeds.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-soft-white">
        <div className="max-w-5xl mx-auto px-9 sm:px-11 lg:px-13">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {channels.map((c, i) => (
              <motion.div key={c.title} className="bg-white rounded-card p-8 premium-shadow hover-lift flex items-start space-x-5" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div className="w-14 h-14 bg-gradient-to-br from-deep-navy to-burgundy rounded-xl flex items-center justify-center flex-shrink-0">
                  <c.icon className="w-7 h-7 text-soft-white" />
                </div>
                <div>
                  <h3 className="font-heading text-lg text-deep-navy mb-1">{c.title}</h3>
                  <p className="text-deep-navy font-medium mb-1">{c.desc}</p>
                  <p className="text-graphite/50 text-sm">{c.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="bg-deep-navy rounded-card p-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-heading text-3xl text-soft-white mb-4">Submit a Support Ticket</h2>
            <p className="text-soft-white/70 mb-8">Describe your issue and we will assign a dedicated support engineer.</p>
            <form className="max-w-xl mx-auto space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Your name" className="w-full px-4 py-3 bg-soft-white/10 border border-soft-white/20 rounded-button text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-coral-red transition-colors" />
              <input type="email" placeholder="Email address" className="w-full px-4 py-3 bg-soft-white/10 border border-soft-white/20 rounded-button text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-coral-red transition-colors" />
              <textarea rows={4} placeholder="Describe your issue..." className="w-full px-4 py-3 bg-soft-white/10 border border-soft-white/20 rounded-button text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-coral-red transition-colors resize-none" />
              <motion.button type="submit" className="w-full py-3 bg-burgundy text-soft-white font-semibold rounded-button hover:bg-coral-red transition-colors" whileHover={{ scale: 1.01 }}>
                Submit Ticket
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
