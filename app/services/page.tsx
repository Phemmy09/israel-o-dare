import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Bot,
  Target,
  BarChart3,
  Mic,
  Workflow,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Calendar,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Services & Solutions',
  description:
    'From voice booking agents to lead validation, n8n workflows, and custom LLM app development. We build the automation engine for your business.',
}

const services = [
  {
    icon: Bot,
    title: 'AI App Development',
    description:
      'We build full-stack custom SaaS, web applications, and internal AI portals integrated with LLMs (GPT-4, Claude, Gemini). We construct custom dashboards and utilize PostgreSQL pgvector database indexations.',
    features: [
      'Next.js & React App Architectures',
      'Vector Databases & pgvector indexation',
      'Custom AI admin portals & dashboards',
      'Secure serverless FastAPI API structures',
    ],
    highlight: 'RAG & Custom SaaS models',
  },
  {
    icon: Target,
    title: 'AI Lead Generation & SDRs',
    description:
      'Automated scraper and outbound nurturing engines. Our SDR pipelines scrape directories, clean contact data, write hyper-personalized outreach, and qualify targets.',
    features: [
      'Automated lead scraping & enrichment',
      'GoHighLevel & CRM synchronization',
      'AI email copywriters & sequencers',
      'Auto-booking & routing integration',
    ],
    highlight: '$300K+ solar panels sold in 60d',
  },
  {
    icon: Mic,
    title: 'AI Voice Receptionists',
    description:
      'Deploy human-like, low-latency conversational voice agents (Vapi, Retell AI, Elevenlabs) to handle customer support, inbound calendar bookings, and outbound cold calls 24/7.',
    features: [
      'Human-like low-latency conversational AI',
      'Sub-second retrieval & speech interruptions',
      'Airtable & Google Calendar live sync',
      'Inbound support & outbound sales calls',
    ],
    highlight: '900+ bookings in 4m autopilot',
  },
  {
    icon: MessageSquare,
    title: 'Support & RAG Chatbots',
    description:
      'Retrieval-Augmented Generation chatbots trained on your company manuals, docs, and PDFs to answer support queries instantly on websites and WhatsApp.',
    features: [
      'Trained on custom vector knowledge bases',
      'WhatsApp, Slack, and web widgets',
      'Interactive support ticket creation APIs',
      'Automatic lead captures & hand-offs',
    ],
    highlight: 'Support loads reduced by 68%',
  },
  {
    icon: Workflow,
    title: 'n8n & Workflow Automation',
    description:
      'Connect your tech stack (Zapier, n8n, Make, Slack, CRM) to automate repetitive data entry, file management, and reporting operations.',
    features: [
      'Custom n8n and Make API connectors',
      'Cross-app database synchronizations',
      'Automated invoicing & onboarding flows',
      'Repetitive task elimination (70% savings)',
    ],
    highlight: 'Clean, enterprise-grade workflows',
  },
  {
    icon: BarChart3,
    title: 'AI Consulting & Audits',
    description:
      'A top-to-bottom process review. We audit your workflows, identify operational bottlenecks, and provide a detailed implementation roadmap for adoption.',
    features: [
      'Operational bottleneck assessments',
      'Custom n8n/Python feasibility roadmap',
      'ROI predictions & tool selections',
      'Human-in-the-loop audit safety protocols',
    ],
    highlight: 'Strategy & technical roadmaps',
  },
]

const processSteps = [
  { step: '01', title: 'Consultation Call', desc: 'Identify bottlenecks and clarify goals in a 30-minute strategy discussion.' },
  { step: '02', title: 'Technical Proposal', desc: 'Receive a customized workflow roadmap detailing the n8n logic, tech stack, and cost.' },
  { step: '03', title: 'Build & Deploy', desc: 'We build the code, vector indexings, and connections with complete documentation.' },
  { step: '04', title: 'Monitor & Scale', desc: 'Continuous updates, integrations, and optimizations to secure deliverability.' },
]

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      <div className="glow-blob top-[15%] right-[15%]" />
      <div className="glow-blob top-[60%] left-[10%]" />

      {/* Hero */}
      <section className="bg-black/40 pt-20 pb-16 px-4 border-b border-neutral-900 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Enterprise Engineering</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            AI <span className="text-red-500 text-glow">Services</span> &amp; Systems
          </h1>
          <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto mb-8 font-light">
            We architect low-latency AI integrations, automated SDR pipelines, voice agents, and custom workflows. No generic templates. Just high-performance systems.
          </p>
          <a
            href="https://Calendly.com/izzy-marketing-hub/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group text-xs uppercase tracking-wider font-bold"
          >
            Book Free AI Strategy Call
            <Calendar className="w-4.5 h-4.5" />
          </a>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 border-b border-neutral-900 relative z-10 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, features, highlight }) => (
              <div
                key={title}
                className="group p-8 glass-panel border border-neutral-800/60 rounded-3xl hover:border-red-500/35 transition-all duration-300 flex flex-col justify-between card-hover"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-red-500" />
                    </div>
                    <span className="px-3 py-1 bg-red-950/20 border border-red-500/20 rounded-full text-red-400 text-[10px] uppercase font-bold tracking-widest">
                      {highlight}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-6 font-light">{description}</p>
                  <ul className="space-y-3 mb-8">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 font-light">
                        <CheckCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href="https://Calendly.com/izzy-marketing-hub/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 hover:text-red-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all group-hover:translate-x-1"
                >
                  Integrate This <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Readiness Audit Interactive Mock Checklists */}
      <section className="py-24 px-4 border-b border-neutral-900 relative z-10 bg-neutral-950/30">
        <div className="max-w-4xl mx-auto">
          <div className="glass-panel border border-neutral-800/80 p-8 sm:p-10 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-2 bg-red-950/20 border-b border-l border-red-500/20 rounded-bl-xl text-red-400 text-xs font-bold uppercase tracking-wider">
              Self-Audit
            </div>
            <h3 className="text-2xl font-black text-white mb-3">AI &amp; Automation Readiness Audit</h3>
            <p className="text-neutral-400 text-sm font-light mb-8 max-w-xl">
              Are you ready to scale your business with AI? Check which symptoms affect your operations to find your target solution.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { symptom: 'Symptom A: Support desk is overwhelmed repeating the same answers to customers.', solution: 'Smart RAG Chatbot (Reduces desk load by up to 68%)' },
                { symptom: 'Symptom B: Sales team wastes 40% of calling time dialing voicemails, fakes, or landlines.', solution: 'Automated Lead Validator + Clicker Defense' },
                { symptom: 'Symptom C: Employees spend hours manually copying leads from ads into your GHL CRM.', solution: 'n8n/Make Workflow Integration (Saves 70% manual time)' },
                { symptom: 'Symptom D: Missing hot inbound inquiries/sales calls after office hours or over weekends.', solution: 'Twilio AI Voice Receptionist agent' },
              ].map(({ symptom, solution }) => (
                <div key={symptom} className="flex gap-4 p-4 bg-neutral-950/50 border border-neutral-900 rounded-2xl">
                  <div className="w-5.5 h-5.5 rounded-md border border-neutral-700 flex items-center justify-center text-red-500 text-xs shrink-0 select-none mt-0.5">✔</div>
                  <div>
                    <p className="text-white text-xs sm:text-sm font-semibold">{symptom}</p>
                    <p className="text-neutral-500 text-xs mt-1 font-mono">Recommended solution: <span className="text-red-400 font-bold">{solution}</span></p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href="https://Calendly.com/izzy-marketing-hub/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold"
              >
                Discuss Audit Results
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 px-4 border-b border-neutral-900 relative z-10 bg-black/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Our Protocol</p>
            <h2 className="section-heading mb-4">How We Work</h2>
            <p className="section-sub max-w-xl mx-auto">
              A structured deployment pipeline to ensure data hygiene, speed, and seamless CRM integrations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ step, title, desc }) => (
              <div key={step} className="p-6 glass-panel border border-neutral-800/60 rounded-2xl card-hover relative overflow-hidden">
                <div className="text-5xl font-black text-red-950/20 absolute -top-2 right-2 select-none">{step}</div>
                <h3 className="font-extrabold text-white text-base mb-3 tracking-wide mt-2">{title}</h3>
                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative z-10 bg-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-black text-white mb-4">Let's Solve Your Bottlenecks</h2>
          <p className="text-neutral-400 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Easy automation tasks bore us. Bring Israel and the Izzytechub team the hard challenges. We design systems that perform under pressure.
          </p>
          <a
            href="https://Calendly.com/izzy-marketing-hub/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 group text-xs uppercase tracking-wider font-bold"
          >
            Schedule Free Call 📅
          </a>
        </div>
      </section>
    </div>
  )
}
