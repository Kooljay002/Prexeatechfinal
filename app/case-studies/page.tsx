'use client';

import { motion } from 'framer-motion';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';

const studies = [
  {
    client: 'Kano State Farmers Cooperative',
    sector: 'Agriculture',
    challenge: 'Pest pressure reducing maize yields by up to 50% annually with no viable chemical-free alternative.',
    solution: 'Deployed Sentinel-X across 1,200 smallholder plots over two growing seasons.',
    result: '43% average yield increase, ₦180M in aggregate income uplift.',
    image: 'https://images.pexels.com/photos/1624229/pexels-photo-1624229.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
  {
    client: 'Federal Ministry of Agriculture',
    sector: 'Government',
    challenge: 'No centralised data system for tracking programme delivery across 36 states.',
    solution: 'Implemented a digital monitoring and evaluation platform integrated with existing reporting workflows.',
    result: 'Real-time visibility across 4,200 programme sites, 60% reduction in reporting lag.',
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
  {
    client: 'Pan-African Seed Company',
    sector: 'Enterprise',
    challenge: 'Manual inventory and distribution processes leading to seed spoilage and stockouts.',
    solution: 'End-to-end supply chain digitalisation including mobile-first field agent tools.',
    result: '35% reduction in spoilage losses, 28% improvement in on-time delivery.',
    image: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop',
  },
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('https://images.pexels.com/photos/992734/pexels-photo-992734.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')` }} />
          <div className="absolute inset-0 hero-gradient" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <span className="text-coral-red font-semibold text-sm uppercase tracking-wider block mb-4">Evidence</span>
            <h1 className="font-heading text-5xl md:text-7xl text-soft-white mb-6">Case Studies</h1>
            <p className="text-xl text-soft-white/80 max-w-2xl mx-auto">Real projects. Documented results. No abstractions.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-soft-white">
        <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
          <div className="space-y-12">
            {studies.map((study, index) => (
              <motion.div
                key={study.client}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-card overflow-hidden premium-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
              >
                <div className={`aspect-[16/10] overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img src={study.image} alt={study.client} className="w-full h-full object-cover" />
                </div>
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="text-deep-navy text-sm font-semibold bg-deep-navy/10 px-3 py-1 rounded-full">{study.sector}</span>
                  <h3 className="font-heading text-2xl text-deep-navy mt-4 mb-6">{study.client}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-burgundy text-xs font-bold uppercase tracking-wider mb-1">Challenge</p>
                      <p className="text-graphite/70 leading-relaxed">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="text-burgundy text-xs font-bold uppercase tracking-wider mb-1">Solution</p>
                      <p className="text-graphite/70 leading-relaxed">{study.solution}</p>
                    </div>
                    <div className="bg-deep-navy/5 rounded-lg p-4 border-l-4 border-deep-navy">
                      <p className="text-burgundy text-xs font-bold uppercase tracking-wider mb-1">Result</p>
                      <p className="text-deep-navy font-semibold leading-relaxed">{study.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
