import { stripe } from '@/lib/stripe'
import { NextRequest, NextResponse } from 'next/server'

type PaymentType = 'deposit' | 'invoice' | 'custom'

const paymentLabels: Record<PaymentType, string> = {
  deposit: '3K Pro Services Project Deposit',
  invoice: '3K Pro Services Invoice Balance',
  custom: '3K Pro Services Custom Service Payment',
}

const minimumAmount: Record<PaymentType, number> = {
  deposit: 500,
  invoice: 100,
  custom: 50,
}

function parseAmount(value: FormDataEntryValue | null, fallback: number) {
  if (!value) return fallback
  const amount = Number(String(value).replace(/[^0-9.]/g, ''))
  return Number.isFinite(amount) ? Math.round(amount * 100) / 100 : fallback
}

export async function POST(request: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: 'Stripe is not configured.' }, { status: 500 })
  }

  const formData = await request.formData()
  const type = String(formData.get('type') || 'custom') as PaymentType

  if (!['deposit', 'invoice', 'custom'].includes(type)) {
    return NextResponse.json({ error: 'Invalid payment type.' }, { status: 400 })
  }

  const amount = type === 'deposit'
    ? 500
    : parseAmount(formData.get('amount'), minimumAmount[type])

  if (amount < minimumAmount[type]) {
    return NextResponse.json(
      { error: `Minimum ${type} payment is $${minimumAmount[type]}.` },
      { status: 400 },
    )
  }

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || request.nextUrl.origin
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          unit_amount: Math.round(amount * 100),
          product_data: {
            name: paymentLabels[type],
            description: 'Secure quick-pay checkout for approved 3K Pro Services work.',
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      payment_type: type,
      source: '3kpro_quick_pay',
    },
    success_url: `${baseUrl}/pay?success=true&session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/pay?canceled=true`,
  })

  if (!session.url) {
    return NextResponse.json({ error: 'Stripe did not return a checkout URL.' }, { status: 500 })
  }

  return NextResponse.redirect(session.url, { status: 303 })
}
