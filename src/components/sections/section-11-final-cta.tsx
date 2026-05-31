export default function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile py-24 md:px-margin-desktop" id="contacto">
      <div className="relative overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container-high p-8 md:p-12">
        <div className="absolute inset-0 code-pattern pointer-events-none opacity-20" />

        <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
              ¿Listo para subir de nivel?
            </h2>
            <p className="mb-8 font-body-md text-body-md text-on-surface-variant">
              Dejanos tus datos y nos pondremos en contacto en menos de 24 horas para discutir cómo podemos ayudarte a construir tu próximo proyecto técnico de verdad.
            </p>
            <ul className="space-y-4 font-body-md text-on-surface">
              {/* TODO: Actualizar email y horario */}
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                hello@upcoded.dev
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Lunes a Viernes, 9am - 6pm (ART)
              </li>
              {/* TODO: Agregar número de WhatsApp cuando esté listo */}
              {/* <li className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">chat</span>
            +54 9 11 XXXX-XXXX
          </li> */}
            </ul>
          </div>

          <div className="rounded-lg border border-outline-variant/30 bg-surface p-6">
            {/* TODO: Conectar a backend o Formspree antes del lanzamiento */}
            <form className="space-y-4">
              <div>
                <label className="mb-2 block font-label-caps text-label-caps text-on-surface-variant" htmlFor="name">
                  Nombre
                </label>
                <input className="w-full rounded border border-outline-variant bg-surface-container p-3 text-on-surface transition-colors focus:border-primary focus:ring-1 focus:ring-primary" id="name" placeholder="Tu nombre o empresa" type="text" />
              </div>

              <div>
                <label className="mb-2 block font-label-caps text-label-caps text-on-surface-variant" htmlFor="email">
                  Email
                </label>
                <input className="w-full rounded border border-outline-variant bg-surface-container p-3 text-on-surface transition-colors focus:border-primary focus:ring-1 focus:ring-primary" id="email" placeholder="tucorreo@empresa.com" type="email" />
              </div>

              {/* TODO: Considerar agregar dropdown de servicio según catálogo */}
              <div>
                <label className="mb-2 block font-label-caps text-label-caps text-on-surface-variant" htmlFor="message">
                  Mensaje breve sobre tu proyecto
                </label>
                <textarea className="h-32 w-full resize-none rounded border border-outline-variant bg-surface-container p-3 text-on-surface transition-colors focus:border-primary focus:ring-1 focus:ring-primary" id="message" placeholder="¿Qué estás buscando construir?" />
              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim" type="button">
                Quiero una propuesta gratuita
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}