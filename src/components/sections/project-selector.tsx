'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { PiArrowRight } from 'react-icons/pi';
import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';

type Dict = {
  year?: string;
  result?: string;
  viewProject?: string;
  imageAlt?: string;
};

export function ProjectSelector({
  projects,
  lang,
  dict,
}: {
  projects: Project[];
  lang: string;
  dict?: Dict;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];
  const image = active.previewImage ?? active.images[0];
  const initial = active.title.trim().charAt(0).toUpperCase();

  function selectByKeyboard(event: React.KeyboardEvent, index: number) {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((index + 1) % projects.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((index - 1 + projects.length) % projects.length);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[240px_1fr_300px] lg:items-start lg:gap-8">
      {/* Lista: chips en mobile, lista vertical en desktop */}
      <div
        role="tablist"
        aria-label="Proyectos"
        className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap lg:gap-1"
      >
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={project.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => selectByKeyboard(event, index)}
              className={cn(
                'rounded-full border px-4 py-2 text-left text-sm font-medium transition-colors duration-200',
                'lg:rounded-none lg:border-0 lg:border-l-2 lg:px-4 lg:py-2.5 lg:text-lg lg:tracking-tight',
                isActive
                  ? 'border-primary text-primary lg:border-l-primary lg:text-on-surface'
                  : 'border-outline text-on-surface-variant hover:border-on-surface-variant hover:text-on-surface lg:border-l-outline lg:hover:border-l-on-surface-variant',
              )}
            >
              {project.title}
            </button>
          );
        })}
      </div>

      {/* Preview: frame tipo browser con la captura del sitio activo */}
      <div
        key={`preview-${active.slug}`}
        className="motion-safe:animate-fade-scale-in overflow-hidden rounded-2xl border border-outline bg-surface-dim"
      >
        <div className="flex items-center gap-1.5 border-b border-outline px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-outline-strong" />
        </div>
        {image ? (
          <Image
            src={image}
            alt={`${dict?.imageAlt ?? 'Captura del sitio de'} ${active.title}`}
            width={960}
            height={600}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[16/10] w-full object-cover object-top"
          />
        ) : (
          <Image
            src={`/api/og?title=${encodeURIComponent(active.title)}&category=${encodeURIComponent(active.client)}`}
            alt={`${dict?.imageAlt ?? 'Captura del sitio de'} ${active.title}`}
            width={960}
            height={600}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="aspect-[16/10] w-full object-cover object-top"
          />
        )}
      </div>

      {/* Panel de detalle */}
      <div
        key={`detail-${active.slug}`}
        className="motion-safe:animate-fade-scale-in rounded-2xl border border-outline bg-surface-container p-8"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-outline bg-surface-dim font-mono text-sm text-primary">
            {initial}
          </span>
          <h3 className="text-lg font-semibold tracking-tight text-on-surface">{active.title}</h3>
        </div>

        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
          {active.client}
        </p>

        <p className="mt-4 text-[0.9375rem] leading-relaxed text-on-surface-variant">
          {active.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {active.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-outline bg-surface px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-on-surface-variant"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 border-t border-outline pt-6">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
              {dict?.year ?? 'Año'}
            </span>
            <span className="font-mono text-sm text-on-surface">{active.year}</span>
          </div>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-on-surface-variant">
            {dict?.result ?? 'Resultado'}
          </p>
          <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-on-surface">{active.result}</p>
        </div>

        <Link
          href={`/${lang}/portfolio/${active.slug}`}
          className="mt-6 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-primary px-8 text-[0.9375rem] font-medium text-on-primary transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
        >
          {dict?.viewProject ?? 'Ver proyecto'}
          <PiArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
