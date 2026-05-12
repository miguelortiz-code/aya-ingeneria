import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "../molecules/NavLink";
import { Button } from "../atoms/Button";

const navItems = [
  { href: "/#inicio",    label: "Inicio",    scroll: "inicio" },
  { href: "/#nosotros",  label: "Nosotros",  scroll: "nosotros" },
  { href: "/#servicios", label: "Servicios", scroll: "servicios" },
  { href: "/proyectos",  label: "Proyectos", route: true },
  { href: "/galeria",    label: "Galería",   route: true },
  { href: "/#contacto",  label: "Contacto",  scroll: "contacto" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [theme, setTheme]       = useState(() =>
    localStorage.getItem("aya-theme") || "light"
  )
  const location = useLocation()
  const navigate = useNavigate()

  // Scroll listener
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Aplica clase dark al <html> y persiste
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("aya-theme", theme)
  }, [theme])

  // Cierra menú móvil al cambiar ruta
  useEffect(() => { setOpen(false) }, [location.pathname])

  const toggle = () => setTheme(t => t === "dark" ? "light" : "dark")

  const handleNav = (item) => {
    setOpen(false)
    if (item.route) {
      navigate(item.href)
    } else {
      if (location.pathname !== "/") {
        navigate("/")
        setTimeout(() => {
          document.getElementById(item.scroll)?.scrollIntoView({ behavior: "smooth" })
        }, 300)
      } else {
        const el = document.getElementById(item.scroll)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 72
          window.scrollTo({ top, behavior: "smooth" })
        }
      }
    }
  }

  const isActive = (item) =>
    item.route ? location.pathname.startsWith(item.href) : false

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${scrolled
            ? "bg-navy-900/95 backdrop-blur-md border-b border-white/10 py-3"
            : "bg-transparent py-5"
          }`}
        role="banner"
      >
        <div className="container-custom flex items-center justify-between">

          {/* ── Logo ── */}
          <Link to="/" className="flex items-center group" aria-label="AYA Ingeniería S.A.S - Inicio">
            <figure
              className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
              style={{
                backgroundColor: theme === 'dark' ? '#0A1628' : '#FFFFFF',
                border: `1px solid ${theme === 'dark' ? 'rgba(41,182,246,0.15)' : 'rgba(21,101,192,0.15)'}`,
                boxShadow: theme === 'dark' ? 'none' : '0 2px 8px rgba(21,101,192,0.10)',
                overflow: 'hidden',
              }}
            >
              <img
                src="/logo.png"
                alt="AYA Ingeniería S.A.S"
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                onError={e => { e.target.style.display='none'; e.target.nextElementSibling.style.display='flex' }}
              />
              <div className="hidden items-center justify-center w-full h-full font-display text-sm"
                style={{ color: 'var(--accent-primary)' }}>AYA</div>
            </figure>
          </Link>

          {/* ── Nav desktop ── */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Navegación principal">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className={`relative font-heading font-semibold text-sm tracking-wide transition-colors duration-200 group
                  ${isActive(item) ? "text-solar-400" : "text-white/70 hover:text-solar-400"}`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-solar-400 transition-all duration-300
                  ${isActive(item) ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </button>
            ))}
          </nav>

          {/* ── CTA desktop ── */}
          <div className="hidden lg:flex items-center gap-3">
            
           <a   href="tel:+573118053452"
              className="flex items-center gap-2 text-white/60 hover:text-solar-400 font-body text-sm transition-colors duration-200"
            >
              <Phone size={15} />
              <span>Llámanos</span>
            </a>

            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="w-9 h-9 rounded-xl bg-white/10 hover:bg-solar-500/20 border border-white/10 hover:border-solar-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            >
              {theme === "dark"
                ? <Sun  size={17} className="text-solar-400 group-hover:rotate-45 transition-transform duration-300" />
                : <Moon size={17} className="text-sky-500 group-hover:-rotate-12 transition-transform duration-300" />
              }
            </button>
          </div>

          {/* ── Hamburger móvil ── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl text-white hover:bg-white/10 transition-colors duration-200"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* ── Menú móvil ── */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300
        ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-navy-900/95 backdrop-blur-lg" onClick={() => setOpen(false)} />
        <div className={`absolute top-20 left-4 right-4 bg-navy-800/95 border border-white/10 rounded-2xl p-4 transition-all duration-300
          ${open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}`}
        >
          <nav className="flex flex-col gap-1" aria-label="Navegación móvil">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNav(item)}
                className={`block w-full text-left px-4 py-3 font-heading font-semibold text-base rounded-xl transition-all duration-200
                  ${isActive(item)
                    ? "text-solar-400 bg-solar-500/10"
                    : "text-white/70 hover:text-solar-400 hover:bg-white/5"
                  }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <Button variant="primary" size="md" className="w-full justify-center"
              onClick={() => handleNav({ scroll: "contacto" })}>
              Solicitar Cotización
            </Button>
            
            <a href="tel:+573000000000"
              className="flex items-center justify-center gap-2 text-white/60 hover:text-solar-400 font-body text-sm py-3 transition-colors duration-200"
            >
              <Phone size={16} />
              Llámanos ahora
            </a>
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="flex items-center justify-center gap-2 font-body text-sm py-3 text-white/60 hover:text-solar-400 transition-colors duration-200"
            >
              {theme === "dark"
                ? <><Sun  size={16} className="text-solar-400" /><span>Modo claro</span></>
                : <><Moon size={16} className="text-sky-500"  /><span>Modo oscuro</span></>
              }
            </button>
          </div>
        </div>
      </div>
    </>
  )
}