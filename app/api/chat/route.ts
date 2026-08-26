import { readFileSync } from 'fs'
import { join } from 'path'
import { NextRequest, NextResponse } from 'next/server'

function getKnowledgeBase(): string {
  try {
    return readFileSync(join(process.cwd(), 'lib/chatbot-knowledge.md'), 'utf-8')
  } catch {
    return ''
  }
}

// Strip any accidental markdown asterisks from responses
function stripAsterisks(text: string): string {
  return text.replace(/\*+/g, '').trim()
}

// Intelligent fallback response engine
function generateFallbackResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase().trim()

  // Greetings
  if (/^(hello|hi|hey|good day|good morning|good afternoon|good evening|greetings)/i.test(lower)) {
    return "Greetings. I am the Executive Concierge for Israel Dare. How may I assist you today? You can inquire about our AI systems architecture, case studies, academic research, service pricing, or schedule a strategy consultation."
  }

  // Identity / Bio / Story
  if (lower.includes('who is') || lower.includes('about') || lower.includes('background') || lower.includes('story') || lower.includes('bio') || lower.includes('father')) {
    return "Israel Dare is an AI Consultant, Chief Systems Architect, and Computational Modeler recognized as Upwork Top Rated Plus (Top 3% globally with a 100% Job Success Score). He graduated with First Class Honours in Agricultural & Environmental Engineering from FUTA, leading his department with a GPA exceeding 4.5/5.0 as an FGN Merit Scholar. He is certified by Anthropic in advanced Claude API architectures, founded the APEXIUM youth initiative, and is a classical multi-instrumentalist."
  }

  // Pricing / Rates / Services
  if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('package') || lower.includes('pricing') || lower.includes('retainer') || lower.includes('fee')) {
    return "Israel provides transparent, outcome-driven systems engineering engagements:\n\n• Executive AI Strategy & Technical Advisory: $3,500 per session (or $8,000/month ongoing advisory retainer)\n• Bespoke AI Application Development: From $8,500 (full-stack RAG, vector search, custom models)\n• Enterprise Workflow Automation & n8n Clusters: From $4,000 (resilient, self-healing data pipelines)\n• Spatial Intelligence & Bio-Physical Systems: From $12,000 / Bespoke (UAV photogrammetry, digital twins)\n• Fractional Chief Systems Architect: $8,000/month\n\nYou can book a direct strategy call at https://Calendly.com/izzy-marketing-hub/30min or email israel@israeldare.com."
  }

  // Academic / Research / Thesis / GPR
  if (lower.includes('thesis') || lower.includes('academic') || lower.includes('research') || lower.includes('gpr') || lower.includes('gaussian') || lower.includes('futa') || lower.includes('scholarship')) {
    return "Israel graduated First Class Honours from FUTA, finishing at the top of his department (GPA 4.5+/5.0) and was a Federal Government of Nigeria (FGN) Merit Scholarship recipient (2019–2023). His undergraduate thesis developed a non-parametric Gaussian Process Regression (GPR) model to predict environmental and moisture degradation in tropical harvest storage. He also served as Academic Director for AGEESA, tutoring engineering peers in numerical analysis and advanced mathematics."
  }

  // Drone / Photogrammetry / Spatial / LiDAR / 3D
  if (lower.includes('drone') || lower.includes('photogrammetry') || lower.includes('spatial') || lower.includes('lidar') || lower.includes('nerf') || lower.includes('twin')) {
    return "Israel specializes in spatial intelligence and autonomous aerial robotics. His work bridges UAV multispectral LiDAR telemetry, RTK-GPS georeferencing, Structure-from-Motion (SfM), and 3D Gaussian Splatting to construct high-fidelity bio-spatial digital twins for infrastructure, environmental monitoring, and terrain modeling."
  }

  // Flagship Projects / Case Studies
  if (lower.includes('project') || lower.includes('case') || lower.includes('portfolio') || lower.includes('edutech') || lower.includes('roof') || lower.includes('mamaguard')) {
    return "Key production systems built by Israel Dare include:\n\n• Edutech Global: Institutional admissions RAG ecosystem for Babcock University & ABU, cutting administrative query burden by 68% with sub-5s latency.\n• Roof Auto: Autonomous contract parser converting 30-page blueprint PDFs into itemized material lists in 40 seconds (down from 4 hours).\n• MamaGuard: Prenatal clinical diagnostic advisory platform supporting concurrent voice and text logging with Python FastAPI and aiosqlite."
  }

  // Contact / Meeting / Booking
  if (lower.includes('call') || lower.includes('meeting') || lower.includes('consult') || lower.includes('hire') || lower.includes('contact') || lower.includes('schedule') || lower.includes('book') || lower.includes('email') || lower.includes('whatsapp')) {
    return "You can schedule a direct 30-minute strategic consultation with Israel Dare via Calendly at https://Calendly.com/izzy-marketing-hub/30min, message him on WhatsApp at +1 424 546 0129, or email directly at israel@israeldare.com."
  }

  // APEXIUM / Non-Profit / Impact
  if (lower.includes('apexium') || lower.includes('charity') || lower.includes('non-profit') || lower.includes('teach') || lower.includes('youth') || lower.includes('community')) {
    return "APEXIUM is a grassroots non-profit founded by Israel Dare that brings AI literacy, algorithmic thinking, and software programming workshops to underserved youth across rural Nigerian communities. The initiative is fully self-funded from his engineering and consulting earnings, having trained over 200 teenagers to date."
  }

  // Music / Polyphony / Violin
  if (lower.includes('music') || lower.includes('violin') || lower.includes('orchestra') || lower.includes('piano') || lower.includes('cello')) {
    return "Israel is a self-taught classical multi-instrumentalist (Violin, Viola, Cello, Piano) and former General Coordinator / Music Director for the FUTA campus orchestra and 60-member choir. He views the strict multi-voice counterpoint of J.S. Bach as the foundational mental model for architecting high-concurrency, asynchronous software pipelines."
  }

  return "Israel Dare's executive office is ready to assist with enterprise AI strategy, high-concurrency systems, autonomous n8n workflows, spatial digital twins, or institutional inquiries. Would you like to schedule a strategy briefing via Calendly (https://Calendly.com/izzy-marketing-hub/30min) or connect directly on WhatsApp (+1 424 546 0129)?"
}

export async function POST(req: NextRequest) {
  try {
    const { messages, lead } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages payload' }, { status: 400 })
    }

    const latestUserMsg = messages[messages.length - 1]?.content || ''
    const kb = getKnowledgeBase()
    const leadContext = lead?.name && !/^(hello|hi|hey|good morning|test)/i.test(lead.name)
      ? `\nClient Inquirer Dossier:\n- Name: ${lead.name}\n- Business Email: ${lead.email || 'N/A'}\n- Phone: ${lead.phone || 'N/A'}\n- Focus: ${lead.service || 'General Inquiry'}`
      : ''

    const systemPrompt = `You are the Executive Concierge for ISRAEL DARE — AI Consultant, Chief Systems Architect, Computational Modeler, and First-Class Honours Engineer.

VOICE & PERSONA:
- Ultra-sharp, intellectually formidable, articulate, confident, restrained, and elegant.
- Speak with executive precision. Avoid buzzwords, fluff, or generic robotic phrasing.
- Be extremely intelligent and helpful. You can explain deep mathematical, architectural, and engineering topics fluently.
- Greet visitors warmly if they say hello without assuming their name is 'Hello' or forcing an interrogation.
- If asked about Israel Dare, draw accurately and deeply from the knowledge base below.

CRITICAL FORMATTING INSTRUCTIONS (ZERO ASTERISKS):
- NEVER USE ANY ASTERISKS (*) OR DOUBLE ASTERISKS (**) FOR BOLDING, ITALICS, OR LISTS IN YOUR RESPONSES.
- DO NOT USE MARKDOWN ASTERISKS AT ALL.
- For bulleted lists, use simple standard bullet points (•) or hyphens (-).
- Present key terms and links cleanly in plain, dignified typography.

CORE OBJECTIVES:
1. Provide authoritative, intelligent answers about Israel's engineering builds, academic research, spatial models, and consulting services.
2. Present accurate pricing tiers ($3,500 strategy session, from $4,000 automation, from $8,500 custom apps, $8,000/mo retainer) when asked.
3. Direct serious inquiries to book a strategy call via Calendly (https://Calendly.com/izzy-marketing-hub/30min) or message on WhatsApp (+1 424 546 0129) or email israel@israeldare.com.

${leadContext}

KNOWLEDGE BASE & VERIFIED CREDENTIALS:
${kb}`

    // 1. Try Anthropic Claude API first (Claude 3.5 Sonnet / 3 Haiku)
    const anthropicKey = process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY
    if (anthropicKey) {
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
            messages: messages.map((m: any) => ({
              role: m.role === 'assistant' ? 'assistant' : 'user',
              content: m.content,
            })),
            max_tokens: 600,
            temperature: 0.6,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const rawReply = data.content?.[0]?.text
          if (rawReply) {
            return NextResponse.json({ reply: stripAsterisks(rawReply) })
          }
        }
      } catch (e) {
        console.warn('Anthropic API attempt encountered an error, trying OpenAI/fallback:', e)
      }
    }

    // 2. Try OpenAI API if key exists
    if (process.env.OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'system', content: systemPrompt }, ...messages],
            temperature: 0.6,
            max_tokens: 600,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const rawReply = data.choices?.[0]?.message?.content
          if (rawReply) {
            return NextResponse.json({ reply: stripAsterisks(rawReply) })
          }
        }
      } catch (e) {
        console.warn('OpenAI API call encountered an error, falling back:', e)
      }
    }

    // 3. Guaranteed High-Intelligence Native Fallback Engine
    const fallbackReply = generateFallbackResponse(latestUserMsg)
    return NextResponse.json({ reply: stripAsterisks(fallbackReply) })
  } catch (err) {
    console.error('Chat API Error:', err)
    return NextResponse.json(
      {
        reply:
          "Israel Dare's executive office has received your inquiry. You may book directly via Calendly at https://Calendly.com/izzy-marketing-hub/30min, message on WhatsApp at +1 424 546 0129, or email israel@israeldare.com.",
      },
      { status: 200 }
    )
  }
}
