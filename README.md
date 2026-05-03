# AYA Ingeniería S.A.S — Sitio Web Oficial

Sitio web corporativo desarrollado con **React + Vite + Tailwind CSS** siguiendo la metodología **Atomic Design**.

---

## 🚀 Stack Tecnológico

| Herramienta | Versión | Uso |
|-------------|---------|-----|
| React | 18.3 | Framework UI |
| Vite | 5.4 | Bundler / Dev server |
| Tailwind CSS | 3.4 | Estilos utility-first |
| react-helmet-async | 2.0 | SEO dinámico |
| react-intersection-observer | 9.13 | Animaciones scroll |
| Lucide React | 0.383 | Íconos SVG |

---

## 📁 Estructura Atomic Design

```
src/
├── components/
│   ├── atoms/              # Elementos base (Button, Badge, SectionTitle, SolarIcon)
│   ├── molecules/          # Componentes compuestos (ServiceCard, ProjectCard, TestimonialCard, StatCounter, NavLink)
│   ├── organisms/          # Secciones completas (Navbar, Hero, About, MissionVision, Services, Stats, Projects, Testimonials, Contact, Footer)
│   ├── templates/          # Layout principal (MainLayout)
│   └── pages/              # Página ensamblada (Home)
├── data/                   # Datos estáticos (services.js, projects.js, testimonials.js)
├── hooks/                  # Custom hooks (useInView.js)
└── index.css               # Estilos globales + Tailwind
```

---

## 🔍 SEO Implementado

### index.html (estático)
- ✅ Title y meta description optimizados
- ✅ Keywords relevantes para energía solar en Colombia
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Schema.org / JSON-LD (LocalBusiness)
- ✅ Canonical URL
- ✅ Geo meta tags (Colombia)
- ✅ Robots index/follow
- ✅ Language Spanish

### react-helmet-async (dinámico)
- ✅ SEO por página con `<Helmet>`
- ✅ Títulos y descripciones únicos por ruta

### Accesibilidad / SEO técnico
- ✅ `role="banner"`, `role="main"`, `role="contentinfo"`
- ✅ `aria-label` en todos los elementos interactivos
- ✅ `aria-expanded` en menú móvil
- ✅ `role="tablist"` / `aria-selected` en filtros de proyectos
- ✅ Semántica HTML5 correcta (header, main, section, footer, nav)
- ✅ Alt text preparado para imágenes

---

## 🎨 Diseño

**Paleta:**
- Fondo: `#050D1A` (navy profundo)
- Primario: `#F59E0B` (solar amber — el sol)
- Secundario: `#38BDF8` (sky blue — agua/cielo)
- Eco: `#22C55E` (verde sostenible)

**Tipografía:**
- Display: `Bebas Neue` — impacto visual en hero
- Headings: `Syne` — moderno y técnico
- Body: `DM Sans` — legible y limpio

---

## ⚙️ Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 📝 Secciones del Sitio

1. **Hero** — Impacto visual con llamada a la acción
2. **Quiénes Somos** — Identidad y diferenciadores
3. **Misión & Visión** — Valores corporativos
4. **Servicios** — 8 servicios con íconos y descripciones
5. **Estadísticas** — Contadores animados con scroll
6. **Proyectos** — Portafolio filtrable (10 proyectos reales)
7. **Testimonios** — 6 testimonios de clientes reales
8. **Contacto** — Formulario de cotización + datos de contacto
9. **Footer** — Sitemap completo + información legal

---

## 🔧 Palabras Clave SEO Principales

- energía solar Colombia
- paneles solares Bogotá
- calentadores solares Colombia
- sistemas solares térmicos
- calderas a gas Colombia
- termotanques acero inoxidable
- colectores solares
- agua caliente solar
- AYA Ingeniería S.A.S
- climatización piscina solar
- mantenimiento sistemas solares

---

*Desarrollado para AYA Ingeniería S.A.S — Energía Solar · Colombia*
