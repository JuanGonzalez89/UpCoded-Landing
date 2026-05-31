import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos.' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'UpCoded Contacto <onboarding@resend.dev>',
      to: 'upcodednow@gmail.com',
      replyTo: email,
      subject: `Nuevo contacto de ${name} — UpCoded`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #131314; padding: 32px; border-radius: 8px; border: 1px solid #3c494d;">
            <h2 style="color: #00d9ff; margin: 0 0 24px; font-size: 20px;">
              Nuevo mensaje desde UpCoded
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #3c494d; color: #64748b; width: 120px; font-size: 13px;">
                  Nombre
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #3c494d; color: #e2e8f0; font-size: 13px;">
                  ${name}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #3c494d; color: #64748b; font-size: 13px;">
                  Email
                </td>
                <td style="padding: 12px 0; border-bottom: 1px solid #3c494d; color: #e2e8f0; font-size: 13px;">
                  <a href="mailto:${email}" style="color: #00d9ff;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 16px 0 0; color: #64748b; font-size: 13px; vertical-align: top;">
                  Mensaje
                </td>
                <td style="padding: 12px 0 0; color: #e2e8f0; font-size: 13px; line-height: 1.6;">
                  ${message}
                </td>
              </tr>
            </table>
            <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #3c494d;">
              <p style="color: #64748b; font-size: 12px; margin: 0;">
                Respondé directamente a este email para contactar a ${name}
              </p>
            </div>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Error al enviar el mensaje.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })

  } catch (err) {
    console.error('Server error:', err)
    return NextResponse.json(
      { error: 'Error interno del servidor.' },
      { status: 500 }
    )
  }
}
