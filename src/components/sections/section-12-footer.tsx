import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer className="w-full border-t border-outline-variant/20 bg-surface-container-lowest py-16">
      <div className="mx-auto flex max-w-container-max flex-col items-center gap-base px-margin-mobile md:flex-row md:justify-between md:px-margin-desktop">
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

        <div className="flex gap-4 font-code-sm text-code-sm">
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#">
            Privacidad
          </a>
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#">
            Términos
          </a>
          {/* TODO: Reemplazar # con URL real de LinkedIn */}
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#">
            LinkedIn
          </a>
          {/* TODO: Reemplazar # con URL real de GitHub */}
          <a className="text-on-surface-variant transition-colors hover:text-primary" href="#">
            GitHub
          </a>
        </div>

        <div className="mt-4 text-center font-code-sm text-code-sm text-on-surface-variant md:mt-0 md:text-right">
          © 2025 UpCoded. High-Performance Engineering.
          <br />
          <span className="text-xs opacity-50">Hecho con React &amp; Next.js por UpCoded</span>
        </div>
      </div>
    </footer>
  );
}