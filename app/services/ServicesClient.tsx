'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Cpu,
  Plane,
  Bot,
  Mic,
  Workflow,
  BarChart3,
  Calendar,
  Clock,
  ShieldCheck,
  Award,
  Zap,
  Building,
  GraduationCap,
  Home,
  HeartPulse,
  Share2,
  X,
  Maximize2,
  Terminal,
} from 'lucide-react'

export interface PackageItem {
  id: string
  title: string
  category: 'Industry Bundles' | 'Enterprise Systems' | 'Core AI & Workflows' | 'Modular Tasks'
  price: string
  timeline: string
  highlight?: string
  description: string
  deliverables: string[]
  icon: React.ElementType
}

const industryBundles: PackageItem[] = [
  {
    id: 'solar-bundle',
    title: 'Solar & Clean Energy Automation Bundle',
    category: 'Industry Bundles',
    price: '$4,500',
    timeline: '14 Days Delivery',
    highlight: 'High-Ticket Acquisition',
    icon: Zap,
    description:
      'Turnkey outbound acquisition and validation engine for renewable energy contractors. Includes conversational voice dialer, GHL pipeline automation, and automated solar ROI quote calculators.',
    deliverables: [
      'Outbound Voice Dialer (Vapi/Retell) for cold calling & appointment setting',
      'GoHighLevel lead pipeline triggers & multi-stage custom mapping',
      'CRM-to-Database synchronization hooks & custom API connectors',
      'SMS & email nurture campaign sequencers with automated scheduling',
      'Solar savings ROI calculator tool API integrations',
      '30 Days Active Campaign & Voice tuning support',
    ],
  },
  {
    id: 'edutech-bundle',
    title: 'Higher Education & Edutech Institutional Bundle',
    category: 'Industry Bundles',
    price: '$6,000',
    timeline: '21 Days Delivery',
    highlight: '68% Support Load Reduction',
    icon: GraduationCap,
    description:
      'Enterprise multi-school RAG ecosystem designed for universities and academic organizations. Deploys an embeddable chat widget, password-gated admin portal, and pgvector semantic document search.',
    deliverables: [
      'Embeddable React Chat Widget IIFE (single script tag injection)',
      'Password-gated Next.js administrative portal with document uploaders',
      'Supabase pgvector semantic search over thousands of registry files',
      'Admissions CRM lead synchronization (Zoho or Salesforce API)',
      'WhatsApp admissions auto-responder with human-escalation protocols',
      '45 Days Priority Systems Support',
    ],
  },
  {
    id: 'real-estate-bundle',
    title: 'Real Estate & Property Operations Bundle',
    category: 'Industry Bundles',
    price: '$3,500',
    timeline: '10 Days Delivery',
    highlight: 'Automated Document Parsing',
    icon: Home,
    description:
      'Full-stack automation suite for real estate syndicates and property managers. Ingests purchase contracts, books property tours, and syncs buyer pipelines.',
    deliverables: [
      'Next.js/Anthropic contract PDF parser & structured JSON extractor',
      'Automated property tour booking flow & calendar availability locks',
      'Airtable relational database schema for listings & buyer inquiries',
      'Automated SMS follow-ups & lead nurturing triggers',
      'GoHighLevel pipeline status synchronization',
      '30 Days Dedicated Systems Support',
    ],
  },
  {
    id: 'healthcare-bundle',
    title: 'Healthcare & Clinical Operations Bundle',
    category: 'Industry Bundles',
    price: '$7,500',
    timeline: '30 Days Delivery',
    highlight: 'MamaGuard AI Architecture',
    icon: HeartPulse,
    description:
      'Secure, high-concurrency patient advisory and clinical triage platform. Combines conversational voice receptionists with non-blocking FastAPI backends and clinical anomaly detection.',
    deliverables: [
      'Clinic Voice Receptionist agent (Vapi/Retell) for 24/7 appointments',
      'FastAPI patient advisory portal (MamaGuard prototype architecture)',
      'SQLite/PostgreSQL encrypted clinical logs & patient record schemas',
      'Prenatal/clinical risk alert logic model (statistical classifications)',
      'SMS clinical appointment reminders & check-in triggers',
      '60 Days Priority Support & Compliance Checks',
    ],
  },
  {
    id: 'agency-bundle',
    title: 'Marketing Agencies & Creators Bundle',
    category: 'Industry Bundles',
    price: '$4,000',
    timeline: '14 Days Delivery',
    highlight: 'Automated Content & Ops',
    icon: Share2,
    description:
      'Autonomous operations suite for marketing agencies, content networks, and creator brands. Handles video clipping, social graph posting, client onboarding, and automated billing.',
    deliverables: [
      'LinkedIn & Facebook Graph API autonomous poster scripts',
      'Video scraping & auto-short cutting clips ingestion engine',
      'HubSpot / GoHighLevel client onboarding workflows',
      'Automated invoicing, recurring billing & contract sync (Stripe/n8n)',
      'Outbound lead generation directory scraper & email enricher',
      '30 Days Post-Launch Maintenance',
    ],
  },
]

const enterprisePackages: PackageItem[] = [
  {
    id: 'ent-retell-voice',
    title: 'Conversational Voice Agent Suite (Vapi / Retell)',
    category: 'Enterprise Systems',
    price: '$3,500',
    timeline: '7–10 Days',
    highlight: 'Sub-Second Latency',
    icon: Mic,
    description:
      'Production deployment of conversational voice agents with sub-second retrieval, dynamic speech interruptions, Twilio SIP trunking, and live CRM calendar bookings.',
    deliverables: [
      'Custom LLM prompt engineering with objection-handling trees',
      'Twilio phone number provisioning & webhook routing',
      'Real-time database sync (Airtable / PostgreSQL / Google Sheets)',
      'Call recording transcription & sentiment analysis tagging',
      '30 Days of prompt iterations and latency tuning',
    ],
  },
  {
    id: 'ent-doc-verification',
    title: 'Autonomous Document Verification & OCR Engine',
    category: 'Enterprise Systems',
    price: '$3,500',
    timeline: '10 Days',
    highlight: 'Zero-Loss Parsing',
    icon: Layers,
    description:
      'Enterprise OCR and document ingestion pipeline that extracts tabular data, coordinates, and terms from complex PDF contracts and blueprints using Anthropic vision LLMs.',
    deliverables: [
      'High-throughput PDF / image OCR extraction engine',
      'Structured JSON schema formatting & database validation',
      'Automated fraud detection & anomaly scoring',
      'Webhook notification dispatch to Slack / ERP queues',
    ],
  },
  {
    id: 'ent-nextjs-saas',
    title: 'Full-Stack Next.js Custom Web App / SaaS',
    category: 'Enterprise Systems',
    price: '$5,000',
    timeline: '21 Days',
    highlight: 'Production SaaS',
    icon: Cpu,
    description:
      'Bespoke Next.js 15 web application with Supabase PostgreSQL database, multi-tenant Row-Level Security (RLS), custom interactive dashboards, and Stripe payment integration.',
    deliverables: [
      'Next.js 15 App Router frontend with Tailwind CSS',
      'Supabase user authentication & RLS security rules',
      'Custom analytics dashboards & interactive data tables',
      'Stripe subscription billing & webhook listener endpoints',
      'Vercel edge deployment with 100% lighthouse performance',
    ],
  },
  {
    id: 'ent-mobile-app',
    title: 'Cross-Platform Mobile Application (iOS & Android)',
    category: 'Enterprise Systems',
    price: '$7,500',
    timeline: '30–45 Days',
    highlight: 'App Store Ready',
    icon: Bot,
    description:
      'Native-feel mobile application built with React Native / Flutter. Connected to your central API with push notifications, biometric auth, and offline synchronization.',
    deliverables: [
      'Cross-platform iOS and Android codebase',
      'App Store & Google Play Store submission management',
      'FastAPI / Supabase backend API integration',
      'Push notification alerts & SMS verification triggers',
    ],
  },
  {
    id: 'ent-flagship-custom',
    title: 'Flagship Enterprise Autonomous Architecture',
    category: 'Enterprise Systems',
    price: '$10,000',
    timeline: '30 Days',
    highlight: 'Full Ecosystem',
    icon: Sparkles,
    description:
      'Comprehensive software ecosystem combining Next.js SaaS portal, FastAPI serverless backend, conversational voice agent, pgvector database, and n8n multi-agent network.',
    deliverables: [
      'Full-stack Next.js web application + admin command center',
      'High-concurrency Python FastAPI backend services',
      'pgvector vector database with automated document ingestion',
      'Conversational AI Voice bot & WhatsApp customer concierge',
      'Multi-agent n8n workflow network with automated error recovery',
      '60 Days Dedicated Engineering Support & SLA',
    ],
  },
  {
    id: 'ent-exclusive-retainer',
    title: 'Exclusive Chief Systems Architect Retainer',
    category: 'Enterprise Systems',
    price: '$30,000 / Year',
    timeline: 'Annual Retainer',
    highlight: '15 Hrs / Week Dedicated',
    icon: Award,
    description:
      'Dedicated executive systems architect retaining Israel Dare for 15 hours/week. Continuous bespoke system deployments, architectural reviews, database scalability, and high-stakes engineering.',
    deliverables: [
      '15 hours/week of direct Systems Architect engineering',
      'Ongoing custom Next.js, Python, and n8n builds throughout the year',
      'Full Brand Identity, web platforms, and automated marketing pipelines',
      'Direct WhatsApp & Slack hotline for critical emergency resolutions',
      'Bi-weekly strategic executive roadmap briefing calls',
    ],
  },
]

const corePackages: PackageItem[] = [
  {
    id: 'core-scraper-api',
    title: 'Python Web Scraping & Ingestion API',
    category: 'Core AI & Workflows',
    price: '$650',
    timeline: '3–5 Days',
    icon: Terminal,
    description:
      'FastAPI backend server using BeautifulSoup / Scrapy crawlers with proxy rotation to extract structured data from target web platforms.',
    deliverables: ['Authenticated JSON endpoints', 'Scrapy crawler models', 'Cloud hosting deployment'],
  },
  {
    id: 'core-scholarship-bot',
    title: 'Scholarship & Grant Application Bot',
    category: 'Core AI & Workflows',
    price: '$750',
    timeline: '4 Days',
    icon: GraduationCap,
    description:
      'Automated form-filler, essay analyzer, and deadline alert bot powered by Claude LLM to identify grant matches.',
    deliverables: ['Claude essay analyzer hook', 'Eligibility criteria scanner', 'Calendar alert integration'],
  },
  {
    id: 'core-supabase-schema',
    title: 'Supabase PostgreSQL Relational Schema & RLS',
    category: 'Core AI & Workflows',
    price: '$800',
    timeline: '3 Days',
    icon: Layers,
    description:
      'Relational table architecture, foreign key constraints, Row-Level Security (RLS) policies, database triggers, and FastAPI hooks.',
    deliverables: ['Multi-tenant RLS policies', 'Database views & indexes', 'SQL migration scripts'],
  },
  {
    id: 'core-ai-audit',
    title: 'AI Feasibility & Systems Audit',
    category: 'Core AI & Workflows',
    price: '$1,200',
    timeline: '5 Days',
    icon: BarChart3,
    description:
      'Exhaustive operational bottleneck review, ROI modeling, toolchain feasibility assessment, and implementation blueprint.',
    deliverables: ['Detailed systems roadmap', 'ROI budget predictions', 'Architectural topology diagrams'],
  },
  {
    id: 'core-digital-twin',
    title: 'AI Digital Twin / Mentor Clone',
    category: 'Core AI & Workflows',
    price: '$1,500',
    timeline: '7 Days',
    icon: Bot,
    description:
      'Custom fine-tuned conversational clone trained on your transcripts, podcasts, and books. Deployed to WhatsApp or Web.',
    deliverables: ['Tone & knowledge base alignment', 'WhatsApp / Telegram bot hook', '24/7 zero-fatigue Q&A'],
  },
  {
    id: 'core-rag-widget',
    title: 'RAG Knowledge Widget API',
    category: 'Core AI & Workflows',
    price: '$1,500',
    timeline: '5 Days',
    icon: Workflow,
    description:
      'Embeddable JavaScript IIFE widget connected to a vector search API, trained on your custom company manuals and PDFs.',
    deliverables: ['Vite IIFE embeddable script', 'FastAPI vector retrieval hook', 'Web widget styling'],
  },
  {
    id: 'core-lead-sdr',
    title: 'Lead Gen & Outbound SDR Validation Pipeline',
    category: 'Core AI & Workflows',
    price: '$1,800',
    timeline: '7 Days',
    icon: Zap,
    description:
      'Directory scraper, automated phone/email validator that filters landlines and fakes, integrated with CRM auto-booking.',
    deliverables: ['Directory scraper engine', 'Clicker defense validator', 'GHL / HubSpot sync pipeline'],
  },
  {
    id: 'core-pgvector-search',
    title: 'pgvector Vector Database Search Engine',
    category: 'Core AI & Workflows',
    price: '$3,000',
    timeline: '10 Days',
    icon: Cpu,
    description:
      'High-speed semantic search system utilizing OpenAI text-embedding-3-small, PostgreSQL pgvector indexation, and cosine similarity.',
    deliverables: ['Chunking & embedding pipeline', 'pgvector indexing setup', 'Semantic search REST API'],
  },
]

const modularTasks: PackageItem[] = [
  {
    id: 'mod-api-hook',
    title: 'API Webhook Setup & JSON Forwarder',
    category: 'Modular Tasks',
    price: '$50',
    timeline: '24 Hours',
    icon: Terminal,
    description: 'Standard webhook listener, payload formatting, header token validation, and Postman logs.',
    deliverables: ['Webhook endpoint script', 'Header validation', '7 Days Support'],
  },
  {
    id: 'mod-zapier-simple',
    title: 'Zapier / Make Single Workflow Build',
    category: 'Modular Tasks',
    price: '$75',
    timeline: '24 Hours',
    icon: Workflow,
    description: 'Single-trigger automated workflow connecting 2-3 applications with data transformation.',
    deliverables: ['Trigger-action mapping', 'Error alert setup', 'Live testing'],
  },
  {
    id: 'mod-sheets-sync',
    title: 'Automated Google Sheets Database Sync',
    category: 'Modular Tasks',
    price: '$100',
    timeline: '24 Hours',
    icon: Layers,
    description: 'Webhook-to-Sheet synchronization with duplicate handling, formula calculations, and timestamping.',
    deliverables: ['Deduplication rules', 'Formula automations', 'Handover documentation'],
  },
  {
    id: 'mod-dns-security',
    title: 'DNS, Cloudflare & SPF/DKIM/DMARC Setup',
    category: 'Modular Tasks',
    price: '$100',
    timeline: '24 Hours',
    icon: ShieldCheck,
    description: 'Cloudflare DNS configuration, SSL setup, SPF, DKIM, and DMARC email deliverability records.',
    deliverables: ['Cloudflare SSL setup', 'SPF/DKIM/DMARC records', 'Email warmup readiness'],
  },
  {
    id: 'mod-crm-import',
    title: 'CRM Data Sanitization & Import (GHL / HubSpot)',
    category: 'Modular Tasks',
    price: '$120',
    timeline: '24 Hours',
    icon: Zap,
    description: 'Header cleaning, custom field mapping, smart tag assignment, and duplicate resolution.',
    deliverables: ['Cleaned contact list', 'Custom field mapping', 'Validation check'],
  },
  {
    id: 'mod-slack-bot',
    title: 'Real-Time Slack Alerts Bot',
    category: 'Modular Tasks',
    price: '$150',
    timeline: '48 Hours',
    icon: Bot,
    description: 'Incoming webhook endpoint that formats rich JSON alert messages with channel tagging.',
    deliverables: ['Custom Slack bot script', 'Rich message formatting', 'Channel ping rules'],
  },
]

const testimonials = [
  {
    src: '/testimonials/testimonial_1.png',
    title: 'Verified 5-Star Upwork Delivery',
    author: 'Timothy',
    role: 'AI Developer & Entrepreneur',
    quote: 'Working with Izzy was a FANTASTIC experience! His expertise in AI systems shines through his meticulous code and proactive communication.',
  },
  {
    src: '/testimonials/testimonial_2.png',
    title: 'Resolved 1-Year Bottleneck in 1 Hour',
    author: 'Darryl',
    role: 'Marketing Strategist',
    quote: 'Izzy tackled a technical problem that had been plaguing our team for over a year and resolved it within just an hour!',
  },
  {
    src: '/testimonials/testimonial_3.png',
    title: 'Overdelivered on Appointment Systems',
    author: 'DC Fawcett',
    role: 'CEO, Digital Mavericks Media',
    quote: 'Izzy overdelivered and gave me way more than I expected. He took the time to ensure everything was customized for scale.',
  },
  {
    src: '/testimonials/testimonial_4.png',
    title: 'FastAPI & n8n Integration Master',
    author: 'Enterprise Client',
    role: 'SaaS Founder',
    quote: 'Top-tier code quality, excellent database design, and flawless execution under tight deadlines.',
  },
  {
    src: '/testimonials/testimonial_7.png',
    title: 'Seamless CRM & Lead Qualification',
    author: 'Growth Agency Director',
    role: 'Agency Executive',
    quote: 'Constructed an outbound SDR pipeline that automated our lead qualification with 100% schema accuracy.',
  },
  {
    src: '/testimonials/testimonial_9.png',
    title: 'Outstanding Technical Communication',
    author: 'Tech Lead',
    role: 'Fintech Founder',
    quote: 'Israel is in the top 1% of technical communicators I have ever worked with. Always delivers beyond expectations.',
  },
]

const TABS = ['All Packages', 'Industry Bundles', 'Enterprise Systems', 'Core AI & Workflows', 'Modular Tasks'] as const
type Tab = (typeof TABS)[number]

export default function ServicesClient() {
  const [currentTab, setCurrentTab] = useState<Tab>('All Packages')
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const allPackages = [
    ...industryBundles,
    ...enterprisePackages,
    ...corePackages,
    ...modularTasks,
  ]

  const visiblePackages =
    currentTab === 'All Packages'
      ? allPackages
      : allPackages.filter((p) => p.category === currentTab)

  return (
    <div className="space-y-20">
      {/* 1. TAB CONTROLS & CATALOG NAV */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
        <div className="flex flex-wrap gap-2">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setCurrentTab(tab)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                currentTab === tab
                  ? 'bg-white text-black font-bold'
                  : 'bg-noir-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <span className="font-mono text-xs text-zinc-400">
          SHOWING <span className="text-white font-bold">{visiblePackages.length}</span> PACKAGES
        </span>
      </div>

      {/* 2. PACKAGES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visiblePackages.map((pkg) => {
          const Icon = pkg.icon
          return (
            <div
              key={pkg.id}
              className="bg-noir-900 border border-white/[0.08] p-8 sm:p-10 space-y-8 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div className="space-y-6">
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-6 border-b border-white/[0.06]">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-black border border-white/10 flex items-center justify-center text-red-500">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400">
                      {pkg.category}
                    </span>
                  </div>
                  {pkg.highlight && (
                    <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 bg-black border border-white/10 text-red-400 font-bold">
                      {pkg.highlight}
                    </span>
                  )}
                </div>

                {/* Price & Title */}
                <div className="space-y-2">
                  <div className="flex items-baseline justify-between">
                    <span className="font-serif text-3xl sm:text-4xl text-white font-normal">
                      {pkg.price}
                    </span>
                    <span className="font-mono text-[10px] text-zinc-500">{pkg.timeline}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-zinc-100 leading-snug">
                    {pkg.title}
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                  {pkg.description}
                </p>

                {/* Deliverables */}
                <div className="space-y-2 pt-4 border-t border-white/[0.06]">
                  <p className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 mb-2">
                    Scope Deliverables:
                  </p>
                  {pkg.deliverables.map((d, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between">
                <a
                  href="https://Calendly.com/izzy-marketing-hub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury text-[10px] py-2.5 px-4 inline-flex items-center gap-1.5 w-full justify-center"
                >
                  Book Consultation for This <ArrowRight className="w-3 h-3 text-red-500" />
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. VERIFIED UPWORK TESTIMONIALS & PROOF GALLERY */}
      <section className="pt-24 border-t border-white/[0.08] space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
              VERIFIED TRACK RECORD
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white">
              Upwork Top Rated Plus Client Reviews
            </h2>
          </div>
          <a
            href="https://www.upwork.com/freelancers/~010297ccb4983d90e7"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-red-400 hover:text-white uppercase tracking-widest inline-flex items-center gap-1"
          >
            Inspect Upwork Profile (Top 3%) <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-noir-900 border border-white/[0.08] p-8 space-y-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div
                  onClick={() => setLightboxImage(t.src)}
                  className="relative aspect-[16/9] w-full bg-black border border-white/10 overflow-hidden cursor-pointer group-hover:border-white/30 transition-colors"
                >
                  <Image
                    src={t.src}
                    alt={t.title}
                    fill
                    className="object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                    <Maximize2 className="w-5 h-5 text-red-500" />
                  </div>
                </div>

                <p className="font-serif text-base text-zinc-200 italic font-light leading-relaxed">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px]">
                <div>
                  <p className="font-bold text-white uppercase">{t.author}</p>
                  <p className="text-zinc-500">{t.role}</p>
                </div>
                <span className="text-red-500">★★★★★</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX FOR TESTIMONIAL SCREENSHOTS */}
      {lightboxImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-white border border-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="max-w-3xl w-full max-h-[85vh] relative aspect-[16/9] bg-black border border-white/20">
            <Image
              src={lightboxImage}
              alt="Verified Client Testimonial"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1000px"
            />
          </div>
        </div>
      )}
    </div>
  )
}
