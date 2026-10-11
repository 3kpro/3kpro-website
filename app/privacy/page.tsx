import type { Metadata } from 'next'
import Link from 'next/link'
import LegalPage from '@/components/legal/LegalPage'

const pageUrl = 'https://3kpro.services/privacy'
export const metadata: Metadata = { title: 'Privacy Policy | 3K Pro Services', description: 'Privacy Policy for 3K Pro Services and 3kpro.services.', alternates: { canonical: pageUrl } }

export default function PrivacyPage() {
  return <LegalPage eyebrow="Legal / Privacy" title="Privacy Policy" summary="This policy explains what information 3K Pro Services collects through 3kpro.services, why we use it, and the choices available to you." sections={[
    { title: 'Scope', body: <p>This policy applies to 3kpro.services and the services offered by 3K Pro Services through this website. It does not control the privacy practices of third-party websites, products, or services that may be linked from this site.</p> },
    { title: 'Information we collect', body: <p>When you contact us, we collect the information you choose to provide, such as your name, email address, company name, and project message. We also receive limited technical and usage information generated when you use the site, such as browser, device, IP-address, page-view, and referral information.</p> },
    { title: 'How we use information', body: <p>We use information to respond to inquiries, discuss or deliver requested services, process payments you initiate, maintain site security, understand site performance, and meet legal or operational obligations. We do not sell personal information.</p> },
    { title: 'Service providers and payments', body: <p>We use service providers to operate the website and requested services. Those providers may process data on our behalf, including Vercel for website hosting, Google Analytics for site measurement when enabled, Resend for contact-form email delivery, and Stripe for payment checkout. Payment card details are entered directly into Stripe Checkout; 3K Pro Services does not receive or store full card numbers.</p> },
    { title: 'Cookies and analytics', body: <p>Our hosting, security, and analytics providers may use cookies or similar technologies to operate the site, prevent abuse, and measure traffic. You can control many cookies through your browser settings. Blocking some cookies may affect site functionality.</p> },
    { title: 'Retention and security', body: <p>We retain personal information only as long as reasonably necessary for the purposes described here, including responding to your request, maintaining business records, resolving disputes, and complying with law. We use reasonable administrative and technical safeguards, but no internet transmission or storage system is completely secure.</p> },
    { title: 'Your choices', body: <p>You may request access to, correction of, or deletion of personal information we hold about you, subject to applicable law and legitimate recordkeeping requirements. To make a request or ask a privacy question, email <a href="mailto:james@3kpro.services">james@3kpro.services</a>.</p> },
    { title: 'Changes and contact', body: <p>We may update this policy as our site or services change. The current version will be posted here with its effective date. For questions about this policy or our data practices, contact <a href="mailto:james@3kpro.services">james@3kpro.services</a> or visit our <Link href="/#contact">contact section</Link>.</p> },
  ]} />
}
