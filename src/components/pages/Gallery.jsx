import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Images, Play, X, Clock } from 'lucide-react'
import { MainLayout } from '../templates/MainLayout'
import { GalleryGrid } from '../molecules/GalleryGrid'
import { SectionTitle } from '../atoms/SectionTitle'
import { galleryImages, galleryVideos } from '../../data/projects'

const categories = ['Todas', 'Proyectos', 'Colectores', 'Termotanques', 'Instalaciones', 'Calderas', 'Paneles']

const PHOTOS_LIMIT = 6

// ── Video Card ──────────────────────────────────────────────
function VideoCard({ video, onPlay }) {
  return (
    <div className="group glass-card solar-border overflow-hidden transition-all duration-300 hover:-translate-y-1">
      <button
        onClick={() => onPlay(video)}
        className="relative w-full aspect-video overflow-hidden block"
        aria-label={`Reproducir: ${video.title}`}
        style={{ backgroundColor: 'var(--bg-section-alt, #0A1628)' }}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 cursor-pointer"
            style={{ backgroundColor: '#1565C0', boxShadow: '0 0 30px rgba(21,101,192,0.5)' }}>
            <Play size={26} color="#FFFFFF" className="ml-1" fill="#FFFFFF" />
          </div>
        </div>
        <div className="absolute bottom-3 right-3 bg-black/70 text-white font-body text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <Clock size={10} />
          {video.duration}
        </div>
      </button>
      <div className="p-4">
        <h3 className="font-heading font-bold text-sm mb-1 line-clamp-1 transition-colors duration-200"
          style={{ color: 'var(--text-primary)' }}>
          {video.title}
        </h3>
        <p className="font-body text-xs leading-relaxed line-clamp-2"
          style={{ color: 'var(--text-faint)' }}>
          {video.description}
        </p>
      </div>
    </div>
  )
}

// ── Video Modal ──────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  if (!video) return null
  return (
    <div
      className="fixed inset-0 z-100 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full flex items-center justify-center text-white transition-colors duration-200"
          style={{ backgroundColor: 'rgba(255,255,255,0.10)' }}
          aria-label="Cerrar video"
        >
          <X size={20} />
        </button>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
          {video.type === 'local' ? (
            <video src={video.src} controls autoPlay className="w-full h-full" title={video.title} />
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
        <p className="mt-4 text-white/60 font-body text-sm text-center">{video.title}</p>
      </div>
    </div>
  )
}

// ── Page ────────────────────────────────────────────────────
export default function Gallery() {
  const [filter, setFilter]           = useState('Todas')
  const [activeVideo, setActiveVideo] = useState(null)
  const [tab, setTab]                 = useState('fotos')
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  const filtered = filter === 'Todas'
    ? galleryImages
    : galleryImages.filter((img) => img.categories.includes(filter))

  return (
    <>
      <Helmet>
        <title title>Galería de Instalaciones Solares | AYA Ingeniería S.A.S</title>
        <meta name="description" content="Fotos y videos de instalaciones de calentadores solares, termotanques y calderas realizadas por AYA Ingeniería S.A.S en toda Colombia." />
        <link rel="canonical" href="https://ayaingenieriasas.com/galeria" />
      </Helmet>

      <MainLayout>
        <div className="pt-28 pb-20 min-h-screen">
          <div className="container-custom">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-body text-sm mb-10"
              style={{ color: 'var(--text-faint)' }}>
              <Link to="/"
                className="transition-colors duration-200"
                style={{ color: 'var(--text-faint)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
              >
                Inicio
              </Link>
              <span>/</span>
              <span style={{ color: 'var(--text-muted)' }}>Galería</span>
            </nav>

            {/* Header icon */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: '#1565C0' }}>
                <Images size={28} color="#FFFFFF" />
              </div>
            </div>

            <SectionTitle
              eyebrow="Galería"
              title="Proyectos en"
              highlight="Fotos y Videos"
              subtitle="Conoce de primera mano los sistemas solares, colectores y termotanques que hemos instalado en toda Colombia."
              align="left"
              className="mb-10"
            />

            {/* ── Tabs Fotos / Videos ── */}
            <div className="flex gap-2 mb-8 pb-1"
              style={{ borderBottom: '1px solid var(--border-section)' }}>
              {[
                { key: 'fotos',  label: `📸 Fotos (${galleryImages.length})` },
                { key: 'videos', label: `🎬 Videos (${galleryVideos.length})` },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className="px-5 py-2.5 font-heading font-semibold text-sm rounded-t-xl transition-all duration-200 cursor-pointer"
                  style={{
                    backgroundColor: tab === key ? '#1565C0' : 'transparent',
                    color: tab === key ? '#FFFFFF' : 'var(--text-muted)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── Fotos ── */}
            {tab === 'fotos' && (
              <>
                {/* Filtros */}
                <div className="flex flex-wrap gap-2 mb-8" role="tablist">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      role="tab"
                      aria-selected={filter === cat}
                      onClick={() => { setFilter(cat); setShowAllPhotos(false) }}
                      className="px-4 py-2 rounded-full font-body text-sm transition-all duration-200 cursor-pointer"
                      style={{
                        backgroundColor: filter === cat ? '#1565C0' : 'transparent',
                        color: filter === cat ? '#FFFFFF' : 'var(--text-muted)',
                        border: filter === cat ? 'none' : '1px solid rgba(21,101,192,0.20)',
                        fontWeight: filter === cat ? '600' : '400',
                      }}
                    >
                      {cat}
                      <span style={{ marginLeft: '4px', opacity: 0.7 }}>
                        ({cat === 'Todas'
                          ? galleryImages.length
                          : galleryImages.filter(i => i.categories.includes(cat)).length})
                      </span>
                    </button>
                  ))}
                </div>

                <GalleryGrid
                  images={showAllPhotos ? filtered : filtered.slice(0, PHOTOS_LIMIT)}
                  columns={3}
                />

                {filtered.length > PHOTOS_LIMIT && (
                  <div className="mt-10 text-center">
                    <button onClick={() => setShowAllPhotos(v => !v)} className="btn-outline">
                      {showAllPhotos
                        ? 'Ver menos'
                        : `Ver más imágenes (${filtered.length - PHOTOS_LIMIT} restantes)`}
                    </button>
                  </div>
                )}
              </>
            )}

            {/* ── Videos ── */}
            {tab === 'videos' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryVideos.map((video) => (
                  <VideoCard key={video.id} video={video} onPlay={setActiveVideo} />
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 text-center glass-card solar-border p-8 max-w-2xl mx-auto">
              <p className="font-heading font-bold text-xl mb-2"
                style={{ color: 'var(--text-primary)' }}>
                ¿Quiere su proyecto aquí?
              </p>
              <p className="font-body text-sm mb-6"
                style={{ color: 'var(--text-muted)' }}>
                Contáctenos y hacemos realidad su proyecto de energía solar en Colombia.
              </p>
              
              <a  href="https://wa.me/573192312726?text=Hola,%20me%20interesa%20una%20cotización%20de%20energía%20solar"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ color: '#FFFFFF' }}
              >
                Solicitar Cotización Gratuita
              </a>
            </div>

          </div>
        </div>
      </MainLayout>

      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  )
}