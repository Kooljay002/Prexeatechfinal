'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { Article } from '@/lib/supabase';
import ShareButtons from '@/components/ui/ShareButtons';

interface Props {
  article: Article;
  prevArticle?: Pick<Article, 'slug' | 'title'> | null;
  nextArticle?: Pick<Article, 'slug' | 'title'> | null;
}

export default function ArticleContent({ article, prevArticle, nextArticle }: Props) {
  const paragraphs = article.content.split('\n\n').filter(Boolean);

  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-0 bg-deep-navy overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={article.cover_image}
            alt={article.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-navy/80 via-deep-navy/60 to-deep-navy" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-10 pb-16">
          <motion.a
            href="/insights"
            className="inline-flex items-center text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors duration-200"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Insights
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="inline-block text-xs font-semibold text-white bg-burgundy px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-5 text-white/50 text-sm">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {new Date(article.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.read_time}
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {article.author}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Image */}
      <div className="bg-soft-white pt-10 pb-0">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={article.cover_image}
              alt={article.title}
              className="w-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Article Body */}
      <section className="bg-soft-white py-16">
        <div className="max-w-3xl mx-auto px-6 sm:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="prose-article"
          >
            {paragraphs.map((paragraph, i) => {
              const isBullet = paragraph.startsWith('•');
              const isHeading =
                !isBullet &&
                paragraph.length < 80 &&
                !paragraph.endsWith('.') &&
                i > 0;

              if (isBullet) {
                const items = paragraph.split('\n').filter(Boolean);
                return (
                  <ul key={i} className="my-6 space-y-3">
                    {items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-2 h-2 rounded-full bg-burgundy flex-shrink-0" />
                        <span className="text-graphite/80 text-lg leading-relaxed">
                          {item.replace(/^•\s*/, '')}
                        </span>
                      </li>
                    ))}
                  </ul>
                );
              }

              if (isHeading) {
                return (
                  <h2 key={i} className="font-heading text-2xl font-semibold text-deep-navy mt-10 mb-4">
                    {paragraph}
                  </h2>
                );
              }

              return (
                <p key={i} className="text-graphite/80 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          {/* Share + Download */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ShareButtons
              title={article.title}
              slug={article.slug}
              content={article.content}
            />
          </motion.div>

          {/* Prev / Next */}
          {(prevArticle || nextArticle) && (
            <motion.div
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {prevArticle ? (
                <a
                  href={`/insights/${prevArticle.slug}`}
                  className="group flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-deep-navy/30 hover:shadow-sm transition-all duration-200"
                >
                  <ArrowLeft className="w-4 h-4 text-graphite/40 group-hover:text-deep-navy flex-shrink-0 transition-colors" />
                  <div>
                    <div className="text-xs text-graphite/40 mb-1">Previous</div>
                    <div className="text-sm font-semibold text-deep-navy group-hover:text-burgundy transition-colors leading-snug line-clamp-2">
                      {prevArticle.title}
                    </div>
                  </div>
                </a>
              ) : <div />}
              {nextArticle && (
                <a
                  href={`/insights/${nextArticle.slug}`}
                  className="group flex items-center justify-end gap-3 p-4 rounded-xl border border-gray-100 hover:border-deep-navy/30 hover:shadow-sm transition-all duration-200 text-right"
                >
                  <div>
                    <div className="text-xs text-graphite/40 mb-1">Next</div>
                    <div className="text-sm font-semibold text-deep-navy group-hover:text-burgundy transition-colors leading-snug line-clamp-2">
                      {nextArticle.title}
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-graphite/40 group-hover:text-deep-navy flex-shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              )}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
