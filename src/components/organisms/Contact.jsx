import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { SectionTitle } from '../atoms/SectionTitle'
import { useInView } from '../../hooks/useInView'

export function Contact() {
  const { ref, inView } = useInView()
  const [state, setState] = useState({ submitting: false, succeeded: false, error: false })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setState({ submitting: true, succeeded: false, error: false })
    const data = new FormData(e.target)
    try {
      const res = await fetch('https://formspree.io/f/mykvkwqo', {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setState({ submitting: false, succeeded: true, error: false })
        e.target.reset()
      } else {
        setState({ submitting: false, succeeded: false, error: true })
      }
    } catch {
      setState({ submitting: false, succeeded: false, error: true })
    }
  }

  return (
    <section
      id="contacto"
      className="section-padding relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div className="absolute inset-0 solar-grid-bg opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        <SectionTitle
          eyebrow="Contacto"
          title="Hablemos de su"
          highlight="proyecto solar"
          subtitle="Solicite una cotización sin costo. Nuestros ingenieros lo asesorarán en la mejor solución para sus necesidades."
          className="mb-16"
        />

        <div
          ref={ref}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* ── Info ── */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6"
                style={{ color: 'var(--text-primary)' }}>
                ¿Listo para ahorrar energía?
              </h3>
              <p className="font-body leading-relaxed"
                style={{ color: 'var(--text-muted)' }}>
                En AYA Ingeniería S.A.S estamos listos para transformar su instalación con
                energía solar. Contáctenos por cualquiera de nuestros canales y reciba
                atención personalizada.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { Icon: Phone, label: 'Teléfono / WhatsApp', value: '311 805 3452  -  319 231 2726', href: null },
                { Icon: Mail,  label: 'Correo Electrónico',  value: 'ayaingenieria21@gmail.com', href: 'mailto:ayaingenieria21@gmail.com' },
                { Icon: MapPin,label: 'Ubicación',           value: 'Bogotá D.C., Colombia', href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                    style={{
                      background: 'rgba(21,101,192,0.10)',
                      border: '1px solid rgba(21,101,192,0.20)',
                    }}
                  >
                    <Icon size={20} style={{ color: 'var(--accent-primary)' }} />
                  </div>
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider mb-0.5"
                      style={{ color: 'var(--text-faint)' }}>
                      {label}
                    </p>
                    {href ? (
                      <a href={href}
                        className="font-heading font-semibold transition-colors duration-200"
                        style={{ color: 'var(--text-primary)' }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-primary)'}
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="font-heading font-semibold" style={{ color: 'var(--text-primary)' }}>
                        {value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Horario */}
            <div className="glass-card solar-border p-5">
              <p className="font-heading font-semibold text-sm mb-3"
                style={{ color: 'var(--accent-primary)' }}>
                Horario de atención
              </p>
              <div className="space-y-1.5 font-body text-sm" style={{ color: 'var(--text-muted)' }}>
                <p>Lunes - Viernes: <span style={{ color: 'var(--text-primary)' }}>8:00 am - 6:00 pm</span></p>
                <p>Sábados: <span style={{ color: 'var(--text-primary)' }}>8:00 am – 12:00 pm</span></p>
              </div>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="glass-card solar-border p-8">
            {state.succeeded ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle size={56} style={{ color: '#43A047' }} />
                <h3 className="font-heading font-bold text-2xl" style={{ color: 'var(--text-primary)' }}>
                  ¡Mensaje Enviado!
                </h3>
                <p className="font-body" style={{ color: 'var(--text-muted)' }}>
                  Gracias por contactarnos. Uno de nuestros ingenieros se comunicará con usted pronto.
                </p>
                <button
                  onClick={() => setState({ submitting: false, succeeded: false, error: false })}
                  className="btn-outline"
                  style={{ fontSize: '0.875rem', padding: '0.5rem 1.5rem' }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="font-heading font-bold text-xl mb-6"
                  style={{ color: 'var(--text-primary)' }}>
                  Solicitar Cotización
                </h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name',  label: 'Nombre completo',    type: 'text',  placeholder: 'Juan Rodríguez' },
                    { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'juan@empresa.com' },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label htmlFor={name}
                        className="block font-body text-xs uppercase tracking-wider mb-2"
                        style={{ color: 'var(--text-muted)' }}>
                        {label}
                      </label>
                      <input
                        id={name} name={name} type={type}
                        placeholder={placeholder} required
                        className="w-full bg-white/5 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-white placeholder-white/25 text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="phone"
                    className="block font-body text-xs uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text-muted)' }}>
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="phone" name="phone" type="tel"
                    placeholder="+57 300 000 0000"
                    className="w-full bg-white/5 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-white placeholder-white/25 text-sm outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="service"
                    className="block font-body text-xs uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text-muted)' }}>
                    Servicio de interés
                  </label>
                  <select
                    id="service" name="service"
                    defaultValue=""
                    className="w-full bg-white/5 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-sm outline-none transition-colors duration-200 appearance-none"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onChange={e => e.target.style.color = 'inherit'}
                  >
                    <option value="" disabled>Seleccione un servicio</option>
                    <option value="solar">Sistemas solares con colectores</option>
                    <option value="gas">Calderas a gas</option>
                    <option value="piscina">Climatización de piscina</option>
                    <option value="termotanque">Termotanques en acero inoxidable</option>
                    <option value="vapor">Generadores de vapor</option>
                    <option value="mantenimiento">Mantenimiento y revisión</option>
                    <option value="aislamiento">Aislamiento térmico</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message"
                    className="block font-body text-xs uppercase tracking-wider mb-2"
                    style={{ color: 'var(--text-muted)' }}>
                    Mensaje / Descripción del proyecto
                  </label>
                  <textarea
                    id="message" name="message" rows={4}
                    placeholder="Cuéntenos sobre su proyecto, número de personas, tipo de instalación..."
                    className="w-full bg-white/5 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-white placeholder-white/25 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                {state.error && (
                  <p className="text-red-400 text-sm text-center">
                    Error al enviar. Por favor intente de nuevo.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="btn-primary w-full justify-center"
                  style={{ color: '#FFFFFF', opacity: state.submitting ? 0.7 : 1 }}
                >
                  <Send size={17} />
                  {state.submitting ? 'Enviando...' : 'Enviar Solicitud'}
                </button>

                <p className="font-body text-xs text-center" style={{ color: 'var(--text-faint)' }}>
                  Al enviar acepta nuestra{' '}
                  <a
                    href="/politica-privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: 'var(--accent-primary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#29B6F6'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                  >
                    Política de Privacidad
                  </a>
                  {' '}y los{' '}
                  <a
                    href="/terminos-condiciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-200"
                    style={{ color: 'var(--accent-primary)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#29B6F6'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                  >
                    Términos y Condiciones
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}