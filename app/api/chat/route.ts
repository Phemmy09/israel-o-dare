import { readFileSync } from 'fs'
import { join } from 'path'
import { NextRequest } from 'next/server'

function getKnowledgeBase(): string {
  try {
    return readFileSync(join(process.cwd(), 'lib/chatbot-knowledge.md'), 'utf-8')
  } catch {
    return ''
  }
}

export async function POST(req: NextRequest) {
  try {
    const { messages, lead } = await req.json()

    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: 'Invalid messages' }), { status: 400 })
    }

    const kb = getKnowledgeBase()
    const leadContext = lead
      ? `\n\nYou are currently chatting with:\n- Name: ${lead.name}\n- Email: ${lead.email}\n- Phone: ${lead.phone || 'Not provided'}\n- Service Interest: ${lead.service}`
      : ''

    const systemPrompt = `You are Izzy, the friendly AI assistant for Izzytechub — an AI automation and consulting agency led by Israel O. Dare. Your job is to help visitors learn about Izzytechub's services, answer questions, and guide them toward booking a consultation.

Keep responses concise (2–4 sentences max unless a detailed answer is needed). Be warm, professional, and helpful. Always encourage prospects to reach out via WhatsApp (+1 424 546 0129) or the contact form for specific project inquiries.

Never make up pricing, timelines, or guarantees beyond what's in the knowledge base.${leadContext}

--- KNOWLEDGE BASE ---
${kb}`

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    })

    if (!response.ok) {
      const errText = await response.text()
      throw new Error(`OpenAI API error: ${response.statusText} - ${errText}`)
    }

    const encoder = new TextEncoder()
    const readable = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader()
        if (!reader) {
          controller.close()
          return
        }

        const decoder = new TextDecoder()
        let buffer = ''

        try {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            buffer += decoder.decode(value, { stream: true })
            const lines = buffer.split('\n')
            buffer = lines.pop() || ''

            for (const line of lines) {
              const cleaned = line.trim()
              if (!cleaned || cleaned === 'data: [DONE]') continue
              if (cleaned.startsWith('data: ')) {
                try {
                  const parsed = JSON.parse(cleaned.slice(6))
                  const content = parsed.choices?.[0]?.delta?.content
                  if (content) {
                    controller.enqueue(
                      encoder.encode(`data: ${JSON.stringify({ text: content })}\n\n`)
                    )
                  }
                } catch {
                  // Skip invalid JSON chunks
                }
              }
            }
          }
          controller.enqueue(encoder.encode('data: [DONE]\n\n'))
          controller.close()
        } catch (err) {
          controller.error(err)
        }
      },
    })

    return new Response(readable, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (err) {
    console.error('Chat API error:', err)
    return new Response(JSON.stringify({ error: 'Failed to process request' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
