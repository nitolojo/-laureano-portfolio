// Add a new project by adding an object here, then dropping matching
// image files into assets/images/projects/<slug>/
// (cover.jpg + as many gallery-N.jpg as you like — see README in that folder).
const PROJECTS = [
  {
    slug: 'denodo',
    accent: '#1F3FD6',
    year: '2019—Now',
    yearEs: '2019—Hoy',
    filter: 'brand',
    title: 'Denodo',
    category: { en: 'Brand & Events', es: 'Marca y eventos' },
    role: { en: 'Graphic Designer → Marketing Manager', es: 'Diseñador gráfico → Marketing Manager' },
    summary: {
      en: 'Brand systems, trade show environments and multilingual design pipelines for a global data-management company.',
      es: 'Sistemas de marca, entornos de ferias y pipelines de diseño multilingüe para una empresa global de gestión de datos.'
    },
    description: {
      en: 'Trilingual graphic designer and visual strategist, driving Denodo\u2019s brand evolution across 30+ markets for five years. I work across brand strategy, immersive event design for conferences like Gartner and AWS, and AI-augmented production with Adobe Firefly and Midjourney \u2014 building full-funnel visual systems for ABM, paid media and sales enablement, with a social-first eye sharpened by running a 120K+ content audience.',
      es: 'Diseñador gráfico trilingüe y estratega visual, impulsando la evolución de marca de Denodo en más de 30 mercados durante cinco años. Trabajo en estrategia de marca, diseño de eventos inmersivos para conferencias como Gartner y AWS, y producción con IA (Adobe Firefly, Midjourney) — construyendo sistemas visuales de embudo completo para ABM, paid media y sales enablement, con una mirada social-first afilada por gestionar una audiencia de creador de 120K+.'
    },
    cover: 'assets/images/projects/denodo/cover.jpg',
    gallery: [
      'assets/images/projects/denodo/gallery-1.jpg',
      'assets/images/projects/denodo/gallery-2.jpg'
    ]
  },
  {
    slug: 'goodtings',
    accent: '#4AED80',
    year: '2024—Now',
    yearEs: '2024—Hoy',
    filter: 'product',
    title: 'goodtings.',
    category: { en: 'Product & Brand — Founder', es: 'Producto y marca — Founder' },
    role: { en: 'Solo designer & founder', es: 'Diseñador y founder en solitario' },
    summary: {
      en: 'An iOS manifestation and journaling app, designed, built and shipped solo — brand, product and pitch, all one system.',
      es: 'Una app de manifestación y journaling para iOS, diseñada, construida y publicada en solitario — marca, producto y pitch, un mismo sistema.'
    },
    description: {
      en: 'goodtings. is my own product, built end to end on React Native, Expo, Firebase and RevenueCat. I designed the brand system around Figtree, a signature green and purple, and soft gradient light \u2014 then carried that system through the app itself, its App Store presence, a pre-seed pitch deck for K-Fund, and a product spec for a Ray-Ban Display companion, goodtings.glass.',
      es: 'goodtings. es mi propio producto, construido de principio a fin con React Native, Expo, Firebase y RevenueCat. Diseñé el sistema de marca en torno a Figtree, un verde y morado propios, y una luz de degradados suaves \u2014 y llevé ese sistema a la app, su presencia en la App Store, un pitch deck pre-seed para K-Fund, y una spec de producto para un acompañante de Ray-Ban Display, goodtings.glass.'
    },
    cover: 'assets/images/projects/goodtings/cover.jpg',
    gallery: [
      'assets/images/projects/goodtings/gallery-1.jpg',
      'assets/images/projects/goodtings/gallery-2.jpg'
    ]
  },
  {
    slug: 'content',
    accent: '#FF5A36',
    year: 'Ongoing',
    yearEs: 'Activo',
    filter: 'content',
    title: { en: 'Content', es: 'Contenido' },
    category: { en: '@laureanolojo — 125K+', es: '@laureanolojo — 125K+' },
    role: { en: 'Creator & designer', es: 'Creador y diseñador' },
    summary: {
      en: 'Lifestyle, travel and tech content built alongside a design career, plus the graphic system behind it.',
      es: 'Contenido de lifestyle, viajes y tecnología en paralelo a una carrera de diseño, y el sistema gráfico detrás.'
    },
    description: {
      en: 'A creator identity built in parallel to my design work, across TikTok and Instagram to a combined audience of 125K+. Past brand partnerships include L\u2019Or\u00e9al, Oclean and Arkopharma, and recent output includes travel content from a trip to Mauritius \u2014 all supported by story and feed graphics in my own consistent visual system.',
      es: 'Una identidad de creador construida en paralelo a mi trabajo de diseño, en TikTok e Instagram para una audiencia combinada de 125K+. Entre las colaboraciones de marca están L\u2019Or\u00e9al, Oclean y Arkopharma, y el trabajo reciente incluye contenido de viaje desde Mauricio \u2014 todo con gráficas de stories y feed en mi propio sistema visual.'
    },
    cover: 'assets/images/projects/content/cover.jpg',
    gallery: [
      'assets/images/projects/content/gallery-1.jpg',
      'assets/images/projects/content/gallery-2.jpg'
    ]
  }
];
