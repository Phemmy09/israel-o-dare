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

// Fallback intelligent answer engine if external API key is not configured in environment
function generateFallbackResponse(userMessage: string, lead: any): string {
  const lower = userMessage.toLowerCase()

  if (lower.includes('drone') || lower.includes('photogrammetry') || lower.includes('spatial') || lower.includes('lidar') || lower.includes('nerf')) {
    return `Israel Dare specializes in **Autonomous Aerial Robotics & Multispectral Drone Photogrammetry**. He develops pipelines that convert UAV LiDAR telemetry, RTK-GPS data, and Structure-from-Motion (SfM) datasets into 3D Gaussian Splatting and volumetric bio-spatial digital twins for terrain and asset tracking.`
  }

  if (lower.includes('price') || lower.includes('cost') || lower.includes('rate') || lower.includes('package') || lower.includes('pricing') || lower.includes('retainer')) {
    return `Israel offers transparent, outcome-driven systems engineering packages:
• **Industry Turnkey Bundles:** Solar ($4,500), Higher Ed RAG ($6,000), Real Estate ($3,500), Healthcare ($7,500), Creator/Agency ($4,000).
• **Core AI & Workflows:** Scraper APIs ($650), Supabase Schemas ($800), AI Audits ($1,200), SDR Pipelines ($1,800), pgvector ($3,000).
• **Enterprise Systems:** Custom SaaS ($5,000), Mobile Apps ($7,500), Flagship AI OS ($10,000), and Exclusive Annual Retainers ($30,000/yr).

You can explore full packages on our **Services** page or book a 30-min strategy call at https://Calendly.com/izzy-marketing-hub/30min.`
  }

  if (lower.includes('thesis') || lower.includes('academic') || lower.includes('research') || lower.includes('gpr') || lower.includes('gaussian') || lower.includes('futa')) {
    return `Israel graduated with **First-Class Honours in Engineering from FUTA (Top 3%)**. His thesis modeled the non-linear thermodynamic respiration of white yams using Bayesian Gaussian Process Regression (GPR) to predict environmental decay, offseting crop rot by 35%. He is actively authoring research proposals for international doctoral fellowships (UTFPR, UFRPE, UFG, UFCG).`
  }

  if (lower.includes('who is') || lower.includes('about') || lower.includes('background') || lower.includes('story') || lower.includes('bio') || lower.includes('father')) {
    return `Israel Dare is a Chief Systems Architect, AI Automation Engineer, and Academic Researcher rated **Top Rated Plus on Upwork (Top 3% worldwide)**. After tragically losing his father and facing family adversity in his final university year at 22, he mastered computational architectures to support his family. He is also a self-taught classical multi-instrumentalist (Violin, Viola, Cello, Piano) and founder of the APEXIUM youth initiative.`
  }

  if (lower.includes('call') || lower.includes('meeting') || lower.includes('consult') || lower.includes('hire') || lower.includes('contact') || lower.includes('schedule') || lower.includes('book')) {
    return `You can schedule a direct 30-minute strategic consultation with Israel Dare via Calendly: **https://Calendly.com/izzy-marketing-hub/30min** or message him directly on WhatsApp at **+1 424 546 0129**.`
  }

  return `Israel Dare's office is ready to assist with high-concurrency systems, drone photogrammetry pipelines, custom AI SaaS development, or research collaborations. Would you like to schedule a strategy briefing via Calendly (https://Calendly.com/izzy-marketing-hub/30min) or chat directly via WhatsApp (+1 424 546 0129)?`
}

export async function POST(req: NextRequest) {
  try {
    const { messages, lead } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid messages payload' }, { status: 400 })
    }

    const latestUserMsg = messages[messages.length - 1]?.content || ''
    const kb = getKnowledgeBase()
    const leadContext = lead
      ? `\nClient Dossier:\n- Name: ${lead.name}\n- Business Email: ${lead.email}\n- Phone/WhatsApp: ${lead.phone || 'N/A'}\n- Primary Domain: ${lead.service}`
      : ''

    const systemPrompt = `You are the Executive Concierge for ISRAEL DARE — Chief Systems Architect, Spatial Intelligence & Drone Photogrammetry Researcher, and First-Class Agricultural Engineer.

Your tone is ultra-luxurious, intellectually formidable, articulate, confident, and restrained. You speak with high precision, elegance, and clarity.

Represent Israel's digital headquarters:
- Answer questions on his engineering builds (Edutech RAG, Roof Auto, MamaGuard, Oracle).
- Explain his research in autonomous UAV photogrammetry, 3D spatial digital twins, and Gaussian Process Regression (GPR).
- Detail service packages, pricing, and industry bundles when asked.
- Direct serious prospects to book a strategy call via Calendly (https://Calendly.com/izzy-marketing-hub/30min) or message via WhatsApp (+1 424 546 0129).

${leadContext}

KNOWLEDGE BASE & CREDENTIALS:
${kb}`

    // 1. Try OpenAI API if key exists
    if (process.env.OPENAI_API_KEY) {
      try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [{ role: 'system', content: systemPrompt }, ...messages],
            temperature: 0.7,
            max_tokens: 500,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const reply = data.choices?.[0]?.message?.content
          if (reply) return NextResponse.json({ reply })
        }
      } catch (e) {
        console.warn('OpenAI call failed, checking fallback...', e)
      }
    }

    // 2. Try Anthropic Claude API if key exists
    if (process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY) {
      try {
        const apiKey = process.env.ANTHROPIC_API_KEY || process.env.CLAUDE_API_KEY
        const response = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey!,
            'anthropic-version': '2023-06-01',
          },
          body: JSON.stringify({
            model: 'claude-3-5-sonnet-20241022',
            system: systemPrompt,
            messages: messages.map((m: any) => ({
              role: m.role === 'assistant' ? 'assistant' : 'user',
              content: m.content,
            })),
            max_tokens: 500,
          }),
        })

        if (response.ok) {
          const data = await response.json()
          const reply = data.content?.[0]?.text
          if (reply) return NextResponse.json({ reply })
        }
      } catch (e) {
        console.warn('Anthropic call failed, using fallback engine...', e)
      }
    }

    // 3. Guaranteed High-Quality Intelligent Fallback Engine
    const fallbackReply = generateFallbackResponse(latestUserMsg, lead)
    return NextResponse.json({ reply: fallbackReply })
  } catch (err) {
    console.error('Chat API Error:', err)
    return NextResponse.json(
      {
        reply:
          "Thank you for your message. Israel Dare's executive office has received your inquiry. You may book directly via Calendly at https://Calendly.com/izzy-marketing-hub/30min or message +1 424 546 0129.",
      },
      { status: 200 }
    )
  }
}
