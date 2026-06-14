import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export const metadata: Metadata = {
  title: {
    default: 'Israel O. Dare | Systems Engineer & AI Architect',
    template: '%s | Israel O. Dare',
  },
  description:
    'Official personal, professional, and academic portfolio of Israel O. Dare. Chief AI Architect, Systems Engineer, and First-Class Agricultural Engineering graduate.',
  keywords: [
    'Israel O. Dare',
    'Israel Oluwafemi Dare',
    'Systems Engineer',
    'AI Automation Architect',
    'n8n Expert',
    'Agricultural Engineering Research',
    'FUTA First Class Graduate',
    'Upwork Top Rated Plus Freelancer',
    'Gaussian Process Regression Storage',
    'Bio-Digital Agriculture'
  ],
  openGraph: {
    title: 'Israel O. Dare | Systems Engineer & AI Architect',
    description: 'Bridging the gap between high-precision AI/systems engineering and academic agricultural research.',
    url: 'https://izzytechub.com',
    siteName: 'Israel O. Dare',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Israel O. Dare | Systems Engineer & AI Architect',
    description: 'Bridging the gap between high-precision AI/systems engineering and academic agricultural research.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
