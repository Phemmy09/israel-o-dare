'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BrainCircuit,
  Workflow,
  Code2,
  Compass,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Clock,
  ShieldCheck,
  ChevronDown,
  Sparkles,
} from 'lucide-react'

const serviceTiers = [
  {
    id: 'advisory',
    icon: BrainCircuit,
    title: 'Executive AI Strategy & Technical Advisory',
    idealFor: 'Founders, CTOs, and enterprise leaders evaluating AI architecture or resolving technical bottlenecks.',
    price: '$3,500',
    priceNote: 'One-time session or $8,000/mo retainer',
    timeline: '48–72 Hours Turnaround',
    deliverables: [
      'Comprehensive 90-minute private architectural audit with Israel Dare',
      'Defensible LLM model selection matrix and infrastructure cost projections',
      'Vector DB schema and prompt validation harness blueprint',
      'Written executive advisory memo with deterministic failure mitigations',
      '14 days of asynchronous follow-up via private direct channel',
    ],
    ctaText: 'Book Strategy Advisory',
    ctaHref: '/contact?service=advisory',
  },
  {
    id: 'applications',
    icon: Code2,
    title: 'Bespoke AI Application Development',
    idealFor: 'Companies building intelligent customer-facing platforms, internal agent copilots, or specialized RAG tools.',
    price: 'From $8,500',
    priceNote: 'Fixed-scope milestone contract',
    timeline: '3–5 Weeks Delivery',
    deliverables: [
      'Production Next.js 15 App Router & FastAPI backend architecture',
      'pgvector semantic document indexing with hybrid keyword search',
      'Multi-model agent networks (Claude 3.5 Sonnet / GPT-4) with schema constraints',
      'Full authentication, role-based access control, and telemetry logging',
      'Complete GitHub repository transfer and 45 days priority support',
    ],
    ctaText: 'Request Application Proposal',
    ctaHref: '/contact?service=applications',
  },
  {
    id: 'automation',
    icon: Workflow,
    title: 'Enterprise Workflow Automation & n8n Clusters',
    idealFor: 'Operations teams bogged down by manual data entry, PDF parsing, or disconnected CRM pipelines.',
    price: 'From $4,000',
    priceNote: 'Turnkey deployment',
    timeline: '10–14 Days Delivery',
    deliverables: [
      'Self-hosted enterprise n8n or Make.com orchestration cluster setup',
      'Autonomous PDF blueprint, invoice, or legal contract ingestion pipeline',
      'Bi-directional synchronization between CRM (Zoho, Salesforce, HubSpot) & database',
      'Zero-loss transactional error handlers with automated alert webhooks',
      'Comprehensive visual workflow documentation and 30 days monitoring',
    ],
    ctaText: 'Request Automation Blueprint',
    ctaHref: '/contact?service=automation',
  },
  {
    id: 'spatial',
    icon: Compass,
    title: 'Spatial Intelligence & Bio-Physical Systems',
    idealFor: 'Infrastructure, agricultural, and environmental enterprises requiring real-world sensor telemetry and digital twins.',
    price: 'From $12,000',
    priceNote: 'Custom engineering engagement',
    timeline: '4–8 Weeks Scope',
    deliverables: [
      'Autonomous UAV flight path telemetry and photogrammetry mesh generation',
      'Dense 3D point clouds and neural radiance fields (NeRF) reconstruction',
      'Bayesian Gaussian Process Regression models for thermodynamic decay forecasting',
      'Custom IoT edge-telemetry ingestion server and analytics dashboard',
      'Full mathematical proofs and sovereign system documentation',
    ],
    ctaText: 'Discuss Spatial Architecture',
    ctaHref: '/contact?service=spatial',
  },
]

const processSteps = [
  {
    step: '01',
    name: 'Discovery & Ground Truth',
    timeline: 'Days 1 – 3',
    description:
      'We audit your current tech stack, operational bottlenecks, and data schemas to define the precise mathematical and business boundaries of the system.',
  },
  {
    step: '02',
    name: 'Architectural Blueprint',
    timeline: 'Days 4 – 7',
    description:
      'I deliver a complete technical specification, including entity relationship diagrams, model selection rationales, API contracts, and deterministic guarantees.',
  },
  {
    step: '03',
    name: 'Rapid Engineering & Build',
    timeline: 'Days 8 – 20',
    description:
      'Meticulous code execution across your private staging environment. Clean, non-blocking TypeScript and Python with zero unnecessary dependencies.',
  },
  {
    step: '04',
    name: 'Stress-Testing & Verification',
    timeline: 'Days 21 – 25',
    description:
      'Rigorous edge case fuzzing, prompt injection resistance testing, latency benchmarking, and automated regression validations.',
  },
  {
    step: '05',
    name: 'Sovereign Handoff & Support',
    timeline: 'Day 26+',
    description:
      '100% intellectual property transfer, executive runbook handoff, and 30 to 60 days of active post-deployment priority monitoring.',
  },
]

const clientTestimonials = [
  {
    quote:
      'Working with Izzy was a fantastic experience. His expertise in AI systems and workflow design truly shines through his meticulous code, detailed documentation, and proactive communication. He consistently went above and beyond.',
    author: 'Timothy',
    title: 'AI Developer & Systems Contractor',
    affiliation: 'Global Systems Contract',
  },
  {
    quote:
      'Izzy resolved an architectural bottleneck in one hour that had plagued our engineering team for over a year. If you are looking for high-precision systems engineering, Izzy is the person you hire.',
    author: 'Darryl',
    title: 'AI Marketing Strategist',
    affiliation: 'Growth Syndicate',
  },
  {
    quote:
      'Izzy overdelivered and gave me far more than I expected. He took the time to ensure our entire appointment setting and data infrastructure was customized for long-term scale.',
    author: 'DC Fawcett',
    title: 'Chief Executive Officer',
    affiliation: 'Digital Mavericks Media',
  },
]

const faqs = [
  {
    question: 'How do project milestones and payment work?',
    answer:
      'Engagements are billed on fixed-scope milestones: 50% upon contract signing to initiate architectural design, and 50% upon completed staging deployment and acceptance testing. Payments are processed securely via Stripe, institutional wire, or Upwork escrow.',
  },
  {
    question: 'What are typical delivery turnaround times?',
    answer:
      'Targeted advisory memos are delivered within 48–72 hours. Enterprise workflow automations typically take 10–14 days. Bespoke full-stack AI applications range between 3 to 5 weeks depending on database complexity and custom integrations.',
  },
  {
    question: 'Who owns the intellectual property and code?',
    answer:
      'You do. Upon final milestone settlement, 100% of all intellectual property, source code repositories, API keys, and deployment configurations are transferred to your organization. I introduce zero proprietary vendor lock-in.',
  },
  {
    question: 'Do you work with international clients?',
    answer:
      'Yes. Over 90% of my client base is headquartered in the United States, United Kingdom, Canada, and Europe. I maintain active overlap with both US Eastern/Pacific and European operating hours.',
  },
  {
    question: 'How are post-launch revisions and support handled?',
    answer:
      'Every project includes a dedicated 30 to 60-day post-launch warranty window covering bug fixes, model fine-tuning, latency optimization, and staff onboarding questions at zero extra charge.',
  },
  {
    question: 'Can our company engage you on an ongoing retainer?',
    answer:
      'Yes. I maintain a strictly limited roster of 3 concurrent fractional Chief Systems Architect retainers ($6,500 – $12,000/mo) for high-growth firms requiring ongoing strategic AI oversight and rapid deployment bandwidth.',
  },
]

export default function ServicesClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div className="font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. EDITORIAL INTRO & FRAMING */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Engagement Framework
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.95]">
            Consulting & Systems Architecture
          </h1>
          <p className="text-lg sm:text-xl text-parchment-200 font-light leading-relaxed">
            I work with enterprise executives, fast-moving venture-backed founders, and institutional operators. I do not do hourly busywork or speculative experiments. I deliver production-ready software, high-concurrency automation, and defensible AI architecture with clear SLAs and sovereign code ownership.
          </p>
        </div>
      </section>

      {/* 2. SERVICE TIERS & OFFERINGS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
              Defined Offerings
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Service Offerings & Engagements
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceTiers.map((tier) => {
              const Icon = tier.icon
              return (
                <div
                  key={tier.id}
                  id={tier.id}
                  className="p-8 sm:p-10 border border-white/[0.08] bg-noir-900/40 hover:bg-noir-900 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between space-y-8"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 border border-white/15 flex items-center justify-center text-white">
                          <Icon className="w-5 h-5 stroke-[1.25]" />
                        </div>
                        <div>
                          <p className="font-mono text-[10px] text-gold-400 uppercase tracking-widest">
                            {tier.timeline}
                          </p>
                          <h3 className="font-serif text-2xl text-white">{tier.title}</h3>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs text-zinc-400 font-mono">IDEAL FOR</p>
                      <p className="text-sm text-parchment-200 font-light leading-relaxed">
                        {tier.idealFor}
                      </p>
                    </div>

                    <div className="space-y-3 pt-2">
                      <p className="text-xs text-zinc-400 font-mono">DELIVERABLES & SCOPE</p>
                      <ul className="space-y-2.5 font-mono text-xs text-zinc-300">
                        {tier.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="font-serif text-3xl text-white font-normal">{tier.price}</span>
                      <p className="font-mono text-[10px] text-zinc-500">{tier.priceNote}</p>
                    </div>

                    <Link
                      href={tier.ctaHref}
                      className="btn-luxury-gold text-center text-xs"
                    >
                      {tier.ctaText} <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. 5-STEP PROCESS SECTION */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08] bg-noir-900/20">
        <div className="space-y-16">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
              Engineering Protocol
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              The 5-Stage Execution Framework
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl font-light leading-relaxed">
              Every engagement follows a deterministic progression designed to eliminate scope drift, ensure code clarity, and deliver verified production outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="p-6 border border-white/[0.08] bg-noir-950/60 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-xs text-gold-400 border-b border-white/[0.06] pb-2">
                    <span>STAGE {p.step}</span>
                    <span className="text-zinc-500 text-[10px]">{p.timeline}</span>
                  </div>
                  <h3 className="font-serif text-lg text-white leading-snug">{p.name}</h3>
                  <p className="text-xs text-parchment-300 font-light leading-relaxed">
                    {p.description}
                  </p>
                </div>
                <div className="h-0.5 bg-white/5 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOCIAL PROOF & TESTIMONIALS (Large Serif Pull-Quotes) */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-16">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
              Client Endorsements
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Verified Executive Feedback
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTestimonials.map((t) => (
              <div
                key={t.author}
                className="p-8 border border-white/[0.08] bg-noir-900/40 space-y-6 flex flex-col justify-between"
              >
                <div className="font-serif italic text-lg sm:text-xl text-white leading-relaxed font-light border-l-2 border-gold-500/70 pl-4">
                  "{t.quote}"
                </div>

                <div className="pt-4 border-t border-white/[0.06] font-mono text-xs">
                  <p className="text-white font-medium">{t.author}</p>
                  <p className="text-zinc-400 text-[11px]">{t.title}</p>
                  <p className="text-gold-400/80 text-[10px] pt-0.5">{t.affiliation}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TRANSPARENT FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
              Common Questions
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Engagement Terms & Answers
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={faq.question}
                  className="border border-white/[0.08] bg-noir-900/40 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif text-xl text-white hover:text-gold-300 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 text-sm text-parchment-300 font-light leading-relaxed border-t border-white/[0.04]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 text-center bg-noir-950">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Initiate Project
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-normal text-white">
            Ready to engineer your next AI system?
          </h2>
          <p className="text-base text-parchment-200 font-light leading-relaxed">
            Submit a project brief or schedule a direct architectural advisory consultation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-luxury-gold"
            >
              Request Project Proposal <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="https://Calendly.com/izzy-marketing-hub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-luxury-outline"
            >
              Schedule 30-Min Strategy Call ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
