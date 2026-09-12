'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ExternalLink,
  ArrowUpRight,
  X,
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
  category: 'AI Applications' | 'Enterprise Automation' | 'Spatial & Systems'
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
    id: 'sunrun-solar-ai',
    title: 'Sunrun Energy: Autonomous Voice AI & Solar Qualification Engine',
    category: 'Enterprise Automation',
    client: 'Sunrun Energy & Commercial Solar Network (US)',
    resultHeadline: '$300,000+ in closed sales in 60 days with 100% automated call qualification',
    metric: '$300k+ Sales · 60 Days · Zero Human Triage',
    image: '/images/portfolio/sunrun-solar-ai.jpg',
    tags: ['Vapi AI Voice', 'ElevenLabs', 'Twilio Trunking', 'GoHighLevel (GHL)', 'Deterministic Webhooks'],
    challenge:
      'The solar sales operation was losing qualified homeowners due to slow manual callbacks. Sales reps spent hours dialing unverified leads, resulting in low connection rates and burned ad spend.',
    approach:
      'We engineered an autonomous low-latency voice AI pipeline that triggers within 30 seconds of lead capture, qualifies homeowners based on roof orientation and utility spend, and books appointments directly onto field reps\' calendars.',
    whatIBuilt:
      'Integrated Vapi and ElevenLabs with Twilio telephony trunks, wired into a custom GoHighLevel CRM infrastructure with deterministic failovers, human escalation rules, and automatic SMS appointment reminders.',
    result:
      'Over $300,000 in closed solar contracts within the first 60 days of deployment. Field sales reps only interacted with fully qualified homeowners ready to sign.',
    quote: {
      text: 'Our lead handling process was manual and slow before Izzy stepped in. He implemented an AI workflow that qualifies leads instantly and schedules appointments without human intervention. Massive uptick in conversion rates.',
      author: 'Fredrick Bahr',
      title: 'Sunrun Energy Partner',
    },
  },
  {
    id: 'roof-auto',
    title: 'Roof Auto: Autonomous Contract Ingestion & Scope Parser',
    category: 'Enterprise Automation',
    client: 'Commercial Roofing & Construction Syndicate (US)',
    resultHeadline: 'Reduced contract data extraction and estimation time from 4 hours to 40 seconds',
    metric: '99.8% Time Savings · 40s Turnaround',
    image: '/images/portfolio/roof-auto-parser.jpg',
    tags: ['Anthropic Claude API', 'JSON Schema Matrix', 'PostgreSQL DB', 'Next.js 15'],
    liveUrl: 'https://roof-auto2.vercel.app/',
    challenge:
      'Commercial estimators lost 4+ hours per bid manually calculating material requirements, pitch angles, and square footage from complex 30-page EagleView aerial PDF contracts. Transcription errors routinely caused five-figure material miscalculations.',
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
    id: 'appointment-engine',
    title: '900+ Appointment Multi-Channel AI Orchestration',
    category: 'Enterprise Automation',
    client: 'Growth Syndicate & B2B Agency Network',
    resultHeadline: 'Generated 900+ verified appointments in 4 months, beating human outreach by 50%',
    metric: '900+ Appointments · 50% Higher Conversion',
    image: '/images/editorial/israel-studio-01.jpg',
    tags: ['GoHighLevel', 'n8n Cloud', 'Cold Outbound Infrastructure', 'Claude API'],
    challenge:
      'Client acquisition costs were escalating as cold email deliverability tanked and SDRs struggled with inconsistent daily outreach volumes across multiple channels.',
    approach:
      'We architected an omni-channel acquisition engine pairing dedicated SMTP domain warming with AI conversational nurturing that detects intent, overcomes common objections, and coordinates bookings.',
    whatIBuilt:
      'Engineered an enterprise n8n workflow cluster connected to custom GoHighLevel sub-accounts with intelligent intent classification, secondary follow-up triggers, and live calendar routing.',
    result:
      'Generated 900+ verified appointments in 4 months, outperforming the client\'s human sales team outreach by 50% while reducing customer acquisition cost by 42%.',
    quote: {
      text: 'Izzy\'s expertise is truly unmatched. He tackled a problem that had been plaguing me for over a year and resolved it within just an hour! If you\'re looking for someone who delivers high-quality work quickly, get IZZY.',
      author: 'Darryl',
      title: 'AI Marketing Strategist',
    },
  },
  {
    id: 'edutech',
    title: 'Edutech Global Multi-Campus Admissions Ecosystem',
    category: 'AI Applications',
    client: 'Babcock University & Ahmadu Bello University (ABU)',
    resultHeadline: '68% drop in repetitive support workload with sub-5-second query latency',
    metric: '68% Support Reduction · <5s Latency',
    image: '/images/portfolio/edutech-rag.jpg',
    tags: ['Next.js 15', 'Claude 3.5 Sonnet', 'Supabase pgvector', 'Zoho CRM API'],
    liveUrl: 'https://edutechbabcockabu.vercel.app/',
    challenge:
      'Admissions offices across multiple university campuses were inundated with over 35,000 repetitive prospective student inquiries each semester across WhatsApp, email, and web forms. Human staff spent hundreds of hours answering identical questions.',
    approach:
      'Rather than a generic chatbot prone to hallucinations, we engineered a deterministic RAG architecture. We ingested official institutional PDF guidelines into Supabase pgvector using strict chunking protocols, routing incoming queries through Claude 3.5 Sonnet with rigid schema constraints and human escalation fallbacks.',
    whatIBuilt:
      'Constructed a lightweight, embeddable React chat widget connected to a Next.js serverless backend. Built an administrative command center for admissions directors to inspect real-time query transcripts, update curriculum embeddings, and auto-sync qualified student leads into Zoho CRM.',
    result:
      'Over 68% of inbound student inquiries were resolved instantly with zero staff intervention. Admissions inquiry handling capacity tripled without hiring additional administrative personnel.',
    quote: {
      text: 'Izzy transformed our institutional inquiry bottleneck into an automated, 24/7 lead qualification engine. The documentation and architectural clarity were exceptional.',
      author: 'Academic Directorate',
      title: 'Edutech Global Admissions Partner',
    },
  },
  {
    id: 'mamaguard',
    title: 'MamaGuard: Maternal Clinical Diagnostic Advisory',
    category: 'AI Applications',
    client: "God's Covenant Hospital & Prenatal Clinic",
    resultHeadline: 'Real-time concurrent voice & clinical telemetry logging for prenatal units',
    metric: '100% Non-Blocking Logging · Sub-Second Triage',
    image: '/images/portfolio/mamaguard-telemetry.jpg',
    tags: ['Python FastAPI', 'aiosqlite', 'Anthropic Claude', 'React'],
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
    resultHeadline: 'Sub-millimeter 3D point clouds and thermodynamic decay prediction',
    metric: 'Sub-Millimeter Precision · 35% Spoilage Reduction',
    image: '/images/portfolio/uav-spatial-twin.jpg',
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
    id: 'client-onboarding',
    title: 'Automated Client Onboarding & Lifecycle Infrastructure',
    category: 'Enterprise Automation',
    client: 'Growth Agency Enterprise',
    resultHeadline: 'Eliminated 80% of administrative overhead while accelerating client activation',
    metric: '80% Admin Reduction · Zero Handshake Friction',
    image: '/images/editorial/israel-boardroom-executive.jpg',
    tags: ['GoHighLevel', 'Make.com', 'Stripe API', 'Slack Webhooks'],
    challenge:
      'Onboarding new high-ticket clients required multiple manual steps: contract generation, payment confirmation, Slack channel provisioning, and task delegation, creating a sluggish first impression.',
    approach:
      'We mapped the complete client lifecycle and engineered an automated state machine that provisions all client assets instantly upon checkout confirmation.',
    whatIBuilt:
      'Orchestrated Make.com and GoHighLevel webhooks to trigger contract generation, create private client communication portals, invite team members, and sync project milestones into project management boards.',
    result:
      'Client onboarding time plummeted from 48 hours to 90 seconds. Team administrative overhead dropped by 80%.',
    quote: {
      text: 'Technical mastery combined with strategic vision. Izzy helped us automate our client onboarding and support systems. The result is a smoother customer experience and significantly less administrative overhead.',
      author: 'Tony Flores',
      title: 'Founder | CEO',
    },
  },
]

export default function ProjectsClient() {
  const [filter, setFilter] = useState<'All' | 'AI Applications' | 'Enterprise Automation' | 'Spatial & Systems'>('All')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null)

  const filteredProjects =
    filter === 'All'
      ? caseStudies
      : caseStudies.filter((study) => study.category === filter)

  return (
    <div className="relative overflow-hidden pb-24">
      {/* Seductive Ambient Backlight Flares */}
      <div className="glow-ambient-ruby top-10 -left-48 w-[600px] h-[600px]" />
      <div className="glow-ambient-ruby top-1/2 -right-48 w-[500px] h-[500px]" />
      <div className="glow-ambient-gold bottom-10 left-1/4 w-[450px] h-[450px]" />

      {/* 1. EDITORIAL MASTHEAD */}
      <section className="relative pt-12 pb-16 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-ruby-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-luxury text-ruby-400 font-semibold">
              Engineered Deployments · 2022 — 2026
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[0.96]">
                Systems That Survive in Production Handling Real Money.
              </h1>
              <p className="text-base sm:text-lg text-parchment-200 font-light leading-relaxed max-w-2xl">
                I don’t build toy demos or bolt tools together and hope. The AI decides, deterministic code acts.
                Explore verified case studies across solar, construction, education, and health tech.
              </p>
            </div>

            {/* Quick Metrics Badge */}
            <div className="glass-seduction p-6 border border-white/10 space-y-2 lg:min-w-[280px]">
              <span className="font-mono text-[10px] uppercase tracking-luxury text-gold-400">
                Verified Production Record
              </span>
              <div className="font-serif text-3xl text-white font-normal">
                40+ Deployments
              </div>
              <p className="font-mono text-[11px] text-zinc-400">
                Top Rated Plus (Top 3% on Upwork)
              </p>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/[0.06]">
            {(['All', 'Enterprise Automation', 'AI Applications', 'Spatial & Systems'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-[11px] font-sans uppercase tracking-luxury font-medium transition-all duration-200 ${
                  filter === cat
                    ? 'bg-ruby-600 text-white shadow-lg shadow-ruby-950/60 border border-ruby-400/40'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.07] border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CASE STUDY CARDS GRID */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((study, idx) => (
            <div
              key={study.id}
              className="glass-seduction glass-seduction-hover group flex flex-col justify-between overflow-hidden border border-white/[0.08] relative"
            >
              {/* Media Preview */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-noir-900">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/30 to-transparent" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-luxury bg-noir-950/90 backdrop-blur-md px-3 py-1 border border-white/10 text-gold-400">
                    {study.category}
                  </span>
                  <span className="font-mono text-[10px] text-zinc-400 bg-noir-950/80 backdrop-blur-md px-2.5 py-1 border border-white/10">
                    CASE 0{idx + 1}
                  </span>
                </div>

                {/* Bottom Metric Bar */}
                <div className="absolute bottom-3 left-4 right-4 bg-noir-950/85 backdrop-blur-md px-3 py-2 border border-ruby-500/30 font-mono text-[11px] text-white flex items-center justify-between">
                  <span className="text-ruby-400 font-semibold">{study.metric}</span>
                  <span className="text-zinc-500 text-[10px]">{study.client}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h2 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {study.title}
                  </h2>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {study.resultHeadline}
                  </p>
                </div>

                {/* Tags */}
                <div className="space-y-5 pt-2 border-t border-white/[0.06]">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] uppercase px-2.5 py-1 bg-white/[0.04] border border-white/[0.08] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <button
                      onClick={() => setSelectedCaseStudy(study)}
                      className="btn-luxury-gold text-xs px-5 py-2.5"
                    >
                      Read Full Architecture ↗
                    </button>

                    {study.liveUrl && (
                      <a
                        href={study.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
                      >
                        Live System <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DEEP-DIVE CASE STUDY MODAL */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fade-in">
          <div className="glass-seduction border border-white/20 max-w-4xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-10 space-y-8 my-auto relative shadow-2xl shadow-ruby-950/40">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white border border-white/10 hover:border-ruby-500/50 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-4 pr-12 border-b border-white/[0.08] pb-6">
              <div className="flex items-center gap-3 font-mono text-xs text-gold-400">
                <span>{selectedCaseStudy.category}</span>
                <span className="text-zinc-600">·</span>
                <span className="text-zinc-400">{selectedCaseStudy.client}</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">
                {selectedCaseStudy.title}
              </h2>
              <div className="p-4 bg-ruby-950/40 border-l-2 border-ruby-500 font-serif italic text-lg text-white">
                Measurable Impact: {selectedCaseStudy.metric}
              </div>
            </div>

            {/* Case Study Image in Modal */}
            <div className="relative aspect-[16/9] w-full border border-white/10 overflow-hidden">
              <Image
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Case Study Narrative Sections */}
            <div className="space-y-6 text-sm text-parchment-200 font-light leading-relaxed">
              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-luxury text-ruby-400 font-semibold">
                  01 // The Operational Bottleneck
                </h3>
                <p>{selectedCaseStudy.challenge}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-luxury text-ruby-400 font-semibold">
                  02 // The Engineering Blueprint
                </h3>
                <p>{selectedCaseStudy.approach}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-luxury text-ruby-400 font-semibold">
                  03 // What I Built & Deployed
                </h3>
                <p>{selectedCaseStudy.whatIBuilt}</p>
              </div>

              <div className="space-y-2">
                <h3 className="font-mono text-xs uppercase tracking-luxury text-ruby-400 font-semibold">
                  04 // Verified Revenue & Time Outcome
                </h3>
                <p>{selectedCaseStudy.result}</p>
              </div>

              {selectedCaseStudy.quote && (
                <div className="p-6 border border-white/[0.08] bg-noir-900/80 font-serif italic text-lg text-white space-y-2">
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
                    className="px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-400 text-[10px]"
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
                    className="btn-luxury-outline text-xs inline-flex items-center gap-2"
                  >
                    Launch Production App <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <Link
                  href="/contact"
                  className="btn-seduction text-xs"
                >
                  Initiate Similar Architecture ↗
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
