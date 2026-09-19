export type ServiceSlug =
  | 'landing-pages-profesionales'
  | 'desarrollo-web-argentina'
  | 'aplicaciones-web-a-medida';

type LocalizedDetail = {
  /** Que se ve y que hace el sitio, sin cifras que no esten publicadas en el propio sitio. */
  features: string[];
  /** Decisiones de diseno y desarrollo detras del resultado. */
  approach: string;
};

export type CaseDetail = {
  service: ServiceSlug;
  es: LocalizedDetail;
  en: LocalizedDetail;
};

export const enProjects: Record<
  string,
  { client: string; summary: string; result: string; challenge: string; solution: string }
> = {
  'invert-ia': { client: 'Fintech · Argentina', summary: 'Investment platform with a modern interface and optimized onboarding flow.', result: 'Production site with optimized performance on Vercel. Delivered in 4 weeks.', challenge: 'Build an investment platform that communicates trust and professionalism from the first scroll.', solution: 'A clean Next.js interface focused on conversion, minimal load times and financial credibility.' },
  'ecommerce-mvp': { client: 'Retail · Argentina', summary: 'Online store MVP with a product catalog and complete purchase flow.', result: 'Functional MVP launched in 3 weeks.', challenge: 'Launch a functional e-commerce experience quickly without sacrificing usability.', solution: 'A Next.js MVP with catalog, cart and checkout ready to scale with a real payment gateway.' },
  'jara-asociados': { client: 'Real estate · Condominiums · Argentina', summary: 'Institutional landing page for a condominium and real-estate trust management firm, focused on client acquisition.', result: 'Delivered in 2 weeks with local SEO optimized.', challenge: 'Create a web presence that communicates authority and trust for a condominium and real-estate trust management firm with more than 40 years of experience.', solution: 'An institutional landing page with services, managed buildings, team and contact form optimized for local SEO.' },
  'patagonia-motors': { client: 'Automotive · Argentina', summary: 'Dealership landing page with vehicle catalog and enquiry form.', result: 'Live catalog website delivered in 2 weeks with optimized SEO.', challenge: 'Create a modern digital presence that builds trust and makes it easy for buyers to enquire.', solution: 'A landing page with vehicle catalog, product pages and a direct enquiry form, optimized for conversion.' },
  'havas-argentina': { client: 'Advertising agency · Argentina', summary: 'Onboarding landing page for new Havas Argentina employees and collaborators.', result: 'Centralized digital onboarding flow. Delivered in 3 weeks.', challenge: 'Centralize onboarding for an international advertising agency in one clear interface.', solution: 'A step-by-step Next.js onboarding experience with sections for each type of new joiner.' },
  'odontologia-santiago': { client: 'Healthcare · Dentistry · Argentina', summary: 'A dental practice website designed to build patient trust before the first appointment, with an online booking journey that keeps the next step clear.', result: 'A live dental-practice website with integrated appointment booking, delivered in two weeks.', challenge: 'The practice needed a digital presence that felt approachable and professional while giving prospective patients a simple path from learning about treatments to booking an appointment.', solution: 'We created a warm, mobile-first Next.js landing page that presents treatments and the professional team in a clear order, then guides visitors into a direct appointment-booking flow.' },
};

export const caseDetails: Record<string, CaseDetail> = {
  'havas-argentina': {
    service: 'desarrollo-web-argentina',
    es: {
      features: [
        'Pantalla de bienvenida con un recorrido guiado ("Comenzá tu recorrido") para que cada persona empiece por el principio.',
        'Herramientas digitales agrupadas en cuatro categorías: Seguridad, Comunicación, Almacenamiento y Gestión Personal.',
        'Tarjetas con acceso directo a cada plataforma (Microsoft 365, Teams, SharePoint, Azure Virtual Desktop) y una línea que explica para qué sirve.',
        'Guía paso a paso para reportar problemas técnicos en Jira, con una explicación de qué es la plataforma y un video demostrativo.',
        'Accesos para contactar al equipo de IT o crear un ticket cuando algo no funciona.',
      ],
      approach:
        'El público son personas que recién ingresan y todavía no conocen la empresa ni sus sistemas, así que la prioridad fue reducir la cantidad de decisiones por pantalla. Cada sección responde una sola pregunta ("¿qué herramientas voy a usar?", "¿cómo pido ayuda?"), usa tarjetas cortas con una acción clara y mantiene la identidad visual de Havas para que se sienta parte de la empresa desde el primer día. Se construyó con Next.js para que cargue rápido y se pueda sumar nuevas herramientas sin rehacer el sitio.',
    },
    en: {
      features: [
        'A welcome screen with a guided path ("Start your journey") so everyone begins at the beginning.',
        'Digital tools grouped into four categories: Security, Communication, Storage and Personal Management.',
        'Cards with direct access to each platform (Microsoft 365, Teams, SharePoint, Azure Virtual Desktop) and a line explaining what it is for.',
        'A step-by-step guide to reporting technical issues in Jira, with an explanation of the platform and a demo video.',
        'Shortcuts to contact the IT team or open a ticket when something does not work.',
      ],
      approach:
        'The audience is people who have just joined and do not yet know the company or its systems, so the priority was to reduce the number of decisions per screen. Each section answers a single question ("which tools will I use?", "how do I ask for help?"), uses short cards with a clear action and keeps Havas\'s visual identity so it feels part of the company from day one. It was built with Next.js to load quickly and to allow new tools to be added without rebuilding the site.',
    },
  },
  'invert-ia': {
    service: 'desarrollo-web-argentina',
    es: {
      features: [
        'Cinta de cotizaciones en la parte superior (acciones, dólar y bonos) para que el visitante perciba enseguida que es una plataforma de mercado.',
        'Propuesta de valor directa: gestión de carteras e inteligencia financiera pensada para el mercado argentino.',
        'Una llamada a la acción principal ("Empezar a invertir") y otra secundaria para quienes ya tienen cuenta.',
        'Mensajes que bajan la fricción del registro: sin tarjeta de crédito, configuración en 2 minutos y cancelación cuando quieras.',
      ],
      approach:
        'En un producto financiero la confianza pesa más que la originalidad. Elegimos una interfaz oscura y sobria con un único color de acento, una jerarquía tipográfica clara y datos de mercado a la vista, para que la página se sienta seria desde el primer scroll. Todo el peso de la conversión recae en dos botones bien diferenciados. El sitio se construyó con Next.js y se publicó en Vercel para mantener los tiempos de carga bajos.',
    },
    en: {
      features: [
        'A market ticker strip at the top (stocks, US dollar and bonds) so visitors immediately see it is a market platform.',
        'A direct value proposition: portfolio management and financial intelligence built for the Argentine market.',
        'One primary call to action ("Start investing") and a secondary one for people who already have an account.',
        'Messages that lower sign-up friction: no credit card, two-minute setup and cancel any time.',
      ],
      approach:
        'In a financial product, trust matters more than originality. We chose a dark, restrained interface with a single accent color, a clear type hierarchy and market data in view, so the page feels serious from the first scroll. All the conversion weight sits on two clearly different buttons. The site was built with Next.js and published on Vercel to keep load times low.',
    },
  },
  'ecommerce-mvp': {
    service: 'aplicaciones-web-a-medida',
    es: {
      features: [
        'Cabecera con buscador de productos, carrito y acceso a la cuenta del usuario.',
        'Catálogo organizado por categorías de producto (iPhone, MacBook, iPad, Apple Watch).',
        'Sección de opiniones de clientes para reforzar la confianza antes de comprar.',
        'Información de servicio (soporte técnico, garantía, envíos y devoluciones), suscripción a newsletter y páginas legales de privacidad, términos y reembolsos.',
      ],
      approach:
        'Un MVP no es una tienda recortada: es la tienda con solo lo necesario para vender. Priorizamos el recorrido buscar, elegir y comprar, dejamos el checkout preparado para conectar una pasarela de pagos real y resolvimos primero lo que da confianza al comprador (garantía, envíos, devoluciones). Así se pudo lanzar en tres semanas y ampliar después según lo que muestren las ventas.',
    },
    en: {
      features: [
        'A header with product search, cart and user account access.',
        'A catalog organized by product category (iPhone, MacBook, iPad, Apple Watch).',
        'A customer reviews section to build trust before purchase.',
        'Service information (technical support, warranty, shipping and returns), newsletter sign-up and legal pages for privacy, terms and refunds.',
      ],
      approach:
        'An MVP is not a stripped-down store: it is the store with only what is needed to sell. We prioritized the search, choose and buy path, left checkout ready to connect a real payment gateway and solved what builds buyer trust first (warranty, shipping, returns). That made a three-week launch possible, with room to grow based on what sales show.',
    },
  },
  'jara-asociados': {
    service: 'landing-pages-profesionales',
    es: {
      features: [
        'Sección "Sobre nosotros" que presenta la especialidad del estudio (gestión integral de consorcios, fideicomisos inmobiliarios y locaciones) y sus más de 40 años de trayectoria.',
        'Cifras de gestión a la vista: metros cuadrados, unidades funcionales, edificios, fideicomisos y barrios administrados.',
        'Sección "Edificios administrados" con un mapa por barrio para ubicar las propiedades a cargo del estudio.',
        'Formulario de contacto y menú con las secciones Nosotros, Servicios, Edificios administrados y Contacto.',
        'Botón "Solicitar presupuesto" en la cabecera y acceso flotante a WhatsApp.',
      ],
      approach:
        'Para un estudio con décadas de trayectoria, la web tenía que demostrar experiencia antes de pedir nada. Por eso los números concretos de gestión y la presentación del equipo van arriba, y el contacto queda siempre a un clic: un botón en la cabecera y WhatsApp flotante. Se trabajó el SEO local para las búsquedas de su zona.',
    },
    en: {
      features: [
        'An "About us" section presenting the firm\'s specialty (full-service management of condominiums, real-estate trusts and leases) and its more than 40 years of experience.',
        'Management figures in plain view: square meters, units, buildings, trusts and neighborhoods managed.',
        'A "Managed buildings" section with a neighborhood map showing the properties the firm looks after.',
        'A contact form and a menu with About us, Services, Managed buildings and Contact sections.',
        'A "Request a quote" button in the header and a floating WhatsApp shortcut.',
      ],
      approach:
        'For a firm with decades of experience, the site had to show expertise before asking for anything. That is why concrete management figures and the team introduction come first, and contact is always one click away: a header button and floating WhatsApp. Local SEO was worked on for searches in its area.',
    },
  },
  'patagonia-motors': {
    service: 'landing-pages-profesionales',
    es: {
      features: [
        'Catálogo con tarjetas "Los más elegidos": marca, año, modelo, precio de referencia, potencia y valoración de cada vehículo.',
        'Fichas individuales por vehículo, cada una con su propia URL.',
        'Menú con Autos, Comparador y Beneficios, más buscador, cuenta y carrito.',
        'Asistente "Match AI" y botón de "Asesor 24/7" para consultar en cualquier momento.',
        'Selector de idioma.',
      ],
      approach:
        'Comprar un auto implica comparar. Por eso el catálogo muestra los datos que más se miran (precio, potencia, tipo de carrocería) sin entrar a la ficha, y el comparador y el asesor están siempre visibles. Un diseño oscuro deja que las fotos de los vehículos sean protagonistas, y el sitio se optimizó para cargar rápido aun con muchas imágenes.',
    },
    en: {
      features: [
        '"Most popular" catalog cards: make, year, model, starting price, horsepower and rating for each vehicle.',
        'Individual vehicle pages, each with its own URL.',
        'A menu with Cars, Comparator and Benefits, plus search, account and cart.',
        'A "Match AI" assistant and a "24/7 Advisor" button to ask questions at any time.',
        'A language selector.',
      ],
      approach:
        'Buying a car means comparing. So the catalog shows the details people look at most (price, horsepower, body type) without opening the vehicle page, and the comparator and advisor are always visible. A dark design lets the vehicle photos take center stage, and the site was optimized to load quickly even with many images.',
    },
  },
  'odontologia-santiago': {
    service: 'landing-pages-profesionales',
    es: {
      features: [
        'Tratamientos más solicitados destacados con su descripción: prótesis odontológica, blanqueamiento y reconstrucción dental.',
        'Listado de servicios complementarios: odontopediatría, cirugía, endodoncia, limpieza, radiografías y odontología general.',
        'Galería "Antes y después" con comparador deslizable para ver resultados reales.',
        'Menú con Servicios, Condiciones, Sobre nosotros y Contacto, y acceso flotante a WhatsApp.',
        'Reserva de turnos integrada en el sitio.',
      ],
      approach:
        'Quien busca un dentista suele llegar con dudas o miedo antes que con urgencia. Usamos una paleta cálida en verdes y tonos crema, textos simples y tratamientos explicados sin tecnicismos para que la web se sienta cercana. Las fotos de antes y después ayudan a decidir, y la reserva de turnos y WhatsApp están siempre a mano para que el paso siguiente sea inmediato. El diseño se pensó primero para celular.',
    },
    en: {
      features: [
        'Most requested treatments highlighted with a description: dental prosthetics, teeth whitening and dental reconstruction.',
        'A list of additional services: pediatric dentistry, surgery, endodontics, cleaning, X-rays and general dentistry.',
        'A "Before and after" gallery with a sliding comparison to see real results.',
        'A menu with Services, Terms, About us and Contact, plus a floating WhatsApp shortcut.',
        'Appointment booking built into the site.',
      ],
      approach:
        'People looking for a dentist often arrive with doubts or fear rather than urgency. We used a warm palette of greens and cream tones, simple copy and treatments explained without jargon so the site feels approachable. Before and after photos help people decide, and booking and WhatsApp are always at hand so the next step is immediate. The design was conceived mobile-first.',
    },
  },
};
