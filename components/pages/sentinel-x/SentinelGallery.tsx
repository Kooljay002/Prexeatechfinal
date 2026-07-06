'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/3626579/pexels-photo-3626579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop', caption: 'Farmer Sensitization Meeting', span: 'col-span-2 row-span-2' },
  { src: 'https://images.pexels.com/photos/7728086/pexels-photo-7728086.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', caption: 'Field Mapping Exercise' },
  { src: 'https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', caption: 'Demonstration Plot' },
  { src: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', caption: 'Green Field Day Event' },
  { src: 'https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', caption: 'Government Visit' },
  { src: 'https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop', caption: 'Farmer Training Session', span: 'col-span-2' },
  { src: 'https://images.pexels.com/photos/2886937/pexels-photo-2886937.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', caption: 'Extension Activity' },
  { src: 'https://images.pexels.com/photos/7469491/pexels-photo-7469491.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop', caption: 'Recovery — Treated Field' },
];

export default function SentinelGallery() {
  return (
    <section id="gallery" style={{ backgroundColor: '#F8F8F6' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
            <span className="text-[#E85D5D] text-xs font-semibold uppercase tracking-[0.18em]">Field Deployment Gallery</span>
            <span className="inline-block w-8 h-px bg-[#E85D5D]" />
          </div>
          <h2
            className="text-[32px] sm:text-[44px] leading-[1.1] mb-4"
            style={{ fontFamily: '"Open Sans", sans-serif', fontWeight: 800, color: '#0A2342' }}
          >
            Field Deployment Gallery
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Documentation from pilot field activities across Northern Nigeria.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-3">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-lg group cursor-pointer ${img.span || ''}`}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-semibold">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
