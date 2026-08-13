import { FadeInView } from '@/components/ui/fade-in-view';

/**
 * Primer bloque de tinta de la pagina (el otro es Contacto + Footer).
 * Es el ancla de contraste a mitad de scroll.
 *
 * Cada cifra tiene su fuente escrita debajo. Nada aca es un numero de marketing:
 * todos salen de src/data/projects.ts.
 */
const results = [
  { figure: '2', unit: 'semanas', label: 'Del primer llamado al sitio publicado', source: 'Jara y Asociados, Patagonia Motors' },
  { figure: '3', unit: 'semanas', label: 'Un e-commerce funcionando de punta a punta', source: 'E-Commerce MVP' },
  { figure: '100', unit: '%', label: 'Del onboarding de personal, digitalizado', source: 'Havas Argentina' },
  { figure: '0', unit: '', label: 'Intermediarios entre vos y quien programa', source: 'Todos los proyectos' },
] as const;

export default function ResultsSection() {
  return (
    <section className="on-ink bg-ink px-margin-mobile py-24 text-on-ink md:px-margin-desktop lg:py-32">
      <div className="mx-auto max-w-container-max">
        <h2 className="max-w-measure text-headline-lg text-on-ink">
          Lo que entregamos y en cuánto tiempo
        </h2>

        <dl className="mt-14 grid grid-cols-1 divide-y divide-ink-outline lg:grid-cols-4 lg:divide-x lg:divide-y-0">
          {results.map((result, i) => (
            <FadeInView
              key={result.label}
              delay={i * 70}
              className="py-8 first:pt-0 last:pb-0 lg:px-8 lg:py-0 lg:first:pl-0 lg:last:pr-0"
            >
              <dt className="font-mono text-figure text-accent-ink">
                {result.figure}
                {result.unit ? (
                  <span className="ml-1 text-[0.4em] tracking-normal">{result.unit}</span>
                ) : null}
              </dt>
              <dd className="mt-4 max-w-[28ch] text-body-sm text-on-ink">{result.label}</dd>
              <p className="mt-3 font-mono text-code-sm text-on-ink-variant">{result.source}</p>
            </FadeInView>
          ))}
        </dl>

        <FadeInView delay={200}>
          <figure className="mt-16 border-t border-ink-outline pt-12 lg:mt-20 lg:pt-14">
            <blockquote className="max-w-[58ch] text-headline-md font-normal leading-snug text-on-ink">
              Llevó adelante la creación de la página de onboarding con gran autonomía,
              manteniendo al equipo informado y coordinando con distintas áreas para lograr un
              resultado sólido.
            </blockquote>
            <figcaption className="mt-6 font-mono text-code-sm text-on-ink-variant">
              Gonzalo Ferragina, Havas Argentina
            </figcaption>
          </figure>
        </FadeInView>
      </div>
    </section>
  );
}
