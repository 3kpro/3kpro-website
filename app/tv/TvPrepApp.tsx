'use client'

import { useEffect, useMemo, useState } from 'react'

/* ---------- data ---------- */

const TABS = [
  { id: 'home', label: 'Home' },
  { id: 'company', label: 'Company' },
  { id: 'stories', label: 'Stories' },
  { id: 'drill', label: 'Q&A Drill' },
  { id: 'tech', label: 'Tech' },
  { id: 'ask', label: 'Ask Them' },
  { id: 'salary', label: 'Salary' },
  { id: 'dayof', label: 'Day-Of' },
  { id: 'plan', label: 'Checklist' },
] as const

type TabId = (typeof TABS)[number]['id']

type StoryId = 's1' | 's2' | 's3' | 's4'

const MATCHER_CHIPS: { label: string; story: StoryId }[] = [
  { label: 'Tell me about yourself', story: 's1' },
  { label: 'Ownership change', story: 's1' },
  { label: 'Multi-site / remote', story: 's2' },
  { label: 'Efficiency / lean', story: 's3' },
  { label: 'Project management', story: 's3' },
  { label: 'Under pressure', story: 's4' },
  { label: 'Only IT person?', story: 's4' },
]

const QA: { q: string; a: string }[] = [
  {
    q: 'Walk me through your experience.',
    a: '~90 sec anchored on the Broken Arrow integration; end on "so a co-managed, boots-on-the-ground role in a Broken Arrow manufacturing shop is squarely what I\'ve done best."',
  },
  {
    q: 'Why do you want to work here?',
    a: 'Roots in Broken Arrow, want to own an environment end to end, and Total Valve is at exactly the phase — new ownership, proprietary systems needing a steward — where I add the most value. Never "I need a job."',
  },
  {
    q: 'A user\u2019s PC is down and they\u2019ve got a valve shipment due.',
    a: 'Triage impact (one user or the line?), get them working fast even via a temporary swap, then root-cause. Optimize for business continuity, not a clean ticket close.',
  },
  {
    q: 'How do you work with an MSP?',
    a: 'Single throat to choke internally \u2014 own the outcome + user relationship, hold SLA, prevent gap-tickets, align their work to floor reality.',
  },
  {
    q: 'We have older/custom systems \u2014 how do you approach that?',
    a: 'Stabilize \u2192 document \u2192 improve incrementally. "The risk in undocumented proprietary systems is the bus factor \u2014 I\u2019d make sure I can recover them before I change anything."',
  },
  {
    q: 'Biggest weakness / a time something failed.',
    a: 'A real, contained one with recovery + a control added afterward. In an ISO shop, frame it as a corrective action \u2014 they respect owning a mistake and hardening the process.',
  },
  {
    q: 'Where do you see yourself in 5 years?',
    a: 'Still here, having documented and stabilized the stack, the person the floor and the owners both trust. Roots, not a launchpad.',
  },
  {
    q: 'Aren\u2019t you overqualified?',
    a: '"I\u2019m not after a title \u2014 I want roots in Broken Arrow and to own an environment end to end. I\u2019m the PM and the hands \u2014 knowing where every wire goes is the part I actually enjoy."',
  },
]

const TECH: { t: string; body: string; line?: string }[] = [
  {
    t: 'AD / Identity (Entra ID)',
    body: 'On-prem AD DS, hybrid via Entra Connect, and clean same-day offboarding.',
    line: '"Least-privilege by default, group-based access so permissions are auditable, and offboarding that revokes access same-day \u2014 non-negotiable in an ISO shop."',
  },
  {
    t: 'M365 / Exchange / Azure',
    body: 'Exchange Online, Intune + Conditional Access (MFA, block legacy auth), license hygiene as cost control.',
    line: '"I treat license management as cost control \u2014 reclaiming seats on offboard adds up fast."',
  },
  {
    t: 'Networking (plant-floor)',
    body: 'VLAN segmentation (office/floor/OT/guest), Wi-Fi on a metal-heavy floor, VPN/SD-WAN to remote sites.',
    line: '"I\u2019d segment shop-floor and office traffic \u2014 mostly so a compromised office PC can\u2019t reach a test bench or machine controller." (You have the welder story to prove you live this.)',
  },
  {
    t: 'Backup / DR',
    body: '3-2-1 with an immutable copy, RTO/RPO thinking, and tested restores.',
    line: '"A backup you haven\u2019t restored is a hope, not a plan." Often the most impressive area in an SMB interview.',
  },
  {
    t: 'Security (ransomware = the threat)',
    body: 'MFA everywhere, EDR, patching, least privilege, segmented backups. Tie to cyber-insurance requirements if budget resistance comes up. Calm, prioritized \u2014 never fear-mongering.',
  },
  {
    t: 'OT / IT convergence (your differentiator)',
    body: 'Test benches, Total Valve Live rigs, label/scanner gear \u2014 often old Windows that can\u2019t be freely patched.',
    line: '"Floor equipment often can\u2019t be patched normally \u2014 so I isolate it, control what talks to it, and monitor it, rather than pretending it\u2019s a laptop."',
  },
  {
    t: 'IaC \u2014 play it as direction, not day-one',
    body: 'Don\u2019t promise Terraform pipelines \u2014 reads as flight risk. Frame: stabilize & document first. Realistic fit: PowerShell, Intune/Autopilot config profiles, Git-tracked runbooks. Lead with your real PowerShell/automation edge, not buzzwords.',
  },
]

const CHECKLIST: { group: string; items: string[] }[] = [
  {
    group: 'Two days before',
    items: [
      'Re-read this whole guide; every r\u00e9sum\u00e9 bullet has a 30-sec story.',
      'Rehearse all 4 stories out loud \u2014 especially the hook & welder card.',
      'Look up interviewers on LinkedIn if you have names.',
      'Confirm time, format, and who you\u2019re meeting.',
    ],
  },
  {
    group: 'Day before',
    items: [
      'Print r\u00e9sum\u00e9s; pack the folder; lay out clothes.',
      'Drive the route / confirm entrance & parking.',
      'Reread the hook, MSP line, salary play, and your questions.',
      'Sleep. Sharp beats over-prepared-and-fried.',
    ],
  },
  {
    group: 'Morning of',
    items: [
      'Eat. Water. Get there early.',
      'Re-read your questions + the hook in the parking lot.',
      'Walk in as the person who\u2019s already done this job \u2014 because you have.',
    ],
  },
  {
    group: 'Within 24 hours after',
    items: ['Send a specific thank-you to each interviewer \u2014 reference something you discussed.'],
  },
]

const STORAGE_KEY = 'tvprep.checklist.v1'

/* ---------- small primitives ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6fd3c4]">
      {children}
    </span>
  )
}

function Placard({
  children,
  tone = 'hook',
}: {
  children: React.ReactNode
  tone?: 'hook' | 'plain'
}) {
  return (
    <div
      className={`my-4 rounded-2xl border-l-4 p-4 shadow-sm ${
        tone === 'hook'
          ? 'border-[#1e7a6f] bg-[#12312c] '
          : 'border-white/20 bg-white/[0.04]'
      }`}
    >
      {children}
    </div>
  )
}

function Caution({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border-l-4 border-[#b4472b] bg-[#2c1712] p-4">
      {children}
    </div>
  )
}

function Say({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-3 rounded-r-xl border-l-4 border-[#1e7a6f] bg-white/[0.03] p-4 text-[17px] leading-relaxed text-white/85">
      <div className="mb-2 font-mono text-[11px] font-semibold tracking-[0.18em] text-[#6fd3c4]">
        SAY IT
      </div>
      {children}
    </div>
  )
}

function Card({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="my-2 rounded-xl border border-white/10 bg-white/[0.03] p-4 shadow-sm">
      <span className="mb-1 block font-mono text-[11px] tracking-[0.06em] text-[#6fd3c4]">
        {label}
      </span>
      <div className="text-[16px] leading-relaxed text-white/80">{children}</div>
    </div>
  )
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-5 w-5 flex-none text-[#1e7a6f] transition-transform ${
        open ? 'rotate-90' : ''
      }`}
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Expandable({
  id,
  title,
  subtitle,
  signature,
  openId,
  setOpenId,
  highlightId,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  signature?: boolean
  openId: string | null
  setOpenId: (id: string | null) => void
  highlightId?: string | null
  children: React.ReactNode
}) {
  const open = openId === id
  const highlighted = highlightId === id
  return (
    <div
      id={id}
      className={`my-3 overflow-hidden rounded-2xl border bg-[#111318] shadow-sm transition-shadow ${
        signature ? 'border-l-4 border-l-[#1e7a6f] border-white/10' : 'border-white/10'
      } ${highlighted ? 'ring-2 ring-[#1e7a6f]' : ''}`}
    >
      <button
        type="button"
        onClick={() => setOpenId(open ? null : id)}
        className="flex w-full items-center gap-3 p-4 text-left"
      >
        <div className="flex-1">
          <div
            className={`text-[17px] font-semibold ${
              signature ? 'text-[#8fe0d2]' : 'text-white'
            }`}
          >
            {title}
          </div>
          {subtitle && <div className="mt-0.5 text-[13px] text-white/50">{subtitle}</div>}
        </div>
        <Chevron open={open} />
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  )
}

function QAItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="my-2.5 overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start gap-3 p-4 text-left"
      >
        <span className="flex-1 text-[17px] font-semibold text-white">{q}</span>
        <span
          className={`flex-none rounded-md border px-2 py-1 font-mono text-[10px] tracking-[0.1em] ${
            open
              ? 'border-[#1e7a6f] bg-[#1e7a6f] text-white'
              : 'border-[#1e7a6f] text-[#6fd3c4]'
          }`}
        >
          REVEAL
        </span>
      </button>
      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-3 text-[15.5px] leading-relaxed text-white/75">
          {a}
        </div>
      )}
    </div>
  )
}

/* ---------- main app ---------- */

export default function TvPrepApp() {
  const [tab, setTab] = useState<TabId>('home')
  const [openStory, setOpenStory] = useState<string | null>(null)
  const [highlight, setHighlight] = useState<string | null>(null)
  const [openTechIdx, setOpenTechIdx] = useState<number | null>(null)
  const [done, setDone] = useState<Set<string>>(new Set())
  const [hydrated, setHydrated] = useState(false)

  // load persisted checklist state
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (raw) setDone(new Set(JSON.parse(raw)))
    } catch {
      /* ignore */
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(done)))
    } catch {
      /* ignore */
    }
  }, [done, hydrated])

  const totalItems = useMemo(
    () => CHECKLIST.reduce((n, g) => n + g.items.length, 0),
    []
  )
  const pct = totalItems === 0 ? 0 : Math.round((done.size / totalItems) * 100)

  function toggle(id: string) {
    setDone((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function jumpToStory(id: StoryId) {
    setTab('stories')
    setOpenStory(id)
    setHighlight(id)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)
    setTimeout(() => setHighlight(null), 1800)
  }

  function goTile(id: TabId) {
    setTab(id)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  return (
    <main className="min-h-screen bg-[#08090b] text-white">
      {/* top bar */}
      <div className="sticky top-0 z-40 flex items-center gap-3 border-b-[3px] border-[#1e7a6f] bg-gradient-to-b from-[#16232b] to-[#1b2e38] px-4 pb-3 pt-[calc(env(safe-area-inset-top)+12px)]">
        <svg viewBox="0 0 100 100" className="h-8 w-8 flex-none">
          <circle cx="50" cy="50" r="44" stroke="#2c4a45" strokeWidth={6} fill="none" />
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="#6fd3c4"
            strokeWidth={6}
            strokeLinecap="round"
            fill="none"
            strokeDasharray="207 277"
            transform="rotate(135 50 50)"
          />
          <line x1="50" y1="50" x2="74" y2="34" stroke="#8fe0d2" strokeWidth={6} strokeLinecap="round" />
          <circle cx="50" cy="50" r="7" fill="#8fe0d2" />
        </svg>
        <div className="leading-tight">
          <div className="font-semibold text-[18px]">Total Valve Prep</div>
          <div className="font-mono text-[10px] tracking-[0.16em] text-[#6fd3c4]">
            INTERVIEW FIELD MANUAL &middot; J. LAWSON
          </div>
        </div>
        <div className="ml-auto text-right font-mono text-[10px] tracking-[0.06em] text-[#9fd8cf]">
          READINESS
          <div className="text-[18px] font-semibold text-[#8fe0d2]">{pct}%</div>
        </div>
      </div>

      {/* tab bar */}
      <nav className="sticky top-[64px] z-30 flex gap-2 overflow-x-auto border-b border-white/10 bg-[#0d0f13] px-3 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => goTile(t.id)}
            className={`flex-none rounded-full px-3.5 py-2 font-mono text-[13px] font-medium ${
              tab === t.id ? 'bg-[#1e7a6f] text-white' : 'bg-white/5 text-white/60'
            }`}
          >
            {t.label}
          </button>
        ))}
      </nav>

      <div className="mx-auto max-w-[760px] px-4 pb-16 pt-5">
        {tab === 'home' && (
          <section>
            <Placard tone="hook">
              <Eyebrow>&#9733; Your one move that wins the room</Eyebrow>
              <p className="mt-2 text-[18px] leading-relaxed">
                <b>You&rsquo;ve already done this exact job, in this town.</b> You integrated the
                Exterran cryogenic plant right here in Broken Arrow &mdash; trusted by the CEO
                &mdash; and Total Valve is another Broken Arrow manufacturer under new
                ownership. <b>Lead with that.</b>
              </p>
            </Placard>

            <div className="my-4 rounded-2xl border border-white/10 bg-[#111318] p-4 shadow-sm">
              <div className="mb-2 flex items-baseline justify-between">
                <Eyebrow>Rehearsal readiness</Eyebrow>
                <span className="font-semibold text-[22px] text-[#8fe0d2]">{pct}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#1e7a6f] to-[#33a594] transition-all"
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="mt-2 text-[14px] text-white/50">
                Tick items in the <b className="text-white/70">Checklist</b> tab as you rehearse
                &mdash; this fills up.
              </p>
            </div>

            <h3 className="mt-6 text-[19px] font-semibold">Your 3 power moves</h3>
            <Card label="01 &middot; THE HOOK">
              Open with the Broken Arrow plant &mdash; same town, same manufacturing world,
              trusted by the CEO.
            </Card>
            <Card label="02 &middot; THE MSP LINE">
              &ldquo;I&rsquo;m the single throat to choke internally &mdash; I own the outcome and
              the user relationship; the MSP executes on what they&rsquo;re contracted for.&rdquo;
            </Card>
            <Card label="03 &middot; THE WELDER STORY">
              The switch a welder kept unplugging for a 2nd microwave &mdash; proof you design IT
              that survives a real shop floor. Deploy it whenever the network/floor comes up.
            </Card>

            <h3 className="mt-6 text-[19px] font-semibold">Jump in</h3>
            <div className="mt-2 grid grid-cols-2 gap-3">
              {[
                { id: 'stories' as TabId, n: '03', l: 'The 4 Stories', d: 'Scripts + detail cards' },
                { id: 'drill' as TabId, n: '06', l: 'Q&A Drill', d: 'Tap to reveal answers' },
                { id: 'salary' as TabId, n: '08', l: 'Salary Play', d: "Don't name a number first" },
                { id: 'plan' as TabId, n: '10', l: 'Checklist', d: 'Game plan + progress' },
              ].map((tile) => (
                <button
                  key={tile.id}
                  onClick={() => goTile(tile.id)}
                  className="flex min-h-[92px] flex-col justify-between rounded-2xl border border-white/10 bg-[#111318] p-4 text-left shadow-sm"
                >
                  <span className="font-mono text-[11px] tracking-[0.1em] text-[#1e7a6f]">
                    {tile.n}
                  </span>
                  <span>
                    <span className="block text-[18px] font-semibold leading-tight">{tile.l}</span>
                    <span className="block text-[13px] text-white/50">{tile.d}</span>
                  </span>
                </button>
              ))}
            </div>

            <Caution>
              <Eyebrow>Overqualification defense</Eyebrow>
              <p className="mt-2 text-[15.5px] text-white/80">
                You&rsquo;re the <b>PM and the technician</b> &mdash; you imaged the machines and
                did the post-install yourself. If you sense &ldquo;is he too senior?&rdquo;, say:{' '}
                <i>
                  &ldquo;I&rsquo;m not after a title &mdash; I want roots in Broken Arrow and to
                  own an environment end to end. Knowing where every wire goes is the part I
                  enjoy.&rdquo;
                </i>
              </p>
            </Caution>
          </section>
        )}

        {tab === 'company' && (
          <section>
            <Eyebrow>Spec 01</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">The Company</h2>
            <p className="mt-2 text-[16px] leading-relaxed text-white/75">
              Broken Arrow valve maker since 1983 &mdash; 70,000 sq ft on ~10 acres. They build
              and service pressure relief, control &amp; isolation valves for safety-critical,
              regulated customers. Know this like you already work there.
            </p>

            <table className="my-3 w-full border-collapse text-[15.5px]">
              <tbody>
                {[
                  ['Founded / site', '1983 \u00b7 70,000 sq ft \u00b7 1300 E Memphis St, Broken Arrow, OK 74012'],
                  ['What they make', 'Pressure relief (PRVs), control, isolation & excess-flow valves'],
                  ['Who they serve', 'Power, oil & gas, chemical, cryogenic, pulp/paper, food & bev, pharma'],
                  ['Quality regime', 'ISO 9001:2015 \u00b7 VR, UV, NB, ASME \u2014 records & traceability are sacred'],
                  ['Crown jewels', 'Total Valve Live, the valve testing database, web inventory tracking, LiftTrack'],
                  ['Footprint', '~7 US sites + Shanghai, Jordan, India, Singapore'],
                  ['Owner / method', 'New ownership; uses Lean techniques \u00b7 owner/pres. Mike Lybarger'],
                ].map(([k, v]) => (
                  <tr key={k} className="border-t border-white/10">
                    <td className="w-[40%] py-2.5 pr-2 align-top font-semibold text-white/90">{k}</td>
                    <td className="py-2.5 align-top text-white/70">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Caution>
              <Eyebrow>Reality check &mdash; steer with it, don&rsquo;t repeat it</Eyebrow>
              <p className="mt-2 text-[15.5px] text-white/80">
                Indeed ~2.8/5: good people, weaker management, &ldquo;mediocre pay,&rdquo; limited
                training. So: <b>don&rsquo;t anchor salary first</b>, your roadmap/budget
                questions are diligence, and &ldquo;behind the times&rdquo; = your opening to
                bring order.
              </p>
            </Caution>

            <Placard>
              <Eyebrow>The MSP framing &mdash; say it almost verbatim</Eyebrow>
              <p className="mt-2 text-[16px] leading-relaxed text-white/85">
                &ldquo;In a co-managed setup I&rsquo;m the single throat to choke internally
                &mdash; I own the outcome and the user relationship, the MSP executes on what
                they&rsquo;re contracted for. My job is to triage what&rsquo;s ours vs. theirs,
                hold them to SLA, and make sure nothing falls in the cracks.&rdquo;
              </p>
            </Placard>
          </section>
        )}

        {tab === 'stories' && (
          <section>
            <Eyebrow>Spec 03</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">The Four Stories</h2>
            <p className="mt-2 text-[15.5px] text-white/60">
              Tap a card to open it. Rehearse each out loud, 60&ndash;90 sec. Lead with the hook;
              play detail cards only when they probe.
            </p>

            <Placard>
              <Eyebrow>Which story for which question?</Eyebrow>
              <p className="mt-1 mb-2 text-[14px] text-white/55">
                Tap a question type &mdash; it&rsquo;ll open the right story.
              </p>
              <div className="flex flex-wrap gap-2">
                {MATCHER_CHIPS.map((c) => (
                  <button
                    key={c.label}
                    onClick={() => jumpToStory(c.story)}
                    className="min-h-[44px] rounded-full border border-[#2f5a52] bg-[#16332e] px-4 py-2 text-[14.5px] font-medium text-[#8fe0d2] active:bg-[#1e7a6f] active:text-white"
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </Placard>

            <Expandable
              id="s1"
              signature
              title="\u2460 The Broken Arrow Integration"
              subtitle="Enerflex \u2190 Exterran \u00b7 FLAGSHIP"
              openId={openStory}
              setOpenId={setOpenStory}
              highlightId={highlight}
            >
              <p className="text-[15px] text-white/55">
                <b className="text-white/75">Proves:</b> you integrated a Broken Arrow
                manufacturing plant end to end through an acquisition &mdash; trusted by the CEO,
                hands-on from the trench to the ERP.
              </p>
              <p className="mt-2 text-[15px] text-white/55">
                <b className="text-white/75">Facts:</b> Enerflex <i>acquired</i> Exterran (Oct
                2022, ~$735M, all-stock &mdash; say the direction that way). The Broken Arrow
                cryogenic plant was the crown jewel &amp; your focus. You were the on-site go-to
                for the execs and CEO.
              </p>
              <Say>
                &ldquo;My flagship is honestly why Total Valve jumped out at me &mdash;
                I&rsquo;ve basically already done this job, in this town. When Enerflex acquired
                Exterran, the crown jewel of that deal was the Exterran plant right here in
                Broken Arrow &mdash; the cryogenic facility. That plant was my focus, and I was
                the on-site go-to for the executives, including the CEO. Exterran had deferred
                IT for years waiting on the buyout, so I modernized it end to end: full hardware
                refresh and server-room rebuild, a company-wide network redesign, Oracle-to-SAP
                ERP, Office 365, replacing the Avaya phones with Teams, rebuilding the conference
                rooms, and running workshops to move people to cloud apps. And I did it hands-on
                &mdash; I was also the AutoCAD SME. Production never stopped. So a Broken Arrow
                manufacturer under new ownership? That&rsquo;s exactly what I just spent years
                succeeding at.&rdquo;
              </Say>
              <h4 className="mt-4 mb-1 text-[15px] font-semibold text-[#8fe0d2]">
                Detail cards &mdash; deploy the one they probe
              </h4>
              <Card label="\u2460 HARDWARE + SERVER ROOM">
                Everything 2&ndash;3 yrs past lifecycle &mdash; replaced the whole fleet (eng +
                business laptops, monitors, switches, printers) and practically rebuilt the
                server room.
              </Card>
              <Card label="\u2461 \u2605 NETWORK REDESIGN \u2014 THE WELDER STORY">
                One building&rsquo;s Cisco 3560 went down = every building down. Happened 4\u00d7
                &mdash; a welder kept unplugging it for a 2nd microwave. I worked with
                stakeholders + net admins on a company-wide upgrade that killed those single
                points of failure. <i>A valve/welding shop will feel this one.</i>
              </Card>
              <Card label="\u2462 ERP \u2014 ORACLE \u2192 SAP">
                Migrated the backbone ERP. Staged, validated, business coordinated so no data
                loss and no stopped operations.
              </Card>
              <Card label="\u2463 RECORDS \u2192 SHAREPOINT/O365">
                Consolidated scattered third-party retention apps into one governed place.{' '}
                <i>Tie-in: the records discipline an ISO 9001 shop lives on.</i>
              </Card>
              <Card label="\u2464 TELEPHONY \u2014 AVAYA \u2192 TEAMS">
                Migrated + ported all numbers &mdash; sequenced <i>after</i> the network upgrade,
                because voice-over-Teams is only as good as the network under it.
              </Card>
              <Card label="\u2465 CONF ROOMS \u2014 NEAT BAR + M365">
                Rebuilt all conference rooms with Neat Bar integrated into M365.
              </Card>
              <Card label="\u2466 CHANGE MGMT \u2014 CLOUD WORKSHOP">
                Ran a workshop to actually transition users to cloud apps. Adoption is the hard
                part, not installation. <i>Tie-in: I&rsquo;ll win over your floor, not impose on
                it.</i>
              </Card>
              <Card label="\u2467 AUTOCAD SME + FIBER">
                AutoCAD SME for engineering, and project-managed directional boring of new
                underground fiber building-to-building.
              </Card>
            </Expandable>

            <Expandable
              id="s2"
              title="\u2461 Overlaying the Network"
              subtitle="ONEOK \u2190 Magellan \u00b7 $18.8B"
              openId={openStory}
              setOpenId={setOpenStory}
              highlightId={highlight}
            >
              <p className="text-[15px] text-white/55">
                <b className="text-white/75">Proves:</b> you integrate acquisitions at massive
                multi-site scale &mdash; acquired locations onto the parent&rsquo;s standards.
              </p>
              <Say>
                &ldquo;At ONEOK I worked on one of the biggest integrations you can be part of
                &mdash; they acquired Magellan Midstream, about an eighteen-point-eight-billion-
                dollar deal, and all of Magellan&rsquo;s pipeline locations had to come onto
                ONEOK&rsquo;s environment. I project-managed the overlay of ONEOK&rsquo;s network
                onto those sites and owned the conversion and support. Heavily multi-site &mdash;
                bringing acquired locations up to standard while keeping users productive. I also
                used Citrix and Starlink to keep remote, hard-to-reach sites connected. Total
                Valve isn&rsquo;t just the Broken Arrow plant &mdash; you&rsquo;ve got sites
                across a lot of states and offices overseas. Standardizing distributed locations
                is something I&rsquo;ve done at real scale.&rdquo;
              </Say>
              <p className="mt-2 text-[14.5px] text-white/50">
                <b className="text-white/70">Figure:</b> $18.8 billion (announced May 2023,
                closed that September) &mdash; not $1.8B. Precision protects your credibility.
              </p>
            </Expandable>

            <Expandable
              id="s3"
              title="\u2462 Twelve Admins Down to Two"
              subtitle="AEP"
              openId={openStory}
              setOpenId={setOpenStory}
              highlightId={highlight}
            >
              <p className="text-[15px] text-white/55">
                <b className="text-white/75">Proves:</b> you make IT dramatically leaner &mdash;
                the whole value prop for a cost-conscious shop running Lean.
              </p>
              <Say>
                &ldquo;At AEP I ran a project to build out 300 workstations &mdash; standardized
                and supportable at scale. But the bigger win was efficiency: the environment had
                twelve administrators and the ticket queue was always behind. I standardized the
                builds, applied JIT and Lean to how we provisioned, and drove the backlog down.
                By the end the same environment ran on two admins instead of twelve &mdash; not by
                cutting corners, but by standardizing so the work didn&rsquo;t need that overhead.
                You already use Lean here, so we&rsquo;d be speaking the same language.&rdquo;
              </Say>
              <Caution>
                <Eyebrow>Framing caution</Eyebrow>
                <p className="mt-1 text-[14.5px] text-white/75">
                  Frame 12&rarr;2 as <b>standardization</b>, never &ldquo;I cut people.&rdquo; If
                  asked: the others were redeployed to higher-value work.
                </p>
              </Caution>
            </Expandable>

            <Expandable
              id="s4"
              title="\u2463 The Rescue"
              subtitle="Alorica \u00b7 saved a failing rollout"
              openId={openStory}
              setOpenId={setOpenStory}
              highlightId={highlight}
            >
              <p className="text-[15px] text-white/55">
                <b className="text-white/75">Proves:</b> you perform under pressure, carry a whole
                site solo, and protect the customer relationship. Your best &ldquo;can you be the
                only IT person?&rdquo; answer.
              </p>
              <Say>
                &ldquo;At Alorica I got put on a situation already going sideways. A large call
                center had fallen behind on the Windows 7 to 10 migration, and the client was
                frustrated enough to threaten pulling their business &mdash; the account was on
                the line, not just a deadline. I took it on and upgraded the entire center
                single-handedly, then stayed on for post-install support across all the different
                client programs on that floor. We got it back on track and the client stayed. Two
                takeaways: I hold up under pressure when there&rsquo;s real money on the line, and
                I can carry an entire site by myself &mdash; which is basically what being your
                internal IT person is.&rdquo;
              </Say>
              <Caution>
                <Eyebrow>If they ask for a MISTAKE you made</Eyebrow>
                <p className="mt-1 text-[14.5px] text-white/75">
                  This is a <i>rescue</i>, not a personal-error story &mdash; don&rsquo;t force it.
                  Use a small honest snag (a driver/app that broke on an image) &rarr; own it
                  &rarr; workaround &rarr; root cause &rarr; the check you added. End on the{' '}
                  <b>corrective-action</b> framing (ISO language).
                </p>
              </Caution>
            </Expandable>
          </section>
        )}

        {tab === 'drill' && (
          <section>
            <Eyebrow>Spec 06</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">Q&amp;A Drill</h2>
            <p className="mt-2 text-[15.5px] text-white/60">
              Read the question, answer it out loud, <b className="text-white/80">then tap to
              reveal</b> the strong version. Active recall beats re-reading.
            </p>
            {QA.map((item) => (
              <QAItem key={item.q} q={item.q} a={item.a} />
            ))}
          </section>
        )}

        {tab === 'tech' && (
          <section>
            <Eyebrow>Spec 05</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">Tech Refresher</h2>
            <p className="mt-2 text-[15.5px] text-white/60">
              You know this &mdash; these are the seniority one-liners to have loaded. Tap to open
              each.
            </p>
            {TECH.map((item, i) => (
              <div
                key={item.t}
                className="my-2.5 overflow-hidden rounded-2xl border border-white/10 bg-[#111318] shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenTechIdx(openTechIdx === i ? null : i)}
                  className="flex w-full items-center gap-3 p-4 text-left"
                >
                  <span className="flex-1 text-[16.5px] font-semibold text-white">{item.t}</span>
                  <Chevron open={openTechIdx === i} />
                </button>
                {openTechIdx === i && (
                  <div className="px-4 pb-4 text-[15px] leading-relaxed text-white/75">
                    <p>{item.body}</p>
                    {item.line && (
                      <p className="mt-2 text-white/55">
                        <b className="text-white/70">Line:</b> {item.line}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {tab === 'ask' && (
          <section>
            <Eyebrow>Spec 07</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">Questions You Ask</h2>
            <p className="mt-2 text-[15.5px] text-white/60">
              Bring 4&ndash;5, ask 3&ndash;4. Engineered to look senior and surface the
              pay/culture/roadmap risks.
            </p>
            <Card label="">&ldquo;What does the split look like today between what the internal
              person handles and what the MSP owns &mdash; and what&rsquo;s been falling in the
              cracks?&rdquo;</Card>
            <Card label="">&ldquo;Total Valve Live and the testing database &mdash; who supports
              those today, and how well documented are they?&rdquo;{' '}
              <span className="text-white/45">(You already know their crown jewels &mdash; huge
              signal.)</span></Card>
            <Card label="">&ldquo;With the new ownership, is there an IT roadmap/budget for
              modernization, or is the near-term priority stability?&rdquo;</Card>
            <Card label="">&ldquo;What would a successful first 90 days look like to you?&rdquo;</Card>
            <Card label="">&ldquo;How does the team like to work with IT &mdash; tickets, or a
              walk-the-floor, tap-on-the-shoulder culture?&rdquo;</Card>
            <Card label="">
              <span className="text-white/45">If rapport is good:</span> &ldquo;What&rsquo;s kept
              the people who&rsquo;ve stayed here a long time?&rdquo;
            </Card>
            <p className="mt-3 text-[14.5px] text-white/50">
              Save salary for when <b className="text-white/70">they</b> raise it.
            </p>
          </section>
        )}

        {tab === 'salary' && (
          <section>
            <Eyebrow>Spec 08</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">Salary Play</h2>
            <Caution>
              <Eyebrow>Given their &ldquo;mediocre pay&rdquo; reputation</Eyebrow>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-[15.5px] text-white/80">
                <li>
                  <b>Your band:</b> ~$78K&ndash;$88K for Sys Admin II/III. May come in lower &mdash;
                  go in knowing that.
                </li>
                <li>
                  <b>Rule #1 &mdash; let them anchor:</b> &ldquo;I&rsquo;d rather understand the
                  full scope before we talk numbers &mdash; what range has the role
                  budgeted?&rdquo;
                </li>
                <li>
                  <b>If forced:</b> &ldquo;For the internal-owner role with the security and
                  documentation pieces we discussed, I&rsquo;d be looking in the low-to-mid 80s
                  &mdash; but I care more about fit and the total package than an exact
                  number.&rdquo;
                </li>
                <li>
                  <b>Levers if base is tight:</b> PTO, flex, <b>cert reimbursement</b> (flips
                  their &ldquo;no training&rdquo; weakness into your benefit), a 90-day
                  review-and-raise, title, mileage.
                </li>
                <li>
                  <b>Don&rsquo;t accept or reject in the room.</b> &ldquo;Let me think it
                  over&rdquo; is always fine. Know your floor before you go in.
                </li>
              </ul>
            </Caution>
          </section>
        )}

        {tab === 'dayof' && (
          <section>
            <Eyebrow>Spec 09</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">Day-Of</h2>
            <ul className="mt-3 list-disc space-y-2.5 pl-5 text-[16px] leading-relaxed text-white/80">
              <li>
                <b>Address:</b> 1300 E Memphis St, Broken Arrow, OK 74012. Drive it the day
                before; find the office entrance vs. shipping.
              </li>
              <li>
                <b>Arrive 10&ndash;15 min early</b> &mdash; not more, not less.
              </li>
              <li>
                <b>Bring:</b> 3&ndash;4 printed r&eacute;sum&eacute;s, pen, notepad with
                questions, folder, ID, references.
              </li>
              <li>
                <b>Phone on silent, in pocket</b> &mdash; not on the table.
              </li>
              <li>
                <b>Attire:</b> business-casual-plus (collared shirt/polo, pressed slacks, clean
                shoes). You may get a floor walk &mdash; skip the full suit.
              </li>
              <li>
                <b>First impression:</b> firm handshake, eye contact, use names, warm with
                reception.
              </li>
              <li>
                <b>Floor tour:</b> show interest, ask what the systems are, don&rsquo;t touch
                anything, note visible IT pain.
              </li>
              <li>
                <b>Close:</b> &ldquo;I&rsquo;m very interested &mdash; what are the next steps
                and your timeline?&rdquo;
              </li>
            </ul>
          </section>
        )}

        {tab === 'plan' && (
          <section>
            <Eyebrow>Spec 10</Eyebrow>
            <h2 className="mt-1 text-[26px] font-bold leading-tight">Game Plan</h2>
            <p className="mt-2 text-[15.5px] text-white/60">
              Tap items as you do them &mdash; the readiness meter up top fills as you go.
            </p>

            {CHECKLIST.map((g) => (
              <div key={g.group}>
                <div className="mt-5 mb-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-[#6fd3c4]">
                  {g.group}
                </div>
                <ul className="space-y-2">
                  {g.items.map((item) => {
                    const id = `${g.group}::${item}`
                    const isDone = done.has(id)
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={() => toggle(id)}
                          className="flex w-full min-h-[52px] items-start gap-3 rounded-2xl border border-white/10 bg-[#111318] p-3.5 text-left shadow-sm"
                        >
                          <span
                            className={`relative mt-0.5 h-6 w-6 flex-none rounded-md border-2 border-[#1e7a6f] ${
                              isDone ? 'bg-[#1e7a6f]' : ''
                            }`}
                          >
                            {isDone && (
                              <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full">
                                <path
                                  d="M6 12.5l4 4 8-9"
                                  fill="none"
                                  stroke="white"
                                  strokeWidth={2.4}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            )}
                          </span>
                          <span
                            className={`text-[16px] leading-snug ${
                              isDone ? 'text-white/40 line-through' : 'text-white/85'
                            }`}
                          >
                            {item}
                          </span>
                        </button>
                      </li>
                    )
                  })}
                </ul>
              </div>
            ))}

            <button
              type="button"
              onClick={() => setDone(new Set())}
              className="mt-5 rounded-xl border border-white/15 px-4 py-2.5 text-[14px] text-white/55"
            >
              Reset checklist
            </button>

            <Placard tone="hook">
              <Eyebrow>&#9733; The mindset</Eyebrow>
              <p className="mt-2 text-[16px] leading-relaxed text-white/85">
                You&rsquo;ve done every hard part of this job already. Walk in calm. You&rsquo;re
                not hoping they pick you &mdash; you&rsquo;re deciding whether the fit and the
                number work for <i>you</i>. That quiet, grounded competence is what closes
                manufacturing interviews. Go get it.
              </p>
            </Placard>
          </section>
        )}

        <footer className="mt-10 border-t border-white/10 pt-6 text-center text-[12.5px] text-white/35">
          Total Valve Prep &middot; confidential working page &middot; unlisted &amp; noindex
          <br />
          <a href="/totalvalve.pdf" className="mt-2 inline-block text-[#6fd3c4] underline">
            Open the PDF version
          </a>
        </footer>
      </div>
    </main>
  )
}
