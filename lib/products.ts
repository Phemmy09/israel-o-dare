export type ProductTier = 'Starter' | 'Professional' | 'Bespoke'
export type ProductFormat = 'Digital Blueprint' | 'Codebase & Architecture' | 'Audio Masterclass' | 'Bespoke Engagement'
export type Product = ProductItem

export interface ProductItem {
  id: string
  title: string
  subtitle: string
  tier: ProductTier
  priceDisplay: string
  priceValue?: number
  isHighTicket: boolean
  description: string
  image: string
  format: ProductFormat
  badge?: string
  features: string[]
  ctaText: string
  ctaHref: string
}

export const catalogProducts: ProductItem[] = [
  // 1. STARTER TIER
  {
    id: 'ai-agency-blueprint',
    title: 'The AI Agency Blueprint',
    subtitle: 'System Architecture & High-Ticket Client Acquisition Engine',
    tier: 'Starter',
    priceDisplay: '$49.99',
    priceValue: 49.99,
    isHighTicket: false,
    format: 'Digital Blueprint',
    badge: 'Core Blueprint',
    image: '/images/editorial/israel-boardroom-executive.jpg',
    description:
      'A comprehensive architectural guide for founding and scaling a high-value AI automation consulting firm. Covers enterprise positioning, contract pricing models, client outreach scripts, and service delivery protocols.',
    features: [
      'Complete agency positioning & legal contracts framework',
      'Client acquisition scripts & verified outreach templates',
      'Enterprise pricing matrices & retainers breakdown',
      'Production n8n and Make service delivery workflows',
      'Lifetime blueprint updates',
    ],
    ctaText: 'Buy Blueprint ($49.99)',
    ctaHref: 'https://whop.com',
  },
  {
    id: 'freelance-to-founder',
    title: 'Freelance to Founder Operating System',
    subtitle: 'The Engineering Matrix for Transitioning from Gig Worker to Sovereign Founder',
    tier: 'Starter',
    priceDisplay: '$29.99',
    priceValue: 29.99,
    isHighTicket: false,
    format: 'Digital Blueprint',
    badge: 'Operating System',
    image: '/images/editorial/israel-advisory-portrait.jpg',
    description:
      'The exact operating system Israel Dare used to rise from final-year family adversity to Upwork Top Rated Plus (Top 3% worldwide). Practical systems for escaping hourly pricing and selling high-leverage outcomes.',
    features: [
      'Business systemisation & delegation framework',
      'Upwork Top 3% profile optimization playbook',
      'Contract proposal templates that close high-ticket clients',
      'Mindset & focus protocols under extreme pressure',
      'Editable Notion project & task manager',
    ],
    ctaText: 'Get System ($29.99)',
    ctaHref: 'https://whop.com',
  },
  {
    id: 'n8n-workflow-vault',
    title: 'Production n8n Enterprise Workflow Vault',
    subtitle: '20+ Production-Tested JSON Workflow Blueprints with Zero-Loss Handlers',
    tier: 'Starter',
    priceDisplay: '$149.00',
    priceValue: 149.0,
    isHighTicket: false,
    format: 'Digital Blueprint',
    badge: 'Production Vault',
    image: '/images/editorial/israel-observatory-cosmos.jpg',
    description:
      'A curated repository of 20+ ready-to-import n8n workflow templates. Includes automated PDF contract parsers, CRM bi-directional syncs, conversational voice bot routers, and Redis queue retry handlers.',
    features: [
      '20+ complete exportable JSON workflows',
      'Zero-loss error handlers & Slack alert webhooks',
      'Zoho CRM, Salesforce & GoHighLevel connector nodes',
      'Automated PDF & invoice extraction schemas',
      'Detailed import walkthrough video and documentation',
    ],
    ctaText: 'Access Workflow Vault ($149)',
    ctaHref: 'https://whop.com',
  },
  {
    id: 'sales-funnel-template-pack',
    title: 'Autonomous Funnel Architecture Pack',
    subtitle: 'High-Converting Multi-Channel Lead Qualification Engine',
    tier: 'Starter',
    priceDisplay: 'Free Access',
    priceValue: 0,
    isHighTicket: false,
    format: 'Digital Blueprint',
    badge: 'Complimentary',
    image: '/images/editorial/israel-architect-chalet.jpg',
    description:
      'Pre-configured funnel blueprints engineered for GoHighLevel and ClickFunnels. Built with high-ticket lead qualification logic, calendar hooks, and automated nurture webhooks.',
    features: [
      'One-click deploy for GoHighLevel & ClickFunnels',
      'Automated SMS & email qualification sequences',
      'Pre-built calendar availability locks',
      'Complete deployment guide included',
      '100% complimentary ecosystem asset',
    ],
    ctaText: 'Download Free Pack',
    ctaHref: '/contact?inquiry=free-funnel-pack',
  },

  // 2. PROFESSIONAL TIER
  {
    id: 'turnkey-rag-engine',
    title: 'Turnkey Institutional RAG Ingestion Engine',
    subtitle: 'Full-Stack Next.js 15 + Supabase pgvector + Claude 3.5 Sonnet Codebase',
    tier: 'Professional',
    priceDisplay: '$2,400',
    priceValue: 2400,
    isHighTicket: false,
    format: 'Codebase & Architecture',
    badge: 'Turnkey Codebase',
    image: '/images/editorial/israel-advisory-portrait.jpg',
    description:
      'The exact full-stack codebase powering multi-campus university admissions and enterprise knowledge retrieval. Includes embeddable script widget, password-gated admin portal, and automated document chunking.',
    features: [
      'Complete Next.js 15 App Router source code repository',
      'Supabase pgvector semantic chunking & search pipeline',
      'Embeddable React IIFE widget script generator',
      'Admin dashboard for real-time transcript inspection & document uploads',
      '30 days direct code integration support from Israel Dare',
    ],
    ctaText: 'Deploy Turnkey Engine ($2,400)',
    ctaHref: '/contact?product=turnkey-rag-engine',
  },
  {
    id: 'voice-crm-bridge',
    title: 'Autonomous Voice Dialer & Multi-CRM Bridge',
    subtitle: 'Production Voice AI Telemetry with CRM Pipeline Synchronization',
    tier: 'Professional',
    priceDisplay: '$1,850',
    priceValue: 1850,
    isHighTicket: false,
    format: 'Codebase & Architecture',
    badge: 'Voice Infrastructure',
    image: '/images/editorial/israel-boardroom-executive.jpg',
    description:
      'A battle-tested middleware connecting Retell/Vapi conversational voice dialers to GoHighLevel, Zoho, or Salesforce with live transcript logging and automated appointment scheduling.',
    features: [
      'FastAPI webhook server with non-blocking async routing',
      'Live sentiment & appointment qualification parser',
      'GoHighLevel and Zoho CRM bi-directional contact syncer',
      'Automated SMS follow-up sequencer',
      'Full deployment configuration & Docker container',
    ],
    ctaText: 'Acquire Voice Bridge ($1,850)',
    ctaHref: '/contact?product=voice-crm-bridge',
  },

  // 3. BESPOKE TIER (HIGH TICKET - APPLICATION INQUIRY)
  {
    id: 'sovereign-ai-infrastructure',
    title: 'Sovereign Enterprise AI Infrastructure Build',
    subtitle: 'Custom Private-Cloud or On-Prem Multi-Agent Intelligence Ecosystem',
    tier: 'Bespoke',
    priceDisplay: 'From $12,500',
    isHighTicket: true,
    format: 'Bespoke Engagement',
    badge: 'Enterprise Architecture',
    image: '/images/editorial/israel-architect-chalet.jpg',
    description:
      'A dedicated engineering engagement to design and build bespoke, deterministic AI workflows, autonomous document processors, and custom multi-agent networks tailored to your proprietary data.',
    features: [
      'Full architectural audit and custom system specification',
      'Private cloud deployment with zero vendor lock-in',
      'Custom vector database indexes and fine-tuned schemas',
      'Comprehensive security audits & role-based access control',
      '60 days priority monitoring and executive team training',
    ],
    ctaText: 'Apply for Enterprise Build',
    ctaHref: '/contact?tier=bespoke-enterprise-ai',
  },
  {
    id: 'spatial-digital-twin-suite',
    title: 'Spatial Intelligence & UAV Digital Twin Suite',
    subtitle: 'Autonomous UAV Photogrammetry, 3D Point Clouds & Bio-Thermal Modeling',
    tier: 'Bespoke',
    priceDisplay: 'From $15,000',
    isHighTicket: true,
    format: 'Bespoke Engagement',
    badge: 'Physical Computing',
    image: '/images/editorial/israel-tesla-gigafactory.jpg',
    description:
      'Full-scale spatial computing and physical sensor telemetry deployment. Combines autonomous drone flight paths, dense 3D point cloud generation, and Bayesian Gaussian Process thermodynamic forecasting.',
    features: [
      'Autonomous UAV flight path telemetry & RTK-GPS workflows',
      'Dense 3D point clouds & Neural Radiance Field (NeRF) synthesis',
      'Bayesian Gaussian Process Regression microclimate decay algorithms',
      'Custom IoT telemetry ingestion server and analytics interface',
      'Complete intellectual property assignment and mathematical documentation',
    ],
    ctaText: 'Inquire for Spatial Scope',
    ctaHref: '/contact?tier=bespoke-spatial-twin',
  },
  {
    id: 'chief-systems-retainer',
    title: 'Fractional Chief Systems Architect Retainer',
    subtitle: 'Dedicated Strategic AI & Systems Oversight for High-Growth Operators',
    tier: 'Bespoke',
    priceDisplay: '$8,000 / mo',
    isHighTicket: true,
    format: 'Bespoke Engagement',
    badge: 'Executive Retainer',
    image: '/images/editorial/israel-observatory-cosmos.jpg',
    description:
      'Direct ongoing access to Israel Dare as your fractional Chief Systems Architect. Weekly architectural reviews, rapid prototyping bandwidth, and technical vetting for critical enterprise initiatives.',
    features: [
      'Strictly capped at 3 concurrent corporate clients worldwide',
      'Weekly 1-on-1 strategic architecture and code review calls',
      'Priority rapid prototyping bandwidth for mission-critical pipelines',
      'Direct private Slack / Signal channel with sub-4-hour SLA',
      'Zero long-term lock-in (quarterly milestone reviews)',
    ],
    ctaText: 'Submit Retainer Application',
    ctaHref: '/contact?tier=fractional-architect-retainer',
  },
]

export const products = catalogProducts
