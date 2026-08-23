'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BookOpen, MessageSquare, Tag, Search } from 'lucide-react'
import type { BlogPost } from '@/lib/markdown'
import type { Memo } from '@/lib/memos'

interface JournalClientProps {
  posts: BlogPost[]
  memos: Memo[]
}

const TABS = ['All Entries', 'Long-Form Essays', 'Short Memos'] as const
type Tab = (typeof TABS)[number]

export default function JournalClient({ posts, memos }: JournalClientProps) {
  const [currentTab, setCurrentTab] = useState<Tab>('All Entries')
  const [query, setQuery] = useState('')

  const filteredPosts = posts.filter(
    (p) =>
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  )

  const filteredMemos = memos.filter(
    (m) =>
      !query ||
      m.content.toLowerCase().includes(query.toLowerCase()) ||
      m.category.toLowerCase().includes(query.toLowerCase()) ||
      m.tags?.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="space-y-12">
      {/* Control Bar: Tabs & Search */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                currentTab === tab
                  ? 'bg-white text-black font-bold'
                  : 'bg-noir-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search essays & memos..."
            className="w-full bg-noir-900 border border-white/10 pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors font-sans"
          />
        </div>
      </div>

      {/* 1. LONG-FORM ESSAYS SECTION */}
      {(currentTab === 'All Entries' || currentTab === 'Long-Form Essays') && (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-500 font-semibold">
              LONG-FORM ESSAYS &amp; PUBLICATIONS
            </p>
            <span className="font-mono text-[10px] text-zinc-500">
              {filteredPosts.length} ESSAYS
            </span>
          </div>

          <div className="space-y-6">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-noir-900 border border-white/[0.08] p-8 sm:p-10 hover:border-white/30 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-9 space-y-4">
                    <div className="flex items-center gap-4 font-mono text-[10px] text-zinc-400">
                      <span className="text-red-500 font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span>·</span>
                      <span>{post.date}</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white group-hover:text-zinc-100 leading-tight">
                      <Link href={`/journal/${post.slug}`} className="hover:underline decoration-red-600 decoration-1 underline-offset-4">
                        {post.title}
                      </Link>
                    </h2>

                    <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed max-w-3xl">
                      {post.summary}
                    </p>

                    <div className="pt-4">
                      <Link
                        href={`/journal/${post.slug}`}
                        className="inline-flex items-center gap-2 font-mono text-xs text-white uppercase tracking-widest group-hover:translate-x-1 transition-transform"
                      >
                        Read Publication <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                      </Link>
                    </div>
                  </div>

                  {post.image && (
                    <div className="lg:col-span-3 relative aspect-[4/3] w-full bg-black border border-white/10 overflow-hidden hidden sm:block">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                        sizes="(max-width: 1024px) 100vw, 300px"
                      />
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* 2. SHORT MEMOS & TWEETS SECTION */}
      {(currentTab === 'All Entries' || currentTab === 'Short Memos') && (
        <div className="space-y-8 pt-8">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-500 font-semibold">
              INTELLECTUAL DISPATCHES &amp; SHORT MEMOS
            </p>
            <span className="font-mono text-[10px] text-zinc-500">
              {filteredMemos.length} DISPATCHES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMemos.map((memo) => (
              <div
                key={memo.id}
                className="bg-noir-900 border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
                    <span className="text-red-500 font-bold uppercase tracking-wider">
                      {memo.category}
                    </span>
                    <span>{memo.date}</span>
                  </div>

                  <p className="font-sans text-sm text-zinc-200 font-light leading-relaxed">
                    "{memo.content}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2 font-mono text-[9px] text-zinc-400">
                  {memo.tags?.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
