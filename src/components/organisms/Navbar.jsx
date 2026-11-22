import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../atoms/Button'

const navItems = [
  { href: '/#inicio',    label: 'Inicio',    scroll: 'inicio' },
  { href: '/#nosotros',  label: 'Nosotros',  scroll: 'nosotros' },
  { href: '/#servicios', label: 'Servicios', scroll: 'servicios' },
  { href: '/proyectos',  label: 'Proyectos', route: true },
  { href: '/galeria',    label: 'Galería',   route: true },
  { href: '/#contacto',  label: 'Contacto',  scroll: 'contacto' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [theme, setTheme]       = useState(() => localStorage.getItem('aya-theme') || 'light')
  const location  = useLocation()
  const navigate  = useNavigate()

  useEffect(() => {
    const s = () => {
      // ← Si no estamos en home, siempre sólido
      if (location.pathname !== '/') {
        setScrolled(true)
        return
      }
      if (window.scrollY === 0) { setScrolled(false); return }
      const hero = document.getElementById('inicio')
      const heroBottom = hero ? hero.offsetHeight : window.innerHeight
      setScrolled(window.scrollY > heroBottom - 80)
    }
    s() // ← ejecuta al montar para aplicar inmediatamente
    window.addEventListener('scroll', s, { passive: true })
    return () => window.removeEventListener('scroll', s)
  }, [location.pathname])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('aya-theme', theme)
  }, [theme])

  useEffect(() => { setOpen(false) }, [location.pathname])

  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark')
  const isActive = item => item.route ? location.pathname.startsWith(item.href) : false

  const handleNav = item => {
    setOpen(false)
    if (item.route) { navigate(item.href); return }
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => document.getElementById(item.scroll)?.scrollIntoView({ behavior: 'smooth' }), 300)
    } else {
      const el = document.getElementById(item.scroll)
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: 'smooth' })
    }
  }

  const isTransparent = !scrolled
  const textColor      = isTransparent
    ? 'rgba(255,255,255,0.92)'
    : theme === 'dark' ? 'rgba(240,246,255,0.70)' : '#1A1A2E'   // ← negro en light
  const textActive     = isTransparent ? '#FFFFFF' : '#29B6F6'
  const iconBg         = isTransparent ? 'rgba(255,255,255,0.15)' : 'rgba(41,182,246,0.10)'
  const iconBorder     = isTransparent ? 'rgba(255,255,255,0.30)' : 'rgba(41,182,246,0.20)'
  const hamburgerColor = isTransparent
    ? '#FFFFFF'
    : theme === 'dark' ? 'rgba(240,246,255,0.70)' : '#1A1A2E'

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? (theme === 'dark' ? 'rgba(6,14,31,0.97)' : 'rgba(255,255,255,0.95)')
            : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom:   scrolled ? '1px solid rgba(21,101,192,0.10)' : 'none',
          boxShadow:      scrolled ? '0 1px 16px rgba(0,0,0,0.08)' : 'none',
          paddingBlock:   '0.75rem',
        }}
        role="banner"
      >
        <div className="container-custom flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center group" aria-label="AYA Ingeniería S.A.S">
            <figure
              className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
              style={{
                backgroundColor: isTransparent ? 'rgba(255,255,255,0.15)' : (theme === 'dark' ? '#0A1628' : '#FFFFFF'),
                border: isTransparent ? '1px solid rgba(255,255,255,0.30)' : `1px solid ${theme === 'dark' ? 'rgba(41,182,246,0.15)' : 'rgba(21,101,192,0.15)'}`,
                boxShadow: isTransparent ? '0 2px 12px rgba(0,0,0,0.20)' : (theme === 'dark' ? 'none' : '0 2px 8px rgba(21,101,192,0.10)'),
                overflow: 'hidden',
                backdropFilter: isTransparent ? 'blur(8px)' : 'none',
              }}
            >
              <img
                src="/logo.ico"
                alt="AYA Ingeniería S.A.S"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextElementSibling.style.display = 'flex'
                }}
              />
            </figure>
          </Link>

          {/* ── Nav desktop ── */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {navItems.map(item => {
              const commonProps = {
                className: 'relative font-heading font-semibold text-sm tracking-wide group cursor-pointer',
                style: { color: isActive(item) ? textActive : textColor },
                onMouseEnter: e => (e.currentTarget.style.color = textActive),
                onMouseLeave: e => (e.currentTarget.style.color = isActive(item) ? textActive : textColor),
              }

              const underline = (
                <span
                  className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: isTransparent ? '#FFFFFF' : '#29B6F6' }}
                />
              )

              return item.route ? (
                <Link key={item.href} to={item.href} {...commonProps}>
                  {item.label}
                  {underline}
                </Link>
              ) : (
                <button key={item.href} onClick={() => handleNav(item)} {...commonProps}>
                  {item.label}
                  {underline}
                </button>
              )
            })}
          </nav>

          {/* ── CTA desktop ── */}
          <div className="hidden lg:flex items-center gap-3">
            
            <a  href="tel:+573118053452"
              className="flex items-center gap-2 font-body text-sm transition-colors duration-200"
              style={{ color: textColor }}
            >
              <Phone size={15} /><span>Llámanos</span>
            </a>

            <button
              onClick={toggle}
              aria-label="Cambiar tema"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer"
              style={{ background: iconBg, border: `1px solid ${iconBorder}` }}
            >
              {theme === 'dark'
                ? <Sun  size={17} color="#FFFFFF" />
                : <Moon size={17} color={isTransparent ? '#FFFFFF' : '#1565C0'} />
              }
            </button>
          </div>

          {/* ── Hamburger móvil ── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-200 cursor-pointer"
            style={{ color: hamburgerColor }}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Menú móvil ── */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
        ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-20 left-4 right-4 rounded-2xl p-4 transition-all duration-300
            ${open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'}`}
          style={{
            backgroundColor: theme === 'dark' ? 'rgba(10,22,40,0.98)' : 'rgba(255,255,255,0.98)',
            border: '1px solid var(--border-card)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
          }}
        >
          {/* Nav items móvil */}
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {navItems.map(item => {
              const commonProps = {
                className: 'block w-full text-left px-4 py-3 font-heading font-semibold text-base rounded-xl transition-all duration-200 cursor-pointer',
                style: {
                  color: isActive(item) ? 'var(--accent-primary)' : 'var(--text-primary)',
                  backgroundColor: isActive(item) ? 'rgba(41,182,246,0.08)' : 'transparent',
                },
              }

              return item.route ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  {...commonProps}
                >
                  {item.label}
                </Link>
              ) : (
                <button key={item.href} onClick={() => handleNav(item)} {...commonProps}>
                  {item.label}
                </button>
              )
            })}
          </nav>

          <div className="mt-4 pt-4 flex flex-col gap-2"
            style={{ borderTop: '1px solid var(--border-card)' }}>
            <Button
              variant="primary" size="md"
              className="w-full justify-center"
              onClick={() => handleNav({ scroll: 'contacto' })}
            >
              Solicitar Cotización
            </Button>

            
            <a  href="tel:+573118053452"
              className="flex items-center justify-center gap-2 font-body text-sm py-3 transition-colors duration-200"
              style={{ color: 'var(--text-primary)' }}
            >
              <Phone size={16} /> Llámanos ahora
            </a>

            <button
              onClick={toggle}
              className="flex items-center justify-center gap-2 font-body text-sm py-3 transition-colors duration-200 cursor-pointer"
              style={{ color: 'var(--text-primary)' }}
            >
              {theme === 'dark'
                ? <><Sun  size={16} color="#29B6F6" /><span>Modo claro</span></>
                : <><Moon size={16} color="#1565C0" /><span>Modo oscuro</span></>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

