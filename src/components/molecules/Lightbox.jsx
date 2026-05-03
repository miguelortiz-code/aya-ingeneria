import React, { useEffect, useCallback } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

/**
 * Molecule: Lightbox
 * Full-screen image viewer with prev/next navigation
 */
export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (!images[currentIndex]) return null
  const img = images[currentIndex]

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-200 z-10"
        aria-label="Cerrar visor"
      >
        <X size={22} />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 text-white/70 font-body text-sm px-4 py-1.5 rounded-full">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Prev */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-solar-500/40 flex items-center justify-center text-white transition-all duration-200 z-10"
          aria-label="Imagen anterior"
        >
          <ChevronLeft size={26} />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full mx-16 flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
        />
        {img.caption && (
          <p className="mt-4 text-white/60 font-body text-sm text-center">{img.caption}</p>
        )}
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-solar-500/40 flex items-center justify-center text-white transition-all duration-200 z-10"
          aria-label="Siguiente imagen"
        >
          <ChevronRight size={26} />
        </button>
      )}

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); /* jump to index handled by parent */ }}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${i === currentIndex ? 'bg-solar-400 w-6' : 'bg-white/30 hover:bg-white/60'}`}
              aria-label={`Ir a imagen ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
