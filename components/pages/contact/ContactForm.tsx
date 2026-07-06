'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const contactInfo = [
  { icon: MapPin, label: 'Head Office', value: 'The Penthouse Suites, 4TH Floor, Artisan Place, Plot 382, Cadastral, Mabushi District, Abuja, FCT, Nigeria' },
  { icon: Mail, label: 'Email', value: 'info@prexeatech.com' },
  { icon: Phone, label: 'Phone', value: '+234-703-458-7469' },
];

export default function ContactForm() {
  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl text-gradient mb-8">Send Us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-graphite mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors" placeholder="you@company.com" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-graphite mb-2">Subject</label>
                <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors" placeholder="How can we help?" />
              </div>
              <div>
                <label className="block text-sm font-medium text-graphite mb-2">Message</label>
                <textarea rows={6} className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors resize-none" placeholder="Tell us about your project, technology, or question..." />
              </div>
              <motion.button
                type="submit"
                className="w-full py-4 bg-deep-navy text-soft-white font-semibold rounded-button hover:bg-burgundy transition-colors duration-300"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading text-4xl text-gradient mb-4">Contact Details</h2>
              <p className="text-lg text-graphite/70 leading-relaxed">
                Our team is available Monday to Friday, 8am – 6pm WAT.
                We aim to respond to all enquiries within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start space-x-4 bg-white rounded-card p-6 premium-shadow">
                  <div className="w-12 h-12 bg-deep-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-deep-navy" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-graphite/50 uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-deep-navy font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="aspect-[4/3] rounded-card overflow-hidden premium-shadow">
              <img
                src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Prexea operations in Africa"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
