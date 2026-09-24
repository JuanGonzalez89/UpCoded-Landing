'use client';

import { useState } from 'react';
import { PiPlus } from 'react-icons/pi';
import { FadeInView } from '@/components/ui/fade-in-view';
import { cn } from '@/lib/utils';

type FaqItem = { q: string; a: string };

type FaqDict = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: readonly FaqItem[];
};

const defaultFaq: readonly FaqItem[] = [];

/**
 * Resuelve objeciones antes del CTA, como lista abierta de hairline rules.
 * Patron disclosure accesible: boton real (Enter/espacio), aria-expanded +
 * aria-controls, region con aria-labelledby. Al cerrar se quita del arbol de
 * accesibilidad (aria-hidden + invisible) para que nada quede enfocable oculto.
 */
export default function FaqSection({ dict }: { dict?: FaqDict }) {
  const items = dict?.items ?? defaultFaq;
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIdx((prev) => (prev === i ? null : i));

  return (
    <section
      className="border-t border-outline px-margin-mobile py-24 md:px-margin-desktop lg:py-32"
      id="faq"
      aria-labelledby="faq-title"
    >
      <div className="mx-auto max-w-container-max">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          <FadeInView className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <p className="font-label-caps text-label-caps uppercase text-primary">
                {dict?.eyebrow ?? '//Preguntas frecuentes'}
              </p>
              <h2 id="faq-title" className="mt-5 max-w-measure text-headline-lg text-on-surface">
                {dict?.title ?? 'Respuestas antes de que las preguntes.'}
              </h2>
              <p className="mt-5 max-w-measure text-body-md text-on-surface-variant">
                {dict?.intro}
              </p>
            </div>
          </FadeInView>

          <FadeInView delay={120} className="lg:col-span-7">
            <ul className="border-b border-outline-strong">
              {items.map((item, i) => {
                const open = openIdx === i;
                const buttonId = `faq-trigger-${i}`;
                const regionId = `faq-panel-${i}`;

                return (
                  <li key={item.q} className="border-t border-outline-strong">
                    <h3 className="m-0">
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={open}
                        aria-controls={regionId}
                        onClick={() => toggle(i)}
                        className="group flex w-full items-center justify-between gap-6 py-5 text-left sm:py-6"
                      >
                        <span
                          className={cn(
                            'text-body-md font-medium tracking-[-0.01em] transition-colors duration-200 ease-upcoded group-hover:text-primary',
                            open ? 'text-primary' : 'text-on-surface',
                          )}
                        >
                          {item.q}
                        </span>
                        <span
                          aria-hidden
                          className={cn(
                            'flex size-6 shrink-0 items-center justify-center rounded-full border border-outline-strong text-primary transition-transform duration-300 ease-upcoded group-hover:border-primary group-hover:bg-primary/5',
                            open && 'rotate-45',
                          )}
                        >
                          <PiPlus size={14} />
                        </span>
                      </button>
                    </h3>
                    <div
                      id={regionId}
                      role="region"
                      aria-labelledby={buttonId}
                      aria-hidden={!open}
                      className={cn(
                        'grid overflow-hidden transition-[grid-template-rows,opacity,visibility] duration-300 ease-upcoded motion-reduce:transition-none',
                        open
                          ? 'grid-rows-[1fr] opacity-100 visible'
                          : 'grid-rows-[0fr] opacity-0 invisible',
                      )}
                    >
                      <div className="overflow-hidden">
                        <p className="max-w-measure pb-6 pr-10 text-body-md text-on-surface-variant sm:pb-7">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </FadeInView>
        </div>
      </div>
    </section>
  );
}