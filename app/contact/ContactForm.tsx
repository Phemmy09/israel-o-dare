'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'

const PROJECT_TYPES = [
  'Executive AI Strategy & Advisory ($3,500+)',
  'Bespoke AI Application Development (From $8,500)',
  'Enterprise Workflow Automation & n8n (From $4,000)',
  'Spatial Intelligence & Digital Twins (From $12,000)',
  'Fractional Chief Systems Architect Retainer ($8,000/mo)',
  'Academic / Scholarship Review / Fellowship Inquiry',
  'Other / Confidential Inquiry',
]

const BUDGET_RANGES = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Institutional / Fellowship / N/A',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    budget: BUDGET_RANGES[1],
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.name.split(' ')[0] || form.name,
          lastName: form.name.split(' ').slice(1).join(' ') || '',
          email: form.email,
          service: `${form.projectType} [Budget: ${form.budget}]`,
          message: form.message,
        }),
      })

      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setStatus('success')
      setForm({
        name: '',
        email: '',
        projectType: PROJECT_TYPES[0],
        budget: BUDGET_RANGES[1],
        message: '',
      })
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please email directly.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 font-sans">
        <div className="w-12 h-12 border border-gold-500/40 bg-gold-500/10 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-gold-400" />
        </div>
        <h3 className="font-serif text-2xl text-white">Transmission Received</h3>
        <p className="text-sm text-parchment-300 max-w-sm font-light leading-relaxed">
          Thank you. Your message has been delivered directly to Israel Dare's executive inbox. You will receive a personal response within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-mono text-xs text-gold-400 hover:text-white uppercase tracking-wider underline pt-4"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <div className="space-y-1">
        <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
          Your Full Name <span className="text-gold-400">*</span>
        </label>
        <input
          type="text"
          value={form.name}
          onChange={set('name')}
          required
          placeholder="e.g. Elena Rostova"
          className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-400 transition-colors font-mono"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
          Work Email Address <span className="text-gold-400">*</span>
        </label>
        <input
          type="email"
          value={form.email}
          onChange={set('email')}
          required
          placeholder="name@company.com"
          className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-400 transition-colors font-mono"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            Project or Inquiry Type
          </label>
          <select
            value={form.projectType}
            onChange={set('projectType')}
            className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors font-mono"
          >
            {PROJECT_TYPES.map((type) => (
              <option key={type} value={type} className="bg-noir-950 text-white">
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            Estimated Budget
          </label>
          <select
            value={form.budget}
            onChange={set('budget')}
            className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white focus:outline-none focus:border-gold-400 transition-colors font-mono"
          >
            {BUDGET_RANGES.map((b) => (
              <option key={b} value={b} className="bg-noir-950 text-white">
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400">
          Brief / Project Thesis <span className="text-gold-400">*</span>
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={set('message')}
          required
          placeholder="Briefly describe the operational problem, target outcome, or research scope..."
          className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-gold-400 transition-colors font-sans leading-relaxed resize-none"
        />
      </div>

      {errorMsg && (
        <div className="p-3 border border-red-500/30 bg-red-950/20 font-mono text-xs text-red-400">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-luxury-gold w-full text-xs inline-flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" /> Transmitting...
          </>
        ) : (
          <>
            Transmit Inquiry <ArrowRight className="w-3.5 h-3.5" />
          </>
        )}
      </button>

      <p className="font-mono text-[10px] text-zinc-500 text-center">
        Encrypted direct transmission · Zero marketing spam guaranteed
      </p>
    </form>
  )
}
