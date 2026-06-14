'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Zap, Twitter, Instagram, Linkedin, Send, Briefcase, Facebook } from 'lucide-react'

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)


const NEWSLETTER_WEBHOOK =
  process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK ||
  'https://n8n-digitalmavericks-u48043.vm.elestio.app/webhook/d4aa2064-907b-443b-a094-d2f6277e8cde'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    try {
      const res = await fetch(NEWSLETTER_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'Footer Newsletter' }),
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
    <footer className="relative bg-neutral-950 border-t border-neutral-900 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-950/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.2)]">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-lg tracking-tight text-white">
                Israel <span className="text-red-500">O. Dare</span>
              </span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Systems engineer and AI architect bridging the gap between industry automation and academic agricultural research.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/israel-dare-31a11318a', label: 'LinkedIn' },
                { icon: Twitter, href: 'https://x.com/izzy_automation', label: 'X (Twitter)' },
                { icon: Instagram, href: 'https://www.instagram.com/izzyautomation/', label: 'Instagram' },
                { icon: TikTokIcon, href: 'https://www.tiktok.com/@mail_izzy?_r=1&_t=ZN-92X156ksQti', label: 'TikTok' },
                { icon: Facebook, href: 'https://www.facebook.com/profile.php?viewas=100000686899395&id=61557767143485', label: 'Facebook' },
                {
                  icon: Briefcase,
                  href: 'https://www.upwork.com/freelancers/~010297ccb4983d90e7',
                  label: 'Upwork',
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-red-500/40 hover:bg-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {[
                { name: 'Home Portfolio', href: '/' },
                { name: 'Detailed Projects', href: '/projects' },
                { name: 'Academic Research', href: '/research' },
                { name: 'Daily Blog', href: '/blog' },
              ].map((s) => (
                <li key={s.name}>
                  <Link
                    href={s.href}
                    className="text-neutral-400 hover:text-red-400 text-sm transition-colors duration-200"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-widest mb-4">Bio &amp; Contact</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'About My Journey', href: '/about' },
                { label: 'Get in Touch', href: '/contact' },
                { label: 'Tech News & Logs', href: '/news' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-neutral-400 hover:text-white text-sm transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Upwork status badge */}
            <div className="mt-5">
              <a
                href="https://www.upwork.com/freelancers/~010297ccb4983d90e7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#14a800]/10 border border-[#14a800]/20 hover:border-[#14a800]/50 rounded-xl text-[#14a800] text-xs font-bold transition-all duration-300"
              >
                <span className="w-1.5 h-1.5 bg-[#14a800] rounded-full animate-pulse" />
                Top Rated Plus on Upwork
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-widest">Stay Connected</h3>
            <p className="text-neutral-400 text-sm">Subscribe for actionable AI insights and automation blueprints.</p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2.5 bg-neutral-900 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors duration-300 min-w-0"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="p-2.5 bg-red-600 hover:bg-red-500 rounded-xl text-white transition-colors duration-300 disabled:opacity-50 shrink-0 shadow-[0_2px_10px_rgba(239,68,68,0.2)]"
                aria-label="Subscribe"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            {status === 'success' && <p className="text-green-400 text-xs font-medium">✅ Subscribed successfully!</p>}
            {status === 'error' && <p className="text-red-400 text-xs font-medium">❌ Error. Please try again.</p>}

            {/* Contacts */}
            <div className="pt-2 space-y-1">
              <a
                href="mailto:izzy.marketing.hub@gmail.com"
                className="block text-neutral-500 hover:text-neutral-300 text-xs transition-colors duration-200"
              >
                izzy.marketing.hub@gmail.com
              </a>
              <a
                href="https://wa.me/14245460129"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-neutral-500 hover:text-neutral-300 text-xs transition-colors duration-200 animate-pulse"
              >
                💬 WhatsApp: +1 424 546 0129
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-sm">© {new Date().getFullYear()} Israel O. Dare. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="text-neutral-600 text-xs">Developed with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
