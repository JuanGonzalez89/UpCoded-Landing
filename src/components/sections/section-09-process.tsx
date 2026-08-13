import { FadeInView } from '@/components/ui/fade-in-view';

const steps = [
  {
    title: 'Discovery',
    description: 'Entendemos tu negocio, objetivos y definimos el alcance técnico.',
  },
  {
    title: 'Propuesta',
    description: 'Presentamos la solución, la tecnología a usar y el cronograma cerrado.',
  },
  {
    title: 'Desarrollo',
    description: 'Codificamos rápido y limpio, con actualizaciones semanales de progreso.',
  },
  {
    title: 'Entrega y Soporte',
    description: 'Lanzamos a producción y nos quedamos para asegurar que todo vuele.',
  },
] as const;

export default function ProcessSection() {
  return (
    <section
      className="border-y border-outline-variant bg-surface-container-low px-margin-mobile py-24 md:px-margin-desktop lg:py-32"
      id="proceso"
    >
      <div className="mx-auto max-w-container-max">
        <h2 className="max-w-measure text-headline-lg text-on-surface">
          De la idea al lanzamiento en 4 pasos
        </h2>

        {/* La regla superior de cada paso forma una linea continua: eso es la secuencia. */}
        <ol className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-10">
          {steps.map((step, i) => (
            <li key={step.title} className="list-none border-t border-outline-strong pt-6">
              <FadeInView delay={i * 70}>
                <h3 className="text-headline-md text-on-surface">{step.title}</h3>
                <p className="mt-2.5 text-body-sm text-on-surface-variant">{step.description}</p>
              </FadeInView>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
