'use client';

import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { articles } from '@/lib/articles';

const insights = articles.slice(0, 4).map((a) => ({
  title: a.title,
  excerpt: a.excerpt,
  category: a.category,
  date: a.date,
  image: a.image,
  slug: a.slug,
}));

export default function Insights() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-deep-navy text-xs font-bold uppercase tracking-widest mb-3">
            Knowledge Hub
          </p>
          <h2 className="font-heading text-section-mobile md:text-section-tablet lg:text-section-desktop text-gradient mb-5">
            Latest Insights
          </h2>
          <p className="text-lg text-graphite/65 max-w-xl mx-auto leading-relaxed">
            Thought leadership on African technology innovation, sustainable agriculture,
            and the future of food security.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {insights.map((insight, index) => (
            <motion.article
              key={insight.title}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={`/insights/${insight.slug}`} className="block h-full">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 hover:border-deep-navy/20 transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-deep-navy bg-deep-navy/10 px-2.5 py-1 rounded-full">
                      {insight.category}
                    </span>
                    <div className="flex items-center text-xs text-graphite/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      {insight.date}
                    </div>
                  </div>

                  <h3 className="text-sm font-heading font-semibold text-deep-navy mb-2 group-hover:text-burgundy transition-colors duration-300 leading-snug">
                    {insight.title}
                  </h3>

                  <p className="text-graphite/60 text-xs leading-relaxed mb-3 flex-grow">
                    {insight.excerpt}
                  </p>

                  <div className="flex items-center text-deep-navy font-semibold text-xs">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </div>
              </div>
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.a
            href="/insights"
            className="inline-flex items-center text-lg font-semibold text-deep-navy hover:text-burgundy transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            View All Insights
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}