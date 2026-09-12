import Link from 'next/link'
import Image from 'next/image'
import CinematicTestimonials from '@/components/CinematicTestimonials'
import { PAYMENT_LINKS } from '@/lib/payment-links'
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Workflow,
  Code2,
  Compass,
  CheckCircle2,
  ShieldCheck,
  Zap,
  PhoneCall,
  Flame,
  FileCheck2,
  Lock,
  ExternalLink,
} from 'lucide-react'

const metrics = [
  {
    value: '$300K+',
    label: 'Closed Sales in 60 Days',
    sub: 'Solar Voice AI · Humans only closed',
  },
  {
    value: '900+',
    label: 'Appointments Booked',
    sub: 'Multi-Channel AI · +50% vs Human SDRs',
  },
  {
    value: '68%',
    label: 'Drop in Support Load',
    sub: 'Dual-Campus University RAG Agent',
  },
  {
    value: '40s',
    label: 'Roof Scope Extraction',
    sub: 'Down from 4 hours per complex contract',
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

const testimonials = [
  {
    author: 'Tony Flores',
    title: 'Founder | CEO',
    company: 'Growth Agency Enterprise',
    quote:
      'Technical mastery combined with strategic vision. Izzy helped us automate our client onboarding and support systems. The result is a smoother customer experience and significantly less administrative overhead.',
  },
  {
    author: 'Fredrick Bahr',
    title: 'Solar Executive',
    company: 'Sunrun Energy Network',
    quote:
      'Our lead handling process was manual and slow before Izzy stepped in. He implemented an AI workflow that qualifies leads instantly and schedules appointments without human intervention. Massive uptick in conversion rates.',
  },
  {
    author: 'Darryl',
    title: 'AI Marketing Strategist',
    company: 'Growth Syndicate',
    quote:
      'Izzy\'s expertise is truly unmatched. He tackled a problem that had been plaguing me for over a year and resolved it within just an hour! If you\'re looking for someone who delivers high-quality work quickly, get IZZY.',
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

const flagshipProjects = [
  {
    id: 'sunrun-solar-ai',
    title: 'Sunrun Energy: Autonomous Voice AI & Solar Qualification',
    category: 'Enterprise Automation',
    metric: '$300K+ in Closed Sales · 60 Days',
    image: '/images/portfolio/sunrun-solar-ai.jpg',
    excerpt:
      'Autonomous low-latency AI voice agent that qualifies incoming solar homeowner leads, verifies utility spend, and books appointments onto sales calendars within 30 seconds.',
    tags: ['Vapi Voice AI', 'ElevenLabs', 'GoHighLevel', 'Twilio'],
  },
  {
    id: 'roof-auto',
    title: 'Roof Auto: Autonomous Contract Ingestion & Scope Parser',
    category: 'Enterprise Automation',
    metric: '4 Hours Cut to 40 Seconds · Zero Errors',
    image: '/images/portfolio/roof-auto-parser.jpg',
    excerpt:
      'Custom AI application that ingests complex 30-page aerial PDF blueprints and insurance contracts, generating exact material orders and labor schedules in 40 seconds.',
    tags: ['Claude 3.5 Sonnet', 'JSON Schema Matrix', 'Next.js 15', 'PostgreSQL'],
    liveUrl: 'https://roof-auto2.vercel.app/',
  },
  {
    id: 'edutech',
    title: 'Edutech Global Multi-Campus Admissions Ecosystem',
    category: 'AI Applications',
    metric: '68% Support Reduction · <5s Latency',
    image: '/images/portfolio/edutech-rag.jpg',
    excerpt:
      'Deterministic RAG knowledge engine for Babcock University and Ahmadu Bello University, handling 35,000+ prospective student inquiries with zero hallucinations.',
    tags: ['Supabase pgvector', 'Next.js', 'Claude API', 'Zoho CRM'],
    liveUrl: 'https://edutechbabcockabu.vercel.app/',
  },
]

export default function HomePage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen font-sans selection:bg-ruby-600 selection:text-white relative overflow-hidden">
      {/* Seductive Ambient Flares */}
      <div className="glow-ambient-ruby top-20 -left-64 w-[700px] h-[700px]" />
      <div className="glow-ambient-ruby top-1/3 -right-64 w-[650px] h-[650px]" />
      <div className="glow-ambient-gold bottom-1/4 left-1/3 w-[500px] h-[500px]" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
          {/* Top Status Capsule */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-white/[0.08] font-mono text-[10px] sm:text-[11px] text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-ruby-500 animate-pulse" />
              <span className="tracking-widest uppercase text-zinc-300">
                Israel Oluwafemi Dare · Autonomous Systems
              </span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 text-zinc-400">
              <span className="text-gold-400 font-semibold">UPWORK TOP RATED PLUS · TOP 3% WORLDWIDE</span>
              <span className="hidden sm:inline text-zinc-600">|</span>
              <span className="hidden sm:inline text-zinc-300">ACCEPTING SELECT Q3/Q4 CLIENTS</span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12 sm:pt-16 pb-6">
            {/* Left Column: Seductive Positioning */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[11px] tracking-[0.24em] text-ruby-400 uppercase font-semibold">
                  Revenue Infrastructure · AI Engineering
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[0.94]">
                  I build systems that make businesses print money while you sleep.
                </h1>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-parchment-200 font-light leading-relaxed max-w-2xl">
                Top Rated Plus on Upwork (Top 3% worldwide). 6x Anthropic Certified. Microsoft Certified AI Red Teamer.
                I separate reasoning from execution: the AI decides, deterministic code acts.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-seduction"
                >
                  Initiate Engagement <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="btn-luxury-outline"
                >
                  Inspect Portfolio & Architecture
                </Link>
              </div>

              {/* Quick Proof Badges */}
              <div className="pt-6 flex flex-wrap items-center gap-6 text-zinc-400 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-ruby-400" />
                  <span>Microsoft AI Red Teamer</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-gold-400" />
                  <span>6x Anthropic Claude Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Job Success Score</span>
                </div>
              </div>
            </div>

            {/* Right Column: Editorial Portrait in Smoked Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto glass-seduction p-3 group shadow-2xl shadow-black/90">
                <div className="relative w-full h-full overflow-hidden bg-noir-900 border border-white/10">
                  <Image
                    src="/images/editorial/israel-advisory-portrait.jpg"
                    alt="Israel Oluwafemi Dare — AI Systems Architect and Builder"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-[1.02] filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Photo metadata caption */}
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between font-mono text-[9px] text-zinc-300 bg-noir-950/90 backdrop-blur-md px-3.5 py-2 border border-white/10">
                  <span className="tracking-wider">ISRAEL OLUWAFEMI DARE</span>
                  <span className="text-ruby-400 font-semibold">FOUNDER · IZZYTECH HUB</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Anchor */}
        <div className="max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-zinc-500 font-mono text-[10px]">
          <span>THE DIFFERENCE BETWEEN A DEMO AND PRODUCTION REVENUE</span>
          <span>EST. 2022 // MMXXVI</span>
        </div>
      </section>

      {/* 2. PROOF STRIP (Concrete Measurable Outcomes) */}
      <section className="py-14 sm:py-20 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900/60">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="space-y-1">
                <span className="font-serif text-4xl sm:text-5xl text-white font-normal text-gradient-ruby">
                  {m.value}
                </span>
                <p className="font-sans text-sm sm:text-base text-zinc-200 font-medium">
                  {m.label}
                </p>
                <p className="font-mono text-xs text-zinc-400">{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. THE ORIGIN STORY: BUILT OUT OF CONSTRAINT */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
              The Origin Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              I learned to build systems before I owned the tools to build them.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="md:col-span-7 space-y-6 text-base sm:text-lg text-parchment-200 font-light leading-relaxed">
              <p>
                I grew up in Akure, Nigeria. I watched television for the first time at twelve. I didn't own a phone of my own until I was twenty-one — the first two were stolen before I could keep them.
              </p>
              <p>
                For most of my engineering degree, I had no laptop. I borrowed machines, queued for lab computers, and learned to plan every single line of work before I ever sat down, because compute time was scarce and I couldn't waste a minute.
              </p>
              <p className="text-white font-normal border-l-2 border-ruby-500 pl-4">
                That constraint taught me the thing I now get paid for: how to design a system completely before building it, so that when it runs, it runs clean.
              </p>
              <p>
                I graduated First Class — top 3% — in Agricultural Engineering. Then a sudden car accident took my father and put my mother in the hospital, and I became the person my family depended on overnight.
              </p>
              <p>
                I needed work that paid, scaled, and didn't require permission from anyone. I chose AI and automation. Not as a trend. As survival.
              </p>
              <p>
                Four years later, I'm Top Rated Plus on Upwork — top 3% worldwide — building revenue infrastructure for businesses that are drowning in manual work.
              </p>
            </div>

            {/* Right: The Operating Philosophy Callout */}
            <div className="md:col-span-5 space-y-6">
              <div className="glass-seduction p-8 border border-white/10 space-y-6">
                <h3 className="font-mono text-xs uppercase tracking-luxury text-gold-400 font-semibold">
                  How I Actually Work
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  "I don't bolt tools together and hope. I map the whole system first — where leads enter, where they leak, what decides, what executes, what gets logged — and then I build the smallest thing that moves your number."
                </p>
                <div className="p-4 bg-ruby-950/40 border border-ruby-500/30 text-xs text-zinc-200 space-y-2">
                  <span className="font-mono uppercase tracking-wider text-ruby-400 font-bold block">
                    The Rule of Separation
                  </span>
                  <p>
                    The AI decides, deterministic code acts. That's the difference between a demo that impresses and a system that survives in production handling real money.
                  </p>
                </div>
                <p className="font-mono text-xs text-zinc-400">
                  And I tell you the truth. If what you've asked for isn't what you need, you'll hear it before you spend a dollar — not after.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE 6-STEP ENGINEERED PROCESS */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
                Execution Methodology
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
                The 6-Step Engineering Discipline
              </h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md font-light leading-relaxed">
              From operational audit to sovereign handoff. Every stage is engineered to eliminate risk and maximize revenue velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="glass-seduction glass-seduction-hover p-8 border border-white/[0.08] space-y-5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-3xl text-ruby-400 font-normal">
                      {step.step}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-gold-400 bg-white/[0.04] px-2.5 py-1 border border-white/10">
                      {step.timeline}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl text-white">
                    {step.name}
                  </h3>
                  <p className="text-sm text-zinc-300 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PORTFOLIO CASE STUDIES */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
                Curated Flagship Work
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
                Systems Architected for Scale
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ruby-400 hover:text-white transition-colors"
            >
              Explore Complete Portfolio Index (40+ Deployments) <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {flagshipProjects.map((project) => (
              <div
                key={project.id}
                className="glass-seduction glass-seduction-hover group flex flex-col justify-between overflow-hidden border border-white/[0.08]"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-noir-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 font-mono text-[10px] text-ruby-400 bg-noir-950/90 backdrop-blur-md px-3 py-1.5 border border-white/10 font-medium">
                    {project.metric}
                  </div>
                </div>

                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] uppercase text-gold-400">
                      {project.category}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-gold-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                      {project.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 2).map((t) => (
                        <span key={t} className="font-mono text-[9px] uppercase px-2 py-0.5 bg-white/5 text-zinc-400">
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/portfolio"
                      className="text-xs font-mono uppercase tracking-wider text-ruby-400 hover:text-white inline-flex items-center gap-1"
                    >
                      Read Case <ArrowUpRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CINEMATIC TESTIMONIALS CAROUSEL */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900/40 relative">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-3 text-center max-w-3xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
              Verified Social Proof & Real Production Audits
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Executive Testimonials & Verified Proof
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto">
              Real reviews, contract outcomes, and verified 5.0 Upwork client feedback from operators who handed their bottlenecks to Israel Dare.
            </p>
          </div>

          <CinematicTestimonials />
        </div>
      </section>

      {/* 7. SERVICE PACKAGES (From User's Slide Blueprint) */}
      <section id="pricing" className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4 text-center max-w-3xl mx-auto">
            <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
              Transparent Investment
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
              Service Packages
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
              Clear deliverables, zero hidden fees, and production-tested systems built for rapid ROI.
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

          {/* Bespoke Custom Package Note */}
          <div className="max-w-3xl mx-auto p-6 glass-seduction border border-white/10 text-center space-y-3">
            <p className="text-sm text-zinc-300 font-light">
              If you're seeking a package customized to your business needs, offering a variety of bespoke engineering services for a personalized solution, please reach out directly.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-luxury text-ruby-400 hover:text-white font-semibold"
            >
              Request Custom Consultation <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. CORE TECH STACK & CERTIFICATIONS */}
      <section className="py-20 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900/30">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <span className="font-mono text-[11px] uppercase tracking-luxury text-zinc-400 font-semibold">
              Verified Technical Stack & Ecosystem
            </span>
            <span className="font-mono text-xs text-ruby-400">
              Zero Unnecessary Dependencies · Sovereign Production Code
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {[
              'Claude 3.5 Sonnet',
              'Anthropic API Certified (x6)',
              'Microsoft Certified AI Red Teamer',
              'Securiti.ai Governance Certified',
              'Vapi Conversational AI',
              'ElevenLabs Voice Synthesis',
              'GoHighLevel (GHL) Enterprise',
              'Next.js 15',
              'Python FastAPI',
              'Supabase pgvector',
              'n8n Self-Hosted Clusters',
              'Make.com',
              'Twilio Telephony',
              'Zoho CRM API',
              'HubSpot Expert',
              'Stripe Payments',
              'Deterministic Webhooks',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white/[0.02] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:border-ruby-500/40 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="py-24 sm:py-36 px-5 sm:px-8 relative overflow-hidden text-center">
        <div className="glow-ambient-ruby top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px]" />

        <div className="max-w-4xl mx-auto space-y-8 relative z-10">
          <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
            The Next Step
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white leading-tight">
            Bring me the problem nobody else has been able to fix.
          </h2>
          <p className="text-base sm:text-xl text-zinc-300 font-light max-w-2xl mx-auto leading-relaxed">
            I'm not the cheapest person you'll message. I'm the one you call when the leads are leaking,
            the follow-up is dying, and the manual work is quietly burning out your team.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="btn-seduction text-sm"
            >
              Initiate Private Consultation <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/credentials"
              className="btn-luxury-outline text-sm"
            >
              Inspect Formal Credentials
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
