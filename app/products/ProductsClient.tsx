'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, CheckCircle2, Download, ExternalLink, ArrowRight } from 'lucide-react'
import type { Product } from '@/lib/products'

const FILTERS = ['All', 'eBook', 'Audio', 'Template'] as const
type Filter = (typeof FILTERS)[number]

export default function ProductsClient({ products }: { products: Product[] }) {
  const [filter, setFilter] = useState<Filter>('All')
  const [query, setQuery] = useState('')

  const visible = products.filter((p) => {
    const matchesFilter = filter === 'All' || p.type === filter
    const matchesSearch =
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-12">
      {/* Filters & Search Control Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                filter === f
                  ? 'bg-white text-black font-bold'
                  : 'bg-noir-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {f === 'All' ? 'All Systems' : f + 's'}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search IP & products..."
            className="w-full bg-noir-900 border border-white/10 pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors font-sans"
          />
        </div>
      </div>

      {/* Products Grid */}
      {visible.length === 0 ? (
        <div className="text-center py-24 space-y-4">
          <p className="font-serif text-2xl text-zinc-400">No items match your criteria.</p>
          <button
            onClick={() => {
              setFilter('All')
              setQuery('')
            }}
            className="font-mono text-xs text-red-500 uppercase tracking-widest hover:underline"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((p) => (
            <div
              key={p.id}
              className="bg-noir-900 border border-white/[0.08] p-8 sm:p-10 space-y-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-black border border-white/10 text-red-400">
                    {p.badge || p.type}
                  </span>
                  <span className="font-mono text-sm font-bold text-white">
                    {p.price === 'Free' ? 'COMPLIMENTARY' : `$${p.price.toFixed(2)}`}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-zinc-100">
                    {p.title}
                  </h3>
                  <p className="font-mono text-[11px] text-zinc-400">{p.subtitle}</p>
                </div>

                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {p.description}
                </p>

                {/* Features List */}
                <div className="space-y-2.5 pt-4">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-xs text-zinc-400 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] text-zinc-500">{p.format}</span>
                {p.price === 'Free' ? (
                  <a
                    href={p.downloadUrl || '#'}
                    download
                    className="btn-luxury text-[10px] py-2.5 px-5 inline-flex items-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" /> Direct Download
                  </a>
                ) : (
                  <a
                    href={p.whopCheckoutUrl || 'https://whop.com'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-carmine text-[10px] py-2.5 px-5 inline-flex items-center gap-2"
                  >
                    Acquire Access <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
