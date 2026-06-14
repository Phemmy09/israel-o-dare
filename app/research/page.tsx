import type { Metadata } from 'next'
import {
  BookOpen,
  GraduationCap,
  Award,
  ArrowUpRight,
  Database,
  Cpu,
  ShieldAlert,
  Flame,
  Globe,
  Settings
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Academic & Systems Research | Israel O. Dare',
  description: 'Academic research papers, proposals, and engineering whitepapers by Israel O. Dare. Covers Gaussian Process Regression agricultural modeling, precision farming, and AI governance.',
}

const academicWorks = [
  {
    title: 'Control of Yam Atmospheric Conditions: Effects of Size and Temperature on Yam Storage Using Gaussian Regression Model',
    type: 'Final Year B.Eng. Thesis',
    institution: 'Federal University of Technology, Akure (FUTA)',
    date: 'August 2023',
    icon: GraduationCap,
    abstract: 'Root tubers continue to respire and generate heat after harvest, leading to high spoilage rates under passive storage. This research developed a thermodynamic atmospheric modeling system applying Gaussian Process Regression (GPR) to map non-linear interactions of crop size, ambient temperature, and humidity, optimizing parameters to extend yam shelf-life.',
    methodology: 'Bayesian non-parametric GPR modeling, sensory metrics analysis, and thermodynamic decay rate profiling in simulated storage chambers.',
    results: 'Created mathematically rigorous confidence bounds for spoilage risk indices, proving that dynamic ventilation offsets post-harvest crop rot by up to 35%.'
  },
  {
    title: 'Advances in Storage System for Yam Tubers',
    type: 'Academic Seminar Report',
    institution: 'Federal University of Technology, Akure (FUTA)',
    date: 'November 2023',
    icon: BookOpen,
    abstract: 'An analytical review of global post-harvest preservation systems for tropical tubers. Investigates structural design parameters of modern storage facilities, environmental constraints, biochemical sprout inhibitors, and organic pest control methodologies.',
    methodology: 'Literature synthesis of 45+ post-harvest studies, comparative efficiency tracking of ventilated pit vs refrigeration systems.',
    results: 'Proposed a combined structural audit index relating storage design variables to pest prevention rates, advising local smallholders on optimal configurations.'
  }
]

const researchProposals = [
  {
    title: 'Precision Agri-Engineering & Multi-Agent AI (UTFPR Proposal)',
    focus: 'Precision AI, Internet of Things, Parametric Insurance',
    abstract: 'Investigates how decentralized multi-agent AI networks can automate critical operations within smallholder agribusiness value chains. Proposes integrating low-cost IoT soil/crop sensors and satellite telemetry to dynamically predict post-harvest crop spoilage, automate parametric micro-insurance payouts, and coordinate crop shipping coordinates.',
    nexus: 'Precision Agri-Engineering, Cloud-Native Workflows, Blockchain Micro-Insurance.'
  },
  {
    title: 'Bio-Digital Supply Chain & Agribusiness Administration (UFRPE Proposal)',
    focus: 'Agribusiness Logistics, Developmental Economics',
    abstract: 'Explores sustainable agronomic risk coordination. Proposes a bio-digital framework that manages transaction costs, models weather volatility, and secures market pricing for smallholder cooperatives in emerging markets, comparing logistical structures between Brazil and Nigeria.',
    nexus: 'Supply Chain Optimization, Economic Risk Sharing, Cooperative Governance.'
  },
  {
    title: 'Yam Post-Harvest Biochemistry & Machine Learning (UFG Proposal)',
    focus: 'Plant Pathology, Biosensors, Predictive Regression',
    abstract: 'Studies the biochemical pathways governing microbial decay in white yams (Dioscorea rotundata) under storage. Proposes a "Bio-Digital Preservation System" combining organic phytochemical bio-preservatives with electrochemical early-detection biosensors and machine learning regression algorithms to intercept rot before visual signs occur.',
    nexus: 'Food Biochemistry, Organic Plant Preservatives, Early-Detection Biosensors.'
  },
  {
    title: 'Solar Absorption Eco-Efficient Storage Systems (UFCG Proposal)',
    focus: 'Thermodynamics, Sustainable Engineering, Optimization',
    abstract: 'Designs low-carbon storage infrastructures for semi-arid zones. Proposes a multi-variable engineering framework integrating solar-powered absorption cooling cycles, rainwater collection systems, and local biomass waste utilization to stabilize tuber storage environments.',
    nexus: 'Water-Energy-Food Nexus, Solar Absorption Refrigeration, Thermodynamic Balance.'
  }
]

const whitepapers = [
  {
    title: 'MamaGuard AI: Scalable Full-Stack Architectures for Asynchronous Maternity Health Monitoring',
    type: 'Technical Case Study (2025)',
    icon: Settings,
    summary: 'Documented the technical architecture of a concurrent voice and text prenatal diagnostic advisor built on a lightweight Python FastAPI backend, utilizing aiosqlite for non-blocking database transactions and Claude for diagnostic scanning.',
    link: 'https://gods-covenant-hospital.vercel.app/'
  },
  {
    title: 'Oracle: Custom Scrapy Architectures and Zero-Loss Data Management',
    type: 'Technical Whitepaper (2026)',
    icon: Database,
    summary: 'Analyzed database race conditions and Row Level Security (RLS) constraints in Next.js Server Components. Detailed custom scraping models that capture jobs and scholarships while bypassing heavy client-side scripts.',
    link: 'https://oracle-black-six.vercel.app/'
  },
  {
    title: 'Adapting Global AI Governance Frameworks for the Global South',
    type: 'Policy Essay / EOI (2026)',
    icon: Globe,
    summary: 'Assessed global AI safety standards, compute tracking methodologies, and the unique risk profiles of low-code agentic workflows and local automations in developing economies.'
  }
]

export default function ResearchPage() {
  return (
    <div className="relative min-h-screen grid-bg overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="glow-blob top-[10%] left-[15%] bg-red-600/10" />
      <div className="glow-blob top-[60%] right-[10%] bg-red-500/15" />

      {/* Hero */}
      <section className="bg-black/40 pt-20 pb-16 px-4 border-b border-neutral-900 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-red-500 text-xs font-bold uppercase tracking-widest mb-3">Academic Foundation</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Research &amp; <span className="text-red-500 text-glow">Whitepapers</span>
          </h1>
          <p className="text-base md:text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Academic thesis, seminar reports, sustainable agri-engineering proposals, and technical software whitepapers.
          </p>
        </div>
      </section>

      {/* Thesis & Seminar */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12 border-b border-neutral-900 pb-4">
            <GraduationCap className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-black text-white">University Publications</h2>
          </div>

          <div className="space-y-8">
            {academicWorks.map((work) => {
              const WorkIcon = work.icon
              return (
                <div
                  key={work.title}
                  className="bg-neutral-950/60 border border-neutral-800/80 p-8 rounded-3xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 px-4 py-1.5 bg-red-950/20 border-b border-l border-red-500/20 text-[10px] text-red-400 font-bold uppercase tracking-wider">
                    {work.type}
                  </div>

                  <div className="flex gap-4 items-start mb-6">
                    <div className="w-10 h-10 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <WorkIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-wide">{work.title}</h3>
                      <p className="text-neutral-500 text-xs mt-1 font-semibold uppercase tracking-wider">
                        {work.institution} · {work.date}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-sm font-light">
                    <div className="p-4 bg-neutral-900/40 border border-neutral-900 rounded-2xl">
                      <strong className="text-neutral-300 font-semibold block mb-1 uppercase text-xs tracking-wider">Abstract</strong>
                      <p className="text-neutral-400 leading-relaxed">{work.abstract}</p>
                    </div>
                    <div className="p-4 bg-neutral-900/40 border border-neutral-900 rounded-2xl">
                      <strong className="text-neutral-300 font-semibold block mb-1 uppercase text-xs tracking-wider">Methodology &amp; Computational Setup</strong>
                      <p className="text-neutral-400 leading-relaxed">{work.methodology}</p>
                    </div>
                    <div className="p-4 bg-red-950/5 border border-red-500/10 rounded-2xl">
                      <strong className="text-red-400 font-bold block mb-1 uppercase text-xs tracking-wider">Research Results</strong>
                      <p className="text-neutral-300 leading-relaxed font-normal">{work.results}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Proposals */}
      <section className="py-20 px-4 border-t border-neutral-900/80 bg-neutral-950/20 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12 border-b border-neutral-900 pb-4">
            <Cpu className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-black text-white">Active Research Proposals</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchProposals.map((prop) => (
              <div
                key={prop.title}
                className="bg-neutral-950/50 border border-neutral-900/80 hover:border-red-500/20 p-6 rounded-3xl transition-all duration-300 flex flex-col justify-between card-hover"
              >
                <div>
                  <span className="text-[10px] text-red-400 font-bold uppercase tracking-wider font-mono">
                    Focus: {prop.focus}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-2 mb-4 tracking-wide leading-snug">{prop.title}</h3>
                  <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mb-6">{prop.abstract}</p>
                </div>
                <div className="pt-4 border-t border-neutral-900/60 text-xs text-neutral-500 font-light">
                  <span className="font-semibold text-neutral-400">Interdisciplinary Nexus:</span> {prop.nexus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Essays & Whitepapers */}
      <section className="py-20 px-4 border-t border-neutral-900/80 relative z-10 bg-black">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12 border-b border-neutral-900 pb-4">
            <Globe className="w-8 h-8 text-red-500" />
            <h2 className="text-2xl font-black text-white">Technical Essays &amp; Whitepapers</h2>
          </div>

          <div className="space-y-6">
            {whitepapers.map((wp) => {
              const WpIcon = wp.icon
              return (
                <div
                  key={wp.title}
                  className="p-6 bg-neutral-950/60 border border-neutral-900/80 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-red-500/25 transition-all duration-300"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-red-950/30 border border-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                      <WpIcon className="w-5 h-5 text-red-500" />
                    </div>
                    <div>
                      <span className="text-[9px] text-red-400 font-mono font-bold uppercase tracking-wider">
                        {wp.type}
                      </span>
                      <h3 className="text-base font-bold text-white tracking-wide mt-1 leading-snug">{wp.title}</h3>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light leading-relaxed mt-1 max-w-2xl">{wp.summary}</p>
                    </div>
                  </div>

                  {wp.link && (
                    <a
                      href={wp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shrink-0 hover:bg-neutral-850 hover:border-red-500/30 transition-all"
                    >
                      View Live <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Downloader and contact */}
      <section className="py-20 px-4 border-t border-neutral-900 bg-neutral-950/40 text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-white mb-4">Request Academic CV &amp; Transcripts</h2>
          <p className="text-neutral-400 text-sm max-w-lg mx-auto mb-8 font-light">
            I am open to discussions regarding PhD positions, agricultural research collaborations, and fellowships.
          </p>
          <a
            href="mailto:phemmy09israel@gmail.com?subject=Academic%20Inquiry%20-%20Israel%20O.%20Dare"
            className="btn-primary inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold"
          >
            Email Academic Request
          </a>
        </div>
      </section>
    </div>
  )
}
