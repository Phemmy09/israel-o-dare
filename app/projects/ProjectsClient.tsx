'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Search,
  ExternalLink,
  ArrowUpRight,
  X,
  CheckCircle2,
  BrainCircuit,
  Workflow,
  Code2,
  Compass,
  Layers,
  Sparkles,
} from 'lucide-react'

export interface CaseStudy {
  id: string
  title: string
  category: 'AI Applications' | 'Enterprise Automation' | 'Spatial & Systems' | 'Research'
  client: string
  resultHeadline: string
  metric: string
  image: string
  tags: string[]
  liveUrl?: string
  challenge: string
  approach: string
  whatIBuilt: string
  result: string
  quote?: {
    text: string
    author: string
    title: string
  }
}

const caseStudies: CaseStudy[] = [
  {
    id: 'edutech',
    title: 'Edutech Global Multi-Campus Admissions Ecosystem',
    category: 'AI Applications',
    client: 'Babcock University & Ahmadu Bello University (ABU)',
    resultHeadline: 'Automated 68% of repetitive admissions queries with sub-5s response latency',
    metric: '68% Support Reduction · <5s Latency',
    image: '/images/editorial/israel-advisory-portrait.jpg',
    tags: ['Next.js 15', 'Claude 3.5 Sonnet', 'Supabase pgvector', 'Zoho CRM API'],
    liveUrl: 'https://edutechbabcockabu.vercel.app/',
    challenge:
      'Admissions offices across multiple university campuses were inundated with over 35,000 repetitive prospective student inquiries each semester across WhatsApp, email, and web forms. Human staff spent hundreds of hours answering identical questions about tuition schedules, prerequisite courses, and transcript submission rules.',
    approach:
      'Rather than a generic chatbot with hallucinations, we engineered a deterministic RAG architecture. We ingested official institutional PDF guidelines into Supabase pgvector using strict chunking protocols, routing incoming queries through Claude 3.5 Sonnet with rigid schema constraints and human escalation fallbacks.',
    whatIBuilt:
      'Constructed a lightweight, embeddable React IIFE chat widget injected via a single script tag, connected to a Next.js serverless backend. Built an administrative command center for admissions directors to inspect real-time query transcripts, update curriculum embeddings, and auto-sync qualified student leads into Zoho CRM.',
    result:
      'Over 68% of inbound student inquiries were resolved instantly with zero staff intervention. Admissions inquiry handling capacity tripled without hiring additional administrative personnel.',
    quote: {
      text: 'Izzy transformed our institutional inquiry bottleneck into an automated, 24/7 lead qualification engine. The documentation and architectural clarity were exceptional.',
      author: 'Academic Directorate',
      title: 'Edutech Global Admissions Partner',
    },
  },
  {
    id: 'roof-auto',
    title: 'Roof Auto: Autonomous Contract Ingestion Engine',
    category: 'Enterprise Automation',
    client: 'Commercial Roofing & Construction Syndicate (US)',
    resultHeadline: 'Reduced contract data extraction and estimation time from 4 hours to 40 seconds',
    metric: '99.8% Time Savings · Zero Data Loss',
    image: '/images/editorial/israel-architect-chalet.jpg',
    tags: ['Anthropic Claude API', 'JSON Schema Matrix', 'PostgreSQL DB', 'Next.js Actions'],
    liveUrl: 'https://roof-auto2.vercel.app/',
    challenge:
      'Estimators at commercial roofing contractors were losing 4+ hours per bid manually calculating material requirements, pitch angles, and square footage from complex 30-page EagleView aerial PDF contracts. Transcription errors routinely caused five-figure material miscalculations.',
    approach:
      'We designed an asynchronous document processing pipeline. Raw PDF contracts are ingested, OCR-processed, and streamed to Anthropic models configured with strict JSON schema validators to extract precise coordinate matrices and pitch slopes.',
    whatIBuilt:
      'Built a full-stack Next.js web application with PostgreSQL row-level security. The engine auto-computes shingle bundles, underlayment rolls, and crew labor allocations within 40 seconds of upload, outputting an itemized bill of materials and PDF quote ready for client sign-off.',
    result:
      'Cut contract turnaround time from 4 hours to under 40 seconds per project. Contractors reported zero material estimation calculation errors over 200+ processed projects.',
    quote: {
      text: 'Izzy solved a multi-year computational bottleneck in our bidding workflow. The system is bulletproof and has saved us hundreds of operational hours.',
      author: 'Managing Director',
      title: 'Commercial Construction & Roofing Syndicate',
    },
  },
  {
    id: 'mamaguard',
    title: 'MamaGuard: Maternal Clinical Diagnostic Advisory',
    category: 'AI Applications',
    client: "God's Covenant Hospital & Prenatal Clinic",
    resultHeadline: 'Real-time concurrent voice & clinical telemetry logging for prenatal units',
    metric: '100% Non-Blocking Logging · Sub-Second Triage',
    image: '/images/editorial/israel-boardroom-executive.jpg',
    tags: ['Python FastAPI', 'aiosqlite', 'Anthropic Claude', 'React / Vite'],
    liveUrl: 'https://gods-covenant-hospital.vercel.app/',
    challenge:
      'Maternal clinics in regional healthcare facilities faced delayed maternal risk detection due to paper-bound records and clinical staff shortages during critical prenatal checkups.',
    approach:
      'We designed a high-concurrency clinical triage assistant capable of receiving concurrent voice and text observations from midwives and nurses, structuring vital sign logs, and flagging high-risk hypertensive indicators against clinical obstetrics benchmarks.',
    whatIBuilt:
      'Engineered a Python FastAPI asynchronous backend using aiosqlite non-blocking database queries and Claude 3.5 Sonnet to perform real-time clinical risk classification. Integrated a responsive nurse tablet interface for rapid bedside logging.',
    result:
      'Zero latency bottlenecks during peak outpatient clinics, delivering immediate diagnostic risk flags for prenatal hypertension and gestational complications.',
  },
  {
    id: 'spatial-uav',
    title: 'Autonomous UAV Photogrammetry & Bio-Spatial Twins',
    category: 'Spatial & Systems',
    client: 'Sovereign Agricultural & Environmental Research',
    resultHeadline: 'Generated sub-millimeter 3D point clouds and thermodynamic decay models',
    metric: 'Sub-Millimeter Precision · Bayesian Confidence Bounds',
    image: '/images/editorial/israel-tesla-gigafactory.jpg',
    tags: ['UAV Telemetry', 'Gaussian Process Regression', 'Dense Point Clouds', 'NeRFs'],
    challenge:
      'Environmental and agricultural storage facilities in tropical regions struggled with catastrophic post-harvest crop loss due to unpredictable microclimate thermal fluctuations and lack of precise 3D spatial terrain models.',
    approach:
      'We combined autonomous multi-rotor drone photogrammetry with non-parametric Bayesian Gaussian Process Regression (GPR) to map physical terrain and predict internal biological heat and moisture decay.',
    whatIBuilt:
      'Created an end-to-end spatial digital twin pipeline: autonomous flight path waypoints with RTK-GPS georeferencing, photogrammetric dense point-cloud synthesis, and GPR thermodynamic forecasting algorithms providing 95% confidence intervals.',
    result:
      'Provided mathematically verified storage life predictions, reducing post-harvest spoilage risks by over 35% in simulated field deployments.',
  },
  {
    id: 'enterprise-n8n',
    title: 'High-Throughput Enterprise n8n Orchestration Cluster',
    category: 'Enterprise Automation',
    client: 'Digital Mavericks Media & Growth Syndicate',
    resultHeadline: 'Zero-loss multi-channel lead acquisition routing 50,000+ monthly events',
    metric: '50k+ Monthly Events · 99.99% Reliability',
    image: '/images/editorial/israel-observatory-cosmos.jpg',
    tags: ['n8n Self-Hosted', 'Docker', 'Webhooks', 'CRM Synchronizers'],
    challenge:
      'Marketing syndicates running paid media campaigns were experiencing lost leads, failed webhook deliveries, and fractured data between ad networks, conversational voice bots, and CRM pipelines.',
    approach:
      'We architected a self-hosted enterprise n8n cluster on dedicated cloud infrastructure with Redis queue brokers, automated retry loops, and deterministic error-catching fallback routines.',
    whatIBuilt:
      'Constructed 25+ production workflow orchestrations connecting Vapi voice bots, GoHighLevel, Stripe billing webhooks, Airtable data marts, and instant Slack executive alert channels.',
    result:
      'Processed over 50,000 monthly events with zero dropped records and sub-second webhook execution times.',
    quote: {
      text: 'Izzy overdelivered and gave me far more than I expected. He took the time to ensure our entire appointment setting and data infrastructure was customized for scale.',
      author: 'DC Fawcett',
      title: 'CEO, Digital Mavericks Media',
    },
  },
]

const categories = ['All', 'AI Applications', 'Enterprise Automation', 'Spatial & Systems']

export default function ProjectsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  const filteredStudies =
    selectedCategory === 'All'
      ? caseStudies
      : caseStudies.filter((c) => c.category === selectedCategory)

  return (
    <div className="font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. EDITORIAL HEADER & TOP SHOWCASE */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="space-y-6 max-w-3xl">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Case Studies & Deployments
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.95]">
            Engineering Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-parchment-200 font-light leading-relaxed">
            Documented case studies of production AI systems, autonomous workflow orchestration clusters, and spatial computing models. Every project leads with the verified operational outcome.
          </p>
        </div>

        {/* Spatial Architecture Feature Banner */}
        <div className="pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 bg-noir-900/60 p-6 sm:p-8">
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-white/10 bg-noir-950">
              <Image
                src="/images/editorial/israel-architect-chalet.jpg"
                alt="Israel Dare — Systems Architecture and Spatial Modeling"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-[center_top] pt-0.5 filter contrast-[1.02]"
              />
              <div className="absolute bottom-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[9px] text-gold-400">
                SYSTEMS ARCHITECTURE & PHYSICAL MODELING
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Architecture Standard
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white">
                Deterministic Code Meets Physical Constraints
              </h2>
              <p className="text-sm text-parchment-300 font-light leading-relaxed">
                From micro-level LLM prompt harnesses to macroscopic autonomous UAV telemetry and real-world digital twins, our systems are engineered with mathematical precision, zero bloat, and sovereign client ownership.
              </p>
              <div className="pt-2 font-mono text-xs text-zinc-400 flex items-center gap-4">
                <span>ALL CASE STUDIES VERIFIED</span>
                <span className="text-zinc-600">|</span>
                <span className="text-white">FULL CODE HARNESS AUDITED</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MINIMAL CATEGORY FILTER BAR */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-8 border-b border-white/[0.08]">
        <div className="flex flex-wrap items-center gap-6 font-mono text-xs tracking-wider">
          <span className="text-zinc-500 uppercase text-[10px]">Filter Discipline:</span>
          {categories.map((category) => {
            const isSelected = selectedCategory === category
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`py-1 transition-colors uppercase relative ${
                  isSelected ? 'text-gold-400 font-semibold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {category}
                {isSelected && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold-400" />
                )}
              </button>
            )
          })}
        </div>
      </section>

      {/* 3. CASE STUDY CARDS GRID */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        <div className="space-y-10">
          {filteredStudies.map((study, idx) => (
            <div
              key={study.id}
              className="p-6 sm:p-8 lg:p-10 border border-white/[0.08] bg-noir-900/40 hover:bg-noir-900 hover:border-gold-500/30 transition-all duration-300 group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border border-white/10 bg-noir-950">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="object-cover object-[center_top] pt-0.5 transition-transform duration-700 group-hover:scale-105 filter contrast-[1.02]"
                  />
                  <div className="absolute top-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[9px] text-gold-400">
                    CASE 0{idx + 1}
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
                      <span className="text-gold-400 uppercase tracking-widest">{study.category}</span>
                      <span>{study.client}</span>
                    </div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-gold-300 transition-colors">
                      {study.title}
                    </h3>
                  </div>

                  <div className="p-4 bg-noir-950/70 border-l-2 border-gold-500 font-serif italic text-base sm:text-lg text-parchment-100">
                    "{study.resultHeadline}"
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-3">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="btn-luxury-gold text-xs"
                    >
                      Read Full Case Story ↗
                    </button>
                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-luxury-outline text-xs inline-flex items-center gap-1.5"
                      >
                        Visit Production App <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. DEEP-DIVE CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="bg-noir-950 border border-white/15 max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 space-y-8 my-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-3 pr-12 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3 font-mono text-xs text-gold-400">
                <span>{selectedCaseStudy.category}</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">{selectedCaseStudy.client}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">
                {selectedCaseStudy.title}
              </h2>
              <div className="p-4 bg-noir-900 border-l-2 border-gold-500 font-serif italic text-lg text-parchment-100">
                Result: {selectedCaseStudy.metric}
              </div>
            </div>

            {/* Case Study Sections */}
            <div className="space-y-6 text-sm text-parchment-200 font-light leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gold-400">
                  01 // The Operational Challenge
                </h3>
                <p>{selectedCaseStudy.challenge}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gold-400">
                  02 // The Engineering Approach
                </h3>
                <p>{selectedCaseStudy.approach}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gold-400">
                  03 // What I Built & Deployed
                </h3>
                <p>{selectedCaseStudy.whatIBuilt}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-widest text-gold-400">
                  04 // Concrete Measurable Outcome
                </h3>
                <p>{selectedCaseStudy.result}</p>
              </div>

              {selectedCaseStudy.quote && (
                <div className="p-6 border border-white/[0.08] bg-noir-900/60 font-serif italic text-lg text-white space-y-2">
                  <p>"{selectedCaseStudy.quote.text}"</p>
                  <p className="font-mono text-xs not-italic text-gold-400 font-normal">
                    — {selectedCaseStudy.quote.author}, {selectedCaseStudy.quote.title}
                  </p>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-wrap gap-2">
                {selectedCaseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-white/5 border border-white/10 text-zinc-400 text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-3">
                {selectedCaseStudy.liveUrl && (
                  <a
                    href={selectedCaseStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury-outline text-xs"
                  >
                    Launch Live System ↗
                  </a>
                )}
                <Link
                  href="/contact"
                  className="btn-luxury-gold text-xs"
                >
                  Initiate Similar Build
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
