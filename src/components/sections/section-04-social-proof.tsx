export default function SocialProofSection() {
  return (
    <section className="border-y border-outline-variant/30 bg-surface-container-low py-6">
      <div className="mx-auto max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <p className="mb-4 font-label-caps text-label-caps uppercase text-on-surface-variant">
          Empresas que ya se movieron rápido con UpCoded:
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 font-body-md text-on-surface md:gap-12">
          {/* TODO: Actualizar estas métricas con datos reales */}
          <span className="flex items-center gap-2"><span className="text-primary text-xl">⚡</span> +10 proyectos entregados</span>
          <span className="flex items-center gap-2"><span className="text-primary text-xl">🌎</span> Clientes en Argentina, España</span>
          <span className="flex items-center gap-2"><span className="text-primary text-xl">⏱</span> Tiempo promedio de entrega: 3 semanas</span>
        </div>
      </div>
    </section>
  );
}