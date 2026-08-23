import type { Metadata } from 'next'
import { getBlogPosts, getMemos } from '@/lib/blog'
import JournalClient from './JournalClient'

export const metadata: Metadata = {
  title: 'Journal, Thoughts & Dispatches | ISRAEL DARE',
  description:
    'Long-form technical essays, philosophical reflections, and short-form intellectual memos on autonomous drone photogrammetry, Gaussian Process models, and systems engineering by Israel Dare.',
}

export default function JournalPage() {
  const posts = getBlogPosts()
  const memos = getMemos()

  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 font-sans">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            THE ISRAEL DARE SALON
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Journal, Thoughts &amp; <span className="italic font-light">Dispatches</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            A living record of intellectual output: rigorous technical essays on spatial robotics and bio-thermodynamics, paired with real-time short-form memos on systems and philosophy.
          </p>
        </div>
      </section>

      {/* Main Interactive Journal Client */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <JournalClient posts={posts} memos={memos} />
      </section>
    </div>
  )
}
