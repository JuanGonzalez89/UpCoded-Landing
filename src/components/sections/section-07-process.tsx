import { FadeInView } from '@/components/ui/fade-in-view';

const steps = [
  {
    title: 'Discovery',
    description: 'Entendemos tu negocio, objetivos y definimos el alcance técnico.'
  },
  {
    title: 'Propuesta',
    description: 'Presentamos la solución, la tecnología a usar y el cronograma cerrado.'
  },
  {
    title: 'Desarrollo',
    description: 'Codificamos rápido y limpio, con actualizaciones semanales de progreso.'
  },
  {
    title: 'Entrega y Soporte',
    description: 'Lanzamos a producción y nos quedamos para asegurar que todo vuele.'
  }
] as const;

export default function ProcessSection() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop" id="proceso">
      <div className="mb-16 text-center">
        <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
          De la idea al lanzamiento en 4 pasos
        </h2>
      </div>

      <div className="relative grid grid-cols-1 gap-6 md:grid-cols-4">
        <div className="absolute top-1/2 left-0 z-0 hidden h-px w-full -translate-y-1/2 bg-outline-variant/50 md:block" />

        {steps.map((step, index) => (
          <FadeInView key={step.title} delay={index * 80} className="relative z-10 rounded-lg border border-outline-variant/30 bg-surface p-6 text-center">
            <div className="font-code-sm text-code-sm mb-2 text-primary">0{index + 1}</div>
            <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{step.title}</h3>
            <p className="font-body-md text-sm text-on-surface-variant">{step.description}</p>
          </FadeInView>
        ))}
      </div>
    </section>
  );
}