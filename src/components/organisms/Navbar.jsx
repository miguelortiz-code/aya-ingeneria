import React, { useState, useEffect } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { NavLink } from '../molecules/NavLink'
import { Button } from '../atoms/Button'

const navItems = [
  { href: '/#inicio',    label: 'Inicio',    scroll: 'inicio' },
  { href: '/#nosotros',  label: 'Nosotros',  scroll: 'nosotros' },
  { href: '/#servicios', label: 'Servicios', scroll: 'servicios' },
  { href: '/proyectos',  label: 'Proyectos', route: true },   // ← route:true, sin #
  { href: '/galeria',    label: 'Galería',   route: true },   // ← route:true, sin #
  { href: '/#contacto',  label: 'Contacto',  scroll: 'contacto' },
]

/**
 * Organism: Navbar
 * Sticky nav with logo image, React Router links and mobile menu
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])


  useEffect(() => {
  const saved = localStorage.getItem('aya-theme')
  if (saved) {
    setTheme(saved)
    document.documentElement.classList.toggle('light', saved === 'light')
  }
}, [])

const toggle = () => {
  const next = theme === 'dark' ? 'light' : 'dark'
  setTheme(next)
  document.documentElement.classList.toggle('light', next === 'light')
  localStorage.setItem('aya-theme', next)
}


  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  const handleNav = (item) => {
    setOpen(false)
    if (item.route) {
      navigate(item.href)
    } else {
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(item.scroll)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 300)
      } else {
        const el = document.getElementById(item.scroll)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: 'smooth' })
        }
      }
    }
  }

  const isActive = (item) => {
    if (item.route) return location.pathname.startsWith(item.href)
    return false
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? 'bg-navy-900/95 backdrop-blur-md border-b border-white/10 py-3'
            : 'bg-transparent py-5'
          }`}
        role="banner"
      >
        <div className="container-custom flex items-center justify-between">
          {/* ===== LOGO ===== */}
          <Link
            to="/"
            className="flex items-center group"
            aria-label="AYA Ingeniería S.A.S - Inicio"
          >
            {/* Replace /logo.png with your actual logo file */}
            <img
              src="/logo.svg"
              alt="AYA Ingeniería S.A.S logo - energía solar Colombia"
              className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-200"
              onError={(e) => {
                // Fallback text logo if image fails to load
                e.target.style.display = 'none'
                e.target.nextElementSibling.style.display = 'flex'
              }}
            />
            {/* Fallback logo (hidden by default, shown if img fails) */}
            <div className="hidden items-center gap-2">
              <div className="w-9 h-9 bg-gradient-to-br from-solar-500 to-solar-600 rounded-xl flex items-center justify-center">
                <span className="text-navy-900 font-display text-base">☀</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl tracking-widest text-white">AYA</span>
                <span className="font-heading font-semibold text-[10px] tracking-[0.15em] text-solar-400 uppercase">
                  Ingeniería S.A.S
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className={`relative font-heading font-semibold text-sm tracking-wide transition-colors duration-200 group
                  ${isActive(item) ? 'text-solar-400' : 'text-white/70 hover:text-solar-400'}`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-solar-400 transition-all duration-300
                    ${isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+573000000000"
              className="flex items-center gap-2 text-white/60 hover:text-solar-400 font-body text-sm transition-colors duration-200"
            >
              <Phone size={15} />
              <span>Llámanos</span>
            </a>
            <Button
              variant="primary"
              size="sm"
              onClick={() => handleNav({ scroll: 'contacto' })}
            >
              Cotizar Ahora
            </Button>

            <button
                onClick={toggle}
                aria-label="Cambiar tema"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 text-lg"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-navy-900/95 backdrop-blur-lg" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-navy-800/95 border border-white/10 rounded-2xl p-4 transition-all duration-300 ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
        >
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className={`block w-full text-left px-4 py-3 font-heading font-semibold text-base rounded-xl transition-all duration-200
                  ${isActive(item)
                    ? 'text-solar-400 bg-solar-500/10'
                    : 'text-white/70 hover:text-solar-400 hover:bg-white/5'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <Button
              variant="primary"
              size="md"
              className="w-full justify-center"
              onClick={() => handleNav({ scroll: 'contacto' })}
            >
              Solicitar Cotización
            </Button>
            <a
              href="tel:+573000000000"
              className="flex items-center justify-center gap-2 text-white/60 hover:text-solar-400 font-body text-sm py-3 transition-colors duration-200"
            >
              <Phone size={16} />
              Llámanos ahora
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
