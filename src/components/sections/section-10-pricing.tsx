import Link from 'next/link';
import { PiCheck } from 'react-icons/pi';
import { FadeInView } from '@/components/ui/fade-in-view';

const plans = [
  {
    title: 'Presencia Web',
    price: 'USD 300',
    featured: false,
    features: [
      'Landing page optimizada',
      'Diseño responsivo',
      'Formulario de contacto',
      'SEO básico',
    ],
  },
  {
    title: 'Producto Digital',
    price: 'USD 1.200',
    featured: true,
    features: [
      'Plataforma web completa',
      'Datos guardados de forma segura',
      'Acceso con usuario y contraseña',
      'Panel para gestionar tu negocio',
    ],
  },
  {
    title: 'Automatización',
    price: 'USD 400',
    featured: false,
    features: [
      'Conexión entre tus herramientas',
      'Tareas que se hacen solas',
      'Notificaciones automáticas',
      'Supervisión de funcionamiento',
    ],
  },
] as const;

export default function PricingSection() {
  return (
    <section className="px-margin-mobile py-24 md:px-margin-desktop lg:py-32" id="precios">
      <div className="mx-auto max-w-container-max">
        <div className="max-w-measure">
          <h2 className="text-headline-lg text-on-surface">Transparencia desde el día 1</h2>
          <p className="mt-5 text-body-md text-on-surface-variant">Precios claros, sin sorpresas.</p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <FadeInView key={plan.title} delay={i * 70} className="h-full">
              <div
                className={`flex h-full flex-col rounded-lg border p-7 lg:p-8 ${
                  plan.featured
                    ? 'on-ink border-ink bg-ink'
                    : 'border-outline-variant bg-surface-container'
                }`}
              >
                {/* Bloque de cabecera de altura fija para que las listas arranquen a la misma altura. */}
                <div className="min-h-[132px]">
                  {/* La fila de la etiqueta se reserva en los tres planes para que los
                      titulos queden a la misma altura. */}
                  <p
                    className="mb-3 h-[13px] font-mono text-label-caps uppercase text-accent-ink"
                    aria-hidden={!plan.featured}
                  >
                    {plan.featured ? 'Más elegido' : ''}
                  </p>
                  <h3
                    className={`text-headline-md ${plan.featured ? 'text-on-ink' : 'text-on-surface'}`}
                  >
                    {plan.title}
                  </h3>
                  <p
                    className={`mt-3 font-mono text-[1.75rem] tracking-[-0.02em] ${
                      plan.featured ? 'text-accent-ink' : 'text-primary'
                    }`}
                  >
                    {plan.price}
                    <span
                      className={`ml-2 font-sans text-body-sm ${
                        plan.featured ? 'text-on-ink-variant' : 'text-on-surface-variant'
                      }`}
                    >
                      desde
                    </span>
                  </p>
                </div>

                <ul
                  className={`mt-2 space-y-3.5 border-t pt-7 ${
                    plan.featured ? 'border-ink-outline' : 'border-outline-variant'
                  }`}
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3 text-body-sm">
                      <PiCheck
                        aria-hidden
                        size={16}
                        className={`mt-[3px] shrink-0 ${
                          plan.featured ? 'text-accent-ink' : 'text-primary'
                        }`}
                      />
                      <span className={plan.featured ? 'text-on-ink' : 'text-on-surface-variant'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Wrapper con mt-auto: alinea los botones de los 3 planes en la misma linea. */}
                <div className="mt-auto pt-9">
                  <Link
                    className={`flex min-h-[52px] items-center justify-center rounded-md text-base font-medium transition-colors duration-200 ease-upcoded active:scale-[0.98] ${
                      plan.featured
                        ? 'bg-on-ink text-ink hover:bg-accent-ink'
                        : 'border border-outline-strong text-on-surface hover:border-primary hover:text-primary'
                    }`}
                    href="#contacto"
                  >
                    Elegir plan
                  </Link>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
