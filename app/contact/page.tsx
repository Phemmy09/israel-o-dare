import type { Metadata } from 'next'
import { Calendar, ArrowUpRight, Clock, Mail } from 'lucide-react'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact & Inquiries | Israel Dare',
  description:
    'Initiate a private advisory engagement, bespoke AI systems build, or institutional inquiry directly with Israel Dare.',
}

export default function ContactPage() {
  return (
    <div className="bg-noir-950 text-parchment-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. CALM INTRO */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-3xl space-y-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
            Direct Transmission
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[0.95]">
            Contact & Inquiries
          </h1>
          <p className="text-lg sm:text-xl text-parchment-200 font-light leading-relaxed">
            I respond personally to all serious inquiries within 24 hours. For prospective clients, please briefly describe the operational problem, target outcome, and timeline.
          </p>
        </div>
      </section>

      {/* 2. MAIN INTERACTION GRID */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Calm Clean Form */}
          <div className="lg:col-span-7 border border-white/[0.08] bg-noir-900/40 p-8 sm:p-12 space-y-8">
            <div className="border-b border-white/[0.06] pb-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-gold-400">
                Engagement Request
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white pt-1">
                Send a Direct Note
              </h2>
            </div>
            <ContactForm />
          </div>

          {/* Right Column: Alternative Direct Channels & Timezone Info */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Channels List */}
            <div className="border border-white/[0.08] bg-noir-900/40 p-8 space-y-6">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Direct Communication
              </span>

              <div className="space-y-4 font-mono text-xs">
                <div className="space-y-1">
                  <p className="text-zinc-500 uppercase text-[10px]">Email Address</p>
                  <a
                    href="mailto:israel@israeldare.com"
                    className="text-white hover:text-gold-300 transition-colors block text-sm"
                  >
                    israel@israeldare.com
                  </a>
                </div>

                <div className="space-y-1 pt-4 border-t border-white/[0.06]">
                  <p className="text-zinc-500 uppercase text-[10px]">Direct Strategy Call</p>
                  <a
                    href="https://Calendly.com/izzy-marketing-hub/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white hover:text-gold-300 transition-colors text-sm"
                  >
                    <span>Schedule 30-Minute Video Consultation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </div>

                <div className="space-y-1 pt-4 border-t border-white/[0.06]">
                  <p className="text-zinc-500 uppercase text-[10px]">WhatsApp Direct</p>
                  <a
                    href="https://wa.me/14245460129"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gold-300 transition-colors block text-sm"
                  >
                    +1 424 546 0129
                  </a>
                </div>
              </div>
            </div>

            {/* Verified Platforms */}
            <div className="border border-white/[0.08] bg-noir-900/40 p-8 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Verified Channels
              </span>
              <ul className="space-y-3 font-mono text-xs text-zinc-400">
                <li>
                  <a
                    href="https://www.upwork.com/freelancers/~010297ccb4983d90e7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>Upwork (Top Rated Plus · 100% JSS)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/israel-dare-31a11318a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>LinkedIn Profile</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Phemmy09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>GitHub Repositories</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/izzy_automation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-zinc-300 hover:text-white transition-colors"
                  >
                    <span>X (Twitter) @izzy_automation</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Timezone & Operating SLA */}
            <div className="p-6 border border-white/[0.08] bg-noir-950/60 font-mono text-xs text-zinc-400 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Clock className="w-3.5 h-3.5 text-gold-400" />
                <span className="font-semibold uppercase text-[10px] tracking-wider">
                  Operating Hours & Timezone
                </span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Base: West Africa Time (UTC+1). Actively synchronized with US Eastern/Pacific and European commercial hours. Inquiries are audited within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
