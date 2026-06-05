'use client';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/marquee';

const t = [
  { name: 'Martín C.', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', body: 'Necesitábamos una solución robusta y rápida. UpCoded entregó a tiempo y la calidad nos permitió escalar sin problemas.' },
  { name: 'Gonzalo Ferragina', avatar: 'https://randomuser.me/api/portraits/men/44.jpg', body: 'Llevó adelante la creación de la página de onboarding con gran autonomía, manteniendo al equipo informado y coordinando con distintas áreas para lograr un resultado sólido.' },
  { name: 'Diego M.', avatar: 'https://randomuser.me/api/portraits/men/15.jpg', body: 'Lanzamos en 2 semanas. El sitio carga increíble y las consultas por WhatsApp se triplicaron desde el día uno.' },
  { name: 'Sofía L.', avatar: 'https://randomuser.me/api/portraits/women/33.jpg', body: 'Mi estudio de diseño necesitaba una web rápida y profesional. Quedé fascinada con la velocidad de carga y lo fácil que es actualizarla.' },
  { name: 'Federico R.', avatar: 'https://randomuser.me/api/portraits/men/52.jpg', body: 'Automatizamos todo el sistema de pedidos de mi restaurante. Ahora los pedidos llegan solos al celular, sin llamadas perdidas.' },
  { name: 'Carolina M.', avatar: 'https://randomuser.me/api/portraits/women/47.jpg', body: 'Digitalicé mi estudio contable con ellos. Mis clientes pueden subir documentos desde la web y yo los recibo ordenados. Un antes y un después.' },
  { name: 'Agustín P.', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', body: 'Tenía un taller mecánico sin página web. En dos semanas teníamos landing, WhatsApp integrado y estamos llenos de turnos.' },
  { name: 'Valentina G.', avatar: 'https://randomuser.me/api/portraits/women/63.jpg', body: 'Armaron la plataforma de inscripción para mi jardín de infantes. Las familias se anotan solas desde casa, me ahorré horas de planillas.' },
  { name: 'Hernán D.', avatar: 'https://randomuser.me/api/portraits/men/86.jpg', body: 'Necesitaba una web profesional para mi estudio jurídico con blog de artículos. Quedó impecable y aparece primero en Google.' },
] as const;

type Testimonial = (typeof t)[number];

const orders: number[][] = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8],
  [3, 7, 1, 5, 8, 2, 0, 6, 4],
  [6, 2, 8, 4, 0, 7, 3, 5, 1],
  [1, 5, 7, 2, 6, 3, 8, 4, 0],
  [8, 4, 0, 6, 3, 1, 5, 7, 2],
];

function TestimonialCard({ name, avatar, body }: Testimonial) {
  return (
    <Card className="w-64">
      <CardContent>
        <div className="flex items-center gap-2.5">
          <Avatar>
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <p className="text-sm font-semibold text-on-surface">{name}</p>
        </div>
        <blockquote className="mt-3 text-sm text-on-surface-variant leading-relaxed">{body}</blockquote>
      </CardContent>
    </Card>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24" id="testimonios">
      <div className="mx-auto mb-16 max-w-container-max px-margin-mobile text-center md:px-margin-desktop">
        <h2 className="font-display-lg-mobile text-display-lg-mobile text-primary text-glow mb-4 md:font-display-lg md:text-display-lg">
          Lo que dicen los que ya se movieron
        </h2>
        <p className="mx-auto max-w-2xl font-body-md text-body-md text-on-surface-variant">
          Clientes reales, resultados concretos. Pasá el mouse sobre las cards para pausar.
        </p>
      </div>

      <div className="relative flex h-[520px] w-full flex-row items-center justify-center overflow-hidden [perspective:400px]">
        <div
          className="flex flex-row items-center gap-5"
          style={{
            transform:
              'translateY(0px) translateZ(-60px) rotateX(12deg) rotateY(-4deg) rotateZ(10deg)',
          }}
        >
          {orders.map((order, colIndex) => (
            <Marquee
              key={colIndex}
              vertical
              pauseOnHover
              repeat={3}
              reverse={colIndex % 2 === 1}
              className="[--duration:40s]"
            >
              {order.map((i) => (
                <TestimonialCard key={t[i].name} {...t[i]} />
              ))}
            </Marquee>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-background" />
        <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-background" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-background" />
      </div>
    </section>
  );
}
