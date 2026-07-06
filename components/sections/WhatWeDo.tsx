'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Technology Representation',
    description: 'Connecting global technology manufacturers with African markets through strategic partnerships and local expertise.',
    image: '/Technology_Product_Representation.jpeg',
    tag: 'Partnerships',
    href: '/solutions#research',
  },
  {
    title: 'Agritech Solutions',
    description: 'Sustainable agricultural technologies that enhance productivity while protecting environmental resources.',
    image: '/Agricultural_Technology_Solutions.jpeg',
    tag: 'Agriculture',
    href: '/solutions#agritech',
  },
  {
    title: 'Enterprise Technology',
    description: 'Scalable enterprise solutions that drive operational efficiency and digital transformation across industries.',
    image: '/Enterprise_Technology_Services.jpeg',
    tag: 'Enterprise',
    href: '/solutions#enterprise',
  },
  {
    title: 'Product Commercialisation',
    description: 'Transforming innovative technologies into market-ready solutions tailored for African business environments.',
    image: '/Commercialoization.jpeg',
    tag: 'Go-to-Market',
    href: '/solutions#research',
  },
  {
    title: 'Innovation Partnerships',
    description: 'Collaborative frameworks with governments, institutions, and private sector organisations for technology adoption.',
    image: '/Innovation_Partnerships.jpeg',
    tag: 'Government',
    href: '/solutions#government',
  },
  {
    title: 'Local Product Development',
    description: 'Developing locally relevant solutions that address specific African market needs and challenges.',
    image: '/Local_Product_Development.jpeg',
    tag: 'R&D',
    href: '/solutions#agritech',
  },
];

const VISIBLE = 3;

export default function WhatWeDo() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i - 1 + services.length) % services.length);
  }, []);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % services.length);
  }, []);

  const visible = Array.from({ length: VISIBLE }, (_, i) => services[(index + i) % services.length]);

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-deep-navy text-xs font-bold uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h2 className="font-heading text-section-mobile md:text-section-tablet lg:text-section-desktop text-gradient mb-5">
            What We Do
          </h2>
          <p className="text-lg text-graphite/65 max-w-xl mx-auto leading-relaxed">
            We bridge cutting-edge global technologies and African markets,
            creating solutions that drive real, measurable growth.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout" initial={false}>
              {visible.map((service, i) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  layout
                  initial={{ opacity: 0, x: direction * 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -80 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group bg-white rounded-card overflow-hidden border border-gray-100 hover:border-deep-navy/25 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <a href={service.href} className="block h-full">
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/50 to-transparent" />
                    <span className="absolute bottom-3 left-3 bg-deep-navy text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>
                  {/* Text */}
                  <div className="p-6">
                    <h3 className="font-heading text-base font-semibold text-deep-navy mb-2 group-hover:text-burgundy transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-graphite/60 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <div className="mt-4 flex items-center text-deep-navy font-medium text-sm">
                      Learn More
                      <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                    </div>
                  </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex gap-2">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                  className={`rounded-full transition-all duration-300 ${i === index ? 'w-6 h-2 bg-deep-navy' : 'w-2 h-2 bg-gray-200 hover:bg-deep-navy/40'}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-graphite hover:border-deep-navy hover:text-deep-navy transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-deep-navy text-white flex items-center justify-center hover:bg-burgundy transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}