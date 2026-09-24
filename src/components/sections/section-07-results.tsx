'use client';

import { useEffect, useRef, useState } from 'react';
import { FadeInView } from '@/components/ui/fade-in-view';

/**
 * Bloque de resultados — ancla de contraste a mitad de scroll.
 * Stat cards con contador animado + marquee infinito de testimonios.
 */
const defaultResults = [
  {
    figure: '2',
    unit: 'semanas',
    label: 'Landing Page',
    source: 'En 2 semanas o menos podés tener tu página informativa lista para usar.',
  },
  {
    figure: '3',
    unit: 'semanas',
    label: 'E-commerce completo',
    source: 'En tan solo 3 semanas podés empezar a facturar online.',
  },
] as const;

/** Testimonios reales de clientes. */
const allTestimonials = [
  {
    quote: 'Llevó adelante la creación de la página de onboarding con gran autonomía, manteniendo al equipo informado y coordinando con distintas áreas para lograr un resultado sólido.',
    author: 'Gonzalo Ferragina',
    company: 'Havas Argentina',
    initials: 'GF',
    stars: 5,
  },
  {
    quote: 'En menos de dos semanas teníamos el sitio publicado y funcionando. El proceso fue claro de principio a fin y el resultado superó lo que esperábamos.',
    author: 'Jara y Asociados',
    company: 'Estudio Jurídico',
    initials: 'JA',
    stars: 5,
  },
  {
    quote: 'La tienda quedó lista en tiempo récord. Lo que más valoramos fue el trato directo — siempre supimos en qué etapa estábamos y qué venía después.',
    author: 'Patagonia Motors',
    company: 'Automotriz',
    initials: 'PM',
    stars: 5,
  },
];

// Para el marquee duplicamos las filas para que el loop sea continuo
const row1 = allTestimonials;
const row2 = [...allTestimonials].reverse();

/** Contador animado: sube de 0 a `value` cuando entra en viewport. */
function AnimatedNumber({ value, duration = 1200 }: { value: string; duration?: number }) {
  const num = parseInt(value, 10);
  const isNumeric = !isNaN(num);
  const [display, setDisplay] = useState(isNumeric ? 0 : value);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!isNumeric) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            setDisplay(Math.round(eased * num));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, duration, isNumeric]);

  return <span ref={ref}>{display}</span>;
}

/** Una card de testimonio individual. */
function TestimonialCard({
  quote,
  author,
  company,
  initials,
  stars,
}: {
  quote: string;
  author: string;
  company: string;
  initials: string;
  stars: number;
}) {
  return (
    <div className="group relative mx-3 w-[320px] shrink-0 overflow-hidden rounded-xl border border-ink-outline bg-[#CBCBCB] p-6 transition-all duration-300 hover:border-accent-ink/40 hover:bg-[#d8d8d8]">
      {/* Estrellas */}
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: stars }).map((_, i) => (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-accent-ink" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Texto */}
      <p className="mb-5 line-clamp-4 font-mono text-code-sm leading-relaxed text-black/85">
        "{quote}"
      </p>

      {/* Autor */}
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-ink font-mono text-[11px] font-bold text-ink">
          {initials}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="font-mono text-[12px] font-semibold text-black">{author}</span>
          <span className="font-mono text-[11px] text-black/60">{company}</span>
        </div>
      </div>
    </div>
  );
}

/** Fila de marquee infinita. Duplica el contenido para el loop sin cortes. */
function MarqueeRow({
  items,
  direction = 'left',
  speed = 35,
}: {
  items: typeof row1;
  direction?: 'left' | 'right';
  speed?: number;
}) {
  // Triplicamos para garantizar que el loop sea siempre fluido
  const doubled = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      {/* Fade masks laterales */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <div
        className="flex w-max"
        style={{
          animation: `marquee-${direction} ${speed}s linear infinite`,
          willChange: 'transform',
        }}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

export default function ResultsSection({
  dict,
}: {
  dict?: {
    title?: string;
    items?: readonly { figure: string; unit: string; label: string; source: string }[];
    quote?: string;
    quoteBy?: string;
  };
}) {
  const results = dict?.items ?? defaultResults;

  return (
    <section className="on-ink bg-ink px-margin-mobile py-24 text-on-ink md:px-margin-desktop lg:py-32">
      {/* Keyframes globales para el marquee */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
      `}</style>

      <div className="mx-auto max-w-container-max">

        {/* ── Encabezado ── */}
        <FadeInView>
          <h2 className="max-w-measure text-headline-lg text-on-ink">
            {dict?.title ?? 'Tiempos de entrega'}
          </h2>
        </FadeInView>

        {/* ── Stat cards ── */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {results.map((result, i) => (
            <FadeInView key={result.label} delay={i * 120}>
              <div className="group relative overflow-hidden rounded-2xl border border-ink-outline bg-[#ACEBEA] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent-ink/50 hover:bg-[#c6eaea] hover:shadow-[0_16px_48px_-16px_rgba(0,0,0,0.5)] lg:p-10">
                {/* Número fantasma */}
                <span
                  className="pointer-events-none absolute -right-6 -top-4 select-none font-mono text-[140px] font-bold leading-none text-transparent opacity-[0.05] transition-all duration-700 group-hover:-translate-x-3 group-hover:scale-110 group-hover:opacity-[0.09]"
                  style={{ WebkitTextStroke: '2px currentColor', color: 'currentColor' }}
                  aria-hidden="true"
                >
                  {result.figure}
                </span>

                <div className="mb-6 h-px w-10 bg-accent-ink opacity-70 transition-all duration-500 group-hover:w-20 group-hover:opacity-100" />

                <dt className="font-mono text-figure text-accent-ink leading-none">
                  <AnimatedNumber value={result.figure} duration={900 + i * 200} />
                  {result.unit && (
                    <span className="ml-2 text-[0.35em] tracking-normal text-on-ink-variant transition-colors duration-300 group-hover:text-on-ink">
                      {result.unit}
                    </span>
                  )}
                </dt>

                <dd className="mt-4 text-body-sm font-medium text-on-ink">{result.label}</dd>
                <p className="mt-3 max-w-[36ch] font-mono text-code-sm leading-relaxed text-on-ink-variant">
                  {result.source}
                </p>

                <span
                  className="pointer-events-none absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-accent-ink opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-10"
                  aria-hidden="true"
                />
              </div>
            </FadeInView>
          ))}
        </div>

      </div>

      {/* ── Marquee de testimonios (full-bleed, fuera del max-w) ── */}
      <FadeInView delay={200}>
        <div className="mt-20 border-t border-ink-outline pt-14">
          <p className="mx-auto mb-10 max-w-container-max px-margin-mobile font-mono text-[11px] uppercase tracking-widest text-on-ink-variant md:px-margin-desktop">
            // Personas que trabajaron con nosotros
          </p>

          {/* Fila 1 — izquierda */}
          <MarqueeRow items={row1} direction="left" speed={40} />

          {/* Fila 2 — derecha */}
          <div className="mt-4">
            <MarqueeRow items={row2} direction="right" speed={45} />
          </div>
        </div>
      </FadeInView>
    </section>
  );
}
