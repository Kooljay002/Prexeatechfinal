'use client';

import { motion } from 'framer-motion';
import { CircleCheck as CheckCircle } from 'lucide-react';

const impactItems = [
  { title: 'Successful Pilot Deployment', detail: 'Kaduna and Kano States', image: 'https://lh3.googleusercontent.com/d/1Tx4TsJU2sBsZjf7vk3GJn_pfsPW2990U=w1200' },
  { title: 'Fall Armyworm Control', detail: 'Suppression of severe infestations', image: 'https://lh3.googleusercontent.com/d/1WL3hO_nKD87thUbA9f9qHdD36iYesPiO=w1200' },
  { title: 'Farmer Engagement', detail: 'Sensitization and onboarding programs', image: 'https://images.pexels.com/photos/3626579/pexels-photo-3626579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { title: 'Extension Support', detail: 'Field monitoring systems established', image: 'https://images.pexels.com/photos/7728086/pexels-photo-7728086.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { title: 'Government Participation', detail: 'Stakeholder collaboration achieved', image: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { title: 'Commercial Readiness', detail: 'Scale-up activities initiated', image: 'https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { title: 'Green Field Day', detail: 'Public demonstration successfully hosted', image: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  { title: 'Technology Adoption', detail: 'Increased farmer confidence recorded', image: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
];

export default function SentinelImpact() {
  return (
    <section id="impact" style={{ backgroundColor: '#F8F8F6' }} className="relative overflow-hidden">
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
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Field Deployment</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
          >
            Sentinel-X Impact in Nigeria
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base">
            Demonstrating measurable agricultural outcomes through field deployment and stakeholder collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {impactItems.map((item, i) => (
            <motion.div
              key={item.title}
              className="relative rounded-lg overflow-hidden group shadow-md"
              style={{ aspectRatio: '4/3' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/90 via-[#0A2342]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#5B8C51' }} />
                  <div>
                    <div className="text-white font-semibold text-sm leading-tight mb-0.5">{item.title}</div>
                    <div className="text-white/60 text-xs">{item.detail}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
