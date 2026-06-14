import type { Metadata } from 'next'
import { Mail, Phone, MessageCircle, Clock } from 'lucide-react'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact Israel O. Dare',
  description:
    'Get in touch with Israel O. Dare for professional AI consulting, custom systems engineering contracts, or research collaborations.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-black pt-24 pb-12 px-4 border-b border-neutral-900">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-brand-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Let's Build Something
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-neutral-400 text-lg">
            Connect with Israel for contract jobs, partnerships, scholarships, or AI consulting.
            Fill out the form below or reach out via our direct channels.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Left — contact info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Email */}
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-900/50 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email Us</h3>
                  <a
                    href="mailto:izzy.marketing.hub@gmail.com"
                    className="text-neutral-400 hover:text-brand-400 text-sm transition-colors block"
                  >
                    izzy.marketing.hub@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="p-6 bg-neutral-900 border border-neutral-800 rounded-xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-900/50 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-brand-400" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Phone / WhatsApp</h3>
                  <a
                    href="tel:+14245460129"
                    className="text-neutral-400 hover:text-brand-400 text-sm transition-colors block"
                  >
                    +1 424 546 0129
                  </a>
                  <p className="text-neutral-600 text-xs mt-1">Available Mon–Fri, 9am – 5pm WAT</p>
                </div>
              </div>
            </div>

            {/* WhatsApp direct */}
            <a
              href="https://wa.me/14245460129"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-5 bg-green-900/20 border border-green-800/40 rounded-xl hover:border-green-600/60 transition-all group"
            >
              <div className="w-10 h-10 bg-green-900/50 rounded-lg flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Chat on WhatsApp</p>
                <p className="text-neutral-500 text-xs">Fastest response — usually under 1 hour</p>
              </div>
            </a>

            {/* Response time */}
            <div className="p-5 bg-neutral-900/50 border border-neutral-800 rounded-xl flex items-start gap-3">
              <Clock className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-semibold text-sm mb-1">Response Time</p>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  Form submissions are typically answered within 24 hours on business days.
                  WhatsApp is fastest for urgent matters.
                </p>
              </div>
            </div>

            {/* Social Links Panel */}
            <div className="p-5 bg-neutral-900/30 border border-neutral-800/80 rounded-xl">
              <p className="text-white font-semibold text-sm mb-3">Connect Globally</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/israel-dare-31a11318a', color: 'hover:text-blue-400 hover:border-blue-400/40' },
                  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~010297ccb4983d90e7', color: 'hover:text-green-400 hover:border-green-400/40' },
                  { label: 'X / Twitter', href: 'https://x.com/izzy_automation', color: 'hover:text-neutral-200 hover:border-neutral-400/40' },
                  { label: 'Instagram', href: 'https://www.instagram.com/izzyautomation/', color: 'hover:text-pink-400 hover:border-pink-400/40' },
                  { label: 'TikTok', href: 'https://www.tiktok.com/@mail_izzy?_r=1&_t=ZN-92X156ksQti', color: 'hover:text-rose-400 hover:border-rose-400/40' },
                  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?viewas=100000686899395&id=61557767143485', color: 'hover:text-blue-500 hover:border-blue-500/40' }
                ].map(({ label, href, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-3 py-1.5 bg-neutral-950 border border-neutral-800 rounded-lg text-neutral-400 text-xs transition-all duration-300 ${color}`}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
