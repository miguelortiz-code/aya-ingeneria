import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { ServiceCard } from '../molecules/ServiceCard'
import { services } from '../../data/services'

/**
 * Organism: Services
 * Grid of all company services
 */
export function Services() {
  return (
    <section
      id="servicios"
      className="section-padding bg-navy-800/20 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Grid background */}
      <div className="absolute inset-0 solar-grid-bg opacity-40 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Nuestros Servicios"
          title="¿Qué"
          highlight="Realizamos?"
          subtitle="Ofrecemos soluciones integrales en energía solar y térmica para el sector residencial, industrial, hotelero y hospitalario en toda Colombia."
          className="mb-16"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="font-body text-white/50 text-base mb-4">
            ¿Necesita un servicio personalizado para su empresa?
          </p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 text-solar-400 hover:text-solar-300 font-heading font-semibold transition-colors duration-200 group"
          >
            Contáctenos y lo asesoramos
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
