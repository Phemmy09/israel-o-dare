'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Download,
  Printer,
  ExternalLink,
  Award,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Building2,
  FileText,
  Terminal,
} from 'lucide-react'

const education = [
  {
    institution: 'Federal University of Technology Akure (FUTA)',
    degree: 'Bachelor of Engineering (B.Eng.) — Agricultural & Environmental Engineering',
    period: '2018 – 2024',
    honors: 'First Class Honours (Top of Department · GPA: 4.5+/5.0)',
    description:
      'Rigorous foundational training in continuum thermodynamics, numerical analysis, fluid mechanics, and scientific programming. Maintained continuous placement on the Dean’s List for Academic Excellence and received the Federal Government of Nigeria (FGN) Merit Scholarship (2019–2023).',
    thesis:
      'Thesis: Predictive Bio-Thermodynamics and Non-Parametric Gaussian Process Regression for Heat-Moisture Decay in Tropical Harvest Systems.',
  },
]

const recognitions = [
  {
    year: '2024 – Present',
    title: 'Upwork Top Rated Plus Talent (Top 3% Globally)',
    organization: 'Upwork Global Inc.',
    description:
      'Recognized among the top 3% of global freelance talent for sustained delivery on high-value enterprise AI systems and workflow contracts, maintaining a 100% Job Success Score.',
  },
  {
    year: '2019 – 2023',
    title: 'Federal Government of Nigeria (FGN) Merit Scholarship',
    organization: 'Federal Ministry of Education, Nigeria',
    description:
      'Highly competitive national academic scholarship awarded for exceptional performance and top percentile standing across university engineering disciplines.',
  },
  {
    year: '2024',
    title: 'First Class Engineering Honours & Top of Department',
    organization: 'School of Engineering and Engineering Technology, FUTA',
    description:
      'Graduated at the top of the Agricultural and Environmental Engineering graduating class with GPA exceeding 4.5 / 5.0.',
  },
  {
    year: '2024 – Present',
    title: 'Founder & Team Lead, APEXIUM Social Impact Initiative',
    organization: 'Community Technology Outreach',
    description:
      'Founded grassroots digital literacy initiative teaching programming, algorithmic logic, and AI workflows to over 200 rural teenagers across regional Nigeria, funded through freelance earnings.',
  },
  {
    year: '2022 – 2023',
    title: 'Academic Director & Peer Mentor',
    organization: 'AGEESA FUTA',
    description:
      'Appointed to lead the academic welfare committee; organized intensive tutoring in Advanced Engineering Mathematics, Numerical Analysis, and Python for over 40 undergraduate engineers.',
  },
  {
    year: '2021 – 2023',
    title: 'General Coordinator & Music Director (String Polyphony)',
    organization: 'FUTA Campus Directorate',
    description:
      'Coordinated multi-instrumental orchestra and 60-member symphonic choir; multi-instrumentalist (Violin, Viola, Cello, Piano) awarded FUTA Music and Leadership Honours.',
  },
]

const certifications = [
  {
    name: 'Claude with the Anthropic API',
    issuer: 'Anthropic',
    date: 'Issued: March 2026',
    credential: 'AI Systems Architecture & Prompt Engineering',
  },
  {
    name: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: 'Issued: March 2026',
    credential: 'Autonomous Code Generation & Agentic Tool Use',
  },
  {
    name: 'AI Security & Governance',
    issuer: 'Securiti',
    date: 'Valid through 2028',
    credential: 'Enterprise Data Protection & Privacy Frameworks',
  },
]

const publications = [
  {
    title:
      'Bayesian Gaussian Process Regression for Non-Linear Moisture and Heat Decay Modeling in Tropical Roots',
    authors: 'Israel Dare, et al.',
    type: 'Research Whitepaper / Applied Engineering Preprint',
    status: 'Archived for Institutional Review',
    summary:
      'Demonstrated non-parametric machine learning superiority over classical empirical equations for predicting thermodynamic deterioration under fluctuating ambient humidity.',
  },
  {
    title:
      'Autonomous UAV Photogrammetry and Dense Point-Cloud Reconstruction for Bio-Spatial Monitoring',
    authors: 'Israel Dare',
    type: 'Technical Monograph',
    status: 'Engineering Monograph & Software Spec',
    summary:
      'A systems architecture for low-altitude autonomous drone telemetry and neural radiance field terrain synthesis for real-world environmental digital twins.',
  },
]

const skillGroups = [
  {
    category: 'AI & Machine Intelligence',
    skills: [
      'PyTorch & Scientific Python',
      'Gaussian Process Regression (GPR)',
      'Claude 3.5 & GPT-4 Architectures',
      'pgvector & Vector Database Search',
      'RAG Pipelines & Chunking Strategies',
      'Deterministic Multi-Agent Swarms',
    ],
  },
  {
    category: 'Backend & Systems Engineering',
    skills: [
      'Python (FastAPI, aiosqlite)',
      'TypeScript & Next.js 15 App Router',
      'PostgreSQL & Supabase Auth/RLS',
      'High-Concurrency Asynchronous Pipelines',
      'REST APIs, WebSockets & JSON Schemas',
      'Linux Server Administration & Docker',
    ],
  },
  {
    category: 'Enterprise Automation & Orchestration',
    skills: [
      'Enterprise n8n Self-Hosted Cluster',
      'Make.com (Integromat)',
      'Zero-Loss Webhook Ingestion',
      'Zoho CRM, Salesforce & HubSpot APIs',
      'Automated PDF Blueprint Extraction',
      'Transactional Error Fallbacks',
    ],
  },
  {
    category: 'Spatial & Physical Intelligence',
    skills: [
      'Autonomous UAV Flight Path Telemetry',
      'RTK-GPS Georeferencing',
      'Drone Photogrammetry & Mesh Creation',
      'Dense 3D Point Clouds & NeRFs',
      'Microclimate IoT Sensor Ingestion',
      'Bio-Thermodynamic Energy Balances',
    ],
  },
]

const verifications = [
  {
    name: 'Upwork Top Rated Plus Profile',
    handle: 'Israel Dare (100% JSS, Top 3%)',
    url: 'https://www.upwork.com/freelancers/~010297ccb4983d90e7',
  },
  {
    name: 'LinkedIn Professional Profile',
    handle: 'in/israel-dare-31a11318a',
    url: 'https://www.linkedin.com/in/israel-dare-31a11318a',
  },
  {
    name: 'GitHub Code Repositories',
    handle: 'github.com/Phemmy09',
    url: 'https://github.com/Phemmy09',
  },
  {
    name: 'Direct Institutional Line',
    handle: 'israel@israeldare.com',
    url: 'mailto:israel@israeldare.com',
  },
]

export default function CredentialsClient() {
  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print()
    }
  }

  return (
    <div className="font-sans selection:bg-gold-500 selection:text-noir-950">
      {/* 1. INSTITUTIONAL DOSSIER HEADER */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/[0.08]">
          <div className="space-y-4 max-w-3xl">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400 font-semibold">
              Evaluation Dossier · Institutional Review
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-white tracking-tight leading-[0.95]">
              Israel Dare
            </h1>
            <p className="text-base sm:text-xl text-parchment-200 font-light leading-relaxed">
              Systems Architect, First Class Honours B.Eng. Engineer, and Machine Intelligence Practitioner. Prepared for academic scholarship committees, fellowship evaluators, and institutional procurement.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handlePrint}
              className="btn-luxury-outline inline-flex items-center gap-2 text-xs"
            >
              <Printer className="w-3.5 h-3.5" /> Print / Save PDF
            </button>
            <a
              href="/documents/Israel_Dare_CV.pdf"
              download="Israel_Dare_CV.pdf"
              className="btn-luxury-gold inline-flex items-center gap-2 text-xs"
            >
              <Download className="w-3.5 h-3.5" /> Download Official CV (PDF)
            </a>
          </div>
        </div>

        {/* 2. EXECUTIVE FEATURE: ISRAEL AT TESLA GIGAFACTORY */}
        <div className="pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-white/10 bg-noir-900/60 p-6 sm:p-8">
            <div className="lg:col-span-6 relative aspect-[16/10] overflow-hidden border border-white/10 bg-noir-950">
              <Image
                src="/images/editorial/israel-tesla-gigafactory.jpg"
                alt="Israel Dare at Tesla Gigafactory"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover object-[center_top] pt-0.5 filter contrast-[1.02]"
              />
              <div className="absolute bottom-3 left-3 bg-noir-950/85 backdrop-blur-md px-2.5 py-1 border border-white/10 font-mono text-[9px] text-gold-400">
                FRONTIER INDUSTRIAL SYSTEMS & AUTONOMOUS AI
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400">
                Executive Horizon & Proof of Global Parity
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-white">
                Engineering at the Global Technological Frontier
              </h2>
              <p className="text-sm text-parchment-300 font-light leading-relaxed">
                Evaluating autonomous industrial robotics, distributed manufacturing pipelines, and energy telemetry. Operating with an uncompromising commitment to first-principles engineering rigor.
              </p>
              <div className="pt-2 font-mono text-xs text-zinc-400 flex items-center gap-4">
                <span>INDEX: EVAL-2026</span>
                <span className="text-zinc-600">|</span>
                <span className="text-white">STATUS: VERIFIED CREDENTIAL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STRUCTURED EDUCATION & ACADEMIC STANDING */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-gold-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Formal Academic Record
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Education & Institutional Qualifications
            </h2>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.degree}
                className="p-8 border border-white/[0.08] bg-noir-900/40 space-y-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/[0.06] pb-4">
                  <div>
                    <h3 className="font-serif text-2xl text-white">{edu.institution}</h3>
                    <p className="font-mono text-xs text-gold-400/90 pt-1">{edu.degree}</p>
                  </div>
                  <div className="text-right font-mono text-xs text-zinc-400">
                    <div>{edu.period}</div>
                    <div className="text-gold-400 font-semibold">{edu.honors}</div>
                  </div>
                </div>

                <p className="text-sm text-parchment-300 font-light leading-relaxed">
                  {edu.description}
                </p>

                <div className="p-4 bg-noir-950/70 border-l-2 border-gold-500 font-mono text-xs text-zinc-300">
                  {edu.thesis}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACHIEVEMENTS, RECOGNITION & SCHOLARSHIP TIMELINE */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08] bg-noir-900/20">
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-gold-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Merit & Recognition
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Key Achievements & Distinctions
            </h2>
          </div>

          <div className="space-y-6">
            {recognitions.map((item, idx) => (
              <div
                key={item.title}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 p-6 sm:p-8 border border-white/[0.08] bg-noir-950/60 items-start"
              >
                <div className="md:col-span-3 font-mono text-xs text-gold-400">
                  {item.year}
                </div>
                <div className="md:col-span-9 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                    <h3 className="font-serif text-xl text-white">{item.title}</h3>
                    <span className="font-mono text-xs text-zinc-500">{item.organization}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-parchment-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. RESEARCH & SCIENTIFIC MONOGRAPHS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <BookOpen className="w-5 h-5 text-gold-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Academic Inquiries
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Research Papers & Engineering Preprints
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((paper) => (
              <div
                key={paper.title}
                className="p-8 border border-white/[0.08] bg-noir-900/40 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-500">
                    <span className="text-gold-400/90">{paper.type}</span>
                    <span>{paper.status}</span>
                  </div>
                  <h3 className="font-serif text-xl text-white leading-snug">{paper.title}</h3>
                  <p className="font-mono text-xs text-zinc-400">{paper.authors}</p>
                  <p className="text-xs sm:text-sm text-parchment-300 font-light leading-relaxed pt-2">
                    {paper.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] font-mono text-[11px] text-gold-400">
                  FULL TEXT AVAILABLE IN INSTITUTIONAL DOSSIER ↗
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GROUPED SKILLS & COMPETENCIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08] bg-noir-900/30">
        <div className="space-y-12">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-gold-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Technical Taxonomy
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Skills & Methodological Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="p-6 border border-white/[0.08] bg-noir-950/60 space-y-4"
              >
                <h3 className="font-serif text-lg text-white border-b border-white/[0.06] pb-3">
                  {group.category}
                </h3>
                <ul className="space-y-2 font-mono text-xs text-zinc-300">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-gold-400" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Industry Certifications */}
          <div className="pt-8 border-t border-white/[0.06] space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-gold-400 font-semibold">
              Industry & Vendor Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="p-6 border border-white/[0.08] bg-noir-950/40 space-y-2"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
                    <span className="text-white">{cert.issuer}</span>
                    <span className="text-gold-400">{cert.date}</span>
                  </div>
                  <h4 className="font-serif text-lg text-white">{cert.name}</h4>
                  <p className="text-xs text-parchment-300 font-light">{cert.credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. VERIFICATIONS & REPOSITORY AUDITS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 border-b border-white/[0.08]">
        <div className="space-y-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                Verifiable Public Record
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-white">
              Credential Verification Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {verifications.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 border border-white/[0.08] bg-noir-900/40 hover:bg-noir-900 hover:border-gold-500/30 transition-all duration-300 space-y-3 group block"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-gold-400 uppercase">VERIFIED</span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif text-lg text-white group-hover:text-gold-300 transition-colors">
                  {item.name}
                </h3>
                <p className="font-mono text-xs text-zinc-400">{item.handle}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CONFIDENTIAL REFERENCES NOTICE & CLOSING */}
      <section className="py-20 px-5 sm:px-8 bg-noir-950 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="p-6 border border-gold-500/20 bg-gold-500/5 font-mono text-xs text-parchment-200 space-y-2">
            <p className="text-gold-400 font-medium">CONFIDENTIAL REFERENCES</p>
            <p className="font-light">
              Formal letters of academic recommendation, employer verifications, and certified university transcripts are provided directly to scholarship boards, graduate admissions committees, and enterprise procurement upon formal institutional request.
            </p>
          </div>

          <p className="font-mono text-xs text-zinc-500">
            Official Academic Line: <a href="mailto:israel@israeldare.com" className="text-zinc-300 underline">israel@israeldare.com</a>
          </p>
        </div>
      </section>
    </div>
  )
}
