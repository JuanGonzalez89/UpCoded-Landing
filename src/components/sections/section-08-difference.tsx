import { FadeInView } from '@/components/ui/fade-in-view';

const differences = [
  {
    title: 'Entrega en semanas',
    description:
      'No meses. Optimizamos nuestro proceso para que tu producto esté en línea cuando lo necesitás.',
  },
  {
    title: 'Presupuesto cerrado antes de empezar',
    description:
      'Te damos el precio y la fecha antes de escribir la primera línea de código. Sin ajustes a mitad de camino.',
  },
  {
    title: 'Tecnología que crece con vos',
    description:
      'Usamos las mismas herramientas que las grandes empresas para que tu sitio sea rápido, seguro y preparado para el futuro.',
  },
  {
    title: 'Trato directo con los devs',
    description:
      'Sin gerentes de cuenta en el medio. Hablás directamente con quienes construyen tu producto.',
  },
] as const;

export default function DifferenceSection() {
  return (
    <section className="px-margin-mobile py-24 md:px-margin-desktop lg:py-32">
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h2 className="text-headline-lg text-on-surface lg:sticky lg:top-[108px]">
            Velocidad real. Sin sacrificar calidad.
          </h2>
        </div>

        <dl className="divide-y divide-outline-variant border-t border-outline-variant lg:col-span-7 lg:col-start-6">
          {differences.map((difference, i) => (
            <FadeInView key={difference.title} delay={i * 70} className="py-7 lg:py-9">
              <dt className="text-headline-md text-on-surface">{difference.title}</dt>
              <dd className="mt-2.5 max-w-measure text-body-md text-on-surface-variant">
                {difference.description}
              </dd>
            </FadeInView>
          ))}
        </dl>
      </div>
    </section>
  );
}
