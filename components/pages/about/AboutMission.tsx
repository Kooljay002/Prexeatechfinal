'use client';

import { motion } from 'framer-motion';

const pillars = [
  {
    color: 'bg-deep-navy',
    title: 'Our Mission',
    body: 'To accelerate Africa\'s development by commercializing transformative technologies that solve real challenges in agriculture, enterprise, and sustainability.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    color: 'bg-burgundy',
    title: 'Our Vision',
    body: 'A continent where every farmer, business, and government has access to the technological tools they need to thrive in the 21st century.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    color: 'bg-graphite',
    title: 'Our Values',
    body: 'Scientific integrity, authentic partnership, environmental stewardship, and a relentless commitment to measurable, lasting impact.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
];

export default function AboutMission() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-deep-navy font-semibold text-sm uppercase tracking-wider block mb-4">
              Our Story
            </span>
            <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-8 leading-tight">
              Founded on the Belief That Technology Changes Lives
            </h2>
            <p className="text-lg text-graphite/70 leading-relaxed mb-6">
              Prexea Technology was established to close the gap between world-class
              scientific innovation and the farmers, enterprises, and institutions
              across Africa that stand to benefit most.
            </p>
            <p className="text-lg text-graphite/70 leading-relaxed">
              Operating from Abuja, Nigeria, we work with technology developers,
              research institutions, and government bodies to ensure that proven
              solutions reach the field — not just the boardroom.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-card overflow-hidden premium-shadow">
              <img
                src="/Prexia_reception.jpeg"
                alt="Prexea Technology office reception"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className={`${pillar.color} rounded-card p-8 premium-shadow hover-lift`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-white mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-heading text-xl text-white mb-4">{pillar.title}</h3>
              <p className="text-white leading-relaxed">{pillar.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
