import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Calendar, Tag, ArrowRight } from 'lucide-react'
import { getBlogPosts } from '@/lib/blog'
import Logo from '@/components/Logo'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) return { title: 'Essay Not Found | Israel Dare' }

  return {
    title: `${post.title} | Israel Dare Journal`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['Israel Dare'],
      images: post.image ? [{ url: post.image }] : [{ url: '/images/editorial/israel-boardroom-executive.jpg' }],
    },
  }
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <article className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans selection:bg-gold-500 selection:text-noir-950">
      <div className="max-w-[720px] mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white uppercase tracking-widest mb-10 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal Index
        </Link>

        {/* Article Masthead */}
        <header className="space-y-6 pb-10 border-b border-white/[0.08]">
          <div className="flex items-center gap-4 font-mono text-xs text-zinc-400">
            <span className="text-gold-400 uppercase tracking-widest font-semibold">
              {post.category}
            </span>
            <span>·</span>
            <span>{post.date}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.05] font-normal">
            {post.title}
          </h1>

          <p className="font-serif text-lg sm:text-xl text-parchment-200 italic font-light leading-relaxed">
            {post.summary}
          </p>

          {/* Author Badge */}
          <div className="pt-6 flex items-center justify-between font-mono text-xs text-zinc-400 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 bg-black border border-white/20 overflow-hidden">
                <Image
                  src="/images/editorial/israel-boardroom-executive.jpg"
                  alt="Israel Dare"
                  fill
                  className="object-cover object-top filter contrast-105"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="font-sans font-bold text-white uppercase text-[11px]">Israel Dare</p>
                <p className="font-mono text-[9px] text-gold-400">AI Consultant & Systems Architect</p>
              </div>
            </div>
            <span className="text-[10px] text-zinc-500">ISRAELDARE.COM</span>
          </div>
        </header>

        {/* Article Body Content */}
        <div
          className="prose prose-invert prose-zinc max-w-none pt-8 font-sans font-light leading-relaxed text-parchment-200
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-white prose-headings:tracking-tight
          prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/[0.08] prose-h2:pb-3
          prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
          prose-blockquote:font-serif prose-blockquote:text-xl sm:prose-blockquote:text-2xl prose-blockquote:italic prose-blockquote:border-l-2 prose-blockquote:border-gold-500 prose-blockquote:pl-6 prose-blockquote:text-white prose-blockquote:my-8
          prose-strong:text-white prose-strong:font-medium
          prose-ul:space-y-2 prose-li:text-parchment-300
          prose-code:font-mono prose-code:text-gold-400 prose-code:bg-noir-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:border prose-code:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer & Colophon */}
        <footer className="mt-16 pt-12 border-t border-white/[0.08] space-y-8">
          <div className="p-8 bg-noir-900/60 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="font-serif text-xl text-white">Initiate a Systems Engagement</p>
              <p className="text-xs text-parchment-300 font-light max-w-md">
                Discuss autonomous systems architecture, workflow automation clusters, or enterprise AI advisory directly with Israel Dare.
              </p>
            </div>
            <Link href="/contact" className="btn-luxury-gold shrink-0 text-xs">
              Work With Me <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex items-center justify-between pt-4 font-mono text-xs">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-white uppercase tracking-wider"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Return to Index
            </Link>
            <Link
              href="/credentials"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-white uppercase tracking-wider"
            >
              Examine Credentials <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
