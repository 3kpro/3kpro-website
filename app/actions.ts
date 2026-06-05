'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const CONTACT_FORM_FROM =
  process.env.CONTACT_FORM_FROM || '3KPRO Contact <james@3kpro.services>'
const CONTACT_FORM_TO = process.env.CONTACT_FORM_TO || 'james@3kpro.services'

const schema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  email: z.string().trim().email('Invalid email address'),
  company: z.string().trim().optional(),
  message: z.string().trim().min(1, 'Message is required'),
})

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = schema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    message: formData.get('message'),
  })

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please check your entries.'
    }
  }

  const { name, email, company, message } = validatedFields.data

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('Contact form unavailable: RESEND_API_KEY is not configured')
      return {
        success: false,
        message: 'Contact form temporarily unavailable. Please email us directly.',
      }
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const { error } = await resend.emails.send({
      from: CONTACT_FORM_FROM,
      to: CONTACT_FORM_TO,
      subject: `New Contact Form Submission from ${name}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Message:
${message}
      `,
    })

    if (error) {
      console.error('Resend contact form error:', error)
      throw new Error(error.message)
    }

    return { success: true, message: 'Message sent successfully!' }

  } catch (error) {
    console.error('Form submission error:', error)
    return {
      success: false,
      message: 'Something went wrong. Please try again or email us directly.',
    }
  }
}

