'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle2, Phone, Calendar, ShieldCheck } from 'lucide-react'

function PaymentSuccessContent() {
  const searchParams = useSearchParams()
  const reference = searchParams.get('reference') || searchParams.get('trxref') || 'Verified'

  return (
    <div className="max-w-xl w-full glass-seduction border border-ruby-500/30 p-8 sm:p-12 relative z-10 shadow-2xl shadow-black/90 text-center space-y-8 animate-fade-in">
      <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/50 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/60">
        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
      </div>

      <div className="space-y-3">
        <span className="font-mono text-xs uppercase tracking-[0.24em] text-gold-400 font-semibold">
          Transaction Authorized · Direct Priority Route
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal">
          Payment Confirmed
        </h1>
        <p className="text-sm text-zinc-300 font-light leading-relaxed">
          Your transaction has been securely processed by Paystack. Israel Dare’s executive calendar is now unlocked for you.
        </p>
      </div>

      {/* Transaction Telemetry Pill */}
      <div className="p-4 bg-white/[0.03] border border-white/10 rounded-lg text-left space-y-2 font-mono text-xs">
        <div className="flex justify-between items-center text-zinc-400">
          <span>Reference ID:</span>
          <span className="text-white font-semibold">{reference}</span>
        </div>
        <div className="flex justify-between items-center text-zinc-400">
          <span>Status:</span>
          <span className="text-emerald-400 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5" /> 100% Authorized
          </span>
        </div>
        <div className="flex justify-between items-center text-zinc-400">
          <span>Guarantee:</span>
          <span className="text-gold-400">Credited Toward Engagements</span>
        </div>
      </div>

      {/* Action Next Steps */}
      <div className="space-y-4 pt-2">
        <a
          href="https://Calendly.com/izzy-marketing-hub/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-seduction w-full text-center text-sm py-4 flex items-center justify-center gap-2"
        >
          <Calendar className="w-4 h-4" />
          Pick Your Date & Time on Calendly ↗
        </a>

        <a
          href={`https://wa.me/14245460129?text=Hi%20Israel,%20I%20just%20completed%20my%20payment%20on%20Paystack%20(Ref:%20${reference}).%20Looking%20forward%20to%20our%20session.`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center py-3.5 font-mono text-xs text-emerald-400 hover:text-emerald-300 border border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-950/30 uppercase tracking-wider transition-colors"
        >
          <span className="inline-flex items-center gap-2">
            <Phone className="w-3.5 h-3.5" /> Message Israel Directly on WhatsApp ↗
          </span>
        </a>

        <Link
          href="/"
          className="block text-center font-mono text-[11px] text-zinc-400 hover:text-white uppercase tracking-wider pt-2"
        >
          ← Return to Headquarters
        </Link>
      </div>
    </div>
  )
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-noir-950 text-parchment-100 flex items-center justify-center px-5 py-24 relative overflow-hidden">
      {/* Seductive Ambient Flares */}
      <div className="glow-ambient-ruby top-1/4 -left-48 w-[600px] h-[600px]" />
      <div className="glow-ambient-gold bottom-1/4 -right-48 w-[600px] h-[600px]" />

      <Suspense
        fallback={
          <div className="text-zinc-400 font-mono text-xs animate-pulse">
            Verifying payment authorization...
          </div>
        }
      >
        <PaymentSuccessContent />
      </Suspense>
    </div>
  )
}
