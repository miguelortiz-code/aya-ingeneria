import React from 'react'
import { Helmet } from 'react-helmet-async'
import { MainLayout } from '../templates/MainLayout'
import { Hero } from '../organisms/Hero'
import { About } from '../organisms/About'
import { MissionVision } from '../organisms/MissionVision'
import { Services } from '../organisms/Services'
import { Stats } from '../organisms/Stats'
import { Projects } from '../organisms/Projects'
import { Testimonials } from '../organisms/Testimonials'
import { Contact } from '../organisms/Contact'

/**
 * Page: Home
 * Main landing page for AYA Ingeniería S.A.S
 * Assembles all organisms within the MainLayout template
 */
export default function Home() {
  return (
    <>
      {/* Dynamic SEO via react-helmet-async */}
      <Helmet>
        <title>AYA Ingeniería S.A.S | Sistemas Solares Térmicos y Energía Renovable en Colombia</title>
        <meta
          name="description"
          content="AYA Ingeniería S.A.S: Empresa colombiana especializada en sistemas solares térmicos, calentadores solares, paneles solares, calderas a gas y eléctricas, termotanques en acero inoxidable. Proyectos en Bogotá, Antioquia, Cundinamarca y San Andrés."
        />
        <meta
          name="keywords"
          content="energía solar Colombia, paneles solares Bogotá, calentadores solares, sistemas térmicos solares, calderas a gas Colombia, termotanques acero inoxidable, colectores solares, agua caliente solar, AYA ingeniería, energía renovable Colombia, sistemas centrales agua caliente, climatización piscina solar, mantenimiento sistemas solares"
        />
        <link rel="canonical" href="https://www.ayaingenieria.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="AYA Ingeniería S.A.S | Energía Solar Colombia" />
        <meta property="og:description" content="Fabricamos e instalamos sistemas solares térmicos, calentadores solares y calderas. +10 años de experiencia en Colombia. Solicite su cotización gratuita." />
        <meta property="og:url" content="https://www.ayaingenieria.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:title" content="AYA Ingeniería S.A.S | Energía Solar Colombia" />
        <meta name="twitter:description" content="Soluciones de energía solar térmica para hogares, hospitales y hoteles en Colombia." />
      </Helmet>

      <MainLayout>
        {/* 1. Hero — Primera impresión */}
        <Hero />

        {/* 2. About — Quiénes somos */}
        <About />

        {/* 3. Mission & Vision */}
        <MissionVision />

        {/* 4. Services — ¿Qué realizamos? */}
        <Services />

        {/* 5. Stats — Números que hablan */}
        <Stats />

        {/* 6. Projects — Portafolio */}
        <Projects />

        {/* 7. Testimonials — Clientes */}
        <Testimonials />

        {/* 8. Contact — Formulario */}
        <Contact />
      </MainLayout>
    </>
  )
}
