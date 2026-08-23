'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle2 } from 'lucide-react'

const SERVICES = [
  'Autonomous Systems & Engineering',
  'Drone Photogrammetry & Bio-Spatial Digital Twins',
  'High-Concurrency Full-Stack SaaS Development',
  'Academic Research & Fellowship Collaboration',
  'Voice Receptionists & Vector RAG Portals',
  'Strategic AI Audits & Advisory',
  'Other / Confidential Inquiry',
]

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
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
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Submission failed')
      setStatus('success')
      setForm({ firstName: '', lastName: '', email: '', phone: '', service: '', message: '' })
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 font-sans">
        <div className="w-12 h-12 bg-black border border-white/20 flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-red-500" />
        </div>
        <h3 className="font-serif text-2xl text-white">Inquiry Registered</h3>
        <p className="font-sans text-xs text-zinc-400 max-w-sm font-light">
          Thank you. Your dossier has been delivered directly to Israel Dare's executive inbox.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="font-mono text-xs text-red-400 hover:text-white uppercase tracking-wider underline pt-2"
        >
          Submit Another Inquiry
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.firstName}
            onChange={set('firstName')}
            required
            placeholder="Israel"
            className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
          />
        </div>
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={form.lastName}
            onChange={set('lastName')}
            required
            placeholder="Dare"
            className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set('email')}
            required
            placeholder="name@organization.com"
            className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
          />
        </div>
        <div>
          <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
            Phone / WhatsApp (Optional)
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="+1 424 546 0129"
            className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
          Domain of Inquiry <span className="text-red-500">*</span>
        </label>
        <select
          value={form.service}
          onChange={set('service')}
          required
          className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white focus:outline-none focus:border-white transition-colors appearance-none font-sans"
        >
          <option value="" disabled className="bg-noir-950 text-zinc-500">
            Select a specialization...
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s} className="bg-noir-950 text-white">
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block font-mono text-[10px] uppercase tracking-wider text-zinc-400 mb-2">
          Executive Brief / Message <span className="text-red-500">*</span>
        </label>
        <textarea
          value={form.message}
          onChange={set('message')}
          required
          rows={5}
          placeholder="Detail your engineering requirements, technical bottlenecks, or research proposal..."
          className="w-full px-4 py-3 bg-noir-950 border border-white/10 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white transition-colors resize-none font-sans leading-relaxed"
        />
      </div>

      {status === 'error' && <p className="font-mono text-xs text-red-400">{errorMsg}</p>}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-4 bg-white text-black hover:bg-zinc-200 disabled:opacity-50 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-black" />
            Transmitting Brief...
          </>
        ) : (
          <>
            <Send className="w-3.5 h-3.5" />
            Transmit Executive Brief ↗
          </>
        )}
      </button>

      <p className="font-mono text-[9px] text-zinc-400 text-center uppercase tracking-widest">
        Direct Confidential Transmission · 24h Executive Response Guarantee
      </p>
    </form>
  )
}
