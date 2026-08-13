import { FadeInView } from '@/components/ui/fade-in-view';

/**
 * Franja de contexto, directamente debajo del hero.
 * Cada cifra sale del portfolio real: los 5 rubros son los 5 clientes de
 * src/data/projects.ts, no un numero de marketing.
 */
const stats = [
  { figure: '+10', label: 'Proyectos entregados' },
  { figure: '5', label: 'Rubros: fintech, legal, retail, automotriz y publicidad' },
  { figure: '2', label: 'Países: Argentina y España' },
  { figure: '100%', label: 'Trato directo con quien programa' },
] as const;

export default function StatsSection() {
  return (
    <section className="border-y border-outline-variant bg-surface-container-low">
      <div className="mx-auto max-w-container-max px-margin-mobile py-14 md:px-margin-desktop lg:py-16">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-10">
          {stats.map((stat, i) => (
            <FadeInView key={stat.figure + stat.label} delay={i * 70}>
              <dd className="font-mono text-figure text-on-surface">{stat.figure}</dd>
              <dt className="mt-3 max-w-[26ch] text-body-sm text-on-surface-variant">
                {stat.label}
              </dt>
            </FadeInView>
          ))}
        </dl>
      </div>
    </section>
  );
}
