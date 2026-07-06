'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { supabase, Article } from '@/lib/supabase';
import ShareButtons from '@/components/ui/ShareButtons';

export default function InsightsList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('articles')
      .select('*')
      .eq('is_published', true)
      .order('published_at', { ascending: false })
      .then(({ data }) => {
        setArticles(data ?? []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="section-padding bg-soft-white">
        <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-white rounded-card overflow-hidden premium-shadow animate-pulse">
                <div className="aspect-[16/10] bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-3 bg-gray-200 rounded w-1/3" />
                  <div className="h-4 bg-gray-200 rounded" />
                  <div className="h-4 bg-gray-200 rounded w-4/5" />
                  <div className="h-3 bg-gray-200 rounded w-2/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-soft-white">
      <div className="max-w-7xl mx-auto px-9 sm:px-11 lg:px-13">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              className="group bg-white rounded-card overflow-hidden premium-shadow hover-lift"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <a href={`/insights/${article.slug}`} className="block">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-deep-navy bg-deep-navy/10 px-3 py-1 rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center text-xs text-graphite/50">
                      <Calendar className="w-3 h-3 mr-1" />
                      {new Date(article.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-deep-navy mb-3 group-hover:text-burgundy transition-colors duration-300 leading-tight">
                    {article.title}
                  </h3>
                  <p className="text-graphite/60 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-deep-navy font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More →
                    </span>
                    <span className="text-graphite/40 text-xs">{article.read_time}</span>
                  </div>
                </div>
              </a>
              <div className="px-6 pb-5 border-t border-gray-50 pt-4">
                <ShareButtons title={article.title} slug={article.slug} compact />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
