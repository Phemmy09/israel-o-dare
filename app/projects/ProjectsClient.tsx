'use client'

import { useState } from 'react'
import {
  Search,
  ExternalLink,
  Folder,
  Code,
  CheckCircle,
  Database,
  Cpu,
  Globe,
  Settings,
  Terminal,
  Laptop
} from 'lucide-react'

interface Project {
  title: string
  category: 'AI Systems' | 'n8n Automation' | 'Research' | 'Web Utilities' | 'Outreach Scripts'
  techStack: string[]
  description: string
  location: string
  features: string[]
  liveUrl?: string
}

const CATEGORIES = ['All', 'AI Systems', 'n8n Automation', 'Research', 'Web Utilities', 'Outreach Scripts']

const projects: Project[] = [
  // --- Category: AI Systems ---
  {
    title: 'Edutech Chat Widget Script (IIFE)',
    category: 'AI Systems',
    techStack: ['React', 'Vite', 'JS IIFE', 'OpenRouter'],
    description: 'A pre-compiled chat widget script designed to inject the admissions bot on any web platform with a single script tag.',
    location: 'AI Projects/Claude Code/Edutech/',
    features: ['Vite IIFE compiler config', 'Embeddable chat window widget', 'Secure API proxy routes'],
    liveUrl: 'https://school-rag-agent.vercel.app/'
  },
  {
    title: 'Edutech Admissions Admin Dashboard',
    category: 'AI Systems',
    techStack: ['Next.js', 'React', 'Tailwind CSS', 'Vercel'],
    description: 'The administrative command center for the Edutech ecosystem. Enables administrators to view transcripts, upload documents, and manage escalated leads.',
    location: 'AI Projects/Claude Code/Edutech/',
    features: ['Secure document upload forms', 'Real-time ticket escalation', 'Zoho CRM sync logs'],
    liveUrl: 'https://edutechbabcockabu.vercel.app/'
  },
  {
    title: 'Edutech Internal Staff Chatbot',
    category: 'AI Systems',
    techStack: ['Next.js', 'Tailwind CSS', 'OpenRouter API', 'Auth'],
    description: 'A dedicated internal portal for school registry staff to run semantic queries over internal registry documents.',
    location: 'AI Projects/Antigravity/Edutech internal/',
    features: ['Password-gated security credentials', 'Claude 3.5 Sonnet processing', 'Internal staff workflows'],
    liveUrl: 'https://edutechinternalchatbot.vercel.app/'
  },
  {
    title: 'Edutech Widget Server API',
    category: 'AI Systems',
    techStack: ['Next.js App Router', 'Vercel Serverless', 'OpenAI'],
    description: 'Serverless API endpoints that parse incoming widget payloads, run semantic vector retrieval, and execute LLM streaming.',
    location: 'AI Projects/Antigravity/Edutech babcock & ABU/',
    features: ['Vercel Edge compatibility', 'JSON API schemas', 'Cors header controls'],
    liveUrl: 'https://school-rag-agent.vercel.app/'
  },
  {
    title: 'Edutech Supabase Embeddings Pipeline',
    category: 'AI Systems',
    techStack: ['Supabase', 'PGVector', 'OpenAI Embeddings', 'Node.js'],
    description: 'Data pipeline script that handles document chunking, generates embeddings via text-embedding-3-small, and indexes PGVector.',
    location: 'AI Projects/Claude Code/Edutech/',
    features: ['Semantic chunking configurations', 'PGVector schema setups', 'High-speed batch insertions']
  },
  {
    title: 'Roof Auto Material Parser',
    category: 'AI Systems',
    techStack: ['Next.js', 'Anthropic API', 'JSON Schemas'],
    description: 'Core parsing logic for Roof Auto. Transmits complex roofing contract dimensions directly to Anthropic API to output structured JSON material bills.',
    location: 'AI Projects/Claude Code/Roof Auto/',
    features: ['Structured LLM responses', 'Eagle View dimensions parsing', 'Material estimation algorithm'],
    liveUrl: 'https://roof-auto2.vercel.app/'
  },
  {
    title: 'Roof Auto Supabase Schema Setup',
    category: 'AI Systems',
    techStack: ['PostgreSQL', 'Supabase DB', 'Database Design'],
    description: 'Relational PostgreSQL database schema representing crew capacities, materials orders, and job tracking structures.',
    location: 'AI Projects/Claude Code/Roof Auto/',
    features: ['Strict foreign key constraint graphs', 'Row-Level Security configurations', 'Database triggers']
  },
  {
    title: 'Roof Auto Asynchronous State Tracker',
    category: 'AI Systems',
    techStack: ['Next.js Server Actions', 'PostgreSQL triggers', 'Supabase'],
    description: 'Real-time state tracking that syncs background file analysis stages with the UI (e.g. uploading, extracting, calculating).',
    location: 'AI Projects/Antigravity/Roof-Auto AI V3/',
    features: ['Asynchronous event channels', 'Database trigger scripts', 'Loading status indicators'],
    liveUrl: 'https://roof-auto2.vercel.app/'
  },
  {
    title: 'Roof Auto Crew Allocation Module',
    category: 'AI Systems',
    techStack: ['React', 'JavaScript', 'System Algorithms'],
    description: 'Module that parses estimated job areas and complexity to automatically allocate optimal crew sizes and durations.',
    location: 'AI Projects/Antigravity/Roof/',
    features: ['Crew constraint calculations', 'Real-time schedule output matrices']
  },
  {
    title: 'Roof Auto Invoice Generator',
    category: 'AI Systems',
    techStack: ['Next.js', 'PDF Generation', 'Node.js'],
    description: 'Automated workflow that aggregates parsed materials data and triggers supplier purchase orders and client invoices.',
    location: 'AI Projects/Antigravity/Roo-Auto/',
    features: ['Automatic bill-of-materials compiling', 'Dynamic invoice PDF layouts']
  },
  {
    title: 'MamaGuard FastAPI Server Core',
    category: 'AI Systems',
    techStack: ['Python', 'FastAPI', 'Uvicorn', 'Concurrency'],
    description: 'High-concurrency Python FastAPI backend serving maternity clinical logging endpoints and voice agent triggers.',
    location: 'AI Projects/Claude Code/MamaGuard AI/',
    features: ['Uvicorn server configurations', 'Non-blocking async routers', 'API testing endpoints'],
    liveUrl: 'https://gods-covenant-hospital.vercel.app/'
  },
  {
    title: 'MamaGuard SQLite Database Wrapper',
    category: 'AI Systems',
    techStack: ['SQLite', 'aiosqlite', 'Python'],
    description: 'Asynchronous SQLite connection wrapper executing patient diagnostic entries without blocking request threads.',
    location: 'AI Projects/Claude Code/MamaGuard AI/',
    features: ['Async database transactions', 'Referential schema setups']
  },
  {
    title: 'MamaGuard Clinical Risk Engine',
    category: 'AI Systems',
    techStack: ['Python', 'Statistical Models', 'Claude API'],
    description: 'Analyzes patient vitals and flags maternal clinical warnings using statistical metric thresholds and LLM reasoning.',
    location: 'AI Projects/Claude Code/MamaGuard AI/',
    features: ['Risk index scoring', 'Automated physician alerts']
  },
  {
    title: 'MamaGuard React SPA Dashboard',
    category: 'AI Systems',
    techStack: ['React', 'Vite', 'Tailwind CSS', 'Recharts'],
    description: 'Vite-powered Single Page Application showing maternal health indices and patient history charts.',
    location: 'AI Projects/Claude Code/MamaGuard AI/',
    features: ['Interactive patient record search', 'Vitals analytics trends charts'],
    liveUrl: 'https://gods-covenant-hospital.vercel.app/'
  },
  {
    title: 'MamaGuard VAPI Telephone Voice Agent',
    category: 'AI Systems',
    techStack: ['VAPI', 'System Prompts', 'Conversational AI'],
    description: 'Configuration script and behavioral parameters governing the maternal advisory voice agent.',
    location: 'AI Projects/Claude Code/MamaGuard AI/',
    features: ['System prompt guidelines', 'Real-time database validation hooks']
  },
  {
    title: 'Oracle news feed Web Scrapers',
    category: 'AI Systems',
    techStack: ['Python', 'Scrapy', 'BeautifulSoup'],
    description: 'Custom Scrapy crawlers that extract academic scholarships and remote job listings directly from targets.',
    location: 'AI Projects/Antigravity/Oracle news feed/',
    features: ['Bypasses heavy script rendering', 'Filters social media noise'],
    liveUrl: 'https://oracle-black-six.vercel.app/'
  },
  {
    title: 'Oracle Unified Tasks Dashboard',
    category: 'AI Systems',
    techStack: ['Next.js', 'React', 'Tailwind CSS'],
    description: 'Consolidates scraped remote job targets and scholarship listings into an interactive daily checklist planner.',
    location: 'AI Projects/Claude Code/Israel O Dare Portfolio/',
    features: ['Interactive task manager UI', 'Targeted search indexing']
  },
  {
    title: 'Oracle Supabase RLS Security Settings',
    category: 'AI Systems',
    techStack: ['Supabase', 'PostgreSQL', 'Security Policy'],
    description: 'Row-Level Security policy configurations restricting task lists and profile updates to authenticated users.',
    location: 'AI Projects/Claude Code/izzytechub-com/',
    features: ['Multi-tenant access policies', 'Encrypted credentials schema']
  },
  {
    title: 'Oracle Server Component Routers',
    category: 'AI Systems',
    techStack: ['Next.js Server Components', 'Supabase Auth'],
    description: 'Restructured Next.js API endpoints designed to resolve race conditions and HTTP 404 errors during payload updates.',
    location: 'AI Projects/Claude Code/izzytechub-com/',
    features: ['Concurrent database locks', 'Server-side data pre-fetching']
  },
  {
    title: 'Unser Website Frontend Core',
    category: 'AI Systems',
    techStack: ['Next.js App Router', 'React', 'Tailwind CSS'],
    description: 'Vercel-hosted frontend core for Unser. Leverages App Router structure for speed and search engine compliance.',
    location: 'AI Projects/Claude Code/Unser Website/',
    features: ['Static page compilation configs', 'Responsive mobile layouts'],
    liveUrl: 'https://unsertheanswer.vercel.app/'
  },

  // --- Category: n8n Automation ---
  {
    title: 'AshworthMercer Whop-CJ Synchronizer',
    category: 'n8n Automation',
    techStack: ['n8n', 'Make.com', 'CJ API', 'Whop API'],
    description: 'Autonomous workflow that syncs CJ Affiliate sales metrics directly with Whop membership groups.',
    location: 'AI Projects/Antigravity/AshworthMercer/n8n_discovery_whop_sync.json',
    features: ['Periodic cron triggers', 'JSON key transformations', 'Error alerts webhook'],
  },
  {
    title: 'AshworthMercer Whop-CJ Fulfillment Engine',
    category: 'n8n Automation',
    techStack: ['n8n', 'CJ API', 'Whop Webhooks'],
    description: 'Workflow executing membership fulfillment on Whop when CJ affiliate transactions succeed.',
    location: 'AI Projects/Antigravity/AshworthMercer/n8n_whop_cj_fulfillment.json',
    features: ['CJ webhook listeners', 'Whop API fulfillments', 'Retry policies']
  },
  {
    title: 'AshworthMercer Webhook API Route',
    category: 'n8n Automation',
    techStack: ['Node.js', 'Express', 'API Design'],
    description: 'Express-based node script that receives Whop transaction payloads, filters parameters, and forwards requests to n8n.',
    location: 'AI Projects/Antigravity/AshworthMercer/app.js',
    features: ['Request body parsers', 'Secured tokens header check']
  },
  {
    title: 'AshworthMercer Product Pricing Matrix',
    category: 'n8n Automation',
    techStack: ['JSON', 'Data Schemas'],
    description: 'Configuration array mapping Whop products to CJ campaign target parameters.',
    location: 'AI Projects/Antigravity/AshworthMercer/products.json',
    features: ['JSON schema structure', 'Dynamic pricing points config']
  },
  {
    title: 'AshworthMercer Flow Visualizer',
    category: 'n8n Automation',
    techStack: ['HTML', 'Vanilla CSS', 'Flowcharts'],
    description: 'An interactive HTML flowchart dashboard visualising n8n workflow connections for client audit sessions.',
    location: 'AI Projects/Antigravity/AshworthMercer/flow.html',
    features: ['Interactive node graphs', 'Responsive layout grid']
  },
  {
    title: 'Digital Mavericks CRM Automation',
    category: 'n8n Automation',
    techStack: ['GoHighLevel', 'Make.com', 'Zapier'],
    description: 'Client onboarding and SMS follow-up pipelines mapping Facebook ad lead forms to CRM databases.',
    location: 'AI Projects/Claude Code/Israel O. Dare/',
    features: ['SMS drip trigger actions', 'Facebook Ads lead captures', 'Slack alerts webhook']
  },

  // --- Category: Research ---
  {
    title: 'Yam Storage GPR Thermodynamic Model',
    category: 'Research',
    techStack: ['MATLAB', 'Gaussian Process Regression', 'Thermodynamics'],
    description: 'Bayesian non-parametric GPR model simulating tuber moisture decay rates as a function of size and temperature.',
    location: 'Credentials/RESUME/Research_and_Thesis/My Final final Project.pdf.txt',
    features: ['Bayesian regression parameters', 'Atmospheric control loops', 'Crop shelf-life predictions']
  },
  {
    title: 'Post-Harvest Yam Storage Audit Index',
    category: 'Research',
    techStack: ['Excel', 'Systems Analysis', 'Pathology'],
    description: 'Evaluation audit index mapping storage barn parameters (ventilated pit vs refrigeration) to rot prevention indices.',
    location: 'Credentials/RESUME/Research_and_Thesis/My Seminar.pdf.txt',
    features: ['45+ scientific studies synthesized', 'Sprout inhibitor matrices']
  },
  {
    title: 'UTFPR Precision Agriculture AI Proposal',
    category: 'Research',
    techStack: ['Academic Proposal', 'IoT', 'Telemetry'],
    description: 'Proposed decentralized AI agent network with IoT sensors and satellite telemetry to predict crop spoilage.',
    location: 'Credentials/RESUME/Research_Proposals/UTFPR_Research_Proposal.html',
    features: ['Parametric crop micro-insurance', 'Multi-agent crop log routing']
  },
  {
    title: 'UFRPE Supply Chain Economics Proposal',
    category: 'Research',
    techStack: ['Academic Proposal', 'Agribusiness Logistics'],
    description: 'Supply chain risk mitigation framework for smallholders, modeling transaction costs and climate index metrics.',
    location: 'Credentials/RESUME/Research_Proposals/UFRPE_Research_Proposal.html',
    features: ['Cooperative governance structures', 'Brazil-Nigeria agricultural logs']
  },
  {
    title: 'UFG Pathology early detection Proposal',
    category: 'Research',
    techStack: ['Academic Proposal', 'Biosensors', 'Biochemistry'],
    description: 'Biochemical early detection biosensors mapping yam microbial pathology decay via machine learning.',
    location: 'Credentials/RESUME/Research_Proposals/UFG_Research_Proposal.html',
    features: ['Phytochemical bio-preservatives', 'Predictive plant pathology']
  },
  {
    title: 'UFCG Solar Refrigeration thermodynamic Proposal',
    category: 'Research',
    techStack: ['Academic Proposal', 'Thermodynamics', 'Solar Absorption'],
    description: 'Proposed eco-efficient refrigeration storage systems utilizing solar absorption cycles and rainwater collection.',
    location: 'Credentials/RESUME/Research_Proposals/UFCG_Research_Proposal.html',
    features: ['Water-energy-food nexus analysis', 'Thermodynamic modeling calculations']
  },
  {
    title: 'UK GovAI Governance Policy paper',
    category: 'Research',
    techStack: ['Policy Essay', 'AI Risk Profile'],
    description: 'Analyses the governance gap regarding localized low-code automation and agentic systems in the Global South.',
    location: 'Credentials/RESUME/GovAI_Application_Dossier.md',
    features: ['Compute tracking profiles', 'Safety policy recommendations']
  },

  // --- Category: Web Utilities ---
  {
    title: 'Medical Exam Questions Generator Tool',
    category: 'Web Utilities',
    techStack: ['Python', 'SQL', 'NLP Parser'],
    description: 'High-speed Python script generating diagnostic exam questions from medical textbook files.',
    location: 'AI Projects/EXam Prep/generate_questions.py',
    features: ['NLP sentence chunking parser', 'Structured question outputs', 'Exam database compilation'],
  },
  {
    title: 'Diagnostic posting HTML tool',
    category: 'Web Utilities',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    description: 'Interactive study dashboard mapping clinical posting guidelines and diagnostics logs.',
    location: 'AI Projects/EXam Prep/diagnostic_posting.html',
    features: ['Clinical logging forms UI', 'Dynamic study lists']
  },
  {
    title: 'Systemic Pharmacology study module',
    category: 'Web Utilities',
    techStack: ['HTML', 'Vanilla JS'],
    description: 'Interactive study guides helping medical students parse drug categorizations and interactions.',
    location: 'AI Projects/EXam Prep/systemic_pharmacology.html',
    features: ['Drug class selector grids', 'Interactive drug recall flashcards']
  },
  {
    title: 'Abdomen Radiographs study Database',
    category: 'Web Utilities',
    techStack: ['Text Database', 'Medical Guides'],
    description: 'Structured textual catalog of abdominal radiographs and diagnostic indicators.',
    location: 'AI Projects/EXam Prep/extracted_abdomen.txt',
    features: ['Radiology reference indices', 'Clinical log guidelines']
  },
  {
    title: 'MRI Physics Visualizer page',
    category: 'Web Utilities',
    techStack: ['HTML', 'CSS'],
    description: 'Visual study guide presenting electromagnetic wave dynamics and resonance logs.',
    location: 'AI Projects/EXam Prep/mri_physics.html',
    features: ['Electromagnetic wave graphs', 'Visual physics equations']
  },
  {
    title: 'Academic Outline Parser',
    category: 'Web Utilities',
    techStack: ['Text parsing', 'RegEx'],
    description: 'Raw extraction output parsing medical curricula files into structured markdown outlines.',
    location: 'AI Projects/EXam Prep/extracted_outline.txt',
    features: ['RegEx syllabus categorizer', 'Markdown structure compiles']
  },
  {
    title: 'Conflict Resolution Quiz Engine',
    category: 'Web Utilities',
    techStack: ['JavaScript', 'Quiz Algorithms'],
    description: 'JavaScript logic executing interactive quizzes on peace study scenarios and negotiation models.',
    location: 'AI Projects/Practice Peace and Conflict Resolution/questions.js',
    features: ['Scoring matrices logic', 'Scenario response options']
  },
  {
    title: 'Conflict studies Quiz UI Dashboard',
    category: 'Web Utilities',
    techStack: ['HTML', 'Tailwind CSS', 'Vanilla JS'],
    description: 'A styled landing page displaying practice quizzes on peace and conflict resolution.',
    location: 'AI Projects/Practice Peace and Conflict Resolution/index.html',
    features: ['Interactive quiz forms UI', 'Dynamic score panels']
  },
  {
    title: 'AI Video Scene automatic Drawer',
    category: 'Web Utilities',
    techStack: ['Python', 'Automation API', 'Video rendering'],
    description: 'Python script communicating with image APIs to dynamically draw missing frames for video projects.',
    location: 'AI Projects/Video Projects/draw_missing_scenes.py',
    features: ['Frame generation API pipelines', 'Automatic folder creations']
  },
  {
    title: 'Automated Image Organizer script',
    category: 'Web Utilities',
    techStack: ['Python', 'File automation'],
    description: 'Script grouping and renaming exported frames according to timestamps.',
    location: 'AI Projects/Video Projects/organize_monk_images.py',
    features: ['Timestamp parser scripts', 'Batch renaming logic']
  },

  // --- Category: Outreach Scripts ---
  {
    title: 'Global outreach List Processor',
    category: 'Outreach Scripts',
    techStack: ['Python', 'Pandas', 'CSV processing'],
    description: 'Compiles and deduplicates database rows of university research hosts globally.',
    location: 'Credentials/RESUME/Research_and_Thesis/compile_outreach_list.py',
    features: ['Pandas parsing metrics', 'Domain email verify checks']
  },
  {
    title: 'Global outreach CSV Mail Scheduler',
    category: 'Outreach Scripts',
    techStack: ['Python', 'Resend API', 'CSV Database'],
    description: 'Automated outreach script parsing researcher rows from CSV files to queue emails via Resend.',
    location: 'Credentials/RESUME/Research_and_Thesis/send_global_outreach.py',
    features: ['Batch email queuing logic', 'Outbox log tracking'],
  },
  {
    title: 'Pavia University outreach emailer',
    category: 'Outreach Scripts',
    techStack: ['Python', 'Resend API'],
    description: 'Specialized pipeline sending outreach drafts to target faculty members at the University of Pavia.',
    location: 'Credentials/RESUME/Research_and_Thesis/send_pavia_outreach_emails.py',
    features: ['Faculty template variables', 'Sending throttle controls']
  },
  {
    title: 'Pavia outreach follow-up sequencer',
    category: 'Outreach Scripts',
    techStack: ['Python', 'Mail templates'],
    description: 'Triggers second-stage outreach emails to professors who have not responded after 14 days.',
    location: 'Credentials/RESUME/Research_and_Thesis/send_pavia_follow_up_emails.py',
    features: ['Dynamic follow-up template', 'Date delta evaluations']
  },
  {
    title: 'Pavia email error Recovery script',
    category: 'Outreach Scripts',
    techStack: ['Python', 'Exception logging'],
    description: 'Intercepts failing Resend requests and writes failed rows into a recovery JSON file.',
    location: 'Credentials/RESUME/Research_and_Thesis/resend_failed_pavia_emails.py',
    features: ['Error-state dump files', 'Retries failed entries logic']
  },
  {
    title: 'Rave scholarship request sender',
    category: 'Outreach Scripts',
    techStack: ['Python', 'SMTP Mailer'],
    description: 'Pipeline compiling student academic transcripts and formatting scholarship letters to coordinators.',
    location: 'Credentials/RESUME/send_rave_scholarship_request.py',
    features: ['Dynamic attachment handlers', 'Student record parsing'],
  },
  {
    title: 'APEXIUM training scheduler',
    category: 'Outreach Scripts',
    techStack: ['HTML Forms', 'Google Sheets Sync'],
    description: 'Web forms recording youth registration details in community workshops, syncs directly to spreadsheets.',
    location: 'Credentials/apexium_logo.png',
    features: ['Student registration UI', 'Google Sheets API triggers']
  }
]

export default function ProjectsClient() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(search.toLowerCase())) ||
      p.location.toLowerCase().includes(search.toLowerCase())

    const matchesCategory = category === 'All' || p.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-12">
      {/* Filtering & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 pb-8 border-b border-white/[0.08]">
        {/* Category selector */}
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all ${
                category === cat
                  ? 'bg-white text-black font-bold'
                  : 'bg-noir-900 border border-white/10 text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-md w-full md:w-80">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search systems & scripts..."
            className="w-full bg-noir-900 border border-white/10 pl-10 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white transition-colors font-sans"
          />
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Counter */}
      <p className="font-mono text-xs text-zinc-400">
        SHOWING <span className="text-white font-bold">{filtered.length}</span> OF {projects.length} SYSTEMS DEPLOYMENTS
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 bg-noir-900 border border-white/[0.08] p-8 space-y-3">
          <Folder className="w-8 h-8 text-zinc-600 mx-auto" />
          <p className="font-sans text-sm text-zinc-400">No systems found matching the search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => (
            <div
              key={proj.title}
              className="bg-noir-900 border border-white/[0.08] hover:border-white/30 p-8 space-y-6 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 bg-black border border-white/10 text-red-400">
                    {proj.category}
                  </span>
                  {proj.liveUrl && (
                    <span className="font-mono text-[9px] text-green-400 uppercase tracking-wider">
                      ● Live System
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-white group-hover:text-zinc-100 leading-snug">
                  {proj.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed line-clamp-3">
                  {proj.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-black border border-white/10 text-[9px] text-zinc-300 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 pt-4 border-t border-white/[0.06]">
                  {proj.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                      <CheckCircle className="w-3.5 h-3.5 text-red-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom location info & link */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs mt-auto">
                <span
                  className="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5 max-w-[70%] truncate"
                  title={proj.location}
                >
                  <Terminal className="w-3 h-3 text-red-500 shrink-0" />
                  {proj.location.split('/').pop() || proj.location}
                </span>

                {proj.liveUrl ? (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-white hover:text-red-400 font-bold uppercase tracking-wider flex items-center gap-1 transition-colors"
                  >
                    Inspect <ExternalLink className="w-3 h-3 text-red-500" />
                  </a>
                ) : (
                  <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">
                    Local Build
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
