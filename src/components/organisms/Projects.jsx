import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionTitle } from '../atoms/SectionTitle'
import { ProjectCard } from '../molecules/ProjectCard'
import { projects } from '../../data/projects'

export function Projects() {
  // Solo los primeros 3 en el home
  const featured = projects.slice(0, 3)

  return (
    <section
      id="proyectos"
      className="section-padding relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      <div className="absolute inset-0  pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Proyectos Realizados"
          title="Nuestro"
          highlight="Portafolio"
          subtitle="Hemos completado proyectos en clínicas, hoteles, colegios, ecolodges y residencias a lo largo de Colombia, siempre con la misma calidad y compromiso."
          className="mb-12"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>

        {/* Ver todos */}
        <div className="mt-12 text-center">
          <Link
            to="/proyectos"
            className="inline-flex items-center gap-2 btn-primary"
          >
            Ver todos los proyectos
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}