import React from 'react'
import { SolarIcon } from '../atoms/SolarIcon'
import { useInView } from '../../hooks/useInView'

/**
 * Molecule: ServiceCard
 * Displays a single service with icon, title and description
 */
export function ServiceCard({ icon, title, description, index = 0 }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`group relative glass-card solar-border p-6 hover:border-solar-500/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover cursor-default
        ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}
      `}
      style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'both' }}
    >
      {/* Ambient glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-solar-500/0 group-hover:bg-solar-500/5 transition-all duration-500" />

      {/* Icon */}
      <div className="relative w-14 h-14 rounded-xl bg-solar-500/10 border border-solar-500/20 flex items-center justify-center mb-5 group-hover:bg-solar-500/20 group-hover:border-solar-500/50 transition-all duration-300">
        <SolarIcon name={icon} size={26} className="text-solar-400" />
      </div>

      {/* Content */}
      <h3 className="font-heading font-bold text-white text-lg mb-3 group-hover:text-solar-300 transition-colors duration-300">
        {title}
      </h3>
      <p className="font-body text-white/55 text-sm leading-relaxed">
        {description}
      </p>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-solar-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  )
}
