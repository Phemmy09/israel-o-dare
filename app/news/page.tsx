import type { Metadata } from 'next'
import NewsClient from './NewsClient'

export const metadata: Metadata = {
  title: 'Global Intelligence & Tech Feed | ISRAEL DARE',
  description:
    'Curated real-time intelligence feeds on Artificial Intelligence, Aerospace, Spatial Computing, and Engineering breakthroughs.',
}

export default function NewsPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse-subtle" />
            <span className="text-white font-semibold uppercase tracking-widest">
              LIVE RSS DISPATCH · SYNCHRONIZED HOURLY
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Global <span className="italic font-light">Intelligence</span> &amp; Technology Signals
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            Real-time industry feeds aggregating breakthrough developments in autonomous AI, robotics, aerospace telemetry, and venture engineering.
          </p>
        </div>
      </section>

      {/* News Feed */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <NewsClient />
      </section>
    </div>
  )
}
