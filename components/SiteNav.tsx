import Link from 'next/link'

type NavSection = 'services' | 'marketplace' | 'about'

/**
 * Shared site navigation — premium 3KPRO direction (72px bar, sharp geometry,
 * electric-blue is reserved for CTAs elsewhere; nav stays black-on-white).
 * Links use absolute paths so anchors resolve from any route.
 */
export default function SiteNav({ active }: { active?: NavSection }) {
  const base =
    'hidden md:block text-[11px] font-bold transition-colors uppercase tracking-[0.18em]'
  const link = (section: NavSection) =>
    `${base} ${active === section ? 'text-black' : 'text-black/55 hover:text-black'}`

  return (
    <nav className="bg-white/92 backdrop-blur-md border-b border-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-[42px] h-[42px] border border-black flex items-center justify-center font-bold text-[17px] tracking-tighter group-hover:bg-black group-hover:text-white transition-all">
              3K
            </div>
            <span className="hidden sm:block text-lg font-bold tracking-tight uppercase">
              3kpro.services
            </span>
          </Link>
          <div className="flex items-center gap-4 md:gap-10">
            <Link href="/#services" className={link('services')}>
              Services
            </Link>
            <Link href="/marketplace" className={link('marketplace')}>
              Marketplace
            </Link>
            <Link href="/pay" className={`${base} text-black/55 hover:text-black`}>
              Quick Pay
            </Link>
            <Link href="/#about" className={link('about')}>
              About
            </Link>
            <Link
              href="/#contact"
              className="px-4 md:px-[22px] py-[9px] border border-black text-[10px] md:text-[11px] font-bold hover:bg-black hover:text-white transition-all uppercase tracking-[0.18em]"
            >
              Initiate Project
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
