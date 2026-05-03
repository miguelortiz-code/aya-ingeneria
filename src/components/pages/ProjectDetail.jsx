import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, MapPin, Calendar, User, Tag } from 'lucide-react'
import { projects } from '../../data/projects'
import { GalleryGrid } from '../molecules/GalleryGrid'
import { Badge } from '../atoms/Badge'
import { Button } from '../atoms/Button'
import { MainLayout } from '../templates/MainLayout'

/**
 * Page: ProjectDetail
 * Individual project page with full description and image gallery
 * Route: /proyectos/:slug
 */
export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center text-center px-4 pt-24">
          <div>
            <p className="text-6xl mb-4">🔍</p>
            <h1 className="font-heading font-bold text-white text-3xl mb-3">Proyecto no encontrado</h1>
            <p className="text-white/50 font-body mb-8">El proyecto que buscas no existe o fue removido.</p>
            <Link to="/proyectos">
              <Button variant="primary">Ver todos los proyectos</Button>
            </Link>
          </div>
        </div>
      </MainLayout>
    )
  }

  // Related projects (same category, excluding current)
  const related = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{project.name} | AYA Ingeniería S.A.S</title>
        <meta name="description" content={`${project.description} Proyecto realizado por AYA Ingeniería S.A.S en ${project.location}.`} />
        <meta name="keywords" content={`${project.tags.join(', ')}, energía solar Colombia, AYA Ingeniería, ${project.location}`} />
        <link rel="canonical" href={`https://www.ayaingenieria.com/proyectos/${project.slug}`} />
        <meta property="og:title" content={`${project.name} | AYA Ingeniería S.A.S`} />
        <meta property="og:description" content={project.description} />
        <meta property="og:url" content={`https://www.ayaingenieria.com/proyectos/${project.slug}`} />
      </Helmet>

      <MainLayout>
        <div className="pt-28 pb-20 min-h-screen">
          <div className="container-custom">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-body text-sm text-white/40 mb-8" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-solar-400 transition-colors duration-200">Inicio</Link>
              <span>/</span>
              <Link to="/proyectos" className="hover:text-solar-400 transition-colors duration-200">Proyectos</Link>
              <span>/</span>
              <span className="text-white/70">{project.name}</span>
            </nav>

            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-white/50 hover:text-solar-400 font-body text-sm mb-10 transition-colors duration-200 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
              Volver
            </button>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main content */}
              <div className="lg:col-span-2">
                {/* Header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <Badge variant="solar">{project.category}</Badge>
                  </div>
                  <h1 className="font-heading font-bold text-white text-4xl lg:text-5xl mb-4">
                    {project.name}
                  </h1>
                  <p className="font-body text-white/60 text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="sky">
                      <Tag size={11} className="mr-1" />
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Gallery */}
                <section aria-label={`Galería de fotos - ${project.name}`}>
                  <h2 className="font-heading font-bold text-white text-2xl mb-6">
                    Galería del Proyecto
                    <span className="ml-3 text-solar-400/60 text-base font-body font-normal">
                      ({project.gallery.length} fotos)
                    </span>
                  </h2>
                  <GalleryGrid images={project.gallery} columns={2} />
                </section>
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                {/* Project info card */}
                <div className="glass-card solar-border p-6 mb-6 sticky top-24">
                  <h3 className="font-heading font-bold text-white text-lg mb-5">
                    Ficha del Proyecto
                  </h3>
                  <div className="space-y-4">
                    {[
                      { Icon: User, label: 'Cliente', value: project.client },
                      { Icon: MapPin, label: 'Ubicación', value: project.location },
                      { Icon: Calendar, label: 'Año', value: project.year },
                      { Icon: Tag, label: 'Categoría', value: project.category },
                    ].map(({ Icon, label, value }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-solar-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon size={15} className="text-solar-400" />
                        </div>
                        <div>
                          <p className="font-body text-white/40 text-xs uppercase tracking-wider">{label}</p>
                          <p className="font-body text-white text-sm font-medium">{value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10">
                    <p className="font-body text-white/50 text-xs mb-4">
                      ¿Quiere un proyecto similar para su empresa?
                    </p>
                    <Link to="/#contacto">
                      <Button variant="primary" size="sm" className="w-full justify-center">
                        Solicitar Cotización
                      </Button>
                    </Link>
                  </div>
                </div>
              </aside>
            </div>

            {/* Related projects */}
            {related.length > 0 && (
              <section className="mt-20" aria-label="Proyectos relacionados">
                <h2 className="font-heading font-bold text-white text-2xl mb-8">
                  Proyectos Relacionados
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((p) => (
                    <Link
                      key={p.id}
                      to={`/proyectos/${p.slug}`}
                      className="glass-card solar-border hover:border-solar-500/50 p-5 group transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className={`h-24 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-4 text-4xl group-hover:scale-105 transition-transform duration-300`}>
                        {p.icon}
                      </div>
                      <h3 className="font-heading font-bold text-white text-sm mb-1 group-hover:text-solar-300 transition-colors duration-200">
                        {p.name}
                      </h3>
                      <p className="font-body text-white/40 text-xs flex items-center gap-1">
                        <MapPin size={10} /> {p.location}
                      </p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      </MainLayout>
    </>
  )
}
