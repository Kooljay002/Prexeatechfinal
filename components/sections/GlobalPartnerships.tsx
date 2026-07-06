'use client';

import { motion } from 'framer-motion';
import { MapPin, Globe, Users } from 'lucide-react';

export default function GlobalPartnerships() {
  return (
    <section className="section-padding bg-black text-soft-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full opacity-15"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Floating Connection Lines */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-0.5 bg-gradient-to-r from-transparent via-coral-red to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-24 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-coral-red to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-section-mobile md:text-section-tablet lg:text-section-desktop mb-6">
            Global Partnerships
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Connecting Africa to the world through strategic technology partnerships
            and collaborative innovation networks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left - Africa Focus */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-coral-red/20 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                <MapPin className="w-8 h-8 text-coral-red" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                African Headquarters
              </h3>
              <p className="text-white leading-relaxed">
                Based in Abuja, Nigeria, we serve as the gateway for global technologies
                entering African markets.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-coral-red rounded-full" />
                <span className="text-white">Nigeria Operations</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-white/40 rounded-full" />
                <span className="text-white">West Africa Expansion</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-3">
                <div className="w-2 h-2 bg-coral-red rounded-full" />
                <span className="text-white">Continental Network</span>
              </div>
            </div>
          </motion.div>

          {/* Center - World Map Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-square max-w-sm mx-auto relative">
              <div className="w-full h-full rounded-full border-2 border-coral-red/30 flex items-center justify-center relative overflow-hidden">
                <div className="w-4/5 h-4/5 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center">
                  <Globe className="w-16 h-16 text-coral-red" />
                </div>

                {/* Orbiting Elements */}
                <motion.div
                  className="absolute w-4 h-4 bg-coral-red rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '0 120px' }}
                />
                <motion.div
                  className="absolute w-3 h-3 bg-white/50 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: '0 100px' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right - Global Reach */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto lg:ml-auto lg:mr-0 mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Global Network
              </h3>
              <p className="text-white leading-relaxed">
                Strategic partnerships with technology manufacturers, research institutions,
                and development organizations worldwide.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <span className="text-white">North America</span>
                <div className="w-2 h-2 bg-white/40 rounded-full" />
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <span className="text-white">Europe</span>
                <div className="w-2 h-2 bg-coral-red rounded-full" />
              </div>
              <div className="flex items-center justify-center lg:justify-end space-x-3">
                <span className="text-white">Asia Pacific</span>
                <div className="w-2 h-2 bg-white/40 rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
