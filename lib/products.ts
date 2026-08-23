export type ProductType = 'eBook' | 'Audio' | 'Video' | 'Template' | 'Framework'

export interface Product {
  id: string
  title: string
  subtitle: string
  type: ProductType
  price: number | 'Free'
  description: string
  image: string
  whopCheckoutUrl?: string
  downloadUrl?: string
  features: string[]
  format: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'ai-agency-blueprint',
    title: 'The AI Agency Blueprint',
    subtitle: 'Enterprise System Architecture & Client Acquisition Engine',
    type: 'eBook',
    price: 49.99,
    description:
      'A comprehensive, step-by-step master architecture for founding and scaling an autonomous AI automation agency. Covers high-tier positioning, contract pricing, client acquisition scripts, and enterprise service delivery protocols.',
    image: '/images/DGF_6811 copy.jpg',
    whopCheckoutUrl: 'https://whop.com',
    format: 'Comprehensive PDF Guide + Notion Workspace',
    badge: 'Core Blueprint',
    features: [
      'Complete agency setup & legal positioning framework',
      'Client acquisition scripts & verified outreach templates',
      'Enterprise pricing matrices & retainers breakdown',
      'Production n8n and Make service delivery workflows',
      'Lifetime system updates included',
    ],
  },
  {
    id: 'automation-mastery-audio',
    title: 'Automation Mastery Audio',
    subtitle: 'Executive Audio Masterclass on Systems & Workflow Optimization',
    type: 'Audio',
    price: 19.99,
    description:
      'High-bandwidth audio masterclass for executives, founders, and engineers on the go. In-depth strategic breakdowns of low-latency API orchestrations, deterministic pipelines, and high-concurrency systems design.',
    image: '/images/DGF_6818 copy.jpg',
    whopCheckoutUrl: 'https://whop.com',
    format: 'High-Bitrate MP3 Audio Series (6+ Hours)',
    badge: 'Audio Masterclass',
    features: [
      '6+ hours of unfiltered technical & strategic audio',
      'High-concurrency workflow optimization tactics',
      'AI agentic orchestration deep-dives',
      'Downloadable high-bitrate MP3 format',
      'Executive summary cheat sheets & slides included',
    ],
  },
  {
    id: 'sales-funnel-template-pack',
    title: 'Autonomous Funnel Template Pack',
    subtitle: 'High-Converting Multi-Channel Funnel Architecture',
    type: 'Template',
    price: 'Free',
    description:
      'Engineered sales funnel templates designed for ClickFunnels and GoHighLevel. Pre-configured with conversion psychology, lead qualification logic, and automated nurture webhooks. Completely complimentary for the ecosystem.',
    image: '/images/DGF_5744 copy.jpg',
    downloadUrl: '/downloads/sales-funnel-templates.zip',
    format: 'Instant GHL / ClickFunnels Deployment Pack',
    badge: 'Complimentary Access',
    features: [
      'ClickFunnels & GoHighLevel one-click deploy',
      'Lead capture & high-ticket qualification sequences',
      'Automated email & SMS follow-up logic',
      'Comprehensive deployment walkthrough documentation',
      'Zero credit card required',
    ],
  },
  {
    id: 'freelance-to-founder',
    title: 'Freelance to Founder System',
    subtitle: 'The Engineering Matrix for Transitioning from Gig Worker to Sovereign Founder',
    type: 'eBook',
    price: 29.99,
    description:
      'The exact operating system Israel Dare used to rise from final-year family adversity to Top Rated Plus on Upwork (Top 3% globally). Transition from trading hours for dollars into building scalable, productized systems.',
    image: '/images/Izzy.jpg',
    whopCheckoutUrl: 'https://whop.com',
    format: 'Interactive PDF + Operational Notion Matrix',
    badge: 'Operating System',
    features: [
      'Business systemisation & delegation framework',
      'Upwork Top 3% profile optimization playbook',
      'Contract proposal templates that close high-ticket clients',
      'Mindset & focus protocols under extreme pressure',
      'Editable Notion project & task manager',
    ],
  },
]
