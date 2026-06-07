import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flame, TrendingUp, Award, Laptop, ShieldCheck, Music, Briefcase, Calendar, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Israel O. Dare | Founder of Izzytechub',
  description:
    'From adversity to Top Rated Plus on Upwork (Top 3% worldwide). The journey of Israel O. Dare, founder of Izzytechub AI Automation agency.',
}

const stats = [
  { icon: ShieldCheck, value: 'Top 3%', label: 'Worldwide Upwork Talent' },
  { icon: Award, value: 'First Class', label: 'Agricultural Eng. (FUTA)' },
  { icon: Laptop, value: '100+', label: 'AI Systems Built' },
  { icon: Music, value: '4+', label: 'Instruments Played' },
]

const skills = [
  'AI Automation & Workflow Design',
  'AI Agent Development & Deployment',
  'AI Voice Agent Development',
  'AI SDR & Sales Pipelines',
  'Systems Thinking & Optimization',
  'Email Marketing & Automation',
  'Advanced Data Scraping',
  'Full-Stack Web Development',
]

const tools = [
  'n8n',
  'Make.com',
  'Zapier',
  'GoHighLevel (GHL)',
  'Claude Code & LLM APIs',
  'Vapi & Retell AI',
  'ElevenLabs',
  'Supabase & Pinecone',
]

export default function AboutPage() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      <div className="glow-blob top-[10%] left-[20%]" />
      <div className="glow-blob top-[50%] right-[10%]" />

      {/* Hero */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image panel */}
            <div className="relative group mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-3xl blur-[20px] opacity-10" />
              <div className="relative aspect-[3/4] w-full max-w-sm rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl">
                <Image
                  src="/izzy.jpg"
                  alt="Israel O. Dare Profile"
                  fill
                  className="object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 384px, 384px"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-panel border border-neutral-800 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                </div>
                <div>
                  <p className="text-white font-bold text-xs uppercase tracking-wider">Status</p>
                  <p className="text-neutral-400 text-xs">Open for Hard Problems</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Founder Spotlight</p>
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
                Israel O. Dare
              </h1>
              <p className="text-xl text-red-400 font-bold mb-6 tracking-wide">
                Chief AI Architect &amp; Systems Engineer
              </p>

              {/* Raw Quote */}
              <div className="p-6 bg-red-950/10 border border-red-500/10 rounded-2xl mb-8">
                <p className="text-neutral-300 text-sm md:text-base leading-relaxed italic font-light">
                  "I watched television for the first time at twelve. Got my first phone at sixteen — it was stolen weeks later. Where I grew up, owning a laptop made you a suspect, not a student. Today, I build systems that process hundreds of thousands of dollars on autopilot. Easy work bores me. Bring me the hard stuff."
                </p>
              </div>

              <p className="text-neutral-400 text-sm md:text-base mb-6 leading-relaxed font-light">
                I recently graduated from school and lost my father in a fatal car accident — my mother was hospitalized in the same crash. Overnight, I went from being a student to being the one everyone depended on. I had no safety net, no connections, and no startup capital. Just a laptop and a decision: figure it out or fall apart.
              </p>
              <p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed font-light">
                I chose AI. I taught myself everything — automation, voice agents, workflow design, CRM systems — and I started building for survival. Today, I'm rated <strong>Top Rated Plus on Upwork (Top 3% worldwide)</strong>. I don't build simple chatbots; I construct robust systems that resolve operational bottlenecks your team has given up on.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://Calendly.com/izzy-marketing-hub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 group text-xs uppercase tracking-wider font-bold"
                >
                  Book 30m Booking Call
                  <Calendar className="w-4 h-4" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~010297ccb4983d90e7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2 text-xs uppercase tracking-wider"
                >
                  <Briefcase className="w-4 h-4 text-red-500" /> Upwork Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 px-4 border-y border-neutral-900 bg-neutral-950/20 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="p-6 glass-panel border border-neutral-800/60 rounded-2xl text-center card-hover">
              <div className="w-10 h-10 mx-auto bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-2xl font-black text-white">{value}</p>
              <p className="text-neutral-500 text-xs uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Story */}
      <section className="py-24 px-4 relative z-10 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16">The Timeline</h2>

          <div className="relative timeline-line pl-8 sm:pl-0 space-y-12">
            {/* 1 */}
            <div className="relative md:flex items-start justify-between md:gap-16">
              <div className="md:w-1/2 md:text-right pr-8 hidden md:block">
                <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                  Adversity &amp; Focus
                </span>
              </div>
              <div className="absolute left-[15px] md:left-1/2 transform -translate-x-[25px] md:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
              <div className="md:w-1/2 md:pl-8">
                <span className="inline-block md:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                  Adversity &amp; Focus
                </span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                  <Flame className="w-4 h-4 text-red-500 shrink-0" /> Forged In Grief
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  During my final year at the Federal University of Technology, Akure, my father was tragically lost in a motor accident, and my mother was left hospitalized. Standing as the newly forced head of my family at 22 with zero income, I faced a crossroads. Staring at MATLAB script, I chose not to crumble. I chose survival through technology.
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="relative md:flex items-start justify-between md:gap-16">
              <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-2">
                <span className="inline-block md:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                  FUTA Engineering
                </span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 md:justify-end mb-3">
                  Academic Rigor <Award className="w-4 h-4 text-red-500 shrink-0" />
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  I maintained a First-Class performance while teaching myself AI tools and freelancing. I graduated with **First Class Honours in Agricultural &amp; Environmental Engineering (Top 3%)** in 2023. My final year research focused on **Optimizing Yam Atmospheric Storage using Gaussian Regression modeling** — building my baseline for high-precision mathematical models.
                </p>
              </div>
              <div className="absolute left-[15px] md:left-1/2 transform -translate-x-[25px] md:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
              <div className="md:w-1/2 md:pl-8 text-left hidden md:block order-2 md:order-1">
                <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                  FUTA Engineering
                </span>
              </div>
            </div>

            {/* 3 */}
            <div className="relative md:flex items-start justify-between md:gap-16">
              <div className="md:w-1/2 md:text-right pr-8 hidden md:block">
                <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                  Social Impact
                </span>
              </div>
              <div className="absolute left-[15px] md:left-1/2 transform -translate-x-[25px] md:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
              <div className="md:w-1/2 md:pl-8">
                <span className="inline-block md:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                  Social Impact
                </span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                  <Laptop className="w-4 h-4 text-red-500 shrink-0" /> Founding APEXIUM
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  In 2024, I founded **APEXIUM** to bridge the digital divide. Teaching rural youth AI automation, I demonstrated bot-building in community halls in Ondo State. When a 16-year-old student asked to build a yams-selling optimization bot, it proved that redistributing access to technology changes lives permanently.
                </p>
              </div>
            </div>

            {/* 4 */}
            <div className="relative md:flex items-start justify-between md:gap-16">
              <div className="md:w-1/2 md:pr-8 md:text-right order-1 md:order-2">
                <span className="inline-block md:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                  Global Client Growth
                </span>
                <h3 className="text-lg font-bold text-white flex items-center gap-2 md:justify-end mb-3">
                  Top Rated Plus <Briefcase className="w-4 h-4 text-red-500 shrink-0" />
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                  Today, I direct **Izzytechub**, deploying enterprise-grade automations across the US, UK, Europe, and Africa. From building AI voice reservation systems to reducing customer support loads by 68% for institutions (Babcock and ABU), our workflows recover hundreds of thousands of dollars in lost opportunities.
                </p>
              </div>
              <div className="absolute left-[15px] md:left-1/2 transform -translate-x-[25px] md:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
              <div className="md:w-1/2 md:pl-8 text-left hidden md:block order-2 md:order-1">
                <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                  Global Client Growth
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Musical Side */}
      <section className="py-24 px-4 relative z-10 bg-neutral-950/30 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Core Competency List */}
            <div className="glass-panel border border-neutral-800/80 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-6">Capabilities</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill} className="flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 text-xs shrink-0 mt-0.5">✓</span>
                      <span className="text-neutral-300 text-sm font-light leading-relaxed">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools List */}
            <div className="glass-panel border border-neutral-800/80 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-6">Tools &amp; Tech</h3>
                <div className="space-y-4">
                  {tools.map((tool) => (
                    <div key={tool} className="flex items-center gap-2.5">
                      <span className="w-2 h-2 bg-red-500 rounded-full shrink-0" />
                      <span className="text-neutral-300 text-sm font-light leading-relaxed">{tool}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Musical Side */}
            <div className="glass-panel border border-neutral-800/80 p-8 rounded-3xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
                  <Music className="w-6 h-6 text-red-500" /> Mathematical Harmony
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
                  Outside of coding, I'm an accomplished self-taught multi-instrumentalist playing **Violin, Viola, Cello, and Piano**. I coordinated campus orchestras and large-scale concerts from 2019 to 2021. For me, music represents the same logical elegance as code: structured patterns, frequencies, and harmony cooperating to build a beautiful result.
                </p>
              </div>
              <div className="p-4 bg-red-950/10 border border-red-500/10 rounded-2xl flex items-center justify-between gap-4">
                <span className="text-neutral-200 text-xs sm:text-sm font-semibold">"Music is data that makes you feel."</span>
                <span className="text-red-400 text-xs font-mono font-bold">4 Instruments</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio CTA */}
      <section className="py-24 px-4 border-t border-neutral-900 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">View My Full Work Records</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto font-light">
            I maintain complete transparency of my contracts and project logs. Check out my Upwork history or download my digital credentials file.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://drive.google.com/file/d/1PFVyB7Oae8ujpNNfSOVWGli45tIbh6Q2/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              Download PDF Portfolio ↗
            </a>
            <a
              href="https://Calendly.com/izzy-marketing-hub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Schedule Meeting 📅
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
