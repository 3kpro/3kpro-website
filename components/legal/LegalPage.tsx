import Link from 'next/link'
import OperatorStyles from '@/components/operator/OperatorStyles'

type LegalSection = { title: string; body?: React.ReactNode }
type LegalPageProps = { eyebrow: string; title: string; summary: string; sections: LegalSection[] }

export default function LegalPage({ eyebrow, title, summary, sections }: LegalPageProps) {
  const [firstWord, ...remainingWords] = title.split(' ')
  return (
    <div className="op">
      <OperatorStyles />
      <nav className="topnav">
        <Link href="/" className="logo" aria-label="3K Pro Services home"><span className="sq" />3KPRO<span style={{ color: 'var(--faint)', fontWeight: 600 }}>·OS</span></Link>
        <div className="nav-links"><Link href="/#services">Services</Link><Link href="/marketplace">Marketplace</Link><Link href="/pay">Quick Pay</Link></div>
        <div className="nav-clock" />
        <Link href="/#contact" className="btn nav-cta">Contact</Link>
      </nav>
      <main>
        <header className="pghead">
          <Link href="/" className="back">← Back to 3KPRO</Link>
          <div className="eyebrow">{eyebrow}</div>
          <h1><span className="amb">{firstWord}</span>{' '}<span className="out">{remainingWords.join(' ')}</span></h1>
          <p>{summary}</p>
          <p style={{ color: 'var(--faint)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.08em', marginTop: 20 }}>LAST UPDATED: OCTOBER 11, 2026</p>
        </header>
        <section style={{ background: 'var(--panel)', borderTop: '1px solid var(--line)' }}>
          <div className="wrap" style={{ maxWidth: 1000 }}><div className="dossier">
            {sections.map((section, index) => <article className="row" key={section.title}><span className="id">{String(index + 1).padStart(2, '0')}</span><h2>{section.title}</h2><div>{section.body}</div></article>)}
          </div></div>
        </section>
      </main>
      <footer className="foot"><span>© {new Date().getFullYear()} 3KPRO Systems {'//'} Tulsa, Oklahoma</span><div className="links"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/#contact">Contact</Link></div></footer>
    </div>
  )
}
