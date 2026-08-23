import type { Metadata } from 'next'
import ProjectsClient from './ProjectsClient'

export const metadata: Metadata = {
  title: 'Systems Portfolio & Live Builds | ISRAEL DARE',
  description:
    'Explore production-grade AI systems, autonomous drone photogrammetry integrations, n8n automations, and spatial engineering models engineered by Israel Dare.',
}

export default function ProjectsPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 font-sans">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            ENGINEERING ARCHIVE
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Systems &amp; <span className="italic font-light">Deployments</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            A comprehensive catalog of autonomous AI applications, spatial point cloud pipelines, n8n databases, and academic models.
          </p>
        </div>
      </section>

      {/* Projects Client Component */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <ProjectsClient />
      </section>
    </div>
  )
}
