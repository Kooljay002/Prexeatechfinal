'use client';

import { useState } from 'react';
import { Share2, Mail, Download, Link2, Check } from 'lucide-react';

interface Props {
  title: string;
  slug: string;
  content?: string;
  compact?: boolean;
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function ShareButtons({ title, slug, content, compact = false }: Props) {
  const [copied, setCopied] = useState(false);

  const url = typeof window !== 'undefined'
    ? `${window.location.origin}/insights/${slug}`
    : `/insights/${slug}`;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  };

  const downloadArticle = () => {
    if (!content) return;
    const text = `${title}\n${'='.repeat(title.length)}\n\n${content}`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `${slug}.txt`;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  if (compact) {
    return (
      <div className="flex items-center gap-1.5">
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <Share2 className="w-3 h-3" /> Share:
        </span>
        <a
          href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center transition-colors"
          title="Share on WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <a
          href={`mailto:?subject=${encodedTitle}&body=Read%20this%20article%3A%20${encodedUrl}`}
          className="w-7 h-7 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
          title="Share by Email"
        >
          <Mail className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={copyLink}
          className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
            copied ? 'bg-green-500 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-600'
          }`}
          title={copied ? 'Copied!' : 'Copy link'}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Link2 className="w-3.5 h-3.5" />}
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-gray-500 flex items-center gap-1.5">
        <Share2 className="w-4 h-4" /> Share this article:
      </span>

      <a
        href={`https://wa.me/?text=${encodedTitle}%20${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        <WhatsAppIcon />
        WhatsApp
      </a>

      <a
        href={`mailto:?subject=${encodedTitle}&body=I thought you might find this article interesting%3A%0A%0A${encodedTitle}%0A${encodedUrl}`}
        className="flex items-center gap-2 bg-gray-700 hover:bg-gray-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
      >
        <Mail className="w-4 h-4" />
        Email
      </a>

      <button
        onClick={copyLink}
        className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
          copied
            ? 'bg-green-100 text-green-700 border border-green-200'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200'
        }`}
      >
        {copied ? <Check className="w-4 h-4" /> : <Link2 className="w-4 h-4" />}
        {copied ? 'Copied!' : 'Copy Link'}
      </button>

      {content && (
        <button
          onClick={downloadArticle}
          className="flex items-center gap-2 bg-deep-navy hover:bg-[#1a3a56] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Download className="w-4 h-4" />
          Download
        </button>
      )}
    </div>
  );
}
