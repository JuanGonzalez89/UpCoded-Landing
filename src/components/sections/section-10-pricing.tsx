const plans = [
  {
    title: 'Presencia Web',
    price: 'USD 300',
    featured: false,
    features: ['Landing page optimizada', 'Diseño responsivo', 'Formulario de contacto', 'SEO básico']
  },
  {
    title: 'Producto Digital',
    price: 'USD 1.200',
    featured: true,
    features: ['App Web completa', 'Base de datos & API', 'Autenticación de usuarios', 'Panel de administración']
  },
  {
    title: 'Automatización',
    price: 'USD 400',
    featured: false,
    features: ['Integración de APIs', 'Workflows automatizados', 'Webhooks personalizados', 'Monitoreo básico']
  }
] as const;

export default function PricingSection() {
  return (
    <section className="bg-surface-container-low py-24" id="precios">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="mb-16 text-center">
          <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
            Transparencia desde el día 1
          </h2>
          <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
            Precios claros, sin sorpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={plan.featured ? 'relative flex flex-col rounded-lg border border-primary bg-surface-container-highest p-8 shadow-[0_0_20px_rgba(0,217,255,0.1)]' : 'flex flex-col rounded-lg border border-outline-variant/30 bg-surface p-8 transition-colors hover:border-primary/50'}
            >
              {plan.featured ? (
                <div className="absolute top-0 right-0 rounded-bl-lg rounded-tr-lg bg-primary px-3 py-1 text-xs font-bold font-label-caps text-on-primary">
                  POPULAR
                </div>
              ) : null}
              <h3 className="font-headline-md text-headline-md mb-2 text-on-surface">{plan.title}</h3>
              {/* TODO: Ajustar precio si cambia */}
              <div className="mb-6 font-display-lg text-primary">
                {plan.price}
                <span className="text-base font-normal text-on-surface-variant"> /desde</span>
              </div>
              <ul className="mb-8 flex-grow space-y-4 font-body-md text-on-surface-variant">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-primary">check</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? 'block rounded bg-primary px-6 py-3 text-center font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim' : 'block rounded border border-primary px-6 py-3 text-center font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary/10'} href="#contacto">
                Elegir Plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}