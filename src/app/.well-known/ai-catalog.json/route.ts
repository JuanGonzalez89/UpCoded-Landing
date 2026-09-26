const catalog = {
  specVersion: '1.0',
  host: { displayName: 'UpCoded', url: 'https://upcoded.dev' },
  entries: [
    {
      identifier: 'urn:air:upcoded.dev:api:start-project',
      displayName: 'UpCoded – solicitar un proyecto',
      description: 'API HTTP para enviar una solicitud de proyecto o presupuesto a UpCoded.',
      type: 'application/vnd.oai.openapi+json',
      url: 'https://upcoded.dev/openapi.json',
      representativeQueries: [
        'Quiero pedir presupuesto para una página web en Argentina',
        'Contactar una agencia de desarrollo web',
        'Solicitar un sistema a medida o automatización',
      ],
    },
  ],
};

export function GET() {
  return new Response(JSON.stringify(catalog), {
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}
