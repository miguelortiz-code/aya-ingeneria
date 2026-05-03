import React from 'react'
import { Sun, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'

const navSections = [
  {
    title: 'Empresa',
    links: [
      { label: 'Quiénes Somos', href: '#nosotros' },
      { label: 'Misión y Visión', href: '#nosotros' },
      { label: 'Nuestros Valores', href: '#nosotros' },
    ],
  },
  {
    title: 'Servicios',
    links: [
      { label: 'Sistemas Solares', href: '#servicios' },
      { label: 'Calderas a Gas', href: '#servicios' },
      { label: 'Climatización Piscinas', href: '#servicios' },
      { label: 'Termotanques Acero', href: '#servicios' },
      { label: 'Generadores Vapor', href: '#servicios' },
      { label: 'Mantenimiento', href: '#servicios' },
    ],
  },
  {
    title: 'Proyectos',
    links: [
      { label: 'Sector Salud', href: '#proyectos' },
      { label: 'Sector Hotelero', href: '#proyectos' },
      { label: 'Sector Educativo', href: '#proyectos' },
      { label: 'Residencial', href: '#proyectos' },
      { label: 'Ecoturismo', href: '#proyectos' },
    ],
  },
]

const scrollTo = (href) => {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

/**
 * Organism: Footer
 * Full footer with sitemap, contact info, and copyright
 */
export function Footer() {
  return (
    <footer
      className="bg-navy-900 border-t border-white/10 pt-16 pb-8"
      role="contentinfo"
      aria-label="Pie de página AYA Ingeniería S.A.S"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo('#inicio') }}
              className="flex items-center gap-3 mb-6 group w-fit"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-solar-500 to-solar-600 rounded-xl flex items-center justify-center group-hover:shadow-solar transition-all duration-300">
                <Sun size={24} className="text-navy-900" />
              </div>
              <div>
                <p className="font-display text-2xl tracking-widest text-white">AYA</p>
                <p className="font-heading font-semibold text-xs tracking-[0.15em] text-solar-400 uppercase">
                  Ingeniería S.A.S
                </p>
              </div>
            </a>

            <p className="font-body text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Empresa colombiana especializada en sistemas de energía solar térmica, calentadores, calderas y termotanques en acero inoxidable. Transformamos su consumo energético con soluciones eficientes y sostenibles.
            </p>

            <div className="space-y-3">
              {[
                { Icon: Phone, text: '+57 300 000 0000', href: 'tel:+573000000000' },
                { Icon: Mail, text: 'contacto@ayaingenieria.com', href: 'mailto:contacto@ayaingenieria.com' },
                { Icon: MapPin, text: 'Bogotá D.C., Colombia', href: null },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={15} className="text-solar-500 flex-shrink-0" />
                  {href ? (
                    <a href={href} className="font-body text-white/50 text-sm hover:text-solar-400 transition-colors duration-200">
                      {text}
                    </a>
                  ) : (
                    <span className="font-body text-white/50 text-sm">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Nav sections */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                      className="font-body text-white/45 text-sm hover:text-solar-400 transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <ArrowRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-solar-400" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-white/30 text-xs text-center sm:text-left">
            © {new Date().getFullYear()} AYA Ingeniería S.A.S. Todos los derechos reservados. | NIT: 000000000-0
          </p>
          <p className="font-body text-white/20 text-xs">
            Energía Solar · Bogotá · Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
