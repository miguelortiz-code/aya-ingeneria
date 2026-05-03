import React from 'react'

/**
 * Atom: SectionTitle
 * Consistent heading block for all sections
 */
export function SectionTitle({ eyebrow, title, highlight, subtitle, align = 'center', className = '' }) {
  const alignClass = {
    center: 'text-center mx-auto',
    left: 'text-left',
    right: 'text-right ml-auto',
  }

  return (
    <div className={`max-w-3xl ${alignClass[align]} ${className}`}>
      {eyebrow && (
        <span className="inline-block text-solar-500 font-heading font-semibold text-sm tracking-[0.2em] uppercase mb-3">
          ✦ {eyebrow} ✦
        </span>
      )}
      <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-r from-solar-500 to-solar-300 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 text-white/60 font-body text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
