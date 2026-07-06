'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  Company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  Solutions: [
    { name: 'Tech Representation', href: '/solutions#representation' },
    { name: 'Agritech', href: '/solutions#agritech' },
    { name: 'Enterprise', href: '/solutions#enterprise' },
    { name: 'Sentinel-X', href: '/sentinel-x' },
  ],
  Resources: [
    { name: 'Insights', href: '/insights' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Documentation', href: '/docs' },
    { name: 'Support', href: '/support' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' },
  ],
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2B527A' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Main row: brand | newsletter | 4 link cols */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-6 items-start">

          {/* Brand + Contact */}
          <motion.div
            className="col-span-2 md:col-span-1 lg:col-span-1"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/Prexea_logo2.png"
              alt="Prexea Technology Limited"
              className="h-8 w-auto object-contain mb-3 brightness-0 invert"
            />
            <div className="space-y-1 mb-3">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3 h-3 text-white flex-shrink-0" />
                <span className="text-white text-xs">The Penthouse Suites, 4TH Floor, Artisan Place, Plot 382, Cadastral, Mabushi District, Abuja, FCT, Nigeria</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Mail className="w-3 h-3 text-white flex-shrink-0" />
                <span className="text-white text-xs">info@prexeatech.com</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Phone className="w-3 h-3 text-white flex-shrink-0" />
                <span className="text-white text-xs">+234-703-458-7469</span>
              </div>
            </div>
            {/* Social icons */}
            <div className="flex space-x-2 mt-1">
              {/* LinkedIn */}
              <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                className="w-6 h-6 bg-white/15 rounded flex items-center justify-center hover:bg-coral-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              {/* X / Twitter */}
              <motion.a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X"
                className="w-6 h-6 bg-white/15 rounded flex items-center justify-center hover:bg-coral-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.834L1.254 2.25H8.08l4.259 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
                </svg>
              </motion.a>
              {/* Facebook */}
              <motion.a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-6 h-6 bg-white/15 rounded flex items-center justify-center hover:bg-coral-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </motion.a>
              {/* Instagram */}
              <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-6 h-6 bg-white/15 rounded flex items-center justify-center hover:bg-coral-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </motion.a>
              {/* YouTube */}
              <motion.a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-6 h-6 bg-white/15 rounded flex items-center justify-center hover:bg-coral-red transition-colors duration-300"
                whileHover={{ scale: 1.1 }}>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                  <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            className="col-span-2 md:col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h4 className="text-xs font-heading font-semibold text-white uppercase tracking-wider mb-2">
              Stay Updated
            </h4>
            <p className="text-white/75 text-xs mb-2.5 leading-snug">
              Latest insights on African technology innovation and agritech developments.
            </p>
            <div className="flex gap-1.5">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-2.5 py-1.5 bg-white/10 border border-white/20 rounded text-white text-xs placeholder-white/40 focus:outline-none focus:border-coral-red transition-colors duration-300"
              />
              <button className="px-3 py-1.5 bg-burgundy text-white text-xs font-semibold rounded hover:bg-coral-red transition-colors duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 2) * 0.06 }}
            >
              <h4 className="text-xs font-heading font-semibold text-white uppercase tracking-wider mb-2">
                {category}
              </h4>
              <ul className="space-y-1">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-white/70 text-xs hover:text-coral-red transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/15 pt-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-1">
            <p className="text-white/60 text-xs">
              © 2024 Prexea Technology Nigeria Limited. All rights reserved.
            </p>
            <p className="text-white/60 text-xs">
              Building Africa&apos;s technological future, one innovation at a time.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
