import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'Biography & Narrative | ISRAEL DARE',
  description:
    'From final year family adversity to Top Rated Plus on Upwork (Top 3% worldwide) and First Class Honours in Engineering. The personal, professional, and academic biography of Israel Dare.',
}

export default function AboutPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36">
      <AboutClient />
    </div>
  )
}
