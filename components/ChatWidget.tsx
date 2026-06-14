'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Bot, User, Loader2, ChevronRight } from 'lucide-react'

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
  'AI Systems & Automation',
  'Custom App/SaaS Dev',
  'Lead Gen/Outbound SDR',
  'Academic/Systems Research',
  'Other / Consultation',
]

const BOT_INTRO = `Hi there! 👋 I'm Israel's AI assistant.

Before we dive in, I'd love to know a bit about you so I can give you the best help. It'll only take a moment!

What's your **first name**?`

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
  // Keep a live ref to messages so the delayed WhatsApp report captures the full transcript
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
    if (open) setTimeout(() => inputRef.current?.focus(), 100)
  }, [open])

  // Clean up timer on unmount (safety)
  useEffect(() => () => { if (whatsappTimerRef.current) clearTimeout(whatsappTimerRef.current) }, [])

  const addMessage = (role: Message['role'], content: string) => {
    setMessages((prev) => [...prev, { role, content }])
  }

  const sendWhatsAppReport = useCallback((completedLead: Lead) => {
    if (whatsappSentRef.current) return
    whatsappSentRef.current = true

    const transcript = messagesRef.current
      .map((m) => `[${m.role === 'user' ? completedLead.name : 'Izzy (AI)'}]: ${m.content}`)
      .join('\n\n')

    fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'chatbot_report',
        name: completedLead.name,
        email: completedLead.email,
        phone: completedLead.phone || 'Not provided',
        service: completedLead.service,
        transcript,
        messageCount: messagesRef.current.length,
        source: 'israelodare.com chatbot',
        reportedAt: new Date().toISOString(),
      }),
    }).catch(() => { /* Silent */ })
  }, [])

  function scheduleWhatsAppReport(completedLead: Lead) {
    if (whatsappTimerRef.current) return // already scheduled
    whatsappTimerRef.current = setTimeout(() => sendWhatsAppReport(completedLead), WHATSAPP_DELAY_MS)
  }

  async function sendLeadEmails(completedLead: Lead) {
    try {
      await fetch('/api/chat-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(completedLead),
      })
    } catch {
      // Silent — don't block user experience
    }
  }

  async function streamResponse(userMessages: Message[], currentLead: Lead) {
    setLoading(true)
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: userMessages.map((m) => ({ role: m.role, content: m.content })),
          lead: currentLead,
        }),
      })

      if (!res.ok || !res.body) throw new Error('Stream failed')

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantText = ''

      setMessages((prev) => [...prev, { role: 'assistant', content: '' }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const chunk = decoder.decode(value)
        const lines = chunk.split('\n')
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue
          const data = line.slice(6).trim()
          if (data === '[DONE]') break
          try {
            const parsed = JSON.parse(data)
            if (parsed.text) {
              assistantText += parsed.text
              setMessages((prev) => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: 'assistant', content: assistantText }
                return updated
              })
            }
          } catch {
            // Skip malformed chunks
          }
        }
      }
    } catch {
      addMessage('assistant', 'Sorry, I ran into an issue. Please try again or reach us on WhatsApp: +1 424 546 0129')
    } finally {
      setLoading(false)
    }
  }

  async function handleLeadStep(value: string) {
    addMessage('user', value)

    if (leadStep === 'name') {
      const updated = { ...lead, name: value.trim() }
      setLead(updated)
      setLeadStep('email')
      setTimeout(() => addMessage('assistant', `Nice to meet you, **${updated.name}**! 😊\n\nWhat's your **email address**? (So we can follow up with you)`), 300)
    } else if (leadStep === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value.trim())) {
        setTimeout(() => addMessage('assistant', "Hmm, that doesn't look like a valid email. Could you double-check it?"), 300)
        return
      }
      const updated = { ...lead, email: value.trim() }
      setLead(updated)
      setLeadStep('phone')
      setTimeout(() => addMessage('assistant', `Got it! 📧\n\nWhat's the best **phone number** to reach you? (You can type "skip" to skip this)`), 300)
    } else if (leadStep === 'phone') {
      const phone = value.toLowerCase() === 'skip' ? '' : value.trim()
      const updated = { ...lead, phone }
      setLead(updated)
      setLeadStep('service')
      setTimeout(() => {
        addMessage('assistant', 'Almost there! 🎯\n\nWhich service are you most interested in?')
        setShowServicePicker(true)
      }, 300)
    }
  }

  async function handleServiceSelect(service: string) {
    const completedLead = { ...lead, service }
    setLead(completedLead)
    setLeadStep('done')
    setShowServicePicker(false)

    addMessage('user', service)

    // Send confirmation + owner notification emails immediately
    sendLeadEmails(completedLead)

    // Schedule WhatsApp report after 5 minutes with full transcript
    scheduleWhatsAppReport(completedLead)

    setTimeout(() => {
      addMessage(
        'assistant',
        `Perfect! I've noted your interest in **${service}**. 🚀\n\nYou're all set — ask me anything about Israel's engineering work, research, or projects. I'm here to help!`
      )
    }, 300)
  }

  async function handleSend() {
    const value = input.trim()
    if (!value || loading) return
    setInput('')

    if (leadStep !== 'done') {
      await handleLeadStep(value)
      return
    }

    addMessage('user', value)
    const updatedMessages: Message[] = [...messages, { role: 'user', content: value }]
    await streamResponse(updatedMessages, lead)
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  function renderMessage(msg: Message, idx: number) {
    const isBot = msg.role === 'assistant'
    return (
      <div key={idx} className={`flex gap-2.5 ${isBot ? '' : 'flex-row-reverse'} animate-slide-up`}>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-md ${
            isBot ? 'bg-gradient-to-br from-red-600 to-red-500 shadow-red-900/20' : 'bg-neutral-800 border border-neutral-700'
          }`}
        >
          {isBot ? <Bot className="w-4.5 h-4.5 text-white" /> : <User className="w-4.5 h-4.5 text-white" />}
        </div>
        <div
          className={`max-w-[80%] px-4 py-3 rounded-2xl text-xs sm:text-sm leading-relaxed shadow-sm ${
            isBot
              ? 'bg-neutral-900/90 text-neutral-100 border border-neutral-800/80 rounded-tl-sm'
              : 'bg-gradient-to-r from-red-600 to-red-500 text-white rounded-tr-sm shadow-red-900/10'
          }`}
          dangerouslySetInnerHTML={{
            __html: msg.content
              .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
              .replace(/\n/g, '<br>'),
          }}
        />
      </div>
    )
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 rounded-full shadow-[0_4px_25px_rgba(239,68,68,0.35)] hover:shadow-[0_4px_35px_rgba(239,68,68,0.55)] flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label="Open chat"
      >
        {open ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
        {!open && (
          <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 bg-green-500 rounded-full border-4 border-neutral-950 animate-pulse" />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-neutral-950/85 backdrop-blur-xl border border-neutral-800/80 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] shadow-red-950/10 flex flex-col overflow-hidden animate-slide-up"
          style={{ height: '520px' }}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-extrabold text-sm tracking-wide">Israel's AI Assistant</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-red-100 text-xs font-semibold uppercase tracking-wider">Online</span>
              </div>
            </div>
            <button className="ml-auto w-7 h-7 bg-black/10 hover:bg-black/20 rounded-lg flex items-center justify-center text-white/80 hover:text-white transition-colors" onClick={() => setOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-neutral-800/80">
            {messages.map((msg, idx) => renderMessage(msg, idx))}

            {/* Service picker */}
            {showServicePicker && (
              <div className="flex flex-col gap-2 pl-10 pr-2 animate-slide-up">
                {SERVICES.map((s) => (
                  <button
                    key={s}
                    onClick={() => handleServiceSelect(s)}
                    className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/80 hover:bg-red-950/20 border border-neutral-800/60 hover:border-red-500/30 rounded-xl text-xs sm:text-sm text-neutral-300 hover:text-white transition-all duration-200 text-left"
                  >
                    <span>{s}</span>
                    <ChevronRight className="w-4 h-4 text-red-500 flex-shrink-0" />
                  </button>
                ))}
              </div>
            )}

            {loading && (
              <div className="flex gap-2.5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-500 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4.5 h-4.5 text-white" />
                </div>
                <div className="bg-neutral-900/90 border border-neutral-800/60 px-4 py-2.5 rounded-2xl rounded-tl-sm flex items-center">
                  <Loader2 className="w-4 h-4 text-red-500 animate-spin" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-neutral-900 bg-neutral-950 p-4 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading || showServicePicker}
              placeholder={
                leadStep === 'name'
                  ? 'Your first name…'
                  : leadStep === 'email'
                  ? 'your@email.com'
                  : leadStep === 'phone'
                  ? 'Phone or type "skip"'
                  : 'Ask me anything…'
              }
              className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-2 text-xs sm:text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-red-500/50 disabled:opacity-50 transition-colors duration-200"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || loading || showServicePicker}
              className="w-10 h-10 bg-red-600 hover:bg-red-500 disabled:opacity-40 disabled:bg-neutral-800 disabled:cursor-not-allowed rounded-xl flex items-center justify-center shadow-md hover:shadow-red-900/20 transition-all duration-200"
            >
              <Send className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
