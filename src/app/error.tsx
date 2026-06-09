'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="text-6xl">⚠️</div>
        <h1 className="font-display-lg text-display-lg text-primary">
          Algo salió mal
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Hubo un error inesperado. Probá recargar la página.
        </p>
        <button
          onClick={reset}
          className="rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
