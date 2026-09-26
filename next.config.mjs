/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async headers() {
    // RFC 8288: recursos para descubrimiento por agentes.
    const link = [
      '</.well-known/api-catalog>; rel="api-catalog"',
      '</openapi.json>; rel="service-desc"; type="application/json"',
      '</es/iniciar-proyecto>; rel="service-doc"',
      '</.well-known/agent-skills/index.json>; rel="describedby"',
    ].join(', ');
    return ['/', '/es', '/en'].map((source) => ({
      source,
      headers: [{ key: 'Link', value: link }],
    }));
  }
};

export default nextConfig;