'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ProductItem,
  ProductTier,
} from '@/lib/products'
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Zap,
  Lock,
  Download,
  Terminal,
  ExternalLink,
  X,
  FileCode,
  Sparkles,
} from 'lucide-react'

interface ProductsClientProps {
  products: ProductItem[]
}

const tiers: { label: string; value: ProductTier | 'All'; description: string }[] = [
  {
    label: 'All Tiers',
    value: 'All',
    description: 'The complete systems catalog spanning starter blueprints to bespoke enterprise builds.',
  },
  {
    label: 'Starter Tier ($30 – $290)',
    value: 'Starter',
    description: 'Self-guided blueprints, workflow JSON vaults, and operational operating systems.',
  },
  {
    label: 'Professional Tier ($1,200 – $3,500)',
    value: 'Professional',
    description: 'Turnkey full-stack codebases, middleware bridges, and 1-on-1 architecture sprints.',
  },
  {
    label: 'Bespoke Tier ($10,000+ / Custom)',
    value: 'Bespoke',
    description: 'Custom sovereign infrastructure, spatial digital twins, and fractional architect retainers.',
  },
]

export default function ProductsClient({ products }: ProductsClientProps) {
  const [selectedTier, setSelectedTier] = useState<ProductTier | 'All'>('All')
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null)

  const filteredProducts =
    selectedTier === 'All'
      ? products
      : products.filter((p) => p.tier === selectedTier)

  return (
    <div className="font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. EDITORIAL INTRO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Digital Intellectual Property & Systems
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.95]">
            Shop & Systems Store
          </h1>
          <p className="text-lg sm:text-xl text-parchment-200 font-light leading-relaxed">
            Battle-tested frameworks, operational blueprints, turnkey codebases, and custom enterprise deployments. Designed to compress years of trial and error into immediate execution.
          </p>
        </div>
      </section>

      {/* 2. TIER FILTER TABS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs tracking-wider">
          <span className="text-zinc-500 uppercase text-[10px]">Select Tier:</span>
          {tiers.map((t) => {
            const isSelected = selectedTier === t.value
            return (
              <button
                key={t.label}
                onClick={() => setSelectedTier(t.value)}
                className={`py-1 transition-colors uppercase relative ${
                  isSelected ? 'text-gold-400 font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {t.label}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* 3. PRODUCT CATALOG GRID */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border border-white/[0.08] bg-noir-900/40 hover:bg-noir-900 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between p-6 sm:p-8 space-y-6 group"
            >
              <div className="space-y-5">
                {/* Image / Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden border border-white/10 bg-noir-950">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.05]"
                  />
                  <div className="absolute top-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[9px] text-gold-400 uppercase">
                    {product.tier} TIER
                  </div>
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-white/10 backdrop-blur-md px-2 py-0.5 border border-white/10 font-mono text-[9px] text-white">
                      {product.badge}
                    </div>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div className="space-y-1">
                  <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
                    {product.format}
                  </span>
                  <h3 className="font-serif text-2xl text-white group-hover:text-gold-300 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-parchment-300 font-light leading-relaxed">
                    {product.subtitle}
                  </p>
                </div>

                {/* Deliverables / Features */}
                <ul className="space-y-2 font-mono text-xs text-zinc-300 border-t border-white/[0.06] pt-4">
                  {product.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-400 shrink-0 mt-1.5" />
                      <span className="text-[11px] leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing & CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                <div>
                  <span className="font-serif text-2xl text-white">{product.priceDisplay}</span>
                  <p className="font-mono text-[9px] text-zinc-500 uppercase">
                    {product.isHighTicket ? 'Application Required' : 'Instant Access'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 border border-white/10 text-zinc-400 hover:text-white text-xs font-mono"
                    title="Inspect Product Specifications"
                  >
                    Specs
                  </button>

                  {product.isHighTicket ? (
                    <Link
                      href={product.ctaHref}
                      className="btn-luxury-gold text-xs px-4 py-2.5"
                    >
                      Apply ↗
                    </Link>
                  ) : (
                    <Link
                      href={product.ctaHref}
                      className="btn-luxury text-xs px-4 py-2.5"
                    >
                      Access ↗
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. TRUST & DELIVERY GUARANTEE SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-t border-b border-white/[0.08] bg-noir-900/30">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
              Security & Guarantees
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Institutional Delivery & Support Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-white/[0.08] bg-noir-950/60 space-y-3">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl text-white">Immediate Dispatch</h3>
              </div>
              <p className="text-xs text-parchment-300 font-light leading-relaxed">
                All Starter Tier digital blueprints, JSON workflow files, and video walkthroughs are delivered instantly upon checkout confirmation with lifetime update access.
              </p>
            </div>

            <div className="p-6 border border-white/[0.08] bg-noir-950/60 space-y-3">
              <div className="flex items-center gap-3">
                <FileCode className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl text-white">100% Code Ownership</h3>
              </div>
              <p className="text-xs text-parchment-300 font-light leading-relaxed">
                Professional and Bespoke codebases include full GitHub repository transfer, complete architectural documentation, and zero proprietary lock-in.
              </p>
            </div>

            <div className="p-6 border border-white/[0.08] bg-noir-950/60 space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <h3 className="font-serif text-xl text-white">30–60 Day Warranty</h3>
              </div>
              <p className="text-xs text-parchment-300 font-light leading-relaxed">
                Every custom system deployment includes direct priority monitoring, bug fixes, latency tuning, and staff onboarding support from Israel Dare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCT SPECIFICATION MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-noir-950 border border-white/15 max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-6 my-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
              aria-label="Close specification modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2 pr-10 border-b border-white/[0.08] pb-4">
              <span className="font-mono text-xs text-gold-400 uppercase tracking-widest">
                {selectedProduct.tier} Tier · {selectedProduct.format}
              </span>
              <h2 className="font-serif text-3xl text-white">{selectedProduct.title}</h2>
              <p className="font-serif text-2xl text-gold-300">{selectedProduct.priceDisplay}</p>
            </div>

            <p className="text-sm text-parchment-200 font-light leading-relaxed">
              {selectedProduct.description}
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-gold-400">
                Included Deliverables & Specifications
              </h3>
              <ul className="space-y-2 font-mono text-xs text-zinc-300">
                {selectedProduct.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-4">
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-xs font-mono text-zinc-400 hover:text-white"
              >
                Close Specification
              </button>

              <Link
                href={selectedProduct.ctaHref}
                className="btn-luxury-gold text-xs"
              >
                {selectedProduct.ctaText} ↗
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
