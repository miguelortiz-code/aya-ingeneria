import React from 'react'
import { StatCounter } from '../molecules/StatCounter'
import { projectStats } from '../../data/projects'

export function Stats() {
  return (
    <section
      className="py-16 relative overflow-hidden section-stats"
      aria-label="Estadísticas de AYA Ingeniería"
    >
      {/* SIN ningún div de fondo adicional aquí */}
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