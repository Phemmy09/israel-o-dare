'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  Plane,
  Activity,
  Terminal,
  Calendar,
  Sparkles,
  ChevronRight,
  Quote,
  ShieldCheck,
  Award,
  Music,
} from 'lucide-react'
import Logo from '@/components/Logo'
import { curatedMemos } from '@/lib/memos'

const strategicPillars = [
  {
    number: '01',
    title: 'Autonomous Aerial Robotics & Photogrammetry',
    category: 'Spatial Intelligence & UAVs',
    desc: 'Deploying autonomous multi-rotor UAV swarms, RTK-GPS georeferencing, and multispectral LiDAR payloads to capture high-density 3D spatial point clouds and neural radiance fields (NeRFs), reconstructing real-world terrain into queryable bio-spatial digital twins.',
    tags: ['UAV Swarm Telemetry', 'Dense Point Clouds', 'LiDAR & NeRFs', '3D Gaussian Splatting'],
  },
  {
    number: '02',
    title: 'Predictive Bio-Thermodynamics & GPR Modeling',
    category: 'Mathematical Systems',
    desc: 'Engineering non-parametric Bayesian Gaussian Process Regression (GPR) models to simulate non-linear heat/moisture decay dynamics in tropical root crops and micro-climates, providing mathematically rigorous confidence intervals for preservation.',
    tags: ['Gaussian Process Regression', 'Thermodynamic Simulation', 'Post-Harvest Physics', 'Confidence Bounds'],
  },
  {
    number: '03',
    title: 'Deterministic AI & High-Concurrency Systems',
    category: 'Enterprise Architectures',
    desc: 'Designing asynchronous, zero-loss data ingestion pipelines, low-latency LLM agent networks, and pgvector PostgreSQL database indexations that automate complex business operations with deterministic accuracy.',
    tags: ['Multi-Agent Networks', 'FastAPI & Next.js', 'Vector DBs (pgvector)', 'Zero-Loss n8n'],
  },
  {
    number: '04',
    title: 'Sovereign Environmental & Agronomic Networks',
    category: 'Cyber-Physical Infrastructure',
    desc: 'Bridging physical sensor telemetry with cloud-native workflows to automate parametric crop insurance, monitor decentralized food reserves, and secure sustainable agronomic value chains in emerging economies.',
    tags: ['Parametric Insurance', 'IoT Biosensors', 'Supply Chain Telemetry', 'Sovereign Food Security'],
  },
]

const liveSystems = [
  {
    id: 'edutech',
    title: 'Edutech Global AI Ecosystem',
    tag: 'Knowledge Base (RAG) & Admissions',
    metrics: '68% Support Reduction · <5s Query Latency',
    problem:
      'Admissions staff at Babcock University and Ahmadu Bello University (ABU) overwhelmed by tens of thousands of identical prospective student inquiries across fragmented channels.',
    solution:
      'Engineered an embeddable React IIFE chat widget connected to a Next.js serverless API. Trained on institutional documentation via text-embedding-3-small and Claude 3.5 Sonnet, auto-resolving queries and escalating priority leads directly into Zoho CRM.',
    techStack: ['Next.js', 'Supabase pgvector', 'OpenRouter API', 'Claude 3.5 Sonnet', 'Zoho CRM'],
    liveUrl: 'https://edutechbabcockabu.vercel.app/',
    image: '/images/DGF_6818 copy.jpg',
  },
  {
    id: 'roof-auto',
    title: 'Roof Auto: Ingestion Engine',
    tag: 'Autonomous Document Parsing & Estimation',
    metrics: 'Processing Reduced from Hours to 40s',
    problem:
      'Construction and roofing contractors bogged down manually extracting complex spatial dimensions, slope pitches, and material dependencies from multi-page Eagle View PDF contracts.',
    solution:
      'Constructed an asynchronous document ingestion pipeline feeding raw blueprint data into Anthropic LLMs to extract structured JSON coordinate matrices, automatically calculating material bills and crew allocations.',
    techStack: ['Next.js Server Actions', 'Supabase DB', 'Anthropic API', 'JSON Schemas'],
    liveUrl: 'https://roof-auto2.vercel.app/',
    image: '/images/DGF_6861 copy.jpg',
  },
  {
    id: 'mamaguard',
    title: 'MamaGuard AI Advisory',
    tag: 'Full-Stack Maternal Health Tech',
    metrics: 'Concurrent Voice & Text Clinical Logging',
    problem:
      'Delayed risk notifications and paper-bound records complicating maternal prenatal tracking for God\'s Covenant Hospital.',
    solution:
      'Developed a concurrent voice and text prenatal diagnostic advisory platform. Built on a Python FastAPI backend with aiosqlite non-blocking execution, utilizing Claude to identify clinical prenatal warning indicators in real time.',
    techStack: ['Python FastAPI', 'SQLite (aiosqlite)', 'React', 'Vite', 'Anthropic API'],
    liveUrl: 'https://gods-covenant-hospital.vercel.app/',
    image: '/images/DGF_6865 copy.jpg',
  },
  {
    id: 'oracle',
    title: 'Oracle: Personal Intelligence',
    tag: 'Autonomous Web Scraping & Curation',
    metrics: '12+ Hours Saved Weekly · Zero-Loss RLS DB',
    problem:
      'Information fatigue and wasted productive hours filtering noise across web platforms to find high-signal technology jobs, scholarships, and academic fellowships.',
    solution:
      'Engineered an autonomous intelligence platform running custom background Scrapy pipelines with PostgreSQL Row-Level Security (RLS) to deliver clean, deduplicated daily task briefs.',
    techStack: ['Next.js App Router', 'Supabase Auth & DB', 'Scrapy', 'RLS Constraints'],
    liveUrl: 'https://oracle-black-six.vercel.app/',
    image: '/images/DGF_6811 copy.jpg',
  },
]

const clientEndorsements = [
  {
    quote:
      'Working with Izzy was a FANTASTIC experience! His expertise in AI systems and workflow design truly shines through his meticulous code, detailed documentation, and proactive communication. Izzy consistently went above and beyond.',
    author: 'Timothy',
    title: 'AI Developer & Entrepreneur',
    affiliation: 'Global Systems Contract',
  },
  {
    quote:
      'Izzy\'s expertise is truly unmatched. He tackled a technical bottleneck that had been plaguing our team for over a year and resolved it within just an hour. If you\'re looking for high-precision engineering, get Izzy.',
    author: 'Darryl',
    title: 'AI Marketing Strategist',
    affiliation: 'Growth Syndicate',
  },
  {
    quote:
      'Izzy overdelivered and gave me far more than I expected. He took the time to ensure our entire appointment setting and data infrastructure was customized for scale.',
    author: 'DC Fawcett',
    title: 'Chief Executive Officer',
    affiliation: 'Digital Mavericks Media',
  },
]

export default function HomePage() {
  const [activeSystemId, setActiveSystemId] = useState(liveSystems[0].id)
  const activeSystem =
    liveSystems.find((s) => s.id === activeSystemId) || liveSystems[0]

  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen font-sans selection:bg-red-600 selection:text-white">
      {/* 1. CINEMATIC EDITORIAL HERO MASTHEAD */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-5 sm:px-8 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle Hairline Background Grid */}
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-40" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Top Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-12 border-b border-white/[0.08] font-mono text-[10px] sm:text-[11px] text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse-subtle" />
              <span className="text-white font-semibold uppercase tracking-widest">
                DIGITAL HEADQUARTERS · ISRAEL DARE
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span>TOP RATED PLUS ON UPWORK (TOP 3%)</span>
              <span className="hidden sm:inline text-zinc-700">|</span>
              <span className="hidden sm:inline">FIRST CLASS B.ENG. HONOURS</span>
            </div>
          </div>

          {/* Master Headline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 sm:pt-16 items-end">
            <div className="lg:col-span-8 space-y-6">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-red-500 font-semibold">
                SYSTEMS ARCHITECT · SPATIAL INTELLIGENCE · RESEARCHER
              </p>
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-white font-normal">
                Engineering <span className="italic font-light">Autonomous</span> Systems, Bio-Spatial Models &amp; Generational IP.
              </h1>
              <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl pt-4">
                At the intersection of <strong>autonomous aerial robotics</strong>, <strong>drone photogrammetry</strong>, <strong>Gaussian Process Regression</strong>, and <strong>high-concurrency AI systems</strong>.
              </p>

              <div className="flex flex-wrap gap-4 pt-6">
                <Link href="/services" className="btn-luxury">
                  Explore Systems &amp; Advisory ↗
                </Link>
                <Link href="/research" className="btn-luxury-outline">
                  Academic &amp; Spatial Research
                </Link>
                <Link href="/contact" className="btn-luxury-carmine">
                  Initiate Inquiry
                </Link>
              </div>
            </div>

            {/* Right: Authentic Portrait Framing */}
            <div className="lg:col-span-4 relative group">
              <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:max-w-none bg-black border border-white/20 p-2 overflow-hidden shadow-2xl">
                <div className="relative w-full h-full overflow-hidden bg-zinc-900">
                  <Image
                    src="/images/Izzy.jpg"
                    alt="Israel Dare — Chief Systems Architect"
                    fill
                    className="object-cover object-top filter grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                    priority
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-3 bg-black/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <p className="font-sans font-bold text-xs uppercase tracking-wider text-white">
                      Israel Dare
                    </p>
                    <p className="font-mono text-[9px] text-zinc-400">Chief Systems Architect</p>
                  </div>
                  <Logo variant="monogram" size="sm" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Index Line */}
        <div className="max-w-7xl mx-auto w-full pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[10px] text-zinc-500 border-t border-white/[0.06] mt-12">
          <span>COORDINATES: LAGOS · GLOBAL DEPLOYMENTS</span>
          <span>SPECIALTY: AUTONOMOUS INFRASTRUCTURE &amp; BIO-DIGITAL THERMODYNAMICS</span>
          <span>ESTABLISHED MMXXIII</span>
        </div>
      </section>

      {/* 2. THE MANIFESTO / PHILOSOPHY STATEMENT */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-bold">
            THE CRUCIBLE &amp; THE CODE
          </p>
          <blockquote className="font-serif text-2xl sm:text-4xl lg:text-5xl text-zinc-200 leading-tight italic font-light">
            "I watched television for the first time at twelve. Got my first phone at sixteen. Where I grew up, owning a laptop made you a suspect, not a student. Today, I construct systems that process hundreds of thousands of dollars on autopilot. Easy work bores me. Bring me the hard stuff."
          </blockquote>
          <div className="pt-4 font-mono text-xs text-zinc-400 uppercase tracking-widest flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-red-600" />
            <span>ISRAEL DARE — FOUNDER'S DECLARATION</span>
            <span className="w-8 h-[1px] bg-red-600" />
          </div>
        </div>
      </section>

      {/* 3. THE 4 STRATEGIC PILLARS (ELITE & UNTAPPED NICHES) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-16 border-b border-white/[0.08]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
                CORE DISCIPLINES
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight">
                Architectural Domains
              </h2>
            </div>
            <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-md font-light leading-relaxed">
              Synthesizing autonomous aerospace robotics, spatial digital twins, predictive mathematical physics, and high-concurrency software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.08] mt-px">
            {strategicPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="bg-noir-950 p-8 sm:p-12 space-y-6 hover:bg-noir-900 transition-colors duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-light text-zinc-600 group-hover:text-red-500 transition-colors">
                      {pillar.number}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 group-hover:text-zinc-300">
                      {pillar.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide group-hover:text-zinc-100">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-sm text-zinc-400 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2.5 py-1 bg-black border border-white/10 text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED LIVE SYSTEMS & TECHNICAL PORTFOLIOS */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
                VERIFIED BUILDS
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight">
                Featured Systems Portfolio
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-white uppercase tracking-widest"
            >
              View Full Systems Index <ArrowRight className="w-4 h-4 text-red-500" />
            </Link>
          </div>

          {/* Interactive Systems Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* System Selectors Column */}
            <div className="lg:col-span-5 space-y-3">
              {liveSystems.map((item) => {
                const isActive = item.id === activeSystemId
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSystemId(item.id)}
                    className={`w-full text-left p-6 border transition-all duration-300 relative group ${
                      isActive
                        ? 'bg-black border-white text-white'
                        : 'bg-noir-950 border-white/[0.08] text-zinc-400 hover:border-white/30 hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600" />
                    )}
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                        {item.tag}
                      </span>
                      <span className="font-mono text-[10px] text-red-400 font-semibold">
                        {item.metrics.split('·')[0]}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl tracking-wide font-normal">
                      {item.title}
                    </h3>
                  </button>
                )
              })}
            </div>

            {/* Active System Detailed Dossier */}
            <div className="lg:col-span-7 bg-black border border-white/20 p-8 sm:p-12 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-red-400 font-bold">
                    SYSTEM DOSSIER · {activeSystem.tag}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-white mt-1">
                    {activeSystem.title}
                  </h3>
                </div>
                {activeSystem.liveUrl && (
                  <a
                    href={activeSystem.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury text-[10px] py-2 px-4 inline-flex items-center gap-1"
                  >
                    Inspect Live Build <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              {/* Performance Impact Callout */}
              <div className="p-4 bg-noir-950 border border-white/10 font-mono text-xs text-zinc-300 flex items-center justify-between">
                <span className="text-zinc-500 uppercase">Impact Metric:</span>
                <span className="text-white font-bold">{activeSystem.metrics}</span>
              </div>

              <div className="space-y-6 text-sm font-light leading-relaxed">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                    Operational Bottleneck
                  </p>
                  <p className="text-zinc-300">{activeSystem.problem}</p>
                </div>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-red-400 font-semibold mb-1">
                    Engineered Solution
                  </p>
                  <p className="text-zinc-300">{activeSystem.solution}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 mb-3">
                  Technical Architecture
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeSystem.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 bg-noir-900 border border-white/10 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. LIVE DISPATCHES & MEMOS (ISRAEL'S "TWEETS" / CURATED THOUGHTS) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
                INTELLECTUAL SALON
              </p>
              <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight">
                Dispatches &amp; Memos
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-mono text-xs text-zinc-300 hover:text-white uppercase tracking-widest"
            >
              Full Journal &amp; Essays <ArrowRight className="w-4 h-4 text-red-500" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedMemos.slice(0, 3).map((memo) => (
              <div
                key={memo.id}
                className="bg-noir-900 border border-white/[0.08] p-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
                    <span className="text-red-400 font-bold uppercase tracking-wider">
                      {memo.category}
                    </span>
                    <span>{memo.date}</span>
                  </div>
                  <p className="font-sans text-sm text-zinc-200 font-light leading-relaxed">
                    "{memo.content}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2 font-mono text-[9px] text-zinc-500">
                  {memo.tags?.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SYMPHONIC LIFE, ACADEMIC RIGOR & SOCIAL IMPACT */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
              THE POLYMATHIC DIMENSION
            </p>
            <h2 className="font-serif text-4xl sm:text-6xl text-white tracking-tight leading-[0.98]">
              The Symphonic Mind &amp; Social Legacy
            </h2>
            <p className="font-sans text-base text-zinc-300 font-light leading-relaxed">
              Outside of systems engineering and spatial mathematics, Israel Dare is an accomplished, self-taught multi-instrumentalist performing on the <strong>Violin, Viola, Cello, and Piano</strong>. He coordinated university symphonic concerts as General Coordinator from 2019 to 2023.
            </p>
            <p className="font-sans text-base text-zinc-300 font-light leading-relaxed">
              In 2024, he founded <strong>APEXIUM</strong>, a grassroots social impact initiative delivering AI literacy and computational thinking workshops to youth across community halls in Nigeria, permanently closing the digital divide.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/about" className="btn-luxury-outline">
                Read Narrative Biography
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="relative aspect-[3/4] bg-black border border-white/20 overflow-hidden">
              <Image
                src="/images/DGF_5199 copy (1).jpg"
                alt="Israel Dare Violin Performance"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 50vw, 300px"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-black/80 font-mono text-[9px] text-white">
                Violin Solo Performance
              </div>
            </div>

            <div className="relative aspect-[3/4] bg-black border border-white/20 overflow-hidden">
              <Image
                src="/images/DGF_5744 copy.jpg"
                alt="Israel Dare APEXIUM Workshop"
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 1024px) 50vw, 300px"
              />
              <div className="absolute bottom-0 inset-x-0 p-3 bg-black/80 font-mono text-[9px] text-white">
                APEXIUM Community Session
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. VERIFIED CLIENT ENDORSEMENTS */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
              PROVEN TRACK RECORD
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white">
              Client &amp; Partner Endorsements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientEndorsements.map((t, idx) => (
              <div
                key={idx}
                className="bg-noir-950 border border-white/[0.08] p-8 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <Quote className="w-6 h-6 text-red-600 opacity-60" />
                  <p className="font-serif text-lg text-zinc-200 italic leading-relaxed font-light">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-white/[0.06]">
                  <p className="font-sans font-bold text-sm text-white">{t.author}</p>
                  <p className="font-mono text-[10px] text-zinc-400">{t.title}</p>
                  <p className="font-mono text-[9px] text-red-400 mt-0.5">{t.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. EXECUTIVE CALL TO ACTION & CONSULTATION GATEWAY */}
      <section className="py-28 sm:py-40 px-5 sm:px-8 bg-black text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <Logo variant="monogram" size="lg" className="mx-auto" />
          <h2 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95]">
            Initiate a Private Engagement
          </h2>
          <p className="font-sans text-base sm:text-xl text-zinc-400 font-light max-w-2xl mx-auto leading-relaxed">
            Open for challenging systems contracts, autonomous drone photogrammetry integrations, high-concurrency SaaS builds, and academic research collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/contact" className="btn-luxury">
              Direct Office Inquiry ↗
            </Link>
            <a
              href="https://Calendly.com/izzy-marketing-hub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline"
            >
              Schedule Strategy Call 📅
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
