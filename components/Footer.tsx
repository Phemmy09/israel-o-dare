'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ArrowUpRight, Send, ShieldCheck, Award } from 'lucide-react'
import Logo from './Logo'

const NEWSLETTER_WEBHOOK =
  process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK ||
  'https://n8n-digitalmavericks-u48043.vm.elestio.app/webhook/d4aa2064-907b-443b-a094-d2f6277e8cde'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      // West Africa Time (WAT) is UTC+1
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Africa/Lagos',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }
      setTime(new Intl.DateTimeFormat([], options).format(now))
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(NEWSLETTER_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Israel Dare Dispatch Subscription' }),
      })
      if (res.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <footer className="bg-black border-t border-white/[0.08] relative text-zinc-300 font-sans">
      {/* Top Banner / Masthead Section */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-20 border-b border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Brand Identity & Colophon */}
          <div className="lg:col-span-5 space-y-6">
            <Logo variant="full" size="lg" />
            <p className="font-serif text-lg sm:text-xl text-zinc-300 italic leading-relaxed max-w-md font-light">
              "The discipline of code and the physics of the physical world are one. We do not build toys; we engineer generational systems."
            </p>
            <div className="flex items-center gap-6 pt-2 font-mono text-[11px] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse-subtle" />
                <span>WAT (Lagos): {time || '12:00:00'}</span>
              </div>
              <span className="text-zinc-500">·</span>
              <span>Available Globally</span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 mb-4">
                Directory
              </p>
              <ul className="space-y-2.5 text-xs tracking-wider">
                {[
                  { label: 'Home / Headquarters', href: '/' },
                  { label: 'Narrative Biography', href: '/about' },
                  { label: 'Systems & Advisory', href: '/services' },
                  { label: 'Products & IP Store', href: '/products' },
                  { label: 'Journal & Dispatches', href: '/journal' },
                  { label: 'Now Focus', href: '/now' },
                  { label: 'Research & Whitepapers', href: '/research' },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400 mb-4">
                Channels
              </p>
              <ul className="space-y-2.5 text-xs tracking-wider">
                {[
                  { label: 'X (Twitter)', href: 'https://x.com/izzy_automation' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/israel-dare-31a11318a' },
                  { label: 'Upwork Top Rated', href: 'https://www.upwork.com/freelancers/~010297ccb4983d90e7' },
                  { label: 'Instagram', href: 'https://www.instagram.com/izzyautomation/' },
                  { label: 'TikTok', href: 'https://www.tiktok.com/@mail_izzy?_r=1&_t=ZN-92X156ksQti' },
                  { label: 'Executive WhatsApp', href: 'https://wa.me/14245460129' },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item.label} <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Dispatch */}
          <div className="lg:col-span-3 space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
              The Dispatch
            </p>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">
              Intellectual memos on autonomous aerial robotics, bio-spatial photogrammetry, predictive models, and generational systems.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  required
                  className="w-full bg-noir-900 border border-white/10 px-4 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-zinc-400 hover:text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {status === 'success' && (
                <p className="font-mono text-[10px] text-green-400">✓ Enrolled in the private dispatch.</p>
              )}
              {status === 'error' && (
                <p className="font-mono text-[10px] text-red-400">Error. Try again or reach out directly.</p>
              )}
            </form>

            {/* Direct Line */}
            <div className="pt-2 border-t border-white/[0.06] text-xs">
              <a
                href="mailto:izzy.marketing.hub@gmail.com"
                className="font-mono text-[11px] text-zinc-400 hover:text-white transition-colors block"
              >
                izzy.marketing.hub@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal / Credentials Strip */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-400">
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} ISRAEL DARE. ALL RIGHTS RESERVED.</span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline">FIRST CLASS B.ENG. (FUTA)</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400">TOP RATED PLUS ON UPWORK</span>
          <span className="text-zinc-700">·</span>
          <span>EST. MMXXIII</span>
        </div>
      </div>
    </footer>
  )
}
