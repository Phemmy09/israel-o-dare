import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'
import { Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Project Portfolio & Live Builds | Israel O. Dare',
  description: 'Explore at least 50 production-grade AI systems, n8n automations, academic biotechnology models, and outreach scripts built by Israel O. Dare.',
}

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="glow-blob top-[15%] right-[10%] bg-red-600/10" />
      <div className="glow-blob top-[55%] left-[5%] bg-red-500/15" />

      {/* Hero */}
      <section className="bg-black/40 pt-20 pb-12 px-4 border-b border-neutral-900 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Live Systems &amp; Local Scripts</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Project <span className="text-red-500 text-glow">Portfolio</span>
          </h1>
          <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            An extensive catalog of 50 AI applications, custom web portals, n8n databases, academic proposals, and automation tools compiled directly from my machine directories.
          </p>
        </div>
      </section>

      {/* Interactive Projects Component */}
      <section className="relative z-10">
        <ProjectsClient />
      </section>

      {/* Outreach CTA */}
      <section className="py-20 px-4 border-t border-neutral-900 bg-black text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Need a Custom System Engineered?</h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto mb-8 font-light">
            I specialize in designing transaction-safe schemas, low-latency API architectures, and automated cron pipelines tailored to hard operational challenges.
          </p>
          <a
            href="https://Calendly.com/izzy-marketing-hub/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold"
          >
            Book Technical Consultation <Calendar className="w-4.5 h-4.5" />
          </a>
        </div>
      </section>
    </div>
  )
}
