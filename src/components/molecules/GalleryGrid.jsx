import { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { Lightbox } from './Lightbox'
import { useInView } from '../../hooks/useInView'
import { projects } from '../../data/projects'

/**
 * Molecule: GalleryGrid
 * Responsive image grid that opens a Lightbox on click
 */
export function GalleryGrid({ images, columns = 3 }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const { ref, inView } = useInView()

  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  const handlePrev = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length)
  const handleNext = () =>
    setLightboxIndex((i) => (i + 1) % images.length)

  return (
    <>
      <div
        ref={ref}
        className={`grid ${colClass} gap-4`}
      >
        {images.map((img, i) => (
          <button
            key={img.id}
            onClick={() => setLightboxIndex(i)}
            className={`group relative overflow-hidden rounded-2xl aspect-4/3 bg-navy-700/50 cursor-zoom-in
              ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}
            `}
            style={{ animationDelay: `${i * 60}ms`, animationFillMode: 'both' }}
            aria-label={`Ver imagen: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/50 transition-all duration-300 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full flex items-center cursor-pointer justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300"
                style={{ backgroundColor: '#1565C0' }}>
                <ZoomIn size={22} color="#FFFFFF" />
              </div>
            </div>
{/* Caption: nombre del proyecto, o el caption de la foto si no tiene proyecto */}
{(() => {
  const project = img.projectSlug
    ? projects.find(p => p.slug === img.projectSlug)
    : null
  const label = project?.name || img.caption
  if (!label) return null
  return (
    <div
      className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
      style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}
    >
      <p className="font-body text-xs font-semibold text-left" style={{ color: '#FFFFFF' }}>
        {label}
      </p>
    </div>
  )
})()}
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}


