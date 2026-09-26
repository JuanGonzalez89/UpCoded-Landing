// Route handler en vez de app/robots.ts: MetadataRoute.Robots no soporta Content-Signal.
const body = `User-agent: *
Allow: /
Content-Signal: ai-train=no, search=yes, ai-input=yes

Sitemap: https://upcoded.dev/sitemap.xml
`;

export function GET() {
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
