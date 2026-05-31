"use client"

import { TestimonialCarousel } from "@/components/ui/testimonial"

const TESTIMONIALS = [
  {
    id: 1,
    name: "Martín C.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "Necesitábamos una solución robusta y rápida. UpCoded entregó a tiempo y la calidad del código nos permitió escalar sin problemas.",
  },
  {
    id: 2,
    name: "Gonzalo Ferragina",
    description:
      "Llevó adelante la creación de la página de onboarding con gran autonomía, manteniendo al equipo informado sobre los avances y coordinando con distintas áreas para lograr un resultado sólido, claro y alineado con el ritmo de UpCoded.",
  },
  {
    id: 3,
    name: "Diego M.",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    description:
      "Lanzamos en 2 semanas. El sitio carga increíble y las consultas por WhatsApp se triplicaron desde el día uno.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop">
      <div className="mx-auto grid max-w-container-max items-center gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="text-center lg:text-left">
          <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary text-glow mb-4">
          Lo que dicen los que ya se movieron
          </h2>
          <p className="mx-auto max-w-xl font-body-md text-body-md text-on-surface-variant lg:mx-0">
            Arrastrá las cards o usá las flechas para ver más. El espacio libre al costado se aprovecha para darle más aire visual al testimonio destacado.
          </p>
        </div>

        <div className="lg:pl-4 xl:pl-8">
          <TestimonialCarousel
            testimonials={TESTIMONIALS}
            showArrows={true}
            showDots={true}
            className="mx-auto max-w-2xl"
          />
        </div>
      </div>
    </section>
  )
}