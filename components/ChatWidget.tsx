'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageSquare, X, Send, Loader2, ArrowRight } from 'lucide-react'
import Logo from './Logo'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

interface Lead {
  name: string
  email: string
  phone: string
  service: string
}

type LeadStep = 'name' | 'email' | 'phone' | 'service' | 'done'

const SERVICES = [
  'Autonomous Systems & Engineering',
  'Drone Photogrammetry & Spatial Models',
  'High-Concurrency SaaS Architecture',
  'Academic & Environmental Research',
  'Private Advisory & Consultation',
]

const BOT_INTRO = `Welcome to the private digital salon of **Israel Dare**.

I am Israel's executive concierge. I can brief you on his active engineering builds, research publications, advisory availability, or coordinate a direct line with him.

To begin, may I have your **full name and title**?`

const WEBHOOK_URL = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK as string
const WHATSAPP_DELAY_MS = 5 * 60 * 1000 // 5 minutes

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: BOT_INTRO },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [leadStep, setLeadStep] = useState<LeadStep>('name')
  const [lead, setLead] = useState<Lead>({ name: '', email: '', phone: '', service: '' })
  const [showServicePicker, setShowServicePicker] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesRef = useRef<Message[]>(messages)
  const whatsappTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const whatsappSentRef = useRef(false)

  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150)
  }, [open])

  useEffect(() => () => { if (whatsappTimerRef.current) clearTimeout(whatsappTimerRef.current) }, [])

  const addMessage = (role: Message['role'], content: string) => {
    setMessages((prev) => [...prev, { role, content }])
  }

  const sendWebhookReport = useCallback(async (currentLead: Lead, currentMessages: Message[]) => {
    if (whatsappSentRef.current) return
    whatsappSentRef.current = true

    try {
      const transcript = currentMessages
        .map((m) => `${m.role === 'user' ? 'Client' : 'Concierge'}: ${m.content}`)
        .join('\n\n')

      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          source: 'Israel Dare Executive Concierge',
          type: 'EXECUTIVE_LEAD',
          timestamp: new Date().toISOString(),
          lead: {
            name: currentLead.name || 'Anonymous',
            email: currentLead.email || 'N/A',
            phone: currentLead.phone || 'N/A',
            service: currentLead.service || 'General Inquiry',
          },
          transcript,
        }),
      })
    } catch {
      // Non-blocking
    }
  }, [])

  const scheduleWhatsAppReport = useCallback(
    (currentLead: Lead) => {
      if (whatsappTimerRef.current) clearTimeout(whatsappTimerRef.current)
      whatsappTimerRef.current = setTimeout(() => {
        sendWebhookReport(currentLead, messagesRef.current)
      }, WHATSAPP_DELAY_MS)
    },
    [sendWebhookReport]
  )

  const handleLeadCollection = (userText: string) => {
    const text = userText.trim()

    if (leadStep === 'name') {
      const updatedLead = { ...lead, name: text }
      setLead(updatedLead)
      setLeadStep('email')
      addMessage('user', text)
      setTimeout(() => {
        addMessage(
          'assistant',
          `Pleasure to connect, **${text}**. What is the best **business email address** to reach you at?`
        )
      }, 400)
      return
    }

    if (leadStep === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(text)) {
        addMessage('user', text)
        setTimeout(() => {
          addMessage(
            'assistant',
            'Please provide a valid email address so Israel\'s office can send documentation.'
          )
        }, 300)
        return
      }
      const updatedLead = { ...lead, email: text }
      setLead(updatedLead)
      setLeadStep('phone')
      addMessage('user', text)
      setTimeout(() => {
        addMessage(
          'assistant',
          'Thank you. If you would like priority SMS or WhatsApp confirmation, please share your **direct phone / WhatsApp number** (or type "skip").'
        )
      }, 400)
      return
    }

    if (leadStep === 'phone') {
      const isSkip = text.toLowerCase() === 'skip'
      const updatedLead = { ...lead, phone: isSkip ? 'N/A' : text }
      setLead(updatedLead)
      setLeadStep('service')
      addMessage('user', text)
      setTimeout(() => {
        addMessage(
          'assistant',
          `Understood. Which domain of Israel Dare's work corresponds to your inquiry? Select below or describe your requirement:`
        )
        setShowServicePicker(true)
      }, 400)
      return
    }
  }

  const handleServiceSelect = (selectedService: string) => {
    const updatedLead = { ...lead, service: selectedService }
    setLead(updatedLead)
    setLeadStep('done')
    setShowServicePicker(false)
    addMessage('user', `Focus Area: ${selectedService}`)

    sendWebhookReport(updatedLead, [
      ...messagesRef.current,
      { role: 'user', content: `Selected: ${selectedService}` },
    ])
    scheduleWhatsAppReport(updatedLead)

    setTimeout(() => {
      addMessage(
        'assistant',
        `Excellent. Your brief for **${selectedService}** has been registered.

How can I assist you further right now? You can ask about Israel's engineering stack, research papers on Gaussian Process Regression & drone photogrammetry, or schedule a strategy call directly.`
      )
    }, 500)
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || loading) return

    const userText = input.trim()
    setInput('')

    if (leadStep !== 'done') {
      handleLeadCollection(userText)
      return
    }

    addMessage('user', userText)
    setLoading(true)

    try {
      const allMessages = [...messagesRef.current, { role: 'user' as const, content: userText }]
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMessages, lead }),
      })

      if (!res.ok) throw new Error('Failed to fetch response')
      const data = await res.json()
      addMessage('assistant', data.reply || "Israel's schedule is currently open for strategic contracts. Please book via Calendly or email izzy.marketing.hub@gmail.com.")
    } catch {
      addMessage(
        'assistant',
        "Thank you for your message. Israel's direct office has received your note. You may also reach out via WhatsApp at +1 424 546 0129."
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Floating Concierge Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 bg-black border border-white/20 text-white hover:border-white shadow-2xl hover:bg-noir-900 transition-all duration-300 group"
            aria-label="Open Israel Dare Executive Concierge"
          >
            <div className="relative">
              <Logo variant="monogram" size="sm" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-600 animate-pulse-subtle" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="font-sans font-bold text-[11px] uppercase tracking-[0.16em] text-white">
                Executive Concierge
              </p>
              <p className="font-mono text-[9px] text-zinc-400">Direct Office Access</p>
            </div>
          </button>
        )}
      </div>

      {/* Luxury Concierge Modal */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] h-[580px] max-h-[85vh] bg-noir-950 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-black border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo variant="monogram" size="sm" />
              <div>
                <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-white">
                  Israel Dare
                </p>
                <p className="font-mono text-[9px] text-zinc-400">
                  Concierge · Verified Assistant
                </p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-1.5 text-zinc-400 hover:text-white border border-transparent hover:border-white/20 transition-all"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 font-sans text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 ${
                    msg.role === 'user'
                      ? 'bg-white text-black font-medium'
                      : 'bg-noir-900 border border-white/[0.08] text-zinc-300 leading-relaxed font-light'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                </div>
              </div>
            ))}

            {/* Service Picker */}
            {showServicePicker && (
              <div className="space-y-2 pt-2 animate-fade-in">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                  Select Focus Area:
                </p>
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleServiceSelect(s)}
                    className="w-full text-left p-2.5 bg-black hover:bg-zinc-900 border border-white/10 hover:border-white/40 text-zinc-300 hover:text-white font-mono text-[11px] transition-all flex items-center justify-between"
                  >
                    <span>{s}</span>
                    <ArrowRight className="w-3 h-3 text-red-500" />
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-2 text-zinc-500 font-mono text-[10px]">
                <Loader2 className="w-3 h-3 animate-spin text-red-500" />
                <span>Formulating response...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSend} className="p-3.5 bg-black border-t border-white/[0.08] flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                leadStep === 'name'
                  ? 'Your full name...'
                  : leadStep === 'email'
                  ? 'Your business email...'
                  : leadStep === 'phone'
                  ? 'Your phone or WhatsApp (or "skip")...'
                  : 'Inquire or ask a question...'
              }
              className="flex-1 bg-noir-900 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-4 py-2.5 bg-white text-black hover:bg-zinc-200 disabled:opacity-30 text-xs font-bold transition-all"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
