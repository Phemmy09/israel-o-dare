import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Consulting & Services | Israel Dare',
  description:
    'AI strategy, bespoke autonomous applications, enterprise workflow automation, and spatial systems engineering by Israel Dare.',
}

export default function ServicesPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36">
      <ServicesClient />
    </div>
  )
}
