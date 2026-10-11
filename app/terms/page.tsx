import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/legal/LegalPage'

const pageUrl = 'https://3kpro.services/terms'
export const metadata: Metadata = { title: 'Terms of Use | 3K Pro Services', description: 'Terms of Use for 3K Pro Services and 3kpro.services.', alternates: { canonical: pageUrl } }

export default function TermsPage() {
  return <LegalPage eyebrow="Legal / Site Use" title="Terms of Use" summary="These terms govern use of 3kpro.services. A separate written agreement controls any paid 3K Pro Services engagement." sections={[
    { title: 'Acceptance', body: <p>By accessing or using 3kpro.services, you agree to these Terms of Use. If you do not agree, do not use the site.</p> },
    { title: 'Website purpose', body: <p>This site provides general information about 3K Pro Services, its consulting services, and related products. Website content is not legal, tax, financial, security, or other professional advice, and it is not a promise that a particular result will be achieved.</p> },
    { title: 'Service engagements', body: <p>Submitting a form, booking a conversation, or making an inquiry does not create a client relationship or obligate either party to proceed. The scope, pricing, payment terms, deliverables, responsibilities, and any warranties for paid work are governed only by a written agreement or written scope accepted by both parties.</p> },
    { title: 'Payments', body: <p>Where a payment option is available, use it only after the applicable work, amount, and next step have been confirmed. Payments are processed by Stripe under Stripe&apos;s own terms and privacy practices. Questions about a payment, invoice, or scope should be sent to <a href="mailto:james@3kpro.services">james@3kpro.services</a>.</p> },
    { title: 'Acceptable use', body: <p>You may use this site only for lawful purposes. You may not interfere with site operation, attempt unauthorized access, introduce malicious code, scrape or harvest data in a way that burdens the site, or use the site to violate another person&apos;s rights.</p> },
    { title: 'Intellectual property', body: <p>The site&apos;s content, branding, design, code, and other materials are owned by or licensed to 3K Pro Services and are protected by applicable law. You may not reproduce, distribute, modify, or commercially exploit them without prior written permission, except as allowed by law.</p> },
    { title: 'Third-party services', body: <p>This site may link to or rely on third-party services. 3K Pro Services does not control and is not responsible for their content, availability, or practices. Your use of third-party services is governed by their terms and policies.</p> },
    { title: 'Disclaimers and liability', body: <p>The site is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, 3K Pro Services disclaims warranties not expressly stated in a written agreement. To the fullest extent permitted by law, 3K Pro Services will not be liable for indirect, incidental, special, consequential, or punitive damages arising from use of, or inability to use, this site.</p> },
    { title: 'Changes and contact', body: <p>We may update these terms by posting an updated version here. Continued use after an update means you accept the revised terms. Questions may be sent to <a href="mailto:james@3kpro.services">james@3kpro.services</a> or through our <Link href="/#contact">contact section</Link>.</p> },
  ]} />
}
