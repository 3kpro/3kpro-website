import Link from 'next/link'

const socials = [
  { label: 'X', href: 'https://x.com/3KPRO_SAAS' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@3kpro.services' },
  { label: 'YouTube', href: 'https://www.youtube.com/@3KPRO.SERVICES' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/3kpro-services' },
]

/** Shared site footer matching the redesigned homepage. */
export default function SiteFooter() {
  return (
    <footer className="bg-white border-t border-black py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 border border-black flex items-center justify-center font-bold text-xs">
                3K
              </div>
              <span className="text-[17px] font-bold uppercase tracking-[-0.02em]">3KPRO.SERVICES</span>
            </div>
            <p className="text-[13px] text-black/50 font-medium max-w-[320px] leading-relaxed mb-6">
              Precision-engineered digital infrastructure and professional services. Operational
              since 2010.
            </p>
            <div className="flex gap-5">
              {socials.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40 hover:text-black transition-colors"
                >
                  {p.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 mb-5">
              Inventory
            </h3>
            <div className="flex flex-col gap-3">
              {['Cloud Solutions', 'Custom Dev', 'Data Systems', 'Security'].map((s) => (
                <Link
                  key={s}
                  href="/#services"
                  className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors"
                >
                  {s}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 mb-5">
              Hierarchy
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/#about"
                className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors"
              >
                About
              </Link>
              <Link
                href="/marketplace"
                className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors"
              >
                Marketplace
              </Link>
              <Link
                href="/#services"
                className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors"
              >
                Services
              </Link>
              <Link
                href="/pay"
                className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors"
              >
                Quick Pay
              </Link>
              <Link
                href="/#contact"
                className="text-[12px] font-bold uppercase tracking-[0.12em] hover:text-[#2563eb] transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-black/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            © {new Date().getFullYear()} 3KPRO.SERVICES. ALL RIGHTS RESERVED.
          </p>
          <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/40">
            Tulsa // OK // USA
          </div>
        </div>
      </div>
    </footer>
  )
}
