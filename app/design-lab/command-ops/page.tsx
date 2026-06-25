import Link from 'next/link'
import CommandOpsCanvas from './CommandOpsCanvas'

const opsSteps = [
  { label: 'Lead', detail: 'Intake and context capture', status: 'LIVE' },
  { label: 'Scope', detail: 'Workflow map and MVP shape', status: 'HITL' },
  { label: 'Build', detail: 'Automation, AI workspace, or SaaS', status: 'DEV' },
  { label: 'Ship', detail: 'Deploy, train, support, iterate', status: 'PAID' },
]

const systems = [
  ['Private AI Workspace', 'Docs, SOPs, CRM notes, and business workflows become queryable.'],
  ['Automation Sprints', 'One painful process converted into a reliable machine path.'],
  ['Custom SaaS MVPs', 'Internal dashboards, portals, checkout, and admin control rooms.'],
]

export default function CommandOpsConcept() {
  return (
    <main className="min-h-screen bg-[#030712] text-white overflow-hidden">
      <section className="relative min-h-screen border-b border-white/10 bg-grid-dark">
        <CommandOpsCanvas />
        <div className="absolute inset-0 command-sweep-x pointer-events-none opacity-70" />
        <div className="absolute inset-0 command-sweep-y pointer-events-none opacity-60" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,7,18,0.18), rgba(3,7,18,0.62) 46%, rgba(3,7,18,0.35))',
          }}
        />

        <nav className="relative z-10 border-b border-white/10 bg-[#030712]/72 backdrop-blur-md">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-white/40 text-sm font-black tracking-[-0.08em]">
                3K
              </div>
              <div>
                <div className="text-sm font-black uppercase tracking-[-0.02em]">3KPRO.SERVICES</div>
                <div className="text-[9px] font-bold uppercase tracking-[0.26em] text-white/35">Command Ops Concept</div>
              </div>
            </Link>
            <div className="hidden items-center gap-8 md:flex">
              {['Systems', 'Workflow', 'Pricing'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/45 hover:text-white">
                  {item}
                </a>
              ))}
              <a href="#contact" className="border border-[#2563eb] bg-[#2563eb] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                Start Build
              </a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-3 border border-white/14 bg-white/[0.03] px-4 py-2">
              <span className="h-2 w-2 bg-[#2563eb] status-blink" />
              <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-white/55">
                Private AI Systems For Local Operators
              </span>
            </div>

            <h1 className="max-w-4xl text-[clamp(3.35rem,6.45vw,6.7rem)] font-black uppercase leading-[0.91] tracking-[-0.075em]">
              Build The Machine
              <span className="block text-white/42">Behind The Business.</span>
            </h1>

            <p className="mt-8 max-w-xl text-[17px] font-medium leading-relaxed text-white/58">
              Websites are the front door. The real leverage is the operating system behind it:
              private AI workspaces, automated workflows, and custom tools that move work from
              conversation to cash.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#workflow" className="bg-[#2563eb] px-8 py-4 text-center text-[11px] font-black uppercase tracking-[0.24em] text-white shadow-[8px_8px_0_0_rgba(37,99,235,0.22)]">
                Watch The Flow
              </a>
              <Link href="/" className="border border-white/18 px-8 py-4 text-center text-[11px] font-black uppercase tracking-[0.24em] text-white/62 hover:text-white">
                Back To Current Site
              </Link>
            </div>
          </div>

          <div className="relative hidden min-h-[620px] lg:block">
            <div className="absolute inset-0 border border-white/10 bg-white/[0.025]" />
            <div className="absolute left-10 right-10 top-10 border border-white/10 bg-[#050b18]/90 p-6">
              <div className="mb-7 flex items-center justify-between">
                <div className="text-[10px] font-black uppercase tracking-[0.28em] text-white/35">Live Ops Board</div>
                <div className="text-[10px] font-mono text-[#60a5fa]">RUN: 3KPRO_LOCAL_AI</div>
              </div>
              <div className="space-y-3">
                {opsSteps.map((step, index) => (
                  <div key={step.label} className="relative grid grid-cols-[96px_1fr_58px] items-center gap-5 border border-white/10 bg-white/[0.025] p-4">
                    {index < opsSteps.length - 1 && (
                      <div className="absolute left-[62px] top-[54px] h-[24px] w-px bg-[#2563eb]/70 trace-pulse" />
                    )}
                    <div className="text-[1.65rem] font-black uppercase tracking-[-0.05em]">{step.label}</div>
                    <div className="text-[13px] font-semibold leading-relaxed text-white/52">{step.detail}</div>
                    <div className="border border-[#2563eb]/40 bg-[#2563eb]/10 px-2 py-1 text-center text-[9px] font-black uppercase tracking-[0.16em] text-[#93c5fd]">
                      {step.status}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 border border-white/10 bg-[#030712]/92 p-4 shadow-[0_0_70px_rgba(37,99,235,0.12)]">
                <div className="mb-3 text-[10px] font-black uppercase tracking-[0.26em] text-white/35">Console Output</div>
                {[
                  '> ingest: client docs / SOP / lead notes',
                  '> map: bottleneck -> automation candidate',
                  '> build: workspace + workflow + support loop',
                ].map((line) => (
                  <div key={line} className="font-mono text-[13px] leading-7 text-[#93c5fd]">{line}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="systems" className="border-b border-white/10 bg-[#060b16] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.26em] text-[#60a5fa]">What It Sells</div>
              <h2 className="text-5xl font-black uppercase tracking-[-0.06em] md:text-7xl">Not IT Help. Operational Leverage.</h2>
            </div>
            <p className="max-w-lg text-sm font-medium leading-relaxed text-white/50">
              The design has to communicate that 3KPRO is not another local break-fix shop.
              It installs the operating layer that makes a small business move faster.
            </p>
          </div>

          <div className="grid gap-px bg-white/10 md:grid-cols-3">
            {systems.map(([title, body], index) => (
              <article key={title} className="group relative min-h-[270px] overflow-hidden bg-[#030712] p-7">
                <div className="absolute inset-x-0 top-0 h-px bg-[#2563eb] opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="mb-14 text-[10px] font-mono text-white/30">0{index + 1} / SYSTEM</div>
                <h3 className="mb-5 text-2xl font-black uppercase tracking-[-0.04em]">{title}</h3>
                <p className="text-sm font-medium leading-relaxed text-white/48">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="workflow" className="bg-[#030712] px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl border border-white/10 bg-white/[0.025] p-7 md:p-10">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="text-4xl font-black uppercase leading-none tracking-[-0.05em] md:text-6xl">
              One Line From Pain To Paid.
            </h2>
            <p className="max-w-2xl text-sm font-medium leading-relaxed text-white/50 lg:ml-auto">
              This is the transition language: animated connector lines, not floating cards.
              Each section should feel like a system advancing, not a brochure scrolling.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {opsSteps.map((step) => (
              <div key={step.label} className="relative border border-white/10 bg-[#050b18] p-5">
                <div className="absolute -right-4 top-1/2 hidden h-px w-8 bg-[#2563eb] md:block trace-pulse" />
                <div className="mb-8 text-[10px] font-black uppercase tracking-[0.24em] text-[#60a5fa]">{step.status}</div>
                <h3 className="mb-3 text-3xl font-black uppercase tracking-[-0.06em]">{step.label}</h3>
                <p className="text-xs font-semibold leading-relaxed text-white/45">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
