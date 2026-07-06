'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, Article } from '@/lib/supabase';
import { ArrowLeft, Eye, EyeOff, Save, Trash2, CircleAlert as AlertCircle, Image as ImageIcon } from 'lucide-react';

const CATEGORIES = [
  'Sentinel-X',
  'Field Insights',
  'Agritech',
  'Commercialization',
  'Enterprise',
  'Government',
  'Healthcare',
  'Research',
  'Partnerships',
  'Company News',
];

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

interface Props {
  article?: Article;
  mode: 'create' | 'edit';
}

export default function ArticleForm({ article, mode }: Props) {
  const router = useRouter();
  const [form, setForm] = useState({
    slug: article?.slug ?? '',
    title: article?.title ?? '',
    excerpt: article?.excerpt ?? '',
    content: article?.content ?? '',
    category: article?.category ?? 'Sentinel-X',
    author: article?.author ?? 'Prexea Team',
    cover_image: article?.cover_image ?? '',
    read_time: article?.read_time ?? '5 min read',
    is_published: article?.is_published ?? false,
    published_at: article?.published_at
      ? new Date(article.published_at).toISOString().split('T')[0]
      : new Date().toISOString().split('T')[0],
  });
  const [slugLocked, setSlugLocked] = useState(mode === 'edit');
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState('');
  const [confirmDelete, setConfirmDelete] = useState(false);

  useEffect(() => {
    if (!slugLocked && mode === 'create') {
      setForm(f => ({ ...f, slug: slugify(f.title) }));
    }
  }, [form.title, slugLocked, mode]);

  const update = (field: string, value: string | boolean) =>
    setForm(f => ({ ...f, [field]: value }));

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const payload = {
      ...form,
      published_at: new Date(form.published_at).toISOString(),
      updated_at: new Date().toISOString(),
    };

    let err;
    if (mode === 'create') {
      ({ error: err } = await supabase.from('articles').insert(payload));
    } else {
      ({ error: err } = await supabase
        .from('articles')
        .update(payload)
        .eq('id', article!.id));
    }

    if (err) {
      setError(err.message);
      setSaving(false);
    } else {
      router.push('/admin/dashboard');
    }
  };

  const handleDelete = async () => {
    if (!confirmDelete) { setConfirmDelete(true); return; }
    setDeleting(true);
    await supabase.from('articles').delete().eq('id', article!.id);
    router.push('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push('/admin/dashboard')}
            className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 text-sm transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Dashboard
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold text-gray-800">
            {mode === 'create' ? 'New Article' : 'Edit Article'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          {mode === 'edit' && (
            <button
              type="button"
              onClick={handleDelete}
              disabled={deleting}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${
                confirmDelete
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-50 text-red-600 hover:bg-red-100'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              {confirmDelete ? 'Confirm Delete' : 'Delete'}
            </button>
          )}
          {confirmDelete && (
            <button
              type="button"
              onClick={() => setConfirmDelete(false)}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Cancel
            </button>
          )}
          <button
            form="article-form"
            type="submit"
            disabled={saving}
            className="flex items-center gap-2 bg-deep-navy text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a3a56] transition-colors disabled:opacity-60"
          >
            <Save className="w-4 h-4" />
            {saving ? 'Saving…' : 'Save Article'}
          </button>
        </div>
      </div>

      <form id="article-form" onSubmit={handleSave} className="max-w-6xl mx-auto px-6 py-8">
        {error && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mb-6">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* Main content */}
          <div className="space-y-5">
            {/* Title */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Title *</label>
              <input
                type="text"
                value={form.title}
                onChange={e => update('title', e.target.value)}
                required
                placeholder="Enter article title…"
                className="w-full text-xl font-heading font-semibold text-gray-900 border-0 outline-none placeholder-gray-300 resize-none"
              />
              {/* Slug */}
              <div className="mt-3 pt-3 border-t border-gray-100 flex items-center gap-2">
                <span className="text-xs text-gray-400">Slug:</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={e => update('slug', e.target.value)}
                  required
                  className="flex-1 text-xs text-deep-navy font-mono bg-gray-50 border border-gray-200 rounded px-2 py-1 outline-none focus:border-deep-navy"
                />
                <button
                  type="button"
                  onClick={() => setSlugLocked(!slugLocked)}
                  className="text-xs text-gray-400 hover:text-gray-600 flex items-center gap-1"
                >
                  {slugLocked ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  {slugLocked ? 'Unlock' : 'Auto'}
                </button>
              </div>
            </div>

            {/* Excerpt */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Excerpt *</label>
              <textarea
                value={form.excerpt}
                onChange={e => update('excerpt', e.target.value)}
                required
                rows={3}
                placeholder="A short summary shown in article cards and previews…"
                className="w-full text-sm text-gray-700 leading-relaxed border-0 outline-none placeholder-gray-300 resize-none"
              />
            </div>

            {/* Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-3">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Content *</label>
                <span className="text-xs text-gray-400">
                  Separate paragraphs with a blank line. Use • for bullet points. Short lines without periods become headings.
                </span>
              </div>
              <textarea
                value={form.content}
                onChange={e => update('content', e.target.value)}
                required
                rows={28}
                placeholder={`Introduction paragraph here.\n\nSecond paragraph here.\n\nSection Heading\n\nParagraph under heading.\n\n• Bullet point one\n• Bullet point two\n• Bullet point three`}
                className="w-full text-sm text-gray-700 leading-relaxed border border-gray-100 rounded-lg p-3 outline-none font-mono placeholder-gray-300 focus:border-deep-navy/30 resize-y"
              />
            </div>
          </div>

          {/* Sidebar metadata */}
          <div className="space-y-5">
            {/* Status */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Status</label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => update('is_published', false)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    !form.is_published
                      ? 'bg-gray-800 text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  Draft
                </button>
                <button
                  type="button"
                  onClick={() => update('is_published', true)}
                  className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    form.is_published
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                  }`}
                >
                  Published
                </button>
              </div>
              <div className="mt-3">
                <label className="block text-xs text-gray-500 mb-1">Publish Date</label>
                <input
                  type="date"
                  value={form.published_at}
                  onChange={e => update('published_at', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-deep-navy"
                />
              </div>
            </div>

            {/* Cover Image */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Cover Image URL</label>
              <input
                type="url"
                value={form.cover_image}
                onChange={e => update('cover_image', e.target.value)}
                placeholder="https://images.pexels.com/…"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-deep-navy mb-3"
              />
              {form.cover_image ? (
                <img src={form.cover_image} alt="Cover preview" className="w-full aspect-video object-cover rounded-lg" />
              ) : (
                <div className="w-full aspect-video bg-gray-100 rounded-lg flex flex-col items-center justify-center gap-2">
                  <ImageIcon className="w-8 h-8 text-gray-300" />
                  <span className="text-xs text-gray-400">Paste an image URL above</span>
                </div>
              )}
            </div>

            {/* Category */}
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Category *</label>
              <select
                value={form.category}
                onChange={e => update('category', e.target.value)}
                required
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-deep-navy"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Author + Read Time */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Author</label>
                <input
                  type="text"
                  value={form.author}
                  onChange={e => update('author', e.target.value)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-deep-navy"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Read Time</label>
                <input
                  type="text"
                  value={form.read_time}
                  onChange={e => update('read_time', e.target.value)}
                  placeholder="5 min read"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-deep-navy"
                />
              </div>
            </div>

            {/* Preview link */}
            {mode === 'edit' && form.is_published && (
              <a
                href={`/insights/${form.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 border border-deep-navy/20 rounded-xl text-sm font-semibold text-deep-navy hover:bg-deep-navy/5 transition-colors"
              >
                <Eye className="w-4 h-4" />
                View Live Article
              </a>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}
