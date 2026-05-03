import React from 'react'

/**
 * Atom: Badge
 * Small label tag for categories and tags
 */
export function Badge({ children, variant = 'solar', className = '' }) {
  const variants = {
    solar: 'bg-solar-500/15 text-solar-400 border border-solar-500/30',
    sky: 'bg-sky-500/15 text-sky-400 border border-sky-500/30',
    eco: 'bg-eco-500/15 text-eco-400 border border-eco-500/30',
    white: 'bg-white/10 text-white/70 border border-white/20',
  }

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-body font-medium tracking-wide ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
