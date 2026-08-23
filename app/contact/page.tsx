import type { Metadata } from 'next'
import { Mail, Phone, MessageSquare, Clock, Calendar, ArrowUpRight } from 'lucide-react'
import ContactForm from './ContactForm'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Executive Inquiries & Engagements | ISRAEL DARE',
  description:
    'Initiate a private engagement, systems engineering contract, or academic research collaboration with Israel Dare.',
}

export default function ContactPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            DIRECT OFFICE ACCESS
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Initiate an <span className="italic font-light">Engagement</span>
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            For high-stakes AI system contracts, autonomous drone photogrammetry integrations, enterprise advisory, or academic research collaborations.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Channels & Credentials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-noir-900 border border-white/[0.08] p-8 space-y-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-red-500 font-bold">
                DIRECT CHANNELS
              </p>

              {/* Direct Email */}
              <div className="space-y-1">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Direct Executive Email
                </p>
                <a
                  href="mailto:izzy.marketing.hub@gmail.com"
                  className="font-mono text-xs text-white hover:text-red-400 transition-colors block"
                >
                  izzy.marketing.hub@gmail.com
                </a>
                <a
                  href="mailto:phemmy09israel@gmail.com"
                  className="font-mono text-xs text-zinc-400 hover:text-white transition-colors block"
                >
                  phemmy09israel@gmail.com (Academic)
                </a>
              </div>

              {/* Direct Phone / WhatsApp */}
              <div className="space-y-1 pt-4 border-t border-white/[0.06]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500">
                  Direct Phone &amp; WhatsApp
                </p>
                <a
                  href="https://wa.me/14245460129"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white hover:text-red-400 transition-colors block"
                >
                  +1 424 546 0129
                </a>
                <p className="font-mono text-[9px] text-zinc-500">Fastest for Urgent Retainers</p>
              </div>

              {/* Strategy Scheduler */}
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-500 mb-2">
                  Direct Video Briefing
                </p>
                <a
                  href="https://Calendly.com/izzy-marketing-hub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-luxury w-full text-center text-[10px] py-3 inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" /> Book 30-Min Strategy Call 📅
                </a>
              </div>
            </div>

            {/* Social Matrix */}
            <div className="bg-noir-900 border border-white/[0.08] p-8 space-y-4">
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-500">
                VERIFIED PLATFORMS
              </p>
              <div className="grid grid-cols-2 gap-3 font-mono text-xs text-zinc-400">
                <a
                  href="https://www.upwork.com/freelancers/~010297ccb4983d90e7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between p-2.5 bg-black border border-white/10"
                >
                  <span>Upwork Top 3%</span>
                  <ArrowUpRight className="w-3 h-3 text-red-500" />
                </a>
                <a
                  href="https://x.com/izzy_automation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between p-2.5 bg-black border border-white/10"
                >
                  <span>X (Twitter)</span>
                  <ArrowUpRight className="w-3 h-3 text-red-500" />
                </a>
                <a
                  href="https://www.linkedin.com/in/israel-dare-31a11318a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between p-2.5 bg-black border border-white/10"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-red-500" />
                </a>
                <a
                  href="https://www.instagram.com/izzyautomation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white flex items-center justify-between p-2.5 bg-black border border-white/10"
                >
                  <span>Instagram</span>
                  <ArrowUpRight className="w-3 h-3 text-red-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: The Formal Engagement Dossier Form */}
          <div className="lg:col-span-7 bg-noir-900 border border-white/[0.08] p-8 sm:p-12">
            <div className="pb-8 border-b border-white/[0.08] mb-8">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-red-500 font-semibold mb-1">
                TRANSMISSION FORM
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-white">
                Submit Project or Research Brief
              </h2>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
