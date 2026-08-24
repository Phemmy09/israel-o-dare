import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'israel@israeldare.com'

function esc(str: string): string {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY ?? 'placeholder')
  const FROM_ADDRESS = process.env.RESEND_FROM ?? 'Israel Dare <onboarding@resend.dev>'

  try {
    const { name, email, phone, service } = await req.json()

    if (!name || !email || !service) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const safeName = esc(name)
    const safeEmail = esc(email)
    const safePhone = esc(phone || 'Not provided')
    const safeService = esc(service)
    const year = new Date().getFullYear()

    // 1️⃣ Notify owner
    try {
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: OWNER_EMAIL,
        replyTo: email,
        subject: `New Concierge Lead: ${service} — ${name}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#070709;color:#f5f5f5;border:1px solid #27272a;border-radius:8px;overflow:hidden;">
            <div style="background:#000;border-bottom:1px solid #27272a;padding:24px 32px;">
              <h1 style="margin:0;font-size:18px;letter-spacing:0.15em;text-transform:uppercase;color:#fff;">ISRAEL DARE · CONCIERGE LEAD</h1>
            </div>
            <div style="padding:32px;">
              <p style="color:#a1a1aa;margin:0 0 24px;font-size:14px;">A new prospect has initialized a consultation session via the Executive Concierge widget.</p>
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr><td style="padding:10px 0;color:#71717a;width:140px;">Name</td><td style="padding:10px 0;color:#fff;font-weight:600;">${safeName}</td></tr>
                <tr><td style="padding:10px 0;color:#71717a;">Email</td><td style="padding:10px 0;"><a href="mailto:${safeEmail}" style="color:#ef4444;">${safeEmail}</a></td></tr>
                <tr><td style="padding:10px 0;color:#71717a;">Phone</td><td style="padding:10px 0;color:#fff;">${safePhone}</td></tr>
                <tr><td style="padding:10px 0;color:#71717a;">Focus Domain</td><td style="padding:10px 0;color:#ef4444;font-weight:600;">${safeService}</td></tr>
              </table>
              <div style="margin-top:24px;">
                <a href="mailto:${safeEmail}" style="display:inline-block;padding:12px 24px;background:#fff;color:#000;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Reply to ${safeName} ↗</a>
              </div>
            </div>
          </div>
        `,
      })
    } catch (err) {
      console.error('Chat-lead route — owner email failed:', err)
    }

    // 2️⃣ Auto-confirmation email to lead
    try {
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: `Executive Consultation Registered — Israel Dare Office ✅`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#070709;color:#f5f5f5;border:1px solid #27272a;border-radius:8px;overflow:hidden;">
            <div style="background:#000;border-bottom:1px solid #27272a;padding:24px 32px;">
              <h1 style="margin:0;font-size:16px;letter-spacing:0.2em;text-transform:uppercase;color:#fff;">
                ISRAEL DARE
              </h1>
              <p style="margin:4px 0 0;font-size:10px;color:#71717a;letter-spacing:0.15em;text-transform:uppercase;font-family:monospace;">
                SYSTEMS · SPATIAL IP · RESEARCH
              </p>
            </div>
            <div style="padding:32px;">
              <h2 style="color:#fff;margin:0 0 12px;font-size:20px;">Greetings ${safeName},</h2>
              <p style="color:#a1a1aa;line-height:1.7;margin:0 0 16px;font-size:14px;">
                Thank you for connecting with the office of <strong>Israel Dare</strong>. Your focus area (<strong>${safeService}</strong>) has been noted.
              </p>
              <p style="color:#a1a1aa;line-height:1.7;margin:0 0 24px;font-size:14px;">
                To lock in a 30-minute direct strategic briefing, you may book directly below or connect on WhatsApp.
              </p>
              <div style="display:flex;gap:12px;flex-wrap:wrap;">
                <a href="https://Calendly.com/izzy-marketing-hub/30min" style="display:inline-block;padding:12px 24px;background:#fff;color:#000;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Book Strategy Call 📅</a>
                <a href="https://wa.me/14245460129" style="display:inline-block;padding:12px 24px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">WhatsApp Hotline</a>
              </div>
            </div>
            <div style="padding:20px 32px;background:#000;border-top:1px solid #18181b;text-align:center;">
              <p style="margin:0 0 8px;color:#71717a;font-size:11px;font-family:monospace;">© ${year} ISRAEL DARE · izzy.marketing.hub@gmail.com</p>
            </div>
          </div>
        `,
      })
    } catch (err) {
      console.error('Chat-lead route — lead confirmation email failed:', err)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Chat lead API error:', err)
    return NextResponse.json({ error: 'Failed to record lead.' }, { status: 500 })
  }
}
