import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryClient from './GalleryClient'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Visual Gallery & Photographic Archive | Israel Dare',
  description:
    'Complete photographic archive and visual dossier of Israel Dare. Executive portraits, Tesla Gigafactory, systems architecture, observatory research, and symphonic musicianship.',
}

export default function GalleryPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Visual Archive · Photographic Dossier
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.95]">
            Photographic <span className="italic font-light">Gallery</span> &amp; Archive
          </h1>
          <p className="text-lg sm:text-xl text-parchment-200 font-light leading-relaxed max-w-2xl">
            A comprehensive photographic archive documenting executive advisory, frontier industrial evaluations, systems architecture, academic research, and classical musicianship.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="mailto:israel@israeldare.com?subject=Press%20and%20Media%20Inquiry"
              className="btn-luxury-gold text-xs"
            >
              Request High-Res Press Kit ↗
            </a>
            <Link href="/about" className="btn-luxury-outline text-xs">
              Read Narrative Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Client Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <GalleryClient />
      </section>

      {/* Bottom Quotation */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 text-center pt-20 border-t border-white/[0.08] space-y-6">
        <Logo variant="monogram" size="lg" className="mx-auto" />
        <p className="font-serif text-2xl sm:text-3xl text-white italic font-light leading-relaxed">
          &ldquo;The discipline of classical polyphony and the architecture of code are one. Elegance is not an accident—it is the direct consequence of restraint.&rdquo;
        </p>
        <p className="font-mono text-xs text-gold-400 uppercase tracking-widest">— ISRAEL DARE</p>
      </section>
    </div>
  )
}
