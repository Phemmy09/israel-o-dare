import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  metadataBase: new URL('https://israeldare.com'),
  title: {
    default: 'Israel Dare — AI Consultant, Systems Architect & Builder',
    template: '%s | Israel Dare',
  },
  description:
    'The digital headquarters of Israel Dare. AI consultant, builder, and systems entrepreneur. Advisory, autonomous agent workflows, enterprise intelligence, and spatial computing.',
  keywords: [
    'Israel Dare',
    'Israel O. Dare',
    'AI Consultant',
    'Systems Architect',
    'Autonomous AI Systems',
    'Enterprise n8n Automation',
    'Spatial Intelligence',
    'Upwork Top Rated Plus',
    'First Class Engineering',
  ],
  authors: [{ name: 'Israel Dare', url: 'https://israeldare.com' }],
  creator: 'Israel Dare',
  openGraph: {
    title: 'Israel Dare — AI Consultant, Systems Architect & Builder',
    description:
      'Digital headquarters of Israel Dare. AI consulting, bespoke autonomous agents, enterprise workflow automation, and physical computing.',
    url: 'https://israeldare.com',
    siteName: 'Israel Dare',
    type: 'website',
    images: [
      {
        url: '/images/editorial/israel-boardroom-executive.jpg',
        width: 1200,
        height: 630,
        alt: 'Israel Dare — AI Consultant & Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Israel Dare — AI Consultant, Systems Architect & Builder',
    description:
      'Digital headquarters of Israel Dare. AI consulting, bespoke autonomous agents, enterprise workflow automation, and physical computing.',
    images: ['/images/editorial/israel-boardroom-executive.jpg'],
    creator: '@izzy_automation',
  },
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-noir-950 text-zinc-200 antialiased selection:bg-red-600 selection:text-white">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
