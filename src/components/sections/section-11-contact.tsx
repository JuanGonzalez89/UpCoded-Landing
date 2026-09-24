import { PiClock, PiEnvelopeSimple } from 'react-icons/pi';

type ContactCopy = {
  title?: string;
  description?: string;
  hours?: string;
};

export default function ContactSection({ dict }: { dict?: ContactCopy }) {
  return (
    <section
      className="on-ink bg-ink px-margin-mobile pb-20 pt-24 text-on-ink md:px-margin-desktop lg:pb-24 lg:pt-32"
      id="contacto"
    >
      <div className="mx-auto max-w-container-max">
        <div className="mx-auto max-w-measure text-center">
          <h2 className="text-[clamp(32px,4vw,56px)] font-medium leading-tight tracking-tight text-on-ink">
            {dict?.title ?? '¿Listo para subir de nivel?'}
          </h2>
          <p className="mt-5 text-body-md text-on-ink/70">
            {dict?.description ?? 'Dejanos tus datos y nos pondremos en contacto en menos de 24 horas para discutir cómo podemos ayudarte a construir tu próximo proyecto.'}
          </p>

          <dl className="mt-10 flex flex-col items-center justify-center gap-4 border-t border-on-ink/15 pt-8 sm:flex-row sm:flex-wrap sm:gap-x-10">
            <div className="flex items-center gap-3">
              <dt className="sr-only">Email</dt>
              <PiEnvelopeSimple aria-hidden size={18} className="shrink-0 text-accent-ink" />
              <dd>
                <a
                  className="text-body-md font-medium text-on-ink transition-colors hover:text-on-ink/70"
                  href="mailto:upcodednow@gmail.com"
                >
                  upcodednow@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="sr-only">Horario</dt>
              <PiClock aria-hidden size={18} className="shrink-0 text-accent-ink" />
              <dd className="text-body-md text-on-ink/80">{dict?.hours ?? 'Lunes a viernes, 9am a 6pm (ART)'}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}