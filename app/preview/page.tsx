import Link from 'next/link'
import { concepts } from './concepts'

export default function PreviewIndex() {
  return (
    <div className="min-h-screen bg-[#0a0c10] text-white">
      <header className="border-b border-white/10 bg-[#11151b]/90">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center border border-white/20 font-bold">3K</div>
            <span className="hidden text-lg font-bold uppercase tracking-tight sm:block">3kpro.services</span>
          </Link>
          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">
            Facelift preview gallery
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">
            Figma-backed concepts
          </div>
          <h1 className="text-4xl font-bold leading-tight tracking-normal md:text-6xl">
            Six modern directions for the 3KPRO front door.
          </h1>
          <p className="mt-5 text-base font-medium leading-8 text-white/55">
            The first three are original Figma concepts. The second three pull usable DNA from the Figma Make
            Awwwards-style template without dragging its compiled runtime into production.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {concepts.map((concept) => (
            <Link
              key={concept.id}
              href={concept.route}
              className="group flex min-h-[360px] flex-col justify-between border p-6 transition-colors hover:border-white/35"
              style={{ backgroundColor: concept.palette.surface, borderColor: concept.palette.line }}
            >
              <div>
                <div className="mb-8 flex items-center justify-between">
                  <div
                    className="grid h-11 w-11 place-items-center border font-bold"
                    style={{
                      color: concept.palette.accentText,
                      backgroundColor: concept.palette.accent,
                      borderColor: concept.palette.accent,
                    }}
                  >
                    {concept.id.toUpperCase()}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: concept.palette.muted }}>
                    {concept.label}
                  </span>
                </div>
                <h2 className="text-2xl font-bold tracking-normal" style={{ color: concept.palette.text }}>
                  {concept.name}
                </h2>
                <p className="mt-4 text-sm font-medium leading-7" style={{ color: concept.palette.muted }}>
                  {concept.verdict}
                </p>
              </div>
              <div
                className="mt-8 border-t pt-5 text-[11px] font-bold uppercase tracking-[0.18em] transition-transform group-hover:translate-x-1"
                style={{ color: concept.palette.accent, borderColor: concept.palette.line }}
              >
                Open {concept.name}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
