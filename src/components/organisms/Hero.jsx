import React, { useEffect, useState } from 'react'
import { Sun, ChevronRight, ArrowRight, Zap, Droplets, Shield } from 'lucide-react'
import { Button } from '../atoms/Button'
import { Badge } from '../atoms/Badge'

/**
 * Organism: Hero
 * Full-screen hero section with solar energy theme
 */
export function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-solar-gradient solar-grid-bg"
      aria-label="Sección de inicio AYA Ingeniería"
    >
      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-solar-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-sky-500/8 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-solar-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Rotating sun decoration */}
      <div className="absolute top-20 right-[10%] opacity-10 pointer-events-none hidden lg:block">
        <div className="w-64 h-64 rounded-full border-2 border-dashed border-solar-500 animate-spin-slow" />
      </div>

      {/* Floating cards */}
      <div className="absolute left-[5%] top-1/3 hidden xl:block animate-float">
        <div className="glass-card solar-border p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-eco-500/20 rounded-xl flex items-center justify-center">
            <Zap size={20} className="text-eco-400" />
          </div>
          <div>
            <p className="text-white font-heading font-bold text-sm">Ahorro Energético</p>
            <p className="text-white/50 font-body text-xs">Hasta 70% menos en costos</p>
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] bottom-1/3 hidden xl:block animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card solar-border p-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center">
            <Droplets size={20} className="text-sky-400" />
          </div>
          <div>
            <p className="text-white font-heading font-bold text-sm">Agua Caliente 24/7</p>
            <p className="text-white/50 font-body text-xs">Sistema continuo garantizado</p>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container-custom relative z-10 text-center pt-24 pb-16">
        {/* Eyebrow badge */}
        <div
          className={`mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Badge variant="solar" className="px-4 py-2 text-sm">
            ✦ Energía Solar · Colombia ✦
          </Badge>
        </div>

        {/* Main headline */}
        <h1
          className={`font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none tracking-wide transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ textShadow: '0 0 80px rgba(245,158,11,0.15)' }}
        >
          <span className="block">ENERGÍA</span>
          <span className="block bg-gradient-to-r from-solar-400 via-solar-300 to-solar-500 bg-clip-text text-transparent">
            SOLAR
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl text-white/80">PARA COLOMBIA</span>
        </h1>

        {/* Divider */}
        <div
          className={`flex items-center justify-center gap-4 my-8 transition-all duration-700 delay-200 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-solar-500/60" />
          <Sun size={20} className="text-solar-400" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-solar-500/60" />
        </div>

        {/* Subtitle */}
        <p
          className={`font-body text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          Fabricamos e instalamos sistemas solares térmicos, calentadores, calderas y termotanques en acero inoxidable.
          Más de <strong className="text-white/80">10 años</strong> de experiencia transformando hogares, hospitales y hoteles en Colombia.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('contacto')}
            className="shadow-solar"
          >
            Solicitar Cotización
            <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('proyectos')}
          >
            Ver Proyectos
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto transition-all duration-700 delay-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {[
            { icon: Shield, label: 'Garantía en todos los proyectos' },
            { icon: Sun, label: '+50 proyectos completados' },
            { icon: Zap, label: 'Energía 100% renovable' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-solar-500/10 border border-solar-500/20 flex items-center justify-center">
                <Icon size={18} className="text-solar-400" />
              </div>
              <span className="font-body text-white/45 text-[10px] text-center leading-snug">{label}</span>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => scrollTo('nosotros')}
            className="flex flex-col items-center gap-2 text-white/30 hover:text-solar-400 transition-colors duration-300 group"
            aria-label="Scroll hacia abajo"
          >
            <span className="font-body text-xs tracking-widest uppercase">Conocenos</span>
            <div className="w-px h-10 bg-gradient-to-b from-solar-500/50 to-transparent group-hover:h-14 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  )
}
