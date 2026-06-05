import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest py-16">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 font-display-lg text-headline-md text-primary">
            <Image 
              src="/portfolio/logo_upcoded/Logo_Upcoded_192x192.png" 
              alt="UpCoded Logo" 
              width={48} 
              height={48} 
              className="object-contain"
            />
            UpCoded
          </div>

          <nav className="flex gap-6 font-code-sm text-code-sm">
            <Link className="text-on-surface-variant transition-colors hover:text-primary" href="/blog">
              Blog
            </Link>
            <Link className="text-on-surface-variant transition-colors hover:text-primary" href="/#servicios">
              Servicios
            </Link>
            <Link className="text-on-surface-variant transition-colors hover:text-primary" href="/#portfolio">
              Portfolio
            </Link>
            <Link className="text-on-surface-variant transition-colors hover:text-primary" href="/#contacto">
              Contacto
            </Link>
          </nav>

          <div className="flex gap-4 font-code-sm text-code-sm">
            <a className="flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary" href="https://www.instagram.com/upcoded/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-base" />
              Instagram
            </a>
            <a className="flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary" href="https://www.linkedin.com/company/upcoded-desarrollo-web-y-apps-para-negocios/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-base" />
              LinkedIn
            </a>
            <a className="flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary" href="#">
              <FaGithub className="text-base" />
              GitHub
            </a>
            <a className="flex items-center gap-1.5 text-on-surface-variant transition-colors hover:text-primary" href="https://x.com/upcodednow" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="text-base" />
              X
            </a>
          </div>
        </div>

        <div className="mt-8 text-center font-code-sm text-code-sm text-on-surface-variant">
          © 2025 UpCoded. High-Performance Engineering.
          <br />
          <span className="text-xs opacity-50">Hecho con React &amp; Next.js por UpCoded</span>
        </div>
      </div>
    </footer>
  );
}