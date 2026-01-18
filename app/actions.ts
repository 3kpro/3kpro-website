'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  message: z.string().min(1, 'Message is required'),
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
    const resend = new Resend(process.env.RESEND_API_KEY)
    
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'james.lawson@gmail.com',
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
       console.error('Resend error:', error)
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

