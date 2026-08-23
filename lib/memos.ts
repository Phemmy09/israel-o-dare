export interface Memo {
  id: string
  date: string
  category: 'Systems' | 'Spatial & Drones' | 'AI & Math' | 'Philosophy' | 'Research'
  content: string
  tags?: string[]
}

export const curatedMemos: Memo[] = [
  {
    id: 'memo-01',
    date: '2026-08-20',
    category: 'Spatial & Drones',
    content:
      'Photogrammetry is not just taking aerial photos; it is calculating high-density 3D spatial point clouds and neural radiance fields (NeRFs) from autonomous UAV telemetry. When you pair drone multispectral LiDAR with real-time Gaussian Process Regression, physical geography transforms into an interactive, computational digital twin.',
    tags: ['#Photogrammetry', '#Drones', '#SpatialAI', '#DigitalTwins'],
  },
  {
    id: 'memo-02',
    date: '2026-08-16',
    category: 'Systems',
    content:
      'Most people view AI as chat interfaces. The elite view AI as asynchronous, high-concurrency deterministic pipelines. Zero-loss data ingestion, row-level database security constraints, and automated multi-agent arbitration will power the next decade of sovereign infrastructure.',
    tags: ['#SystemsArchitecture', '#AgenticAI', '#ZeroLoss'],
  },
  {
    id: 'memo-03',
    date: '2026-08-11',
    category: 'AI & Math',
    content:
      'Gaussian Process Regression is the most under-leveraged mathematical tool in physical systems modeling. It gives you continuous Bayesian confidence bounds on non-linear thermodynamic decay rates. In post-harvest storage and environmental micro-climates, knowing what you don\'t know is what prevents catastrophic failure.',
    tags: ['#GaussianProcess', '#Mathematics', '#Thermodynamics'],
  },
  {
    id: 'memo-04',
    date: '2026-08-04',
    category: 'Philosophy',
    content:
      'Easy work bores me. The hardest challenges—navigating tragic loss at 22, graduating First Class in Engineering, mastering violin polyphony, and building autonomous enterprise systems—all share the same truth: pressure is a privilege when you convert it into uncompromising discipline.',
    tags: ['#Discipline', '#Execution', '#Crucible'],
  },
  {
    id: 'memo-05',
    date: '2026-07-28',
    category: 'Research',
    content:
      'Sovereign food security will not be solved by chemical fertilizers alone. It will be solved by bio-digital supply chains: edge IoT telemetry, autonomous UAV aerial scanning, and parametric insurance smart contracts that guarantee smallholder liquidity before crops decay.',
    tags: ['#BioDigital', '#Agronomics', '#SovereignSystems'],
  },
]

export function getMemos(): Memo[] {
  return curatedMemos.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}
