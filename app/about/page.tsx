import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About & Narrative Essay | Israel Dare',
  description:
    'The personal story, engineering philosophy, and intellectual journey of Israel Dare. AI consultant, systems architect, and First Class engineer.',
}

export default function AboutPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36">
      <AboutClient />
    </div>
  )
}
