import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, ArrowRight, Images } from 'lucide-react'
import { Badge } from '../atoms/Badge'
import { useInView } from '../../hooks/useInView'

export function ProjectCard({ slug, name, location, category, description, tags, icon, thumbnail, color, index = 0 }) {
  const { ref, inView } = useInView()
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      to={`/proyectos/${slug}`}
      ref={ref}
      className={`group glass-card solar-border hover:border-solar-500/50 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover block
        ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}
      `}
      style={{ animationDelay: `${index * 70}ms`, animationFillMode: 'both' }}
      aria-label={`Ver proyecto: ${name}`}
    >
      <div className="relative h-44 overflow-hidden bg-navy-700">
        {thumbnail && !imgError ? (
          <img
            src={thumbnail}
            alt={`${name} - proyecto de energía solar AYA Ingeniería`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${color} flex items-center justify-center`}>
            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{icon}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-navy-900/0 group-hover:bg-navy-900/45 transition-all duration-300" />
        <div className="absolute top-3 right-3">
          <Badge variant="white">{category}</Badge>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white font-heading font-semibold text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <Images size={13} className="text-solar-400" />
          <span>Ver galería</span>
          <ArrowRight size={12} className="text-solar-400" />
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-heading font-bold text-white text-base mb-1 group-hover:text-solar-300 transition-colors duration-300 line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center gap-1 text-white/40 text-xs font-body mb-3">
          <MapPin size={11} />
          <span>{location}</span>
        </div>
        <p className="font-body text-white/55 text-sm leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="solar" className="text-[10px] px-2 py-0.5">
              {tag}
            </Badge>
          ))}
        </div>
        {/* Botón ver detalle */}
        <div className="mt-4 pt-4 border-t border-white/10">
          <span className="inline-flex items-center gap-1.5 text-solar-400 font-heading font-semibold text-sm group-hover:gap-2.5 transition-all duration-200">
            Ver detalle
            <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  )
}