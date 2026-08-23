import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Activity,
  Cpu,
  BookOpen,
  Music,
  Plane,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Now — Current Focus & Pursuits | ISRAEL DARE',
  description:
    'A real-time window into what Israel Dare is actively building, researching, reading, and pursuing right now.',
}

export default function NowPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 space-y-16">
        {/* Header */}
        <header className="space-y-6 pb-12 border-b border-white/[0.08]">
          <div className="flex items-center gap-3 font-mono text-xs text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse-subtle" />
            <span className="text-white font-semibold uppercase tracking-widest">
              LIVE SIGNAL · UPDATED AUGUST 2026
            </span>
            <span>·</span>
            <span>LAGOS (WAT)</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            What I Am Doing <span className="italic font-light">Now</span>
          </h1>

          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed">
            Inspired by Derek Sivers' public declaration model. This is a real-time account of my active engineering priorities, research papers, reading list, and creative pursuits.
          </p>
        </header>

        {/* 1. ACTIVE ENGINEERING & BUILDS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-red-500" />
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              1. Active Engineering Deployments
            </h2>
          </div>

          <div className="bg-noir-900 border border-white/[0.08] p-8 space-y-4 font-light text-sm text-zinc-300 leading-relaxed">
            <p>
              • <strong>Autonomous Drone Photogrammetry Engine:</strong> Building a processing pipeline that converts UAV multispectral imagery and LiDAR telemetry into 3D Gaussian Splatting and dense point-cloud digital twins for agricultural terrains.
            </p>
            <p>
              • <strong>High-Concurrency RAG Pipelines:</strong> Upgrading admissions and documentation chatbots for academic institutions to achieve sub-second response times using Claude 3.5 Sonnet and hybrid vector/keyword retrieval in Supabase.
            </p>
            <p>
              • <strong>Deterministic Outbound SDR Engines:</strong> Refining automated lead validation pipelines that eliminate fake numbers and dial voicemails before syncing to CRM queues.
            </p>
          </div>
        </section>

        {/* 2. ACADEMIC & SPATIAL RESEARCH */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Plane className="w-5 h-5 text-red-500" />
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              2. Academic Research &amp; Mathematical Modeling
            </h2>
          </div>

          <div className="bg-noir-900 border border-white/[0.08] p-8 space-y-4 font-light text-sm text-zinc-300 leading-relaxed">
            <p>
              • <strong>Gaussian Process Regression (GPR):</strong> Extending my undergraduate thesis findings to simulate non-linear thermodynamic decay across multi-tier storage warehouses.
            </p>
            <p>
              • <strong>Decentralized Multi-Agent Telemetry:</strong> Preparing international research proposals (for UTFPR and UFRPE in Brazil) integrating IoT micro-climate sensors with parametric micro-insurance protocols for smallholder cooperatives.
            </p>
          </div>
        </section>

        {/* 3. READING LIST */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <BookOpen className="w-5 h-5 text-red-500" />
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              3. Current Intellectual Reading List
            </h2>
          </div>

          <div className="bg-noir-900 border border-white/[0.08] p-8 space-y-4 font-light text-sm text-zinc-300 leading-relaxed">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-red-500 font-bold">01</span>
                <div>
                  <span className="text-white font-medium">"Gaussian Processes for Machine Learning"</span>
                  <p className="text-xs text-zinc-400">Carl Edward Rasmussen &amp; Christopher K. I. Williams — Reviewing covariance kernel functions for spatial modeling.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-red-500 font-bold">02</span>
                <div>
                  <span className="text-white font-medium">"Photogrammetry: Geometry from Images"</span>
                  <p className="text-xs text-zinc-400">Karl Kraus — Mathematical foundations of aerial bundle adjustment and epipolar geometry.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono text-xs text-red-500 font-bold">03</span>
                <div>
                  <span className="text-white font-medium">"Antifragile: Things That Gain from Disorder"</span>
                  <p className="text-xs text-zinc-400">Nassim Nicholas Taleb — Applying convex heuristics to engineering systems design and personal focus.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* 4. POLYPHONIC MUSICAL PURSUITS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Music className="w-5 h-5 text-red-500" />
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              4. Symphonic Polyphony &amp; Musicianship
            </h2>
          </div>

          <div className="bg-noir-900 border border-white/[0.08] p-8 space-y-4 font-light text-sm text-zinc-300 leading-relaxed">
            <p>
              Currently practicing J.S. Bach's Violin Partitas and Cello Suites. Classical polyphony exercises the exact cognitive faculties required to maintain parallel, asynchronous state in complex systems engineering.
            </p>
          </div>
        </section>

        {/* 5. APEXIUM SOCIAL INITIATIVE */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-red-500" />
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-normal">
              5. APEXIUM Grassroots Expansion
            </h2>
          </div>

          <div className="bg-noir-900 border border-white/[0.08] p-8 space-y-4 font-light text-sm text-zinc-300 leading-relaxed">
            <p>
              Expanding APEXIUM community workshops to deliver free AI literacy and workflow automation courses to 100+ new secondary school and university students across Ondo State.
            </p>
          </div>
        </section>

        {/* Footer Gateway */}
        <footer className="pt-12 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-400">
          <span>HAVE A COLLABORATION PROPOSAL?</span>
          <Link href="/contact" className="btn-luxury text-[10px] py-2.5 px-5">
            Initiate Inquiry ↗
          </Link>
        </footer>
      </div>
    </div>
  )
}
