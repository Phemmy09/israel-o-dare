'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { PAYMENT_LINKS } from '@/lib/payment-links'
import {
  Search,
  BrainCircuit,
  Workflow,
  Code2,
  Compass,
  ShieldCheck,
  Zap,
  PhoneCall,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  X,
  Layers,
  Sparkles,
  FileText,
  Clock,
} from 'lucide-react'

export interface ServiceDetail {
  id: string
  title: string
  category: string
  problemSolved: string
  solutionArchitecture: string
  measurableOutcome: string
  priceStarting: string
  timeline: string
  image: string
  tags: string[]
  searchKeywords: string[]
}

const detailedServices: ServiceDetail[] = [
  {
    id: 'voice-ai',
    title: 'Autonomous AI Voice Agents & High-Volume Telephony',
    category: 'AI Voice & Telephony',
    problemSolved:
      'Losing high-value leads because sales reps take hours to call back. Human outbound teams burning out on manual dialing with low connection rates and high cost-per-acquisition.',
    solutionArchitecture:
      'We engineer ultra-low latency voice agents utilizing Vapi, ElevenLabs, and Twilio telephony trunks. The agent calls inbound leads within 30 seconds, dynamically calculates qualification criteria, overcomes objections, and directly books appointments onto reps\' calendars.',
    measurableOutcome: '$300,000+ closed sales in 60 days for Sunrun solar network with zero human qualification latency.',
    priceStarting: 'From $4,500',
    timeline: '10–14 Days Turnaround',
    image: '/images/services/voice-ai-telephony.jpg',
    tags: ['Vapi AI Voice', 'ElevenLabs', 'Twilio Trunks', 'GoHighLevel', 'Real-Time Telemetry'],
    searchKeywords: [
      'voice ai', 'voice agent', 'telephony', 'vapi', 'elevenlabs', 'twilio', 'cold calling', 'inbound qualification',
      'solar leads', 'appointment booking', 'ai receptionist', 'phone bot', 'lead leakage', 'slow response time'
    ],
  },
  {
    id: 'crm-revenue-ghl',
    title: 'Enterprise GoHighLevel (GHL) & Revenue CRM Architecture',
    category: 'CRM & Automation',
    problemSolved:
      'Fractured lead data, dropped webhooks, disorganized pipelines, and manual follow-ups that cause high-ticket prospects to slip through the cracks.',
    solutionArchitecture:
      '4+ years deep GHL engineering. We design custom sub-account architectures, multi-channel automated nurturing (SMS, Email, Ringless Voicemail), intelligent lead scoring, and bi-directional API synchronizations with Zoho, HubSpot, or custom databases.',
    measurableOutcome: 'Eliminated 80% of administrative operational overhead while accelerating client onboarding from 48 hours to 90 seconds.',
    priceStarting: 'From $2,500',
    timeline: '7–12 Days Turnaround',
    image: '/images/services/revenue-crm-ghl.jpg',
    tags: ['GoHighLevel (GHL)', 'Zoho CRM', 'HubSpot', 'n8n Clusters', 'Deterministic Webhooks'],
    searchKeywords: [
      'gohighlevel', 'ghl', 'crm setup', 'sales funnel', 'pipeline automation', 'lead scoring', 'zoho crm', 'hubspot',
      'marketing automation', 'sms sequences', 'email follow up', 'onboarding workflow', 'agency automation'
    ],
  },
  {
    id: 'ai-security-redteam',
    title: 'AI Security Audits, Governance & Adversarial Red Teaming',
    category: 'Security & Red Teaming',
    problemSolved:
      'Vulnerabilities in enterprise LLM deployments, jailbreak attacks, prompt injection exploits, data leakage, and compliance fines when AI handles real money or sensitive customer data.',
    solutionArchitecture:
      'Executed by a Microsoft Certified AI Red Teamer and Securiti.ai Governance Certified architect. We subject your models to adversarial penetration testing, implement rigid JSON schema containment, and build deterministic guardrails that prevent unauthorized state mutations.',
    measurableOutcome: '100% audit compliance and zero prompt-injection vulnerabilities across 40+ deployed production clusters.',
    priceStarting: 'From $3,500',
    timeline: '5–8 Days Turnaround',
    image: '/images/services/ai-security-redteam.jpg',
    tags: ['Microsoft AI Red Teamer', 'Securiti.ai', 'Prompt Injection Defense', 'Schema Guardrails'],
    searchKeywords: [
      'ai security', 'red teaming', 'prompt injection', 'jailbreak defense', 'llm governance', 'data compliance',
      'adversarial testing', 'securiti.ai', 'microsoft certified', 'guardrails', 'model safety', 'vulnerability audit'
    ],
  },
  {
    id: 'document-contract-ai',
    title: 'Autonomous Contract Ingestion & Document Extraction Engines',
    category: 'Document Parsing',
    problemSolved:
      'Commercial estimators and legal teams wasting 4+ hours per deal manually extracting square footage, pitch angles, and material specifications from 30+ page PDF blueprints.',
    solutionArchitecture:
      'Asynchronous document processing pipeline built on Claude 3.5 Sonnet and OCR. Ingests raw PDF blueprints and insurance contracts, executes mathematical coordinate matrices, and outputs ready-to-sign material orders and bills of materials.',
    measurableOutcome: 'Cut bid calculation turnaround from 4 hours to 40 seconds with zero material miscalculations across 200+ projects.',
    priceStarting: 'From $5,000',
    timeline: '2–3 Weeks Turnaround',
    image: '/images/portfolio/roof-auto-parser.jpg',
    tags: ['Claude 3.5 Sonnet', 'JSON Schema Matrix', 'PostgreSQL DB', 'Next.js 15'],
    searchKeywords: [
      'roof auto', 'pdf extraction', 'contract parser', 'document ocr', 'construction tech', 'roofing scope',
      'blueprint reading', 'bill of materials', 'claude api', 'automated estimation', 'insurance scope extraction'
    ],
  },
  {
    id: 'knowledge-rag',
    title: 'Enterprise Knowledge RAG & Institutional Admissions Copilots',
    category: 'AI Knowledge Systems',
    problemSolved:
      'Customer support or admissions offices inundated with tens of thousands of repetitive questions across web, WhatsApp, and email, leading to human burnout and slow response times.',
    solutionArchitecture:
      'Deterministic Retrieval-Augmented Generation (RAG) using Supabase pgvector and hybrid keyword search. Ingests dense institutional guidelines, syllabi, or manuals with strict schema constraints to eliminate hallucinations and escalate edge cases.',
    measurableOutcome: 'Automated 68% of inbound queries for Babcock University and Ahmadu Bello University with sub-5-second query latency.',
    priceStarting: 'From $4,000',
    timeline: '10–14 Days Turnaround',
    image: '/images/portfolio/edutech-rag.jpg',
    tags: ['Next.js 15', 'Claude 3.5 Sonnet', 'Supabase pgvector', 'Zoho CRM API'],
    searchKeywords: [
      'rag', 'retrieval augmented generation', 'vector search', 'supabase pgvector', 'pinecone', 'university admissions',
      'customer support bot', 'hallucination free', 'knowledge base', 'edutech', 'enterprise search'
    ],
  },
  {
    id: 'spatial-uav-twins',
    title: 'Bio-Spatial Digital Twins & Autonomous UAV Telemetry',
    category: 'Spatial & Hardware',
    problemSolved:
      'Catastrophic crop spoilage, warehouse thermal decay, and lack of sub-millimeter 3D spatial models for critical infrastructure and agricultural operations.',
    solutionArchitecture:
      'End-to-end spatial digital twin pipeline pairing RTK-GPS autonomous drone flight paths with dense point-cloud photogrammetry and Bayesian Gaussian Process Regression (GPR) to forecast thermodynamic decay with 95% confidence intervals.',
    measurableOutcome: 'Sub-millimeter terrain accuracy, reducing post-harvest agricultural crop spoilage by 35%.',
    priceStarting: 'From $8,500',
    timeline: '3–5 Weeks Scope',
    image: '/images/portfolio/uav-spatial-twin.jpg',
    tags: ['UAV Photogrammetry', 'Gaussian Process Regression', 'Point Clouds', 'NeRFs'],
    searchKeywords: [
      'spatial computing', 'drone photogrammetry', 'uav telemetry', 'gaussian process', 'digital twins',
      'agriculture tech', 'crop decay', 'point cloud', 'lidar mapping', 'terrain analysis'
    ],
  },
  {
    id: 'cold-outbound-engine',
    title: 'Cold Outbound Deliverability & Omni-Channel Acquisition',
    category: 'CRM & Automation',
    problemSolved:
      'Cold emails landing in spam, inconsistent sales SDR outbound volumes, and escalating client acquisition costs across paid advertising.',
    solutionArchitecture:
      'Omni-channel outbound acquisition engine pairing dedicated SMTP domain warming with conversational AI that detects intent, overcomes common objections, and coordinates bookings across email, SMS, and LinkedIn.',
    measurableOutcome: 'Generated 900+ verified appointments in 4 months, beating the client\'s human sales team by 50% and cutting CAC by 42%.',
    priceStarting: 'From $3,000',
    timeline: '7–10 Days Turnaround',
    image: '/images/editorial/israel-studio-01.jpg',
    tags: ['GoHighLevel', 'n8n Cloud', 'SMTP Warming', 'Claude API', 'Outbound AI'],
    searchKeywords: [
      'cold email', 'deliverability', 'outbound leads', 'appointment setting', 'lead generation', 'smtp warming',
      'b2b sales', 'acquisition engine', 'sales development', 'ghl outreach', 'n8n cluster'
    ],
  },
  {
    id: 'custom-webapp-saas',
    title: 'Bespoke Full-Stack AI Web Platforms & SaaS Portals',
    category: 'Full-Stack Apps',
    problemSolved:
      'Generic WordPress or no-code templates failing under real-time AI compute, high concurrency, strict authentication rules, or complex transactional billing.',
    solutionArchitecture:
      'Engineered with Next.js 15, TypeScript, Python FastAPI, PostgreSQL, and Stripe. Clean, modular architecture with role-based access control, real-time streaming LLM endpoints, and zero unnecessary dependencies.',
    measurableOutcome: 'Sub-100ms API latency, non-blocking asynchronous database queries, and sovereign client code ownership.',
    priceStarting: 'From $6,000',
    timeline: '3–5 Weeks Turnaround',
    image: '/images/editorial/israel-boardroom-executive.jpg',
    tags: ['Next.js 15', 'Python FastAPI', 'PostgreSQL', 'Stripe API', 'Claude API'],
    searchKeywords: [
      'custom web app', 'next.js', 'fastapi', 'saas development', 'stripe integration', 'full stack ai',
      'react portal', 'enterprise software', 'bespoke application', 'sovereign code'
    ],
  },
]

const servicePackages = [
  {
    name: 'BEGINNER',
    price: '$800',
    frequency: 'one-time investment',
    badge: 'Foundation',
    paystackUrl: PAYMENT_LINKS.beginner800,
    description: 'For growing operators needing quick operational relief from repetitive inbound messaging and lead follow-up.',
    features: [
      'Automated Email Sequences & Smart Follow-Up',
      'Instant SMS Lead Response Workflows',
      'Social Media 24/7 Auto Responder',
      'Basic Lead Capture & Spreadsheet/CRM Sync',
      '7 Days Post-Launch Validation',
    ],
    popular: false,
    cta: 'Secure Beginner Plan ($800)',
  },
  {
    name: 'PROFESSIONAL',
    price: '$2,500',
    frequency: 'one-time investment',
    badge: 'High Conversion',
    paystackUrl: PAYMENT_LINKS.professional2500,
    description: 'Complete high-converting sales engine and custom web infrastructure engineered to turn cold traffic into booked deals.',
    features: [
      'Complete High-Converting Sales Funnel',
      'Bespoke Website Design (Up to 10 Pages)',
      'End-to-End Marketing Automation Pipelines',
      '24/7 Conversational AI Chatbot Support',
      'CRM Integration (GoHighLevel, HubSpot, or Zoho)',
      '14 Days Active Engineering Support',
    ],
    popular: false,
    cta: 'Secure Professional Plan ($2,500)',
  },
  {
    name: 'PREMIUM',
    price: '$5,000',
    frequency: 'one-time investment',
    badge: 'Most Popular',
    paystackUrl: PAYMENT_LINKS.premium5000,
    description: 'The complete enterprise revenue stack: full brand prestige, custom AI twin/agent, and automated multi-channel growth.',
    features: [
      'Full Brand Identity Design & Asset Suite',
      'Comprehensive High-Performance Web Platform',
      'Social Media Management & Content Automation',
      'Advanced Multi-Channel Marketing Automation',
      'Custom Autonomous AI Agent / Digital Twin',
      'CRM Architecture, Lead Scoring & Telemetry',
      '30 Days Priority Optimization & Monitoring',
    ],
    popular: true,
    cta: 'Secure Premium Plan ($5,000)',
  },
  {
    name: 'EXCLUSIVE',
    price: '$30,000',
    frequency: 'annual executive partnership',
    badge: 'Enterprise Sovereign',
    paystackUrl: PAYMENT_LINKS.exclusive30000,
    description: 'Full-year fractional CTO & AI systems architecture. We handle every facet of your brand, software, and autonomous pipelines.',
    features: [
      'Full Brand Identity & Continuous Creative Evolution',
      'Comprehensive Website Design & Infrastructure / year',
      '365-Day Social Media Management & Distribution',
      'Enterprise End-to-End Marketing Automation / year',
      'Custom Dedicated AI Agent / Twin Infrastructure / year',
      'Continuous Red-Teaming, Security & Performance Tuning',
      'Direct Private Hotline to Israel Dare',
    ],
    popular: false,
    cta: 'Request Executive Partnership ($30k)',
  },
]

const processSteps = [
  {
    step: '01',
    name: 'Discovery & Planning',
    timeline: 'Days 1 – 3',
    description:
      'We audit your current operations, find where leads leak, inspect data schemas, and identify the exact bottlenecks burning out your team.',
  },
  {
    step: '02',
    name: 'Concept Development',
    timeline: 'Days 4 – 7',
    description:
      'I map the entire system before writing a line of code: where leads enter, what decides, what executes, and what gets logged with deterministic guarantees.',
  },
  {
    step: '03',
    name: 'Design & Development',
    timeline: 'Days 8 – 18',
    description:
      'Meticulous code execution. The AI decides; deterministic code acts. Clean TypeScript, Python FastAPI, and resilient webhooks built for real money.',
  },
  {
    step: '04',
    name: 'Testing & Quality Assurance',
    timeline: 'Days 19 – 23',
    description:
      'Certified AI Red Teaming. We stress-test prompt injection vectors, failover paths, API rate limits, and latency before your customers ever touch it.',
  },
  {
    step: '05',
    name: 'Launch & Deployment',
    timeline: 'Day 24',
    description:
      'Zero-downtime sovereign rollout. 100% intellectual property transfer, executive runbooks, and staff walk-through so you own every line of work.',
  },
  {
    step: '06',
    name: 'Evaluation & Optimization',
    timeline: 'Continuous',
    description:
      'Live observability, conversion tracking, token cost optimization, and proactive monitoring to ensure your revenue engine scales effortlessly.',
  },
]

const categories = [
  'All',
  'AI Voice & Telephony',
  'CRM & Automation',
  'Security & Red Teaming',
  'Document Parsing',
  'AI Knowledge Systems',
  'Full-Stack Apps',
  'Spatial & Hardware',
]

export default function ServicesClient() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filteredServices = useMemo(() => {
    const query = searchQuery.toLowerCase().trim()
    return detailedServices.filter((svc) => {
      const matchesCat = activeCategory === 'All' || svc.category === activeCategory
      if (!matchesCat) return false
      if (!query) return true

      const inTitle = svc.title.toLowerCase().includes(query)
      const inProblem = svc.problemSolved.toLowerCase().includes(query)
      const inSolution = svc.solutionArchitecture.toLowerCase().includes(query)
      const inOutcome = svc.measurableOutcome.toLowerCase().includes(query)
      const inTags = svc.tags.some((t) => t.toLowerCase().includes(query))
      const inKeywords = svc.searchKeywords.some((k) => k.toLowerCase().includes(query))

      return inTitle || inProblem || inSolution || inOutcome || inTags || inKeywords
    })
  }, [searchQuery, activeCategory])

  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen relative overflow-hidden pb-24">
      {/* Seductive Ambient Background Glow */}
      <div className="glow-ambient-ruby top-10 -left-60 w-[650px] h-[650px]" />
      <div className="glow-ambient-ruby top-1/2 -right-60 w-[600px] h-[600px]" />
      <div className="glow-ambient-gold bottom-10 left-1/3 w-[500px] h-[500px]" />

      {/* 1. EDITORIAL HEADER */}
      <section className="relative pt-12 pb-16 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-ruby-500 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-luxury text-ruby-400 font-semibold">
              Bespoke Architecture & Revenue Infrastructure
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[0.95]">
              Built for Operators Who Refuse Second Place.
            </h1>
            <p className="text-lg sm:text-xl text-parchment-200 font-light leading-relaxed">
              I do not do speculative toys or hourly busywork. I design and build production-ready revenue infrastructure,
              autonomous agent workflows, and bespoke web platforms with deterministic guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* 2. INSTANT SEARCH & FILTER COMMAND BAR */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pt-12">
        <div className="glass-seduction p-6 sm:p-8 border border-white/15 space-y-6 shadow-2xl shadow-ruby-950/40">
          <div className="space-y-2">
            <label htmlFor="service-search" className="font-mono text-xs uppercase tracking-luxury text-ruby-400 font-semibold block">
              Instant Service & Problem Search
            </label>
            <div className="relative">
              <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                id="service-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your challenge, keyword, or tool (e.g. 'leads leaking', 'voice bot', 'roofing', 'GHL', 'hallucination', 'vapi', 'crm')..."
                className="w-full bg-noir-900/90 border border-white/15 pl-12 pr-10 py-4 text-sm sm:text-base text-white placeholder:text-zinc-500 focus:outline-none focus:border-ruby-500 transition-colors font-sans"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-[11px] font-sans uppercase tracking-luxury font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-ruby-600 text-white shadow-lg shadow-ruby-950/60 border border-ruby-400/40'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Results Metric */}
          <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-2 border-t border-white/[0.06]">
            <span>
              Showing {filteredServices.length} of {detailedServices.length} Specialized Architectures
            </span>
            {searchQuery && (
              <span className="text-ruby-400">
                Filtered by keyword: "{searchQuery}"
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 3. DETAILED SERVICES CATALOGUE */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
        {filteredServices.length === 0 ? (
          <div className="glass-seduction p-12 text-center space-y-4 border border-white/10">
            <p className="font-serif text-2xl text-white">No services matched your specific query.</p>
            <p className="text-sm text-zinc-400">
              Try searching for "voice", "GHL", "contract", "security", "RAG", or "leads", or contact Israel Dare directly for a bespoke engineering consultation.
            </p>
            <button
              onClick={() => {
                setSearchQuery('')
                setActiveCategory('All')
              }}
              className="btn-luxury-gold text-xs mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {filteredServices.map((svc) => (
              <div
                key={svc.id}
                className="glass-seduction glass-seduction-hover group flex flex-col justify-between overflow-hidden border border-white/[0.08] relative shadow-xl"
              >
                {/* Visual Imagery */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-noir-900">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/30 to-transparent" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-luxury bg-noir-950/90 backdrop-blur-md px-3 py-1 border border-white/10 text-gold-400">
                      {svc.category}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-400 bg-noir-950/80 backdrop-blur-md px-2.5 py-1 border border-white/10">
                      {svc.timeline}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 bg-noir-950/85 backdrop-blur-md px-3 py-2 border border-ruby-500/30 font-mono text-[11px] text-white flex items-center justify-between">
                    <span className="text-ruby-400 font-semibold">{svc.priceStarting}</span>
                    <span className="text-zinc-400 text-[10px]">Production Turnkey</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h2 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-gold-300 transition-colors leading-snug">
                      {svc.title}
                    </h2>

                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="p-3 bg-red-950/30 border-l-2 border-red-500 text-zinc-300">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-red-400 font-bold block mb-1">
                          Problem Solved:
                        </span>
                        {svc.problemSolved}
                      </div>

                      <div className="pt-2 text-zinc-300 font-light leading-relaxed">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-gold-400 font-bold block mb-1">
                          Engineering Architecture:
                        </span>
                        {svc.solutionArchitecture}
                      </div>
                    </div>
                  </div>

                  {/* Outcome & Tags */}
                  <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                    <div className="font-mono text-xs text-ruby-400 flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-ruby-400" />
                      <span>{svc.measurableOutcome}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {svc.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase px-2 py-0.5 bg-white/[0.04] border border-white/[0.08] text-zinc-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        href={`/contact?service=${encodeURIComponent(svc.title)}`}
                        className="btn-seduction text-xs w-full sm:w-auto"
                      >
                        Inquire for This Architecture ↗
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. THE 4 TRANSPARENT SERVICE PACKAGES (From User's Slide Blueprint) */}
      <section id="pricing" className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-16">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
              Defined Offerings & Scope
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Service Packages
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Fixed-scope, transparent pricing with clear outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`glass-seduction p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  pkg.popular
                    ? 'border-2 border-ruby-500 shadow-2xl shadow-ruby-950/60'
                    : 'border border-white/[0.08] hover:border-white/20'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-ruby-600 text-white font-mono text-[9px] uppercase tracking-widest font-bold">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-semibold">
                      {pkg.name}
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-4xl sm:text-5xl text-white font-normal text-gradient-ruby">
                        {pkg.price}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500 block uppercase">
                      {pkg.frequency}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-300 font-light leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                    <span className="font-mono text-[10px] uppercase text-gold-400 tracking-wider block font-medium">
                      What's Included
                    </span>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-ruby-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 space-y-2.5">
                  <a
                    href={pkg.paystackUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center py-3.5 text-xs uppercase tracking-luxury font-bold transition-all duration-300 ${
                      pkg.popular
                        ? 'btn-seduction w-full'
                        : 'bg-white/5 border border-white/15 text-white hover:bg-white hover:text-black w-full'
                    }`}
                  >
                    Pay with Paystack ({pkg.price}) ↗
                  </a>
                  <Link
                    href={`/contact?plan=${encodeURIComponent(pkg.name)}`}
                    className="block text-center font-mono text-[10px] text-zinc-400 hover:text-white uppercase tracking-wider py-1"
                  >
                    Or Inquire / Consult First
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Customized Solution Banner */}
          <div className="max-w-3xl mx-auto p-6 glass-seduction border border-white/10 text-center space-y-3">
            <p className="text-sm text-zinc-300 font-light">
              If you're seeking a package customized to your business needs, offering a variety of bespoke engineering services for a personalized solution, please contact us directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-luxury text-ruby-400 hover:text-white font-semibold"
            >
              Initiate Bespoke Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. 6-STEP PROCESS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08] bg-noir-900/30">
        <div className="space-y-16">
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
              The Engineering Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              The 6-Step Execution Framework
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl font-light leading-relaxed">
              Every system is mapped out and stress-tested before deployment. Zero guesswork, zero unmonitored failures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="glass-seduction glass-seduction-hover p-8 border border-white/[0.08] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-ruby-400 font-normal">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold-400 bg-white/[0.04] px-2.5 py-1 border border-white/10">
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white">{step.name}</h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
              Clarity & Terms
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                question: 'How do project milestones and payment work?',
                answer:
                  'Engagements are structured on clear milestone deliverables. A 50% deposit secures scheduling on my calendar, with remaining balances tied to verified staging acceptance and production deployment.',
              },
              {
                question: 'Who owns the intellectual property and code?',
                answer:
                  'You own 100% of the code, workflows, prompts, and architectures created during the engagement. Upon final invoice settlement, full repository access and sovereign cloud assets are transferred directly to your organization.',
              },
              {
                question: 'How do you prevent large language models from hallucinating in production?',
                answer:
                  'By adhering strictly to the Rule of Separation: the AI model is treated as a probabilistic reasoning engine, while all state mutations, database writes, and API actions are wrapped in deterministic validation harnesses and rigid JSON schemas.',
              },
              {
                question: 'What happens after deployment?',
                answer:
                  'Every tier includes active post-launch monitoring (7 to 30 days depending on package) to verify real-world load, catch telemetry anomalies, and train your internal team. Extended annual fractional partnerships are available through the Exclusive tier.',
              },
            ].map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.question}
                  className="glass-seduction border border-white/[0.08] transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-xl sm:text-2xl text-white hover:text-gold-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-ruby-400 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 font-sans text-sm text-zinc-300 font-light leading-relaxed border-t border-white/[0.06]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM ACTION */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 pt-20 text-center space-y-6">
        <h2 className="font-serif text-3xl sm:text-4xl text-white">
          Ready to Automate What's Slowing You Down?
        </h2>
        <p className="text-sm sm:text-base text-zinc-300 font-light max-w-xl mx-auto">
          Reach out directly to review your system bottlenecks, explore package suitability, and lock in deployment dates.
        </p>
        <div className="pt-2">
          <Link href="/contact" className="btn-seduction text-xs">
            Initiate Conversation <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
