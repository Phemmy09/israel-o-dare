import type { Metadata } from 'next'
import { products } from '@/lib/products'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Proprietary Products & Systems IP | ISRAEL DARE',
  description:
    'Official blueprints, audio masterclasses, and deployment templates created by Israel Dare. Engineered for agency founders, software architects, and systems builders.',
}

export default function ProductsPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 font-sans">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            INTELLECTUAL PROPERTY &amp; PRODUCTS
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Proprietary <span className="italic font-light">Systems</span>, Blueprints &amp; Toolkits
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            Battle-tested frameworks, operational blueprints, and deployment packs designed to compress years of trial and error into immediate execution.
          </p>
        </div>
      </section>

      {/* Interactive Products Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <ProductsClient products={products} />
      </section>

      {/* Custom Architecture CTA */}
      <section className="py-24 px-5 sm:px-8 border-t border-white/[0.08] bg-black text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl text-white">Require a Bespoke Enterprise Build?</h2>
          <p className="font-sans text-sm text-zinc-400 font-light max-w-xl mx-auto">
            If your organization has unique requirements not covered by standardized blueprints, we construct custom software and workflow architectures.
          </p>
          <div className="pt-2">
            <a href="/contact" className="btn-luxury">
              Initiate Custom Briefing ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
