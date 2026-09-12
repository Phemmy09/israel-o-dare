'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  Calendar,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Sparkles,
} from 'lucide-react'
import Logo from './Logo'
import { PAYMENT_LINKS } from '@/lib/payment-links'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp?: string
}

interface Lead {
  name: string
  email: string
  phone: string
  company: string
  interest: string
}

function cleanMessageText(text: string): string {
  if (!text) return ''
  return text.replace(/\*+/g, '').trim()
}

function isInvalidName(name: string): boolean {
  const trimmed = name.trim().toLowerCase()
  const invalidList = [
    'hello', 'hi', 'hey', 'good morning', 'good day', 'good afternoon', 'good evening',
    'greetings', 'yo', 'sup', 'test', 'help', 'what', 'who', 'how', 'why', 'price',
    'pricing', 'hire', 'call', 'consult', 'info', 'service', 'services', 'ok', 'okay',
    'thanks', 'thank you', 'none', 'n/a', 'anonymous'
  ]
  return invalidList.includes(trimmed) || trimmed.length < 2 || /^[0-9]+$/.test(trimmed)
}

const BOT_INTRO = `Welcome to the digital headquarters of Israel Dare.

I am Israel's Executive Support Agent. I specialize in diagnosing operational bottlenecks, calculating ROI on autonomous systems, and coordinating direct engagements.

Whether you need to eliminate lead leakage, automate complex contract workflows, or deploy bespoke AI agents: what challenge is currently costing your business the most time or revenue?`

const QUICK_PROMPTS = [
  'Book $50 Gated Strategy Call',
  'What are the 4 service packages?',
  'How did you generate $300k in 60 days?',
  'Chat with Israel on WhatsApp',
]

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: BOT_INTRO, timestamp: 'Just now' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [lead, setLead] = useState<Lead>({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
  })
  const [showLeadModal, setShowLeadModal] = useState(false)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [hasSentSummary, setHasSentSummary] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesRef = useRef<Message[]>(messages)
  const leadRef = useRef<Lead>(lead)

  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  useEffect(() => {
    leadRef.current = lead
  }, [lead])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150)
  }, [open])

  // Automatically send lead summary when user leaves or closes chat with >= 3 messages
  const sendChatSummary = useCallback(async () => {
    if (messagesRef.current.length <= 1 || hasSentSummary) return
    try {
      setHasSentSummary(true)
      await fetch('/api/chat-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead: leadRef.current,
          messages: messagesRef.current,
          summary: `Prospect interacted with concierge. Focus: ${leadRef.current.interest || 'General'}. Messages: ${messagesRef.current.length}`,
          leadScore: leadRef.current.email ? 'Hot Prospect (Captured)' : 'Active Chat Visitor',
        }),
      })
    } catch (e) {
      console.warn('Silent chat summary dispatch:', e)
    }
  }, [hasSentSummary])

  const handleClose = () => {
    setOpen(false)
    sendChatSummary()
  }

  const addMessage = (role: Message['role'], content: string) => {
    setMessages((prev) => [
      ...prev,
      { role, content: cleanMessageText(content), timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
    ])
  }

  // Auto-detect visitor identity from message patterns
  const detectLeadInText = (text: string) => {
    const nameMatch = text.match(/(?:my name is|i am|i'm|this is)\s+([A-Za-z\s]{2,30})/i)
    if (nameMatch && nameMatch[1] && !isInvalidName(nameMatch[1])) {
      setLead((prev) => ({ ...prev, name: nameMatch[1].trim() }))
    }

    const emailMatch = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/i)
    if (emailMatch && emailMatch[1]) {
      const email = emailMatch[1].trim()
      setLead((prev) => ({ ...prev, email }))
      // When email is detected, notify Israel immediately
      fetch('/api/chat-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead: { ...leadRef.current, email },
          messages: messagesRef.current,
          summary: `Lead submitted email during live chat: ${email}`,
          leadScore: 'High Intent Lead',
        }),
      }).catch(() => {})
    }

    const phoneMatch = text.match(/(\+?[0-9\s-()]{10,20})/)
    if (phoneMatch && phoneMatch[1] && phoneMatch[1].replace(/\D/g, '').length >= 10) {
      setLead((prev) => ({ ...prev, phone: phoneMatch[1].trim() }))
    }
  }

  const handleSend = async (textToSend?: string) => {
    const userText = (textToSend || input).trim()
    if (!userText || loading) return
    if (!textToSend) setInput('')

    detectLeadInText(userText)
    addMessage('user', userText)
    setLoading(true)

    // Intercept WhatsApp direct request
    if (userText.toLowerCase().includes('whatsapp')) {
      addMessage(
        'assistant',
        "You can message Israel Dare directly on his personal business WhatsApp at +1 (424) 546-0129. Click below to launch WhatsApp with a pre-filled strategic briefing."
      )
      setLoading(false)
      return
    }

    // Intercept Gated Strategy Call request
    if (userText.toLowerCase().includes('50') || userText.toLowerCase().includes('gated')) {
      setShowBookingModal(true)
      addMessage(
        'assistant',
        "Israel Dare gates discovery sessions with a $50 deposit to eliminate tire-kickers and ensure dedicated focus. This $50 fee is 100% credited toward your package contract if you proceed. You can reserve your 30-minute slot below."
      )
      setLoading(false)
      return
    }

    try {
      const allMessages = [...messagesRef.current, { role: 'user' as const, content: cleanMessageText(userText) }]
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMessages, lead }),
      })

      if (!res.ok) throw new Error('Failed to fetch response')
      const data = await res.json()
      addMessage('assistant', cleanMessageText(data.reply || "Israel Dare's schedule is open for select Q3/Q4 contracts. You can book a $50 gated strategy call at https://Calendly.com/izzy-marketing-hub/30min or reach out on WhatsApp at +1 424 546 0129."))
    } catch {
      addMessage(
        'assistant',
        "Israel Dare's executive office is ready to assist. You can lock in a $50 gated strategy call at https://Calendly.com/izzy-marketing-hub/30min, message directly on WhatsApp (+1 424 546 0129), or email israel@israeldare.com."
      )
    } finally {
      setLoading(false)
    }
  }

  const submitManualLead = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!lead.email && !lead.phone) return
    setShowLeadModal(false)

    addMessage('user', `Contact Dossier: ${lead.name || 'Client'} (${lead.email || lead.phone}) — Interested in: ${lead.interest || 'Consultation'}`)
    addMessage(
      'assistant',
      `Thank you ${lead.name || ''}. Your details have been transmitted directly to Israel Dare's private inbox (israel@israeldare.com) and WhatsApp dispatch. To lock in an immediate calendar slot, you can reserve your $50 gated briefing below.`
    )

    try {
      await fetch('/api/chat-summary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          lead,
          messages: messagesRef.current,
          summary: `Visitor submitted formal contact dossier: ${lead.name} (${lead.email}, ${lead.phone}) for ${lead.interest}`,
          leadScore: 'Verified Hot Lead',
        }),
      })
    } catch (err) {
      console.warn('Lead submit summary error:', err)
    }
  }

  return (
    <>
      {/* Floating Seductive Widget Trigger Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 bg-gradient-to-r from-ruby-700 via-ruby-600 to-rose-600 text-white rounded-full shadow-2xl shadow-ruby-950/80 hover:shadow-ruby-600/40 hover:scale-105 active:scale-95 transition-all duration-300 border border-rose-400/40 group flex items-center gap-3"
          aria-label="Open AI Executive Concierge"
        >
          <div className="relative">
            <MessageSquare className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-noir-950 animate-pulse" />
          </div>
          <span className="hidden sm:inline font-mono text-xs uppercase tracking-luxury font-bold pr-1">
            Executive AI Agent
          </span>
        </button>
      )}

      {/* Expanded Chatbot Window */}
      {open && (
        <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 left-3 sm:left-auto z-50 sm:w-[440px] max-w-lg h-[88vh] sm:h-[640px] glass-seduction rounded-2xl border border-ruby-500/30 flex flex-col justify-between shadow-2xl shadow-black/95 overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-gradient-to-b from-noir-950 via-noir-900 to-transparent p-3 sm:p-4 border-b border-white/[0.08] relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-ruby-500/40 bg-noir-900 p-1 flex items-center justify-center">
                <Logo variant="monogram" size="sm" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-noir-950" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-white font-normal flex items-center gap-2">
                  Israel Dare <span className="font-mono text-[9px] uppercase px-1.5 py-0.5 bg-ruby-950/80 border border-ruby-500/40 text-ruby-300">Concierge</span>
                </h3>
                <p className="font-mono text-[10px] text-zinc-400">
                  Direct Line · WAT / UTC+1 · Top Rated Plus
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowLeadModal(true)}
                className="font-mono text-[10px] uppercase px-2.5 py-1 bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 text-gold-400 transition-colors"
                title="Leave contact details"
              >
                Fast-Track
              </button>
              <button
                onClick={handleClose}
                className="p-1.5 text-zinc-400 hover:text-white border border-white/10 hover:border-white/30 rounded-md transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll View */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans text-xs sm:text-sm">
            {messages.map((m, idx) => {
              const isUser = m.role === 'user'
              return (
                <div
                  key={idx}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 sm:p-4 rounded-xl leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? 'bg-gradient-to-br from-ruby-700 to-rose-700 text-white rounded-br-none border border-rose-400/30 shadow-md'
                        : 'bg-white/[0.04] text-parchment-100 rounded-bl-none border border-white/[0.08] shadow-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                  {m.timestamp && (
                    <span className="font-mono text-[9px] text-zinc-500 px-1 pt-1">
                      {m.timestamp}
                    </span>
                  )}
                </div>
              )
            })}

            {loading && (
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs py-2">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-ruby-400" />
                <span>Executive agent reasoning...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Quick Prompts Carousel */}
          <div className="px-4 py-2 border-t border-white/[0.06] bg-noir-900/60 overflow-x-auto flex gap-2 no-scrollbar">
            {QUICK_PROMPTS.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className="whitespace-nowrap font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/10 rounded-full transition-colors"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Fast Direct Action Bar: WhatsApp & $50 Call */}
          <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-noir-950 border-t border-white/[0.08] flex items-center justify-between text-[9px] sm:text-[10px] font-mono gap-1">
            <a
              href="https://wa.me/14245460129?text=Hi%20Israel,%20I'm%20on%20your%20website%20and%20would%20like%20to%20discuss%20an%20AI%20system%20for%20my%20business."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors truncate"
            >
              <Phone className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">WhatsApp Direct (+1 424 546 0129)</span>
            </a>

            <button
              onClick={() => setShowBookingModal(true)}
              className="inline-flex items-center gap-1.5 text-ruby-400 hover:text-ruby-300 font-semibold uppercase tracking-wider transition-colors flex-shrink-0"
            >
              <Calendar className="w-3 h-3" />
              <span>$50 Call ↗</span>
            </button>
          </div>

          {/* Input Box */}
          <div className="p-2.5 sm:p-3 bg-noir-950 border-t border-white/[0.08] flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about systems, pricing, or your bottleneck..."
              className="flex-1 bg-white/[0.04] border border-white/10 rounded-lg px-3 py-2 sm:py-2.5 text-xs sm:text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-ruby-500 transition-colors"
            />
            <button
              onClick={() => handleSend()}
              disabled={loading || !input.trim()}
              className="p-2 sm:p-2.5 bg-ruby-600 hover:bg-ruby-500 disabled:opacity-40 disabled:hover:bg-ruby-600 text-white rounded-lg transition-colors flex-shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

          {/* $50 Gated Strategy Consultation Modal */}
          {showBookingModal && (
            <div className="absolute inset-0 bg-noir-950/98 backdrop-blur-md z-30 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto animate-fade-in">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2 text-ruby-400 font-mono text-xs uppercase tracking-luxury font-bold">
                  <Lock className="w-4 h-4" />
                  <span>Gated Strategic Consultation</span>
                </div>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="p-1 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-4 py-4 text-xs text-zinc-300 leading-relaxed">
                <div className="p-4 bg-ruby-950/40 border border-ruby-500/30 space-y-2">
                  <span className="font-serif text-lg text-white block">
                    Why is this consultation gated at $50?
                  </span>
                  <p>
                    Israel accepts only 2 high-ticket enterprise clients per month to maintain 100% execution quality. The $50 deposit eliminates casual inquiries and guarantees dedicated 30-minute architectural focus.
                  </p>
                </div>

                <div className="space-y-2 font-mono text-[11px] text-parchment-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>100% Credited toward any service package if you hire Israel.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Complete operational audit and deterministic system blueprint.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Direct WhatsApp & calendar priority access.</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10">
                <a
                  href={PAYMENT_LINKS.strategyCall50}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-seduction w-full text-center text-xs block py-3"
                >
                  Pay $50 Deposit via Paystack ↗
                </a>
                <a
                  href="https://Calendly.com/izzy-marketing-hub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center font-mono text-[11px] text-gold-400 hover:text-white border border-white/10 hover:border-gold-400/40 py-2 transition-colors"
                >
                  Schedule Date & Time on Calendly ↗
                </a>
                <button
                  onClick={() => setShowBookingModal(false)}
                  className="w-full text-center font-mono text-[10px] text-zinc-400 hover:text-white py-1"
                >
                  Back to Chat
                </button>
              </div>
            </div>
          )}

          {/* Fast-Track Contact Dossier Modal */}
          {showLeadModal && (
            <div className="absolute inset-0 bg-noir-950/98 backdrop-blur-md z-30 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto animate-fade-in">
              <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-4">
                <div className="flex items-center gap-2 text-gold-400 font-mono text-xs uppercase tracking-luxury font-bold">
                  <Sparkles className="w-4 h-4" />
                  <span>Fast-Track Client Dossier</span>
                </div>
                <button
                  onClick={() => setShowLeadModal(false)}
                  className="p-1 text-zinc-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={submitManualLead} className="space-y-3 py-4 text-xs">
                <p className="text-zinc-300 font-light">
                  Provide your direct contact details to dispatch a high-priority alert directly to Israel Dare's private phone and email.
                </p>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase text-zinc-400">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={lead.name}
                    onChange={(e) => setLead({ ...lead, name: e.target.value })}
                    placeholder="e.g. Tony Flores"
                    className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase text-zinc-400">Business Email</label>
                  <input
                    type="email"
                    required
                    value={lead.email}
                    onChange={(e) => setLead({ ...lead, email: e.target.value })}
                    placeholder="tony@agency.com"
                    className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase text-zinc-400">Phone or WhatsApp</label>
                  <input
                    type="tel"
                    value={lead.phone}
                    onChange={(e) => setLead({ ...lead, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/[0.04] border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-gold-400"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-mono text-[10px] uppercase text-zinc-400">Primary Interest / Package</label>
                  <select
                    value={lead.interest}
                    onChange={(e) => setLead({ ...lead, interest: e.target.value })}
                    className="w-full bg-noir-900 border border-white/10 px-3 py-2 text-white focus:outline-none focus:border-gold-400"
                  >
                    <option value="General Systems Architecture">General Systems Architecture</option>
                    <option value="Beginner Package ($800)">Beginner Package ($800)</option>
                    <option value="Professional Package ($2,500)">Professional Package ($2,500)</option>
                    <option value="Premium Package ($5,000)">Premium Package ($5,000)</option>
                    <option value="Exclusive Partnership ($30,000)">Exclusive Partnership ($30,000)</option>
                    <option value="Autonomous AI Voice Agents">Autonomous AI Voice Agents</option>
                    <option value="GoHighLevel (GHL) Automation">GoHighLevel (GHL) Automation</option>
                    <option value="Roof Auto Document Parsing">Roof Auto Document Parsing</option>
                  </select>
                </div>

                <div className="pt-3 flex gap-2">
                  <button
                    type="submit"
                    className="btn-luxury-gold w-full text-center text-xs py-2.5"
                  >
                    Transmit to Israel Dare ↗
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  )
}
