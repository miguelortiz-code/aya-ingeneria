import React, { useState } from 'react'
import { ZoomIn } from 'lucide-react'
import { Lightbox } from './Lightbox'
import { useInView } from '../../hooks/useInView'

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
            className={`group relative overflow-hidden rounded-2xl aspect-[4/3] bg-navy-700/50 cursor-zoom-in
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
              <div className="w-12 h-12 rounded-full bg-solar-500/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                <ZoomIn size={22} className="text-navy-900" />
              </div>
            </div>
            {/* Caption */}
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-900/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-body text-white text-xs">{img.caption}</p>
              </div>
            )}
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
