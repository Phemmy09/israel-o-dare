import React from 'react'

interface LogoProps {
  variant?: 'full' | 'monogram' | 'wordmark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  withSubtitle?: boolean
}

export default function Logo({
  variant = 'full',
  size = 'md',
  className = '',
  withSubtitle = true,
}: LogoProps) {
  const monogramSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  }

  const wordmarkSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-xl',
  }

  const MonogramSvg = () => (
    <div
      className={`relative ${monogramSizes[size]} bg-black border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-white shrink-0`}
      style={{ boxShadow: '0 0 0 1px rgba(0,0,0,1)' }}
    >
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1.5"
      >
        {/* Monogram "I" */}
        <line x1="12" y1="9" x2="18" y2="9" stroke="white" strokeWidth="1.75" />
        <line x1="15" y1="9" x2="15" y2="31" stroke="white" strokeWidth="2.25" />
        <line x1="12" y1="31" x2="18" y2="31" stroke="white" strokeWidth="1.75" />

        {/* Monogram "D" */}
        <line x1="21" y1="9" x2="21" y2="31" stroke="white" strokeWidth="2.25" />
        <path
          d="M21 9.5H26.5C31.5 9.5 34.5 13.5 34.5 20C34.5 26.5 31.5 30.5 26.5 30.5H21"
          stroke="white"
          strokeWidth="2.25"
          strokeLinecap="square"
        />

        {/* Signature Carmine Focal Accent Pip */}
        <circle cx="34" cy="9.5" r="1.5" fill="#dc2626" />
      </svg>
    </div>
  )

  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <MonogramSvg />
      </div>
    )
  }

  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col ${className}`}>
        <span
          className={`font-sans font-extrabold ${wordmarkSizes[size]} tracking-[0.24em] text-white uppercase leading-none`}
        >
          ISRAEL DARE
        </span>
        {withSubtitle && (
          <span className="font-mono text-[8px] tracking-[0.28em] text-zinc-400 uppercase mt-1">
            SYSTEMS · SPATIAL IP · RESEARCH
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={`inline-flex items-center gap-3.5 group ${className}`}>
      <MonogramSvg />
      <div className="flex flex-col">
        <span
          className={`font-sans font-extrabold ${wordmarkSizes[size]} tracking-[0.24em] text-white uppercase leading-none group-hover:text-zinc-100 transition-colors`}
        >
          ISRAEL DARE
        </span>
        {withSubtitle && (
          <span className="font-mono text-[8px] tracking-[0.26em] text-zinc-400 uppercase mt-1">
            SYSTEMS · SPATIAL IP · RESEARCH
          </span>
        )}
      </div>
    </div>
  )
}
