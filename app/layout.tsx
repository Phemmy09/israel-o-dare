import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  metadataBase: new URL('https://israeldare.com'),
  title: {
    default: 'ISRAEL DARE — Systems Architect, Spatial Intelligence & Research',
    template: '%s | ISRAEL DARE',
  },
  description:
    'The official digital headquarters and intellectual ecosystem of Israel Dare. Chief Systems Architect, Autonomous Aerial Robotics, Bio-Spatial Modeling, and Environmental Research.',
  keywords: [
    'Israel Dare',
    'Israel O. Dare',
    'Autonomous Aerial Robotics',
    'Drone Photogrammetry',
    'Spatial Digital Twins',
    'Gaussian Process Regression',
    'Bio-Thermodynamic Modeling',
    'AI Systems Architect',
    'n8n Expert',
    'FUTA First Class Engineering',
    'Upwork Top Rated Plus',
    'Sovereign Environmental Systems',
  ],
  authors: [{ name: 'Israel Dare', url: 'https://israeldare.com' }],
  creator: 'Israel Dare',
  openGraph: {
    title: 'ISRAEL DARE — Architect of Systems, Models & Ideas',
    description:
      'Digital headquarters of Israel Dare. Autonomous systems engineering, drone photogrammetry, bio-thermodynamics, and academic research.',
    url: 'https://israeldare.com',
    siteName: 'ISRAEL DARE',
    type: 'website',
    images: [
      {
        url: '/images/DGF_6811 copy.jpg',
        width: 1200,
        height: 630,
        alt: 'Israel Dare — Chief Systems Architect',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ISRAEL DARE — Architect of Systems, Models & Ideas',
    description:
      'Digital headquarters of Israel Dare. Autonomous systems engineering, drone photogrammetry, bio-thermodynamics, and academic research.',
    images: ['/images/DGF_6811 copy.jpg'],
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
