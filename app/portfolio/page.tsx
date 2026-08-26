import type { Metadata } from 'next'
import ProjectsClient from '../projects/ProjectsClient'

export const metadata: Metadata = {
  title: 'Portfolio & Case Studies | Israel Dare',
  description:
    'Documented case studies and technical architectures for enterprise AI systems, autonomous n8n workflows, and spatial computing by Israel Dare.',
}

export default function PortfolioPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36">
      <ProjectsClient />
    </div>
  )
}
