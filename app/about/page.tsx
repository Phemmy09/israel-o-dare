import type { Metadata } from 'next'
import AboutClient from './AboutClient'

export const metadata: Metadata = {
  title: 'About Israel O. Dare | Founder & Systems Architect',
  description:
    'From final year adversity to Top Rated Plus on Upwork (Top 3% worldwide). The personal, professional, and academic journey of Israel O. Dare.',
}

export default function AboutPage() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="glow-blob top-[10%] left-[20%] bg-red-600/10" />
      <div className="glow-blob top-[50%] right-[10%] bg-red-500/15" />

      {/* Main client component content */}
      <AboutClient />

      {/* Portfolio CTA */}
      <section className="py-24 px-4 border-t border-neutral-900 bg-black relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">View My Full Work Records</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto font-light">
            I maintain complete transparency of my contracts and project logs. Check out my Upwork history or download my digital credentials file.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1PFVyB7Oae8ujpNNfSOVWGli45tIbh6Q2/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-bold"
            >
              Download PDF Portfolio ↗
            </a>
            <a
              href="https://Calendly.com/izzy-marketing-hub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              Schedule Meeting 📅
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
