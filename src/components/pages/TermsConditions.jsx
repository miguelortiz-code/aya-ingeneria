import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MainLayout } from '../templates/MainLayout'

export default function TermsConditions() {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones | AYA Ingeniería S.A.S</title>
        <meta name="description" content="Términos y condiciones de uso del sitio web de AYA Ingeniería S.A.S." />
        <link rel="canonical" href="https://ayaingenieriasas.com/terminos-condiciones" />
      </Helmet>

      <MainLayout>
        <div className="pt-28 pb-20 min-h-screen">
          <div className="container-custom max-w-4xl">

            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 font-body text-sm mb-10"
              style={{ color: 'var(--text-faint)' }}>
              <Link to="/"
                style={{ color: 'var(--text-faint)' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-faint)'}
              >Inicio</Link>
              <span>/</span>
              <span style={{ color: 'var(--text-muted)' }}>Términos y Condiciones</span>
            </nav>

            <div className="glass-card solar-border p-8 sm:p-12">

              <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-2"
                style={{ color: 'var(--text-primary)' }}>
                Términos y Condiciones de Uso
              </h1>
              <p className="font-body text-sm mb-8" style={{ color: 'var(--text-faint)' }}>
                Última actualización: noviembre de 2026
              </p>

              {[
                {
                  title: '1. Aceptación',
                  content: <p>Al acceder y utilizar el sitio web de AYA Ingeniería S.A.S (en adelante "el Sitio"), usted acepta los presentes Términos y Condiciones. Si no está de acuerdo, le pedimos abstenerse de usar el Sitio.</p>
                },
                {
                  title: '2. Identificación del Titular',
                  content: (
                    <div className="space-y-1">
                      <p><strong style={{ color: 'var(--text-primary)' }}>Razón social:</strong> AYA Ingeniería S.A.S</p>
                      <p><strong style={{ color: 'var(--text-primary)' }}>NIT:</strong> 900.955.174</p>
                      <p><strong style={{ color: 'var(--text-primary)' }}>Domicilio:</strong> Cra. 72 #74 A 23, Bogotá D.C., Colombia</p>
                      <p><strong style={{ color: 'var(--text-primary)' }}>Correo:</strong>{' '}
                        <a href="mailto:ayaingenieria21@gmail.com"
                          style={{ color: 'var(--accent-primary)' }}>
                          ayaingenieria21@gmail.com
                        </a>
                      </p>
                    </div>
                  )
                },
                {
                  title: '3. Objeto del Sitio',
                  content: <p>Este sitio web tiene como finalidad presentar los servicios de AYA Ingeniería S.A.S en el área de energía solar térmica — calentadores, calderas, termotanques y sistemas fotovoltaicos — y facilitar el contacto entre la empresa y potenciales clientes en Colombia.</p>
                },
                {
                  title: '4. Propiedad Intelectual',
                  content: <p>Todos los contenidos del Sitio — textos, imágenes, logotipos, diseño gráfico y código fuente — son propiedad de AYA Ingeniería S.A.S o de sus respectivos titulares, y están protegidos por las leyes colombianas de derechos de autor. Queda prohibida su reproducción, distribución o uso comercial sin autorización expresa y escrita.</p>
                },
                {
                  title: '5. Uso del Formulario de Contacto',
                  content: (
                    <div>
                      <p className="mb-3">Al enviar el formulario de contacto, el usuario:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Garantiza que la información proporcionada es veraz y completa</li>
                        <li>Autoriza a AYA Ingeniería S.A.S a contactarlo para responder su solicitud</li>
                        <li>Acepta nuestra <Link to="/politica-privacidad" style={{ color: 'var(--accent-primary)' }}>Política de Privacidad</Link></li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: '6. Limitación de Responsabilidad',
                  content: (
                    <div className="space-y-2">
                      <p>AYA Ingeniería S.A.S no se responsabiliza por:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Interrupciones o errores técnicos en el acceso al Sitio</li>
                        <li>Daños derivados del uso indebido de la información publicada</li>
                        <li>Contenido de sitios web externos enlazados desde el Sitio</li>
                      </ul>
                      <p>La información publicada en el Sitio tiene carácter informativo y no constituye una oferta comercial vinculante. Los precios, especificaciones y disponibilidad de servicios se confirman directamente con nuestro equipo.</p>
                    </div>
                  )
                },
                {
                  title: '7. Modificaciones',
                  content: <p>AYA Ingeniería S.A.S se reserva el derecho de modificar el contenido del Sitio y estos Términos en cualquier momento, sin previo aviso. Los cambios entran en vigor desde su publicación en esta página.</p>
                },
                {
                  title: '8. Legislación Aplicable',
                  content: <p>Estos Términos se rigen por las leyes de la República de Colombia. Cualquier controversia derivada del uso del Sitio se someterá a los jueces y tribunales competentes de la ciudad de Bogotá D.C.</p>
                },
              ].map(({ title, content }) => (
                <div key={title} className="mb-8">
                  <h2 className="font-heading font-bold text-lg mb-3"
                    style={{ color: 'var(--accent-primary)' }}>
                    {title}
                  </h2>
                  <div className="font-body text-sm leading-relaxed"
                    style={{ color: 'var(--text-muted)' }}>
                    {content}
                  </div>
                </div>
              ))}

              <div className="mt-10 pt-8 text-center"
                style={{ borderTop: '1px solid var(--border-card)' }}>
                <Link to="/" className="btn-primary inline-flex">
                  Volver al inicio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  )
}