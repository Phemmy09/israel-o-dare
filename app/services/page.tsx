import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = {
  title: 'Autonomous Systems, Voice AI & Revenue Infrastructure Services | Israel Oluwafemi Dare',
  description:
    'Bespoke AI voice agents (Vapi, ElevenLabs), GoHighLevel CRM infrastructure, deterministic document extraction (Roof Auto), institutional RAG copilots, and certified AI Red Teaming by Israel Dare (Upwork Top Rated Plus).',
  keywords: [
    // Core Identity & Aliases
    'Israel Dare', 'Israel Oluwafemi Dare', 'Dare Israel O', 'IzzyTech Hub', 'Upwork Top Rated Plus AI Engineer',
    // Core Disciplines & Pain Points
    'AI voice agents for solar companies', 'inbound lead qualification automation', 'Vapi voice telephony', 'ElevenLabs conversational AI',
    'GoHighLevel automation consultant', 'GHL pipeline architecture', 'CRM lead leakage fix', 'Zoho CRM API integration',
    'HubSpot enterprise workflows', 'n8n self-hosted workflow automation', 'Make.com webhook clusters', 'deterministic webhooks',
    'commercial roofing contract parsing', 'automated PDF scope extraction', 'construction estimation AI', 'EagleView PDF to material order',
    'university admissions RAG bot', 'retrieval augmented generation without hallucination', 'Supabase pgvector enterprise search',
    'Microsoft certified AI red teamer', 'prompt injection defense', 'LLM security audit', 'Securiti.ai governance',
    'cold outbound deliverability engineering', 'appointment booking AI', 'full stack Next.js 15 AI web app', 'Python FastAPI asynchronous backend',
    'spatial intelligence digital twin', 'drone photogrammetry crop decay forecasting', 'Gaussian process regression agricultural modeling',
    // Problem/Solution Triggers
    'how to stop leads leaking in CRM', 'automate high ticket sales calls', 'replace human SDR with voice AI', 'extract bill of materials from PDF blueprint',
    'sub-5-second institutional admissions AI', 'fractional CTO for AI automation', 'Upwork top 3 percent AI builder'
  ],
  openGraph: {
    title: 'Autonomous Systems & Revenue Infrastructure Services | Israel Dare',
    description:
      'I build systems that make businesses print money while you sleep. Production-ready AI voice agents, GoHighLevel automation, document extraction, and red-teamed security.',
    url: 'https://israeldare.com/services',
    siteName: 'Israel Dare',
    type: 'website',
    images: [
      {
        url: '/images/services/voice-ai-telephony.jpg',
        width: 1200,
        height: 630,
        alt: 'Israel Dare — AI Systems Architect & Revenue Infrastructure Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services & Architecture | Israel Oluwafemi Dare',
    description:
      'Production-ready AI voice agents, GoHighLevel pipelines, PDF contract parsing, and AI security red-teaming.',
    images: ['/images/services/voice-ai-telephony.jpg'],
  },
}

export default function ServicesPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-24 sm:pt-32">
      <ServicesClient />
    </div>
  )
}
