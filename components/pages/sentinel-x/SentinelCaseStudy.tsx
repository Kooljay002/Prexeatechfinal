'use client';

import { motion } from 'framer-motion';

const timeline = [
  {
    phase: 'Challenge',
    color: '#7A1E3A',
    heading: 'Severe Fall Armyworm Infestations',
    body: 'Pilot maize fields in Kaduna and Kano States were experiencing severe Fall Armyworm infestations, with widespread larval activity, visible egg masses, and progressive crop deterioration threatening the entire growing season.',
  },
  {
    phase: 'Intervention',
    color: '#0A2342',
    heading: 'Sentinel-X Treatment Deployed',
    body: 'Sentinel-X treatment was deployed across the affected plots under technical supervision by trained field teams and extension officers. Application followed approved operational protocols with full stakeholder visibility.',
  },
  {
    phase: 'Results',
    color: '#5B8C51',
    heading: 'Observed Outcomes: 10–14 Days',
    body: 'Post-intervention monitoring by extension teams documented the following field outcomes within 10–14 days of Sentinel-X deployment.',
    bullets: [
      'No visible larvae observed in treated areas',
      'Egg masses eliminated',
      'Visible improvement in crop growth trajectory',
      'Damaged leaves showed recovery indicators',
      'Pest activity significantly reduced across all monitored plots',
    ],
  },
  {
    phase: 'Outcome',
    color: '#E85D5D',
    heading: 'Stakeholder Confidence Established',
    body: 'The pilot generated strong interest from government stakeholders, agricultural institutions and farmer groups, establishing Sentinel-X as a credible, scalable crop protection solution for national deployment.',
  },
];

export default function SentinelCaseStudy() {
  return (
    <section id="case-study" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Featured Case Study</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
          >
            Successful Recovery of Fall Armyworm<br className="hidden sm:block" /> Infested Maize Fields
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            A documented field account of Sentinel-X deployment in Northern Nigeria pilot sites.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl"
            style={{ aspectRatio: '16/9' }}
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.pexels.com/photos/7469491/pexels-photo-7469491.jpeg?auto=compress&cs=tinysrgb&w=900&h=506&fit=crop"
              alt="Before Sentinel-X — infested field"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7A1E3A]/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs uppercase tracking-widest font-semibold text-white/70">Before</span>
              <p className="font-semibold text-sm mt-0.5">Severe infestation — significant larval activity</p>
            </div>
          </motion.div>

          <motion.div
            className="relative rounded-lg overflow-hidden shadow-xl"
            style={{ aspectRatio: '16/9' }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <img
              src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=900&h=506&fit=crop"
              alt="After Sentinel-X — healthy recovery"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#5B8C51]/70 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <span className="text-xs uppercase tracking-widest font-semibold text-white/70">After — 10–14 Days</span>
              <p className="font-semibold text-sm mt-0.5">Recovery confirmed — no larvae observed</p>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector */}
          <div className="hidden lg:block absolute top-8 bottom-8 left-[calc(25%-1px)] w-px bg-gray-200" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={item.phase}
                className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                {/* Phase label */}
                <div className="flex items-start gap-3 lg:justify-end">
                  <div className="lg:text-right">
                    <div
                      className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded"
                      style={{ backgroundColor: item.color, color: '#fff' }}
                    >
                      {item.phase}
                    </div>
                  </div>
                  {/* Dot on the line */}
                  <div className="hidden lg:block w-4 h-4 rounded-full mt-0.5 flex-shrink-0 border-4 border-white shadow" style={{ backgroundColor: item.color }} />
                </div>

                {/* Content */}
                <div className="lg:col-span-3 bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <h4 className="font-semibold mb-2 text-sm" style={{ color: '#0A2342' }}>{item.heading}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                  {item.bullets && (
                    <ul className="mt-4 space-y-1.5">
                      {item.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: '#5B8C51' }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
