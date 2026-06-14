import { getBlogPosts } from '@/lib/blog'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ChevronLeft, Rss } from 'lucide-react'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Israel O. Dare`,
    description: post.summary,
  }
}

export async function generateStaticParams() {
  const posts = getBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const posts = getBlogPosts()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="glow-blob top-[20%] left-[10%] bg-red-600/10" />
      <div className="glow-blob top-[60%] right-[10%] bg-red-500/15" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-neutral-400 hover:text-white text-xs uppercase tracking-wider font-bold mb-8 transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Blogs
        </Link>

        {/* Article Header */}
        <article className="glass-panel border border-neutral-800/80 p-8 sm:p-12 rounded-3xl shadow-glow relative overflow-hidden bg-neutral-950/40">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-neutral-500 text-sm flex items-center gap-1.5 font-light">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-8 tracking-tight">
            {post.title}
          </h1>

          {/* Optional Cover Image */}
          {post.image && (
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800/80 mb-10 shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
          )}

          {/* Article HTML Content */}
          <div
            className="prose prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Article Footer CTA */}
        <div className="mt-12 p-8 bg-neutral-950/20 border border-neutral-900 rounded-3xl text-center">
          <h3 className="text-white font-bold text-lg mb-2">Want to receive these logs directly?</h3>
          <p className="text-neutral-400 text-sm mb-6 font-light">
            I write daily about automation pipelines, database constraints, and agricultural models.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold"
          >
            Connect / Collaborate <Rss className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
