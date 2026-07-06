'use client';

import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const industries = [
  {
    title: 'Agriculture & Smart Farming Solutions',
    tag: 'Agritech',
    description: 'We deliver precision agriculture technologies that improve productivity and sustainability for African farmers. Our solutions include crop monitoring, soil analytics, climate intelligence, and advanced crop protection systems such as photonic technologies. We empower farmers with data-driven tools to increase yields, reduce risk, and strengthen food security.',
    image: '/Agriculture.jpg',
  },
  {
    title: 'Government & Digital Governance Solutions',
    tag: 'Public Sector',
    description: 'Prexea Technologies builds integrated digital governance platforms that modernize public sector operations and improve citizen service delivery. Our solutions enable governments to streamline workflows, digitize services, and leverage real-time data for better decision-making. From e-government portals to smart infrastructure systems, we help public institutions become more transparent, efficient, and responsive.',
    image: '/Governance2.jpg',
  },
  {
    title: 'Healthcare Technology Solutions',
    tag: 'HealthTech',
    description: 'We deliver digital health ecosystems that expand access to quality healthcare through telemedicine, diagnostics, and intelligent medical supply chain systems. Our platforms connect patients, healthcare providers, and health institutions, enabling remote consultations, faster diagnosis, and improved healthcare delivery — especially in underserved and rural communities.',
    image: '/healthcare.jpg',
  },
  {
    title: 'Enterprise & Business Automation Solutions',
    tag: 'Enterprise',
    description: 'Prexea develops ERP systems and business automation platforms tailored for African business environments. Our solutions optimize operations across finance, HR, supply chain, and customer management while supporting low-bandwidth access, multilingual interfaces, and local compliance. We help organizations improve efficiency, visibility, and scalability.',
    image: '/enterprise.jpg',
  },
  {
    title: 'Environmental & Climate Technology Solutions',
    tag: 'CleanTech',
    description: 'We provide advanced environmental intelligence systems for climate monitoring, carbon tracking, and clean energy management. Our solutions help organizations measure environmental impact, optimize energy use, and strengthen sustainability reporting. By turning environmental data into actionable insights, we support climate resilience and sustainable development.',
    image: '/environment3.jpg',
  },
  {
    title: 'Research & Innovation Commercialization Services',
    tag: 'R&D',
    description: 'Prexea bridges the gap between academia and industry by transforming research into real-world solutions. Through technology licensing, applied research, and innovation partnerships, we help move breakthroughs from laboratories into scalable, market-ready deployments that drive industrial growth and societal impact.',
    image: '/researcher.jpg',
  },
];

export default function IndustriesGrid() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.article
              key={industry.title}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-deep-navy/20 transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-deep-navy bg-deep-navy/10 px-2.5 py-1 rounded-full">
                      {industry.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-heading font-semibold text-deep-navy mb-2 leading-snug">
                    {industry.title}
                  </h3>

                  <p className="text-graphite/60 text-sm leading-relaxed mb-4 flex-grow">
                    {industry.description}
                  </p>

                  <a
                    href="/Prexea_Solutions_Overview.pdf"
                    download
                    className="inline-flex items-center text-deep-navy font-semibold text-sm hover:text-burgundy transition-colors duration-200"
                  >
                    <Download className="w-3.5 h-3.5 mr-1.5" />
                    Download Overview
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
