import { DottedSurface } from '@/components/ui/dotted-surface';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[614px] items-center overflow-hidden px-margin-mobile py-16 md:py-24 md:px-margin-desktop">
      <DottedSurface />

      <div className="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 items-center gap-gutter md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {/* TODO: H1 — ajustar si cambian el copy principal */}
          <h1 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow md:font-display-lg md:text-display-lg">
            Tu negocio merece un equipo técnico de verdad.
          </h1>

          {/* TODO: Subtítulo hero — mantener bajo 2 líneas */}
          <p className="font-body-md text-body-md max-w-xl text-on-surface-variant">
            Construimos sitios web, aplicaciones y automatizaciones con React, Next.js y Spring Boot. Rápido, limpio y sin los precios de una agencia grande.
          </p>

          <div className="mt-4 flex flex-wrap gap-4">
            <a className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-label-caps text-label-caps uppercase text-on-primary transition-colors hover:bg-primary-fixed-dim" href="#contacto">
              Hablemos de tu proyecto
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
            <a className="glow-hover flex items-center gap-2 rounded border border-primary px-6 py-3 font-label-caps text-label-caps uppercase text-primary transition-colors hover:bg-primary/10" href="#portfolio">
              Ver nuestro trabajo
              <span className="material-symbols-outlined text-sm">arrow_downward</span>
            </a>
          </div>
        </div>

        {/* TODO: Personalizar el objeto JS con proyectos reales si se desea */}
        <div className="relative hidden rounded-lg border border-outline-variant/30 bg-surface-container-high p-6 shadow-2xl md:block">
          <div className="absolute left-0 top-0 flex h-8 w-full items-center gap-2 rounded-t-lg border-b border-outline-variant/30 bg-surface-container-highest px-4">
            <div className="h-3 w-3 rounded-full bg-error" />
            <div className="h-3 w-3 rounded-full bg-primary-container" />
            <div className="h-3 w-3 rounded-full bg-primary" />
          </div>
          <pre className="mt-8 overflow-hidden font-code-sm text-code-sm text-primary">
            <code>{`const UpCoded = {
  stack: ["React", "Next.js", "Spring Boot"],
  quality: "High-Performance",
  speed: "Fast",
  pricing: "Fair",
  build: function(project) {
    return \`Deploying ${'{'}project.name{'}'}...\`;
  }
};

UpCoded.build({ name: "Tu Próximo Éxito" });
// Output: Deploying Tu Próximo Éxito 🚀`}</code>
          </pre>
        </div>
      </div>
    </section>
  );
}