export type Project = {
  slug: string;
  title: string;
  client: string;
  stack: string[];
  summary: string;
  result: string;
  liveUrl: string | null;
  previewImage?: string;
  images: string[];
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "invert-ia",
    title: "InvertIA",
    client: "Fintech · Argentina",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    summary: "Plataforma de inversiones con interfaz moderna y flujo de onboarding optimizado.",
    result: "Sitio en producción con performance optimizada en Vercel. Entregada en 4 semanas",
    liveUrl: "https://invert-ia-seven.vercel.app",
    previewImage: "/portfolio/InvertIA/InvertIA_Preview.png",
    images: [
      "/portfolio/InvertIA/Screenshot_1.png",
      "/portfolio/InvertIA/screenshot_2.jpg",
      "/portfolio/InvertIA/screenshot_3.jpg",
      "/portfolio/InvertIA/screenshot_4.jpg",
    ],
    challenge: "Crear una plataforma de inversiones que transmita confianza y profesionalismo desde el primer scroll.",
    solution: "Desarrollamos una interfaz limpia con Next.js enfocada en conversión, con tiempos de carga mínimos y diseño orientado a credibilidad financiera.",
  },
  {
    slug: "ecommerce-mvp",
    title: "E-Commerce MVP",
    client: "Retail · Argentina",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    summary: "MVP de tienda online con catálogo de productos y flujo de compra completo.",
    result: "MVP funcional lanzado en 3 semanas",
    liveUrl: null,
    images: [
      "/portfolio/ecommerce-mvp/screenshot-1.png",
      "/portfolio/ecommerce-mvp/screenshot-2.png",
      "/portfolio/ecommerce-mvp/screenshot-3.png",
      "/portfolio/ecommerce-mvp/screenshot-4.png",
    ],
    challenge: "Lanzar un e-commerce funcional en el menor tiempo posible sin sacrificar experiencia de usuario.",
    solution: "Construimos un MVP con Next.js con catálogo, carrito y checkout integrado, listo para escalar con pasarela de pagos real.",
  },
  {
    slug: "jara-asociados",
    title: "Jara y Asociados",
    client: "Legal · Argentina",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    summary: "Landing institucional para estudio jurídico con foco en captación de clientes.",
    result: "Entregada en 2 semanas, con SEO local optimizado",
    liveUrl: "https://jara-asociados-landing.vercel.app",
    previewImage: "/portfolio/JaraYAsociados/JaraYAsociados_Preview.png",
    images: [
      "/portfolio/JaraYAsociados/Screenshot_1.png",
      "/portfolio/JaraYAsociados/Screenshot_2.png",
      "/portfolio/JaraYAsociados/Screenshot_3.png",
      "/portfolio/JaraYAsociados/Screenshot_4.png",
    ],
    challenge: "Diseñar una presencia web que transmita autoridad y confianza para un estudio jurídico con años de trayectoria.",
    solution: "Landing institucional con secciones de especialidades, equipo y formulario de contacto, optimizada para SEO local.",
  },
  {
    slug: "patagonia-motors",
    title: "Patagonia Motors",
    client: "Automotriz · Argentina",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    summary: "Landing institucional para concesionaria con catálogo de vehículos y formulario de consulta.",
    result: "Sitio en producción con catálogo online activo. Entregado en 2 semanas, con SEO optimizado",
    liveUrl: "https://patagoniamotors.vercel.app/",
    previewImage: "/portfolio/Patagonia_Motors/Preview_Patagonia_Motors.png",
    images: [
      "/portfolio/Patagonia_Motors/Screenshot_1.png",
      "/portfolio/Patagonia_Motors/Screenshot_2.png",
      "/portfolio/Patagonia_Motors/Screenshot_3.png",
      "/portfolio/Patagonia_Motors/Screenshot_4.png",
    ],
    challenge: "Crear una presencia digital moderna para una concesionaria que transmita confianza y facilite el contacto con compradores potenciales.",
    solution: "Desarrollamos una landing con catálogo de vehículos, fichas de producto y formulario de consulta directo, optimizada para conversión y carga rápida.",
  },
  {
    slug: "havas-argentina",
    title: "Havas Argentina",
    client: "Agencia de Publicidad · Argentina",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    summary: "Landing de onboarding para nuevos empleados y colaboradores de Havas Argentina.",
    result: "Flujo de onboarding digitalizado y centralizado. Entregada en 3 semanas",
    liveUrl: null,
    previewImage: "/portfolio/Havas_Argentina/Havas_Argentina_Preview.jpg",
    images: [
      "/portfolio/Havas_Argentina/screenshot-1.jpg",
      "/portfolio/Havas_Argentina/screenshot-2.jpg",
      "/portfolio/Havas_Argentina/screenshot-3.jpg",
      "/portfolio/Havas_Argentina/screenshot-4.jpg",
    ],
    challenge: "Centralizar el proceso de onboarding de una agencia de publicidad de escala internacional en una sola interfaz clara y profesional.",
    solution: "Diseñamos una landing de onboarding con Next.js que guía al usuario paso a paso, con secciones diferenciadas por tipo de ingresante.",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}