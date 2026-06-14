'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Flame,
  Award,
  Laptop,
  Briefcase,
  Music,
  ShieldCheck,
  Calendar,
  ChevronRight,
  X,
  Maximize2,
  BookOpen
} from 'lucide-react'

const stats = [
  { icon: ShieldCheck, value: 'Top 3%', label: 'Worldwide Upwork Talent' },
  { icon: Award, value: 'First Class', label: 'Agricultural Eng. (FUTA)' },
  { icon: Laptop, value: '100+', label: 'AI Systems Built' },
  { icon: Music, value: '4 Instruments', label: 'Violin, Viola, Cello, Piano' },
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

const galleryImages = [
  {
    src: '/images/DGF_6811 copy.jpg',
    title: 'Israel Oluwafemi Dare',
    category: 'Portrait',
    caption: 'Official portrait of Israel O. Dare, Chief Systems Architect & AI Engineer.'
  },
  {
    src: '/images/DGF_6818 copy.jpg',
    title: 'AI Systems Engineering',
    category: 'Focus',
    caption: 'Engineering concurrent databases and robust workflow systems.'
  },
  {
    src: '/images/DGF_5199 copy (1).jpg',
    title: 'Violin Performance',
    category: 'Orchestra',
    caption: 'Performing violin solo at a university-wide symphonic concert.'
  },
  {
    src: '/images/DGF_5213 copy.jpg',
    title: 'Orchestral Coordination',
    category: 'Leadership',
    caption: 'Rehearsing with the campus orchestra choir as the General Coordinator.'
  },
  {
    src: '/images/DGF_5744 copy.jpg',
    title: 'APEXIUM Classroom Session',
    category: 'Community',
    caption: 'Teaching local students computational logic and AI automation tools.'
  },
  {
    src: '/images/DGF_5774 copy (1).jpg',
    title: 'Bridging the Tech Divide',
    category: 'Apexium',
    caption: 'Demonstrating AI agent creation in community halls across Ondo State.'
  }
]

export default function AboutClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const nextLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
    }
  }
  const prevLightbox = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Bio Hero Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        {/* Left: Interactive Image Panel */}
        <div className="lg:col-span-5 relative group mx-auto lg:mx-0 w-full max-w-sm">
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-red-500 rounded-3xl blur-[20px] opacity-10" />
          <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl">
            <Image
              src="/images/Izzy.jpg"
              alt="Israel O. Dare Profile"
              fill
              className="object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 1024px) 384px, 384px"
              priority
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-panel border border-neutral-800 px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
              <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
            </div>
            <div>
              <p className="text-white font-bold text-xs uppercase tracking-wider">Status</p>
              <p className="text-neutral-400 text-xs">Open for Hard Problems</p>
            </div>
          </div>
        </div>

        {/* Right: Bio Details */}
        <div className="lg:col-span-7">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Biographical Spotlight</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Israel O. Dare
          </h1>
          <p className="text-xl text-red-400 font-bold mb-6 tracking-wide">
            Chief AI Architect &amp; Systems Engineer
          </p>

          <div className="p-6 bg-red-950/10 border border-red-500/10 rounded-2xl mb-8">
            <p className="text-neutral-300 text-sm md:text-base leading-relaxed italic font-light">
              "I watched television for the first time at twelve. Got my first phone at sixteen. Where I grew up, owning a laptop made you a suspect, not a student. Today, I build systems that process hundreds of thousands of dollars on autopilot. Easy work bores me. Bring me the hard stuff."
            </p>
          </div>

          <p className="text-neutral-400 text-sm md:text-base mb-6 leading-relaxed font-light">
            During my final year of university, my father was tragically lost in a fatal motor accident, and my mother was left hospitalized in the same crash. Overnight, I went from being a student to being the primary anchor for my family. I had no safety net, no connections, and no startup capital. Just a laptop and a decision: figure it out or fall apart.
          </p>
          <p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed font-light">
            I chose technology. I taught myself automation, API integrations, database structures, and workflow design. Today, I am rated as a <strong>Top Rated Plus talent on Upwork (Top 3% worldwide)</strong>. I don't build simple chatbots; I construct robust backend systems and agricultural models that resolve complex bottlenecks.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://Calendly.com/izzy-marketing-hub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 group text-xs uppercase tracking-wider font-bold"
            >
              Book Strategy Call
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
      </section>

      {/* Stats Grid */}
      <section className="py-12 border-y border-neutral-900 bg-neutral-950/25 mb-24 rounded-3xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-6">
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

      {/* Image Gallery Grid */}
      <section className="mb-24">
        <div className="text-center mb-12">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Media Records</p>
          <h2 className="text-3xl font-extrabold text-white">Interactive Gallery</h2>
          <p className="text-neutral-400 text-sm max-w-xl mx-auto mt-2 font-light">
            Visual logs of my professional work, community teaching sessions with APEXIUM, and symphonic orchestra performances.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/5] bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden cursor-pointer hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 shadow-md"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <span className="text-[9px] text-red-400 font-bold uppercase tracking-widest">{image.category}</span>
                <span className="text-[11px] text-white font-extrabold mt-0.5 flex items-center justify-between">
                  {image.title}
                  <Maximize2 className="w-3 h-3 text-red-500" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline Story */}
      <section className="mb-24">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white text-center mb-16">The Timeline</h2>

        <div className="relative border-l border-neutral-900 pl-8 sm:pl-0 sm:border-l-0 sm:before:absolute sm:before:left-1/2 sm:before:top-0 sm:before:bottom-0 sm:before:w-px sm:before:bg-neutral-900 space-y-16">
          {/* 1 */}
          <div className="relative sm:flex sm:items-start sm:justify-between sm:gap-16">
            <div className="sm:w-1/2 sm:text-right pr-8 hidden sm:block">
              <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                Adversity &amp; Focus
              </span>
            </div>
            <div className="absolute left-[-41px] sm:left-1/2 transform -translate-x-[9px] sm:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
            <div className="sm:w-1/2 sm:pl-8">
              <span className="inline-block sm:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                Adversity &amp; Focus
              </span>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                <Flame className="w-4 h-4 text-red-500 shrink-0" /> Forged In Grief
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                During my final year at FUTA, my father was tragically lost in a motor accident, and my mother hospitalized. Forced to support my family at 22 with no backup, I refused to break. I channeled grief into focused technology study, launching a professional engineering career.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="relative sm:flex sm:items-start sm:justify-between sm:gap-16">
            <div className="sm:w-1/2 sm:pr-8 sm:text-right order-1 sm:order-2">
              <span className="inline-block sm:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                FUTA Engineering
              </span>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 sm:justify-end mb-3">
                Academic Rigor <Award className="w-4 h-4 text-red-500 shrink-0" />
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light sm:text-right">
                I graduated with **First Class Honours in Agricultural &amp; Environmental Engineering (Top 3%)** in 2023. My thesis applied Gaussian Process Regression modeling to optimize post-harvest atmospheric tuber storage.
              </p>
            </div>
            <div className="absolute left-[-41px] sm:left-1/2 transform -translate-x-[9px] sm:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
            <div className="sm:w-1/2 sm:pl-8 text-left hidden sm:block order-2 sm:order-1">
              <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                FUTA Engineering
              </span>
            </div>
          </div>

          {/* 3 */}
          <div className="relative sm:flex sm:items-start sm:justify-between sm:gap-16">
            <div className="sm:w-1/2 sm:text-right pr-8 hidden sm:block">
              <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                Social Impact
              </span>
            </div>
            <div className="absolute left-[-41px] sm:left-1/2 transform -translate-x-[9px] sm:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
            <div className="sm:w-1/2 sm:pl-8">
              <span className="inline-block sm:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                Social Impact
              </span>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 mb-3">
                <Laptop className="w-4 h-4 text-red-500 shrink-0" /> Founding APEXIUM
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light">
                In 2024, I founded **APEXIUM**, a social impact initiative dedicated to teaching AI literacy and automation tools to rural youth in community halls across Ondo State, bridging the digital divide permanently.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="relative sm:flex sm:items-start sm:justify-between sm:gap-16">
            <div className="sm:w-1/2 sm:pr-8 sm:text-right order-1 sm:order-2">
              <span className="inline-block sm:hidden px-3 py-0.5 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono mb-2">
                Global Client Growth
              </span>
              <h3 className="text-lg font-bold text-white flex items-center gap-2 sm:justify-end mb-3">
                Top Rated Plus <Briefcase className="w-4 h-4 text-red-500 shrink-0" />
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-light sm:text-right">
                Now directing AI projects globally. Successfully engineered admissions chatbots reducing support loads by 68% for Babcock/ABU, and built complex doc-parsers to automate material calculation for construction companies.
              </p>
            </div>
            <div className="absolute left-[-41px] sm:left-1/2 transform -translate-x-[9px] sm:-translate-x-1/2 w-4.5 h-4.5 rounded-full bg-red-600 border-4 border-neutral-950 z-20" />
            <div className="sm:w-1/2 sm:pl-8 text-left hidden sm:block order-2 sm:order-1">
              <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-lg text-red-400 text-xs font-mono">
                Global Client Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities & Orchestra */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        {/* Core Competencies */}
        <div className="glass-panel border border-neutral-800/80 p-8 rounded-3xl">
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

        {/* Tools & Tech */}
        <div className="glass-panel border border-neutral-800/80 p-8 rounded-3xl">
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

        {/* Musical Orchestra Story */}
        <div className="glass-panel border border-neutral-800/80 p-8 rounded-3xl flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-black text-white mb-4 flex items-center gap-2">
              <Music className="w-6 h-6 text-red-500" /> Musical Harmony
            </h3>
            <p className="text-neutral-400 text-sm leading-relaxed font-light mb-6">
              Outside of coding, I am an accomplished, self-taught multi-instrumentalist playing the **Violin, Viola, Cello, and Piano**. I coordinated campus orchestras and symphonic concerts as General Coordinator from 2019 to 2023. For me, music represents the same logical elegance as code: structured patterns, frequencies, and harmony cooperating to build a beautiful result.
            </p>
          </div>
          <div className="p-4 bg-red-950/10 border border-red-500/10 rounded-2xl flex items-center justify-between gap-4">
            <span className="text-neutral-200 text-xs font-semibold">"Music is data that makes you feel."</span>
            <span className="text-red-400 text-xs font-mono font-bold">4 Instruments</span>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-white hover:text-red-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="relative max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <div className="relative aspect-[4/5] w-full max-w-lg rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
            <div className="text-center mt-4">
              <span className="text-red-400 text-xs font-bold uppercase tracking-widest">{galleryImages[lightboxIndex].category}</span>
              <h3 className="text-xl font-bold text-white mt-1">{galleryImages[lightboxIndex].title}</h3>
              <p className="text-neutral-400 text-sm mt-1 max-w-md mx-auto font-light">{galleryImages[lightboxIndex].caption}</p>
            </div>
            
            {/* Left/Right controls */}
            <button
              onClick={prevLightbox}
              className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-white hover:text-red-500 transition-colors"
            >
              ←
            </button>
            <button
              onClick={nextLightbox}
              className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-center text-white hover:text-red-500 transition-colors"
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
