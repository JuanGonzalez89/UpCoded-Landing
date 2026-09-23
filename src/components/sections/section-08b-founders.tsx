import Image from 'next/image';
import { FadeInView } from '@/components/ui/fade-in-view';

type FoundersDict = {
  tag: string;
  title: string;
  intro: string;
  based: string;
  photoAlt: string;
  items: readonly { role: string; bio: readonly string[] }[];
};

// Datos que no dependen del idioma. `photo: null` muestra las iniciales hasta
// que se suban los retratos a /public/team (4:5, mismo encuadre y luz).
const founders = [
  {
    name: 'Juan Gonzalez',
    initials: 'JG',
    photo: '/team/juan-gonzalez.png' as string | null,
    linkedin: 'https://www.linkedin.com/in/juan-ignacio-gonzalez/',
    github: 'https://github.com/JuanGonzalez89',
  },
  {
    name: 'Juan Garcia',
    initials: 'JG',
    photo: '/team/juan-garcia.png' as string | null,
    linkedin: 'https://www.linkedin.com/in/juangarciamallo/',
    github: 'https://github.com/juangarcia-123',
  },
] as const;

export default function FoundersSection({ dict }: { dict: FoundersDict }) {
  const personsJsonLd = founders.map((f, i) => ({
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: f.name,
    jobTitle: dict.items[i].role,
    worksFor: { '@id': 'https://upcoded.dev/#organization' },
    sameAs: [f.linkedin, f.github],
  }));

  return (
    <section
      aria-labelledby="creadores-title"
      className="px-margin-mobile py-24 md:px-margin-desktop lg:py-32"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personsJsonLd) }}
      />
      <div className="mx-auto max-w-container-max">
        <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
          [ {dict.tag} ]
        </p>
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          <h2 id="creadores-title" className="text-headline-lg text-on-surface lg:col-span-6">
            {dict.title}
          </h2>
          <p className="max-w-measure text-body-md text-on-surface-variant lg:col-span-5 lg:col-start-8">
            {dict.intro}
          </p>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-14 border-t border-outline-variant pt-14 md:grid-cols-2 md:gap-10 lg:mt-20 lg:gap-16 lg:pt-16">
          {founders.map((f, i) => {
            const item = dict.items[i];
            return (
              <li key={f.linkedin}>
                <FadeInView delay={i * 100}>
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-outline-variant bg-surface-dim">
                    {f.photo ? (
                      <Image
                        src={f.photo}
                        alt={`${dict.photoAlt} ${f.name}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    ) : (
                      <span
                        aria-hidden
                        className="absolute inset-0 flex items-center justify-center font-label-caps text-[clamp(4rem,12vw,9rem)] text-on-surface-variant/40"
                      >
                        {f.initials}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-headline-md uppercase text-on-surface">{f.name}</h3>
                  <p className="mt-2 font-label-caps text-label-caps uppercase text-on-surface-variant">
                    {item.role}
                  </p>
                  <div className="mt-5 max-w-measure space-y-3 text-body-md text-on-surface-variant">
                    {item.bio.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-label-caps text-label-caps uppercase">
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`LinkedIn — ${f.name}`}
                      className="text-on-surface underline decoration-outline underline-offset-4 transition-colors hover:decoration-on-surface"
                    >
                      LinkedIn
                    </a>
                    <a
                      href={f.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub — ${f.name}`}
                      className="text-on-surface underline decoration-outline underline-offset-4 transition-colors hover:decoration-on-surface"
                    >
                      GitHub
                    </a>
                    <span className="text-on-surface-variant/70">[ {dict.based} ]</span>
                  </div>
                </FadeInView>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
