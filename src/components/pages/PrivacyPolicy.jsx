import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { MainLayout } from '../templates/MainLayout'

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad | AYA Ingeniería S.A.S</title>
        <meta name="description" content="Política de tratamiento de datos personales de AYA Ingeniería S.A.S conforme a la Ley 1581 de 2012." />
        <link rel="canonical" href="https://ayaingenieriasas.com/politica-privacidad" />
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
              <span style={{ color: 'var(--text-muted)' }}>Política de Privacidad</span>
            </nav>

            <div className="glass-card solar-border p-8 sm:p-12">

              <h1 className="font-heading font-bold text-3xl sm:text-4xl mb-2"
                style={{ color: 'var(--text-primary)' }}>
                Política de Tratamiento de Datos Personales
              </h1>
              <p className="font-body text-sm mb-8" style={{ color: 'var(--text-faint)' }}>
                Última actualización: noviembre de 2026
              </p>

              {[
                {
                  title: '1. Responsable del Tratamiento',
                  content: (
                    <div className="space-y-1">
                      <p><strong style={{ color: 'var(--text-primary)' }}>Razón social:</strong> AYA Ingeniería S.A.S</p>
                      <p><strong style={{ color: 'var(--text-primary)' }}>NIT:</strong> 900.955.174</p>
                      <p><strong style={{ color: 'var(--text-primary)' }}>Dirección:</strong> Cra. 72 #74 A 23, Bogotá D.C., Colombia</p>
                      <p><strong style={{ color: 'var(--text-primary)' }}>Teléfono:</strong> 311 805 3452 — 319 231 2726</p>
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
                  title: '2. Marco Legal',
                  content: <p>Esta política se rige por la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y demás normas concordantes sobre protección de datos personales en Colombia.</p>
                },
                {
                  title: '3. Datos que Recolectamos',
                  content: (
                    <div>
                      <p className="mb-3">A través del formulario de contacto de nuestro sitio web recolectamos:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Nombre completo</li>
                        <li>Correo electrónico</li>
                        <li>Número de teléfono o WhatsApp</li>
                        <li>Servicio de interés</li>
                        <li>Mensaje o descripción del proyecto</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: '4. Finalidad del Tratamiento',
                  content: (
                    <div>
                      <p className="mb-3">Los datos recolectados se utilizan exclusivamente para:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Responder solicitudes de cotización e información</li>
                        <li>Contactar al usuario para asesoría sobre nuestros servicios</li>
                        <li>Enviar información relevante sobre proyectos de energía solar</li>
                        <li>Dar seguimiento a propuestas comerciales</li>
                      </ul>
                    </div>
                  )
                },
                {
                  title: '5. Tratamiento y Almacenamiento',
                  content: <p>Los datos enviados a través del formulario de contacto son recibidos directamente por AYA Ingeniería S.A.S a través del servicio Formspree y se gestionan mediante correo electrónico. No almacenamos datos en bases de datos propias ni los compartimos con terceros con fines comerciales.</p>
                },
                {
                  title: '6. Derechos del Titular',
                  content: (
                    <div>
                      <p className="mb-3">Como titular de sus datos personales, usted tiene derecho a:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong style={{ color: 'var(--text-primary)' }}>Conocer</strong> los datos que tenemos sobre usted</li>
                        <li><strong style={{ color: 'var(--text-primary)' }}>Actualizar</strong> sus datos cuando sean inexactos o incompletos</li>
                        <li><strong style={{ color: 'var(--text-primary)' }}>Rectificar</strong> información incorrecta</li>
                        <li><strong style={{ color: 'var(--text-primary)' }}>Suprimir</strong> sus datos cuando no sean necesarios para la finalidad declarada</li>
                        <li><strong style={{ color: 'var(--text-primary)' }}>Revocar</strong> la autorización otorgada para el tratamiento</li>
                        <li><strong style={{ color: 'var(--text-primary)' }}>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio (SIC)</li>
                      </ul>
                      <p className="mt-3">Para ejercer estos derechos, escríbanos a{' '}
                        <a href="mailto:ayaingenieria21@gmail.com"
                          style={{ color: 'var(--accent-primary)' }}>
                          ayaingenieria21@gmail.com
                        </a>
                      </p>
                    </div>
                  )
                },
                {
                  title: '7. Vigencia',
                  content: <p>Los datos personales serán conservados durante el tiempo necesario para cumplir la finalidad de su recolección y mientras exista una relación comercial activa o potencial con el titular. Una vez cumplida la finalidad, serán eliminados de forma segura.</p>
                },
                {
                  title: '8. Cambios a esta Política',
                  content: <p>AYA Ingeniería S.A.S se reserva el derecho de modificar esta política en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.</p>
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