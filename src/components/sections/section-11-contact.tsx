'use client';

import { useState } from 'react';
import { PiCheckCircle, PiClock, PiEnvelopeSimple } from 'react-icons/pi';

type Field = 'name' | 'email' | 'message';
type Errors = Partial<Record<Field, string>>;

const labels: Record<Field, string> = {
  name: 'Nombre',
  email: 'Email',
  message: 'Mensaje breve sobre tu proyecto',
};

const placeholders: Record<Field, string> = {
  name: 'Tu nombre o empresa',
  email: 'tucorreo@empresa.com',
  message: '¿Qué estás buscando construir?',
};

function validate(form: Record<Field, string>): Errors {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = 'Necesitamos un nombre para responderte.';
  if (!form.email.trim()) {
    errors.email = 'Necesitamos un email para responderte.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = 'Revisá el email, no parece válido.';
  }
  if (!form.message.trim()) errors.message = 'Contanos en una línea qué necesitás.';
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<Record<Field, string>>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target.id as Field;
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    // Limpiamos el error del campo apenas el usuario lo corrige.
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const fieldClasses = (field: Field) =>
    `w-full rounded-md border bg-surface-container px-3.5 py-3 text-body-md text-on-surface outline-none transition-colors duration-200 ease-upcoded placeholder:text-outline focus:border-primary ${
      errors[field] ? 'border-error' : 'border-outline-strong'
    }`;

  return (
    <section
      className="bg-surface-dim px-margin-mobile pb-20 pt-24 md:px-margin-desktop lg:pb-24 lg:pt-32"
      id="contacto"
    >
      <div className="mx-auto grid max-w-container-max grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <h2 className="text-[clamp(32px,4vw,56px)] font-medium leading-tight tracking-tight text-on-surface">¿Listo para subir<br />de nivel?</h2>
          <p className="mt-5 max-w-measure text-body-md text-on-surface-variant">
            Dejanos tus datos y nos pondremos en contacto en menos de 24 horas para discutir
            cómo podemos ayudarte a construir tu próximo proyecto.
          </p>

          <dl className="mt-10 space-y-4 border-t border-outline pt-8">
            <div className="flex items-center gap-3">
              <dt className="sr-only">Email</dt>
              <PiEnvelopeSimple aria-hidden size={18} className="shrink-0 text-primary" />
              <dd>
                <a
                  className="text-body-md font-medium text-on-surface transition-colors hover:text-primary"
                  href="mailto:upcodednow@gmail.com"
                >
                  upcodednow@gmail.com
                </a>
              </dd>
            </div>
            <div className="flex items-center gap-3">
              <dt className="sr-only">Horario</dt>
              <PiClock aria-hidden size={18} className="shrink-0 text-primary" />
              <dd className="text-body-md text-on-surface">Lunes a viernes, 9am a 6pm (ART)</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-outline bg-surface-container p-6 sm:p-10 lg:col-span-6 lg:col-start-7 shadow-sm">
          {status === 'success' ? (
            <div className="flex flex-col items-start gap-4 py-8">
              <PiCheckCircle aria-hidden size={36} className="text-primary" />
              <h3 className="text-headline-md text-on-surface">Mensaje enviado.</h3>
              <p className="text-body-md text-on-surface-variant">
                Te respondemos en menos de 24 horas.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 text-[0.9375rem] font-medium text-primary underline underline-offset-4"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              {(Object.keys(labels) as Field[]).map((field) => (
                <div key={field}>
                  <label
                    className="mb-2 block text-body-sm font-medium text-on-surface"
                    htmlFor={field}
                  >
                    {labels[field]}
                  </label>

                  {field === 'message' ? (
                    <textarea
                      id={field}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={placeholders[field]}
                      rows={4}
                      aria-invalid={Boolean(errors[field])}
                      aria-describedby={errors[field] ? `${field}-error` : undefined}
                      className={`${fieldClasses(field)} resize-none`}
                    />
                  ) : (
                    <input
                      id={field}
                      type={field === 'email' ? 'email' : 'text'}
                      autoComplete={field === 'email' ? 'email' : 'name'}
                      value={form[field]}
                      onChange={handleChange}
                      placeholder={placeholders[field]}
                      aria-invalid={Boolean(errors[field])}
                      aria-describedby={errors[field] ? `${field}-error` : undefined}
                      className={fieldClasses(field)}
                    />
                  )}

                  {errors[field] ? (
                    <p id={`${field}-error`} className="mt-2 text-body-sm text-error">
                      {errors[field]}
                    </p>
                  ) : null}
                </div>
              ))}

              {status === 'error' ? (
                <p className="rounded-md bg-error-container px-3.5 py-3 text-body-sm text-on-error-container">
                  No pudimos enviar el mensaje. Probá de nuevo o escribinos a
                  upcodednow@gmail.com.
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex min-h-[52px] w-full items-center justify-center rounded-md bg-primary px-6 text-base font-medium text-on-primary transition-colors duration-200 ease-upcoded hover:bg-primary-container active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? 'Enviando...' : 'Quiero una propuesta gratuita'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
