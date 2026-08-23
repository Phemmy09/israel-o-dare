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

  if (!post) return { title: 'Publication Not Found | ISRAEL DARE' }

  return {
    title: `${post.title} | ISRAEL DARE`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      authors: ['Israel Dare'],
      images: post.image ? [{ url: post.image }] : undefined,
    },
  }
}

export default async function JournalArticlePage({ params }: Props) {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) notFound()

  return (
    <article className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        {/* Back Link */}
        <Link
          href="/journal"
          className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white uppercase tracking-widest mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Journal &amp; Dispatches
        </Link>

        {/* Article Masthead */}
        <header className="space-y-6 pb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-4 font-mono text-xs text-zinc-400">
            <span className="text-red-500 font-bold uppercase tracking-wider px-2.5 py-1 bg-black border border-white/10">
              {post.category}
            </span>
            <span>·</span>
            <span>Published {post.date}</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[1.02] font-normal">
            {post.title}
          </h1>

          <p className="font-serif text-xl sm:text-2xl text-zinc-300 italic font-light leading-relaxed">
            {post.summary}
          </p>

          {/* Author Badge */}
          <div className="pt-6 flex items-center justify-between font-mono text-xs text-zinc-400 border-t border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 bg-black border border-white/20 overflow-hidden">
                <Image
                  src="/images/Izzy.jpg"
                  alt="Israel Dare"
                  fill
                  className="object-cover object-top filter grayscale"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="font-sans font-bold text-white uppercase text-[11px]">Israel Dare</p>
                <p className="font-mono text-[9px] text-red-500">Chief Systems Architect</p>
              </div>
            </div>
            <span>ISRAEL DARE SALON</span>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="my-12 relative aspect-[16/9] w-full bg-black border border-white/10 overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover filter grayscale contrast-110"
              priority
              sizes="(max-width: 1024px) 100vw, 900px"
            />
          </div>
        )}

        {/* Article Body Content */}
        <div
          className="prose prose-invert prose-zinc max-w-none pt-6 font-sans font-light leading-relaxed text-zinc-300
          prose-headings:font-serif prose-headings:font-normal prose-headings:text-white prose-headings:tracking-tight
          prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-white/[0.08] prose-h2:pb-3
          prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
          prose-blockquote:font-serif prose-blockquote:text-xl prose-blockquote:italic prose-blockquote:border-l-2 prose-blockquote:border-red-600 prose-blockquote:pl-6 prose-blockquote:text-zinc-200
          prose-strong:text-white prose-strong:font-bold
          prose-ul:space-y-2 prose-li:text-zinc-300
          prose-code:font-mono prose-code:text-red-400 prose-code:bg-noir-900 prose-code:px-1.5 prose-code:py-0.5 prose-code:border prose-code:border-white/10"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Article Footer & Colophon */}
        <footer className="mt-16 pt-12 border-t border-white/[0.08] space-y-8">
          <div className="p-8 bg-noir-900 border border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <p className="font-sans font-bold text-base text-white">Have a Project or Research Collaboration?</p>
              <p className="font-sans text-xs text-zinc-400 font-light">
                Discuss autonomous systems, drone photogrammetry pipelines, or enterprise AI architectures directly with Israel Dare.
              </p>
            </div>
            <Link href="/contact" className="btn-luxury shrink-0">
              Initiate Inquiry ↗
            </Link>
          </div>

          <div className="flex items-center justify-between pt-4">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-white uppercase tracking-wider"
            >
              <ArrowLeft className="w-4 h-4" /> Return to Index
            </Link>
            <Link
              href="/research"
              className="inline-flex items-center gap-2 font-mono text-xs text-red-400 hover:text-white uppercase tracking-wider"
            >
              Explore Academic Research <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </footer>
      </div>
    </article>
  )
}
