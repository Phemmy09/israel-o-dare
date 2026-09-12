'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, Globe, ChevronDown, Check } from 'lucide-react'
import Logo from './Logo'
import { useCurrency } from '@/context/CurrencyContext'

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
  const [currencyOpen, setCurrencyOpen] = useState(false)
  const currencyRef = useRef<HTMLDivElement>(null)

  const { currency, setCurrency, isAutoDetected, info, allCurrencies, currencies } = useCurrency()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setCurrencyOpen(false)
  }, [pathname])

  // Close currency dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (currencyRef.current && !currencyRef.current.contains(event.target as Node)) {
        setCurrencyOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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

          {/* Desktop Right: Currency Selector + Work With Me CTA */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Global Currency Dropdown */}
            <div className="relative" ref={currencyRef}>
              <button
                onClick={() => setCurrencyOpen(!currencyOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 rounded-md font-mono text-xs text-zinc-300 hover:text-white transition-all"
                title={`Selected Currency: ${info.name}`}
                aria-label="Select currency"
              >
                <span>{info.flag}</span>
                <span className="font-semibold">{currency}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${
                    currencyOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {currencyOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-noir-900 border border-white/15 rounded-xl shadow-2xl backdrop-blur-xl p-2 z-50 animate-fade-in space-y-1">
                  <div className="px-2.5 py-1.5 border-b border-white/[0.08] flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5 text-gold-400">
                      <Globe className="w-3 h-3" />
                      <span>Currency & Region</span>
                    </span>
                    {isAutoDetected && (
                      <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded text-[9px]">
                        Auto-detected
                      </span>
                    )}
                  </div>
                  <div className="max-h-72 overflow-y-auto no-scrollbar py-1 space-y-0.5">
                    {allCurrencies.map((c) => {
                      const item = currencies[c]
                      const isSelected = currency === c
                      return (
                        <button
                          key={c}
                          onClick={() => {
                            setCurrency(c)
                            setCurrencyOpen(false)
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors ${
                            isSelected
                              ? 'bg-ruby-600/30 text-white border border-ruby-500/40 font-semibold'
                              : 'text-zinc-300 hover:bg-white/[0.06] hover:text-white'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{item.flag}</span>
                            <div>
                              <div className="font-mono text-[11px] font-bold text-white">
                                {c} <span className="text-zinc-400 font-normal font-sans">({item.symbol})</span>
                              </div>
                              <div className="text-[10px] text-zinc-400 line-clamp-1">
                                {item.country}
                              </div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-3.5 h-3.5 text-ruby-400 shrink-0" />}
                        </button>
                      )
                    })}
                  </div>
                  <div className="px-2.5 py-1.5 border-t border-white/[0.06] text-[9px] font-mono text-zinc-500">
                    Paystack converts cards automatically in 150+ countries.
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="px-5 py-2.5 bg-white text-noir-950 hover:bg-parchment-100 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-200 active:scale-[0.98] border border-white/10"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile Right: Currency Badge + Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex items-center gap-1 px-2 py-1 bg-white/[0.05] border border-white/10 rounded font-mono text-[11px] text-zinc-300"
              aria-label="Currency"
            >
              <span>{info.flag}</span>
              <span>{currency}</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-zinc-300 hover:text-white border border-white/10 hover:border-white/30 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-noir-950/98 border-t border-white/[0.08] backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 animate-fade-in overflow-y-auto z-50">
          <div className="space-y-6 pt-2">
            {/* Mobile Currency Bar */}
            <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5 text-gold-400">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Currency & Region</span>
                </span>
                {isAutoDetected ? (
                  <span className="text-emerald-400 text-[9px] bg-emerald-950/60 px-2 py-0.5 rounded">
                    Detected
                  </span>
                ) : (
                  <span className="text-zinc-500 text-[9px]">Custom</span>
                )}
              </div>
              <div className="grid grid-cols-5 gap-1.5">
                {allCurrencies.map((c) => {
                  const item = currencies[c]
                  const isSelected = currency === c
                  return (
                    <button
                      key={c}
                      onClick={() => setCurrency(c)}
                      className={`py-1.5 px-1 rounded flex flex-col items-center justify-center font-mono text-[10px] transition-all ${
                        isSelected
                          ? 'bg-ruby-600 text-white font-bold border border-ruby-400/50 shadow-md shadow-ruby-950/80'
                          : 'bg-white/[0.04] text-zinc-400 hover:text-white border border-white/5'
                      }`}
                      title={item.name}
                    >
                      <span className="text-xs">{item.flag}</span>
                      <span>{c}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold-400/80">
              Directory Index
            </p>
            <div className="space-y-2">
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
                    className="flex items-baseline justify-between py-2 border-b border-white/[0.06] group"
                  >
                    <span
                      className={`font-serif text-xl sm:text-2xl tracking-tight transition-colors ${
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

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <Link
              href="/contact"
              className="block w-full text-center py-3 bg-white text-noir-950 font-sans text-xs uppercase tracking-[0.2em] font-bold hover:bg-parchment-100 transition-colors"
            >
              Work With Me ↗
            </Link>
            <div className="flex items-center justify-between text-zinc-400 font-mono text-[10px]">
              <span>ISRAEL DARE</span>
              <span>PAYSTACK MULTI-CURRENCY ACTIVE</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
