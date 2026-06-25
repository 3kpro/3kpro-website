export type PreviewConcept = {
  id: 'v1' | 'v2' | 'v3' | 'v4' | 'v5' | 'v6'
  name: string
  label: string
  verdict: string
  route: string
  template?: 'standard' | 'editorial' | 'casefile' | 'drawer'
  palette: {
    bg: string
    surface: string
    surfaceAlt: string
    text: string
    muted: string
    line: string
    accent: string
    accentText: string
  }
  radius: string
  kicker: string
  headline: string
  subhead: string
  primaryAction: string
  secondaryAction: string
  logoSteps: string[]
  motionNote: string
  sections: {
    title: string
    copy: string
  }[]
  metrics: {
    value: string
    label: string
  }[]
  transitionSpecs: string[]
  visualRules: string[]
  implementationNotes: string[]
}

export const concepts: PreviewConcept[] = [
  {
    id: 'v1',
    name: 'Precision Consulting',
    label: 'Simplest / Trust First',
    verdict: 'Best candidate for the main homepage.',
    route: '/preview/v1',
    palette: {
      bg: '#f6f3ee',
      surface: '#fdfbf7',
      surfaceAlt: '#ffffff',
      text: '#111827',
      muted: '#59616f',
      line: '#d8d0c4',
      accent: '#0f766e',
      accentText: '#ffffff',
    },
    radius: 'rounded-md',
    kicker: 'Tulsa / Broken Arrow / systems that earn their keep',
    headline: 'Calm software infrastructure for real businesses.',
    subhead:
      'A restrained consulting front door: clear services, hard numbers, and fast contact. It sells competence before it sells personality.',
    primaryAction: 'Book strategy call',
    secondaryAction: 'View pricing',
    logoSteps: ['Lines draw in', '3K resolves', 'Nav unlocks'],
    motionNote: 'Intro lasts 1.2s once per session, then collapses into the sticky nav mark.',
    sections: [
      {
        title: 'Website launch',
        copy:
          'A clean business site, local SEO basics, contact path, hosting, and handoff without mystery retainers.',
      },
      {
        title: 'Automation sprint',
        copy:
          'One painful workflow mapped, built, tested, and handed over with measurable time saved.',
      },
      {
        title: 'AI workspace',
        copy:
          'Private document search and internal assistant workflows without sci-fi theater.',
      },
    ],
    metrics: [
      { value: '2010', label: 'Operating since' },
      { value: '24h', label: 'Response target' },
      { value: '$899+', label: 'Website entry' },
    ],
    transitionSpecs: ['Soft fade plus 16px vertical lift', 'Section anchors use eased scroll', 'Contact can slide in without route change'],
    visualRules: ['No chatbot icons or sparkles', 'Use lines, grids, proof blocks, and monogram geometry', 'Whitespace carries the premium feel'],
    implementationNotes: ['Lowest animation risk', 'Strongest SMB trust posture', 'Best production homepage baseline'],
  },
  {
    id: 'v2',
    name: 'Momentum Studio',
    label: 'Kinetic / Growth Led',
    verdict: 'Best if the marketplace and product ecosystem become central.',
    route: '/preview/v2',
    palette: {
      bg: '#0b1117',
      surface: '#101923',
      surfaceAlt: '#16202b',
      text: '#ecfeff',
      muted: '#a6b5bd',
      line: '#24414a',
      accent: '#14b8a6',
      accentText: '#041014',
    },
    radius: 'rounded-lg',
    kicker: 'Digital systems / launch assets / software products',
    headline: 'A sharper engine for launches, leads, and internal tools.',
    subhead:
      'More kinetic than corporate, but still disciplined. Use this if 3KPRO needs to feel active, current, and commercially aggressive.',
    primaryAction: 'Start discovery',
    secondaryAction: 'Explore products',
    logoSteps: ['Signal sweep', 'Monogram snap', 'Content reveal'],
    motionNote: 'Logo sweep becomes a horizontal route transition line across the viewport.',
    sections: [
      {
        title: 'Launch assets',
        copy:
          'Sites, landing pages, product pages, and market-facing infrastructure built around conversion paths.',
      },
      {
        title: 'Workflow systems',
        copy:
          'Automation and dashboards for teams losing money to repetitive manual processes.',
      },
      {
        title: 'SaaS ecosystem',
        copy:
          'Xelora, Cloud Ledger, FairMerge, and custom MVP work presented as one practical catalog.',
      },
    ],
    metrics: [
      { value: '3', label: 'Active products' },
      { value: '$49+', label: 'Product entry' },
      { value: '4', label: 'Build lanes' },
    ],
    transitionSpecs: ['Thin teal route wipe', 'Cards stagger 80ms on entry', 'Logo intro reverses on preview exit'],
    visualRules: ['Energy from motion, not mascots', 'Teal only for calls to action and status', 'No generic AI face, chip, or constellation'],
    implementationNotes: ['Strong brand recall', 'More visual risk than v1', 'Good for a productized-services push'],
  },
  {
    id: 'v3',
    name: 'Operations Console',
    label: 'Dense / Technical',
    verdict: 'Best for technical credibility, but colder for local SMB buyers.',
    route: '/preview/v3',
    palette: {
      bg: '#0a0c10',
      surface: '#11151b',
      surfaceAlt: '#151a21',
      text: '#f8fafc',
      muted: '#9aa4b2',
      line: '#303743',
      accent: '#f59e0b',
      accentText: '#111827',
    },
    radius: 'rounded',
    kicker: 'Operational command center for SMB technology',
    headline: 'Technology work shown like an operating system.',
    subhead:
      'A dense, business-like console for buyers who care about evidence, process, delivery status, and systems thinking.',
    primaryAction: 'Request proposal',
    secondaryAction: 'See service matrix',
    logoSteps: ['Boot check', 'Grid lock', 'System ready'],
    motionNote: 'Intro behaves like a clean system boot: readiness states only, no fake terminal theater.',
    sections: [
      {
        title: 'Status metrics',
        copy:
          'Years operating, response expectations, delivery lanes, and live product links presented up front.',
      },
      {
        title: 'Service matrix',
        copy:
          'Each service is a module with scope, entry price, deliverables, and escalation path.',
      },
      {
        title: 'Engagement flow',
        copy:
          'Inquiry, technical evaluation, proposal, build, handoff, support. No fog machine required.',
      },
    ],
    metrics: [
      { value: '7', label: 'Operating silos' },
      { value: '4', label: 'Core systems' },
      { value: '0', label: 'Mystery boxes' },
    ],
    transitionSpecs: ['Panels crossfade with 120ms delay', 'Stats count up after viewport entry', 'Sticky command bar preserves context'],
    visualRules: ['Dashboard cues without fake data theater', 'Amber only for priority states', 'Use tables, rails, and proof strips'],
    implementationNotes: ['Strong technical authority', 'Risk: too cold for SMB leads', 'Useful as design-lab or admin-inspired variant'],
  },
  {
    id: 'v4',
    name: 'Studio Authority',
    label: 'Awwwards / Executive',
    verdict: 'Best visual benchmark if 3KPRO wants to feel premium, deliberate, and less templated.',
    route: '/preview/v4',
    template: 'editorial',
    palette: {
      bg: '#090909',
      surface: '#111111',
      surfaceAlt: '#181818',
      text: '#f7f4ee',
      muted: '#a19c92',
      line: '#2a2926',
      accent: '#f7f4ee',
      accentText: '#090909',
    },
    radius: 'rounded-lg',
    kicker: 'Independent systems studio / Tulsa to remote teams',
    headline: 'Systems work with taste, restraint, and teeth.',
    subhead:
      'A calmer, more expensive-feeling front door for 3KPRO: no random motion, no fake futuristic props, no dashboard cosplay.',
    primaryAction: 'Start serious brief',
    secondaryAction: 'Review service lanes',
    logoSteps: ['Warm field', 'Soft wordmark', 'Layered reveal'],
    motionNote: 'The intro uses blur, scale, and mask-like text movement. No floating line, no glitch theater.',
    sections: [
      {
        title: 'Strategy first',
        copy:
          'A concise diagnostic of the business constraint before anyone touches code, tools, or another pretty homepage.',
      },
      {
        title: 'System build',
        copy:
          'Websites, automations, and internal tools presented as one operating layer instead of disconnected services.',
      },
      {
        title: 'Clean handoff',
        copy:
          'Documentation, ownership, and next-step options are visible. No dependency maze dressed up as support.',
      },
    ],
    metrics: [
      { value: '1', label: 'Calm front door' },
      { value: '3', label: 'Service lanes' },
      { value: '0', label: 'AI clip-art sins' },
    ],
    transitionSpecs: ['Warm intro resolves with blur fade', 'Layered panels settle into depth', 'Service rows lift in with restrained easing'],
    visualRules: ['No floating divider lines', 'No generic AI shapes', 'Depth comes from layered planes, shadows, and spacing'],
    implementationNotes: ['Dedicated V4 renderer', 'Best current visual benchmark', 'Still needs real proof content before homepage use'],
  },
  {
    id: 'v5',
    name: 'Pure Systems',
    label: 'Immersive / Symmetric',
    verdict: 'Best if 3KPRO wants a premium studio feel without becoming another generic AI-dark website.',
    route: '/preview/v5',
    template: 'casefile',
    palette: {
      bg: '#08080a',
      surface: '#151515',
      surfaceAlt: '#1f1f21',
      text: '#ffffff',
      muted: '#9b9ba4',
      line: '#2b2b31',
      accent: '#ffffff',
      accentText: '#08080a',
    },
    radius: 'rounded-full',
    kicker: 'Available for new projects / business systems studio',
    headline: '3KPRO Systems',
    subhead:
      'A dark, symmetrical, grid-led studio direction with a pulsating name glow, floating circular logo, and a right-side project drawer.',
    primaryAction: 'Start a Project',
    secondaryAction: 'View capabilities',
    logoSteps: ['Pulsing name glow', 'Orbit seal spins', 'Drawer slides in'],
    motionNote: 'Motion is atmospheric and deliberate: the glow breathes behind the headline, a blueprint lock-frame pulses around the wordmark, the seal text spins in place, sections reveal softly, and the contact drawer slides from the right.',
    sections: [
      {
        title: 'Clean systems',
        copy:
          'Strategy, website, automation, and handoff work presented as one calm operating surface.',
      },
      {
        title: 'Digital solutions',
        copy:
          'Capability modules reveal through hover, focus, and scroll instead of loading as a static card wall.',
      },
      {
        title: 'Right-side drawer',
        copy:
          'Start a Project opens a contact sidebar from the right while preserving the page context.',
      },
    ],
    metrics: [
      { value: '01', label: 'Primary glow system' },
      { value: '03', label: 'Reveal sections' },
      { value: '01', label: 'Project drawer' },
    ],
    transitionSpecs: ['Circular glow pulses directly behind the company name', 'A thin blueprint lock-frame pulses around the hero wordmark', 'Blueprint seal text spins in place without wobble, bobbing, or blur fade'],
    visualRules: ['No large white center fills', 'Symmetric grid and blueprint-style circular geometry only', 'No AI cliche icons or decorative fake tech props'],
    implementationNotes: ['Dedicated V5 renderer', 'Includes functional right-side drawer', 'Needs real copy polish before homepage use'],
  },
  {
    id: 'v6',
    name: 'Conversion Drawer',
    label: 'Lead Capture / Service First',
    verdict: 'Best business tool: less artistic, more likely to turn interest into a qualified conversation.',
    route: '/preview/v6',
    template: 'drawer',
    palette: {
      bg: '#f7f8f6',
      surface: '#ffffff',
      surfaceAlt: '#eef2ef',
      text: '#13201b',
      muted: '#607067',
      line: '#d4ddd6',
      accent: '#0f766e',
      accentText: '#ffffff',
    },
    radius: 'rounded-md',
    kicker: 'Scope quickly / quote honestly / build cleanly',
    headline: 'A cleaner path from problem to paid engagement.',
    subhead:
      'This keeps the Figma template contact drawer idea and makes it useful: service scope, urgency, budget band, and decision stage before the first call.',
    primaryAction: 'Scope my project',
    secondaryAction: 'See packages',
    logoSteps: ['Mark enters', 'Scope drawer', 'CTA locks'],
    motionNote: 'The drawer slides over the page with a muted backdrop, keeping context visible while the user qualifies the request.',
    sections: [
      {
        title: 'Pick the lane',
        copy:
          'Website, automation, AI workspace, custom software, marketplace/product, or technical cleanup.',
      },
      {
        title: 'Set the range',
        copy:
          'Simple scope chips replace vague contact forms and prevent mismatched expectations before the call.',
      },
      {
        title: 'Book the next step',
        copy:
          'The page closes with one practical action instead of asking visitors to admire the design.',
      },
    ],
    metrics: [
      { value: '6', label: 'Scope chips' },
      { value: '3m', label: 'Form target' },
      { value: '1', label: 'Clean next step' },
    ],
    transitionSpecs: ['Drawer slide with 20px overshoot', 'Backdrop fades to 72 percent', 'Form sections reveal after drawer settles'],
    visualRules: ['No decoration competing with CTA', 'Use controls buyers understand', 'Keep the page bright, direct, and operational'],
    implementationNotes: ['Most commercially useful', 'Least dramatic visually', 'Best candidate for the real contact flow'],
  },
]

export function getConcept(id: PreviewConcept['id']) {
  return concepts.find((concept) => concept.id === id) ?? concepts[0]
}
