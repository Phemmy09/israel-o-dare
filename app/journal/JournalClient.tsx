'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Search, Mail, CheckCircle2 } from 'lucide-react'
import type { BlogPost } from '@/lib/markdown'

interface JournalClientProps {
  posts: BlogPost[]
}

const NEWSLETTER_WEBHOOK =
  process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK ||
  'https://n8n-digitalmavericks-u48043.vm.elestio.app/webhook/d4aa2064-907b-443b-a094-d2f6277e8cde'

export default function JournalClient({ posts }: JournalClientProps) {
  const [query, setQuery] = useState('')
  const [email, setEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const filteredPosts = posts.filter(
    (p) =>
      !query ||
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.summary.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase())
  )

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setNewsletterStatus('loading')
    try {
      const res = await fetch(NEWSLETTER_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Israel Dare Journal Page Dispatch' }),
      })
      if (res.ok) {
        setNewsletterStatus('success')
        setEmail('')
      } else {
        setNewsletterStatus('error')
      }
    } catch {
      setNewsletterStatus('error')
    }
  }

  return (
    <div className="font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. EDITORIAL HEADER & FEATURED PIECE */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="space-y-6 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Essays, Notes & Dispatches
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.95]">
            The Journal
          </h1>
          <p className="text-lg sm:text-xl text-parchment-200 font-light leading-relaxed">
            A long-form intellectual record on autonomous systems architecture, machine learning frontiers, engineering discipline, and spatial intelligence.
          </p>
        </div>

        {/* Featured Editorial Piece with Israel at Observatory */}
        <div className="pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 bg-noir-900/60 p-6 sm:p-8">
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-white/10 bg-noir-950">
              <Image
                src="/images/editorial/israel-observatory-cosmos.jpg"
                alt="Israel Dare at Observatory under the Cosmos"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-[center_top] pt-0.5 filter contrast-[1.02]"
              />
              <div className="absolute bottom-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[9px] text-gold-400">
                FEATURED ESSAY // MMXXVI
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Core Editorial
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                On Deterministic Execution in Non-Deterministic AI Architectures
              </h2>
              <p className="text-sm text-parchment-300 font-light leading-relaxed">
                Why modern enterprise software must treat large language models as probabilistic compute layers wrapped in strict deterministic validation harnesses rather than autonomous black boxes.
              </p>
              <div className="pt-2">
                <Link
                  href="/journal/autonomous-aerial-photogrammetry-spatial-twins"
                  className="btn-luxury-gold text-xs"
                >
                  Read Featured Essay <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MINIMAL LIST VIEW */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20">
        <div className="space-y-12">
          {/* Search bar */}
          <div className="flex items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <span className="font-mono text-xs text-gold-400 uppercase tracking-widest">
              Index of Writings ({filteredPosts.length})
            </span>
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-500" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search essays by title or keyword..."
                className="w-full bg-noir-900 border border-white/10 pl-9 pr-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 transition-colors font-mono"
              />
            </div>
          </div>

          {/* Minimalist List of Essays */}
          <div className="space-y-12">
            {filteredPosts.map((post) => (
              <article
                key={post.slug}
                className="group border-b border-white/[0.08] pb-10 space-y-3"
              >
                <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span className="text-gold-400 uppercase">{post.category}</span>
                  <span>{post.date}</span>
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-gold-300 transition-colors leading-snug">
                  <Link href={`/journal/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-parchment-300 font-light leading-relaxed max-w-2xl">
                  {post.summary}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/journal/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-zinc-400 group-hover:text-white uppercase tracking-widest transition-colors"
                  >
                    Read Essay <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. QUIET NEWSLETTER DISPATCH BLOCK */}
      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-16 mb-20 border border-white/[0.08] bg-noir-900/40 text-center space-y-6">
        <div className="space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
            Private Substack / Dispatch
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-white">
            Receive Private Architectural Memos
          </h3>
          <p className="text-xs sm:text-sm text-parchment-300 font-light max-w-md mx-auto leading-relaxed">
            Periodic dispatches on high-concurrency software, spatial digital twins, and autonomous AI systems. No spam, ever.
          </p>
        </div>

        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your work email address"
            required
            className="flex-1 bg-noir-950 border border-white/10 px-4 py-2.5 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-400 font-mono"
          />
          <button
            type="submit"
            disabled={newsletterStatus === 'loading'}
            className="btn-luxury-gold text-xs px-5 py-2.5"
          >
            {newsletterStatus === 'loading' ? '...' : 'Subscribe'}
          </button>
        </form>

        {newsletterStatus === 'success' && (
          <p className="font-mono text-xs text-green-400">✓ You are enrolled in the private dispatch.</p>
        )}
      </section>
    </div>
  )
}
