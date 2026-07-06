'use client';

import { motion } from 'framer-motion';

export default function PartnershipsForm() {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-soft-white">
      <div className="max-w-3xl mx-auto px-9 sm:px-11 lg:px-13">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-4xl text-gradient mb-4">Express Your Interest</h2>
          <p className="text-lg text-graphite/70 leading-relaxed">
            Tell us about your organisation and what you are looking to achieve.
            Our team will respond within two business days.
          </p>
        </motion.div>

        <motion.form
          className="bg-white rounded-card p-8 md:p-12 premium-shadow space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Full Name</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-graphite mb-2">Organisation</label>
              <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors" placeholder="Company or institution" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-graphite mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors" placeholder="you@organisation.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-graphite mb-2">Partnership Type</label>
            <select className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors text-graphite bg-white">
              <option value="">Select a model</option>
              <option>Technology Developer</option>
              <option>Strategic Partner</option>
              <option>Research Institution</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-graphite mb-2">Tell Us About Your Goals</label>
            <textarea rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-button focus:outline-none focus:border-deep-navy transition-colors resize-none" placeholder="Describe the technology, challenge, or opportunity you want to explore..." />
          </div>
          <motion.button
            type="submit"
            className="w-full py-4 bg-deep-navy text-soft-white font-semibold rounded-button hover:bg-burgundy transition-colors duration-300"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            Submit Partnership Enquiry
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
