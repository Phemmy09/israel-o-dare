'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Play,
  Camera,
  Film,
  Sparkles,
  Download,
  Share2,
} from 'lucide-react'

export interface MediaItem {
  id: string
  title: string
  category: 'Studio Portraits' | 'Editorial & Direction' | 'Polyphony & Musicianship' | 'Cinema & Reels'
  src: string
  type: 'image' | 'video'
  aspect: string
  caption: string
  year: string
}

const mediaItems: MediaItem[] = [
  {
    id: 'photo-01',
    title: 'Master Executive Portrait',
    category: 'Studio Portraits',
    src: '/images/israel-portrait.jpg',
    type: 'image',
    aspect: 'aspect-[3/4]',
    caption: 'Israel Dare — Chief Systems Architect & Spatial Intelligence Researcher.',
    year: '2024',
  },
  {
    id: 'photo-02',
    title: 'Editorial Silhouette & Direction',
    category: 'Editorial & Direction',
    src: '/images/israel-studio-01.jpg',
    type: 'image',
    aspect: 'aspect-[4/5]',
    caption: 'Art-directed editorial portrait capturing the intersection of code and classical discipline.',
    year: '2024',
  },
  {
    id: 'video-01',
    title: 'Israel Dare — Visual Dossier & Journey',
    category: 'Cinema & Reels',
    src: '/about_me.mp4',
    type: 'video',
    aspect: 'aspect-video',
    caption: 'Official cinematic visual dossier documenting the journey, code architecture, and symphonic coordination.',
    year: '2024',
  },
  {
    id: 'photo-03',
    title: 'Polyphonic Musician & Coordinator',
    category: 'Polyphony & Musicianship',
    src: '/images/israel-studio-02.jpg',
    type: 'image',
    aspect: 'aspect-[3/4]',
    caption: 'Self-taught multi-instrumentalist (Violin, Viola, Cello, Piano) and campus orchestra general coordinator.',
    year: '2023',
  },
  {
    id: 'photo-04',
    title: 'Official Executive Headshot',
    category: 'Studio Portraits',
    src: '/images/israel-headshot.jpg',
    type: 'image',
    aspect: 'aspect-square',
    caption: 'Verified Upwork Top Rated Plus (Top 3% worldwide) profile portrait.',
    year: '2024',
  },
  {
    id: 'photo-05',
    title: 'The Systems Visionary',
    category: 'Studio Portraits',
    src: '/images/israel-studio-05.jpg',
    type: 'image',
    aspect: 'aspect-[4/5]',
    caption: 'Commanding high-concurrency systems, drone photogrammetry telemetry, and Bayesian GPR models.',
    year: '2024',
  },
  {
    id: 'photo-06',
    title: 'Symphonic Rigor & Focus',
    category: 'Polyphony & Musicianship',
    src: '/images/israel-studio-03.jpg',
    type: 'image',
    aspect: 'aspect-[3/4]',
    caption: 'Applying the strict polyphonic counterpoint of J.S. Bach to asynchronous backend pipeline orchestration.',
    year: '2023',
  },
  {
    id: 'photo-07',
    title: 'High-Stakes Architecture',
    category: 'Editorial & Direction',
    src: '/images/israel-studio-04.jpg',
    type: 'image',
    aspect: 'aspect-[4/5]',
    caption: 'Forged in adversity: turning crucible into uncompromising technical leadership.',
    year: '2024',
  },
  {
    id: 'photo-08',
    title: 'APEXIUM Leadership & Impact',
    category: 'Editorial & Direction',
    src: '/images/israel-studio-07.jpg',
    type: 'image',
    aspect: 'aspect-[3/4]',
    caption: 'Founder of APEXIUM, bringing AI systems literacy to underserved youths across Nigerian communities.',
    year: '2024',
  },
  {
    id: 'photo-09',
    title: 'Monochrome Precision',
    category: 'Studio Portraits',
    src: '/images/israel-studio-06.jpg',
    type: 'image',
    aspect: 'aspect-[3/4]',
    caption: 'Clean, deterministic, and disciplined engineering execution.',
    year: '2024',
  },
  {
    id: 'photo-10',
    title: 'The Modern Polymath',
    category: 'Editorial & Direction',
    src: '/images/israel-studio-08.jpg',
    type: 'image',
    aspect: 'aspect-[4/5]',
    caption: 'First-Class Honours Agricultural & Environmental Engineering graduate from FUTA (Top 3%).',
    year: '2023',
  },
]

const CATEGORIES = [
  'All Visuals',
  'Studio Portraits',
  'Editorial & Direction',
  'Polyphony & Musicianship',
  'Cinema & Reels',
] as const
type Category = (typeof CATEGORIES)[number]

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('All Visuals')
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredItems =
    activeCategory === 'All Visuals'
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory)

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredItems.length)
    }
  }

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredItems.length) % filteredItems.length)
    }
  }

  const currentItem = selectedIndex !== null ? filteredItems[selectedIndex] : null

  return (
    <div className="space-y-16">
      {/* 1. FILTER BAR */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setSelectedIndex(null)
              }}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-white text-black font-bold'
                  : 'bg-noir-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="font-mono text-xs text-zinc-400">
          SHOWING <span className="text-white font-bold">{filteredItems.length}</span> MEDIA ASSETS
        </span>
      </div>

      {/* 2. MEDIA MASONRY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(idx)}
            className="group relative bg-noir-900 border border-white/[0.08] overflow-hidden cursor-pointer hover:border-white/30 transition-all duration-500 flex flex-col"
          >
            {/* Visual Container */}
            <div className={`relative w-full ${item.aspect} bg-black overflow-hidden`}>
              {item.type === 'image' ? (
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover filter grayscale contrast-105 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="relative w-full h-full flex items-center justify-center bg-black">
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600/90 flex items-center justify-center text-white shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 ml-0.5" />
                    </div>
                  </div>
                </div>
              )}

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="flex items-center justify-between w-full text-white">
                  <span className="font-mono text-[10px] tracking-widest uppercase text-red-400">
                    CLICK TO EXPAND
                  </span>
                  <Maximize2 className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Category Badge */}
              <span className="absolute top-4 left-4 font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 bg-black/80 border border-white/10 text-zinc-300 backdrop-blur-sm">
                {item.category}
              </span>
            </div>

            {/* Meta Strip */}
            <div className="p-6 space-y-2 border-t border-white/[0.06] bg-noir-950 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-serif text-lg text-white group-hover:text-red-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="font-mono text-[10px] text-zinc-500">{item.year}</span>
                </div>
                <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                  {item.caption}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. FULL-SCREEN LIGHTBOX MODAL */}
      {currentItem && (
        <div
          onClick={() => setSelectedIndex(null)}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 select-none"
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute top-6 right-6 z-10 p-3 text-zinc-400 hover:text-white bg-black/80 border border-white/20 transition-colors"
            title="Close (Esc)"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 text-zinc-400 hover:text-white bg-black/80 border border-white/20 transition-colors"
            title="Previous"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 text-zinc-400 hover:text-white bg-black/80 border border-white/20 transition-colors"
            title="Next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-full max-h-[90vh] flex flex-col bg-noir-900 border border-white/20 overflow-hidden"
          >
            {/* Visual Display */}
            <div className="relative flex-1 w-full min-h-[50vh] max-h-[70vh] bg-black flex items-center justify-center">
              {currentItem.type === 'image' ? (
                <div className="relative w-full h-full min-h-[55vh]">
                  <Image
                    src={currentItem.src}
                    alt={currentItem.title}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                </div>
              ) : (
                <video
                  src={currentItem.src}
                  controls
                  autoPlay
                  className="w-full max-h-[65vh] object-contain"
                />
              )}
            </div>

            {/* Information Footer */}
            <div className="p-6 sm:p-8 bg-noir-950 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-red-500 font-bold">
                    {currentItem.category}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-600">·</span>
                  <span className="font-mono text-[10px] text-zinc-500">{currentItem.year}</span>
                </div>
                <h2 className="font-serif text-2xl text-white">{currentItem.title}</h2>
                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {currentItem.caption}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <a
                  href="mailto:israel@israeldare.com"
                  className="btn-luxury text-xs py-2.5 px-4"
                >
                  Inquire with Israel ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
