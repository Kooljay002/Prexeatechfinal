'use client';

import { motion } from 'framer-motion';
import { TriangleAlert as AlertTriangle, TrendingDown, DollarSign } from 'lucide-react';

const cards = [
  {
    icon: AlertTriangle,
    title: 'Crop Damage',
    body: 'Fall Armyworm larvae bore into maize whorls and ears, causing direct physical destruction of plant tissue and triggering irreversible yield loss.',
  },
  {
    icon: TrendingDown,
    title: 'Yield Losses',
    body: 'Unmanaged infestations result in significant harvest reductions, threatening household food security and smallholder farm incomes across the growing season.',
  },
  {
    icon: DollarSign,
    title: 'Rising Input Costs',
    body: 'Repeated chemical applications drive up production costs, erode profit margins, and expose farmers to pesticide resistance while leaving chemical residues on produce.',
  },
];

export default function SentinelChallenge() {
  return (
    <section id="challenge" className="relative overflow-hidden" style={{ backgroundColor: '#F8F8F6' }}>
      {/* Subtle map background pattern */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2342' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                src="/armyworm copy.webp"
                alt="Fall Armyworm crop damage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white text-sm font-semibold">Fall Armyworm — Spodoptera frugiperda</span>
                <p className="text-white/70 text-xs mt-1">One of the world&apos;s most invasive agricultural pests, now endemic across sub-Saharan Africa.</p>
              </div>
            </div>
            {/* Accent border */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-lg border-4 pointer-events-none" style={{ borderColor: '#5B8C51', opacity: 0.4 }} />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-[#E85D5D]" />
              <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">The Challenge</span>
            </div>

            <h2
              className="text-[32px] sm:text-[40px] leading-[1.1] mb-6"
              style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
            >
              The Fall Armyworm Challenge
            </h2>

            <p className="text-[#333] leading-relaxed mb-10 text-base">
              Fall Armyworm remains one of the most destructive agricultural pests affecting maize production across Nigeria. Farmers frequently experience severe crop losses, rising production costs and increasing dependence on chemical interventions that prove costly, ineffective, and harmful to soil health.
            </p>

            <div className="space-y-4">
              {cards.map((card, i) => (
                <motion.div
                  key={card.title}
                  className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-sm border border-gray-100"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 + i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#7A1E3A' }}>
                    <card.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1" style={{ color: '#0A2342' }}>{card.title}</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">{card.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
