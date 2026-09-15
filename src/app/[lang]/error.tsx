'use client';
import Link from 'next/link';
import { PiWarningCircle } from 'react-icons/pi';

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return <main className="flex min-h-[100dvh] items-center bg-background px-margin-mobile md:px-margin-desktop"><div className="mx-auto w-full max-w-measure"><PiWarningCircle aria-hidden size={32} className="text-primary" /><h1 className="mt-6 text-headline-lg text-on-surface">Something went wrong / Algo salió mal</h1><p className="mt-4 text-body-md text-on-surface-variant">There was an unexpected error. Try again. / Hubo un error inesperado al cargar esta página. Probá de nuevo.</p><div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4"><button type="button" onClick={reset} className="inline-flex min-h-[52px] items-center justify-center rounded-md bg-primary px-7 text-base font-medium text-on-primary">Try again / Intentar de nuevo</button><Link href="/es" className="inline-flex min-h-[52px] items-center justify-center rounded-md border border-outline-strong px-7 text-base text-on-surface">Home / Volver al inicio</Link></div></div></main>;
}
