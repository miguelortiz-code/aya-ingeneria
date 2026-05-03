// -- Imaganes de proyectos
import proyect1 from '../../public/proyects/image1.webp';
import proyect2 from '../../public/proyects/image2.webp';
import proyect3 from '../../public/proyects/image3.webp';
import proyect4 from '../../public/proyects/image4.webp';
import proyect5 from '../../public/proyects/image5.webp';
import proyect6 from '../../public/proyects/image6.webp';
import proyect7 from '../../public/proyects/image7.webp';

//-- Imagenes
import image1 from '../../public/images/image1.webp';
import image2 from '../../public/images/image2.webp';
import image3 from '../../public/images/image3.webp';





const solarImgs = [
  'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75',
  'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800&q=75',
  'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=75',
  'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=75',
  'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=75',
  'https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=800&q=75',
  'https://images.unsplash.com/photo-1545209463-e2825498edbf?w=800&q=75',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75',
  'https://images.unsplash.com/photo-1584276433295-4c31a0a199c5?w=800&q=75',
  'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=75',
  'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&q=75',
  'https://images.unsplash.com/photo-1488998527040-85054a85150e?w=800&q=75',
]

const captions = ['Vista general del sistema','Instalación en campo','Detalle de colectores','Termotanque instalado','Panel de control','Vista de la instalación']

function galleryFor(startIndex, count = 4) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    src: solarImgs[(startIndex + i) % solarImgs.length],
    alt: captions[i % captions.length],
    caption: captions[i % captions.length],
  }))
}

export const projects = [
  {
    id: 1, slug: 'clinica-cardio-infantil',
    name: 'Clínica Cardio Infantil', location: 'Bogotá, Colombia', category: 'Sector Salud',
    description: 'Sistema solar térmico con colectores tipo Heat Pipe y termotanque de almacenamiento de agua caliente de 3.000 L.',
    fullDescription: 'Proyecto de instalación de sistema solar térmico de alta capacidad para la Clínica Cardio Infantil en Bogotá. Se instalaron colectores tipo Heat Pipe de alta eficiencia junto con un termotanque de almacenamiento de 3.000 litros en acero inoxidable. El sistema garantiza suministro continuo de agua caliente sanitaria para las instalaciones clínicas, cumpliendo con todos los estándares de higiene hospitalaria.',
    tags: ['Heat Pipe', 'Sistema Solar', '3.000 L'],
    color: 'from-sky-500/20 to-sky-600/10', gallery: galleryFor(0), year: '2023', client: 'Clínica Cardio Infantil',
    thumbnail: proyect1
  },
  {
    id: 2, slug: 'hotel-las-americas-san-andres',
    name: 'Hotel Las Américas', location: 'San Andrés, Colombia', category: 'Sector Hotelero',
    description: 'Suministro e instalación de dos termotanques de almacenamiento de agua caliente de 5.000 L cada uno, con aislamiento térmico.',
    fullDescription: 'Para el Hotel Las Américas en la isla de San Andrés se realizó el suministro e instalación de dos termotanques de almacenamiento de agua caliente de 5.000 litros cada uno, fabricados en acero inoxidable 304. El proyecto incluyó aislamiento térmico de alto rendimiento para minimizar pérdidas de calor en el ambiente costero tropical.',
    tags: ['Termotanques', 'Aislamiento Térmico', '10.000 L total'], icon: '🏨',
    color: 'from-solar-500/20 to-solar-600/10', gallery: galleryFor(2), year: '2023', client: 'Hotel Las Américas',
    thumbnail: proyect2
  },
  {
    id: 3, slug: 'santa-teresa-de-yornet',
    name: 'Santa Teresa de Yornet', location: 'Colombia', category: 'Comunidad Religiosa',
    description: 'Sistema central de agua caliente de 3.000 L con colectores tipo mariposa para suministro permanente de agua caliente sanitaria.',
    fullDescription: 'La comunidad religiosa Santa Teresa de Yornet contó con la instalación de un sistema central de agua caliente de alta eficiencia. Se instalaron colectores solares tipo mariposa junto con un sistema de almacenamiento de 3.000 litros. El sistema proporciona agua caliente sanitaria permanente para todas las dependencias de la comunidad, reduciendo considerablemente el consumo de gas.',
    tags: ['Colectores Mariposa', 'Agua Caliente Central', '3.000 L'], icon: '🏛️',
    color: 'from-eco-500/20 to-eco-400/10', gallery: galleryFor(4), year: '2022', client: 'Comunidad Santa Teresa de Yornet',
  },
  {
    id: 4, slug: 'colegio-agustinos-recoletos',
    name: 'Colegio Agustinos Recoletos', location: 'Bogotá, Colombia', category: 'Sector Educativo',
    description: 'Sistema solar de 1.000 L con colectores tipo placa plana para suministro de agua caliente en instalaciones deportivas y sanitarias.',
    fullDescription: 'El Colegio Agustinos Recoletos recibió la instalación de un sistema solar de placa plana de 1.000 litros. Los colectores fueron seleccionados por su óptimo rendimiento en el clima bogotano. El sistema abastece de agua caliente las duchas de las instalaciones deportivas y los servicios sanitarios del colegio.',
    tags: ['Placa Plana', 'Sistema Solar', '1.000 L'], icon: '🎓',
    color: 'from-solar-400/20 to-solar-300/10', gallery: galleryFor(6), year: '2022', client: 'Colegio Agustinos Recoletos',
    thumbnail: proyect3
  },
  {
    id: 5, slug: 'finca-fin-del-afan-vergara',
    name: 'Finca El Fin del Afán', location: 'Vergara, Cundinamarca', category: 'Sector Rural',
    description: 'Sistema solar térmico de 800 L con colectores tipo placa plana para agua caliente sanitaria en entorno rural.',
    fullDescription: 'En la Finca El Fin del Afán, ubicada en Vergara, Cundinamarca, se instaló un sistema solar térmico compacto de 800 litros con colectores tipo placa plana. La instalación es completamente autónoma y no depende de la red de gas, ideal para zonas donde el suministro de combustible es limitado.',
    tags: ['Placa Plana', 'Solar Térmico', '800 L'], icon: '🌿',
    color: 'from-eco-500/20 to-sky-500/10', gallery: galleryFor(8), year: '2023', client: 'Finca El Fin del Afán',
    thumbnail: proyect6
  },
  {
    id: 6, slug: 'clinica-americas-del-sur-envigado',
    name: 'Clínica Américas del Sur', location: 'Envigado, Antioquia', category: 'Sector Salud',
    description: 'Fabricación de 2 termotanques en acero inoxidable de 20.000 L cada uno para suministro de agua caliente hospitalaria.',
    fullDescription: 'Fabricación de 2 termotanques en acero inoxidable 316L de 20.000 litros cada uno para la Clínica Américas del Sur. Diseñados bajo estrictos estándares hospitalarios con acabados sanitarios internos y sistemas de control de temperatura integrados. Uno de los proyectos de mayor escala realizados por AYA Ingeniería.',
    tags: ['Acero Inoxidable', 'Gran Escala', '40.000 L total'], icon: '🏥',
    color: 'from-sky-400/20 to-sky-600/10', gallery: galleryFor(1), year: '2023', client: 'Clínica Américas del Sur',
  },
  {
    id: 7, slug: 'mederi-hospital-universitario',
    name: 'Méderi Hospital Universitario', location: 'Barrios Unidos, Bogotá', category: 'Sector Salud',
    description: 'Fabricación de termotanque en acero inoxidable de 5.000 L para almacenamiento de agua caliente en importante hospital universitario.',
    fullDescription: 'Para el Méderi Hospital Universitario en Bogotá, AYA Ingeniería fabricó un termotanque de alta calidad en acero inoxidable 304 con capacidad de 5.000 litros. El proyecto incluyó la instalación, pruebas hidráulicas y puesta en marcha del sistema de agua caliente sanitaria.',
    tags: ['Termotanque', 'Acero Inoxidable', '5.000 L'], icon: '🏨',
    color: 'from-solar-500/20 to-orange-500/10', gallery: galleryFor(3), year: '2022', client: 'Méderi Hospital Universitario',
    thumbnail: proyect7
  },
  {
    id: 8, slug: 'glamping-magiclove-san-francisco',
    name: 'Glamping Magiclove', location: 'San Francisco, Cundinamarca', category: 'Ecoturismo',
    description: 'Instalación de colectores solares para sistema de agua caliente en glamping ecológico.',
    fullDescription: 'El Glamping Magiclove integra la energía solar en su propuesta ecoturística. AYA Ingeniería instaló un sistema de colectores solares que abastece todas las unidades de alojamiento. El diseño mantiene armonía con el entorno natural y complementa la filosofía ecológica del establecimiento.',
    tags: ['Colectores Solares', 'Ecoturismo', 'Sostenible'], icon: '🏕️',
    color: 'from-eco-500/20 to-eco-400/10', gallery: galleryFor(5), year: '2023', client: 'Glamping Magiclove',
    thumbnail: proyect4
  },
  {
    id: 9, slug: 'casa-vacacional-silvania',
    name: 'Casa Vacacional', location: 'Silvania, Cundinamarca', category: 'Residencial',
    description: 'Sistema de colectores solares para calentamiento de agua en casa vacacional.',
    fullDescription: 'Para una casa vacacional en Silvania, Cundinamarca, se diseñó e instaló un sistema residencial de colectores solares compacto y eficiente. El municipio de Silvania cuenta con excelente radiación solar durante la mayor parte del año, haciendo de este sistema una inversión altamente rentable con retorno en menos de 3 años.',
    tags: ['Colectores Solares', 'Residencial', 'Eficiencia'], icon: '🏡',
    color: 'from-solar-300/20 to-solar-500/10', gallery: galleryFor(7), year: '2023', client: 'Propietario privado',
    thumbnail: proyect5
  },
  {
    id: 10, slug: 'piscina-yerbabuena-cundinamarca',
    name: 'Piscina Yerbabuena', location: 'Yerbabuena, Cundinamarca', category: 'Recreativo',
    description: 'Instalación de calentadores solares para climatización de piscina con energía limpia y renovable.',
    fullDescription: 'Climatización de piscina en Yerbabuena con calentadores solares de alta superficie para mantener temperatura confortable durante todo el año. El sistema aprovecha la irradiación solar del altiplano cundinamarqués. Resultado: piscina climatizada con energía 100% renovable, sin costos de gas y con mínimo mantenimiento.',
    tags: ['Calentadores Solares', 'Piscina', 'Climatización'], icon: '🏊',
    color: 'from-sky-500/20 to-sky-400/10', gallery: galleryFor(9), year: '2022', client: 'Club Campestre Yerbabuena',
  },
]

export const projectStats = [
  { value: 50, suffix: '+', label: 'Proyectos Completados' },
  { value: 10, suffix: '+', label: 'Años de Experiencia' },
  { value: 15, suffix: '+', label: 'Departamentos en Colombia' },
  { value: 100, suffix: '%', label: 'Clientes Satisfechos' },
]

export const galleryImages = [
  // ── Fotos de proyectos ──
  { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Sistema Heat Pipe', categories: ['Proyectos', 'Termotanques']},
  { id: 2, src: proyect2, alt: 'Hotel Las Américas - Termotanques San Andrés', categories: ['Proyectos', 'Termotanques']},
  { id: 3, src: proyect3, alt: 'Colegio Agustinos Recoletos - Placa Plana', categories: ['Proyectos', 'Termotanques']},
  { id: 4, src: proyect4, alt: 'Glamping Magiclove - Colectores Solares', categories: ['Proyectos', 'Termotanques'],},
  { id: 5, src: proyect5, alt: 'Casa Vacacional Silvania - Colectores', categories: ['Proyectos', 'Termotanques']},
  { id: 6, src: proyect6, alt: 'Finca El Fin del Afán - Solar Térmico', categories: ['Proyectos', 'Termotanques']},
  { id: 7, src: proyect7, alt: 'Méderi Hospital Universitario - Acero Inoxidable', categories: ['Proyectos', 'Termotanques']},
  { id: 8, src: image1, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 9, src: image2, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 10, src: image3, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },

  // ── Fotos de prueba (Unsplash) para proyectos sin imagen real ──
  // { id: 8, src: 'https://images.unsplash.com/photo-1584276433295-4c31a0a199c5?w=800&q=75', alt: 'Clínica Américas del Sur - Termotanques 20.000L', category: 'Proyectos', project: 'Clínica Américas del Sur' },
  // { id: 9, src: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&q=75', alt: 'Santa Teresa de Yornet - Colectores Mariposa', category: 'Proyectos', project: 'Santa Teresa de Yornet' },
  // { id: 10, src: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?w=800&q=75', alt: 'Piscina Yerbabuena - Calentadores Solares', category: 'Proyectos', project: 'Piscina Yerbabuena' },
  // ── Colectores ──
  // { id: 11, src: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=75', alt: 'Colectores solares en cubierta', category: 'Colectores' },
  // { id: 12, src: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=75', alt: 'Sistema solar comercial', category: 'Colectores' },
  // { id: 13, src: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?w=800&q=75', alt: 'Instalación colectores mariposa', category: 'Colectores' },
  // ── Termotanques ──
  // ── Instalaciones ──
  // { id: 16, src: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=75', alt: 'Campo de paneles solares', category: 'Instalaciones' },
  // { id: 17, src: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?w=800&q=75', alt: 'Instalación sistema solar en cubierta', category: 'Instalaciones' },
  // { id: 18, src: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75', alt: 'Instalación colectores solares campo', category: 'Instalaciones' },
]

export const galleryVideos = [
  {
    id: 'v1',
    type: 'local',
    videoId: '/videos/instalacion-solar.mp4', // ← reemplaza con tu YouTube video ID real
    thumbnail: 'https://img.youtube.com/vi/qS8hL7Yb7dU/hqdefault.jpg',
    title: 'Instalación sistema solar térmico - AYA Ingeniería',
    description: 'Proceso de instalación de colectores solares tipo Heat Pipe en Bogotá.',
    duration: '3:24',
  },
  {
    id: 'v2',
    type: 'youtube',
    videoId: 'oVW4qn9DTPM', // ← reemplaza con tu YouTube video ID real
    thumbnail: 'https://img.youtube.com/vi/oVW4qn9DTPM/hqdefault.jpg',
    title: 'Fabricación de termotanques en acero inoxidable',
    description: 'Así fabricamos nuestros termotanques de alta capacidad en nuestras instalaciones.',
    duration: '4:10',
  },
  {
    id: 'v3',
    type: 'youtube',
    videoId: 'h3mZ4KxFAWY', // ← reemplaza con tu YouTube video ID real
    thumbnail: 'https://img.youtube.com/vi/h3mZ4KxFAWY/hqdefault.jpg',
    title: 'Climatización de piscina con energía solar',
    description: 'Proyecto de climatización de piscina usando colectores solares en Cundinamarca.',
    duration: '2:55',
  },
]
