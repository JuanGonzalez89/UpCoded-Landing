import { randomUUID } from 'node:crypto';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

type LeadPayload = {
  name?: unknown;
  company?: unknown;
  whatsapp?: unknown;
  email?: unknown;
  service?: unknown;
  stage?: unknown;
  message?: unknown;
  lang?: unknown;
  honeypot?: unknown;
  startedAt?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WHATSAPP_RE = /^\+?[\d\s().-]{6,20}$/;

// Opciones válidas de "¿Qué necesitás resolver?" y "¿En qué etapa está el proyecto?",
// en los dos idiomas. El cliente las manda tal cual las muestra.
const SERVICE_VALUES = new Set([
  'Web que genere consultas',
  'Automatizar un proceso',
  'Sistema o MVP',
  'No estoy seguro todavía',
  'A website that generates leads',
  'Automate a process',
  'A system or MVP',
  'Not sure yet',
]);

const STAGE_VALUES = new Set([
  'Tengo una idea',
  'Quiero mejorar algo existente',
  'Necesito empezar pronto',
  'Estoy evaluando opciones',
  'I have an idea',
  'I want to improve something existing',
  'I need to start soon',
  "I'm evaluating options",
]);

const MIN_FORM_SECONDS = 4;

function str(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

function invalid(error: string): NextResponse {
  return NextResponse.json({ ok: false, error }, { status: 400 });
}

export async function POST(req: NextRequest) {
  let body: LeadPayload;
  try {
    body = (await req.json()) as LeadPayload;
  } catch {
    return invalid('invalid_json');
  }

  // Anti-spam: honeypot relleno => descartar en silencio (éxito aparente).
  if (typeof body.honeypot === 'string' && body.honeypot.trim() !== '') {
    console.warn('[lead] rejected by honeypot');
    return NextResponse.json({ ok: true, id: randomUUID() });
  }

  // Anti-spam: un envío "real" nunca es instantáneo.
  const startedAt = Number(body.startedAt);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FORM_SECONDS * 1000) {
    console.warn('[lead] rejected: submitted too fast');
    return invalid('too_fast');
  }

  const name = str(body.name);
  const company = str(body.company);
  const whatsapp = str(body.whatsapp);
  const email = str(body.email);
  const service = str(body.service);
  const stage = str(body.stage);
  const message = str(body.message);
  const lang = body.lang === 'en' ? 'en' : 'es';

  if (name.length < 2 || name.length > 120) return invalid('invalid_name');
  if (company.length < 2 || company.length > 160) return invalid('invalid_company');
  if (!WHATSAPP_RE.test(whatsapp)) return invalid('invalid_whatsapp');
  if (email && (email.length > 160 || !EMAIL_RE.test(email))) return invalid('invalid_email');
  if (!SERVICE_VALUES.has(service)) return invalid('invalid_service');
  if (!STAGE_VALUES.has(stage)) return invalid('invalid_stage');
  if (message.length < 8 || message.length > 2000) return invalid('invalid_message');

  const origin = req.headers.get('referer') ?? (lang === 'en' ? '/en/start-project' : '/es/iniciar-proyecto');

  const lead = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    origin,
    lang,
    name,
    company,
    whatsapp,
    email: email || null,
    service,
    stage,
    message,
  };

  console.log('[lead] created', {
    id: lead.id,
    origin: lead.origin,
    lang: lead.lang,
    name: lead.name,
    company: lead.company,
    whatsapp: lead.whatsapp,
    email: lead.email,
    service: lead.service,
    stage: lead.stage,
  });

  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');

    const { data, error } = await resend.emails.send({
      from: 'UpCoded Contacto <onboarding@resend.dev>',
      to: 'upcodednow@gmail.com',
      replyTo: email || 'upcodednow@gmail.com',
      subject: `Nuevo proyecto: ${service} — ${name} | UpCoded`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #131314; padding: 32px; border-radius: 8px; border: 1px solid #3c494d;">
            <h2 style="color: #00d9ff; margin: 0 0 24px; font-size: 20px;">Nuevo lead del formulario guiado</h2>
            <table style="width: 100%; border-collapse: collapse;">
              ${[
                ['Nombre', lead.name],
                ['Empresa / Proyecto', lead.company],
                ['WhatsApp', lead.whatsapp],
                ['Email', lead.email ?? '—'],
                ['Servicio de interés', lead.service],
                ['Etapa del proyecto', lead.stage],
                ['Mensaje', lead.message],
                ['Origen', lead.origin],
                ['Id', lead.id],
              ]
                .map(
                  ([label, value]) => `
                <tr>
                  <td style="padding: 12px 16px 12px 0; border-bottom: 1px solid #3c494d; color: #64748b; width: 140px; font-size: 13px; vertical-align: top;">${label}</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #3c494d; color: #e2e8f0; font-size: 13px; vertical-align: top;">${value}</td>
                </tr>`,
                )
                .join('')}
            </table>
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #3c494d;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">Respondé por WhatsApp a ${lead.whatsapp} o por email a ${lead.email ?? 'upcodednow@gmail.com'}.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('[lead] resend email error:', error);
      return NextResponse.json({ ok: false, error: 'email_failed' }, { status: 500 });
    }

    // Crear el lead como contacto en la audiencia de Resend si está configurada.
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    if (audienceId && lead.email) {
      try {
        const parts = lead.name.split(/\s+/).filter(Boolean);
        await resend.contacts.create({
          audienceId,
          email: lead.email,
          firstName: parts[0] ?? '',
          lastName: parts.slice(1).join(' ') || undefined,
          unsubscribed: false,
        });
      } catch (err) {
        console.error('[lead] resend contact error:', err);
      }
    }

    console.log('[lead] delivered', { id: lead.id });
    return NextResponse.json({ ok: true, id: lead.id });
  } catch (err) {
    console.error('[lead] server error:', err);
    return NextResponse.json({ ok: false, error: 'internal' }, { status: 500 });
  }
}

export const runtime = 'nodejs';