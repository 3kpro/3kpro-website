import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Total Valve Interview Brief | 3KPRO',
  description: 'A focused interview brief hosted by 3KPRO for quick review.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function TotalValveInterviewPage() {
  return (
    <main className="min-h-screen bg-[#08090b] px-4 py-6 text-white sm:px-6 lg:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-3rem)] max-w-7xl flex-col overflow-hidden rounded-[28px] border border-white/12 bg-[#111318] shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
        <header className="flex flex-col gap-4 border-b border-white/10 bg-[#151922] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#ffb703]">
              Interview brief
            </p>
            <h1 className="mt-2 text-2xl font-black tracking-normal sm:text-3xl">
              Total Valve Systems
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/62">
              Hosted as a focused, noindex review page for fast access during the interview process.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <a
              href="/totalvalve.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#ffb703] px-5 text-sm font-black text-[#111318] transition hover:bg-[#ffd166]"
            >
              Open PDF
            </a>
            <a
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/16 px-5 text-sm font-black text-white/78 transition hover:border-white/34 hover:text-white"
            >
              3KPRO
            </a>
          </div>
        </header>

        <div className="min-h-[72vh] flex-1 bg-[#0b0d11] p-3 sm:p-5">
          <iframe
            title="Total Valve interview brief PDF"
            src="/totalvalve.pdf"
            className="h-[74vh] w-full rounded-[18px] border border-white/10 bg-white"
          />
        </div>
      </section>
    </main>
  )
}
