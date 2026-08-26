'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Camera,
  Download,
  Share2,
  Sparkles,
} from 'lucide-react'

export interface GalleryMediaItem {
  id: string
  title: string
  category: 'Executive & Advisory' | 'Frontier & Systems' | 'Studio Portraits' | 'Leadership & Impact' | 'Polyphony & Artistry'
  src: string
  aspect: string
  caption: string
  description: string
  year: string
}

const galleryMediaItems: GalleryMediaItem[] = [
  {
    id: 'izzy-01',
    title: 'Executive Advisory & Strategic Counsel',
    category: 'Executive & Advisory',
    src: '/images/gallery/izzy-gallery-01.png',
    aspect: 'aspect-[2/3]',
    caption: 'Israel Dare in bespoke tailored suit, delivering strategic counsel for high-value enterprise operators.',
    description: 'Advising enterprise leadership and venture-backed founders on deterministic AI architecture, governance frameworks, and high-concurrency systems.',
    year: '2026',
  },
  {
    id: 'izzy-02',
    title: 'The Sovereign Systems Architect',
    category: 'Frontier & Systems',
    src: '/images/gallery/izzy-gallery-02.png',
    aspect: 'aspect-[4/5]',
    caption: 'Commanding high-performance computing, distributed backend clusters, and deterministic LLM harnesses.',
    description: 'Operating at the intersection of mathematical theory and pragmatic engineering to eliminate operational bottlenecks.',
    year: '2026',
  },
  {
    id: 'izzy-03',
    title: 'Frontier AI & High-Stakes Leadership',
    category: 'Executive & Advisory',
    src: '/images/gallery/izzy-gallery-03.png',
    aspect: 'aspect-[4/5]',
    caption: 'Executive portrait capturing authoritative poise, clarity of vision, and unwavering focus.',
    description: 'Guiding organizations through complex technical transformations with measurable operational outcomes.',
    year: '2026',
  },
  {
    id: 'izzy-04',
    title: 'Editorial Portraiture & Poise',
    category: 'Studio Portraits',
    src: '/images/gallery/izzy-gallery-04.png',
    aspect: 'aspect-[2/3]',
    caption: 'Art-directed editorial portrait capturing quiet confidence and disciplined intellect.',
    description: 'Refined visual presence reflecting the rigor of first-class engineering and global technical leadership.',
    year: '2026',
  },
  {
    id: 'izzy-05',
    title: 'Architectural Intelligence & Modeling',
    category: 'Frontier & Systems',
    src: '/images/gallery/izzy-gallery-05.png',
    aspect: 'aspect-[2/3]',
    caption: 'Translating computational mathematics, Gaussian Process Regression, and digital twins into real-world infrastructure.',
    description: 'Engineering resilient bio-spatial models and spatial computing pipelines for complex physical environments.',
    year: '2026',
  },
  {
    id: 'izzy-06',
    title: 'Panoramic Horizon & Global Scale',
    category: 'Executive & Advisory',
    src: '/images/gallery/izzy-gallery-06.png',
    aspect: 'aspect-[16/10]',
    caption: 'Landscape composition capturing the expansive horizon of global technical parity.',
    description: 'Operating across international commercial corridors—Lagos, London, New York, and San Francisco.',
    year: '2026',
  },
  {
    id: 'izzy-07',
    title: 'The Polymathic Mind',
    category: 'Polyphony & Artistry',
    src: '/images/gallery/izzy-gallery-07.png',
    aspect: 'aspect-[2/3]',
    caption: 'Self-taught multi-instrumentalist (Violin, Viola, Cello, Piano) and former University Symphony Orchestra coordinator.',
    description: 'Applying the strict multi-voice counterpoint of J.S. Bach directly to asynchronous backend event-stream orchestration.',
    year: '2025',
  },
  {
    id: 'izzy-08',
    title: 'Master Executive Portrait',
    category: 'Studio Portraits',
    src: '/images/gallery/izzy-gallery-08.png',
    aspect: 'aspect-[2/3]',
    caption: 'Israel Dare — Chief Systems Architect & AI Consultant.',
    description: 'Upwork Top Rated Plus (Top 3% worldwide) profile portrait, verified across 40+ production deployments.',
    year: '2026',
  },
  {
    id: 'izzy-09',
    title: 'First-Principles Engineering Rigor',
    category: 'Frontier & Systems',
    src: '/images/gallery/izzy-gallery-09.png',
    aspect: 'aspect-[2/3]',
    caption: 'Deterministic execution in probabilistic environments: building zero-hallucination agent networks.',
    description: 'Every software layer is engineered from foundational principles with strict schema validation and error isolation.',
    year: '2026',
  },
  {
    id: 'izzy-10',
    title: 'Strategic Counsel & Enterprise Governance',
    category: 'Executive & Advisory',
    src: '/images/gallery/izzy-gallery-10.png',
    aspect: 'aspect-[4/5]',
    caption: 'Boardroom-level advisory on autonomous systems security, data sovereignty, and AI IP protection.',
    description: 'Ensuring enterprise clients maintain 100% proprietary code ownership without risky vendor lock-in.',
    year: '2026',
  },
  {
    id: 'izzy-11',
    title: 'APEXIUM Leadership & Social Impact',
    category: 'Leadership & Impact',
    src: '/images/gallery/izzy-gallery-11.png',
    aspect: 'aspect-[2/3]',
    caption: 'Founder of APEXIUM, bringing AI and programming literacy to underserved youth in rural Nigeria.',
    description: 'Self-funding community workshops and training over 200 teenagers in computational problem-solving and software creation.',
    year: '2025',
  },
  {
    id: 'izzy-12',
    title: 'Symphonic Coordination & Polyphony',
    category: 'Polyphony & Artistry',
    src: '/images/gallery/izzy-gallery-12.png',
    aspect: 'aspect-[2/3]',
    caption: 'Directing complex ensemble acoustics, timing synchronization, and structural discipline across 60+ performers.',
    description: 'Leadership forged in classical orchestral direction, managing multi-instrumental logistics with absolute harmonic timing.',
    year: '2024',
  },
  {
    id: 'izzy-13',
    title: 'Crucible, Adversity & Resilience',
    category: 'Leadership & Impact',
    src: '/images/gallery/izzy-gallery-13.png',
    aspect: 'aspect-[2/3]',
    caption: 'Rising through final-year family adversity to achieve First Class Honours and global Top 3% standing.',
    description: 'Channeling intense pressure into an unwavering commitment to mastery, academic brilliance, and global impact.',
    year: '2024',
  },
  {
    id: 'izzy-14',
    title: 'Deep Computational Theory & Analysis',
    category: 'Frontier & Systems',
    src: '/images/gallery/izzy-gallery-14.png',
    aspect: 'aspect-[2/3]',
    caption: 'Mathematical modeling, vector embeddings, and low-latency database architecture.',
    description: 'Designing high-throughput Supabase pgvector architectures and custom serverless endpoints for real-time applications.',
    year: '2026',
  },
  {
    id: 'izzy-15',
    title: 'The Sovereign Builder',
    category: 'Studio Portraits',
    src: '/images/gallery/izzy-gallery-15.png',
    aspect: 'aspect-[2/3]',
    caption: 'Quiet confidence, intellectual independence, and continuous compounding of high-leverage skills.',
    description: 'A builder who lets deterministic code, verified case outcomes, and institutional credentials speak for themselves.',
    year: '2026',
  },
  {
    id: 'izzy-16',
    title: 'Academic Distinction & Laurels',
    category: 'Leadership & Impact',
    src: '/images/gallery/izzy-gallery-16.png',
    aspect: 'aspect-[2/3]',
    caption: 'Graduated at the top of the Agricultural and Environmental Engineering Department (GPA 4.5+/5.0).',
    description: 'Federal Government of Nigeria (FGN) Merit Scholarship recipient (2019–2023) and continuous Dean’s List honoree.',
    year: '2024',
  },
  {
    id: 'izzy-17',
    title: 'Frontier Industrial Automation',
    category: 'Frontier & Systems',
    src: '/images/gallery/izzy-gallery-17.png',
    aspect: 'aspect-[4/5]',
    caption: 'Engineering autonomous n8n cluster nodes and self-healing asynchronous webhook pipelines.',
    description: 'Automating multi-department enterprise workflows to save hundreds of operational hours per month with zero data loss.',
    year: '2026',
  },
  {
    id: 'izzy-18',
    title: 'Executive Presence & Composure',
    category: 'Executive & Advisory',
    src: '/images/gallery/izzy-gallery-18.png',
    aspect: 'aspect-[4/5]',
    caption: 'Calm, authoritative, and direct communication suited for enterprise buyers and scholarship committees.',
    description: 'Presenting complex technical architectures with crisp executive summaries and verifiable proofs.',
    year: '2026',
  },
  {
    id: 'izzy-19',
    title: 'Autonomous Robotics & Sensor Telemetry',
    category: 'Frontier & Systems',
    src: '/images/gallery/izzy-gallery-19.png',
    aspect: 'aspect-[4/5]',
    caption: 'Integrating physical IoT telemetry, drone photogrammetry point clouds, and spatial mapping.',
    description: 'Developing end-to-end digital twins for critical agricultural, industrial, and infrastructural assets.',
    year: '2026',
  },
  {
    id: 'izzy-20',
    title: 'The Digital Headquarters Portrait',
    category: 'Studio Portraits',
    src: '/images/gallery/izzy-gallery-20.png',
    aspect: 'aspect-[4/5]',
    caption: 'Official portrait anchoring the digital headquarters at israeldare.com.',
    description: 'Israel Dare — AI Consultant, Chief Systems Architect, and Builder.',
    year: '2026',
  },
]

const GALLERY_CATEGORIES = [
  'All',
  'Executive & Advisory',
  'Frontier & Systems',
  'Studio Portraits',
  'Leadership & Impact',
  'Polyphony & Artistry',
]

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filteredItems =
    activeCategory === 'All'
      ? galleryMediaItems
      : galleryMediaItems.filter((item) => item.category === activeCategory)

  const activeItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null

  const handlePrev = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : filteredItems.length - 1))
  }

  const handleNext = () => {
    if (lightboxIndex === null) return
    setLightboxIndex((prev) => (prev! < filteredItems.length - 1 ? prev! + 1 : 0))
  }

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-xs tracking-wider pb-6 border-b border-white/[0.08]">
        <span className="text-zinc-500 uppercase text-[10px]">Filter Collection:</span>
        {GALLERY_CATEGORIES.map((cat) => {
          const isSelected = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setLightboxIndex(null)
              }}
              className={`py-1 transition-colors uppercase relative ${
                isSelected ? 'text-gold-400 font-semibold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
              {isSelected && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400" />
              )}
            </button>
          )
        })}
      </div>

      {/* Gallery Grid (With generous headroom safe-framing and crisp facial resolution) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            onClick={() => setLightboxIndex(idx)}
            className="border border-white/[0.08] bg-noir-900/40 p-5 space-y-4 hover:border-gold-500/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Image Container with Safe Headroom Framing */}
              <div className={`relative ${item.aspect} w-full overflow-hidden border border-white/10 bg-noir-950`}>
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 450px"
                  className="object-cover object-[center_top] pt-0.5 transition-transform duration-700 group-hover:scale-[1.03] filter contrast-[1.02]"
                />

                <div className="absolute top-2.5 left-2.5 bg-noir-950/85 backdrop-blur-md px-2 py-0.5 border border-white/10 font-mono text-[9px] text-gold-400 uppercase">
                  {item.category}
                </div>

                <div className="absolute bottom-2.5 right-2.5 bg-noir-950/80 backdrop-blur-md p-1.5 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Title, Caption & Description */}
              <div className="space-y-2">
                <h3 className="font-serif text-2xl text-white group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-parchment-200 font-light leading-relaxed">
                  {item.caption}
                </p>
                <p className="text-[11px] text-zinc-400 font-light leading-relaxed pt-1 border-t border-white/[0.04]">
                  {item.description}
                </p>
              </div>
            </div>

            {/* Bottom Card Footer */}
            <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-500">
              <span>REF // {item.year}</span>
              <span className="text-gold-400/80 group-hover:text-gold-400 transition-colors">INSPECT ARCHIVE ↗</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fade-in">
          <div className="relative max-w-5xl w-full max-h-[95vh] flex flex-col items-center justify-center space-y-6">
            {/* Top Bar with Controls */}
            <div className="w-full flex items-center justify-between font-mono text-xs text-zinc-400 border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <span className="text-gold-400 font-semibold uppercase">{activeItem.category}</span>
                <span>·</span>
                <span>{activeItem.year}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-zinc-500">
                  {lightboxIndex! + 1} of {filteredItems.length}
                </span>
                <button
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 border border-white/10 hover:border-white text-zinc-400 hover:text-white transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Media Presentation */}
            <div className="relative w-full max-h-[65vh] flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-[60vh] max-w-3xl">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  priority
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Prev / Next Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-noir-950/80 border border-white/15 text-white hover:border-gold-400 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-noir-950/80 border border-white/15 text-white hover:border-gold-400 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption & Description */}
            <div className="w-full text-center max-w-2xl space-y-2 pt-2 border-t border-white/10">
              <h2 className="font-serif text-2xl text-white">{activeItem.title}</h2>
              <p className="text-sm text-parchment-200 font-light">{activeItem.caption}</p>
              <p className="text-xs text-zinc-400 font-light leading-relaxed">{activeItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
