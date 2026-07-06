'use client';

import { motion } from 'framer-motion';

const industries = [
  {
    title: 'Agriculture',
    description: 'Precision crop management, photonic protection, and soil analytics for African smallholders and commercial farms.',
    image: '/Agriculture.jpg',
    href: '/solutions#agritech',
  },
  {
    title: 'Government',
    description: 'Digital governance platforms and smart infrastructure improving public-sector efficiency and citizen services.',
    image: '/Governance2.jpg',
    href: '/solutions#enterprise',
  },
  {
    title: 'Health',
    description: 'Medical diagnostics, telemedicine, and supply-chain technologies extending quality healthcare to communities.',
    image: '/healthcare.jpg',
    href: '/solutions#enterprise',
  },
  {
    title: 'Enterprise',
    description: 'ERP systems and business automation adapted for African bandwidth, language, and compliance requirements.',
    image: '/enterprise.jpg',
    href: '/solutions#enterprise',
  },
  {
    title: 'Environment',
    description: 'Climate monitoring, carbon measurement, and clean-energy technologies supporting sustainability commitments.',
    image: '/environment3.jpg',
    href: '/solutions#agritech',
  },
  {
    title: 'Research',
    description: 'Academic partnerships and technology licensing turning laboratory breakthroughs into deployable field solutions.',
    image: '/researcher.jpg',
    href: '/solutions#representation',
  },
];

export default function Industries() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-section-mobile md:text-section-tablet lg:text-section-desktop text-gradient mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-graphite/70 max-w-3xl mx-auto leading-relaxed">
            Delivering transformative technology solutions across key sectors 
            that drive African economic development and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={industry.href} className="block">
              <div className="relative overflow-hidden rounded-card premium-shadow hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/20 to-transparent" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-soft-white">
                  <h3 className="text-2xl font-heading font-semibold mb-2 group-hover:text-coral-red transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-soft-white/80 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <motion.div
                    className="mt-4 inline-flex items-center text-coral-red font-medium"
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Explore Solutions →
                  </motion.div>
                </div>
              </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}