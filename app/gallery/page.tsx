import type { Metadata } from 'next'
import Link from 'next/link'
import GalleryClient from './GalleryClient'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Media & Photo Gallery | ISRAEL DARE',
  description:
    'Visual dossier, studio portraits, symphonic musicianship, and leadership moments of Israel Dare.',
}

export default function GalleryPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            VISUAL DOSSIER · ARCHIVE
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Media, Portraits <span className="italic font-light">&amp; Visual Archive</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            A curated photographic and cinematic record capturing studio portraits, orchestral coordination, and executive moments.
          </p>
          <div className="pt-2 flex flex-wrap gap-4">
            <a
              href="mailto:israel@israeldare.com"
              className="btn-luxury text-xs py-2.5 px-4"
            >
              Request High-Res Press Kit ↗
            </a>
            <Link href="/about" className="btn-luxury-outline text-xs py-2.5 px-4">
              Read Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Client Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <GalleryClient />
      </section>

      {/* Bottom Quotation */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 text-center pt-16 border-t border-white/[0.08] space-y-6">
        <Logo variant="monogram" size="lg" className="mx-auto" />
        <p className="font-serif text-2xl sm:text-3xl text-zinc-200 italic font-light leading-relaxed">
          &ldquo;The discipline of classical polyphony and the architecture of code are one. Elegance is not an accident—it is the direct consequence of restraint.&rdquo;
        </p>
        <p className="font-mono text-xs text-red-500 uppercase tracking-widest">— ISRAEL DARE</p>
      </section>
    </div>
  )
}
