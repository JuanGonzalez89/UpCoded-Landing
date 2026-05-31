'use client'

import { useState } from 'react'

export default function CTASection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto"
      id="contacto"
    >
      <div className="bg-surface-container-high rounded-xl p-8 md:p-12 border border-outline-variant/30 relative overflow-hidden">
        <div className="absolute inset-0 code-pattern opacity-20 pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

          {/* Copy */}
          <div>
            <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-primary text-glow mb-4">
              ¿Listo para subir de nivel?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Dejanos tus datos y nos pondremos en contacto en menos de 24 horas
              para discutir cómo podemos ayudarte a construir tu próximo proyecto.
            </p>
            <ul className="space-y-4 font-body-md text-on-surface">
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                upcodednow@gmail.com
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Lunes a Viernes, 9am – 6pm (ART)
              </li>
            </ul>
          </div>

          {/* Form */}
          <div className="bg-surface p-6 rounded-lg border border-outline-variant/30">

            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <span className="material-symbols-outlined text-primary text-5xl">
                  check_circle
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  ¡Mensaje enviado!
                </h3>
                <p className="font-body-md text-on-surface-variant">
                  Te respondemos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-primary font-label-caps text-label-caps uppercase hover:underline mt-2"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label
                    className="block font-label-caps text-label-caps text-on-surface-variant mb-2"
                    htmlFor="name"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre o empresa"
                    className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  />
                </div>

                <div>
                  <label
                    className="block font-label-caps text-label-caps text-on-surface-variant mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tucorreo@empresa.com"
                    className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none"
                  />
                </div>

                <div>
                  <label
                    className="block font-label-caps text-label-caps text-on-surface-variant mb-2"
                    htmlFor="message"
                  >
                    Mensaje breve sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="¿Qué estás buscando construir?"
                    className="w-full bg-surface-container border border-outline-variant rounded p-3 text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-colors outline-none h-32 resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-sm text-red-400 font-label-caps">
                    Completá todos los campos e intentá de nuevo.
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="w-full bg-primary text-on-primary px-6 py-3 rounded font-label-caps text-label-caps uppercase hover:bg-primary-fixed-dim transition-colors flex items-center justify-center gap-2 mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Quiero una propuesta gratuita
                      <span className="material-symbols-outlined text-sm">send</span>
                    </>
                  )}
                </button>
              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  )
}
