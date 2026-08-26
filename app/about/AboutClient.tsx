'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Music,
  Compass,
  CheckCircle2,
  Award,
  Terminal,
} from 'lucide-react'

const personalPrinciples = [
  {
    number: '01',
    title: 'Deterministic Rigor Over Speculation',
    description:
      'Large language models and neural networks are stochastic by nature. Real-world systems must encapsulate this uncertainty inside deterministic verification loops, schema validation, and fail-safe recovery paths.',
  },
  {
    number: '02',
    title: 'First Principles Engineering',
    description:
      'Never borrow conclusions without inspecting the underlying physics. Whether calculating the thermal decay rate of root crops or optimizing vector database retrieval latency, ground the architecture in fundamental mathematics.',
  },
  {
    number: '03',
    title: 'Autonomy & Sovereignty',
    description:
      'True institutional resilience comes from owning the pipeline. I build systems where clients retain absolute control over their models, data embeddings, and orchestration infrastructure rather than remaining hostage to opaque black-box APIs.',
  },
  {
    number: '04',
    title: 'Polymathic Discipline',
    description:
      'The polyphony of classical string instruments translates directly into concurrent software design. Discipline in one domain reinforces high precision across all technical pursuits.',
  },
]

const currentInquiries = [
  {
    topic: 'Non-Parametric Gaussian Process Kernels',
    focus: 'Optimizing Matérn covariance functions for microclimate prediction with sparse sensor telemetry.',
  },
  {
    topic: 'Edge Compute on Autonomous UAV Platforms',
    focus: 'Real-time neural radiance field (NeRF) reconstruction aboard low-power drone companion computers.',
  },
  {
    topic: 'Deterministic Multi-Agent State Synchronization',
    focus: 'Designing transactional state guarantees for autonomous n8n and LangGraph multi-agent systems.',
  },
]

export default function AboutClient() {
  return (
    <div className="font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. ESSAY OPENER & EDITORIAL PORTRAIT */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 border-b border-white/[0.08]">
        <div className="space-y-4 pb-12 border-b border-white/[0.08]">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Narrative & Philosophy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.95]">
            The Journey of an Engineer
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-12">
          {/* Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full border border-white/10 bg-noir-900 p-2 group shadow-2xl shadow-black/80">
              <div className="relative w-full h-full overflow-hidden bg-noir-850">
                <Image
                  src="/images/editorial/israel-boardroom-executive.jpg"
                  alt="Israel Dare — Executive Portrait"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 480px"
                  className="object-cover object-[center_top] pt-0.5 transition-transform duration-700 group-hover:scale-[1.02] filter contrast-[1.02]"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-zinc-300 bg-noir-950/85 backdrop-blur-md px-3 py-1.5 border border-white/10">
                <span>ISRAEL DARE</span>
                <span className="text-gold-400">EXECUTIVE PORTRAIT</span>
              </div>
            </div>

            {/* Quick Bio Meta Strip */}
            <div className="mt-6 p-6 border border-white/[0.08] bg-noir-900/40 space-y-4 font-mono text-xs text-zinc-400">
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>EDUCATION</span>
                <span className="text-white">First Class B.Eng. (FUTA)</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>DISCIPLINE</span>
                <span className="text-white">AI Systems & Physical Modeling</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] pb-2">
                <span>GLOBAL PRACTICE</span>
                <span className="text-gold-400">Top Rated Plus (Upwork Top 3%)</span>
              </div>
              <div className="flex justify-between">
                <span>MUSICIANSHIP</span>
                <span className="text-white">Violin, Viola, Cello, Piano</span>
              </div>
            </div>
          </div>

          {/* Essay Opener Column */}
          <div className="lg:col-span-7 space-y-8 text-parchment-200 text-base sm:text-lg font-light leading-relaxed">
            <p className="font-serif text-2xl sm:text-3xl text-white italic leading-relaxed font-normal">
              I am an engineer who builds at the intersection of mathematical theory, physical computing, and production machine intelligence.
            </p>

            <p>
              I grew up in Nigeria, where constraints are not theoretical case studies—they are immediate physical realities. In an environment where electrical power grids, data infrastructure, and municipal logistics fluctuate, you learn very early that software cannot survive on optimism alone. It must be resilient, deterministic, and engineered to function under pressure.
            </p>

            <p>
              This environment forged my fundamental perspective: technology is only as valuable as the certainty it delivers. Whether designing an enterprise automated document pipeline for a US construction firm or calculating the non-linear thermodynamic decay curves of tropical harvest storage, my objective is always the same—replace human friction with mathematically defensible software systems.
            </p>

            <div className="p-6 bg-noir-900/60 border-l-2 border-gold-500 font-serif italic text-xl text-white">
              "The discipline of code and the physics of the physical world are one. We do not build toys; we engineer generational systems."
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE STORY (4 Thematic Chapters) */}
      <section className="max-w-4xl mx-auto px-5 sm:px-8 py-24 space-y-20">
        {/* Chapter 1 */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-gold-400">01 // THE FOUNDATION</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            The Engineering Crucible & First Class Honours
          </h2>
          <div className="space-y-4 text-parchment-300 leading-relaxed font-light">
            <p>
              At the Federal University of Technology Akure (FUTA), I pursued Agricultural and Environmental Engineering—a rigorous curriculum combining classical thermodynamics, fluid dynamics, continuum mechanics, and numerical analysis.
            </p>
            <p>
              While many viewed engineering solely through hardware or civil works, I recognized that computation was the connective tissue. I spent nights implementing Bayesian Gaussian Process Regression (GPR) models to predict moisture migration in biological media, proving that non-parametric machine learning models could forecast physical deterioration with far greater precision than traditional empirical equations.
            </p>
            <p>
              I graduated with First Class Honours, placing in the top percentile of the university, with an academic foundation anchored not in hype, but in the unforgiving laws of physics and mathematics.
            </p>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="pull-quote">
          "When you understand the equations that govern heat transfer and fluid flow, understanding distributed software pipelines and vector embeddings becomes second nature."
        </div>

        {/* Chapter 2 */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-gold-400">02 // THE GLOBAL PROVING GROUND</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            Adversity, Freelance Rigor, and Upwork Top Rated Plus
          </h2>
          <div className="space-y-4 text-parchment-300 leading-relaxed font-light">
            <p>
              In my final year of university, acute family financial adversity stripped away all safety nets. There was no margin for error. I turned my computational skills toward global freelance engineering on Upwork.
            </p>
            <p>
              Competing against developers worldwide, I refused to offer generic web development. Instead, I specialized in high-complexity workflow automation (n8n, Make, Python) and custom AI integrations for enterprise clients across the United States, United Kingdom, and Europe.
            </p>
            <p>
              Within months, I achieved the <span className="text-white font-medium">Top Rated Plus</span> badge—a distinction held by the top 3% of global talent—maintaining a flawless 100% Job Success Score across more than 50 enterprise client contracts. Every project was delivered with meticulous code, exhaustive architectural documentation, and zero downtime.
            </p>
          </div>
        </div>

        {/* Chapter 3 */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-gold-400">03 // INTELLECTUAL FRAMEWORK</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            What I Believe About Artificial Intelligence
          </h2>
          <div className="space-y-4 text-parchment-300 leading-relaxed font-light">
            <p>
              The technology industry suffers from collective amnesia every five years. Today, large language models are treated as magical panaceas. They are not. They are probabilistic reasoning engines over dense token distributions.
            </p>
            <p>
              If an enterprise feeds raw unvalidated prompts directly to an LLM and expects predictable operational workflows, failure is guaranteed. Real AI systems architecture requires strict boundary layers: schema enforcement, deterministic fallback paths, vector retrieval guarantees, and state machine verification.
            </p>
            <p>
              I build AI systems that enterprise leadership can trust when millions of dollars and critical operational SLAs are at stake.
            </p>
          </div>
        </div>

        {/* Chapter 4 */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-gold-400">04 // THE HORIZON</span>
            <div className="h-px bg-white/10 flex-1" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-white">
            What I Am Building Toward
          </h2>
          <div className="space-y-4 text-parchment-300 leading-relaxed font-light">
            <p>
              The next decade belongs to the convergence of artificial intelligence and the physical world. Autonomous drone photogrammetry, real-time spatial digital twins, and edge-computed sensor telemetry will transform how humans manage physical assets, food reserves, and sovereign infrastructure.
            </p>
            <p>
              My focus is actively divided between two frontiers: advising elite enterprise clients globally on resilient software architecture, and advancing spatial computing research that bridges the computational divide for emerging economies.
            </p>
          </div>
        </div>
      </section>

      {/* 2.5 VISUAL ESSAY & PHOTOGRAPHIC JOURNEY */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-12">
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold-400 font-semibold">
              Photographic Narrative
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Moments &amp; Milestones
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-white/[0.08] bg-noir-900/40 p-4 space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-noir-950">
                <Image
                  src="/images/editorial/israel-advisory-portrait.jpg"
                  alt="Israel Dare Executive Advisory"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-[center_top] pt-0.5 filter contrast-[1.02]"
                />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-base text-white">Executive Advisory</p>
                <p className="font-mono text-[10px] text-zinc-400">Guiding enterprise AI strategy and sovereign software architecture.</p>
              </div>
            </div>

            <div className="border border-white/[0.08] bg-noir-900/40 p-4 space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-noir-950">
                <Image
                  src="/images/editorial/israel-tesla-gigafactory.jpg"
                  alt="Israel Dare at Tesla Gigafactory"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-[center_top] pt-0.5 filter contrast-[1.02]"
                />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-base text-white">Industrial AI &amp; Robotics</p>
                <p className="font-mono text-[10px] text-zinc-400">High-scale manufacturing telemetry and autonomous systems evaluation.</p>
              </div>
            </div>

            <div className="border border-white/[0.08] bg-noir-900/40 p-4 space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-noir-950">
                <Image
                  src="/images/editorial/israel-architect-chalet.jpg"
                  alt="Israel Dare Systems Architecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-[center_top] pt-0.5 filter contrast-[1.02]"
                />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-base text-white">Spatial Engineering</p>
                <p className="font-mono text-[10px] text-zinc-400">Physical computing, digital twins, and UAV photogrammetry.</p>
              </div>
            </div>

            <div className="border border-white/[0.08] bg-noir-900/40 p-4 space-y-3">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-noir-950">
                <Image
                  src="/images/editorial/israel-observatory-cosmos.jpg"
                  alt="Israel Dare at Observatory"
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  className="object-cover object-[center_top] pt-0.5 filter contrast-[1.02]"
                />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-base text-white">Frontier Inquiries</p>
                <p className="font-mono text-[10px] text-zinc-400">Stargazing observatory deck: mathematical modeling of cosmic systems.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PERSONAL TEXTURE & PRINCIPLES */}
      <section className="py-24 px-5 sm:px-8 border-t border-b border-white/[0.08] bg-noir-900/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold-400 font-semibold">
              Operational Texture
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
              Principles &amp; Disciplines
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalPrinciples.map((principle) => (
              <div
                key={principle.title}
                className="p-8 border border-white/[0.08] bg-noir-950/60 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-gold-400">{principle.number}</span>
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                </div>
                <h3 className="font-serif text-2xl text-white">{principle.title}</h3>
                <p className="text-sm text-parchment-300 font-light leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Current Inquiries & Music */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-white/[0.08]">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <BookOpen className="w-4 h-4 text-gold-400" />
                <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white">
                  Current Research & Technical Inquiries
                </h3>
              </div>
              <div className="space-y-4">
                {currentInquiries.map((inquiry) => (
                  <div
                    key={inquiry.topic}
                    className="p-5 border border-white/[0.06] bg-noir-950/40 space-y-1"
                  >
                    <p className="font-serif text-lg text-white">{inquiry.topic}</p>
                    <p className="text-xs text-zinc-400 font-light leading-relaxed">
                      {inquiry.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-8 border border-white/[0.08] bg-noir-950/60 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Music className="w-4 h-4 text-gold-400" />
                  <h3 className="font-mono text-xs uppercase tracking-[0.22em] text-white">
                    Classical Orchestral Leadership
                  </h3>
                </div>
                <p className="text-sm text-parchment-300 font-light leading-relaxed">
                  As former General Coordinator of the campus symphony orchestra, I directed multi-part rehearsals and played Violin, Viola, Cello, and Piano. The discipline of symphonic harmony directly mirrors high-concurrency asynchronous software engineering.
                </p>
              </div>

              <div className="font-mono text-[10px] text-gold-400/90 pt-4 border-t border-white/[0.06]">
                STRING QUARTET · POLYPHONY · PRECISION
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLOSING TRANSITION TO CREDENTIALS OR CONTACT */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 text-center bg-noir-950">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Next Steps
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
            Inspect the evidence or discuss an initiative.
          </h2>
          <p className="text-base text-parchment-200 font-light leading-relaxed">
            Institutional reviewers and scholarship committees can inspect formal academic records, while prospective enterprise clients can review service packages or initiate a private discussion.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/credentials"
              className="btn-luxury-gold"
            >
              Examine Institutional Credentials <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="btn-luxury-outline"
            >
              Initiate Private Discussion
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
