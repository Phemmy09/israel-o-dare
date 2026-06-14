import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/blog'
import BlogClient from './BlogClient'
import { Rss } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Daily Blog & Insights | Israel O. Dare',
  description: 'Daily writings, tech analysis, systems thinking insights, and agricultural engineering research logs by Israel O. Dare.',
}

export default function BlogPage() {
  const posts = getBlogPosts()

  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="glow-blob top-[15%] right-[10%] bg-red-600/10" />
      <div className="glow-blob top-[55%] left-[5%] bg-red-500/15" />

      {/* Hero */}
      <section className="bg-black/40 pt-20 pb-12 px-4 border-b border-neutral-900 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-950/20 border border-red-500/20 rounded-full text-red-400 text-xs font-semibold tracking-wider mb-6">
            <Rss className="w-3.5 h-3.5" />
            Israel's Daily Logs
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Daily <span className="text-red-500 text-glow">Blogs</span> &amp; Insights
          </h1>
          <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            I write regularly about system automation, web engineering issues, and post-harvest agricultural modeling.
          </p>
        </div>
      </section>

      {/* Blog Feed list */}
      <section className="relative z-10">
        <BlogClient initialPosts={posts} />
      </section>
    </div>
  )
}
