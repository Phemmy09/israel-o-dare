'use client'

import { useState, useEffect } from 'react'
import { ExternalLink, Clock, RefreshCw, Rss, Bot, Cpu, TrendingUp } from 'lucide-react'
import type { NewsItem } from '@/app/api/news/route'

type Category = 'All' | 'AI' | 'Tech' | 'Entrepreneur'
const CATEGORIES: Category[] = ['All', 'AI', 'Tech', 'Entrepreneur']

const catStyles: Record<string, string> = {
  AI: 'bg-black text-red-400 border-white/10',
  Tech: 'bg-black text-blue-400 border-white/10',
  Entrepreneur: 'bg-black text-zinc-300 border-white/10',
}

const catIcons: Record<string, React.ElementType> = {
  AI: Bot,
  Tech: Cpu,
  Entrepreneur: TrendingUp,
}

function timeAgo(dateStr: string): string {
  try {
    const diff = (Date.now() - new Date(dateStr).getTime()) / 1000
    if (diff < 60) return 'just now'
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`
    if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`
    return `${Math.floor(diff / 86400)}d ago`
  } catch {
    return ''
  }
}

function NewsCard({ item }: { item: NewsItem }) {
  const CatIcon = catIcons[item.category] ?? Rss
  const [imgError, setImgError] = useState(false)
  const showImage = item.image && !imgError

  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-noir-900 border border-white/[0.08] hover:border-white/30 transition-all duration-300"
    >
      {/* Image / Header */}
      <div className="relative h-44 overflow-hidden bg-black">
        {showImage ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={item.image}
            alt={item.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-noir-950 flex items-center justify-center border-b border-white/[0.06]">
            <CatIcon className="w-8 h-8 text-zinc-700" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        {/* Category badge */}
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider border backdrop-blur-sm ${
            catStyles[item.category] ?? 'bg-black text-zinc-300 border-white/10'
          }`}
        >
          <CatIcon className="w-3 h-3 text-red-500" />
          {item.category}
        </span>

        {/* Time */}
        <span className="absolute top-3 right-3 text-zinc-400 font-mono text-[9px] flex items-center gap-1 bg-black/80 px-2 py-0.5 border border-white/10">
          <Clock className="w-2.5 h-2.5" />
          {timeAgo(item.pubDate)}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 space-y-4">
        <h3 className="font-serif text-lg text-white group-hover:text-zinc-100 transition-colors line-clamp-2 leading-snug">
          {item.title}
        </h3>
        {item.summary && (
          <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed line-clamp-2 flex-1">
            {item.summary}
          </p>
        )}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px]">
          <span className="text-zinc-500">{item.source}</span>
          <span className="text-white group-hover:text-red-400 transition-colors flex items-center gap-1">
            Read Signal <ExternalLink className="w-3 h-3" />
          </span>
        </div>
      </div>
    </a>
  )
}

export default function NewsClient() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedCat, setSelectedCat] = useState<Category>('All')
  const [lastRefreshed, setLastRefreshed] = useState<Date | null>(null)

  const fetchNews = async () => {
    setLoading(true)
    setError(false)
    try {
      const res = await fetch('/api/news')
      if (!res.ok) throw new Error('Fetch failed')
      const data: NewsItem[] = await res.json()
      setItems(data)
      setLastRefreshed(new Date())
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNews()
  }, [])

  const filtered =
    selectedCat === 'All' ? items : items.filter((item) => item.category === selectedCat)

  return (
    <div className="space-y-12">
      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                selectedCat === cat
                  ? 'bg-white text-black font-bold'
                  : 'bg-noir-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Refresh button */}
        <div className="flex items-center gap-4 font-mono text-xs text-zinc-500">
          {lastRefreshed && (
            <span>
              SYNCED {lastRefreshed.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          )}
          <button
            onClick={fetchNews}
            disabled={loading}
            className="p-2 bg-noir-900 border border-white/10 text-zinc-400 hover:text-white transition-colors disabled:opacity-50"
            title="Refresh Feed"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-red-500' : ''}`} />
          </button>
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-noir-900 border border-white/[0.08] h-72 animate-pulse" />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-24 bg-noir-900 border border-white/[0.08] p-8 space-y-4">
          <p className="font-serif text-xl text-white">Live Feed Temporarily Unavailable</p>
          <p className="font-sans text-xs text-zinc-400">Could not retrieve live RSS signals.</p>
          <button onClick={fetchNews} className="btn-luxury text-xs py-2 px-4">
            Retry Connection
          </button>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-24 bg-noir-900 border border-white/[0.08] p-8">
          <p className="font-sans text-sm text-zinc-400">No signals found in this category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}
