import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Images, Play, X, Clock } from 'lucide-react'
import { MainLayout } from '../templates/MainLayout'
import { GalleryGrid } from '../molecules/GalleryGrid'
import { SectionTitle } from '../atoms/SectionTitle'
import { galleryImages, galleryVideos } from '../../data/projects'

const categories = ['Todas', 'Proyectos', 'Colectores', 'Termotanques', 'Instalaciones']

// ── Video Card ──────────────────────────────────────────────
function VideoCard({ video, onPlay }) {
  return (
    <div className="group glass-card solar-border hover:border-solar-500/50 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      {/* Thumbnail con botón play */}
      <button
        onClick={() => onPlay(video)}
        className="relative w-full aspect-video overflow-hidden block bg-navy-700"
        aria-label={`Reproducir: ${video.title}`}
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/20 transition-all duration-300" />
        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-solar-500/90 group-hover:bg-solar-400 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-solar">
            <Play size={26} className="text-navy-900 ml-1" fill="currentColor" />
          </div>
        </div>
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white font-body text-xs px-2 py-1 rounded-md flex items-center gap-1">
          <Clock size={10} />
          {video.duration}
        </div>
      </button>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-heading font-bold text-white text-sm mb-1 line-clamp-1 group-hover:text-solar-300 transition-colors duration-200">
          {video.title}
        </h3>
        <p className="font-body text-white/45 text-xs leading-relaxed line-clamp-2">
          {video.description}
        </p>
      </div>
    </div>
  )
}

// ── YouTube Modal ────────────────────────────────────────────
function VideoModal({ video, onClose }) {
  if (!video) return null
  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200"
          aria-label="Cerrar video"
        >
          <X size={20} />
        </button>

        {/* iframe YouTube */}
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black">
            {video.type === 'local' ? (
              <video
                src={video.src}
                controls
                autoPlay
                className="w-full h-full"
                title={video.title}
              />
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
  const [filter, setFilter] = useState('Todas')
  const [activeVideo, setActiveVideo] = useState(null)
  const [tab, setTab] = useState('fotos') // 'fotos' | 'videos'

  const filtered = filter === 'Todas' 
  ? galleryImages 
  : galleryImages.filter((img) => img.categories.includes(filter))

  return (
    <>
      <Helmet>
        <title>Galería de Proyectos | AYA Ingeniería S.A.S</title>
        <meta name="description" content="Galería fotográfica y videos de proyectos de energía solar realizados por AYA Ingeniería S.A.S en Colombia." />
        <link rel="canonical" href="https://www.ayaingenieria.com/galeria" />
      </Helmet>

      <MainLayout>
        <div className="pt-28 pb-20 min-h-screen">
          <div className="container-custom">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-body text-sm text-white/40 mb-10">
              <Link to="/" className="hover:text-solar-400 transition-colors duration-200">Inicio</Link>
              <span>/</span>
              <span className="text-white/70">Galería</span>
            </nav>

            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 bg-solar-500/15 border border-solar-500/30 rounded-2xl flex items-center justify-center">
                <Images size={28} className="text-solar-400" />
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
            <div className="flex gap-2 mb-8 border-b border-white/10 pb-1">
              {[
                { key: 'fotos', label: `📸 Fotos (${galleryImages.length})` },
                { key: 'videos', label: `🎬 Videos (${galleryVideos.length})` },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className={`px-5 py-2.5 font-heading font-semibold text-sm rounded-t-xl transition-all duration-200
                    ${tab === key
                      ? 'bg-solar-500 text-navy-900'
                      : 'text-white/50 hover:text-white'
                    }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* ── Fotos ── */}
            {tab === 'fotos' && (
              <>
                {/* Filter */}
                <div className="flex flex-wrap gap-2 mb-8" role="tablist">
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
                      <span className="ml-1.5 text-xs opacity-60">
                        ({cat === 'Todas'
                          ? galleryImages.length
                          : galleryImages.filter(i => i.categories.includes(cat)).length})
                      </span>
                    </button>
                  ))}
                </div>

                <GalleryGrid images={filtered} columns={3} />
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
              <p className="font-heading font-bold text-white text-xl mb-2">
                ¿Quiere su proyecto aquí?
              </p>
              <p className="font-body text-white/55 text-sm mb-6">
                Contáctenos y hacemos realidad su proyecto de energía solar en Colombia.
              </p>
              <Link to="/#contacto">
                <button className="btn-primary">Solicitar Cotización Gratuita</button>
              </Link>
            </div>

          </div>
        </div>
      </MainLayout>

      {/* Video modal */}
      <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </>
  )
}