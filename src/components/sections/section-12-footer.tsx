import Image from 'next/image';
import Link from 'next/link';
import { PiInstagramLogo, PiLinkedinLogo, PiXLogo } from 'react-icons/pi';
import { startProjectPath } from '@/lib/seo';

const social = [
  { label: 'Instagram', href: 'https://www.instagram.com/upcoded/', Icon: PiInstagramLogo },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/upcoded-desarrollo-web-y-apps-para-negocios/', Icon: PiLinkedinLogo },
  { label: 'X', href: 'https://x.com/upcodednow', Icon: PiXLogo },
] as const;

export default function FooterSection({ lang = 'es', dict }: { lang?: string; dict?: { description?: string; navLabel?: string; copyright?: string } }) {
  const nav = [
    { label: lang === 'en' ? 'Services' : 'Servicios', href: `/${lang}/#servicios` },
    { label: 'Portfolio', href: `/${lang}/#portfolio` },
    { label: lang === 'en' ? 'Process' : 'Proceso', href: `/${lang}/#proceso` },
    { label: lang === 'en' ? 'Pricing' : 'Precios', href: `/${lang}/#precios` },
    { label: 'Blog', href: `/${lang}/blog` },
    { label: lang === 'en' ? 'Contact' : 'Contacto', href: startProjectPath(lang) },
  ];

  return (
    <footer className="on-ink bg-ink px-margin-mobile pb-12 pt-12 text-on-ink md:px-margin-desktop">
      <div className="mx-auto max-w-container-max border-t border-ink-outline pt-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link className="flex items-center gap-2.5 text-[1.0625rem] font-semibold tracking-[-0.02em] text-on-ink" href={`/${lang}`}>
              <Image src="/portfolio/logo_upcoded/Logo_Upcoded_192x192.png" alt="" width={30} height={30} className="object-contain" />
              UpCoded
            </Link>
            <p className="mt-4 max-w-[34ch] text-body-sm text-on-ink-variant">
              {dict?.description ?? 'Tecnología web para tu negocio. Sitios, sistemas a medida y automatizaciones, desde Argentina.'}
            </p>
          </div>
          <nav aria-label={dict?.navLabel ?? 'Footer'} className="grid grid-cols-2 gap-x-10 gap-y-3 sm:flex sm:gap-8">
            {nav.map((item) => <Link key={item.href} className="text-body-sm text-on-ink-variant transition-colors hover:text-on-ink" href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div className="mt-12 flex flex-col-reverse gap-6 border-t border-ink-outline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-code-sm text-on-ink-variant">© {new Date().getFullYear()} UpCoded. {dict?.copyright ?? 'Diseñado y desarrollado por UpCoded.'}</p>
          <ul className="flex gap-2">{social.map(({ label, href, Icon }) => <li key={label}><a className="flex h-11 w-11 items-center justify-center rounded-md text-on-ink-variant transition-colors hover:bg-ink-container hover:text-on-ink" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><Icon aria-hidden size={19} /></a></li>)}</ul>
        </div>
      </div>
    </footer>
  );
}
