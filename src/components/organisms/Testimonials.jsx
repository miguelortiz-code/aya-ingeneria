import React from 'react'
import { SectionTitle } from '../atoms/SectionTitle'
import { TestimonialCard } from '../molecules/TestimonialCard'
import { testimonials } from '../../data/testimonials'

/**
 * Organism: Testimonials
 * Client testimonials grid
 */
export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="section-padding bg-navy-800/30 relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background ambient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-solar-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Testimonios"
          title="Lo que dicen"
          highlight="nuestros clientes"
          subtitle="La satisfacción de nuestros clientes es nuestra mayor motivación. Estos son algunos de los proyectos que han transformado sus instalaciones."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.id} {...t} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center glass-card solar-border p-8 max-w-2xl mx-auto">
          <p className="font-heading font-bold text-white text-xl mb-2">
            ¿Quiere ser parte de nuestros clientes satisfechos?
          </p>
          <p className="font-body text-white/55 text-sm mb-6">
            Contáctenos hoy y reciba una asesoría personalizada sin costo para su proyecto solar.
          </p>
          <a
            href="#contacto"
            onClick={(e) => { e.preventDefault(); document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }) }}
            className="btn-primary"
          >
            Solicitar Asesoría Gratuita
          </a>
        </div>
      </div>
    </section>
  )
}
