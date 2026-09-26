// RFC 9727: catálogo de APIs como linkset (RFC 9264).
const catalog = {
  linkset: [
    {
      anchor: 'https://upcoded.dev/api/start-project',
      'service-desc': [{ href: 'https://upcoded.dev/openapi.json', type: 'application/json' }],
      'service-doc': [{ href: 'https://upcoded.dev/es/iniciar-proyecto', type: 'text/html' }],
    },
    {
      anchor: 'https://upcoded.dev/api/contact',
      'service-desc': [{ href: 'https://upcoded.dev/openapi.json', type: 'application/json' }],
      'service-doc': [{ href: 'https://upcoded.dev/es#contacto', type: 'text/html' }],
    },
  ],
};

export function GET() {
  return new Response(JSON.stringify(catalog), {
    headers: {
      'Content-Type': 'application/linkset+json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
