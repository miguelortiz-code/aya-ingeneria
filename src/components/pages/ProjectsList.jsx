import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight } from 'lucide-react'
import { MainLayout } from '../templates/MainLayout'
import { SectionTitle } from '../atoms/SectionTitle'
import { Badge } from '../atoms/Badge'
import { projects } from '../../data/projects'
import { useInView } from '../../hooks/useInView'

const categories = ['Todos', 'Sector Salud', 'Sector Hotelero', 'Sector Educativo', 'Residencial', 'Ecoturismo', 'Comunidad Religiosa', 'Sector Rural', 'Recreativo']

function ProjectListCard({ project, index }) {
  const { ref, inView } = useInView()
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      ref={ref}
      to={`/proyectos/${project.slug}`}
      className={`group glass-card solar-border hover:border-solar-500/60 overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-card-hover block
        ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}
      `}
      style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'both' }}
      aria-label={`Ver proyecto: ${project.name}`}
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-navy-700">
        {project.thumbnail && !imgError ? (
          <img
            src={project.thumbnail}
            alt={`${project.name} - energía solar AYA Ingeniería`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{project.icon}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/40 transition-all duration-300" />
        <div className="absolute top-3 right-3">
          <Badge variant="white">{project.category}</Badge>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white font-heading font-semibold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300">
          <span>Ver galería</span>
          <ArrowRight size={12} className="text-solar-400" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="font-heading font-bold text-white text-lg mb-1 group-hover:text-solar-300 transition-colors duration-200">
          {project.name}
        </h2>
        <div className="flex items-center gap-1 text-white/40 text-xs font-body mb-3">
          <MapPin size={11} /> {project.location}
        </div>
        <p className="font-body text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="solar" className="text-[10px] px-2 py-0.5">{tag}</Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default function ProjectsList() {
  const [filter, setFilter] = useState('Todos')
  const filtered = filter === 'Todos' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <Helmet>
        <title>Proyectos Realizados | AYA Ingeniería S.A.S</title>
        <meta name="description" content="Portafolio de proyectos de energía solar de AYA Ingeniería S.A.S: clínicas, hoteles, colegios, ecolodges y residencias en toda Colombia." />
        <link rel="canonical" href="https://www.ayaingenieria.com/proyectos" />
      </Helmet>

      <MainLayout>
        <div className="pt-28 pb-20 min-h-screen">
          <div className="container-custom">

            <nav className="flex items-center gap-2 font-body text-sm text-white/40 mb-10" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-solar-400 transition-colors duration-200">Inicio</Link>
              <span>/</span>
              <span className="text-white/70">Proyectos</span>
            </nav>

            <SectionTitle
              eyebrow="Portafolio"
              title="Proyectos"
              highlight="Realizados"
              subtitle={`${projects.length} proyectos completados en toda Colombia.`}
              align="left"
              className="mb-12"
            />

            <div className="flex flex-wrap gap-2 mb-10" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project, i) => (
                <ProjectListCard key={project.id} project={project} index={i} />
              ))}
            </div>

          </div>
        </div>
      </MainLayout>
    </>
  )
}