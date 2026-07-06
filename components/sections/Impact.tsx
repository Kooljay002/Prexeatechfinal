'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, Leaf, Award } from 'lucide-react';

const impacts = [
  {
    icon: TrendingUp,
    title: 'Productivity Increase',
    value: '40%',
    description: 'Average improvement in agricultural productivity through our technology solutions',
  },
  {
    icon: Users,
    title: 'Farmers Trained',
    value: '10,000+',
    description: 'Agricultural professionals equipped with sustainable farming technologies',
  },
  {
    icon: Leaf,
    title: 'Chemical Reduction',
    value: '60%',
    description: 'Decrease in harmful chemical usage through our eco-friendly solutions',
  },
  {
    icon: Award,
    title: 'Success Rate',
    value: '95%',
    description: 'Technology deployment success rate across African markets',
  },
];

export default function Impact() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-deep-navy text-xs font-bold uppercase tracking-widest mb-3">
            Results
          </p>
          <h2 className="font-heading text-section-mobile md:text-section-tablet lg:text-section-desktop text-gradient mb-5">
            Measurable Impact
          </h2>
          <p className="text-lg text-graphite/65 max-w-xl mx-auto leading-relaxed">
            Real results from technology deployment across African markets,
            driving sustainable growth and innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              className="text-center group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-deep-navy/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-deep-navy/20 transition-colors duration-300">
                  <impact.icon className="w-6 h-6 text-deep-navy" />
                </div>
                <motion.div
                  className="text-3xl font-heading font-bold text-burgundy mb-1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                >
                  {impact.value}
                </motion.div>
                <h3 className="text-sm font-heading font-semibold text-deep-navy mb-2">
                  {impact.title}
                </h3>
              </div>
              <p className="text-graphite/60 text-xs leading-relaxed">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visual Impact Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h3 className="font-heading text-2xl text-deep-navy mb-4">
              Field Deployment Success
            </h3>
            <p className="text-base text-graphite/65 mb-6 leading-relaxed">
              Our technology solutions are actively deployed across multiple African countries,
              with documented success in improving agricultural outcomes, reducing environmental
              impact, and enhancing farmer livelihoods.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                  <span className="text-deep-navy font-bold">1</span>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-navy">Farmer Onboarding</h4>
                  <p className="text-graphite/60">Comprehensive training and support programs</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-burgundy/10 rounded-lg flex items-center justify-center">
                  <span className="text-burgundy font-bold">2</span>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-navy">Demonstration Plots</h4>
                  <p className="text-graphite/60">Real-world testing and validation</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                  <span className="text-deep-navy font-bold">3</span>
                </div>
                <div>
                  <h4 className="font-semibold text-deep-navy">Community Training</h4>
                  <p className="text-graphite/60">Knowledge transfer and capacity building</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-card overflow-hidden premium-shadow">
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Field deployment — agronomist with technology in crop field"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/20 to-transparent" />
            </div>
            
            {/* Floating Stats */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg p-4 premium-shadow"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-2xl font-bold text-deep-navy">95%</div>
              <div className="text-sm text-graphite/60">Success Rate</div>
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-lg p-4 premium-shadow"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="text-2xl font-bold text-burgundy">40%</div>
              <div className="text-sm text-graphite/60">Productivity</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}