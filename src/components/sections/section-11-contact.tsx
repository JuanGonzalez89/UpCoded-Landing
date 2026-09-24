import Link from 'next/link';
import { PiArrowRight, PiClock, PiEnvelopeSimple } from 'react-icons/pi';
import { startProjectPath } from '@/lib/seo';

type ContactCopy = {
  title?: string;
  description?: string;
  hours?: string;
  ctaButton?: string;
  ctaSubtitle?: string;
};

export default function ContactSection({ dict, lang }: { dict?: ContactCopy; lang?: string }) {
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

          <Link
            className="mt-8 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-on-ink px-8 text-base font-medium text-ink transition-opacity duration-200 hover:opacity-85 active:scale-[0.98]"
            href={startProjectPath(lang)}
          >
            {dict?.ctaButton ?? 'Iniciar proyecto'}
            <PiArrowRight aria-hidden size={16} />
          </Link>
          {dict?.ctaSubtitle && <p className="mt-3 text-sm text-on-ink/60">{dict.ctaSubtitle}</p>}

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