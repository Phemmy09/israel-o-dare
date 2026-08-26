import type { Metadata } from 'next'
import { getBlogPosts } from '@/lib/blog'
import JournalClient from './JournalClient'

export const metadata: Metadata = {
  title: 'Journal & Essays | Israel Dare',
  description:
    'Essays, architectural case stories, and philosophical dispatches on artificial intelligence, physical computing, and engineering by Israel Dare.',
}

export default function JournalPage() {
  const posts = getBlogPosts()

  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36 font-sans selection:bg-gold-500 selection:text-noir-950">
      <JournalClient posts={posts} />
    </div>
  )
}
