'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Bot,
  Cpu,
  BarChart3,
  MessageSquare,
  Star,
  ChevronRight,
  Play,
  Database,
  ShieldCheck,
  Zap,
  CheckCircle,
  Target,
  GraduationCap,
  BookOpen,
  Calendar,
} from 'lucide-react'

const stats = [
  { value: '50+', label: 'Global Projects Done' },
  { value: 'First Class', label: 'B.Eng. Honours (FUTA)' },
  { value: 'Top Rated Plus', label: 'Talent on Upwork (Top 3%)' },
  { value: '100+', label: 'AI Workflows Deployed' },
]

const services = [
  {
    icon: Cpu,
    title: 'AI Automation & Workflows',
    description: 'Saving hundreds of manual hours. I architect autonomous, enterprise-grade workflows using n8n, Make, and Zapier to sync databases, automate reports, and scale operations.',
    href: '/projects',
  },
  {
    icon: Bot,
    title: 'Custom AI App Development',
    description: 'Full-stack web applications and SaaS platforms built in Next.js/React, integrated with LLMs (Claude, GPT-4, Gemini) and Supabase pgvector database indexing.',
    href: '/projects',
  },
  {
    icon: Target,
    title: 'Lead Gen & SDR Pipelines',
    description: 'Automated contact directory scrapers and outbound email systems. Custom LLM copywriters verify deliverability, send personalized sequences, and auto-book strategy calls.',
    href: '/projects',
  },
  {
    icon: BookOpen,
    title: 'Academic & Systems Research',
    description: 'Mathematical and environmental modeling. Applying Gaussian Process Regression, thermal analysis, and sustainable engineering to solve complex agricultural storage bottlenecks.',
    href: '/research',
  },
]

const caseStudies = [
  {
    id: 'edutech-rag',
    title: 'Edutech Global AI Ecosystem',
    category: 'Knowledge Base (RAG)',
    techStack: ['Next.js', 'Supabase pgvector', 'OpenRouter', 'Claude 3.5 Sonnet', 'Zoho CRM'],
    problem: 'Academic admissions staff at Babcock and ABU overwhelmed by repeating identical queries from thousands of prospective students.',
    solution: 'Designed an embeddable React chat widget IIFE with a Next.js admin dashboard. Trained on institutional knowledge via text-embedding-3-small, query results are served by Claude 3.5 Sonnet on Vercel Serverless, escalating unresolved tickets to staff and syncing leads to Zoho.',
    impact: 'Reduced inbound support desks load by 68% for two universities, resolving queries in under 5 seconds on WhatsApp and Web.',
    proofUrl: 'https://edutechbabcockabu.vercel.app/',
    icon: MessageSquare,
  },
  {
    id: 'roof-auto',
    title: 'Roof Auto: Ingestion Engine',
    category: 'AI Agents & Automation',
    techStack: ['Next.js', 'Supabase', 'Anthropic API', 'Tailwind CSS'],
    problem: 'Roofing crew allocations and material calculations locked in slow, manual parsing of complex Eagle View contracts and documents.',
    solution: 'Constructed an automated document parser that feeds technical PDF data directly to Anthropic LLMs, extracting structured JSON representing project coordinates to calculate materials and sync state triggers.',
    impact: 'Reduced ingestion processing times from hours to 40 seconds on full autopilot with 100% database schema accuracy.',
    proofUrl: 'https://roof-auto2.vercel.app/',
    icon: Database,
  },
  {
    id: 'mamaguard',
    title: 'MamaGuard AI Advisory',
    category: 'Full-Stack Health Tech',
    techStack: ['FastAPI', 'SQLite', 'React', 'Vite', 'Anthropic API'],
    problem: 'Asynchronous maternal health data tracking spreads across paper records, leading to delayed notifications of clinical risks.',
    solution: 'Developed an advisory health portal for God\'s Covenant Hospital. Built on a concurrent Python FastAPI backend, using aiosqlite for database execution, integrated with Claude to identify prenatal warnings.',
    impact: 'Enabled concurrent voice and text prenatal record queries, streamlining hospital diagnostic flows.',
    proofUrl: 'https://gods-covenant-hospital.vercel.app/',
    icon: Bot,
  },
  {
    id: 'oracle-intelligence',
    title: 'Oracle: Personal Intelligence',
    category: 'Autonomous Scraping',
    techStack: ['Next.js', 'Supabase Auth & DB', 'Scrapy', 'RLS Constraints'],
    problem: 'Wasting productive hours filtering noise from social platforms to find relevant tech job and academic scholarship updates.',
    solution: 'Built an autonomous curation engine that runs web scrapers to filter noise and consolidate job, scholarship, and news leads into a unified daily tasks hub. Fixed PostgreSQL RLS constraints to ensure multi-tenant security.',
    impact: 'Saved up to 12 hours weekly by serving a unified daily intelligence feed with direct email/password access.',
    proofUrl: 'https://oracle-black-six.vercel.app/',
    icon: ShieldCheck,
  },
  {
    id: 'postharvest-gpr',
    title: 'Yam Atmospheric GPR Model',
    category: 'Academic Research Thesis',
    techStack: ['MATLAB', 'Gaussian Process Regression', 'Thermodynamic modeling'],
    problem: 'Post-harvest spoilage claims up to 40% of smallholder tropical root crop yields due to passive, unmonitored storage conditions.',
    solution: 'Modeled thermodynamic decay rates of white yams (Dioscorea rotundata) as a function of size and temperature using a non-parametric Bayesian Gaussian Process Regression model. Predicted atmospheric thresholds to extend crop shelf-life.',
    impact: 'Demonstrated GPR modeling accuracy to optimize environmental storage, laying the groundwork for IoT bio-digital preservation.',
    proofUrl: '/research',
    icon: GraduationCap,
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Timothy',
    role: 'AI Developer & Entrepreneur',
    content:
      "Working with Izzy was a FANTASTIC experience! His expertise in AI agents and automation systems truly shines through his meticulous code, detailed documentation, and PROACTIVE communication. Izzy consistently went above and beyond.",
  },
  {
    id: 2,
    name: 'Darryl',
    role: 'AI Marketing Strategist',
    content:
      "Izzy's expertise is truly unmatched. He tackled a problem that had been plaguing me for over a year and resolved it within just an hour! If you're looking for someone who delivers high-quality work quickly, get IZZY.",
  },
  {
    id: 3,
    name: 'DC Fawcett',
    role: 'CEO, Digital Mavericks Media',
    content:
      "Izzy overdelivered and gave me way more than I expected. I came in thinking I was just getting an AI appointment setter, but he set me up with way more than that. He took the time to make sure everything was customized to my needs.",
  },
]

export default function HomePage() {
  const [activeCase, setActiveCase] = useState(caseStudies[0].id)
  const activeData = caseStudies.find((c) => c.id === activeCase) || caseStudies[0]

  return (
    <div className="relative min-h-screen grid-bg overflow-hidden">
      {/* Background glowing blobs */}
      <div className="glow-blob top-[20%] left-[10%] bg-red-600/10" />
      <div className="glow-blob top-[60%] right-[5%] bg-red-500/15" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-900/60 border border-neutral-800 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-md">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Bridging High-Precision AI &amp; Scientific Research
          </div>

          <h1 className="text-5xl md:text-7.5xl font-black text-white tracking-tight mb-8 leading-tight">
            Israel O. Dare<br />
            <span className="gradient-text bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent">
              Systems Architect &amp; Researcher
            </span>
          </h1>

          <p className="text-base md:text-xl text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            I engineer high-performance AI automation workflows, full-stack SaaS platforms, and predictive computational models. 
            Rated <span className="text-white font-semibold underline decoration-red-500 decoration-2">Top Rated Plus on Upwork (Top 3%)</span> and graduated with <span className="text-white font-semibold">First-Class Honours</span> in Engineering.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/projects" className="btn-primary flex items-center justify-center gap-2 group">
              View Portfolios
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/research" className="btn-secondary flex items-center justify-center gap-2">
              Explore Research Papers
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.value} className="p-6 glass-panel rounded-2xl text-center card-hover border border-neutral-800/60">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-4 border-t border-neutral-900/80 relative bg-neutral-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Core Expertise</p>
            <h2 className="section-heading mb-4 text-3xl md:text-5xl font-black text-white">Engineering &amp; Science</h2>
            <p className="section-sub max-w-2xl mx-auto text-neutral-400 font-light">
              I deploy robust systems designed to remove operational bottlenecks for businesses and apply statistical regression to solve agricultural constraints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-8 glass-panel border border-neutral-800/60 rounded-2xl card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{description}</p>
                </div>
                <div className="mt-8 flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                  Explore Details <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Interactive Showcase</p>
            <h2 className="section-heading mb-4 text-3xl md:text-5xl font-black text-white">Featured Projects &amp; Research</h2>
            <p className="section-sub max-w-xl mx-auto text-neutral-400 font-light">
              Inspect the exact logic, tech stacks, and real-world metrics of systems I have built and published.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Tabs selector */}
            <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible gap-3 pb-4 lg:pb-0 scrollbar-none snap-x shrink-0">
              {caseStudies.map((cs) => {
                const isSelected = activeCase === cs.id
                const CS_Icon = cs.icon
                return (
                  <button
                    key={cs.id}
                    onClick={() => setActiveCase(cs.id)}
                    className={`flex items-center gap-4 p-4 text-left rounded-2xl border snap-start min-w-[280px] lg:min-w-0 transition-all duration-300 ${
                      isSelected
                        ? 'bg-neutral-900 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]'
                        : 'bg-neutral-950/50 border-neutral-900 hover:border-neutral-800'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                      <CS_Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-wider font-semibold ${isSelected ? 'text-red-400' : 'text-neutral-500'}`}>{cs.category}</p>
                      <p className="text-xs font-extrabold text-white mt-0.5 leading-snug">{cs.title}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Tab Content Detail */}
            <div className="lg:col-span-2 glass-panel border border-neutral-800/80 rounded-3xl p-8 sm:p-10 shadow-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 px-5 py-2 bg-red-950/20 border-b border-l border-red-500/20 rounded-bl-xl text-red-400 text-xs font-semibold">
                Architecture &amp; Data
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{activeData.title}</h3>
              <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-6">{activeData.category}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeData.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-neutral-900/80 border border-neutral-800 rounded-lg text-neutral-400 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-neutral-950/60 border border-neutral-900/80 rounded-2xl">
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-2">The Bottleneck / Objective</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">{activeData.problem}</p>
                </div>

                <div className="p-4 bg-neutral-950/60 border border-neutral-900/80 rounded-2xl">
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-2">The Solution</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">{activeData.solution}</p>
                </div>

                <div className="p-5 bg-red-950/10 border border-red-500/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                      <Zap className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-extrabold text-red-400 mb-1">Measured Impact</h4>
                      <p className="text-neutral-200 text-sm font-bold leading-relaxed">{activeData.impact}</p>
                    </div>
                  </div>
                  {activeData.proofUrl && (
                    <a
                      href={activeData.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs px-4 py-2 border border-red-500/35 text-white rounded-xl hover:bg-red-500/15 flex items-center gap-1.5 shrink-0 self-start sm:self-auto transition-all duration-300"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" /> Live Build / Page
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Quote */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-neutral-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur-[30px] opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl">
                <Image
                  src="/images/DGF_6811 copy.jpg"
                  alt="Israel O. Dare Profile"
                  fill
                  className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel text-white px-6 py-4 rounded-2xl shadow-xl border border-red-500/20">
                <p className="text-2xl font-black text-red-500">First-Class</p>
                <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">Engineering Systems Thinker</p>
              </div>
            </div>

            <div>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Personal Ideology</p>
              <h2 className="section-heading mb-6 text-3xl md:text-5xl font-black text-white">Engineering Real Solutions</h2>
              <blockquote className="text-neutral-200 text-lg font-light leading-relaxed mb-6 border-l-4 border-red-500 pl-6 italic">
                "I watched television for the first time at twelve. Got my first phone at sixteen. Staring at tragedy during my university days, I chose MATLAB and computational systems. Easy work bores me. Bring me the hard stuff."
              </blockquote>
              <p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed font-light">
                Israel O. Dare is a Systems Engineer, AI Automation Specialist, and Multi-instrumentalist. Graduated with First-Class Honours in Agricultural and Environmental Engineering from the Federal University of Technology, Akure, he applies rigorous computational modeling to agribusiness storage optimization, while deploying enterprise workflows for international companies.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2 group">
                Read My Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Project Walkthrough</p>
          <h2 className="section-heading mb-4 text-3xl md:text-5xl font-black text-white">See My Work In Action</h2>
          <p className="section-sub max-w-xl mx-auto text-neutral-400 font-light mb-10">
            Watch me break down how custom AI agents, document processing pipelines, and vector database retrieval systems function.
          </p>

          <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl group cursor-pointer shadow-red-950/10">
            <video
              src="/about_me.mp4"
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-neutral-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Client Trust</p>
            <h2 className="section-heading mb-4 text-3xl md:text-5xl font-black text-white">Client Success Stories</h2>
            <p className="section-sub max-w-xl mx-auto text-neutral-400 font-light">
              Read verified feedback from founders and agencies about working with me on automation integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="group p-8 glass-panel border border-neutral-800/60 rounded-2xl card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-8 font-light italic">"{t.content}"</p>
                </div>
                <div className="flex items-center gap-3 border-t border-neutral-900 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-500 font-extrabold text-sm shadow-inner">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-sm tracking-wide">{t.name}</p>
                    <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 border border-neutral-800/80 rounded-3xl p-12 shadow-glow-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Let's build something beautiful</h2>
            <p className="text-neutral-400 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Book a strategy call to solve database race conditions, configure secure multi-agent workflows, or discuss post-harvest agricultural modeling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://Calendly.com/izzy-marketing-hub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 group text-xs uppercase tracking-wider font-bold"
              >
                Book a Strategy Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/contact" className="btn-secondary inline-flex items-center justify-center gap-2 text-xs uppercase tracking-wider">
                Send Direct Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
