'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X, Zap } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'AI Services', href: '/services' },
  { label: 'Resources', href: '/resources' },
  { label: 'News & Logs', href: '/news' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-neutral-950/80 backdrop-blur-md border-b border-neutral-900 shadow-[0_4px_30px_rgba(0,0,0,0.4)] py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-500 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] group-hover:scale-105 transition-all duration-300">
              <Zap className="w-5 h-5 text-white fill-white/10" />
            </div>
            <span className="font-extrabold text-xl tracking-tight">
              <span className="text-red-500">izzy</span>
              <span className="text-white">techub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-neutral-900/40 border border-neutral-800/60 rounded-full px-1.5 py-1 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-neutral-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-red-500/10 border-t border-red-500/20 rounded-full z-0" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all duration-300 shadow-[0_4px_15px_rgba(239,68,68,0.2)] hover:shadow-[0_4px_25px_rgba(239,68,68,0.4)] hover:scale-[1.02]"
            >
              Work With Izzy
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl border border-neutral-800 bg-neutral-900/50 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-lg border-t border-neutral-900 animate-slide-up">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-white bg-red-600/10 border-l-2 border-red-500'
                      : 'text-neutral-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}
            <div className="pt-4 border-t border-neutral-900">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold rounded-xl transition-all"
              >
                Work With Izzy
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
