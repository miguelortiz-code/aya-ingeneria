import React, { useState } from 'react'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { SectionTitle } from '../atoms/SectionTitle'
import { Button } from '../atoms/Button'
import { useInView } from '../../hooks/useInView'

/**
 * Organism: Contact
 * Contact form with company info
 */
export function Contact() {
  const { ref, inView } = useInView()
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, connect to a form handler or API
    setSent(true)
  }

  return (
    <section
      id="contacto"
      className="section-padding relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 solar-grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-solar-500/6 rounded-full blur-[100px] pointer-events-none" />

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
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-heading font-bold text-white text-2xl mb-6">
                ¿Listo para ahorra energía?
              </h3>
              <p className="font-body text-white/60 leading-relaxed">
                En AYA Ingeniería S.A.S estamos listos para transformar su instalación con energía solar.
                Contáctenos por cualquiera de nuestros canales y reciba atención personalizada.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { Icon: Phone, label: 'Teléfono / WhatsApp', value: '311 805 3452  -  319 231 2726' },
                { Icon: Mail, label: 'Correo Electrónico', value: 'ayaingenieria21@gmail.com', href: 'mailto:ayaingenieria21@gmail.com' },
                { Icon: MapPin, label: 'Ubicación', value: 'Bogotá D.C., Colombia', href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-solar-500/10 border border-solar-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-solar-500/20 transition-colors duration-300">
                    <Icon size={20} className="text-solar-400" />
                  </div>
                  <div>
                    <p className="font-body text-white/40 text-xs uppercase tracking-wider mb-0.5">{label}</p>
                    {href ? (
                      <a href={href} className="font-heading font-semibold text-white hover:text-solar-400 transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <p className="font-heading font-semibold text-white">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule */}
            <div className="glass-card solar-border p-5">
              <p className="font-heading font-semibold text-solar-400 text-sm mb-3">Horario de atención</p>
              <div className="space-y-1.5 font-body text-white/55 text-sm">
                <p>Lunes – Viernes: <span className="text-white">8:00 am – 6:00 pm</span></p>
                <p>Sábados: <span className="text-white">8:00 am – 12:00 pm</span></p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="glass-card solar-border p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-12 text-center">
                <CheckCircle size={56} className="text-eco-400" />
                <h3 className="font-heading font-bold text-white text-2xl">¡Mensaje Enviado!</h3>
                <p className="font-body text-white/60">
                  Gracias por contactarnos. Uno de nuestros ingenieros se comunicará con usted en las próximas horas.
                </p>
                <Button variant="outline" size="sm" onClick={() => setSent(false)}>
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <h3 className="font-heading font-bold text-white text-xl mb-6">Solicitar Cotización</h3>

                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Nombre completo', type: 'text', placeholder: 'Juan Rodríguez' },
                    { name: 'email', label: 'Correo electrónico', type: 'email', placeholder: 'juan@empresa.com' },
                  ].map(({ name, label, type, placeholder }) => (
                    <div key={name}>
                      <label htmlFor={name} className="block font-body text-white/60 text-xs uppercase tracking-wider mb-2">
                        {label}
                      </label>
                      <input
                        id={name}
                        name={name}
                        type={type}
                        placeholder={placeholder}
                        value={form[name]}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-white placeholder-white/25 text-sm outline-none transition-colors duration-200"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-white/60 text-xs uppercase tracking-wider mb-2">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+57 300 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-white placeholder-white/25 text-sm outline-none transition-colors duration-200"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block font-body text-white/60 text-xs uppercase tracking-wider mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-navy-800 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-white text-sm outline-none transition-colors duration-200 appearance-none"
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
                  <label htmlFor="message" className="block font-body text-white/60 text-xs uppercase tracking-wider mb-2">
                    Mensaje / Descripción del proyecto
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntenos sobre su proyecto, número de personas, tipo de instalación..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-white/5 border border-white/15 hover:border-solar-500/40 focus:border-solar-500 rounded-xl px-4 py-3 font-body text-white placeholder-white/25 text-sm outline-none transition-colors duration-200 resize-none"
                  />
                </div>

                <Button type="submit" variant="primary" size="md" className="w-full justify-center shadow-solar">
                  <Send size={17} />
                  Enviar Solicitud
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
