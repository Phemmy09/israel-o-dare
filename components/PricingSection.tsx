'use client'

import Link from 'next/link'
import { CheckCircle2, Globe, CreditCard, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { PAYMENT_LINKS } from '@/lib/payment-links'
import { useCurrency } from '@/context/CurrencyContext'
import { CurrencyCode } from '@/lib/currencies'

interface PackageItem {
  name: string
  usdPrice: number
  frequency: string
  badge: string
  paystackUrl: string
  description: string
  features: string[]
  popular: boolean
  cta: string
}

const servicePackages: PackageItem[] = [
  {
    name: 'BEGINNER',
    usdPrice: 800,
    frequency: 'one-time investment',
    badge: 'Foundation',
    paystackUrl: PAYMENT_LINKS.beginner800,
    description:
      'For growing operators needing quick operational relief from repetitive inbound messaging and lead follow-up.',
    features: [
      'Automated Email Sequences & Smart Follow-Up',
      'Instant SMS Lead Response Workflows',
      'Social Media 24/7 Auto Responder',
      'Basic Lead Capture & Spreadsheet/CRM Sync',
      '7 Days Post-Launch Validation',
    ],
    popular: false,
    cta: 'Secure Beginner Plan',
  },
  {
    name: 'PROFESSIONAL',
    usdPrice: 2500,
    frequency: 'one-time investment',
    badge: 'High Conversion',
    paystackUrl: PAYMENT_LINKS.professional2500,
    description:
      'Complete high-converting sales engine and custom web infrastructure engineered to turn cold traffic into booked deals.',
    features: [
      'Complete High-Converting Sales Funnel',
      'Bespoke Website Design (Up to 10 Pages)',
      'End-to-End Marketing Automation Pipelines',
      '24/7 Conversational AI Chatbot Support',
      'CRM Integration (GoHighLevel, HubSpot, or Zoho)',
      '14 Days Active Engineering Support',
    ],
    popular: false,
    cta: 'Secure Professional Plan',
  },
  {
    name: 'PREMIUM',
    usdPrice: 5000,
    frequency: 'one-time investment',
    badge: 'Most Popular',
    paystackUrl: PAYMENT_LINKS.premium5000,
    description:
      'The complete enterprise revenue stack: full brand prestige, custom AI twin/agent, and automated multi-channel growth.',
    features: [
      'Full Brand Identity Design & Asset Suite',
      'Comprehensive High-Performance Web Platform',
      'Social Media Management & Content Automation',
      'Advanced Multi-Channel Marketing Automation',
      'Custom Autonomous AI Agent / Digital Twin',
      'CRM Architecture, Lead Scoring & Telemetry',
      '30 Days Priority Optimization & Monitoring',
    ],
    popular: true,
    cta: 'Secure Premium Plan',
  },
  {
    name: 'EXCLUSIVE',
    usdPrice: 30000,
    frequency: 'annual executive partnership',
    badge: 'Enterprise Sovereign',
    paystackUrl: PAYMENT_LINKS.exclusive30000,
    description:
      'Full-year fractional CTO & AI systems architecture. We handle every facet of your brand, software, and autonomous pipelines.',
    features: [
      'Full Brand Identity & Continuous Creative Evolution',
      'Comprehensive Website Design & Infrastructure / year',
      '365-Day Social Media Management & Distribution',
      'Enterprise End-to-End Marketing Automation / year',
      'Custom Dedicated AI Agent / Twin Infrastructure / year',
      'Continuous Red-Teaming, Security & Performance Tuning',
      'Direct Private Hotline to Israel Dare',
    ],
    popular: false,
    cta: 'Request Executive Partnership',
  },
]

export default function PricingSection({
  title = 'Engineered Service Packages',
  subtitle = 'Transparent tiers. Complete IP ownership. Sovereign execution.',
}: {
  title?: string
  subtitle?: string
}) {
  const { currency, setCurrency, isAutoDetected, allCurrencies, currencies, format } = useCurrency()

  return (
    <div className="space-y-12">
      {/* Section Header with Currency Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 font-semibold">
            Investment & Architecture
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white">
            {title}
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl font-light leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Global Currency Switcher Bar */}
        <div className="flex flex-col gap-2 p-3 bg-white/[0.03] border border-white/10 rounded-xl">
          <div className="flex items-center justify-between gap-2 font-mono text-[11px] text-zinc-400">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-gold-400" />
              <span>Select or Detect Currency:</span>
            </div>
            {isAutoDetected && (
              <span className="text-emerald-400 text-[9px] bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5" />
                Detected Location
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {allCurrencies.map((c: CurrencyCode) => {
              const info = currencies[c]
              const isSelected = currency === c
              return (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`px-3 py-1.5 font-mono text-xs rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap ${
                    isSelected
                      ? 'bg-ruby-600 text-white font-bold shadow-md shadow-ruby-950/60 border border-ruby-400/50 scale-105'
                      : 'text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/5'
                  }`}
                  title={`${info.name} — ${info.country}`}
                >
                  <span>{info.flag}</span>
                  <span>{c}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Paystack International Multi-Currency Notice Banner */}
      <div className="p-4 bg-ruby-950/20 border border-ruby-500/25 rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-zinc-300">
        <div className="flex items-start sm:items-center gap-3">
          <CreditCard className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 sm:mt-0" />
          <span className="leading-relaxed">
            <strong>Universal Paystack Processing:</strong> Pay securely in your local currency. Paystack accepts international Visa, Mastercard, Verve, American Express, and Apple Pay from 150+ countries. Your card is billed seamlessly in <strong>{currency}</strong> by your issuing bank.
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[11px] text-gold-400 shrink-0 self-end md:self-auto">
          <ShieldCheck className="w-4 h-4" />
          <span>PCI-DSS Level 1 Encrypted</span>
        </div>
      </div>

      {/* 4 Pricing Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
        {servicePackages.map((pkg) => {
          const displayPrice = format(pkg.usdPrice)

          return (
            <div
              key={pkg.name}
              className={`glass-seduction p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 rounded-2xl ${
                pkg.popular
                  ? 'border-2 border-ruby-500 shadow-2xl shadow-ruby-950/60'
                  : 'border border-white/[0.08] hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-ruby-600 text-white font-mono text-[9px] uppercase tracking-widest font-bold rounded-full">
                  {pkg.badge}
                </div>
              )}

              <div className="space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs tracking-widest text-zinc-400 uppercase font-semibold">
                    {pkg.name}
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal text-gradient-ruby break-all">
                      {displayPrice}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-zinc-500 block uppercase">
                    {pkg.frequency}
                  </span>
                </div>

                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  {pkg.description}
                </p>

                <div className="space-y-3 pt-4 border-t border-white/[0.06]">
                  <span className="font-mono text-[10px] uppercase text-gold-400 tracking-wider block font-medium">
                    What's Included
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-zinc-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-ruby-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 space-y-2.5">
                <a
                  href={pkg.paystackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3.5 text-xs uppercase tracking-luxury font-bold transition-all duration-300 rounded-lg ${
                    pkg.popular
                      ? 'btn-seduction w-full'
                      : 'bg-white/5 border border-white/15 text-white hover:bg-white hover:text-black w-full'
                  }`}
                >
                  Pay with Paystack ({displayPrice}) ↗
                </a>
                <Link
                  href={`/contact?plan=${encodeURIComponent(pkg.name)}`}
                  className="block text-center font-mono text-[10px] text-zinc-400 hover:text-white uppercase tracking-wider py-1 transition-colors"
                >
                  Or Inquire / Consult First
                </Link>
              </div>
            </div>
          )
        })}
      </div>

      {/* Customized Solution Banner */}
      <div className="max-w-3xl mx-auto p-6 glass-seduction border border-white/10 text-center space-y-3 rounded-xl">
        <p className="text-sm text-zinc-300 font-light">
          Seeking a package customized to your business workflow with bespoke integrations?
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-luxury text-ruby-400 hover:text-white font-semibold transition-colors"
        >
          Initiate Bespoke Consultation <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  )
}
