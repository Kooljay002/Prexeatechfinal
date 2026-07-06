'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, Article } from '@/lib/supabase';
import ArticleForm from '@/components/admin/ArticleForm';

interface Props {
  params: { id: string };
}

export default function EditArticlePage({ params }: Props) {
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.replace('/admin/login'); return; }
      supabase.from('articles').select('*').eq('id', params.id).maybeSingle().then(({ data }) => {
        if (!data) { router.replace('/admin/dashboard'); return; }
        setArticle(data);
        setLoading(false);
      });
    });
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-deep-navy border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return <ArticleForm mode="edit" article={article!} />;
}
