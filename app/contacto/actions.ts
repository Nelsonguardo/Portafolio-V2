"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface EmailProps {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendEmail({ name, email, subject, message }: EmailProps) {
  try {
    // Aquí puedes personalizar el correo que se enviará
    const data = await resend.emails.send({
      from: "Formulario de Contacto <onboarding@resend.dev>",
      to: "guardonei4@gmail.com",
      subject: `Nuevo mensaje de contacto: ${subject}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    })

    return { success: true, data }
  } catch (error) {
    console.error("Error al enviar el email:", error)
    throw new Error("Error al enviar el mensaje")
  }
}

