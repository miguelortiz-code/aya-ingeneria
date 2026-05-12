import React from 'react'
import { Sun, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from '/logo.png'

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

export function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Pie de página AYA Ingeniería S.A.S"
      style={{
        backgroundColor: 'var(--bg-footer)',
        borderTop: '1px solid var(--border-section)',
      }}
    >
      <div className="container-custom pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="flex items-center gap-3 mb-6 group w-fit"
              aria-label="AYA Ingeniería S.A.S - Inicio"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                style={null}
              >
                <img src={logo} alt="" className='w-full' />
              </div>
              <div>
                <p
                  className="font-display text-2xl tracking-widest"
                  style={{ color: 'var(--text-primary)' }}
                >
                  AYA
                </p>
                <p
                  className="font-heading font-semibold text-xs tracking-[0.15em] uppercase"
                  style={{ color: 'var(--accent-primary)' }}
                >
                  Ingeniería S.A.S
                </p>
              </div>
            </Link>

            <p
              className="font-body text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: 'var(--text-muted)' }}
            >
              Empresa colombiana especializada en sistemas de energía solar térmica,
              calentadores, calderas y termotanques en acero inoxidable. Transformamos
              su consumo energético con soluciones eficientes y sostenibles.
            </p>

            <div className="space-y-3">
              {[
                { Icon: Phone, text: '+57 311 805 3452', href: 'tel:+573118053452' },
                { Icon: Mail,  text: 'ayaingenieria21@gmail.com', href: 'mailto:ayaingenieria21@gmail.com' },
                { Icon: MapPin,text: 'Cra. 72 #74 A 23, Bogotá', href: 'https://maps.app.goo.gl/cmmRcPADnwbayMGj9', target: '_blank' },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-center gap-3">
                  <Icon size={15} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  {href ? (
                    
                    <a  href={href}
                      className="font-body text-sm transition-colors duration-200"
                      style={{ color: 'var(--text-muted)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                      {text}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Nav sections */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h4
                className="font-heading font-bold text-sm uppercase tracking-wider mb-5"
                style={{ color: 'var(--text-primary)' }}
              >
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    
                    <a  href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                      className="font-body text-sm flex items-center gap-1.5 group transition-colors duration-200"
                      style={{ color: 'var(--text-faint)' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
                    >
                      <ArrowRight
                        size={11}
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: 'var(--accent-primary)' }}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider + copyright */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid var(--border-section)' }}
        >
          <p
            className="font-body text-xs text-center sm:text-left"
            style={{ color: 'var(--text-faint)' }}
          >
            © {new Date().getFullYear()} AYA Ingeniería S.A.S. Todos los derechos reservados. | NIT: 900955174-6
          </p>

          <p className="font-body text-xs" style={{ color: 'var(--text-faint)' }}>
            Energía Solar · Bogotá · Colombia
          </p>

          <p className="font-body text-xs" style={{ color: 'var(--text-faint)' }}>
            Desarrollado por:{' '}
            
            <a  href="https://miguelortiz.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors duration-200"
              style={{ color: 'var(--accent-primary)' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-primary)'}
            >
              Miguel Ortiz
            </a>
          </p>
        </div>
        </div>
    </footer>
  )
}