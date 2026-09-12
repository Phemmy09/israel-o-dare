import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'israel@israeldare.com'
const OWNER_WHATSAPP = '+14245460129'

function esc(str: string): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  try {
    const { lead, messages, summary, leadScore } = await req.json()

    const name = lead?.name || 'Anonymous Visitor'
    const email = lead?.email || 'Not provided'
    const phone = lead?.phone || 'Not provided'
    const company = lead?.company || 'Not specified'
    const interest = lead?.interest || 'General Systems Advisory'
    const score = leadScore || 'Warm Prospect'

    const userAgent = req.headers.get('user-agent') || 'Unknown device'
    const ip = req.headers.get('x-forwarded-for') || 'Direct IP'
    const timestamp = new Date().toUTCString()

    // Format transcript
    const transcriptHtml = Array.isArray(messages)
      ? messages
          .map((m: any) => {
            const isUser = m.role === 'user'
            return `
              <div style="margin-bottom: 12px; padding: 10px 14px; border-radius: 6px; background: ${
                isUser ? '#1a1a24' : '#0d0d12'
              }; border-left: 3px solid ${isUser ? '#ef4444' : '#d4af37'};">
                <strong style="color: ${isUser ? '#f87171' : '#facc15'}; font-size: 11px; text-transform: uppercase;">${
                  isUser ? 'Visitor' : 'Executive Agent'
                }:</strong>
                <p style="margin: 4px 0 0; color: #e4e4e7; font-size: 13px; line-height: 1.5;">${esc(
                  m.content || ''
                )}</p>
              </div>
            `
          })
          .join('')
      : '<p style="color:#71717a;">No messages recorded.</p>'

    const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder')
    const fromAddress = process.env.RESEND_FROM || 'Israel Dare Concierge <onboarding@resend.dev>'

    // 1. Send Email Dossier to Israel Dare
    try {
      await resend.emails.send({
        from: fromAddress,
        to: OWNER_EMAIL,
        replyTo: email !== 'Not provided' ? email : undefined,
        subject: `🔥 [Lead Alert] ${name} chatted on israeldare.com (${score})`,
        html: `
          <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 650px; margin: 0 auto; background: #060609; color: #f4f4f5; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden;">
            <div style="background: linear-gradient(135deg, #1e050b 0%, #060609 100%); padding: 24px 32px; border-bottom: 1px solid rgba(225,29,72,0.3);">
              <span style="font-family: monospace; font-size: 11px; text-transform: uppercase; letter-spacing: 0.2em; color: #fb7185;">Executive Support Agent · Dossier</span>
              <h1 style="margin: 8px 0 0; font-size: 22px; color: #fff; font-weight: 600;">New Conversation Completed</h1>
              <p style="margin: 4px 0 0; color: #a1a1aa; font-size: 12px; font-family: monospace;">Time: ${timestamp} | Score: ${esc(score)}</p>
            </div>

            <div style="padding: 28px 32px;">
              <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; color: #d4af37; margin: 0 0 16px;">Visitor Profile</h2>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
                <tr><td style="padding: 8px 0; color: #71717a; width: 140px;">Name</td><td style="padding: 8px 0; color: #fff; font-weight: 600;">${esc(name)}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Email</td><td style="padding: 8px 0;"><a href="mailto:${esc(email)}" style="color: #fb7185; text-decoration: none;">${esc(email)}</a></td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Phone / WhatsApp</td><td style="padding: 8px 0; color: #fff;">${esc(phone)}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Company / Niche</td><td style="padding: 8px 0; color: #fff;">${esc(company)}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Interest / Package</td><td style="padding: 8px 0; color: #d4af37; font-weight: 600;">${esc(interest)}</td></tr>
                <tr><td style="padding: 8px 0; color: #71717a;">Visitor IP & Device</td><td style="padding: 8px 0; color: #a1a1aa; font-family: monospace; font-size: 11px;">${esc(ip)} · ${esc(userAgent)}</td></tr>
              </table>

              ${summary ? `
                <div style="background: rgba(225,29,72,0.1); border: 1px solid rgba(225,29,72,0.3); padding: 16px; border-radius: 6px; margin-bottom: 24px;">
                  <strong style="color: #fb7185; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; display: block; margin-bottom: 6px;">AI Strategic Summary & Next Steps</strong>
                  <p style="margin: 0; color: #f4f4f5; font-size: 13px; line-height: 1.5;">${esc(summary)}</p>
                </div>
              ` : ''}

              <h2 style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.15em; color: #d4af37; margin: 24px 0 16px;">Complete Chat Transcript</h2>
              <div style="max-height: 380px; overflow-y: auto; padding: 12px; background: #020203; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px;">
                ${transcriptHtml}
              </div>

              <div style="margin-top: 28px; display: flex; gap: 12px;">
                ${email !== 'Not provided' ? `<a href="mailto:${esc(email)}" style="display: inline-block; padding: 12px 20px; background: #e11d48; color: #fff; text-decoration: none; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 4px;">Reply to Prospect ↗</a>` : ''}
                ${phone !== 'Not provided' ? `<a href="https://wa.me/${phone.replace(/[^0-9]/g, '')}" style="display: inline-block; padding: 12px 20px; background: #22c55e; color: #fff; text-decoration: none; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 4px;">WhatsApp Prospect</a>` : ''}
              </div>
            </div>
          </div>
        `,
      })
    } catch (emailErr) {
      console.error('Failed to send summary email:', emailErr)
    }

    // 2. Dispatch Webhook to n8n (which pings WhatsApp +14245460129)
    const webhookUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'chat_completed',
            ownerWhatsApp: OWNER_WHATSAPP,
            visitor: { name, email, phone, company, interest, score },
            summary: summary || 'Visitor engaged with AI support concierge.',
            messagesCount: Array.isArray(messages) ? messages.length : 0,
            timestamp,
          }),
        })
      } catch (webhookErr) {
        console.warn('n8n webhook dispatch warning:', webhookErr)
      }
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Chat summary API error:', err)
    return NextResponse.json({ error: 'Failed to record chat summary' }, { status: 500 })
  }
}
