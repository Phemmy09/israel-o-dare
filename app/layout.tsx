import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#060609',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://israeldare.com'),
  title: {
    default: 'Israel Oluwafemi Dare — AI Systems Architect & Autonomous Revenue Infrastructure',
    template: '%s | Israel Oluwafemi Dare',
  },
  description:
    'Digital headquarters of Israel Oluwafemi Dare (Izzy). Upwork Top Rated Plus (Top 3% worldwide). 6x Anthropic Certified, Microsoft Certified AI Red Teamer. Engineering bespoke autonomous agents, GoHighLevel automation, and production-tested systems.',
  keywords: [
    'Israel Dare',
    'Israel O. Dare',
    'Israel Oluwafemi Dare',
    'Isreal Dare',
    'Dare Israel O',
    'Dare Israel Oluwafemi',
    'IzzyTech Hub',
    'AI Systems Architect',
    'Autonomous AI Systems',
    'Revenue Infrastructure',
    'Upwork Top Rated Plus',
    'Anthropic Claude Certified',
    'Microsoft AI Red Teamer',
    'GoHighLevel Automation',
    'n8n Orchestration',
    'Solar AI Voice Agent',
    'Roofing Contract AI',
    'Next.js 15 Developer',
    'Python FastAPI AI',
    'Conversational AI',
    'Vapi Voice AI',
    'ElevenLabs',
  ],
  authors: [{ name: 'Israel Oluwafemi Dare', url: 'https://israeldare.com' }],
  creator: 'Israel Oluwafemi Dare',
  openGraph: {
    title: 'Israel Oluwafemi Dare — AI Systems Architect & Autonomous Revenue Infrastructure',
    description:
      'Digital headquarters of Israel Oluwafemi Dare. Upwork Top Rated Plus. I build systems that make businesses print money while you sleep. AI decides, deterministic code acts.',
    url: 'https://israeldare.com',
    siteName: 'Israel Dare',
    type: 'website',
    images: [
      {
        url: '/images/editorial/israel-advisory-portrait.jpg',
        width: 1200,
        height: 630,
        alt: 'Israel Oluwafemi Dare — AI Systems Architect and Builder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Israel Oluwafemi Dare — AI Systems Architect & Autonomous Revenue Infrastructure',
    description:
      'Digital headquarters of Israel Dare. Upwork Top Rated Plus. 6x Anthropic Certified, Microsoft Certified AI Red Teamer.',
    images: ['/images/editorial/israel-advisory-portrait.jpg'],
    creator: '@izzy_automation',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

const jsonLdSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://israeldare.com/#person',
      name: 'Israel Oluwafemi Dare',
      alternateName: [
        'Israel O. Dare',
        'Israel Dare',
        'Isreal Dare',
        'Dare Israel O',
        'Dare Israel Oluwafemi',
        'Izzy',
      ],
      url: 'https://israeldare.com',
      image: 'https://israeldare.com/images/editorial/israel-advisory-portrait.jpg',
      jobTitle: 'AI Systems Architect & Consultant',
      description:
        'Top Rated Plus AI Consultant on Upwork (Top 3% worldwide). 6x Anthropic Claude certified, Microsoft Certified AI Red Teamer. Builds autonomous revenue infrastructure, AI voice agents, and custom enterprise web applications.',
      alumnusOf: {
        '@type': 'EducationalOrganization',
        name: 'Federal University of Technology Akure',
        award: 'First Class Honours (Top 3%)',
      },
      knowsAbout: [
        'Artificial Intelligence',
        'Autonomous Agents',
        'Revenue Infrastructure',
        'GoHighLevel Automation',
        'n8n Workflow Automation',
        'Claude API',
        'Vapi Conversational AI',
        'FastAPI',
        'Next.js 15',
        'AI Red Teaming',
        'Spatial Intelligence',
      ],
      sameAs: [
        'https://www.upwork.com/freelancers/~01b6e4e892eef8542c',
        'https://github.com/Phemmy09',
        'https://twitter.com/izzy_automation',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://israeldare.com/#service',
      name: 'Israel Dare — Autonomous Systems & AI Architecture',
      url: 'https://israeldare.com',
      logo: 'https://israeldare.com/images/editorial/israel-advisory-portrait.jpg',
      priceRange: '$800 - $30,000',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '40',
        bestRating: '5',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Autonomous Systems & AI Service Packages',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Beginner Package',
            price: '800',
            priceCurrency: 'USD',
            description: 'Email Automation, SMS Automation, Social Media Auto Responder.',
          },
          {
            '@type': 'Offer',
            name: 'Professional Package',
            price: '2500',
            priceCurrency: 'USD',
            description: 'Sales Funnel, Website Design up to 10 pages, Marketing Automation, Chatbot support.',
          },
          {
            '@type': 'Offer',
            name: 'Premium Package',
            price: '5000',
            priceCurrency: 'USD',
            description: 'Full Brand Identity Design, Comprehensive Website Design, Social Media Management Automation, Marketing Automation, Custom AI Agent.',
          },
          {
            '@type': 'Offer',
            name: 'Exclusive Annual Partnership',
            price: '30000',
            priceCurrency: 'USD',
            description: 'Full-year fractional CTO and autonomous systems architecture, continuous red-teaming, dedicated custom AI twin.',
          },
        ],
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Tony Flores' },
          reviewBody:
            'Technical mastery combined with strategic vision. Izzy helped us automate our client onboarding and support systems. The result is a smoother customer experience and significantly less administrative overhead.',
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Fredrick Bahr' },
          reviewBody:
            'Our lead handling process was manual and slow before Izzy stepped in. He implemented an AI workflow that qualifies leads instantly and schedules appointments without human intervention. Massive uptick in conversion rates.',
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Darryl' },
          reviewBody:
            "Izzy's expertise is truly unmatched. He tackled a problem that had been plaguing me for over a year and resolved it within just an hour! If you're looking for someone who delivers high-quality work quickly, get IZZY.",
          reviewRating: { '@type': 'Rating', ratingValue: '5' },
        },
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-noir-950 text-zinc-200 antialiased selection:bg-ruby-600 selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
