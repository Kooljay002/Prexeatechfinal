'use client';

import { motion } from 'framer-motion';
import { Search, Zap, ChartBar as BarChart2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Detection & Assessment',
    body: 'Trained field teams identify infestation levels across target maize farms, map affected areas, and classify damage severity to inform intervention planning.',
    detail: 'Farmer consultation · Field scouting · Infestation mapping · Damage classification',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Sentinel-X Deployment',
    body: 'The Sentinel-X technology intervention is activated according to approved operational procedures, with precision placement and scheduling designed for maximum efficacy.',
    detail: 'Precision deployment · Approved protocols · Technical supervision · Zero chemical inputs',
  },
  {
    number: '03',
    icon: BarChart2,
    title: 'Monitoring & Recovery',
    body: 'Extension agents conduct structured field monitoring visits to track crop recovery, pest suppression outcomes, and document results for reporting and commercial validation.',
    detail: 'Recovery monitoring · Outcome documentation · Extension reporting · Stakeholder briefings',
  },
];

export default function SentinelHowItWorks() {
  return (
    <section id="how-it-works" style={{ backgroundColor: '#0A2342' }} className="relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 40px)`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Technology & Process</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] text-white mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800 }}
          >
            How Sentinel-X Works
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-base">
            A structured, science-led intervention model designed for field-level deployment across Nigerian agricultural landscapes.
          </p>
        </motion.div>

        {/* Process timeline */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[68px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px" style={{ backgroundColor: 'rgba(91,140,81,0.3)' }} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="relative"
              >
                {/* Step header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 border-2 relative z-10"
                    style={{ backgroundColor: '#0A2342', borderColor: '#5B8C51' }}
                  >
                    <step.icon className="w-6 h-6 text-[#5B8C51]" />
                  </div>
                  <div>
                    <span className="text-[#5B8C51] text-xs font-semibold uppercase tracking-widest">Step {step.number}</span>
                    <h3
                      className="text-white text-lg leading-tight"
                      style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}
                    >
                      {step.title}
                    </h3>
                  </div>
                </div>

                <div className="pl-0 border-l-2 border-[#5B8C51]/20 ml-8 pl-6">
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{step.body}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {step.detail.split(' · ').map((tag) => (
                      <span key={tag} className="text-[10px] font-medium px-2 py-1 rounded" style={{ backgroundColor: 'rgba(91,140,81,0.15)', color: '#5B8C51' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
