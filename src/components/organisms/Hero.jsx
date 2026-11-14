import React, { useEffect, useState } from 'react'
import { Sun, ArrowRight, Zap, Droplets, Shield } from 'lucide-react'

export function Hero() {
  const [loaded, setLoaded] = useState(false)
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains('dark')
  )

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  // ── Estilos dinámicos según tema ──
  const cardStyle = isDark
    ? { background: 'transparent', border: '1px solid rgba(255,255,255,0.20)' }
    : { background: '#FFFFFF', border: '1px solid rgba(21,101,192,0.15)', boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }

  const textPrimary = isDark ? '#FFFFFF' : '#0A0A0A'
  const textMuted   = isDark ? 'rgba(255,255,255,0.60)' : '#4A5568'

  const badgeStyle = isDark
    ? { backgroundColor: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.30)', color: '#FFFFFF', backdropFilter: 'blur(8px)' }
    : { backgroundColor: '#FFFFFF', border: '1px solid rgba(21,101,192,0.20)', color: '#1565C0' }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden solar-grid-bg"
      aria-label="Sección de inicio AYA Ingeniería"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.11)),
          url(/images/image3.webp)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Floating card izquierda */}
      <div className="absolute left-[5%] top-1/3 hidden xl:block animate-float">
        <div className="rounded-2xl p-4 flex items-center gap-3 transition-all duration-300" style={cardStyle}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(67,160,71,0.20)' }}>
            <Zap size={20} style={{ color: '#43A047' }} />
          </div>
          <div>
            <p className="font-heading font-bold text-sm" style={{ color: textPrimary }}>
              Ahorro Energético
            </p>
            <p className="font-body text-xs" style={{ color: textMuted }}>
              Hasta 70% menos en costos
            </p>
          </div>
        </div>
      </div>

      {/* Floating card derecha */}
      <div className="absolute right-[5%] bottom-1/3 hidden xl:block animate-float"
        style={{ animationDelay: '2s' }}>
        <div className="rounded-2xl p-4 flex items-center gap-3 transition-all duration-300" style={cardStyle}>
          <div className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: 'rgba(41,182,246,0.20)' }}>
            <Droplets size={20} style={{ color: '#29B6F6' }} />
          </div>
          <div>
            <p className="font-heading font-bold text-sm" style={{ color: textPrimary }}>
              Agua Caliente 24/7
            </p>
            <p className="font-body text-xs" style={{ color: textMuted }}>
              Sistema continuo garantizado
            </p>
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="container-custom relative z-10 text-center pt-28 pb-16 w-full">

        {/* Badge eyebrow */}
        <div className={`mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span
            className="inline-flex items-center px-4 py-2 rounded-full text-sm font-body font-medium tracking-wide transition-all duration-300"
            style={badgeStyle}
          >
            ✦ Energía Solar · Colombia ✦
          </span>
        </div>

        {/* ── Titular ── */}
        <h1
          className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wide transition-all duration-700 delay-100 mb-4
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="block" style={{ color: '#FFFFFF' }}>
            ENERGÍA
          </span>

          <span className="block" style={{
            background: 'linear-gradient(to right, #81D4FA, #FFFFFF, #29B6F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            SOLAR
          </span>

          <span className="block text-5xl sm:text-6xl md:text-7xl"
            style={{ color: 'rgba(255,255,255,0.85)' }}>
            PARA COLOMBIA
          </span>
        </h1>

        {/* Divider */}
        <div className={`flex items-center justify-center gap-4 my-6 transition-all duration-700 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="h-px w-20"
            style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.40))' }} />
          <Sun size={20} style={{ color: 'rgba(255,255,255,0.60)' }} />
          <div className="h-px w-20"
            style={{ background: 'linear-gradient(to left, transparent, rgba(255,255,255,0.40))' }} />
        </div>

        {/* ── Subtitle en glass card ── */}
        <div className={`flex justify-center mb-10 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div
            className="rounded-2xl px-8 py-5 max-w-2xl"
            style={{
              background: 'rgba(0,0,0,0.35)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.15)',
            }}
          >
            <p className="font-body text-base sm:text-lg leading-relaxed text-center"
              style={{ color: 'rgba(255,255,255,0.90)' }}>
              Fabricamos e instalamos sistemas solares térmicos y fotovoltaicos, calentadores, calderas y
              termotanques en acero inoxidable. Más de{' '}
              <strong style={{ color: '#FFFFFF' }}>10 años</strong> de experiencia transformando
              hogares, hospitales y hoteles en Colombia.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <a
            href="https://wa.me/573192312726?text=Hola,%20me%20interesa%20una%20asesoría%20gratuita%20para%20mi%20proyecto%20solar"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ color: '#FFFFFF' }}
          >
            Solicitar Cotización
            <ArrowRight size={20} />
          </a>
        </div>

        {/* Trust indicators */}
        <div className={`mt-14 grid grid-cols-3 gap-4 max-w-lg mx-auto transition-all duration-700 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
          {[
            { icon: Shield, label: 'Garantía en todos los proyectos' },
            { icon: Sun,    label: '+50 proyectos completados' },
            { icon: Zap,    label: 'Energía 100% renovable' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: 'rgba(255,255,255,0.10)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Icon size={18} color="#FFFFFF" />
              </div>
              <span
                className="font-body text-[10px] text-center leading-snug"
                style={{ color: 'rgba(255,255,255,0.80)' }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollTo('nosotros')}
            className="flex flex-col items-center gap-2 transition-colors duration-300 group cursor-pointer"
            style={{ color: 'rgba(255,255,255,0.40)' }}
            aria-label="Scroll hacia abajo"
          >
            <span className="font-body text-xs tracking-widest uppercase">Conócenos</span>
            <div
              className="w-px h-10 group-hover:h-14 transition-all duration-300"
              style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.40), transparent)' }}
            />
          </button>
        </div>
      </div>
    </section>
  )
}