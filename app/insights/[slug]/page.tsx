'use client';

import { useEffect, useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { supabase, Article } from '@/lib/supabase';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/sections/Footer';
import ArticleContent from '@/components/pages/insights/ArticleContent';

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [prev, setPrev] = useState<Pick<Article, 'slug' | 'title'> | null>(null);
  const [next, setNext] = useState<Pick<Article, 'slug' | 'title'> | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound404, setNotFound404] = useState(false);

  useEffect(() => {
    if (!params?.slug) return;
    (async () => {
      const { data } = await supabase
        .from('articles')
        .select('*')
        .eq('slug', params.slug)
        .eq('is_published', true)
        .maybeSingle();

      if (!data) { setNotFound404(true); setLoading(false); return; }
      setArticle(data);

      // Fetch adjacent articles by published_at
      const [{ data: prevData }, { data: nextData }] = await Promise.all([
        supabase
          .from('articles')
          .select('slug, title')
          .eq('is_published', true)
          .lt('published_at', data.published_at)
          .order('published_at', { ascending: false })
          .limit(1)
          .maybeSingle(),
        supabase
          .from('articles')
          .select('slug, title')
          .eq('is_published', true)
          .gt('published_at', data.published_at)
          .order('published_at', { ascending: true })
          .limit(1)
          .maybeSingle(),
      ]);

      setPrev(prevData ?? null);
      setNext(nextData ?? null);
      setLoading(false);
    })();
  }, [params?.slug]);

  if (loading) {
    return (
      <main className="min-h-screen">
        <Navigation />
        <div className="min-h-[60vh] flex items-center justify-center bg-deep-navy">
          <div className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full animate-spin" />
        </div>
        <Footer />
      </main>
    );
  }

  if (notFound404 || !article) return notFound();

  return (
    <main className="min-h-screen">
      <Navigation />
      <ArticleContent article={article} prevArticle={prev} nextArticle={next} />
      <Footer />
    </main>
  );
}
