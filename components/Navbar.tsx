'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Credentials', href: '/credentials' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/projects' },
  { label: 'Shop', href: '/products' },
  { label: 'Journal', href: '/journal' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-noir-950/95 backdrop-blur-md border-b border-white/[0.08] py-3.5'
          : 'bg-gradient-to-b from-noir-950/90 via-noir-950/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="group" aria-label="Israel Dare Home">
            <Logo variant="full" size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(link.href)) ||
                (link.href === '/projects' && pathname.startsWith('/portfolio')) ||
                (link.href === '/products' && (pathname.startsWith('/shop') || pathname === '/resources')) ||
                (link.href === '/journal' && pathname.startsWith('/blog'))

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[11px] font-sans font-medium uppercase tracking-[0.18em] transition-colors py-1 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-400" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Direct Private Line CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="px-5 py-2.5 bg-white text-noir-950 hover:bg-parchment-100 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-200 active:scale-[0.98] border border-white/10"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-noir-950/98 border-t border-white/[0.08] backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fade-in overflow-y-auto z-50">
          <div className="space-y-6 pt-4">
            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-400/80">
              Directory Index
            </p>
            <div className="space-y-3">
              {navLinks.map((link, idx) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(link.href)) ||
                  (link.href === '/projects' && pathname.startsWith('/portfolio')) ||
                  (link.href === '/products' && (pathname.startsWith('/shop') || pathname === '/resources')) ||
                  (link.href === '/journal' && pathname.startsWith('/blog'))

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-baseline justify-between py-2.5 border-b border-white/[0.06] group"
                  >
                    <span
                      className={`font-serif text-2xl sm:text-3xl tracking-tight transition-colors ${
                        isActive ? 'text-gold-400 italic' : 'text-zinc-300 group-hover:text-white'
                      }`}
                    >
                      {link.label}
                    </span>
                    <span className="font-mono text-xs text-zinc-500">
                      0{idx + 1}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>

          <div className="pt-8 border-t border-white/[0.08] space-y-4">
            <Link
              href="/contact"
              className="block w-full text-center py-3.5 bg-white text-noir-950 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-parchment-100 transition-colors"
            >
              Work With Me ↗
            </Link>
            <div className="flex items-center justify-between text-zinc-400 font-mono text-[10px]">
              <span>ISRAEL DARE</span>
              <span>WAT / UTC+1</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
