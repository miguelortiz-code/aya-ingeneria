import React from 'react'
import { Target, Eye, Lightbulb } from 'lucide-react'
import { SectionTitle } from '../atoms/SectionTitle'
import { useInView } from '../../hooks/useInView'

/**
 * Organism: MissionVision
 * Mission, Vision and Values section
 */
export function MissionVision() {
  const { ref, inView } = useInView()

  const cards = [
    {
      Icon: Target,
      label: 'Nuestra Misión',
      color: 'solar',
      gradient: 'from-solar-500/15 to-solar-600/5',
      border: 'border-solar-500/30',
      iconBg: 'bg-solar-500/20',
      iconColor: 'text-solar-400',
      text: 'Fabricar y comercializar nuestros productos y servicios de mantenimiento a sistemas solares, calderas eléctricas y a gas, ofreciendo un ahorro significativo por medio de procesos eficientes y sostenibles.',
    },
    {
      Icon: Eye,
      label: 'Nuestra Visión',
      color: 'sky',
      gradient: 'from-sky-500/15 to-sky-600/5',
      border: 'border-sky-500/30',
      iconBg: 'bg-sky-500/20',
      iconColor: 'text-sky-400',
      text: 'Seremos una empresa reconocida a nivel nacional por innovación y calidad de transformación, mejorando la calidad de vida de nuestros empleados y clientes, e inspirando a otros a adoptar la energía solar como fuente principal.',
    },
    {
      Icon: Lightbulb,
      label: 'Nuestros Valores',
      color: 'eco',
      gradient: 'from-eco-500/15 to-eco-600/5',
      border: 'border-eco-500/30',
      iconBg: 'bg-eco-500/20',
      iconColor: 'text-eco-400',
      values: ['Innovación continua', 'Calidad sin compromisos', 'Sostenibilidad ambiental', 'Compromiso con el cliente', 'Integridad y transparencia'],
    },
  ]

  return (
    <section
      className="section-padding relative overflow-hidden"
      aria-labelledby="mission-heading"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 bg-amber-glow pointer-events-none" />
      <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-r from-sky-500/3 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Misión & Visión"
          title="Lo que nos"
          highlight="impulsa"
          subtitle="Nuestra razón de ser es transformar la manera en que Colombia consume energía, ofreciendo soluciones limpias, eficientes y accesibles para todos."
          className="mb-16"
        />

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
        >
          {cards.map(({ Icon, label, gradient, border, iconBg, iconColor, text, values }, i) => (
            <div
              key={label}
              className={`glass-card bg-gradient-to-br ${gradient} border ${border} p-8 relative overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-card-hover
                ${inView ? 'animate-fade-up opacity-100' : 'opacity-0'}
              `}
              style={{ animationDelay: `${i * 150}ms`, animationFillMode: 'both' }}
            >
              {/* Background decoration */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-white/3 group-hover:bg-white/5 transition-colors duration-500" />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon size={28} className={iconColor} />
              </div>

              {/* Label */}
              <h3 className="font-heading font-bold text-white text-xl mb-4">
                {label}
              </h3>

              {text && (
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {text}
                </p>
              )}

              {values && (
                <ul className="space-y-3">
                  {values.map((v) => (
                    <li key={v} className="flex items-center gap-3 font-body text-white/60 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${iconColor.replace('text-', 'bg-')} flex-shrink-0`} />
                      {v}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
