'use client'

import Image from 'next/image'
import { ShoppingCart, Download, BookOpen, Headphones, Video, FileText, CheckCircle } from 'lucide-react'
import type { Product } from '@/lib/products'

const typeIcons: Record<string, React.ElementType> = {
  eBook: BookOpen,
  Audio: Headphones,
  Video: Video,
  Template: FileText,
  Course: BookOpen,
}

const typeBadgeColor: Record<string, string> = {
  eBook: 'bg-blue-950/50 text-blue-300 border-blue-800/50',
  Audio: 'bg-purple-950/50 text-purple-300 border-purple-800/50',
  Video: 'bg-green-950/50 text-green-300 border-green-800/50',
  Template: 'bg-amber-950/50 text-amber-300 border-amber-800/50',
  Course: 'bg-orange-950/50 text-orange-300 border-orange-800/50',
}

export default function ProductCard({ product }: { product: Product }) {
  const TypeIcon = typeIcons[product.type] ?? BookOpen
  const isFree = product.price === 'Free'

  return (
    <div className="group flex flex-col glass-panel border border-neutral-800/80 rounded-3xl overflow-hidden hover:border-red-500/35 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_-15px_rgba(239,68,68,0.15)] transition-all duration-300">
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] bg-neutral-900 overflow-hidden border-b border-neutral-800/50">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale-[10%] group-hover:grayscale-0"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />

        {/* Type Badge */}
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border uppercase tracking-wider backdrop-blur-sm ${
            typeBadgeColor[product.type] ?? 'bg-neutral-900 text-neutral-400 border-neutral-800'
          }`}
        >
          <TypeIcon className="w-3.5 h-3.5" />
          {product.type}
        </span>

        {isFree && (
          <span className="absolute top-3 right-3 px-3 py-1 bg-green-500/90 text-neutral-950 text-[10px] font-black tracking-widest uppercase rounded-full shadow-[0_2px_10px_rgba(34,197,94,0.3)] animate-pulse">
            FREE
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-extrabold text-white text-lg mb-2 leading-snug group-hover:text-red-400 transition-colors duration-200">
          {product.title}
        </h3>
        <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed mb-6 flex-1 font-light">
          {product.description}
        </p>

        {/* Features Checklist */}
        <ul className="space-y-2 mb-6 border-t border-neutral-900 pt-4">
          {product.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-xs text-neutral-300 font-light">
              <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        {/* Purchase Footer */}
        <div className="flex items-center justify-between gap-3 pt-4 border-t border-neutral-900 mt-auto">
          <div>
            {isFree ? (
              <span className="text-xl font-black text-green-400 text-glow">FREE</span>
            ) : (
              <span className="text-xl font-black text-white">
                ${(product.price as number).toFixed(2)}
              </span>
            )}
          </div>

          {isFree ? (
            <a
              href={product.downloadUrl ?? '#'}
              download
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-green-500 hover:bg-green-400 text-neutral-950 text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_2px_10px_rgba(34,197,94,0.2)] hover:shadow-[0_2px_20px_rgba(34,197,94,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              Download
            </a>
          ) : (
            <a
              href={product.whopCheckoutUrl ?? 'https://whop.com'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_2px_10px_rgba(239,68,68,0.2)] hover:shadow-[0_2px_20px_rgba(239,68,68,0.45)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <ShoppingCart className="w-4 h-4" />
              Get Access
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
