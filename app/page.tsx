import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Workflow,
  Code2,
  Compass,
  CheckCircle2,
  Sparkles,
  Camera,
  Image as ImageIcon,
} from 'lucide-react'

const pillars = [
  {
    icon: BrainCircuit,
    title: 'AI Strategy & Advisory',
    description:
      'Guiding enterprise executives, founders, and research labs through defensible AI architecture, model selection, and risk mitigation.',
    href: '/services#advisory',
  },
  {
    icon: Workflow,
    title: 'Autonomous Workflow Automation',
    description:
      'Constructing resilient, self-healing n8n and Python orchestration pipelines that eliminate hundreds of hours of manual operations.',
    href: '/services#automation',
  },
  {
    icon: Code2,
    title: 'Bespoke AI Application Development',
    description:
      'Building production-ready full-stack applications with low-latency LLM agent networks, vector databases, and real-time APIs.',
    href: '/services#applications',
  },
  {
    icon: Compass,
    title: 'Spatial Intelligence & Bio-Physical Systems',
    description:
      'Bridging physical sensor telemetry, UAV photogrammetry, and Gaussian Process models to engineer sovereign real-world digital twins.',
    href: '/services#spatial',
  },
]

const featuredWork = [
  {
    id: 'edutech',
    title: 'Edutech Global AI Ecosystem',
    category: 'Enterprise Knowledge RAG & Admissions',
    result: 'Reduced repetitive institutional admissions workload by 68% with sub-5-second query latency.',
    image: '/images/editorial/israel-architect-chalet.jpg',
    href: '/projects',
    tags: ['Next.js', 'Claude 3.5 Sonnet', 'pgvector', 'Zoho CRM'],
  },
  {
    id: 'roof-auto',
    title: 'Roof Auto Document Ingestion Engine',
    category: 'Autonomous PDF & Spatial Parsing',
    result: 'Cut blueprint and insurance contract extraction time from 4 hours to 40 seconds per deal.',
    image: '/images/editorial/israel-boardroom-executive.jpg',
    href: '/projects',
    tags: ['Anthropic API', 'JSON Schema Matrix', 'Supabase', 'Server Actions'],
  },
  {
    id: 'mamaguard',
    title: 'MamaGuard Clinical Telemetry',
    category: 'Maternal Health Tech & Advisory',
    result: 'Enabled concurrent voice and text diagnostic risk logging for hospital prenatal units.',
    image: '/images/editorial/israel-tesla-gigafactory.jpg',
    href: '/projects',
    tags: ['FastAPI', 'aiosqlite', 'React', 'Anthropic API'],
  },
]

const galleryPreview = [
  {
    title: 'Executive Advisory & Leadership',
    category: 'Advisory',
    caption: 'Israel Dare in bespoke tailored suit, advising high-growth enterprises on AI strategy and sovereign architecture.',
    image: '/images/gallery/izzy-gallery-01.png',
    aspect: 'aspect-[2/3]',
  },
  {
    title: 'Frontier AI & Robotics',
    category: 'Frontier Systems',
    caption: 'Commanding high-performance computing, distributed backend clusters, and deterministic LLM harnesses.',
    image: '/images/gallery/izzy-gallery-02.png',
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Executive Presence & Counsel',
    category: 'Strategic Counsel',
    caption: 'Authoritative poise and clarity of vision guiding complex technical transformations.',
    image: '/images/gallery/izzy-gallery-03.png',
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Architectural Intelligence & Modeling',
    category: 'Spatial Engineering',
    caption: 'Translating computational mathematics, Gaussian Process Regression, and digital twins into real-world infrastructure.',
    image: '/images/gallery/izzy-gallery-05.png',
    aspect: 'aspect-[2/3]',
  },
  {
    title: 'The Polymathic Mind',
    category: 'Polyphony',
    caption: 'Multi-instrumentalist applying the strict multi-voice counterpoint of J.S. Bach to backend event-stream orchestration.',
    image: '/images/gallery/izzy-gallery-07.png',
    aspect: 'aspect-[2/3]',
  },
  {
    title: 'Master Executive Portrait',
    category: 'Studio Portrait',
    caption: 'Verified Upwork Top Rated Plus (Top 3% worldwide) profile portrait, verified across 40+ deployments.',
    image: '/images/gallery/izzy-gallery-08.png',
    aspect: 'aspect-[2/3]',
  },
]

const recentEssays = [
  {
    slug: 'autonomous-systems-architecture',
    title: 'On Deterministic Execution in Non-Deterministic AI Architectures',
    date: 'August 2026',
    readTime: '6 min read',
    excerpt:
      'Why modern enterprise software must treat large language models as probabilistic compute layers wrapped in strict deterministic validation harnesses.',
    category: 'Systems Architecture',
  },
  {
    slug: 'the-sovereign-builder',
    title: 'The Sovereign Builder: Navigating Frontier Tech From First Principles',
    date: 'July 2026',
    readTime: '8 min read',
    excerpt:
      'A personal meditation on rigorous engineering foundations, academic discipline, and operating at global technical parity from West Africa.',
    category: 'Personal Essay',
  },
  {
    slug: 'spatial-digital-twins',
    title: 'Reconstructing the Physical World: Photogrammetry to Neural Radiance Fields',
    date: 'June 2026',
    readTime: '7 min read',
    excerpt:
      'How UAV photogrammetry and Gaussian Process Regression are converging to create high-fidelity bio-spatial digital twins for critical infrastructure.',
    category: 'Spatial Intelligence',
  },
]

export default function HomePage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-5 sm:px-8 border-b border-white/[0.08] overflow-hidden">
        {/* Subtle Architectural Grid */}
        <div className="absolute inset-0 editorial-grid pointer-events-none opacity-30" />

        <div className="max-w-7xl mx-auto w-full relative z-10 my-auto">
          {/* Top Status Capsule */}
          <div className="flex items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-white/[0.08] font-mono text-[10px] sm:text-[11px] text-zinc-400">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-subtle" />
              <span className="tracking-widest uppercase text-zinc-300">
                Digital Headquarters · Israel Dare
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-zinc-400">
              <span>LAGOS · LONDON · NEW YORK</span>
              <span className="text-zinc-600">|</span>
              <span className="text-gold-400/90 font-medium">AVAILABLE FOR SELECT Q3/Q4 ENGAGEMENTS</span>
            </div>
          </div>

          {/* Main Hero Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12 sm:pt-16 pb-6">
            {/* Left Column: Typography & Positioning */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-[11px] tracking-[0.28em] text-gold-400 uppercase font-semibold">
                  AI Consultant · Systems Architect · Builder
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-white leading-[0.94]">
                  Israel Dare
                </h1>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl text-parchment-200 font-light leading-relaxed max-w-2xl">
                I advise enterprise leadership on artificial intelligence, build high-concurrency autonomous systems, and engineer sovereign software infrastructure for high-value operators.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="btn-luxury-gold"
                >
                  Initiate Engagement <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/credentials"
                  className="btn-luxury-outline"
                >
                  Review Credentials
                </Link>
              </div>
            </div>

            {/* Right Column: Editorial Portrait (With ample headroom and crisp facial clarity) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full max-w-md mx-auto border border-white/10 bg-noir-900 p-2 group shadow-2xl shadow-black/80">
                <div className="relative w-full h-full overflow-hidden bg-noir-850">
                  <Image
                    src="/images/editorial/israel-advisory-portrait.jpg"
                    alt="Israel Dare — AI Consultant and Systems Architect"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                    className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-[1.02] filter contrast-[1.02]"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent pointer-events-none" />
                </div>
                {/* Photo metadata caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-[9px] text-zinc-300 bg-noir-950/85 backdrop-blur-md px-3 py-1.5 border border-white/10">
                  <span className="tracking-wider">ISRAEL DARE</span>
                  <span className="text-gold-400">FOUNDER & EXECUTIVE ADVISOR</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom subtle scroll anchor */}
        <div className="max-w-7xl mx-auto w-full pt-4 flex items-center justify-between text-zinc-500 font-mono text-[10px]">
          <span>SCROLL FOR CAPABILITIES & PROOF</span>
          <span>REF. 2026 // MMXXVI</span>
        </div>
      </section>

      {/* 2. PROOF STRIP ("Credibility Without Bragging") */}
      <section className="py-12 sm:py-16 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400/90 font-medium">
                Upwork Verified
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-white font-normal">
                Top Rated Plus
              </p>
              <p className="font-mono text-[11px] text-zinc-400">100% Job Success Score</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400/90 font-medium">
                Academic Standing
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-white font-normal">
                First Class Honours
              </p>
              <p className="font-mono text-[11px] text-zinc-400">Top of Dept · FGN Scholar</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400/90 font-medium">
                Production Impact
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-white font-normal">
                40+ Systems
              </p>
              <p className="font-mono text-[11px] text-zinc-400">Deployed Across US, UK, Africa</p>
            </div>

            <div className="space-y-1">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400/90 font-medium">
                Economic Scale
              </span>
              <p className="font-serif text-2xl sm:text-3xl text-white font-normal">
                $100M+
              </p>
              <p className="font-mono text-[11px] text-zinc-400">Spatial & AI Value Architected</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT I DO (4 Core Pillars) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold-400 font-semibold">
                Strategic Competencies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
                What I Build & Advise
              </h2>
            </div>
            <p className="text-sm sm:text-base text-zinc-400 max-w-md font-light leading-relaxed">
              Focused on high-leverage domains where theoretical computer science and machine intelligence translate directly into operational superiority.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <Link
                  key={pillar.title}
                  href={pillar.href}
                  className="group relative p-8 sm:p-10 border border-white/[0.08] bg-noir-900/50 hover:bg-noir-900 hover:border-gold-500/30 transition-all duration-300 flex flex-col justify-between min-h-[260px]"
                >
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 border border-white/15 flex items-center justify-center text-white group-hover:text-gold-400 group-hover:border-gold-500/40 transition-colors">
                        <Icon className="w-5 h-5 stroke-[1.25]" />
                      </div>
                      <span className="font-mono text-xs text-zinc-600 group-hover:text-gold-400/80 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="font-serif text-2xl text-white group-hover:text-gold-300 transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-parchment-300 font-light leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400 group-hover:text-white transition-colors">
                    <span>EXPLORE CAPABILITY</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. FEATURED WORK (Outcome-First Case Studies) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-900/20">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold-400 font-semibold">
                Selected Case Studies
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
                Featured Deployments
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-gold-400 hover:text-white uppercase tracking-widest transition-colors"
            >
              View Full Portfolio (8 Case Studies) →
            </Link>
          </div>

          <div className="space-y-8">
            {featuredWork.map((project, idx) => (
              <div
                key={project.id}
                className="group border border-white/[0.08] bg-noir-900/60 p-6 sm:p-8 lg:p-10 hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border border-white/10 bg-noir-950">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-[center_top] transition-transform duration-700 group-hover:scale-105 filter contrast-[1.02]"
                    />
                    <div className="absolute top-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[9px] text-gold-400">
                      CASE 0{idx + 1}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-5">
                    <div className="space-y-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-gold-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="p-4 bg-noir-950/70 border-l-2 border-gold-500 text-sm sm:text-base text-parchment-100 font-serif italic">
                      "{project.result}"
                    </div>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase px-2.5 py-1 bg-white/5 border border-white/10 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="pt-2">
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 text-xs font-mono text-white hover:text-gold-400 uppercase tracking-widest transition-colors"
                      >
                        Read Complete Case Study Architecture <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CURATED VISUAL GALLERY SECTION (ALL PICTURES WITH CAPTIONS & DESCRIPTIONS) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08] bg-noir-950">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold-400 font-semibold flex items-center gap-2">
                <Camera className="w-3.5 h-3.5 text-gold-400" />
                Visual Archive · Curated Moments
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
                Portraits &amp; Photographic Gallery
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-mono text-xs text-gold-400 hover:text-white uppercase tracking-widest transition-colors"
            >
              Explore Complete Gallery Archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryPreview.map((item) => (
              <div
                key={item.title}
                className="border border-white/[0.08] bg-noir-900/40 p-5 space-y-4 hover:border-gold-500/30 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`relative ${item.aspect} w-full overflow-hidden border border-white/10 bg-noir-950`}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover object-[center_top] pt-0.5 transition-transform duration-700 group-hover:scale-[1.03] filter contrast-[1.02]"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-noir-950/85 backdrop-blur-md px-2 py-0.5 border border-white/10 font-mono text-[9px] text-gold-400 uppercase">
                      {item.category}
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-serif text-xl text-white group-hover:text-gold-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-parchment-300 font-light leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-500">
                  <span>ISRAEL DARE</span>
                  <span className="text-gold-400/80">VERIFIED ARCHIVE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. JOURNAL PREVIEW (Latest 3 Essays) */}
      <section className="py-24 sm:py-32 px-5 sm:px-8 border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.08]">
            <div className="space-y-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.26em] text-gold-400 font-semibold">
                Intellectual Dispatches
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white">
                From the Journal
              </h2>
            </div>
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-mono text-xs text-gold-400 hover:text-white uppercase tracking-widest transition-colors"
            >
              Explore All Writings →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentEssays.map((essay) => (
              <Link
                key={essay.slug}
                href="/journal"
                className="group block p-8 border border-white/[0.08] bg-noir-900/40 hover:bg-noir-900 hover:border-gold-500/30 transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
                    <span className="text-gold-400/90 uppercase">{essay.category}</span>
                    <span>{essay.readTime}</span>
                  </div>

                  <h3 className="font-serif text-2xl text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {essay.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-parchment-300 font-light leading-relaxed">
                    {essay.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-400 group-hover:text-white transition-colors">
                  <span>{essay.date}</span>
                  <span>READ ESSAY ↗</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CLOSING CTA */}
      <section className="relative py-28 sm:py-36 px-5 sm:px-8 overflow-hidden bg-gradient-to-b from-noir-950 via-noir-900 to-noir-950">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold-400 font-semibold">
            Direct Collaboration
          </span>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[1.05]">
            Engineering defensible systems for high-value operators.
          </h2>

          <p className="text-base sm:text-lg text-parchment-200 font-light max-w-xl mx-auto leading-relaxed">
            Whether you are evaluating an enterprise AI initiative, automating complex operational pipelines, or seeking sovereign technical advisory.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="btn-luxury-gold"
            >
              Initiate Engagement <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/credentials"
              className="btn-luxury-outline"
            >
              View Institutional Credentials
            </Link>
          </div>

          <p className="font-mono text-[11px] text-zinc-500 pt-4">
            Direct email: <a href="mailto:israel@israeldare.com" className="text-zinc-300 hover:text-white underline">israel@israeldare.com</a> · Responses within 24 hours
          </p>
        </div>
      </section>
    </div>
  )
}
