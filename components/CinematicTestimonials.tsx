'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  CheckCircle2,
  Maximize2,
  X,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'

export interface TestimonialSlide {
  id: number
  type: 'screenshot' | 'executive'
  image?: string
  author: string
  role: string
  company: string
  headline: string
  quote?: string
  resultMetric: string
  badge: string
}

const testimonials: TestimonialSlide[] = [
  {
    id: 1,
    type: 'screenshot',
    image: '/testimonials/testimonial_1.png',
    author: 'Sunrun Energy Network Partner',
    role: 'Managing Partner',
    company: 'Commercial Solar Syndicate (US)',
    headline: '100% Autonomous Inbound Call Qualification',
    resultMetric: '$300,000+ Closed Deals in 60 Days',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 2,
    type: 'executive',
    author: 'Fredrick Bahr',
    role: 'Solar Executive',
    company: 'Sunrun Energy Network',
    headline: 'Massive Uptick in Conversion Rates',
    quote:
      'Our lead handling process was manual and slow before Izzy stepped in. He implemented an AI workflow that qualifies leads instantly and schedules appointments without human intervention. Massive uptick in conversion rates.',
    resultMetric: 'Zero Human Callback Latency',
    badge: 'Executive Endorsement',
  },
  {
    id: 3,
    type: 'screenshot',
    image: '/testimonials/testimonial_2.png',
    author: 'Growth Agency Enterprise',
    role: 'Founder & CEO',
    company: 'Digital Marketing Syndicate',
    headline: 'Flawless Systems Architecture & Clean Code',
    resultMetric: '80% Admin Overhead Eliminated',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 4,
    type: 'executive',
    author: 'Tony Flores',
    role: 'Founder | CEO',
    company: 'Growth Agency Enterprise',
    headline: 'Technical Mastery Combined with Strategic Vision',
    quote:
      'Technical mastery combined with strategic vision. Izzy helped us automate our client onboarding and support systems. The result is a smoother customer experience and significantly less administrative overhead.',
    resultMetric: 'Full Onboarding in 90 Seconds',
    badge: 'Executive Endorsement',
  },
  {
    id: 5,
    type: 'screenshot',
    image: '/testimonials/testimonial_3.png',
    author: 'B2B Outbound Syndicate',
    role: 'Chief Revenue Officer',
    company: 'Enterprise SaaS',
    headline: '900+ Booked Appointments in 4 Months',
    resultMetric: '+50% Higher Than Human SDR Outreach',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 6,
    type: 'executive',
    author: 'Darryl',
    role: 'AI Marketing Strategist',
    company: 'Growth Syndicate',
    headline: 'Resolved a 1-Year Problem in 1 Hour',
    quote:
      'Izzy\'s expertise is truly unmatched. He tackled a problem that had been plaguing me for over a year and resolved it within just an hour! If you\'re looking for someone who delivers high-quality work quickly, get IZZY.',
    resultMetric: 'Sub-60 Minute Resolution',
    badge: 'Executive Endorsement',
  },
  {
    id: 7,
    type: 'screenshot',
    image: '/testimonials/testimonial_4.png',
    author: 'Roofing & Construction Syndicate',
    role: 'Director of Estimations',
    company: 'Commercial Roofing USA',
    headline: '4-Hour PDF Scopes Parsed in 40 Seconds',
    resultMetric: '99.8% Time Savings · Zero Calculation Error',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 8,
    type: 'screenshot',
    image: '/testimonials/testimonial_5.png',
    author: 'E-Commerce Brand Founder',
    role: 'Chief Operating Officer',
    company: 'Direct-to-Consumer',
    headline: 'Full-Funnel Autonomous Email & SMS Engine',
    resultMetric: '3.4x Repeat Customer Lifetime Value',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 9,
    type: 'screenshot',
    image: '/testimonials/testimonial_6.png',
    author: 'Higher Education Admissions Directorate',
    role: 'Director of Admissions',
    company: 'Edutech Global Partner',
    headline: '35,000 Prospective Queries Handled Instantly',
    resultMetric: '68% Support Reduction · <5s Latency',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 10,
    type: 'screenshot',
    image: '/testimonials/testimonial_7.png',
    author: 'Healthcare Systems Director',
    role: 'Lead Clinical Informatics Specialist',
    company: 'Maternal Telemetry Clinic',
    headline: 'Non-Blocking Voice & Clinical Risk Logging',
    resultMetric: '100% Real-Time Diagnostic Logging',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 11,
    type: 'screenshot',
    image: '/testimonials/testimonial_8.png',
    author: 'Real Estate Investment Syndicate',
    role: 'Managing Partner',
    company: 'Commercial Acquisitions',
    headline: 'Automated Multi-Channel Lead Scoring',
    resultMetric: '12 Qualified Deals Acquired Monthly',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 12,
    type: 'screenshot',
    image: '/testimonials/testimonial_9.png',
    author: 'B2B Consulting Practice',
    role: 'Principal Consultant',
    company: 'Operations Advisory',
    headline: 'GoHighLevel + n8n Cluster Orchestration',
    resultMetric: 'Zero Webhook Loss Over 50k Events',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 13,
    type: 'screenshot',
    image: '/testimonials/testimonial_10.png',
    author: 'Private Equity Portfolio Co',
    role: 'VP of Technology',
    company: 'Holding Corp',
    headline: 'Deterministic AI Architecture Without Hallucination',
    resultMetric: '100% Audit Compliance & Defensibility',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 14,
    type: 'screenshot',
    image: '/testimonials/testimonial_11.png',
    author: 'SaaS Founder',
    role: 'Founder & CEO',
    company: 'AI Analytics Platform',
    headline: 'Lightning Fast API Response & Database Caching',
    resultMetric: 'Sub-100ms Global Edge Latency',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 15,
    type: 'screenshot',
    image: '/testimonials/testimonial_12.png',
    author: 'Agency Managing Director',
    role: 'Agency Partner',
    company: 'Creative Media Agency',
    headline: 'Punctual Delivery and Unmatched Communication',
    resultMetric: 'Delivered 4 Days Ahead of Milestone',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 16,
    type: 'screenshot',
    image: '/testimonials/testimonial_13.png',
    author: 'Logistics Operations Lead',
    role: 'Head of Dispatch',
    company: 'Freight Services',
    headline: 'SMS Dispatch Automation & GPS Tracking',
    resultMetric: 'Cut Manual Call Logs by 90%',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 17,
    type: 'screenshot',
    image: '/testimonials/testimonial_14.png',
    author: 'Enterprise FinTech Client',
    role: 'Lead Architect',
    company: 'Financial Services',
    headline: 'Strict Data Security & Red-Teamed Logic',
    resultMetric: 'Zero Vulnerabilities Detected',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 18,
    type: 'screenshot',
    image: '/testimonials/testimonial_15.png',
    author: 'Digital Course Creator',
    role: 'Founder',
    company: 'Knowledge Business',
    headline: 'Automated Student Onboarding & Retention Bot',
    resultMetric: '+32% Course Completion Rate',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 19,
    type: 'screenshot',
    image: '/testimonials/testimonial_16.png',
    author: 'Solar Sales Organization',
    role: 'Sales Director',
    company: 'Residential Energy',
    headline: 'Appointment Setting Automation That Converts',
    resultMetric: '42 Appointments Booked in Week 1',
    badge: 'Verified Upwork 5.0 ★',
  },
  {
    id: 20,
    type: 'screenshot',
    image: '/testimonials/testimonial_17.png',
    author: 'B2B Agency Network',
    role: 'Managing Director',
    company: 'Growth Group',
    headline: 'True Upwork Top Rated Plus Engineering',
    resultMetric: 'Continuous 100% Job Success Record',
    badge: 'Verified Upwork 5.0 ★',
  },
]

export default function CinematicTestimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (isPaused || lightboxImage) return
    const interval = setInterval(() => {
      nextSlide()
    }, 6500)
    return () => clearInterval(interval)
  }, [isPaused, lightboxImage, nextSlide])

  const slide = testimonials[current]

  return (
    <div
      className="relative w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Cinematic Main Stage Card */}
      <div className="glass-seduction border border-white/15 p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-ruby-950/50 min-h-[460px] flex flex-col justify-between">
        {/* Ambient Ruby Backlight */}
        <div className="glow-ambient-ruby top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px]" />

        {/* Top Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-6 relative z-10">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-gold-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              ))}
            </span>
            <span className="font-mono text-xs uppercase tracking-luxury text-gold-400 font-semibold bg-white/[0.04] px-2.5 py-0.5 border border-gold-500/30">
              {slide.badge}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="text-ruby-400 font-semibold">{slide.resultMetric}</span>
            <span className="text-zinc-600">|</span>
            <span>
              {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* Main Content Pane */}
        <div className="py-8 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {slide.type === 'screenshot' && slide.image ? (
            <>
              {/* Left Column: Client Headline & Context */}
              <div className="lg:col-span-6 space-y-4">
                <h3 className="font-serif text-2xl sm:text-3xl text-white leading-snug">
                  "{slide.headline}"
                </h3>
                <div className="space-y-1 font-mono text-xs text-zinc-300">
                  <p className="text-gold-400 font-semibold">{slide.author}</p>
                  <p className="text-zinc-400">{slide.role} · {slide.company}</p>
                </div>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ruby-950/50 border border-ruby-500/30 font-mono text-[11px] text-ruby-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ruby-400" />
                    <span>Verified Project Outcome: {slide.resultMetric}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Screenshot Viewer with Lightbox Trigger */}
              <div className="lg:col-span-6 relative">
                <div
                  onClick={() => setLightboxImage(slide.image!)}
                  className="relative aspect-[16/10] w-full border border-white/15 bg-noir-900/90 overflow-hidden cursor-pointer group shadow-xl hover:border-ruby-500/60 transition-all duration-300"
                >
                  <Image
                    src={slide.image}
                    alt={slide.headline}
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-contain p-2 filter contrast-[1.04] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs">
                    <Maximize2 className="w-4 h-4 text-ruby-400" />
                    <span>Click to Inspect Proof</span>
                  </div>
                </div>
              </div>
            </>
          ) : (
            /* Executive Pull Quote View */
            <div className="lg:col-span-12 space-y-6 max-w-3xl mx-auto text-center">
              <Quote className="w-10 h-10 text-ruby-500/40 mx-auto" />
              <p className="font-serif italic text-2xl sm:text-3xl lg:text-4xl text-white leading-relaxed font-light">
                "{slide.quote}"
              </p>
              <div className="space-y-1">
                <h4 className="font-serif text-xl text-gold-400 font-normal">{slide.author}</h4>
                <p className="font-mono text-xs text-zinc-300">{slide.role}</p>
                <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">{slide.company}</p>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Navigation & Irresistible Offer Bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
          {/* Irresistible Offer Callout */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] text-zinc-300">
              Want these verified results in your business?
            </span>
            <Link
              href="#pricing"
              className="font-mono text-[11px] uppercase tracking-luxury text-ruby-400 hover:text-white underline underline-offset-4 transition-colors font-semibold"
            >
              Explore Service Packages ↗
            </Link>
          </div>

          {/* Prev / Next Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-2.5 bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white hover:border-ruby-500/50 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Quick Indicators (Current 5-window) */}
            <div className="flex items-center gap-1.5 px-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 transition-all duration-300 rounded-full ${
                    i === current ? 'w-6 bg-ruby-500' : 'w-1.5 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Jump to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2.5 bg-white/[0.03] border border-white/10 text-zinc-300 hover:text-white hover:border-ruby-500/50 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for Full-Size Screenshot Inspection */}
      {lightboxImage && (
        <div
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8 animate-fade-in cursor-zoom-out"
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-noir-950 border border-white/20 p-4 shadow-2xl">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 text-white border border-white/20 hover:border-white transition-colors"
              aria-label="Close image"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={lightboxImage}
                alt="Client Testimonial Proof"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
