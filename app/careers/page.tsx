'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import { ArrowRight } from 'lucide-react';

const openings = [
  { title: 'Agritech Field Officer', location: 'Kano, Nigeria', type: 'Full-time' },
  { title: 'Technology Partnerships Manager', location: 'Abuja, Nigeria', type: 'Full-time' },
  { title: 'Enterprise Solutions Consultant', location: 'Lagos, Nigeria', type: 'Full-time' },
  { title: 'Scientific Research Analyst', location: 'Remote (Africa)', type: 'Contract' },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }} />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Join the Team</span>
            <h1 className="font-heading text-5xl md:text-7xl text-soft-white mb-6">Careers at Prexea</h1>
            <p className="text-xl text-soft-white/80 max-w-2xl mx-auto">
              Build a career at the intersection of science, technology, and African development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-soft-white">
        <div className="max-w-4xl mx-auto px-9 sm:px-11 lg:px-13">
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h2 className="font-heading text-4xl text-gradient mb-4">Open Positions</h2>
            <p className="text-lg text-graphite/70">We are always looking for exceptional people who share our belief that technology can transform Africa.</p>
          </motion.div>
          <div className="space-y-4">
            {openings.map((role, i) => (
              <motion.div key={role.title} className="bg-white rounded-card p-6 premium-shadow hover-lift flex items-center justify-between group cursor-pointer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <div>
                  <h3 className="font-heading text-lg text-deep-navy group-hover:text-burgundy transition-colors">{role.title}</h3>
                  <p className="text-graphite/60 text-sm mt-1">{role.location} · {role.type}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-deep-navy group-hover:translate-x-1 transition-transform" />
              </motion.div>
            ))}
          </div>
          <motion.p className="text-center text-graphite/60 mt-12" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Don&apos;t see a fit? Send a speculative application to <span className="text-deep-navy">careers@prexeatech.com</span>
          </motion.p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
