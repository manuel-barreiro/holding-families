import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// Define a type for the form data
interface FormData {
  name: string
  lastName: string
  email: number
  phone: string
  message: string
}

export async function POST (request: Request): Promise<NextResponse> {
  try {
    const formData = await request.json() as FormData

    const { name, lastName, email, phone, message } = formData

    const data = await resend.emails.send({
      from: 'Holding Families <contact@holding-families.com>',
      to: ['contact@holding-families.com'],
      subject: 'Nueva solicitud de franquicia',
      html: `
        <h2>Nueva solicitud de franquicia</h2>
        <p><strong>Nombre:</strong> ${String(name)}</p>
        <p><strong>Apellido:</strong> ${String(lastName)}</p>
        <p><strong>Email:</strong> ${String(email)}</p>
        <p><strong>Teléfono:</strong> ${String(phone)}</p>
        <p><strong>Mensaje:</strong> ${String(message)}</p>
      `
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
