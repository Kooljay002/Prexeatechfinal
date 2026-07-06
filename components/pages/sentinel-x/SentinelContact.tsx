'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const interests = [
  'Government Deployment',
  'Commercial Farm Application',
  'Farmer Cooperative Program',
  'Development Partnership',
  'Research Collaboration',
  'Investment Enquiry',
  'Media / Press',
  'Other',
];

export default function SentinelContact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '', organization: '', role: '', state: '', email: '', phone: '', interest: '', message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: '#F8F8F6' }}>
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Contact</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
          >
            Start the Conversation
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Whether you represent government, a commercial farm, a development organization, or a farmer cooperative — we want to hear from you.
          </p>
        </motion.div>

        {submitted ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#5B8C51' }}>
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#0A2342' }}>Message Received</h3>
            <p className="text-gray-500 text-sm">Our team will be in contact within 2 business days.</p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-8"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { name: 'organization', label: 'Organization', type: 'text', placeholder: 'Organization name' },
                { name: 'role', label: 'Role / Title', type: 'text', placeholder: 'Your position' },
                { name: 'state', label: 'State', type: 'text', placeholder: 'State / Location' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+234 ...' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#0A2342' }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={(form as Record<string, string>)[field.name]}
                    onChange={handleChange}
                    required={['name', 'email'].includes(field.name)}
                    className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0A2342] transition-colors duration-200 text-gray-700 placeholder-gray-300"
                  />
                </div>
              ))}
            </div>

            <div className="mb-5">
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#0A2342' }}>
                Area of Interest
              </label>
              <select
                name="interest"
                value={form.interest}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0A2342] transition-colors duration-200 text-gray-700 bg-white"
              >
                <option value="">Select an area of interest</option>
                {interests.map((i) => <option key={i} value={i}>{i}</option>)}
              </select>
            </div>

            <div className="mb-7">
              <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#0A2342' }}>
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your context and how you'd like to engage with Sentinel-X..."
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-[#0A2342] transition-colors duration-200 text-gray-700 placeholder-gray-300 resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-semibold text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
              style={{ backgroundColor: '#0A2342' }}
            >
              Start the Conversation <ArrowRight className="w-4 h-4" />
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
