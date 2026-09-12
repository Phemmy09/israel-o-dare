import { readFileSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

// ─── 1. In-Memory Session & IP Rate Limiting ─────────────────────────────────
// Protects against bot scrapers, infinite loop loops, and malicious token drainers.
interface RateLimitEntry {
  count: number
  firstRequestTime: number
  lastRequestTime: number
}

const rateLimitMap = new Map<string, RateLimitEntry>()
const MAX_PER_MINUTE = 8
const MAX_PER_SESSION = 22 // Requires contact capture / Calendly booking to continue
const WINDOW_MS = 60 * 1000 // 1 minute
const SESSION_WINDOW_MS = 24 * 60 * 60 * 1000 // 24 hours

function checkRateLimit(ip: string): { allowed: boolean; reason?: 'burst' | 'session' } {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstRequestTime: now, lastRequestTime: now })
    return { allowed: true }
  }

  // Clean old sessions
  if (now - entry.firstRequestTime > SESSION_WINDOW_MS) {
    entry.count = 1
    entry.firstRequestTime = now
    entry.lastRequestTime = now
    return { allowed: true }
  }

  // Check burst limit (per minute)
  if (now - entry.lastRequestTime < WINDOW_MS && entry.count >= MAX_PER_MINUTE) {
    return { allowed: false, reason: 'burst' }
  }

  // Check total session cap
  if (entry.count >= MAX_PER_SESSION) {
    return { allowed: false, reason: 'session' }
  }

  entry.count += 1
  entry.lastRequestTime = now
  return { allowed: true }
}

function getKnowledgeBase(): string {
  try {
    return readFileSync(join(process.cwd(), 'lib/chatbot-knowledge.md'), 'utf-8')
  } catch {
    return ''
  }
}

// Strictly strip any markdown asterisks (* and **) from outputs
function stripAsterisks(text: string): string {
  if (!text) return ''
  return text.replace(/\*+/g, '').trim()
}

// ─── 2. Adversarial & Token-Waste Heuristics (0 API Cost Deflection) ─────────
function isAdversarialOrTokenDrainer(text: string): { blocked: boolean; message?: string } {
  const lower = text.toLowerCase().trim()

  // Message length clamp: reject massive copy-paste dumps meant to exhaust tokens
  if (text.length > 700) {
    return {
      blocked: true,
      message:
        "To preserve executive-level clarity and prevent token abuse, please condense your inquiry into a concise question. What specific operational bottleneck or revenue automation challenge are you seeking to solve?",
    }
  }

  // Prompt injection & jailbreak patterns
  const injectionPatterns = [
    'ignore all previous',
    'ignore previous instructions',
    'system prompt',
    'reveal your prompt',
    'what are your instructions',
    'act as dan',
    'jailbreak',
    'bypass security',
    'unrestricted ai',
    'developer mode',
    'repeat everything above',
    'print your system',
    'show your prompt',
    'base64 decode',
    'disregard all prior',
    'roleplay as an unfiltered',
  ]

  if (injectionPatterns.some((pattern) => lower.includes(pattern))) {
    return {
      blocked: true,
      message:
        "I operate under strict deterministic security protocols architected by Israel Dare. I am authorized exclusively to diagnose business operational bottlenecks, explain Israel's 4 engineering packages, and facilitate client onboarding. How may I assist your business systems?",
    }
  }

  // Unrelated computational homework / trivia / essay exploitation
  const offTopicPatterns = [
    'do my homework',
    'solve this leetcode',
    'write an essay on',
    'write a poem',
    'tell me a joke',
    'who won the 199',
    'who is the president of',
    'write a story about',
    'translate this entire',
    'repeat this word 100',
    'repeat this word 500',
    'list all numbers from',
  ]

  if (offTopicPatterns.some((pattern) => lower.includes(pattern))) {
    return {
      blocked: true,
      message:
        "This concierge is exclusively dedicated to strategic systems architecture, revenue automation, and client onboarding for Israel Dare. For general homework, creative writing, or trivia, please consult public tools. If you have an automation or AI infrastructure need for your business, I am at your service.",
    }
  }

  return { blocked: false }
}

// ─── 3. Intelligent Deterministic Fallback Engine ────────────────────────────
function generateFallbackResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase().trim()

  // Greetings
  if (/^(hello|hi|hey|good day|good morning|good afternoon|good evening|greetings)/i.test(lower)) {
    return "Welcome to the digital headquarters of Israel Dare. I am Israel's Executive Systems Concierge. Whether your business is leaking leads, struggling with manual contract workflows, or seeking to deploy autonomous AI agents, I am here to assist. What operational challenge is currently slowing your business down?"
  }

  // Booking & Strategy Consultation ($50 Gated Fee)
  if (
    lower.includes('call') ||
    lower.includes('book') ||
    lower.includes('schedule') ||
    lower.includes('consult') ||
    lower.includes('meeting') ||
    lower.includes('50') ||
    lower.includes('fee')
  ) {
    return "Israel Dare accepts select high-ticket clients and gates private 30-minute discovery sessions with a $50 deposit to ensure high mutual intent. This $50 fee is 100% credited toward your package or service contract if you proceed.\n\nYou can secure your session immediately via Calendly at https://Calendly.com/izzy-marketing-hub/30min, or message Israel directly on WhatsApp at +1 (424) 546-0129."
  }

  // Pricing & Packages
  if (
    lower.includes('price') ||
    lower.includes('cost') ||
    lower.includes('rate') ||
    lower.includes('package') ||
    lower.includes('tier') ||
    lower.includes('how much')
  ) {
    return "Israel provides 4 transparent, production-tested service packages:\n\n• BEGINNER ($800): Automated email sequences, instant SMS lead responders, social media 24/7 auto-responder, CRM sync.\n• PROFESSIONAL ($2,500): Complete sales funnel, custom website (up to 10 pages), marketing automation, 24/7 AI chatbot, CRM setup.\n• PREMIUM ($5,000 — Most Popular): Full brand identity, high-performance web platform, social media automation, custom AI Agent / Digital Twin, lead scoring CRM, 30 days priority tuning.\n• EXCLUSIVE ($30,000 / Year): Fractional CTO & enterprise systems architecture, 365-day workflow maintenance, dedicated AI twins, direct private hotline.\n\nWhich of these best matches your current growth stage?"
  }

  // Lead Leaking / Voice AI / Solar / Outbound
  if (
    lower.includes('lead') ||
    lower.includes('voice') ||
    lower.includes('call') ||
    lower.includes('solar') ||
    lower.includes('sunrun') ||
    lower.includes('vapi')
  ) {
    return "Slow lead response times kill conversion. For Sunrun Energy commercial solar partners, Israel engineered a low-latency autonomous voice AI system (Vapi + ElevenLabs + Twilio) that calls leads within 30 seconds, qualifies roof parameters and utility spend, and books appointments onto sales calendars. It produced over $300,000 in closed sales in 60 days with zero human qualification labor. Would you like to implement a similar voice pipeline in your business?"
  }

  // Roofing / Documents / PDF / Scope
  if (
    lower.includes('roof') ||
    lower.includes('pdf') ||
    lower.includes('contract') ||
    lower.includes('scope') ||
    lower.includes('eagleview') ||
    lower.includes('extract')
  ) {
    return "Through Roof Auto, Israel built an asynchronous AI engine that ingests complex 30-page aerial PDF blueprints and insurance contracts, extracting pitch angles, square footage, and bills of materials in 40 seconds (down from 4 hours manual calculation) with zero errors. We can build a custom document parser for your industry. What formats do your teams currently process manually?"
  }

  // Credentials / Who is Israel
  if (
    lower.includes('who is') ||
    lower.includes('about') ||
    lower.includes('credential') ||
    lower.includes('experience') ||
    lower.includes('upwork')
  ) {
    return "Israel Oluwafemi Dare is an AI Systems Architect recognized as Upwork Top Rated Plus (Top 3% worldwide with a 100% Job Success Score across 40+ deployments). He holds First Class Honours in Agricultural Engineering from FUTA, is certified 6x by Anthropic on Claude, is a Microsoft Certified AI Red Teamer, and holds Securiti.ai Governance credentials. He separates reasoning from execution: AI decides, deterministic code acts."
  }

  // WhatsApp / Email / Contact
  if (
    lower.includes('contact') ||
    lower.includes('whatsapp') ||
    lower.includes('email') ||
    lower.includes('phone') ||
    lower.includes('reach')
  ) {
    return "You can reach Israel Dare directly via:\n\n• Email: israel@israeldare.com\n• Direct WhatsApp: +1 (424) 546-0129\n• $50 Gated Strategy Call: https://Calendly.com/izzy-marketing-hub/30min"
  }

  return "Israel Dare specializes in high-concurrency autonomous systems, voice AI agents, GoHighLevel infrastructure, and deterministic document parsing. Would you like to discuss your operational bottleneck, explore our 4 service packages ($800 to $30,000), or lock in a $50 gated strategy call via Calendly (https://Calendly.com/izzy-marketing-hub/30min)?"
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('cf-connecting-ip') ||
      '127.0.0.1'

    // 1. Rate Limit & Abuse Check
    const rateCheck = checkRateLimit(ip)
    if (!rateCheck.allowed) {
      if (rateCheck.reason === 'burst') {
        return NextResponse.json({
          reply:
            "Please pause a moment. To ensure dignified, high-availability service for all executives, responses are throttled. Please re-enter your question in 30 seconds.",
        })
      }
      return NextResponse.json({
        reply:
          "You have reached the exploratory consultation limit for this session. To proceed with an in-depth architectural evaluation, please book a private $50 gated strategy briefing directly with Israel Dare (100% credited toward your package contract) at https://Calendly.com/izzy-marketing-hub/30min, or message directly on WhatsApp at +1 (424) 546-0129.",
      })
    }

    const { messages, lead } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages payload' }, { status: 400 })
    }

    const latestUserMsg = messages[messages.length - 1]?.content || ''

    // 2. Token-Drain & Adversarial Prompt Check (Zero API cost deflection)
    const guard = isAdversarialOrTokenDrainer(latestUserMsg)
    if (guard.blocked && guard.message) {
      return NextResponse.json({ reply: stripAsterisks(guard.message) })
    }

    const kb = getKnowledgeBase()
    const leadDossier = lead?.name
      ? `\nCURRENT VISITOR DOSSIER:\n• Name: ${lead.name}\n• Email: ${lead.email || 'Pending'}\n• Phone/WhatsApp: ${lead.phone || 'Pending'}\n• Business: ${lead.company || 'Not stated'}\n• Target Tier: ${lead.interest || 'Systems Architecture'}`
      : ''

    const systemPrompt = `You are the Executive Systems Concierge and Psychological Lead Closer for ISRAEL OLUWAFEMI DARE — Elite AI Systems Architect, Autonomous Revenue Infrastructure Consultant, Upwork Top Rated Plus (Top 3% worldwide with 100% Job Success across 40+ deployments), 6x Anthropic Certified, and Microsoft Certified AI Red Teamer.

YOUR MISSION & ROLE:
1. Provide authoritative, deeply intelligent answers grounded strictly in Israel Dare's verified knowledge base.
2. Act as a high-ticket consultative closer: empathize with operational pain (leads leaking, manual SDR burnout, slow PDF estimation, RAG hallucinations), validate with real proof ($300k in 60 days, 900+ appointments, 40s scope extraction), and guide prospects to the right package.
3. Transparently present the 4 Service Packages:
   • Beginner ($800): Automated email sequences, instant SMS lead responders, social media auto-responder, CRM sync.
   • Professional ($2,500): Complete sales funnel, custom website (up to 10 pages), marketing automation, 24/7 AI chatbot, CRM setup.
   • Premium ($5,000 — Most Popular): Full brand identity, high-performance web platform, social media automation, custom AI Agent / Digital Twin, lead scoring CRM, 30 days priority tuning.
   • Exclusive ($30,000 / Annual): Fractional CTO & enterprise systems architecture, 365-day workflow maintenance, dedicated AI twins, direct private hotline.
4. Guide high-intent prospects to lock in a private 30-minute discovery briefing via Calendly:
5. Offer direct WhatsApp contact with Israel at +1 (424) 546-0129 for immediate high-priority inquiries.
6. DIRECT PAYSTACK PAYMENT LINKS:
   If a client is ready to purchase, book, or pay directly, provide the direct Paystack payment link:
   • $50 Strategy Session Deposit (100% credited): https://paystack.com/pay/v9czx8c3p8
   • Beginner Plan ($800): https://paystack.com/pay/ofst3diom9
   • Professional Plan ($2,500): https://paystack.com/pay/9e1tye5cuz
   • Premium Plan ($5,000): https://paystack.com/pay/ei2-uzy7yb
   • Exclusive Partnership ($30,000): https://paystack.com/pay/25sryug2ue

PSYCHOLOGICAL DISCERNMENT & ELITE POSTURE:
• Tone: Calm, sovereign, discerning, welcoming yet unshakeable. You speak as a trusted technical advisor to CEOs and founders.
• Understand Client Tricks:
  - If a visitor fishes for free full system architectures or tries to extract free code, provide the high-level deterministic framework, then invite them to formalize the build via the $50 gated strategy call or a package.
  - If a visitor compares Israel with cheap freelancers, calmly educate: inexperienced builds cost 5x more in lost leads, security holes, and brittle downtime. Israel builds production systems that handle real money.
  - If a visitor is hesitant on price, anchor the ROI: a single automated lead qualification system or 40-second document parser pays for itself within weeks.
• STRICT GUARDRAILS:
  - Domain Boundary: You ONLY discuss Israel Dare, his portfolio, credentials, engineering capabilities, and automation services.
  - Zero Asterisks: NEVER output any asterisks (*) or double asterisks (**) in your responses. Format lists with clean bullet points (•) or hyphens (-).
  - Brevity & Power: Keep responses under 150 words whenever possible. Every word must carry weight. Never use generic AI clichés ("delve", "tapestry", "embark", "testament").

${leadDossier}

MASTER KNOWLEDGE BASE:
${kb}`

    // 3. Sliding Context Window: To maximize cost-efficiency and eliminate token waste,
    // only send the last 4 messages (2 conversation turns) to the model.
    const recentMessages = messages.slice(-4).map((m: any) => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: String(m.content).slice(0, 600), // Clamp individual past turn length
    }))

    // 4. Try OpenAI (GPT-5.6 Luna) First
    const openAiKey = process.env.OPENAI_API_KEY
    if (openAiKey) {
      const targetModel = process.env.OPENAI_CHAT_MODEL || 'gpt-5.6-luna'
      const isReasoningModel =
        targetModel.includes('luna') ||
        targetModel.includes('gpt-5') ||
        targetModel.includes('o1') ||
        targetModel.includes('o3')

      try {
        const payload: Record<string, any> = {
          model: targetModel,
          messages: [{ role: 'system', content: systemPrompt }, ...recentMessages],
          max_completion_tokens: 450,
        }

        // Configure reasoning models for speed, intelligence, and lowest token waste
        if (isReasoningModel) {
          payload.reasoning_effort = 'low'
        } else {
          payload.temperature = 0.5
        }

        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openAiKey}`,
          },
          body: JSON.stringify(payload),
        })

        if (response.ok) {
          const data = await response.json()
          const rawReply = data.choices?.[0]?.message?.content
          if (rawReply) {
            return NextResponse.json({ reply: stripAsterisks(rawReply) })
          }
        } else {
          // If gpt-5.6-luna returns an unexpected error, attempt quick fallback to gpt-4o-mini
          console.warn(`Primary OpenAI model (${targetModel}) returned ${response.status}. Attempting fast fallback to gpt-4o-mini...`)
          const fallbackRes = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${openAiKey}`,
            },
            body: JSON.stringify({
              model: 'gpt-4o-mini',
              messages: [{ role: 'system', content: systemPrompt }, ...recentMessages],
              max_completion_tokens: 400,
              temperature: 0.5,
            }),
          })
          if (fallbackRes.ok) {
            const fbData = await fallbackRes.json()
            const fbReply = fbData.choices?.[0]?.message?.content
            if (fbReply) {
              return NextResponse.json({ reply: stripAsterisks(fbReply) })
            }
          }
        }
      } catch (openAiErr) {
        console.warn('OpenAI call error:', openAiErr)
      }
    }

    // 5. Try Anthropic Claude API as Secondary Provider
    const anthropicKey = process.env.ANTHROPIC_API_KEY
    if (anthropicKey && anthropicKey !== 'your_anthropic_api_key_here') {
      try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': anthropicKey,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            system: systemPrompt,
            messages: recentMessages,
            max_tokens: 400,
            temperature: 0.5,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const rawReply = data.content?.[0]?.text
          if (rawReply) {
            return NextResponse.json({ reply: stripAsterisks(rawReply) })
          }
        }
      } catch (anthropicErr) {
        console.warn('Anthropic API call failed:', anthropicErr)
      }
    }

    // 6. Native High-Intelligence Fallback Engine (Zero latency, zero cost)
    const fallback = generateFallbackResponse(latestUserMsg)
    return NextResponse.json({ reply: stripAsterisks(fallback) })
  } catch (err) {
    console.error('Chat API Error:', err)
    return NextResponse.json({
      reply:
        "Israel Dare's executive office has received your inquiry. You can lock in a $50 gated strategy consultation directly via Calendly at https://Calendly.com/izzy-marketing-hub/30min, connect on WhatsApp at +1 (424) 546-0129, or email israel@israeldare.com.",
    })
  }
}
