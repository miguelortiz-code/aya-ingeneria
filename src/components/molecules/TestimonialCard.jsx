import React from 'react'
import { Star, Quote } from 'lucide-react'
import { useInView } from '../../hooks/useInView'

/**
 * Molecule: TestimonialCard
 * Displays a client testimonial with rating, quote and author info
 */
export function TestimonialCard({ name, role, company, text, rating, initial, index = 0 }) {
  const { ref, inView } = useInView()

  return (
    <div
      ref={ref}
      className={`group glass-card solar-border hover:border-solar-500/40 p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover relative overflow-hidden
        ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}
      `}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      {/* Large decorative quote */}
      <Quote
        size={64}
        className="absolute top-4 right-4 text-solar-500/5 group-hover:text-solar-500/10 transition-colors duration-500"
      />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={15} className="text-solar-400 fill-solar-400" />
        ))}
      </div>

      {/* Quote text */}
      <p className="font-body text-white/65 text-sm leading-relaxed mb-6 italic relative z-10">
        &ldquo;{text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 font-heading font-bold text-base"
          style={{
            background: 'linear-gradient(135deg, #1565C0, #29B6F6)',
            color: '#FFFFFF',
          }}
        >
          {initial}
        </div>
        <div>
          <p className="font-heading font-bold text-white text-sm">{name}</p>
          <p className="font-body text-white/45 text-xs">{role}</p>
          <p className="font-body text-solar-400/80 text-xs">{company}</p>
        </div>
      </div>
    </div>
  )
}
