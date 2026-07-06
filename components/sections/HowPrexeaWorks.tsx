'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, FlaskConical, Rocket, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Identify Technology',
    description: 'We scout and evaluate cutting-edge technologies that align with African market needs, assessing scientific validity and commercial readiness.',
    color: '#2B527A',
    angle: -90,
  },
  {
    icon: FlaskConical,
    number: '02',
    title: 'Localise & Validate',
    description: 'Technologies are adapted for local conditions and regulations through rigorous field trials and independent scientific validation.',
    color: '#AA1F2A',
    angle: 0,
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Deploy & Demonstrate',
    description: 'Pilot programmes prove real-world effectiveness and build market confidence with documented evidence at scale.',
    color: '#FF5B5B',
    angle: 90,
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Scale Across Africa',
    description: 'Proven solutions expand through our distribution networks and government partnerships into new markets across the continent.',
    color: '#2B527A',
    angle: 180,
  },
];

const R = 165; // radius of cycle ring
const CX = 250; // SVG centre x
const CY = 250; // SVG centre y

function nodePosition(angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + R * Math.cos(rad), y: CY + R * Math.sin(rad) };
}

export default function HowPrexeaWorks() {
  const [active, setActive] = useState(0);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-deep-navy text-xs font-bold uppercase tracking-widest mb-3">
            Our Process
          </p>
          <h2 className="font-heading text-section-mobile md:text-section-tablet lg:text-section-desktop text-gradient mb-5">
            How Prexea Works
          </h2>
          <p className="text-lg text-graphite/65 max-w-xl mx-auto leading-relaxed">
            A continuous, cyclical approach — every deployment improves the next.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cyclical SVG Infographic */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg viewBox="0 0 500 500" className="w-full max-w-lg">
              {/* Outer dashed orbit ring */}
              <circle cx={CX} cy={CY} r={R} stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="6 4" fill="none" />

              {/* Animated arc segments between nodes */}
              {steps.map((_, i) => {
                const a1 = steps[i].angle;
                const a2 = steps[(i + 1) % steps.length].angle + (i === steps.length - 1 ? 360 : 0);
                const midAngle = ((a1 + a2) / 2) * Math.PI / 180;
                const p1 = nodePosition(a1);
                const p2 = nodePosition(steps[(i + 1) % steps.length].angle);
                const isActive = i === active || (i + 1) % steps.length === active;
                return (
                  <motion.path
                    key={i}
                    d={`M ${p1.x} ${p1.y} A ${R} ${R} 0 0 1 ${p2.x} ${p2.y}`}
                    stroke={isActive ? steps[i].color : '#E5E7EB'}
                    strokeWidth={isActive ? '3.5' : '2'}
                    fill="none"
                    strokeLinecap="round"
                    animate={{ strokeOpacity: isActive ? 1 : 0.4 }}
                    transition={{ duration: 0.4 }}
                  />
                );
              })}

              {/* Arrowheads on arcs */}
              {steps.map((step, i) => {
                const nextAngle = steps[(i + 1) % steps.length].angle;
                const midAngle = ((step.angle + nextAngle + (i === steps.length - 1 ? 360 : 0)) / 2) * Math.PI / 180;
                const mx = CX + R * Math.cos(midAngle);
                const my = CY + R * Math.sin(midAngle);
                const tx = -Math.sin(midAngle) * 11;
                const ty = Math.cos(midAngle) * 11;
                return (
                  <polygon
                    key={`arrow-${i}`}
                    points={`${mx + tx},${my + ty} ${mx - tx * 0.6 - ty * 0.4},${my - ty * 0.6 + tx * 0.4} ${mx - tx * 0.6 + ty * 0.4},${my - ty * 0.6 - tx * 0.4}`}
                    fill={i === active ? step.color : '#D1D5DB'}
                  />
                );
              })}

              {/* Centre circle with step count */}
              <circle cx={CX} cy={CY} r="62" fill="#2B527A" />
              <circle cx={CX} cy={CY} r="57" fill="none" stroke="#AA1F2A" strokeWidth="2" strokeDasharray="5 4" />
              <text x={CX} y={CY - 8} textAnchor="middle" fontFamily="Open Sans, sans-serif" fontWeight="800" fontSize="30" fill="white">
                {steps[active].number}
              </text>
              <text x={CX} y={CY + 16} textAnchor="middle" fontFamily="Open Sans, sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)" letterSpacing="3">
                STEP
              </text>

              {/* Node circles */}
              {steps.map((step, i) => {
                const pos = nodePosition(step.angle);
                const isActive = i === active;
                return (
                  <g key={step.title} style={{ cursor: 'pointer' }} onClick={() => setActive(i)}>
                    <motion.circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isActive ? 36 : 28}
                      fill={isActive ? step.color : 'white'}
                      stroke={step.color}
                      strokeWidth={isActive ? 0 : 2.5}
                      animate={{ r: isActive ? 36 : 28 }}
                      transition={{ duration: 0.3 }}
                      filter={isActive ? 'url(#glow)' : ''}
                    />
                    {/* Step number inside node */}
                    <text
                      x={pos.x}
                      y={pos.y + 5}
                      textAnchor="middle"
                      fontFamily="Open Sans, sans-serif"
                      fontWeight="800"
                      fontSize="13"
                      fill={isActive ? 'white' : step.color}
                    >
                      {step.number}
                    </text>
                    {/* Outer label */}
                    <text
                      x={pos.x + (pos.x < CX - 5 ? -46 : pos.x > CX + 5 ? 46 : 0)}
                      y={pos.y + (pos.y < CY - 5 ? -46 : pos.y > CY + 5 ? 46 : 0)}
                      textAnchor={pos.x < CX - 5 ? 'end' : pos.x > CX + 5 ? 'start' : 'middle'}
                      fontFamily="Open Sans, sans-serif"
                      fontWeight="700"
                      fontSize="12"
                      fill={isActive ? step.color : '#999999'}
                    >
                      {step.title.split(' ')[0]}
                    </text>
                  </g>
                );
              })}

              {/* Glow filter */}
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>
            </svg>
          </motion.div>

          {/* Step Detail Panel */}
          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === active;
              return (
                <motion.button
                  key={step.title}
                  onClick={() => setActive(i)}
                  className={`w-full text-left rounded-2xl p-5 transition-all duration-300 flex items-start gap-4 ${
                    isActive
                      ? 'bg-deep-navy text-white shadow-xl'
                      : 'bg-gray-50 hover:bg-gray-100 text-graphite'
                  }`}
                  whileHover={{ x: isActive ? 0 : 4 }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.15)' : `${step.color}18` }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: isActive ? 'white' : step.color }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs font-bold"
                        style={{ color: isActive ? 'rgba(255,255,255,0.5)' : step.color }}
                      >
                        {step.number}
                      </span>
                      <h3 className={`font-heading font-semibold text-base ${isActive ? 'text-white' : 'text-deep-navy'}`}>
                        {step.title}
                      </h3>
                    </div>
                    <motion.p
                      className={`text-sm leading-relaxed ${isActive ? 'text-white/70' : 'text-graphite/60'}`}
                      initial={false}
                      animate={{ opacity: isActive ? 1 : 0.7 }}
                    >
                      {step.description}
                    </motion.p>
                  </div>
                </motion.button>
              );
            })}

            <div className="pt-2">
              <motion.a
                href="/partnerships"
                className="inline-flex items-center text-deep-navy font-semibold text-sm hover:text-burgundy transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                Explore Partnership Opportunities →
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}