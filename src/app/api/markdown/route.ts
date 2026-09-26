import { NextRequest } from 'next/server';
import TurndownService from 'turndown';

// Negociación de contenido: el middleware reescribe acá las peticiones con
// Accept: text/markdown. Pedimos el HTML a la misma URL y lo convertimos.
export async function GET(req: NextRequest) {
  const path = req.nextUrl.searchParams.get('path') ?? '/';
  if (!path.startsWith('/') || path.startsWith('//') || path.startsWith('/api')) {
    return new Response('Bad request', { status: 400 });
  }

  const res = await fetch(new URL(path, req.nextUrl.origin), { headers: { Accept: 'text/html' } });
  if (!res.ok) return new Response('Not found', { status: res.status });

  const html = await res.text();
  const main = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? html;
  const td = new TurndownService({ headingStyle: 'atx', codeBlockStyle: 'fenced' });
  td.remove(['script', 'style', 'noscript', 'iframe']);
  td.addRule('svg', { filter: (n) => n.nodeName.toLowerCase() === 'svg', replacement: () => '' });
  const title = html.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim();
  const markdown = `${title ? `# ${title}\n\n` : ''}${td.turndown(main)}\n`;

  return new Response(markdown, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'x-markdown-tokens': String(Math.ceil(markdown.length / 4)),
      Vary: 'Accept',
    },
  });
}
