'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  Bot,
  Cpu,
  BarChart3,
  Mic,
  Workflow,
  MessageSquare,
  Star,
  ChevronRight,
  Play,
  Database,
  PhoneCall,
  ShieldCheck,
  Zap,
  CheckCircle,
  Target,
  TrendingUp,
} from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'AI Automation',
    description: 'Save hundreds of manual hours. We architect autonomous n8n, Make, and Zapier agentic workflows that connect your team\'s stack and scale operations.',
    href: '/services',
  },
  {
    icon: Bot,
    title: 'AI App Development',
    description: 'Custom SaaS platforms, web applications, and mobile apps built in Next.js/React and integrated with LLMs (GPT-4, Claude, Gemini).',
    href: '/services',
  },
  {
    icon: BarChart3,
    title: 'AI Consulting & Audits',
    description: 'Identify automation gaps in your operations, assess AI readiness, and receive a customized technical roadmap to optimize your business.',
    href: '/services',
  },
  {
    icon: MessageSquare,
    title: 'Digital Resources',
    description: 'Grab battle-tested templates, eBooks, and courses developed by Israel O. Dare to jumpstart your AI automation or agency business.',
    href: '/resources',
  },
]

const testimonials = [
  {
    id: 1,
    name: 'Timothy',
    role: 'AI Developer & Entrepreneur',
    content:
      "Working with Izzy was a FANTASTIC experience! His expertise in AI agents and automation systems truly shines through his meticulous code, detailed documentation, and PROACTIVE communication. Izzy consistently went above and beyond.",
  },
  {
    id: 2,
    name: 'Darryl',
    role: 'AI Marketing Strategist',
    content:
      "Izzy's expertise is truly unmatched. He tackled a problem that had been plaguing me for over a year and resolved it within just an hour! If you're looking for someone who delivers high-quality work quickly, get IZZY.",
  },
  {
    id: 3,
    name: 'DC Fawcett',
    role: 'CEO, Digital Mavericks Media',
    content:
      "Izzy overdelivered and gave me way more than I expected. I came in thinking I was just getting an AI appointment setter, but he set me up with way more than that. He took the time to make sure everything was customized to my needs.",
  },
  {
    id: 4,
    name: 'John Santangelo',
    role: 'CEO & Founder',
    content:
      "I've worked with many technical consultants, but Izzy stands out. He didn't just build a bot; he built a comprehensive system that actually understands our business logic. The ROI was evident within the first week of deployment.",
  },
  {
    id: 5,
    name: 'Fredrick Bahr',
    role: 'Principal, Sunrun Energy Partner',
    content:
      "Our lead handling process was manual and slow before Izzy stepped in. He implemented an AI workflow that qualifies leads instantly and schedules appointments without human intervention. Massive uptick in conversion rates.",
  },
  {
    id: 6,
    name: 'Tony Flores',
    role: 'Founder, One Nation Energy',
    content:
      "Technical mastery combined with strategic vision. Izzy helped us automate our client onboarding and support systems. The result is a smoother customer experience and significantly less administrative overhead.",
  },
]

const stats = [
  { value: '$300K+', label: 'Solar Panel Sales (60 Days)' },
  { value: '900+', label: 'Automated Bookings (4 Months)' },
  { value: '500K+', label: 'Followers Grown (30 Days)' },
  { value: '68%', label: 'Support Load Saved (2 Schools)' },
]

const caseStudies = [
  {
    id: 'voice-receptionist',
    title: 'Twilio AI Voice Receptionist',
    category: 'AI Agents & Voice',
    techStack: ['n8n', 'FastAPI', 'OpenAI API', 'Twilio'],
    problem: 'High-volume services business losing hot inbound leads to voicemail or delayed follow-ups after hours.',
    solution: 'Built a centralized n8n webhook routing engine combined with FastAPI that dynamically screens calls. Integrates OpenAI structured outputs to extract names, emails, and schedule intents from live transcripts in real-time, instantly syncing them to GoHighLevel CRM.',
    impact: 'Reduced lead loss to zero, booking 43 additional consultation calls in the first month without human intervention.',
    proofUrl: 'https://screenrec.com/share/cvVtKorgFz',
    icon: PhoneCall,
  },
  {
    id: 'reservation-engine',
    title: 'Vapi Reservation Booking Engine',
    category: 'AI Agents & Voice',
    techStack: ['Vapi', 'Airtable', 'FastAPI', 'Make.com'],
    problem: 'Manual room and table management is prone to double-bookings, missed reservations, and staff overhead.',
    solution: 'Constructed an intelligent voice booking agent that parses calendar slot structures in real-time. Automatically checks capacity limits and syncs reservation details instantly to Airtable.',
    impact: 'Handled over 900+ bookings automatically in 4 months on full autopilot with 100% database accuracy.',
    proofUrl: 'https://screenrec.com/share/5QSMJVrEZA',
    icon: Mic,
  },
  {
    id: 'rag-pm',
    title: 'Conversational Project Manager (RAG)',
    category: 'Knowledge Base (RAG)',
    techStack: ['ElevenLabs', 'Pinecone Vector DB', 'OpenAI Embeddings', 'Next.js'],
    problem: 'On-site engineers wasting hours searching through hundreds of pages of project blueprint documents and historical logs.',
    solution: 'Designed a high-speed Conversational AI agent with a long-term "company memory". Integrated Pinecone Vector DB with OpenAI Embeddings, enabling the voice agent to perform sub-second document retrieval and speak the answer. Supports speech interruption and mid-flow redirections.',
    impact: 'Saved engineers an average of 4.5 hours per week of manual document searching, reducing lookup errors by 92%.',
    proofUrl: 'https://screenrec.com/share/dJAiU96XWY',
    icon: Database,
  },
  {
    id: 'ai-sdr-outreach',
    title: 'AI SDR Prospecting & Lead Scraper',
    category: 'Lead Gen & Outbound',
    techStack: ['Apollo.io', 'Hunter.io', 'n8n', 'Make.com'],
    problem: 'Sales teams wasting extensive hours manual searching and copy-pasting client databases and writing hyper-personalized emails.',
    solution: 'Constructed automated workflow pipelines integrating Apollo & Hunter APIs with custom LLM copywriting models to scrape target lists, verify deliverability, and trigger custom sequences.',
    impact: 'Generated 90+ qualified strategy call appointments in 4 months with 0 manual email drafting.',
    proofUrl: 'https://screenrec.com/share/JgRaclO61U',
    icon: Target,
  },
  {
    id: 'ghl-crm-automation',
    title: 'GoHighLevel CRM Lead Pipelines',
    category: 'Lead Gen & Outbound',
    techStack: ['GoHighLevel', 'Make.com', 'Slack', 'Zapier'],
    problem: 'Lead leakage and delayed response times because of manual data entry between lead generation ads and CRM systems.',
    solution: 'Designed a multi-app automation sync that instantly routes incoming Facebook/Google leads, triggers SMS/email follow-ups, and notifies the team via Slack.',
    impact: 'Dropped response time to under 90 seconds, securing over $300K in client pipeline value.',
    proofUrl: 'https://screenrec.com/share/zQP9pHAYLE',
    icon: Zap,
  },
  {
    id: 'social-media-automation',
    title: 'Viral Content Automation Engine',
    category: 'Social Media & Branding',
    techStack: ['Make.com', 'OpenAI API', 'TikTok API', 'Instagram API'],
    problem: 'Manually scripting, editing, scheduling, and publishing content across multiple social platforms daily slows growth.',
    solution: 'Built an autonomous content repurposing system that drafts hooks, optimizes captions for SEO, generates video frames, and schedules updates.',
    impact: 'Grew client accounts by 500,000+ organic followers in just 30 days on full autopilot.',
    proofUrl: 'https://screenrec.com/share/CKi2eDz03I',
    icon: TrendingUp,
  },
  {
    id: 'customer-support-reducer',
    title: 'Academic Admissions Support Bot',
    category: 'Smart Chatbots',
    techStack: ['n8n', 'Supabase', 'OpenAI Assistant API', 'WhatsApp'],
    problem: 'Admissions staff at Babcock and ABU overwhelmed during peak enrollment seasons with thousands of repeated user queries.',
    solution: 'Architected a WhatsApp-based Q&A chatbot backed by a Supabase vector database containing institutional procedures, tuition fees, and admission criteria.',
    impact: 'Reduced inbound support desks load by 68% for two universities while resolving user inquiries in under 5 seconds.',
    proofUrl: 'https://screenrec.com/share/l9Sdm7zr0t',
    icon: MessageSquare,
  },
  {
    id: 'lead-hygiene',
    title: 'Automated Lead & Phone Validator',
    category: 'Lead Hygiene & Security',
    techStack: ['n8n', 'APIs', 'GoHighLevel CRM', 'Python'],
    problem: 'Wasting significant marketing budget sending SMS/calls to invalid, VOIP, or fake landline phone numbers submitted in lead funnels.',
    solution: 'Architected a multi-branch validation engine that intercepts leads post-submission. Runs deep carrier lookups to sort numbers into Mobile, Landline, VOIP, or Suspicious/Fake. VOIP and invalid numbers are flagged, and "Bot Clickers" are auto-marked DND in GoHighLevel.',
    impact: 'Saved over 35% on SMS marketing costs and secured client email sender domains from spam blacklisting.',
    proofUrl: 'https://screenrec.com/share/RZNmPoLzX4',
    icon: ShieldCheck,
  },
  {
    id: 'knowledge-curator',
    title: 'Enterprise Document Vector Curator',
    category: 'Knowledge Base (RAG)',
    techStack: ['Supabase', 'FastAPI', 'Next.js', 'pgvector'],
    problem: 'Operational manuals, legal databases, and reference logs spread across isolated drives, causing delayed search speeds.',
    solution: 'Developed a central database search application that chunks, indexes, and vectorizes files using pgvector, enabling semantic natural language Q&A.',
    impact: 'Enabled sub-second Q&A over 5,000+ pages of reference material with precise source citations.',
    proofUrl: 'https://screenrec.com/share/BhbqrHie5x',
    icon: Database,
  },
]

export default function HomePage() {
  const [activeCase, setActiveCase] = useState(caseStudies[0].id)
  const activeData = caseStudies.find((c) => c.id === activeCase) || caseStudies[0]

  return (
    <div className="relative min-h-screen grid-bg overflow-hidden">
      {/* Background blobs */}
      <div className="glow-blob top-[20%] left-[10%]" />
      <div className="glow-blob top-[60%] right-[5%]" />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-900/60 border border-neutral-800 rounded-full text-red-400 text-xs font-semibold uppercase tracking-wider mb-8 shadow-md">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Empowering Global Businesses With Autonomous AI
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-tight">
            Scalable AI Systems.<br />
            <span className="gradient-text">
              Custom App Development.
            </span>
          </h1>

          <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We build intelligent infrastructures that automate repetitive tasks, qualify leads, and drive revenue.
            Led by Principal Consultant <span className="text-white font-semibold underline decoration-red-500 decoration-2">Israel O. Dare</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services" className="btn-primary flex items-center justify-center gap-2 group">
              Explore Our Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://Calendly.com/izzy-marketing-hub/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Book Strategy Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {stats.map((s) => (
              <div key={s.value} className="p-6 glass-panel rounded-2xl text-center card-hover border border-neutral-800/60">
                <p className="text-3xl font-black text-white">{s.value}</p>
                <p className="text-neutral-500 text-xs uppercase tracking-wider mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Services */}
      <section className="py-24 px-4 border-t border-neutral-900/80 relative bg-neutral-950/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Enterprise Capability</p>
            <h2 className="section-heading mb-4">Core AI Infrastructure</h2>
            <p className="section-sub max-w-2xl mx-auto">
              We transition your business from manual operational chaos into an automated, highly-scalable revenue engine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map(({ icon: Icon, title, description, href }) => (
              <Link
                key={title}
                href={href}
                className="group p-8 glass-panel border border-neutral-800/60 rounded-2xl card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 tracking-wide">{title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed font-light">{description}</p>
                </div>
                <div className="mt-8 flex items-center gap-1.5 text-red-400 text-xs font-bold uppercase tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                  Learn more <ChevronRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Showcase */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Engineering Showcase</p>
            <h2 className="section-heading mb-4">Detailed Case Studies</h2>
            <p className="section-sub max-w-xl mx-auto">
              Inspect the exact logic, tech stacks, and metrics of AI systems we have built and deployed for clients.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Tabs selector */}
            <div className="flex flex-row overflow-x-auto lg:flex-col lg:overflow-visible gap-3 pb-4 lg:pb-0 scrollbar-none snap-x shrink-0">
              {caseStudies.map((cs) => {
                const isSelected = activeCase === cs.id
                const CS_Icon = cs.icon
                return (
                  <button
                    key={cs.id}
                    onClick={() => setActiveCase(cs.id)}
                    className={`flex items-center gap-4 p-4 text-left rounded-2xl border snap-start min-w-[280px] lg:min-w-0 transition-all duration-300 ${
                      isSelected
                        ? 'bg-neutral-900 border-red-500/30 shadow-[0_0_20px_rgba(239,68,68,0.1)]'
                        : 'bg-neutral-950/50 border-neutral-900 hover:border-neutral-800'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${isSelected ? 'bg-red-600 text-white' : 'bg-neutral-900 text-neutral-400'}`}>
                      <CS_Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-wider font-semibold ${isSelected ? 'text-red-400' : 'text-neutral-500'}`}>{cs.category}</p>
                      <p className="text-xs font-extrabold text-white mt-0.5 leading-snug">{cs.title}</p>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Selected Tab Content Detail */}
            <div className="lg:col-span-2 glass-panel border border-neutral-800/80 rounded-3xl p-8 sm:p-10 shadow-glow relative overflow-hidden">
              <div className="absolute top-0 right-0 px-5 py-2 bg-red-950/20 border-b border-l border-red-500/20 rounded-bl-xl text-red-400 text-xs font-semibold">
                Client Architecture
              </div>
              <h3 className="text-2xl font-black text-white mb-2">{activeData.title}</h3>
              <p className="text-red-500 text-xs font-bold uppercase tracking-wider mb-6">{activeData.category}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeData.techStack.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-neutral-900/80 border border-neutral-800 rounded-lg text-neutral-400 text-xs font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div className="p-4 bg-neutral-950/60 border border-neutral-900/80 rounded-2xl">
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-2">The Bottleneck</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">{activeData.problem}</p>
                </div>

                <div className="p-4 bg-neutral-950/60 border border-neutral-900/80 rounded-2xl">
                  <h4 className="text-xs uppercase tracking-widest font-extrabold text-neutral-400 mb-2">The AI Solution</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed font-light">{activeData.solution}</p>
                </div>

                <div className="p-5 bg-red-950/10 border border-red-500/10 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 flex-shrink-0">
                      <Zap className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest font-extrabold text-red-400 mb-1">Measured Business Impact</h4>
                      <p className="text-neutral-200 text-sm font-bold leading-relaxed">{activeData.impact}</p>
                    </div>
                  </div>
                  {activeData.proofUrl && (
                    <a
                      href={activeData.proofUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs px-4 py-2 border border-red-500/35 text-white rounded-xl hover:bg-red-500/15 flex items-center gap-1.5 shrink-0 self-start sm:self-auto transition-all duration-300"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" /> Watch Walkthrough
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Spotlight & Video */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-neutral-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 rounded-3xl blur-[30px] opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl">
                <Image
                  src="/izzy_pose.jpg"
                  alt="Israel O. Dare"
                  fill
                  className="object-cover object-top filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass-panel text-white px-6 py-4 rounded-2xl shadow-xl border border-red-500/20">
                <p className="text-2xl font-black text-red-500">$2,000,000+</p>
                <p className="text-neutral-400 text-xs font-semibold uppercase tracking-wider">Client Revenue Recovered</p>
              </div>
            </div>

            <div>
              <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Meet The Founder</p>
              <h2 className="section-heading mb-6">Engineering Business Growth</h2>
              <blockquote className="text-neutral-200 text-lg font-light leading-relaxed mb-6 border-l-4 border-red-500 pl-6 italic">
                "We don't just write code; we solve business problems. My mission is to help companies leverage
                the full power of Artificial Intelligence to automate mundane tasks, generate qualified leads,
                and build scalable software solutions."
              </blockquote>
              <p className="text-neutral-400 text-sm md:text-base mb-8 leading-relaxed font-light">
                Israel O. Dare is a Tech Lead and AI Automation Specialist who helps businesses transition into the AI era. Combining engineering discipline with modern automation stack mastery, he constructs scalable systems that drive organic business efficiency.
              </p>
              <Link href="/about" className="btn-primary inline-flex items-center gap-2 group">
                Read His Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Explainer Video */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Capability Explainer</p>
          <h2 className="section-heading mb-4">See What We Can Do</h2>
          <p className="section-sub max-w-xl mx-auto mb-10">
            Watch Israel break down exactly how custom AI agents and workflows function and how they apply to business growth.
          </p>

          <div className="relative aspect-video rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800/80 shadow-2xl group cursor-pointer shadow-red-950/10">
            <video
              src="/about_me.mp4"
              controls
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-neutral-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Verified Experience</p>
            <h2 className="section-heading mb-4">Client Success Stories</h2>
            <p className="section-sub max-w-xl mx-auto">
              Read what clients say about working with Israel O. Dare on n8n automation and custom software integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="group p-8 glass-panel border border-neutral-800/60 rounded-2xl card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                    ))}
                  </div>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-8 font-light italic">"{t.content}"</p>
                </div>
                <div className="flex items-center gap-3 border-t border-neutral-900 pt-4">
                  <div className="w-10 h-10 rounded-xl bg-red-950/40 border border-red-500/20 flex items-center justify-center text-red-500 font-extrabold text-sm shadow-inner">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-sm tracking-wide">{t.name}</p>
                    <p className="text-neutral-500 text-xs font-medium uppercase tracking-wider">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="py-24 px-4 border-t border-neutral-900/80 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="bg-gradient-to-br from-neutral-900/60 to-neutral-950/80 border border-neutral-800/80 rounded-3xl p-12 shadow-glow-lg">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Ready to Scale with AI?</h2>
            <p className="text-neutral-400 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
              Book a strategy call. Let's identify the manual bottlenecks in your pipeline and build an automated solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://Calendly.com/izzy-marketing-hub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center justify-center gap-2 group"
              >
                Book a Free Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/resources" className="btn-secondary inline-flex items-center justify-center gap-2">
                Browse Blueprints
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
