/**
 * Skeleton con la forma real del hero, no un spinner generico:
 * el usuario ve donde va a aparecer el contenido antes de que llegue.
 */
export default function Loading() {
  return (
    <main className="bg-background px-margin-mobile pb-20 pt-[104px] md:px-margin-desktop lg:pt-[132px]">
      <span className="sr-only">Cargando</span>
      <div
        aria-hidden
        className="mx-auto grid max-w-container-max grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14"
      >
        <div className="lg:col-span-7">
          <div className="h-[clamp(2.125rem,1.35rem+3.9vw,3.75rem)] w-full rounded-md bg-surface-container-low" />
          <div className="mt-3 h-[clamp(2.125rem,1.35rem+3.9vw,3.75rem)] w-3/5 rounded-md bg-surface-container-low" />
          <div className="mt-8 h-4 w-4/5 rounded-sm bg-surface-container-low" />
          <div className="mt-3 h-4 w-2/3 rounded-sm bg-surface-container-low" />
          <div className="mt-9 flex gap-4">
            <div className="h-[52px] w-40 rounded-md bg-surface-container-low" />
            <div className="h-[52px] w-48 rounded-md bg-surface-container-low" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="aspect-[4/3] w-full rounded-lg bg-surface-container-low" />
        </div>
      </div>
    </main>
  );
}
