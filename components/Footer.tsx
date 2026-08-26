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
            <p className="font-serif text-lg sm:text-xl text-parchment-200 italic leading-relaxed max-w-md font-light">
              "The discipline of code and the physics of the physical world are one. We do not build ephemeral toys; we engineer generational systems."
            </p>
            <div className="flex items-center gap-6 pt-2 font-mono text-[11px] text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-subtle" />
                <span>WAT (Lagos / London / NY): {time || '12:00:00'}</span>
              </div>
              <span className="text-zinc-500">·</span>
              <span className="text-gold-400/90">Available Globally</span>
            </div>
          </div>

          {/* Navigation Matrix */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400/80 mb-4">
                Directory
              </p>
              <ul className="space-y-2.5 text-xs tracking-wider">
                {[
                  { label: 'Headquarters', href: '/' },
                  { label: 'Narrative Story', href: '/about' },
                  { label: 'Credentials & CV', href: '/credentials' },
                  { label: 'Visual Gallery & Archive', href: '/gallery' },
                  { label: 'Consulting & Services', href: '/services' },
                  { label: 'Portfolio & Case Studies', href: '/projects' },
                  { label: 'Shop & Systems Store', href: '/products' },
                  { label: 'Journal & Essays', href: '/journal' },
                  { label: 'Direct Inquiries', href: '/contact' },
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
              <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400/80 mb-4">
                Channels
              </p>
              <ul className="space-y-2.5 text-xs tracking-wider">
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/israel-dare-31a11318a' },
                  { label: 'Upwork Top Rated', href: 'https://www.upwork.com/freelancers/~010297ccb4983d90e7' },
                  { label: 'GitHub', href: 'https://github.com/Phemmy09' },
                  { label: 'X (Twitter)', href: 'https://x.com/izzy_automation' },
                  { label: 'WhatsApp (+1 424 546 0129)', href: 'https://wa.me/14245460129' },
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

          {/* Private Dispatch Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-zinc-400">
              Private Dispatch
            </p>
            <p className="text-xs text-zinc-400 font-light leading-relaxed">
              Periodic private memos on autonomous spatial intelligence, mathematical thermodynamics, and systems architecture.
            </p>
            <form onSubmit={handleNewsletter} className="space-y-2">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your executive email"
                  required
                  className="bg-noir-900 border border-white/10 px-3.5 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-red-600 flex-1 font-mono"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-white text-black px-4 py-2 font-mono text-xs font-semibold hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? '...' : 'Join'}
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
                href="mailto:israel@israeldare.com"
                className="font-mono text-[11px] text-zinc-400 hover:text-white transition-colors block"
              >
                israel@israeldare.com
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
