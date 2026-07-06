'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const chain = [
  'Technology Provider\n(Informiton Inc. — USA)',
  'Prexea Technology Ltd\n(Program Lead — Nigeria)',
  'Government & Institutional Programs',
  'Extension Networks',
  'Farmers',
];

const channels = [
  'State Governments',
  'Commercial Farms',
  'Farmer Cooperatives',
  'Outgrower Networks',
  'Commodity Associations',
  'Agribusiness Companies',
  'Agricultural Development Programs',
  'Development Organizations',
];

export default function SentinelCommercialization() {
  return (
    <section id="commercialization" style={{ backgroundColor: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Commercialization Model</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
          >
            Scaling Sentinel-X Across Nigeria
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            A structured delivery chain connects global technology with last-mile farmer adoption.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Delivery chain */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: '#0A2342' }}>Delivery Chain</h3>
            <div className="space-y-0">
              {chain.map((node, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className="w-full rounded-lg px-6 py-4 text-center font-semibold text-sm"
                    style={{
                      backgroundColor: i === 0 ? '#0A2342' : i === 1 ? '#7A1E3A' : i === 4 ? '#5B8C51' : 'rgba(10,35,66,0.07)',
                      color: i <= 1 || i === 4 ? '#fff' : '#0A2342',
                    }}
                  >
                    {node.split('\n').map((line, j) => (
                      <span key={j} className={j === 1 ? 'block text-xs font-normal opacity-75 mt-0.5' : 'block'}>{line}</span>
                    ))}
                  </div>
                  {i < chain.length - 1 && (
                    <div className="flex flex-col items-center py-1.5">
                      <div className="w-px h-4 bg-gray-300" />
                      <ArrowDown className="w-4 h-4 text-gray-400" />
                      <div className="w-px h-1 bg-gray-300" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Deployment channels + goal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-8" style={{ color: '#0A2342' }}>Deployment Channels</h3>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {channels.map((c) => (
                <div
                  key={c}
                  className="rounded-lg p-4 border text-sm font-medium"
                  style={{ borderColor: 'rgba(10,35,66,0.12)', color: '#0A2342', backgroundColor: '#F8F8F6' }}
                >
                  {c}
                </div>
              ))}
            </div>

            {/* Highlight box */}
            <div
              className="rounded-lg p-6 text-center"
              style={{ background: 'linear-gradient(135deg, #0A2342 0%, #7A1E3A 100%)' }}
            >
              <div className="text-white/60 text-xs uppercase tracking-widest mb-2">Program Goal</div>
              <div
                className="text-[28px] font-bold text-white leading-tight mb-1"
                style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 700 }}
              >
                10,000+ Farmers
              </div>
              <div className="text-white/70 text-sm">Reached Across Nigeria</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
