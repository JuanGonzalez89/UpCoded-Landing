'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState, type CSSProperties } from 'react';
import { PiArrowLeft, PiArrowRight, PiCheckCircle, PiWhatsappLogo } from 'react-icons/pi';
import { cn } from '@/lib/utils';

type StartProjectDict = {
  metaTitle?: string;
  metaDescription?: string;
  back: string;
  progress: string;
  next: string;
  sending: string;
  submit: string;
  steps: readonly {
    question: string;
    hint?: string;
    placeholder?: string;
    options?: readonly string[];
  }[];
  errors: {
    name: string;
    company: string;
    whatsapp: string;
    invalidWhatsapp: string;
    invalidEmail: string;
    service: string;
    stage: string;
    message: string;
  };
  success: { title: string; description: string; another: string };
  sendError: string;
};

type Field = 'name' | 'company' | 'whatsapp' | 'email' | 'service' | 'stage' | 'message';
type FormValues = Record<Field, string>;

const TOTAL_STEPS = 7;

/** Tipografía oscura fija para esta pantalla, sin depender del theme del sitio. */
const darkVars = {
  '--primary': '20 184 166',
  '--on-primary': '6 9 14',
  '--primary-container': '13 19 28',
  '--on-primary-container': '20 184 166',
  '--background': '6 9 14',
  '--surface': '13 19 28',
  '--surface-dim': '11 16 23',
  '--surface-bright': '17 24 39',
  '--surface-container': '13 19 28',
  '--surface-variant': '17 24 39',
  '--on-background': '248 250 252',
  '--on-surface': '248 250 252',
  '--on-surface-variant': '148 163 184',
  '--outline': '30 41 59',
  '--outline-variant': '51 65 85',
  '--outline-strong': '71 85 105',
  '--error': '239 68 68',
  '--on-error': '248 250 252',
} as CSSProperties;

const FIELD_SLOTS: readonly { field: Field; type: 'text' | 'tel' | 'email' | 'options' | 'textarea' }[] = [
  { field: 'name', type: 'text' },
  { field: 'company', type: 'text' },
  { field: 'whatsapp', type: 'tel' },
  { field: 'email', type: 'email' },
  { field: 'service', type: 'options' },
  { field: 'stage', type: 'options' },
  { field: 'message', type: 'textarea' },
];

function validateField(field: Field, value: string, dict: StartProjectDict): string | undefined {
  const v = value.trim();
  switch (field) {
    case 'name':
      return v.length >= 2 ? undefined : dict.errors.name;
    case 'company':
      return v.length >= 2 ? undefined : dict.errors.company;
    case 'whatsapp':
      if (!v) return dict.errors.whatsapp;
      return /^\+?[\d\s().-]{6,20}$/.test(v) ? undefined : dict.errors.invalidWhatsapp;
    case 'email':
      if (!v) return undefined;
      return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) ? undefined : dict.errors.invalidEmail;
    case 'service':
      return v ? undefined : dict.errors.service;
    case 'stage':
      return v ? undefined : dict.errors.stage;
    case 'message':
      return v.length >= 8 ? undefined : dict.errors.message;
  }
}

export function StartProjectForm({ dict, lang }: { dict: StartProjectDict; lang: 'es' | 'en' }) {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState<FormValues>({
    name: '',
    company: '',
    whatsapp: '',
    email: '',
    service: '',
    stage: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const [submitted, setSubmitted] = useState(false);
  // Honeypot: los bots rellenan campos ocultos; los humanos no lo ven.
  const [honeypot, setHoneypot] = useState('');
  const startedAt = useRef(Date.now());

  const current = FIELD_SLOTS[step];
  const stepDef = dict.steps[step];
  const isOptions = current.type === 'options';
  const isLastStep = step === TOTAL_STEPS - 1;

  const setValue = (field: Field, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleNext = () => {
    const error = validateField(current.field, values[current.field], dict);
    if (error) {
      setErrors((prev) => ({ ...prev, [current.field]: error }));
      return;
    }
    setErrors((prev) => ({ ...prev, [current.field]: undefined }));
    setStatus('idle');
    setStep((prev) => Math.min(prev + 1, TOTAL_STEPS - 1));
  };

  const handleBack = () => {
    if (step === 0) return;
    setStatus('idle');
    setStep((prev) => prev - 1);
  };

  const handleSubmit = async () => {
    const error = validateField('message', values.message, dict);
    if (error) {
      setErrors((prev) => ({ ...prev, message: error }));
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('/api/start-project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...values,
          lang,
          honeypot,
          startedAt: startedAt.current,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const reset = () => {
    setValues({ name: '', company: '', whatsapp: '', email: '', service: '', stage: '', message: '' });
    setErrors({});
    setStatus('idle');
    setSubmitted(false);
    setStep(0);
    startedAt.current = Date.now();
  };

  const inputClasses = (field: Field) =>
    cn(
      'w-full rounded-md border bg-surface px-4 py-3.5 text-body-md text-on-surface outline-none transition-colors duration-200 ease-upcoded placeholder:text-on-surface-variant/60 focus:border-primary',
      errors[field] ? 'border-error' : 'border-outline-strong',
    );

  return (
    <div
      className="min-h-screen bg-background text-on-surface"
      style={darkVars}
    >
      {/* Header: logo a la izquierda; idioma y Volver a la derecha */}
      <header className="flex h-[72px] items-center justify-between border-b border-outline px-margin-mobile md:px-margin-desktop">
        <Link
          className="flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-tight text-on-surface"
          href={`/${lang}`}
        >
          <Image
            src="/portfolio/logo_upcoded/Logo_Upcoded_192x192.png"
            alt=""
            width={28}
            height={28}
            className="object-contain invert"
          />
          UpCoded<span className="font-mono text-[11px] tracking-wide text-on-surface-variant">/dev</span>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-md border border-outline bg-surface p-0.5">
            <Link
              className={cn(
                'rounded px-3 py-1.5 font-mono text-xs font-medium uppercase transition-colors',
                lang === 'es'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-on-surface',
              )}
              href="/es/iniciar-proyecto"
              prefetch={false}
            >
              ES
            </Link>
            <Link
              className={cn(
                'rounded px-3 py-1.5 font-mono text-xs font-medium uppercase transition-colors',
                lang === 'en'
                  ? 'bg-primary text-on-primary'
                  : 'text-on-surface-variant hover:text-on-surface',
              )}
              href="/en/start-project"
              prefetch={false}
            >
              EN
            </Link>
          </div>

          <Link
            className="hidden items-center gap-2 rounded-md border border-outline px-4 py-2 text-sm font-medium text-on-surface-variant transition-colors hover:border-primary hover:text-primary sm:flex"
            href={`/${lang}`}
          >
            <PiArrowLeft size={16} />
            {dict.back}
          </Link>
        </div>
      </header>

      <main id="contenido" className="mx-auto flex min-h-[calc(100vh-72px)] w-full max-w-[560px] flex-col px-margin-mobile py-10 md:px-6">
        {submitted ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/40 bg-primary/10">
              <PiCheckCircle aria-hidden size={34} className="text-primary" />
            </div>
            <h1 className="text-[clamp(28px,4vw,40px)] font-medium tracking-tight text-on-surface">
              {dict.success.title}
            </h1>
            <p className="mt-3 max-w-md text-body-md text-on-surface-variant">
              {dict.success.description}
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 text-sm font-medium text-primary underline underline-offset-4 transition-colors hover:text-on-surface"
            >
              {dict.success.another}
            </button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col justify-center">
            {/* Progreso */}
            <div className="mb-10">
              <div className="flex items-center justify-between font-mono text-xs text-on-surface-variant">
                <span>
                  {step + 1} / {TOTAL_STEPS}
                </span>
                <span className="uppercase tracking-widest">
                  {step + 1} {dict.progress} {TOTAL_STEPS}
                </span>
              </div>
              <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-surface">
                <div
                  className="h-full rounded-full bg-primary transition-all duration-300 ease-upcoded"
                  style={{ width: `${((step + 1) / TOTAL_STEPS) * 100}%` }}
                />
              </div>
            </div>

            <div key={step} className="animate-fade-scale-in">
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                0{step + 1}
              </p>
              <h1
                id="current-question"
                className="mt-3 text-[clamp(30px,4.4vw,44px)] font-medium leading-tight tracking-tight text-on-surface"
              >
                {stepDef.question}
              </h1>
              {stepDef.hint ? (
                <p className="mt-3 text-body-md text-on-surface-variant">{stepDef.hint}</p>
              ) : null}

              <div className={cn('mt-8', isOptions ? 'space-y-3' : '')}>
                {current.type === 'options' ? (
                  <div className="grid gap-3">
                    {(stepDef.options ?? []).map((option) => {
                      const selected = values[current.field] === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setValue(current.field, option)}
                          aria-pressed={selected}
                          className={cn(
                            'flex min-h-[56px] items-center gap-3 rounded-md border px-4 text-left text-base transition-all duration-200 ease-upcoded',
                            selected
                              ? 'border-primary bg-primary/10 text-on-surface'
                              : 'border-outline-strong bg-surface text-on-surface-variant hover:border-primary/60 hover:text-on-surface',
                          )}
                        >
                          <span
                            className={cn(
                              'flex h-5 w-5 shrink-0 items-center justify-center rounded-full border',
                              selected ? 'border-primary bg-primary text-on-primary' : 'border-outline-strong',
                            )}
                          >
                            {selected ? <span className="h-2 w-2 rounded-full bg-on-primary" /> : null}
                          </span>
                          {option}
                        </button>
                      );
                    })}
                  </div>
                ) : current.type === 'textarea' ? (
                  <textarea
                    id={current.field}
                    value={values[current.field]}
                    onChange={(e) => setValue(current.field, e.target.value)}
                    placeholder={stepDef.placeholder}
                    rows={5}
                    autoFocus
                    aria-labelledby="current-question"
                    aria-invalid={Boolean(errors[current.field])}
                    aria-describedby={errors[current.field] ? `${current.field}-error` : undefined}
                    className={cn(inputClasses(current.field), 'resize-none')}
                  />
                ) : (
                  <input
                    id={current.field}
                    type={current.type}
                    value={values[current.field]}
                    onChange={(e) => setValue(current.field, e.target.value)}
                    placeholder={stepDef.placeholder}
                    autoComplete={current.field === 'email' ? 'email' : current.field === 'whatsapp' ? 'tel' : 'name'}
                    autoFocus
                    aria-labelledby="current-question"
                    aria-invalid={Boolean(errors[current.field])}
                    aria-describedby={errors[current.field] ? `${current.field}-error` : undefined}
                    className={inputClasses(current.field)}
                  />
                )}

                {errors[current.field] ? (
                  <p id={`${current.field}-error`} className="mt-3 text-body-sm text-error">
                    {errors[current.field]}
                  </p>
                ) : null}
              </div>
            </div>

            {status === 'error' ? (
              <p className="mt-6 rounded-md bg-error/10 px-4 py-3 text-body-sm text-error">
                {dict.sendError}
              </p>
            ) : null}

            {/* Navegación */}
            <div className="mt-10 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 0}
                className="inline-flex min-h-[52px] items-center gap-2 rounded-md border border-outline-strong px-6 text-sm font-medium text-on-surface transition-colors duration-200 ease-upcoded hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                <PiArrowLeft size={16} />
                {dict.back}
              </button>

              {isLastStep ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-md bg-primary px-8 text-sm font-semibold text-on-primary transition-all duration-200 ease-upcoded active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? dict.sending : dict.submit}
                  {status === 'sending' ? null : <PiCheckCircle size={16} />}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  className="inline-flex min-h-[52px] items-center gap-2 rounded-md bg-primary px-8 text-sm font-semibold text-on-primary transition-all duration-200 ease-upcoded active:scale-[0.98]"
                >
                  {dict.next}
                  <PiArrowRight size={16} />
                </button>
              )}
            </div>
          </div>
        )}

        <p className="mt-10 flex items-center justify-center gap-2 text-xs text-on-surface-variant">
          <PiWhatsappLogo size={14} />
          {lang === 'es'
            ? 'Respuesta en menos de 24 horas por WhatsApp.'
            : 'We reply by WhatsApp within 24 hours.'}
        </p>

        {/* Honeypot anti-spam: invisible a usuarios reales */}
        <div aria-hidden="true" className="pointer-events-none absolute -left-[9999px] top-auto h-px w-px overflow-hidden opacity-0">
          <label htmlFor="website">Website</label>
          <input
            id="website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
          />
        </div>
      </main>
    </div>
  );
}