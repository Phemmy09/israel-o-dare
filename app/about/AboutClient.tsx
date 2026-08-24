'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Award,
  ShieldCheck,
  Music,
  Terminal,
  Calendar,
  X,
  Maximize2,
  BookOpen,
  ArrowRight,
  Flame,
  Plane,
  Layers,
} from 'lucide-react'
import Logo from '@/components/Logo'

const credentials = [
  { value: 'First Class', label: 'B.Eng. Honours (FUTA Top 3%)', icon: Award },
  { value: 'Top Rated Plus', label: 'Upwork Talent (Top 3% Globally)', icon: ShieldCheck },
  { value: '4 Instruments', label: 'Violin, Viola, Cello, Piano', icon: Music },
  { value: '50+ Deployments', label: 'High-Concurrency Systems & Models', icon: Terminal },
]

const galleryImages = [
  {
    src: '/images/israel-portrait.jpg',
    title: 'Official Executive Portrait',
    category: 'Portrait',
    caption: 'Israel Dare, Chief Systems Architect & Spatial Intelligence Researcher.',
  },
  {
    src: '/images/israel-studio-05.jpg',
    title: 'Systems & Spatial Research Focus',
    category: 'Engineering',
    caption: 'Analyzing deterministic workflows and bio-spatial modeling frameworks.',
  },
  {
    src: '/images/israel-studio-01.jpg',
    title: 'Editorial Silhouette & Direction',
    category: 'Editorial',
    caption: 'Art-directed editorial portrait capturing code rigor and classical discipline.',
  },
  {
    src: '/images/israel-studio-02.jpg',
    title: 'Orchestra General Coordinator',
    category: 'Leadership',
    caption: 'Rehearsing with the campus orchestra and symphonic choir as General Coordinator.',
  },
  {
    src: '/images/israel-studio-03.jpg',
    title: 'APEXIUM Classroom Session',
    category: 'Social Impact',
    caption: 'Empowering rural youth with computational thinking and AI workflow literacy.',
  },
  {
    src: '/images/israel-studio-04.jpg',
    title: 'Closing the Digital Divide',
    category: 'APEXIUM',
    caption: 'Demonstrating AI agent creation across community halls in Nigeria.',
  },
  {
    src: '/images/israel-studio-06.jpg',
    title: 'Monochrome Precision',
    category: 'Portrait',
    caption: 'Clean, deterministic, and disciplined engineering execution.',
  },
  {
    src: '/images/israel-studio-07.jpg',
    title: 'Leadership & Vision',
    category: 'Leadership',
    caption: 'Leading engineering initiatives and sovereign technical infrastructure.',
  },
]

const coreCompetencies = [
  'Autonomous Aerial Robotics & UAV Telemetry',
  'Drone Photogrammetry & Dense 3D Point Clouds',
  'Gaussian Process Regression (GPR) Modeling',
  'Bio-Thermodynamic Post-Harvest Engineering',
  'Deterministic Multi-Agent AI Architectures',
  'High-Concurrency Python FastAPI & Next.js Apps',
  'PostgreSQL pgvector Vector Database Indexing',
  'Enterprise n8n, Make & API Orchestrations',
]

export default function AboutClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  return (
    <div className="font-sans">
      {/* 1. HERO BIOGRAPHICAL PROFILE */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Master Photography Card */}
          <div className="lg:col-span-5 relative group mx-auto lg:mx-0 w-full max-w-md">
            <div className="relative aspect-[3/4] w-full bg-black border border-white/20 p-2 overflow-hidden shadow-2xl">
              <div className="relative w-full h-full overflow-hidden bg-zinc-900">
                <Image
                  src="/izzy_pose.jpg"
                  alt="Israel Dare"
                  fill
                  className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                  priority
                  sizes="(max-width: 1024px) 100vw, 450px"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                    Israel Dare
                  </p>
                  <p className="font-mono text-[9px] text-red-500">Chief Systems Architect</p>
                </div>
                <Logo variant="monogram" size="sm" />
              </div>
            </div>

            {/* Quick Status Tag */}
            <div className="mt-4 p-4 bg-noir-900 border border-white/[0.08] font-mono text-xs text-zinc-300 flex items-center justify-between">
              <span className="text-zinc-500 uppercase">Focus:</span>
              <span className="text-white font-semibold">Autonomous UAVs &amp; Spatial Models</span>
            </div>
          </div>

          {/* Right: Narrative Dossier */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
                NARRATIVE BIOGRAPHY
              </p>
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95] font-normal">
                Israel Dare
              </h1>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-zinc-400 mt-2">
                Systems Architect · Spatial Intelligence · Classical Musician
              </p>
            </div>

            {/* The Raw Reality Quote */}
            <div className="p-6 bg-noir-900 border-l-2 border-red-600 space-y-2">
              <p className="font-serif text-xl sm:text-2xl text-zinc-200 italic leading-relaxed font-light">
                "I watched television for the first time at twelve. Got my first phone at sixteen. Where I grew up, owning a laptop made you a suspect, not a student. Today, I build systems that process hundreds of thousands of dollars on autopilot. Easy work bores me. Bring me the hard stuff."
              </p>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
              <p>
                During my final year of Agricultural and Environmental Engineering at the Federal University of Technology, Akure (FUTA), my world shattered. My father was tragically killed in a fatal motor accident, and my mother was left hospitalized in the same crash.
              </p>
              <p>
                Overnight, at 22, I became the sole financial and moral anchor for my family. Staring at MATLAB code in university labs and coming home to a grieving household, I had no safety net, no startup capital, and no connections. Just a laptop and a decision: figure it out or fall apart.
              </p>
              <p>
                I chose technology. I mastered modern API orchestrations, database architectures, predictive mathematical models, and autonomous workflow design. I graduated with <strong>First-Class Honours (Top 3%)</strong> and rapidly ascended to <strong>Top Rated Plus on Upwork (Top 3% worldwide)</strong>.
              </p>
              <p>
                Today, my intellectual pursuits span the bleeding edge: <strong>autonomous aerial drone photogrammetry</strong>, <strong>Gaussian Process Regression</strong> for micro-climate thermodynamics, and <strong>deterministic enterprise AI systems</strong>.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-luxury">
                Initiate Inquiry ↗
              </Link>
              <a
                href="https://www.upwork.com/freelancers/~010297ccb4983d90e7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline"
              >
                Upwork Verified Profile ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CREDENTIALS MATRIX */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 border-b border-white/[0.08]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.label}
                className="bg-noir-900 border border-white/[0.08] p-6 text-center space-y-2 hover:border-white/20 transition-colors"
              >
                <Icon className="w-5 h-5 text-red-500 mx-auto mb-2" />
                <p className="font-serif text-2xl sm:text-3xl text-white font-normal">{c.value}</p>
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-400">
                  {c.label}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. THE HISTORICAL TIMELINE */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-b border-white/[0.08]">
        <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            CHRONOLOGY
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white">The Crucible &amp; Evolution</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 border-l border-white/[0.12] pl-8 sm:pl-12">
          {/* Milestone 1 */}
          <div className="relative space-y-3">
            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-red-600 border-2 border-black" />
            <span className="font-mono text-xs text-red-500 font-semibold uppercase tracking-wider">
              2023 · The Crucible
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Forged in Tragedy &amp; Extreme Focus
            </h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              Tragic loss of his father and hospitalization of his mother during final-year engineering studies. Refusing despair, Israel transformed grief into an unrelenting study of systems engineering, APIs, and computation to sustain his family.
            </p>
          </div>

          {/* Milestone 2 */}
          <div className="relative space-y-3">
            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-red-600 border-2 border-black" />
            <span className="font-mono text-xs text-red-500 font-semibold uppercase tracking-wider">
              2023 · Academic Apex
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              First Class Honours &amp; Gaussian Regression Thesis
            </h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              Graduated with First-Class Honours in Agricultural &amp; Environmental Engineering (Top 3% of class). Authored groundbreaking thesis modeling non-linear yam decay thermodynamics via Bayesian Gaussian Process Regression.
            </p>
          </div>

          {/* Milestone 3 */}
          <div className="relative space-y-3">
            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-red-600 border-2 border-black" />
            <span className="font-mono text-xs text-red-500 font-semibold uppercase tracking-wider">
              2024 · Social Legacy
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Founding APEXIUM
            </h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              Established APEXIUM to teach AI literacy and automated workflow architectures to youth in community halls across Nigeria, democratizing access to high-tier computational tools.
            </p>
          </div>

          {/* Milestone 4 */}
          <div className="relative space-y-3">
            <div className="absolute -left-[37px] sm:-left-[53px] top-1.5 w-3 h-3 rounded-full bg-red-600 border-2 border-black" />
            <span className="font-mono text-xs text-red-500 font-semibold uppercase tracking-wider">
              Present · Global Systems
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Top Rated Plus &amp; Spatial Intelligence Research
            </h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              Directing global AI architectures and advancing research in autonomous UAV photogrammetry, bio-spatial digital twins, and cyber-physical environmental infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* 4. SYMPHONIC HARMONY & CAPABILITIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Musical Polyphony */}
          <div className="lg:col-span-6 bg-noir-900 border border-white/[0.08] p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <Music className="w-6 h-6 text-red-500" />
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-500 font-semibold">
                THE SYMPHONIC MIND
              </p>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Polyphonic Rigor: 4 Instruments
            </h3>
            <p className="font-sans text-sm text-zinc-300 font-light leading-relaxed">
              Israel is an accomplished multi-instrumentalist playing the <strong>Violin, Viola, Cello, and Piano</strong>. He coordinated university symphonic concerts as General Coordinator from 2019 to 2023.
            </p>
            <p className="font-serif text-lg italic text-zinc-300 font-light">
              "In music, every frequency, rhythm, and tension must resolve in architectural harmony. It is the exact same discipline required to engineer zero-loss computational systems."
            </p>
          </div>

          {/* Right: Technical Competencies */}
          <div className="lg:col-span-6 bg-noir-900 border border-white/[0.08] p-8 sm:p-12 space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-500 font-semibold">
              TECHNICAL COMPETENCIES
            </p>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
              Disciplines &amp; Tooling
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {coreCompetencies.map((comp) => (
                <div key={comp} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                  <span className="text-red-500 font-bold shrink-0">■</span>
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE PHOTOGRAPHY & MEDIA GALLERY */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-b border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
              ARCHIVE
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white">Visual Dossier</h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-sm font-light">
            Records of professional engineering, orchestra coordination, and APEXIUM community sessions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-12">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-[3/4] bg-black border border-white/10 overflow-hidden cursor-pointer group"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="font-mono text-[9px] text-red-400 uppercase tracking-wider">
                  {img.category}
                </span>
                <span className="font-sans text-[11px] text-white font-bold truncate">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-2xl w-full text-center space-y-4">
            <div className="relative aspect-[3/4] w-full max-h-[70vh] bg-black border border-white/20 mx-auto overflow-hidden">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].title}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
            <div>
              <span className="font-mono text-[10px] text-red-400 uppercase tracking-widest">
                {galleryImages[lightboxIndex].category}
              </span>
              <h3 className="font-serif text-2xl text-white mt-1">
                {galleryImages[lightboxIndex].title}
              </h3>
              <p className="font-sans text-sm text-zinc-400 font-light max-w-lg mx-auto mt-1">
                {galleryImages[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
