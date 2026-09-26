'use client';

import { useEffect } from 'react';

type ModelContext = {
  provideContext: (ctx: { tools: unknown[] }) => void;
};

/** WebMCP: expone acciones clave del sitio a agentes del navegador. */
export function WebMcp({ lang }: { lang: 'es' | 'en' }) {
  useEffect(() => {
    const mc = (navigator as Navigator & { modelContext?: ModelContext }).modelContext;
    if (!mc?.provideContext) return;

    const startPath = lang === 'en' ? '/en/start-project' : '/es/iniciar-proyecto';
    const go = (path: string) => {
      window.location.assign(path);
      return { content: [{ type: 'text', text: `Navigating to ${path}` }] };
    };

    mc.provideContext({
      tools: [
        {
          name: 'start_project',
          description: 'Open UpCoded\'s guided project form so the user can request a quote for a website, automation or custom system.',
          inputSchema: { type: 'object', properties: {} },
          execute: async () => go(startPath),
        },
        {
          name: 'open_blog',
          description: 'Open the UpCoded blog (articles on web development, CRM and automation).',
          inputSchema: { type: 'object', properties: {} },
          execute: async () => go(`/${lang}/blog`),
        },
      ],
    });
  }, [lang]);

  return null;
}
