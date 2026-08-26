'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { MessageSquare, X, Send, Loader2, Calendar, Phone, Mail, ArrowUpRight } from 'lucide-react'
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

// Function to clean raw markdown asterisks and format links
function cleanMessageText(text: string): string {
  if (!text) return ''
  return text.replace(/\*+/g, '').trim()
}

// Check if string is just a greeting or invalid name
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

const BOT_INTRO = `Welcome to the digital headquarters of Israel Dare — AI Consultant, Chief Systems Architect, and Computational Modeler.

I can brief you on Israel's active engineering builds, research publications, service pricing tiers, or coordinate a direct consultation.

How can I assist you today?`

const QUICK_PROMPTS = [
  'What services and pricing does Israel offer?',
  'Tell me about Israel\'s academic research & thesis',
  'What major AI systems has Israel deployed?',
  'How do I schedule a strategy consultation?',
]

const WEBHOOK_URL = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK as string

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: BOT_INTRO },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [lead, setLead] = useState<Lead>({ name: '', email: '', phone: '', service: '' })
  const [showLeadModal, setShowLeadModal] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesRef = useRef<Message[]>(messages)

  useEffect(() => {
    messagesRef.current = messages
  }, [messages])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150)
  }, [open])

  const addMessage = (role: Message['role'], content: string) => {
    setMessages((prev) => [...prev, { role, content: cleanMessageText(content) }])
  }

  // Parse natural introductions to extract names gracefully
  const detectLeadInText = (text: string) => {
    const nameMatch = text.match(/(?:my name is|i am|i'm|this is)\s+([A-Za-z\s]{2,30})/i)
    if (nameMatch && nameMatch[1] && !isInvalidName(nameMatch[1])) {
      setLead((prev) => ({ ...prev, name: nameMatch[1].trim() }))
    }

    const emailMatch = text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/i)
    if (emailMatch && emailMatch[1]) {
      setLead((prev) => ({ ...prev, email: emailMatch[1].trim() }))
    }
  }

  const handleSend = async (textToSend?: string) => {
    const userText = (textToSend || input).trim()
    if (!userText || loading) return
    if (!textToSend) setInput('')

    detectLeadInText(userText)
    addMessage('user', userText)
    setLoading(true)

    try {
      const allMessages = [...messagesRef.current, { role: 'user' as const, content: cleanMessageText(userText) }]
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: allMessages, lead }),
      })

      if (!res.ok) throw new Error('Failed to fetch response')
      const data = await res.json()
      addMessage('assistant', cleanMessageText(data.reply || "Israel's schedule is currently open for strategic contracts. Please book via Calendly at https://Calendly.com/izzy-marketing-hub/30min or email israel@israeldare.com."))
    } catch {
      addMessage(
        'assistant',
        "Israel Dare's executive office is ready to assist. You can schedule a strategy session directly via Calendly (https://Calendly.com/izzy-marketing-hub/30min), chat on WhatsApp (+1 424 546 0129), or email israel@israeldare.com."
      )
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend()
  }

  // Render clickable links gracefully inside text
  const renderMessageContent = (content: string) => {
    const cleaned = cleanMessageText(content)
    const urlRegex = /(https?:\/\/[^\s]+)/g
    const parts = cleaned.split(urlRegex)

    return (
      <div className="space-y-2">
        {cleaned.split('\n').map((line, lineIdx) => {
          if (!line.trim()) return <div key={lineIdx} className="h-1.5" />

          const isBullet = line.trim().startsWith('•') || line.trim().startsWith('-')
          const formattedLine = isBullet ? line.replace(/^[•-]\s*/, '') : line

          return (
            <div key={lineIdx} className={isBullet ? 'flex items-start gap-2 pl-1' : ''}>
              {isBullet && <span className="text-gold-400 font-bold select-none">•</span>}
              <p className="inline leading-relaxed">
                {formattedLine.split(urlRegex).map((part, pIdx) => {
                  if (part.match(urlRegex)) {
                    return (
                      <a
                        key={pIdx}
                        href={part}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-300 hover:text-white underline underline-offset-2 break-all inline-flex items-center gap-1 font-mono text-[11px]"
                      >
                        {part.includes('Calendly') ? 'Schedule on Calendly ↗' : part}
                      </a>
                    )
                  }
                  return part
                })}
              </p>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <>
      {/* Floating Concierge Trigger */}
      <div className="fixed bottom-6 right-6 z-40">
        {!open && (
          <button
            onClick={() => setOpen(true)}
            className="flex items-center gap-3 px-5 py-3.5 bg-noir-950 border border-gold-500/30 text-white hover:border-gold-400 shadow-2xl hover:bg-noir-900 transition-all duration-300 group rounded-none"
            aria-label="Open Israel Dare Executive Concierge"
          >
            <div className="relative">
              <Logo variant="monogram" size="sm" />
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-gold-400 animate-pulse-subtle" />
            </div>
            <div className="text-left hidden sm:block">
              <p className="font-sans font-bold text-[11px] uppercase tracking-[0.18em] text-white group-hover:text-gold-300 transition-colors">
                Executive Concierge
              </p>
              <p className="font-mono text-[9px] text-zinc-400">Direct Office Access · Online</p>
            </div>
          </button>
        )}
      </div>

      {/* Luxury Concierge Modal */}
      {open && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-[94vw] sm:w-[440px] h-[600px] max-h-[88vh] bg-noir-950 border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="p-4 sm:p-5 bg-black border-b border-white/[0.08] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo variant="monogram" size="sm" />
              <div>
                <p className="font-sans font-bold text-xs uppercase tracking-[0.2em] text-white">
                  Israel Dare
                </p>
                <p className="font-mono text-[9px] text-gold-400 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                  Executive AI Concierge · Live
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://Calendly.com/izzy-marketing-hub/30min"
                target="_blank"
                rel="noopener noreferrer"
                title="Book 30-Min Strategy Call"
                className="p-1.5 text-zinc-400 hover:text-gold-400 hover:border-gold-500/30 border border-transparent transition-all"
              >
                <Calendar className="w-4 h-4" />
              </a>
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white border border-transparent hover:border-white/20 transition-all"
                aria-label="Close Concierge"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Direct Actions Strip */}
          <div className="px-4 py-2 bg-noir-900/60 border-b border-white/[0.06] flex items-center justify-between font-mono text-[10px] text-zinc-400">
            <a
              href="mailto:israel@israeldare.com"
              className="hover:text-white flex items-center gap-1 transition-colors"
            >
              <Mail className="w-3 h-3 text-gold-400" /> israel@israeldare.com
            </a>
            <a
              href="https://wa.me/14245460129"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-300 flex items-center gap-1 transition-colors"
            >
              <Phone className="w-3 h-3 text-gold-400" /> WhatsApp Direct
            </a>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 font-sans text-xs">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] p-4 ${
                    msg.role === 'user'
                      ? 'bg-parchment-100 text-noir-950 font-medium'
                      : 'bg-noir-900 border border-white/[0.08] text-parchment-200 leading-relaxed font-light'
                  }`}
                >
                  {renderMessageContent(msg.content)}
                </div>
              </div>
            ))}

            {/* Quick Prompts (only on initial conversation) */}
            {messages.length === 1 && (
              <div className="space-y-2 pt-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold-400/90 font-medium">
                  Frequently Asked Questions:
                </p>
                <div className="grid grid-cols-1 gap-1.5">
                  {QUICK_PROMPTS.map((prompt) => (
                    <button
                      key={prompt}
                      onClick={() => handleSend(prompt)}
                      className="w-full text-left p-2.5 bg-black/60 hover:bg-noir-900 border border-white/10 hover:border-gold-500/40 text-zinc-300 hover:text-white font-mono text-[11px] transition-all flex items-center justify-between group"
                    >
                      <span className="truncate pr-2">{prompt}</span>
                      <ArrowUpRight className="w-3 h-3 text-gold-400 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {loading && (
              <div className="flex items-center gap-2 text-zinc-400 font-mono text-[10px] p-2 bg-noir-900/40 border border-white/[0.06] w-fit">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-gold-400" />
                <span>Formulating executive analysis...</span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input Box */}
          <form onSubmit={handleSubmit} className="p-3.5 bg-black border-t border-white/[0.08] flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Israel's systems, research, or pricing..."
              className="flex-1 bg-noir-900 border border-white/10 px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-gold-400 transition-colors font-mono"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-4 py-2.5 bg-gold-400 text-noir-950 hover:bg-gold-300 disabled:opacity-30 text-xs font-bold transition-all inline-flex items-center justify-center"
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
