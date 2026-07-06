'use client';

import { motion } from 'framer-motion';
import { Globe, MonitorCheck, ChartBar as BarChart2, Users } from 'lucide-react';

const highlights = [
  { icon: MonitorCheck, label: 'E-Government & Digital Identity', desc: 'End-to-end digital service portals and identity systems that modernize public administration.' },
  { icon: Globe, label: 'Smart City & Infrastructure', desc: 'Integrated urban management platforms connecting transport, utilities, and civic services.' },
  { icon: BarChart2, label: 'Government Analytics & Intelligence', desc: 'Real-time data dashboards and policy intelligence tools for evidence-based governance.' },
  { icon: Users, label: 'Citizen Engagement Platforms', desc: 'Multi-channel engagement systems that improve responsiveness and public trust.' },
];

const solutions = [
  'E-government and digital identity systems',
  'Smart infrastructure and urban management platforms',
  'Public service digitization and workflow automation',
  'Government analytics and policy intelligence systems',
  'Citizen engagement and communication platforms',
];

export default function SolutionsGovernment() {
  return (
    <section id="government" className="section-padding bg-deep-navy text-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">
              Public Sector
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-soft-white mb-4 leading-tight">
              Government &amp; Digital Governance
            </h2>
            <p className="text-lg text-soft-white/70 leading-relaxed mb-8">
              Building transparent, efficient, citizen-centered public services through integrated
              digital governance platforms that modernize operations and improve service delivery.
            </p>

            <div className="space-y-5 mb-8">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="w-11 h-11 bg-soft-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <h.icon className="w-5 h-5 text-coral-red" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-soft-white mb-0.5">{h.label}</h4>
                    <p className="text-soft-white/60 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-soft-white/20 pt-6">
              <p className="text-xs font-bold text-coral-red uppercase tracking-widest mb-3">Core Solutions</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start space-x-2 text-sm text-soft-white/70">
                    <span className="text-coral-red mt-0.5 flex-shrink-0">&#10003;</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
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
                src="/Governance2.jpg"
                alt="Digital governance operations center"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
