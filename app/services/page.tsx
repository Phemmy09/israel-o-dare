import type { Metadata } from 'next'
import Link from 'next/link'
import ServicesClient from './ServicesClient'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Systems & Service Packages | ISRAEL DARE',
  description:
    'Structured pricing, industry automation bundles, enterprise SaaS architectures, and verified Upwork client reviews for Israel Dare.',
}

export default function ServicesPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 font-sans">
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            SYSTEMS ARCHITECTURE &amp; SERVICE CATALOG
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Service <span className="italic font-light">Packages</span> &amp; Systems Catalog
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            From targeted micro-task workflows to turnkey industry bundles and dedicated annual Chief Systems Architect retainers. Transparent, outcome-driven engineering models.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <a
              href="https://Calendly.com/izzy-marketing-hub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury"
            >
              Book Strategy Consultation 📅
            </a>
            <Link href="/contact" className="btn-luxury-outline">
              Initiate Custom Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* 2. SERVICES & PACKAGES INTERACTIVE CLIENT */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <ServicesClient />
      </section>

      {/* 3. CTA */}
      <section className="py-24 sm:py-36 px-5 sm:px-8 bg-black text-center border-t border-white/[0.08]">
        <div className="max-w-3xl mx-auto space-y-8">
          <Logo variant="monogram" size="lg" className="mx-auto" />
          <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[0.98]">
            Need a Custom Architecture?
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
            If your organization has unique requirements not covered by standard packages, we design and deploy bespoke systems.
          </p>
          <div className="pt-4 flex justify-center">
            <Link href="/contact" className="btn-luxury">
              Submit Custom Project Brief ↗
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
