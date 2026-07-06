'use client';

import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Amara Okafor',
    role: 'Chief Executive Officer',
    bio: 'Agricultural scientist with 20 years of experience commercializing crop technology across West Africa.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Emeka Nwosu',
    role: 'Head of Technology Partnerships',
    bio: 'Former IITA researcher specializing in sustainable agritech deployment across sub-Saharan Africa.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Fatima Al-Hassan',
    role: 'Director of Enterprise Solutions',
    bio: 'Digital transformation specialist who has led enterprise implementations in 12 African countries.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
  {
    name: 'Chidi Obiechina',
    role: 'Chief Scientific Officer',
    bio: 'PhD in Photonics from the University of Lagos; lead architect of the Sentinel-X validation framework.',
    image: 'https://images.pexels.com/photos/856647/pexels-photo-856647.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
  },
];

export default function AboutTeam() {
  return (
    <section id="team" className="section-padding bg-gradient-to-br from-gray-50 to-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl text-gradient mb-6">
            The Team Behind Prexea
          </h2>
          <p className="text-xl text-graphite/70 max-w-2xl mx-auto leading-relaxed">
            Scientists, engineers, and operators united by a commitment to
            technology-driven African development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="group bg-white rounded-card overflow-hidden premium-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg text-deep-navy mb-1">{member.name}</h3>
                <p className="text-burgundy text-sm font-medium mb-3">{member.role}</p>
                <p className="text-graphite/60 text-sm leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
