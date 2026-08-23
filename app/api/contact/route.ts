import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const OWNER_EMAIL = 'izzy.marketing.hub@gmail.com'

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
    const body = await req.json()
    const { firstName, lastName, email, phone, service, message } = body

    if (!firstName || !lastName || !email || !service || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 })
    }

    const fullName = esc(`${firstName} ${lastName}`)
    const safeFirst = esc(firstName)
    const safeEmail = esc(email)
    const safePhone = esc(phone || 'Not provided')
    const safeService = esc(service)
    const safeMessage = esc(message)
    const year = new Date().getFullYear()

    const ownerEmailErrors: unknown[] = []
    const leadEmailErrors: unknown[] = []

    // 1️⃣ Notify owner
    try {
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: OWNER_EMAIL,
        replyTo: email,
        subject: `New Executive Inquiry: ${service} — ${firstName} ${lastName}`,
        html: `
          <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#070709;color:#f5f5f5;border:1px solid #27272a;border-radius:8px;overflow:hidden;">
            <div style="background:#000;border-bottom:1px solid #27272a;padding:24px 32px;">
              <h1 style="margin:0;font-size:18px;letter-spacing:0.15em;text-transform:uppercase;color:#fff;">ISRAEL DARE · EXECUTIVE INQUIRY</h1>
            </div>
            <div style="padding:32px;">
              <table style="width:100%;border-collapse:collapse;font-size:14px;">
                <tr><td style="padding:10px 0;color:#71717a;width:140px;">Client Name</td><td style="padding:10px 0;color:#fff;font-weight:600;">${fullName}</td></tr>
                <tr><td style="padding:10px 0;color:#71717a;">Business Email</td><td style="padding:10px 0;"><a href="mailto:${safeEmail}" style="color:#ef4444;">${safeEmail}</a></td></tr>
                <tr><td style="padding:10px 0;color:#71717a;">Phone / WhatsApp</td><td style="padding:10px 0;color:#fff;">${safePhone}</td></tr>
                <tr><td style="padding:10px 0;color:#71717a;">Focus Domain</td><td style="padding:10px 0;color:#ef4444;font-weight:600;">${safeService}</td></tr>
              </table>
              <div style="margin-top:24px;padding:20px;background:#121217;border-left:2px solid #dc2626;">
                <p style="margin:0 0 8px;color:#71717a;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-family:monospace;">Project Brief</p>
                <p style="margin:0;color:#e4e4e7;line-height:1.6;font-size:14px;">${safeMessage.replace(/\n/g, '<br>')}</p>
              </div>
              <div style="margin-top:24px;">
                <a href="mailto:${safeEmail}" style="display:inline-block;padding:12px 24px;background:#fff;color:#000;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Reply to ${safeFirst} ↗</a>
              </div>
            </div>
          </div>
        `,
      })
    } catch (err) {
      ownerEmailErrors.push(err)
      console.error('Contact route — owner email failed:', err)
    }

    // 2️⃣ Auto-reply confirmation to lead
    try {
      await resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: `Inquiry Registered — Israel Dare Office ✅`,
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
              <h2 style="color:#fff;margin:0 0 12px;font-size:20px;">Greetings ${safeFirst},</h2>
              <p style="color:#a1a1aa;line-height:1.7;margin:0 0 16px;font-size:14px;">
                Thank you for reaching out to the office of <strong>Israel Dare</strong>. Your inquiry regarding
                <strong style="color:#ef4444;">${safeService}</strong> has been registered.
              </p>
              <p style="color:#a1a1aa;line-height:1.7;margin:0 0 24px;font-size:14px;">
                Our typical executive response time is <strong style="color:#fff;">within 24 hours</strong>.
                For urgent contracts or retainers, you may also reach out via WhatsApp at +1 424 546 0129.
              </p>
              <div style="background:#121217;border-left:2px solid #dc2626;padding:20px;margin-bottom:24px;">
                <p style="margin:0 0 8px;color:#71717a;font-size:11px;text-transform:uppercase;letter-spacing:0.1em;font-family:monospace;">Brief Summary</p>
                <p style="margin:0;color:#e4e4e7;font-style:italic;line-height:1.6;font-size:13px;">"${safeMessage.slice(0, 200)}${safeMessage.length > 200 ? '...' : ''}"</p>
              </div>
              <div style="display:flex;gap:12px;flex-wrap:wrap;">
                <a href="https://wa.me/14245460129" style="display:inline-block;padding:12px 24px;background:#16a34a;color:#fff;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Chat on WhatsApp</a>
                <a href="https://Calendly.com/izzy-marketing-hub/30min" style="display:inline-block;padding:12px 24px;background:#fff;color:#000;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:0.1em;text-transform:uppercase;">Book Strategy Call 📅</a>
              </div>
            </div>
            <div style="padding:20px 32px;background:#000;border-top:1px solid #18181b;text-align:center;">
              <p style="margin:0 0 8px;color:#71717a;font-size:11px;font-family:monospace;">© ${year} ISRAEL DARE · izzy.marketing.hub@gmail.com</p>
            </div>
          </div>
        `,
      })
    } catch (err) {
      leadEmailErrors.push(err)
      console.error('Contact route — lead confirmation email failed:', err)
    }

    if (ownerEmailErrors.length && leadEmailErrors.length) {
      return NextResponse.json({ error: 'Failed to send emails. Please contact directly on WhatsApp.' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
