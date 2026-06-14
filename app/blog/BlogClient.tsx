'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Calendar, ChevronRight, BookOpen, Rss } from 'lucide-react'
import type { BlogPost } from '@/lib/markdown'

interface BlogClientProps {
  initialPosts: BlogPost[]
}

const CATEGORIES = ['All', 'Journey', 'Research', 'General']

export default function BlogClient({ initialPosts }: BlogClientProps) {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = initialPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.summary.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Search & Categories Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
        {/* Category Chips */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-red-600 border-red-500/20 text-white shadow-md shadow-red-900/20'
                  : 'bg-neutral-900/40 border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative max-w-md w-full md:w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search daily blogs..."
            className="w-full bg-neutral-900/60 border border-neutral-800 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500/50 transition-colors"
          />
          <Search className="w-4 h-4 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Blog Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-20 bg-neutral-950/20 border border-neutral-900 rounded-3xl p-8">
          <BookOpen className="w-10 h-10 text-neutral-700 mx-auto mb-4" />
          <p className="text-neutral-500 text-sm">No blog posts match your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-neutral-950/40 border border-neutral-800/80 hover:border-red-500/35 rounded-3xl overflow-hidden flex flex-col justify-between hover:-translate-y-1 transition-all duration-300 shadow-md card-hover"
            >
              <div>
                {/* Header Image */}
                {post.image ? (
                  <div className="relative h-48 w-full bg-neutral-900 border-b border-neutral-900">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-103 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-gradient-to-br from-red-950/20 to-neutral-900 flex items-center justify-center border-b border-neutral-900">
                    <Rss className="w-10 h-10 text-red-500/10" />
                  </div>
                )}

                <div className="p-6">
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2 py-0.5 bg-red-950/20 border border-red-500/20 rounded-md text-[10px] text-red-400 font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="text-neutral-500 text-xs flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug tracking-wide group-hover:text-red-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-neutral-400 text-sm font-light leading-relaxed line-clamp-3">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 mt-4 border-t border-neutral-900/60 flex items-center justify-between">
                <span className="text-red-400 text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Read Article <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
