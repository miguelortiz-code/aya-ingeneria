import React from 'react'
import { CheckCircle, Sun, Users, Award } from 'lucide-react'
import { SectionTitle } from '../atoms/SectionTitle'
import { useInView } from '../../hooks/useInView'

const highlights = [
  'Calentadores solares de alta eficiencia',
  'Paneles solares para hogares y empresas',
  'Calderas eléctricas y a gas certificadas',
  'Fabricación propia de termotanques',
  'Servicio y mantenimiento especializado',
  'Proyectos en todo el territorio nacional',
]

/**
 * Organism: About
 * Company identity and "who we are" section
 */
export function About() {
  const { ref: leftRef, inView: leftIn } = useInView()
  const { ref: rightRef, inView: rightIn } = useInView()

  return (
    <section
      id="nosotros"
      className="section-padding bg-navy-800/30 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background accent */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-solar-500/3 to-transparent pointer-events-none" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div
            ref={leftRef}
            className={`transition-all duration-700 ${leftIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <SectionTitle
              eyebrow="Quiénes Somos"
              title="Experiencia en"
              highlight="energía solar"
              align="left"
              className="mb-6"
            />

            <p className="font-body text-white/60 text-lg leading-relaxed mb-8">
              Somos <strong className="text-white">AYA Ingeniería S.A.S</strong>, una empresa colombiana con gran
              experiencia en el área de calentadores, paneles solares, calderas eléctricas y a gas. Nuestros productos
              están diseñados para <strong className="text-solar-400">generar agua caliente y luz</strong> por medio
              de la energía solar, mejorando la eficiencia y reduciendo costos en hogares, hospitales, hoteles y empresas.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-white/65 text-sm">
                  <CheckCircle size={17} className="text-solar-400 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — cards */}
          <div
            ref={rightRef}
            className={`grid grid-cols-2 gap-5 transition-all duration-700 delay-200 ${rightIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {[
              {
                Icon: Sun,
                color: 'from-solar-500/20 to-solar-600/5',
                border: 'border-solar-500/30',
                iconColor: 'text-solar-400',
                title: 'Tecnología Solar',
                desc: 'Equipos de última generación para máxima eficiencia energética',
              },
              {
                Icon: Award,
                color: 'from-sky-500/20 to-sky-600/5',
                border: 'border-sky-500/30',
                iconColor: 'text-sky-400',
                title: 'Calidad Garantizada',
                desc: 'Materiales certificados y procesos de fabricación de alta calidad',
              },
              {
                Icon: Users,
                color: 'from-eco-500/20 to-eco-600/5',
                border: 'border-eco-500/30',
                iconColor: 'text-eco-400',
                title: 'Equipo Experto',
                desc: 'Ingenieros y técnicos especializados en energías renovables',
              },
              {
                Icon: CheckCircle,
                color: 'from-solar-400/20 to-solar-500/5',
                border: 'border-solar-400/30',
                iconColor: 'text-solar-300',
                title: 'Cobertura Nacional',
                desc: 'Proyectos en Bogotá, Antioquia, Cundinamarca, San Andrés y más',
              },
            ].map(({ Icon, color, border, iconColor, title, desc }) => (
              <div
                key={title}
                className={`glass-card bg-gradient-to-br ${color} border ${border} p-5 hover:-translate-y-1 transition-transform duration-300 group`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} className={iconColor} />
                </div>
                <h3 className="font-heading font-bold text-white text-sm mb-2">{title}</h3>
                <p className="font-body text-white/50 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
