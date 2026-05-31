export function WhatsAppFloat() {
  const phoneNumber = "5493854899617"
  const message = encodeURIComponent("Hola Juan, quiero consultar por un proyecto.")
  const href = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      aria-label="Abrir chat de WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-110 hover:bg-[#20bd5a] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-background"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-8 w-8"
        fill="currentColor"
      >
        <path d="M16 2.5C8.55 2.5 2.5 8.31 2.5 15.44c0 2.5.74 4.92 2.14 6.99L3 29.5l7.29-1.57a14 14 0 0 0 5.71 1.2h.01c7.45 0 13.5-5.81 13.5-12.94S23.45 2.5 16 2.5Zm0 24.05h-.01a11.5 11.5 0 0 1-5.36-1.32l-.38-.2-4.33.93.95-4.16-.25-.41a11.23 11.23 0 0 1-1.75-5.95C4.87 9.6 9.8 4.9 16 4.9s11.13 4.7 11.13 10.54S22.2 26.55 16 26.55Zm6.15-7.84c-.33-.16-1.96-.95-2.26-1.06-.3-.11-.52-.16-.74.16-.22.33-.85 1.06-1.04 1.28-.19.22-.38.25-.71.08-.33-.16-1.39-.5-2.65-1.6-.98-.87-1.64-1.95-1.83-2.28-.19-.33-.02-.51.14-.67.14-.14.33-.38.49-.58.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.58-.08-.16-.74-1.79-1.02-2.45-.27-.65-.55-.56-.74-.57l-.63-.01c-.22 0-.58.08-.88.41-.3.33-1.14 1.1-1.14 2.68s1.17 3.1 1.34 3.32c.16.22 2.27 3.47 5.51 4.73.77.33 1.37.53 1.84.68.77.25 1.47.21 2.02.13.62-.09 1.96-.8 2.24-1.58.27-.77.27-1.43.19-1.58-.08-.16-.3-.25-.63-.41Z" />
      </svg>
    </a>
  )
}
