import React from 'react'
import { StatCounter } from '../molecules/StatCounter'
import { projectStats } from '../../data/projects'

/**
 * Organism: Stats
 * Animated statistics bar
 */
export function Stats() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      aria-label="Estadísticas de AYA Ingeniería"
    >
      {/* Gold band */}
      <div className="absolute inset-0 bg-gradient-to-r from-solar-600/20 via-solar-500/15 to-solar-600/20 pointer-events-none" />
      <div className="absolute inset-0 border-y border-solar-500/20" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {projectStats.map(({ value, suffix, label }, i) => (
            <StatCounter key={label} value={value} suffix={suffix} label={label} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
