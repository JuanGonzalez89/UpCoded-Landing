import { FadeInView } from '@/components/ui/fade-in-view';

const differences = [
  {
    title: 'Entrega en semanas',
    icon: 'speed',
    description: 'No meses. Optimizamos nuestro proceso para que tu producto esté en línea cuando lo necesitás.'
  },
  {
    title: 'Tecnología que crece con vos',
    icon: 'layers',
    description: 'Usamos las mismas herramientas que las grandes empresas para que tu sitio sea rápido, seguro y preparado para el futuro.'
  },
  {
    title: 'Trato directo con los devs',
    icon: 'handshake',
    description: 'Sin gerentes de cuenta en el medio. Hablás directamente con quienes construyen tu producto.'
  }
] as const;

export default function DifferenceSection() {
  return (
    <section className="relative overflow-hidden bg-surface-container-low py-24">
      <div className="absolute inset-0 code-pattern pointer-events-none opacity-10" />

      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="mb-16 text-center">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
            Velocidad real. Sin sacrificar calidad.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {differences.map((difference, i) => (
            <FadeInView key={difference.title} delay={i * 80} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <span className="material-symbols-outlined text-3xl">{difference.icon}</span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{difference.title}</h3>
              <p className="font-body-md text-on-surface-variant">{difference.description}</p>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}