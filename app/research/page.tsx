import type { Metadata } from 'next'
import {
  GraduationCap,
  BookOpen,
  Plane,
  Layers,
  Cpu,
  Globe,
  Settings,
  Database,
  ArrowUpRight,
  ShieldCheck,
  Award,
} from 'lucide-react'
import Logo from '@/components/Logo'

export const metadata: Metadata = {
  title: 'Academic & Systems Research | ISRAEL DARE',
  description:
    'Academic research publications, thesis, proposals, and software engineering whitepapers by Israel Dare. Specializing in autonomous aerial photogrammetry, Gaussian Process Regression, bio-thermodynamics, and sovereign environmental systems.',
}

const eliteNiches = [
  {
    number: '01',
    title: 'Autonomous Aerial Photogrammetry & Spatial Digital Twins',
    category: 'Robotics · Computer Vision · NeRFs',
    abstract:
      'Developing autonomous multi-rotor UAV flight algorithms equipped with dual-band RTK-GPS and multispectral LiDAR payloads. Ingests dense point clouds through Structure-from-Motion (SfM) and 3D Gaussian Splatting to construct centimeter-accurate volumetric digital twins of complex agro-ecological topography.',
    nexus: 'Autonomous Aerospace Robotics, Dense Point Clouds, 3D Gaussian Splatting, Spatial Autocorrelation.',
  },
  {
    number: '02',
    title: 'Gaussian Process Regression for Crop Thermodynamics (Thesis)',
    category: 'FUTA B.Eng. Thesis · First Class Honours (2023)',
    abstract:
      'Modeled the non-linear thermodynamic respiration and heat-dissipation dynamics of white yams (Dioscorea rotundata) as a function of tuber size, ambient humidity, and temperature. Implemented non-parametric Bayesian Gaussian Process Regression (GPR) to establish explicit confidence intervals, proving dynamic atmospheric airflow offsets crop decay by up to 35%.',
    nexus: 'Non-Parametric Bayesian Modeling, Post-Harvest Physics, Thermodynamic Decay, Confidence Bounds.',
  },
  {
    number: '03',
    title: 'Decentralized Multi-Agent AI & Parametric Telemetry (UTFPR Proposal)',
    category: 'Precision Engineering · Smart Contracts · IoT',
    abstract:
      'Investigates how decentralized multi-agent autonomous software networks can automate critical infrastructure within agricultural value chains. Proposes coupling edge IoT micro-climate telemetry and UAV remote sensing to predict spoilage indices and trigger automated parametric micro-insurance payouts.',
    nexus: 'Cyber-Physical Edge Systems, Multi-Agent Swarms, Parametric Insurance Smart Contracts.',
  },
  {
    number: '04',
    title: 'Bio-Digital Supply Chain & Agribusiness Administration (UFRPE Proposal)',
    category: 'Developmental Economics · Agronomics · Risk Arbitrage',
    abstract:
      'Explores algorithmic risk coordination and transaction cost minimization in tropical agrarian markets. Proposes a bio-digital framework comparing supply chain logistics between Brazil and West Africa to mitigate climate volatility and secure cooperative pricing.',
    nexus: 'Transaction Cost Economics, Supply Chain Telemetry, Cooperative Governance.',
  },
  {
    number: '05',
    title: 'Phytochemical Biosensors & ML Pathology Interception (UFG Proposal)',
    category: 'Plant Biochemistry · Biosensors · Machine Learning',
    abstract:
      'Studies biochemical pathways governing microbial pathogen proliferation in tropical root crops. Proposes a "Bio-Digital Preservation Protocol" combining organic phytochemical bio-preservatives with electrochemical early-detection biosensors and machine learning regression algorithms to intercept rot before visual signs manifest.',
    nexus: 'Electrochemical Biosensors, Phytochemical Preservation, Predictive Machine Learning.',
  },
  {
    number: '06',
    title: 'Solar Absorption Eco-Efficient Storage Systems (UFCG Proposal)',
    category: 'Thermodynamics · Sustainable Engineering · Zero-Carbon',
    abstract:
      'Designs low-carbon storage infrastructures for semi-arid zones. Proposes a multi-variable engineering framework integrating solar-powered absorption cooling cycles, rainwater collection systems, and local biomass waste utilization to stabilize tuber storage environments.',
    nexus: 'Water-Energy-Food Nexus, Solar Absorption Refrigeration, Thermodynamic Balance.',
  },
]

const whitepapers = [
  {
    title: 'MamaGuard AI: Scalable Full-Stack Architectures for Asynchronous Maternity Health Monitoring',
    type: 'Technical Systems Whitepaper (2025)',
    summary:
      'Documented the engineering architecture of a concurrent voice and text prenatal diagnostic advisor built on a lightweight Python FastAPI backend, utilizing aiosqlite for non-blocking database transactions and Claude for diagnostic scanning.',
    link: 'https://gods-covenant-hospital.vercel.app/',
  },
  {
    title: 'Oracle: Custom Scrapy Architectures and Zero-Loss Data Management',
    type: 'Software Engineering Whitepaper (2026)',
    summary:
      'Analyzed database race conditions and Row Level Security (RLS) constraints in Next.js Server Components. Detailed custom scraping models that capture jobs and scholarships while bypassing heavy client-side scripts.',
    link: 'https://oracle-black-six.vercel.app/',
  },
  {
    title: 'Adapting Global AI Governance Frameworks for the Global South',
    type: 'Policy Essay & Strategic Brief (2026)',
    summary:
      'Assessed international AI safety benchmarks, compute tracking methodologies, and the unique risk profiles of low-code agentic workflows and sovereign environmental automation in emerging economies.',
  },
]

export default function ResearchPage() {
  return (
    <div className="bg-noir-950 text-zinc-100 min-h-screen pt-28 sm:pt-36 pb-24 font-sans">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-16 border-b border-white/[0.08]">
        <div className="max-w-4xl space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
            ACADEMIC FOUNDATION &amp; SYSTEMS RESEARCH
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl text-white tracking-tight leading-[0.95] font-normal">
            Autonomous Systems, <span className="italic font-light">Bio-Thermodynamics</span> &amp; Spatial Intelligence
          </h1>
          <p className="font-sans text-base sm:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl">
            Where mathematical rigor meets physical engineering: undergraduate engineering thesis, international doctoral research proposals, and software architecture whitepapers.
          </p>
        </div>
      </section>

      {/* 1. ELITE RESEARCH INITIATIVES & PROPOSALS */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-b border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">
              DISCIPLINES
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white">
              Primary Research Initiatives
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 max-w-sm font-light">
            Focusing on generational, futuristic niches at the intersection of AI, autonomous drones, spatial modeling, and environmental physics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
          {eliteNiches.map((item) => (
            <div
              key={item.number}
              className="bg-noir-900 border border-white/[0.08] p-8 sm:p-10 space-y-6 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-2xl text-zinc-600 group-hover:text-red-500 transition-colors">
                    {item.number}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-widest px-2.5 py-1 bg-black border border-white/10 text-red-400">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white group-hover:text-zinc-100 leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                  {item.abstract}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.06] font-mono text-[10px] text-zinc-500">
                <span className="text-zinc-400 font-semibold uppercase">Interdisciplinary Nexus:</span> {item.nexus}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. TECHNICAL WHITEPAPERS & CASE STUDIES */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24 sm:py-32 border-b border-white/[0.08]">
        <div className="space-y-12 max-w-5xl mx-auto">
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-red-500 font-semibold">
              ENGINEERING WHITEPAPERS
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white">
              Technical Architecture Whitepapers
            </h2>
          </div>

          <div className="space-y-6">
            {whitepapers.map((wp) => (
              <div
                key={wp.title}
                className="bg-noir-900 border border-white/[0.08] p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 hover:border-white/30 transition-all duration-300"
              >
                <div className="space-y-2 max-w-2xl">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-red-400 font-bold">
                    {wp.type}
                  </span>
                  <h3 className="font-serif text-2xl text-white">{wp.title}</h3>
                  <p className="font-sans text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    {wp.summary}
                  </p>
                </div>

                {wp.link && (
                  <a
                    href={wp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-luxury text-[10px] py-2.5 px-4 inline-flex items-center gap-1.5 shrink-0"
                  >
                    Inspect Build <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ACADEMIC DOSSIER & CV INQUIRY */}
      <section className="py-24 px-5 sm:px-8 bg-black text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <Logo variant="monogram" size="lg" className="mx-auto" />
          <h2 className="font-serif text-4xl sm:text-5xl text-white">
            Academic Collaboration &amp; Fellowships
          </h2>
          <p className="font-sans text-sm text-zinc-400 font-light max-w-xl mx-auto leading-relaxed">
            Israel Dare welcomes academic discourse regarding doctoral research fellowships, autonomous drone photogrammetry trials, and precision bio-thermodynamic collaborations.
          </p>
          <div className="pt-2">
            <a
              href="mailto:phemmy09israel@gmail.com?subject=Academic%20Research%20Inquiry%20-%20Israel%20Dare"
              className="btn-luxury"
            >
              Request Full Academic Dossier &amp; Transcripts ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
