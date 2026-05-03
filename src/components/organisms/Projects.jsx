import React, { useState } from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { ProjectCard } from '../molecules/ProjectCard'
import { Button } from '../atoms/Button'
import { projects } from '../../data/projects'

const categories = ['Todos', 'Sector Salud', 'Sector Hotelero', 'Residencial', 'Sector Educativo', 'Ecoturismo', 'Comunidad Religiosa', 'Sector Rural', 'Recreativo']

/**
 * Organism: Projects
 * Filterable grid of completed projects
 */
export function Projects() {
  const [filter, setFilter] = useState('Todos')
  const [showAll, setShowAll] = useState(false)

  const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter)
  const visible = showAll ? filtered : filtered.slice(0, 6)

  return (
    <section
      id="proyectos"
      className="section-padding relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-700/20 to-navy-900/40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Proyectos Realizados"
          title="Nuestro"
          highlight="Portafolio"
          subtitle="Hemos completado proyectos en clínicas, hoteles, colegios, ecolodges y residencias a lo largo de Colombia, siempre con la misma calidad y compromiso."
          className="mb-12"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12" role="tablist" aria-label="Filtro de proyectos">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={filter === cat}
              onClick={() => { setFilter(cat); setShowAll(false) }}
              className={`px-4 py-2 rounded-full font-body text-sm transition-all duration-200
                ${filter === cat
                  ? 'bg-solar-500 text-navy-900 font-semibold shadow-solar'
                  : 'bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>

        {/* Show more */}
        {filtered.length > 6 && (
          <div className="mt-10 text-center">
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Ver menos' : `Ver todos (${filtered.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
