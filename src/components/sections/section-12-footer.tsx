import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6';

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest py-16">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:items-start">
          <div className="flex items-center gap-2 font-display-lg text-headline-md text-primary md:justify-start justify-center">
            <Image 
              src="/portfolio/logo_upcoded/Logo_Upcoded_192x192.png" 
              alt="UpCoded Logo" 
              width={48} 
              height={48} 
              className="object-contain"
            />
            UpCoded
          </div>

          <div className="flex flex-col items-center gap-4">
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
            <hr className="w-16 border-outline-variant/20" />
            <p className="text-center font-code-sm text-code-sm text-on-surface-variant">
              &copy; 2025 UpCoded. Tecnolog&iacute;a web para tu negocio.
              <br />
              <span className="text-xs opacity-50">Dise&ntilde;ado y desarrollado por UpCoded</span>
            </p>
          </div>

          <div className="flex justify-center gap-5 md:justify-end">
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="https://www.instagram.com/upcoded/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-xl" />
            </a>
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="https://www.linkedin.com/company/upcoded-desarrollo-web-y-apps-para-negocios/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-xl" />
            </a>
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="#" aria-label="GitHub">
              <FaGithub className="text-xl" />
            </a>
            <a className="text-on-surface-variant transition-colors hover:text-primary" href="https://x.com/upcodednow" target="_blank" rel="noopener noreferrer" aria-label="X">
              <FaXTwitter className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}