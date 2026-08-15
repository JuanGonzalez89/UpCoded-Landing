const fs = require('fs');
const path = require('path');

const blogs = [
  {
    slug: 'sistema-para-comercio-ventas-stock',
    title: 'Sistema para comercio: Cómo controlar ventas y stock sin complicarte',
    description: 'El mejor software para administrar tu negocio, fácil de usar y diseñado para evitar faltantes de inventario.',
    date: '2026-08-15',
    category: 'Sistemas',
    author: 'UpCoded Team'
  },
  {
    slug: 'chatbot-whatsapp-vender-24-7',
    title: 'Chatbot de WhatsApp: Respuestas automáticas para no perder ventas',
    description: 'Cómo configurar un bot en WhatsApp para responder consultas de precios y horarios mientras tú estás ocupado.',
    date: '2026-08-14',
    category: 'Automatización',
    author: 'UpCoded Team'
  },
  {
    slug: 'sistema-de-turnos-online-medicos-peluquerias',
    title: 'Sistema de turnos online para clínicas, peluquerías y profesionales',
    description: 'Olvídate de la agenda de papel. Un software que permite a tus clientes agendar solos y te envía recordatorios automáticos.',
    date: '2026-08-13',
    category: 'Sistemas',
    author: 'UpCoded Team'
  },
  {
    slug: 'software-para-restaurantes-pedidos',
    title: 'Software para restaurantes: Toma de pedidos y caja rápida',
    description: 'Agiliza la atención en las mesas, conecta la cocina con la caja y despacha pedidos por delivery sin errores.',
    date: '2026-08-12',
    category: 'Gastronomía',
    author: 'UpCoded Team'
  },
  {
    slug: 'crear-pagina-web-para-vender-mas',
    title: 'Cómo crear una página web que realmente traiga clientes',
    description: 'No necesitas una web de adorno, necesitas una que posicione en Google y convenza a las personas de contactarte.',
    date: '2026-08-11',
    category: 'Páginas Web',
    author: 'UpCoded Team'
  },
  {
    slug: 'software-para-distribuidoras',
    title: 'Software para distribuidoras y mayoristas: Control total',
    description: 'Gestiona rutas de reparto, cuentas corrientes de clientes y depósitos múltiples desde un solo lugar.',
    date: '2026-08-10',
    category: 'Sistemas',
    author: 'UpCoded Team'
  },
  {
    slug: 'sistema-para-kioscos-y-minimarkets',
    title: 'El mejor sistema para kioscos y minimarkets: Lector de código de barras',
    description: 'Acelera el cobro en caja con un programa simple que lee códigos de barras y actualiza precios masivamente.',
    date: '2026-08-09',
    category: 'Retail',
    author: 'UpCoded Team'
  },
  {
    slug: 'aplicacion-propia-para-delivery',
    title: 'Crear tu propia aplicación de delivery (Y dejar de pagar comisiones)',
    description: 'Por qué tener una app propia para que tus clientes pidan comida te ahorra miles de pesos en comisiones de terceros.',
    date: '2026-08-08',
    category: 'Desarrollo App',
    author: 'UpCoded Team'
  },
  {
    slug: 'sistema-cobranzas-facturacion-electronica',
    title: 'Sistema de facturación electrónica y cobranzas automático',
    description: 'Conecta tu software con AFIP para facturar en un clic y envía recordatorios de pago a morosos sin levantar el teléfono.',
    date: '2026-08-07',
    category: 'Finanzas',
    author: 'UpCoded Team'
  },
  {
    slug: 'software-gestion-inmobiliarias',
    title: 'Software de gestión para inmobiliarias: Propiedades y contratos',
    description: 'Publica alquileres en tu web, controla vencimientos de contratos y administra consorcios de forma ordenada.',
    date: '2026-08-06',
    category: 'Real Estate',
    author: 'UpCoded Team'
  },
  {
    slug: 'automatizar-respuestas-instagram',
    title: 'Cómo automatizar las respuestas de Instagram para tu tienda',
    description: 'Herramientas simples para enviar catálogos y links de pago apenas un cliente te escribe por mensaje directo.',
    date: '2026-08-05',
    category: 'Automatización',
    author: 'UpCoded Team'
  },
  {
    slug: 'software-para-talleres-mecanicos',
    title: 'Software para talleres mecánicos: Ordenes de reparación',
    description: 'Mantén un historial por patente, presupuesta arreglos rápido y avísale al cliente por WhatsApp cuando su auto está listo.',
    date: '2026-08-04',
    category: 'Automotriz',
    author: 'UpCoded Team'
  },
  {
    slug: 'tienda-online-propia-vs-redes',
    title: 'Por qué necesitas una tienda online propia (y no solo vender por Instagram)',
    description: 'Profesionaliza tu marca, acepta tarjetas de crédito en piloto automático y genera confianza para vender en todo el país.',
    date: '2026-08-03',
    category: 'E-commerce',
    author: 'UpCoded Team'
  },
  {
    slug: 'sistema-para-gimnasios-y-clubes',
    title: 'Sistema de control de acceso para gimnasios y clubes',
    description: 'Administra pagos mensuales, corta el acceso a morosos y permite reservar clases desde el celular del socio.',
    date: '2026-08-02',
    category: 'Sistemas',
    author: 'UpCoded Team'
  },
  {
    slug: 'software-para-estudios-contables',
    title: 'Software para estudios contables: Menos papeles, más orden',
    description: 'Unifica las carpetas de tus clientes, descarga comprobantes rápido y evita multas por vencimientos pasados.',
    date: '2026-08-01',
    category: 'Profesionales',
    author: 'UpCoded Team'
  },
  {
    slug: 'erp-para-pymes-industriales',
    title: 'Sistema ERP para fábricas y Pymes industriales',
    description: 'Controla la materia prima, calcula el costo real de fabricación y haz seguimiento de la producción en la planta.',
    date: '2026-07-31',
    category: 'Industria',
    author: 'UpCoded Team'
  },
  {
    slug: 'software-para-logistica-fletes',
    title: 'Software para empresas de logística y fletes',
    description: 'Optimiza rutas en el mapa, sigue a los choferes en tiempo real y que el cliente firme el remito digital en el celular.',
    date: '2026-07-30',
    category: 'Logística',
    author: 'UpCoded Team'
  },
  {
    slug: 'crm-facil-para-equipos-ventas',
    title: 'Un CRM fácil de usar para que tus vendedores no se olviden de llamar',
    description: 'Si tienes más de dos vendedores, necesitas un embudo de ventas claro. Deja de perder presupuestos por falta de seguimiento.',
    date: '2026-07-29',
    category: 'Ventas',
    author: 'UpCoded Team'
  },
  {
    slug: 'integrar-mercado-pago-sistema',
    title: 'Cómo integrar cobros con Mercado Pago en tu sistema',
    description: 'Evita errores humanos al cobrar. La integración hace que tu sistema le avise a la terminal de cobro exactamente el monto.',
    date: '2026-07-28',
    category: 'Finanzas',
    author: 'UpCoded Team'
  },
  {
    slug: 'cuanto-cuesta-hacer-un-sistema',
    title: '¿Cuánto cuesta hacer un sistema o aplicación hoy?',
    description: 'Te explicamos los precios reales para crear un programa a la medida de tu comercio o empresa sin gastos ocultos.',
    date: '2026-07-27',
    category: 'Desarrollo Web',
    author: 'UpCoded Team'
  }
];

const dir = path.join(__dirname, 'src', 'content', 'blog');

blogs.forEach(blog => {
  const content = `---
title: "${blog.title}"
date: "${blog.date}"
description: "${blog.description}"
category: "${blog.category}"
author: "${blog.author}"
---

## La Solución a tu Problema (BLUF)
El mayor desafío de los dueños de negocios hoy en día no es conseguir clientes, sino poder atenderlos bien y organizar los números sin volverse locos. Un **software a medida o sistema de gestión simple** soluciona esto automatizando las tareas manuales que te roban tiempo todos los días, permitiéndote tener el control de tu negocio desde tu celular.

## ¿Por qué seguir haciéndolo a mano?
Muchos comercios y empresas arrancan anotando todo en cuadernos o usando un Excel. Pero cuando empiezas a crecer, pasan cosas como:
*   Un cliente te escribe por WhatsApp pidiendo un turno o precio, y tardas horas en responder.
*   Alguien te compra un producto, pero resulta que ya no tenías stock en el depósito.
*   Llega fin de mes y no sabes exactamente cuánta ganancia limpia te quedó.

## Cómo te ayuda la tecnología
Implementar una solución simple, ya sea un **chatbot para WhatsApp**, un **sistema de turnos online**, o un **software de caja y stock**, cambia las reglas del juego. 

No necesitas entender de tecnología ni programación. Nosotros nos encargamos de que la herramienta sea tan fácil de usar como mandar un mensaje, para que tú y tus empleados puedan empezar a usarla el mismo día sin capacitaciones largas ni complicaciones.
`;

  fs.writeFileSync(path.join(dir, `${blog.slug}.mdx`), content);
});

console.log('20 blogs actualizados exitosamente con intencion de busqueda simple de negocios locales.');
