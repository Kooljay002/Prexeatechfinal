'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, Article } from '@/lib/supabase';
import { CirclePlus as PlusCircle, LogOut, CreditCard as Edit2, Eye, EyeOff, Search, Calendar, Clock } from 'lucide-react';

export default function AdminDashboard() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<'all' | 'published' | 'draft'>('all');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) { router.replace('/admin/login'); return; }
      fetchArticles();
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchArticles = async () => {
    const { data } = await supabase
      .from('articles')
      .select('*')
      .order('published_at', { ascending: false });
    setArticles(data ?? []);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace('/admin/login');
  };

  const filtered = articles.filter(a => {
    const matchSearch = a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === 'all' || (filter === 'published' ? a.is_published : !a.is_published);
    return matchSearch && matchFilter;
  });

  const published = articles.filter(a => a.is_published).length;
  const drafts = articles.filter(a => !a.is_published).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-deep-navy text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src="/Prexea_logo2.png" alt="Prexea" className="h-8 w-auto brightness-0 invert" />
          <span className="text-white/40">|</span>
          <span className="text-sm font-semibold text-white/80">Admin Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="text-white/60 hover:text-white text-xs transition-colors flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            View Site
          </a>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Sign Out
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: 'Total Articles', value: articles.length, color: 'bg-deep-navy' },
            { label: 'Published', value: published, color: 'bg-green-600' },
            { label: 'Drafts', value: drafts, color: 'bg-gray-500' },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4">
              <div className={`${stat.color} text-white rounded-lg px-3 py-2 text-xl font-bold min-w-[52px] text-center`}>
                {stat.value}
              </div>
              <span className="text-sm font-semibold text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6 items-start sm:items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search articles…"
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm outline-none focus:border-deep-navy w-64"
              />
            </div>
            <div className="flex rounded-lg border border-gray-200 overflow-hidden text-sm">
              {(['all', 'published', 'draft'] as const).map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-3 py-2 capitalize transition-colors ${
                    filter === f ? 'bg-deep-navy text-white' : 'bg-white text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => router.push('/admin/articles/new')}
            className="flex items-center gap-2 bg-burgundy text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#8a1822] transition-colors"
          >
            <PlusCircle className="w-4 h-4" />
            New Article
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-8 h-8 border-4 border-deep-navy border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="font-semibold mb-1">No articles found</p>
              <p className="text-sm">Create your first article to get started.</p>
            </div>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Article</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider hidden md:table-cell">Category</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Published</th>
                  <th className="text-left px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 w-16" />
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filtered.map(article => (
                  <tr key={article.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-start gap-3">
                        {article.cover_image && (
                          <img
                            src={article.cover_image}
                            alt=""
                            className="w-12 h-9 object-cover rounded-lg flex-shrink-0 hidden sm:block"
                          />
                        )}
                        <div>
                          <p className="text-sm font-semibold text-gray-900 leading-snug line-clamp-2 max-w-xs">
                            {article.title}
                          </p>
                          <p className="text-xs text-gray-400 mt-0.5 flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {article.read_time}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 hidden md:table-cell">
                      <span className="text-xs font-semibold text-deep-navy bg-deep-navy/10 px-2.5 py-1 rounded-full">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 hidden lg:table-cell">
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        article.is_published
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {article.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        {article.is_published && (
                          <a
                            href={`/insights/${article.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-deep-navy transition-colors"
                            title="View live"
                          >
                            <Eye className="w-4 h-4" />
                          </a>
                        )}
                        <button
                          onClick={() => router.push(`/admin/articles/${article.id}/edit`)}
                          className="text-gray-400 hover:text-deep-navy transition-colors"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
