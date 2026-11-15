// -- Imaganes de proyectos
const proyect1 = '/proyects/image1.webp';
const proyect2 = '/proyects/image2.webp';
const proyect3 = '/proyects/image3.webp';
const proyect4 = '/proyects/image4.webp';
const proyect5 = '/proyects/image5.webp';
const proyect6 = '/proyects/image6.webp';
const proyect7 = '/proyects/image7.webp';
const proyect8 = '/proyects/santa_teresa_yornet/yornet1.webp';
const proyect9 =  '/proyects/clinica_americas_sur/america1.webp';
const proyect10 = '/proyects/piscina_yerba_buena/yerba1.webp';
const proyect11 = '/proyects/clinica_medellin/medellin1.webp';
const proyect12 = '/proyects/hotel_chinauta/chinauta1.webp';

//-- Imagenes
const image1 = '/images/image1.webp';
const image2 = '/images/image2.webp';
const image3 = '/images/image3.webp';
const image4 = '/images/image4.webp';
const image5 = '/images/image5.webp';
const image6 = '/images/image6.webp';
const image7 = '/images/image7.webp';
const image8 = '/images/image8.webp';
const image9 = '/images/image9.webp';
const image10 = '/images/image10.webp';
const image11 = '/images/image11.webp';
const image12 = '/images/image12.webp';
const image13 = '/images/image13.webp';
const image14 = '/images/image14.webp';
const image15 = '/images/image15.webp';
const image16 = '/images/image16.webp';
const image17 = '/images/image17.webp';
const image18 = '/images/image18.webp';
const image19 = '/images/image19.webp';
const image20 = '/images/image20.webp';
const image21 = '/images/image21.webp';
const image22 = '/images/image22.webp';
const image23 = '/images/image23.webp';
const image24 = '/images/image24.webp';
const image25 = '/images/image25.webp';
const image26 = '/images/image26.webp';
const image27 = '/proyects/hotel_chinauta/chinauta2.webp';



export const projects = [
  {
    id: 1, slug: 'clinica-cardio-infantil',
    name: 'Clínica Cardio Infantil', location: 'Bogotá, Colombia', category: 'Sector Salud',
    description: 'Sistema solar térmico con colectores tipo Heat Pipe y termotanque de almacenamiento de agua caliente de 3.000 L.',
    fullDescription: 'Proyecto de instalación de un sistema solar térmico de alta capacidad para la Clínica Cardio Infantil en Bogotá. Se instalaron colectores tipo Heat Pipe de alta eficiencia junto con seis termotanques de almacenamiento en acero inoxidable: dos de 2.500 litros, tres de 3.000 litros y uno de 2.000 litros, para una capacidad total de 16.000 litros. El sistema garantiza el suministro continuo de agua caliente sanitaria para las instalaciones clínicas y cumple con los estándares de higiene hospitalaria.',
    tags: ['Heat Pipe', 'Sistema Solar', '3.000 L'],
    color: 'from-sky-500/20 to-sky-600/10', year: '2023', client: 'Clínica Cardio Infantil',
    thumbnail: proyect1,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 2, slug: 'hotel-las-americas-san-andres',
    name: 'Hotel Las Américas', location: 'San Andrés, Colombia', category: 'Sector Hotelero',
    description: 'Suministro e instalación de dos termotanques de almacenamiento de agua caliente de 5.000 L cada uno, con aislamiento térmico.',
    fullDescription: 'Para el Hotel Las Américas en la isla de San Andrés se realizó el suministro e instalación de dos termotanques de almacenamiento de agua caliente de 5.000 litros cada uno, fabricados en acero inoxidable 304. El proyecto incluyó aislamiento térmico de alto rendimiento para minimizar pérdidas de calor en el ambiente costero tropical.',
    tags: ['Termotanques', 'Aislamiento Térmico', '10.000 L total'], icon: '🏨',
    color: 'from-solar-500/20 to-solar-600/10', year: '2023', client: 'Hotel Las Américas',
    thumbnail: proyect2,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 3, slug: 'santa-teresa-de-Jornet',
    name: 'Santa Teresa de Jornet', location: 'Colombia', category: 'Comunidad Religiosa',
    description: 'Sistema central de agua caliente de 3.000 L con colectores tipo mariposa para suministro permanente de agua caliente sanitaria.',
    fullDescription: 'La comunidad religiosa Santa Teresa de Jornet contó con la instalación de un sistema central de agua caliente de alta eficiencia. Se instalaron colectores solares tipo mariposa junto con un sistema de almacenamiento de 3.000 litros. El sistema proporciona agua caliente sanitaria permanente para todas las dependencias de la comunidad, reduciendo considerablemente el consumo de gas.',
    tags: ['Colectores Mariposa', 'Agua Caliente Central', '3.000 L'], icon: '🏛️',
    color: 'from-eco-500/20 to-eco-400/10', year: '2022', client: 'Comunidad Santa Teresa de Jornet',
    thumbnail: proyect8,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 4, slug: 'colegio-agustinos-recoletos',
    name: 'Colegio Agustinos Recoletos', location: 'Bogotá, Colombia', category: 'Sector Educativo',
    description: 'Sistema solar de 1.000 L con colectores tipo placa plana para suministro de agua caliente en instalaciones deportivas y sanitarias.',
    fullDescription: 'El Colegio Agustinos Recoletos recibió la instalación de un sistema solar de placa plana de 1.000 litros. Los colectores fueron seleccionados por su óptimo rendimiento en el clima bogotano. El sistema abastece de agua caliente las duchas de las instalaciones deportivas y los servicios sanitarios del colegio.',
    tags: ['Placa Plana', 'Sistema Solar', '1.000 L'], icon: '🎓',
    color: 'from-solar-400/20 to-solar-300/10', year: '2022', client: 'Colegio Agustinos Recoletos',
    thumbnail: proyect3,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 5, slug: 'finca-fin-del-afan-vergara',
    name: 'Finca El Fin del Afán', location: 'Vergara, Cundinamarca', category: 'Sector Rural',
    description: 'Sistema solar térmico de 800 L con colectores tipo placa plana para agua caliente sanitaria en entorno rural.',
    fullDescription: 'En la Finca El Fin del Afán, ubicada en Vergara, Cundinamarca, se instaló un sistema solar térmico compacto de 800 litros con colectores tipo placa plana. La instalación es completamente autónoma y no depende de la red de gas, ideal para zonas donde el suministro de combustible es limitado.',
    tags: ['Placa Plana', 'Solar Térmico', '800 L'], icon: '🌿',
    color: 'from-eco-500/20 to-sky-500/10', year: '2023', client: 'Finca El Fin del Afán',
    thumbnail: proyect6,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 6, slug: 'clinica-americas-del-sur-envigado',
    name: 'Clínica Américas del Sur', location: 'Envigado, Antioquia', category: 'Sector Salud',
    description: 'Fabricación de 2 termotanques en acero inoxidable de 20.000 L cada uno para suministro de agua caliente hospitalaria.',
    fullDescription: 'Fabricación de 2 termotanques en acero inoxidable 316L de 20.000 litros cada uno para la Clínica Américas del Sur. Diseñados bajo estrictos estándares hospitalarios con acabados sanitarios internos y sistemas de control de temperatura integrados. Uno de los proyectos de mayor escala realizados por AYA Ingeniería.',
    tags: ['Acero Inoxidable', 'Gran Escala', '40.000 L total'], icon: '🏥',
    color: 'from-sky-400/20 to-sky-600/10', year: '2023', client: 'Clínica Américas del Sur',
    thumbnail: proyect9,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 7, slug: 'mederi-hospital-universitario',
    name: 'Méderi Hospital Universitario', location: 'Barrios Unidos, Bogotá', category: 'Sector Salud',
    description: 'Fabricación de termotanque en acero inoxidable de 5.000 L para almacenamiento de agua caliente en importante hospital universitario.',
    fullDescription: 'Para el Méderi Hospital Universitario en Bogotá, AYA Ingeniería fabricó un termotanque de alta calidad en acero inoxidable 304 con capacidad de 5.000 litros. El proyecto incluyó la instalación, pruebas hidráulicas y puesta en marcha del sistema de agua caliente sanitaria.',
    tags: ['Termotanque', 'Acero Inoxidable', '5.000 L'], icon: '🏨',
    color: 'from-solar-500/20 to-orange-500/10', year: '2022', client: 'Méderi Hospital Universitario',
    thumbnail: proyect7,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 8, slug: 'glamping-magiclove-san-francisco',
    name: 'Glamping Magiclove', location: 'San Francisco, Cundinamarca', category: 'Ecoturismo',
    description: 'Instalación de colectores solares para sistema de agua caliente en glamping ecológico.',
    fullDescription: 'El Glamping Magiclove integra la energía solar en su propuesta ecoturística. AYA Ingeniería instaló un sistema de colectores solares que abastece todas las unidades de alojamiento. El diseño mantiene armonía con el entorno natural y complementa la filosofía ecológica del establecimiento.',
    tags: ['Colectores Solares', 'Ecoturismo', 'Sostenible'], icon: '🏕️',
    color: 'from-eco-500/20 to-eco-400/10', year: '2023', client: 'Glamping Magiclove',
    thumbnail: proyect4,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 9, slug: 'casa-vacacional-silvania',
    name: 'Casa Vacacional', location: 'Silvania, Cundinamarca', category: 'Residencial',
    description: 'Sistema de colectores solares para calentamiento de agua en casa vacacional.',
    fullDescription: 'Para una casa vacacional en Silvania, Cundinamarca, se diseñó e instaló un sistema residencial de colectores solares compacto y eficiente. El municipio de Silvania cuenta con excelente radiación solar durante la mayor parte del año, haciendo de este sistema una inversión altamente rentable con retorno en menos de 3 años.',
    tags: ['Colectores Solares', 'Residencial', 'Eficiencia'], icon: '🏡',
    color: 'from-solar-300/20 to-solar-500/10', year: '2023', client: 'Propietario privado',
    thumbnail: proyect5,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 10, slug: 'piscina-yerbabuena-cundinamarca',
    name: 'Piscina Yerbabuena', location: 'Yerbabuena, Cundinamarca', category: 'Recreativo',
    description: 'Instalación de calentadores solares para climatización de piscina con energía limpia y renovable.',
    fullDescription: 'Climatización de piscina en Yerbabuena con calentadores solares de alta superficie para mantener temperatura confortable durante todo el año. El sistema aprovecha la irradiación solar del altiplano cundinamarqués. Resultado: piscina climatizada con energía 100% renovable, sin costos de gas y con mínimo mantenimiento.',
    tags: ['Calentadores Solares', 'Piscina', 'Climatización'], icon: '🏊',
    color: 'from-sky-500/20 to-sky-400/10', year: '2022', client: 'Club Campestre Yerbabuena',
    thumbnail: proyect10,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 11, slug: 'clinica-americas-medellin',
    name: 'Clínica americas Medellín', location: 'Medellin, Envigado', category: 'Sector Salud',
    description: 'Sistema solar térmico con colectores tipo Heat Pipe y termotanque de almacenamiento de agua caliente de 3.000 L.',
    fullDescription: 'Proyecto de instalación de sistema solar térmico de alta capacidad para la Clínica americas Medellín en Envigado. Se instalaron colectores tipo Heat Pipe de alta eficiencia junto con un termotanque de almacenamiento de 3.000 litros en acero inoxidable. El sistema garantiza suministro continuo de agua caliente sanitaria para las instalaciones clínicas, cumpliendo con todos los estándares de higiene hospitalaria.',
    tags: ['Heat Pipe', 'Sistema Solar', '3.000 L'],
    color: 'from-sky-500/20 to-sky-600/10', year: '2023', client: 'Clínica americas Medellín',
    thumbnail: proyect11,
    gallery: [
      { id: 1, src: proyect1, alt: 'Clínica Cardio Infantil - Vista general', caption: 'Vista general del sistema' },
      { id: 2, src: image1,   alt: 'Termotanque instalado', caption: 'Termotanque acero inoxidable' },
      { id: 3, src: image2,   alt: 'Colectores Heat Pipe', caption: 'Colectores tipo Heat Pipe' },
      { id: 4, src: image3,   alt: 'Instalación completa', caption: 'Sistema finalizado' },
    ]
  },
  {
    id: 12, slug: 'Hotel-chinauta-real',
    name: 'Hotel Chinauta Real ', location: 'Chinauta, Cundinamarca', category: 'Sector Hotelero',
    description: 'Sistema solar térmico con colectores tipo Heat Pipe y termotanque de almacenamiento de agua caliente de 3.000 L.',
    fullDescription: 'Proyecto de instalación de sistema solar térmico de alta capacidad para la Clínica americas Medellín en Envigado. Se instalaron colectores tipo Heat Pipe de alta eficiencia junto con un termotanque de almacenamiento de 3.000 litros en acero inoxidable. El sistema garantiza suministro continuo de agua caliente sanitaria para las instalaciones clínicas, cumpliendo con todos los estándares de higiene hospitalaria.',
    tags: ['Heat Pipe', 'Sistema Solar', '3.000 L'],
    color: 'from-sky-500/20 to-sky-600/10', year: '2023', client: 'Hotel Chinauta Real',
    thumbnail: proyect12,
    gallery: [
      { id: 1, src: image27, alt: 'Hotel Chinauta Real - Vista general', caption: 'Vista general del sistema' },
    ]
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
  { id: 1, src: proyect1, alt: 'Clínica americas Medellín - Sistema Heat Pipe', categories: ['Proyectos', 'Termotanques']},
  { id: 2, src: proyect2, alt: 'Hotel Las Américas - Termotanques San Andrés', categories: ['Proyectos', 'Termotanques']},
  { id: 3, src: proyect3, alt: 'Colegio Agustinos Recoletos - Placa Plana', categories: ['Proyectos', 'Termotanques']},
  { id: 4, src: proyect4, alt: 'Glamping Magiclove - Colectores Solares', categories: ['Proyectos', 'Termotanques'],},
  { id: 5, src: proyect5, alt: 'Casa Vacacional Silvania - Colectores', categories: ['Proyectos', 'Termotanques']},
  { id: 6, src: proyect6, alt: 'Finca El Fin del Afán - Solar Térmico', categories: ['Proyectos', 'Termotanques']},
  { id: 7, src: proyect7, alt: 'Méderi Hospital Universitario - Acero Inoxidable', categories: ['Proyectos', 'Termotanques']},
  { id: 8, src: image1, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 9, src: image2, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 10, src: image3, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 11, src: image4, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 12, src: image5, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 13, src: image6, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 14, src: image7, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 15, src: image8, alt: 'Paneles solares', categories: ['Instalaciones'] },
  { id: 16, src: image9, alt: 'Caldera', categories: ['Termotanques'] },
  { id: 17, src: image10, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 18, src: image11, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
  { id: 19, src: image12, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 20, src: image13, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 21, src: image14, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 22, src: image15, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 23, src: image16, alt: 'Termotanque acero inoxidable', categories: ['Colectores'] },
  { id: 24, src: image17, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 25, src: image18, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 26, src: image18, alt: 'Termotanque acero inoxidable', categories: ['Calderas'] },
  { id: 27, src: image19, alt: 'Termotanque acero inoxidable', categories: ['Instalaciones'] },
  { id: 28, src: image20, alt: 'Termotanque acero inoxidable', categories: ['Proyectos'] },
  { id: 29, src: image21, alt: 'Termotanque acero inoxidable', categories: ['Proyectos'] },
  { id: 30, src: image22, alt: 'Termotanque acero inoxidable', categories: ['Proyectos', 'Calderas'] },
  { id: 31, src: image23, alt: 'Termotanque acero inoxidable', categories: ['Calderas'] },
  { id: 32, src: image24, alt: 'Termotanque acero inoxidable', categories: ['Calderas'] },
  { id: 33, src: image25, alt: 'Termotanque acero inoxidable', categories: ['Calderas'] },
  { id: 34, src: image26, alt: 'Termotanque acero inoxidable', categories: ['Termotanques'] },
]

export const galleryVideos = [
   {
    id: 'v1',
    type: 'local',
    src: '/videos/video1.mp4',
    thumbnail: image3, 
    title: 'Instalación sistema solar térmico - AYA Ingeniería',
    description: 'Proceso de instalación de colectores solares tipo Heat Pipe en Bogotá.',
    duration: '0:50',
  },
  // {
  //   id: 'v2',
  //   type: 'youtube',
  //   videoId: 'oVW4qn9DTPM', // ← reemplaza con tu YouTube video ID real
  //   thumbnail: 'https://img.youtube.com/vi/oVW4qn9DTPM/hqdefault.jpg',
  //   title: 'Fabricación de termotanques en acero inoxidable',
  //   description: 'Así fabricamos nuestros termotanques de alta capacidad en nuestras instalaciones.',
  //   duration: '4:10',
  // },
  // {
  //   id: 'v3',
  //   type: 'youtube',
  //   videoId: 'h3mZ4KxFAWY', // ← reemplaza con tu YouTube video ID real
  //   thumbnail: 'https://img.youtube.com/vi/h3mZ4KxFAWY/hqdefault.jpg',
  //   title: 'Climatización de piscina con energía solar',
  //   description: 'Proyecto de climatización de piscina usando colectores solares en Cundinamarca.',
  //   duration: '2:55',
  // },
]


