'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

type Category = 'all' | 'sentinel-x' | 'field' | 'naqs';

interface GalleryImage {
  id: string;
  alt: string;
  category: Category;
}

const gdrive = (id: string) =>
  `https://lh3.googleusercontent.com/d/${id}=w1200`;

const sentinel: GalleryImage[] = [
  { id: '1i4nQRQcgcaJWixGZJbPs5zHylqY7ewZU', alt: 'Sentinel-X field operation 1', category: 'sentinel-x' },
  { id: '1h0xLJgHyDi9zicKza6LSKdwA-YSuLr95', alt: 'Sentinel-X field operation 2', category: 'sentinel-x' },
  { id: '1bHrAey_guIjOVqu11GJaUVx0L2CaTv7I', alt: 'Sentinel-X field operation 3', category: 'sentinel-x' },
  { id: '112zx8aNhyaXAuc02ot5MG--4N93ygaX2', alt: 'Sentinel-X field operation 4', category: 'sentinel-x' },
  { id: '1Uuvew7F3K1Q2E0dvvNoqX9c7-wPHehba', alt: 'Sentinel-X field operation 5', category: 'sentinel-x' },
];

const field: GalleryImage[] = [
  // Kano-labeled images
  { id: '11UDO9VCz9phyao3_FyGfISQvRNv0BSaO', alt: 'Kano project deployment', category: 'field' },
  // Feb 4 images
  { id: '1GDHOOHA-kIwygxySeP7DVvzSxGM22Klf', alt: 'Kano State pilot — field visit', category: 'field' },
  { id: '1jtm0pjhp4iIVXpgZMpX1zjAgntmpVKVf', alt: 'Kano State pilot — operations', category: 'field' },
  { id: '1FYxFkq2pSVySyzZ-8iRVWyf_nFfsGb1S', alt: 'Kano State pilot — team', category: 'field' },
  { id: '1DsI4YryJwSKSCKWCivs6Bs2gGBB7kR3b', alt: 'Kano State pilot — community engagement', category: 'field' },
  { id: '1WL3hO_nKD87thUbA9f9qHdD36iYesPiO', alt: 'Kano State pilot — field activity', category: 'field' },
  { id: '1CudeFr3XQCtX6vlp-xjW4ty7Nq3ZUJqs', alt: 'Kano State pilot — demonstration', category: 'field' },
  { id: '1ZNLs9Ods91KfcSEu6sBhckrwfVO2Kpha', alt: 'Kano State pilot — crop protection', category: 'field' },
  { id: '10ST9lev8tv3Wn2WyPflx0_GkunB_5AnL', alt: 'Kano State pilot — site inspection', category: 'field' },
  { id: '1Z7Bl6c0FGUTFTe1OGSZvV9MQfq2_uCOS', alt: 'Kano State pilot — farmers engagement', category: 'field' },
  { id: '1VySCzI32Tli1g7psveUuRpt2nNRkK5j6', alt: 'Kano State pilot — stakeholders', category: 'field' },
  { id: '1ycBhJSQbLUynpCxMP5f32b67W-umsG5d', alt: 'Kano State pilot — farmland', category: 'field' },
  { id: '1mEqYwuhmw_rVp9dg0Pw9Ioh4S-8XxBlL', alt: 'Kano State pilot — green field day', category: 'field' },
  { id: '13NO1t7EFVc45z4RiXLNxlANrfzY02Bsf', alt: 'Kano State pilot — event wrap-up', category: 'field' },
  // Jun 3 images
  { id: '1t8ILfrg_ovGZ2C-yg3tVxdmthjPEBT5O', alt: 'Kaduna & Kano deployment — activity 1', category: 'field' },
  { id: '1YFqXcBAuU5s30mnDUJZRG8j5LomZ2Z96', alt: 'Kaduna & Kano deployment — activity 2', category: 'field' },
  { id: '1TdiJd9_2eKWFRHFFvYgcHjGmZW-aGlm5', alt: 'Kaduna & Kano deployment — field site', category: 'field' },
  { id: '1FM8lKWVPJV9huDlWMs2mQgKgzhXoW29j', alt: 'Kaduna & Kano deployment — operations team', category: 'field' },
  { id: '1_FNyeLtyop0A4K0jdIAbQ3oIB1p66lMj', alt: 'Kaduna & Kano deployment — community', category: 'field' },
  { id: '18LdcZIdDvV-aDr4zlJE8e2W6PZDbk-L7', alt: 'Kaduna & Kano deployment — crop assessment', category: 'field' },
  { id: '1oeIZCETGah-EmTmoAyRLtiSebG2bp0wL', alt: 'Kaduna & Kano deployment — farmer training', category: 'field' },
  { id: '1lin7V5or0Ni0iFJsv1qcogxWFCVtZMP6', alt: 'Kaduna & Kano deployment — field demo', category: 'field' },
  { id: '1m2UGAU7sM2k4Nhzhl6Y2yXwt1hIoJf2M', alt: 'Kaduna & Kano deployment — application', category: 'field' },
  { id: '1_zUO9ytSV6eZeRCM6Ji5bM87w5UDAwbX', alt: 'Kaduna & Kano deployment — team photo', category: 'field' },
  { id: '17A5pssMK39Xfy0fsaAmzbSL54pEpsUsf', alt: 'Kaduna & Kano deployment — participants', category: 'field' },
  { id: '1k6_eCI26VYX6onGtKNP3HSfzx7koHNvT', alt: 'Kaduna & Kano deployment — project visit 1', category: 'field' },
  { id: '1N5x-OrX574tJ30a1pEY0IfLaMi3pw80O', alt: 'Kaduna & Kano deployment — project visit 2', category: 'field' },
  { id: '1zwVnBAHbOucC1uMgNtoYyOvJM5qfehLS', alt: 'Kaduna & Kano deployment — crop field', category: 'field' },
  { id: '1qnxYgAwFTWLi16H5C7k0A7czzOi7Zn0O', alt: 'Kaduna & Kano deployment — rural site', category: 'field' },
  { id: '1X6FybTrATrqh6qD2gZqRzTOHpjOJNypq', alt: 'Kaduna & Kano deployment — extension team', category: 'field' },
  { id: '1Q7VZdYD1tp9QYZWaB2mL4C5KTJg5lyCs', alt: 'Kaduna & Kano deployment — farm visit', category: 'field' },
  { id: '1PVE5JWqhN14ZAMtYrqyP0iXwWuWFHMAH', alt: 'Kaduna & Kano deployment — assessment', category: 'field' },
  { id: '1oNfDmbgLyd2WYTMYiR4TZfewbnFS4iYb', alt: 'Kaduna & Kano deployment — monitoring', category: 'field' },
  { id: '1WqpjJwyX-KfSh_TxxPUQYuNQAOgHeShQ', alt: 'Kaduna & Kano deployment — review', category: 'field' },
  { id: '1M21GK-rfMZOzJ3fXP6uUaGl9H0hvlhcQ', alt: 'Kaduna & Kano deployment — stakeholder meeting', category: 'field' },
  { id: '1Tx4TsJU2sBsZjf7vk3GJn_pfsPW2990U', alt: 'Kaduna & Kano deployment — final inspection', category: 'field' },
  { id: '1ZO64jwvL93k9MkZjloHtWawwjNQ5lhzE', alt: 'Kaduna & Kano deployment — results', category: 'field' },
  { id: '1Jk3lyCvs0J3Sop7N2WEdSGvC_K-xJgmC', alt: 'Kaduna & Kano deployment — close-out', category: 'field' },
];

const allImages = [...sentinel, ...field];

const naqs: GalleryImage[] = [
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM1.jpeg', alt: 'NAQS visit — delegation arrival', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM2.jpeg', alt: 'NAQS visit — opening session', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM3.jpeg', alt: 'NAQS visit — boardroom discussion', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM4.jpeg', alt: 'NAQS visit — stakeholder engagement', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM5.jpeg', alt: 'NAQS visit — technical briefing', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM6.jpeg', alt: 'NAQS visit — bilateral discussion', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM7.jpeg', alt: 'NAQS visit — protocol review', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM8.jpeg', alt: 'NAQS visit — Phase II planning', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM9.jpeg', alt: 'NAQS visit — team meeting', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM10.jpeg', alt: 'NAQS visit — collaboration session', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM12.jpeg', alt: 'NAQS visit — official exchange', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM13.jpeg', alt: 'NAQS visit — closing remarks', category: 'naqs' },
  { id: '/gallery/Prexea National Quarantine Agency Visit/QM14.jpeg', alt: 'NAQS visit — group photo', category: 'naqs' },
];

const allImagesWithNaqs = [...sentinel, ...field, ...naqs];

const tabs: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Sentinel-X', value: 'sentinel-x' },
  { label: 'Kaduna & Kano Projects', value: 'field' },
  { label: 'NAQS Visit', value: 'naqs' },
];

export default function GalleryGrid() {
  const [active, setActive] = useState<Category>('all');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === 'all' ? allImagesWithNaqs : allImagesWithNaqs.filter(img => img.category === active);

  const openLightbox = useCallback((idx: number) => setLightbox(idx), []);
  const closeLightbox = useCallback(() => setLightbox(null), []);
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null), [filtered.length]);
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % filtered.length : null), [filtered.length]);

  const imgSrc = (img: GalleryImage) =>
    img.category === 'naqs' ? img.id : gdrive(img.id);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, closeLightbox, prev, next]);

  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {tabs.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === tab.value
                  ? 'bg-deep-navy text-white shadow-md'
                  : 'bg-white border border-gray-200 text-graphite hover:border-deep-navy hover:text-deep-navy'
              }`}
            >
              {tab.label}
              <span className={`ml-2 text-xs px-1.5 py-0.5 rounded-full ${active === tab.value ? 'bg-white/20 text-white' : 'bg-gray-100 text-graphite/60'}`}>
                {tab.value === 'all' ? allImagesWithNaqs.length : allImagesWithNaqs.filter(i => i.category === tab.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          key={active}
          className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {filtered.map((img, idx) => (
            <motion.div
              key={img.id}
              className="group relative break-inside-avoid cursor-pointer rounded-xl overflow-hidden bg-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.03, 0.4) }}
              onClick={() => openLightbox(idx)}
            >
              <img
                src={imgSrc(img)}
                alt={img.alt}
                loading="lazy"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-deep-navy/0 group-hover:bg-deep-navy/40 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-5 right-5 z-10 text-white/70 hover:text-white transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-8 h-8" />
            </button>

            {/* Counter */}
            <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium">
              {lightbox + 1} / {filtered.length}
            </span>

            {/* Prev */}
            <button
              className="absolute left-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={e => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Image */}
            <motion.img
              key={lightbox}
              src={imgSrc(filtered[lightbox])}
              alt={filtered[lightbox].alt}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              onClick={e => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Caption */}
            <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60 text-sm text-center max-w-md">
              {filtered[lightbox].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
