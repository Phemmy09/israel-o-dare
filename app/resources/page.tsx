import type { Metadata } from 'next'
import { products } from '@/lib/products'
import ProductsClient from '../products/ProductsClient'

export const metadata: Metadata = {
  title: 'Digital Products & Toolkits | ISRAEL DARE',
  description:
    'Resources, frameworks, and deployment toolkits created by Israel Dare.',
}

export default function ResourcesPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 font-sans">
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            DIGITAL TOOLKITS &amp; IP
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Digital Products &amp; Blueprints
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            Access Israel Dare's official frameworks, deployment packs, and audio masterclasses.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <ProductsClient products={products} />
      </section>
    </div>
  )
}
