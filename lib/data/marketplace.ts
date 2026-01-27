export type MarketplaceItem = {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  features: string[]
  price: number
  currency: string
  image?: string
  category: 'SaaS' | 'Micro-SaaS' | 'Middleware' | 'Workflow' | 'AI Tool' | 'Template' | 'Cloud Tool' | 'DevOps' | 'Security'
  stripePaymentLink?: string
  demoUrl?: string
  status: 'Available' | 'Coming Soon' | 'Beta' | 'In Development'
  pricingTiers?: {
    name: string
    price: number
    features: string[]
  }[]
}

export const marketplaceItems: MarketplaceItem[] = [
  // FLAGSHIP PRODUCT
  {
    id: 'xelora',
    slug: 'xelora',
    name: 'XELORA',
    tagline: 'Viral DNA Decoder',
    description: 'Decode Viral DNA and generate multi-platform content in seconds. Predicts viral potential before you post.',
    features: [
      'Viral Score™ Prediction',
      'Trend Discovery Engine',
      'Multi-Platform Content Generation',
      'Psychometric Viral Analysis'
    ],
    price: 0,
    currency: 'USD',
    category: 'SaaS',
    status: 'Available',
    demoUrl: 'https://getxelora.com',
    pricingTiers: [
      { name: 'Free', price: 0, features: ['5 campaigns/month', 'Basic analytics'] },
      { name: 'Pro', price: 29, features: ['50 campaigns/month', 'Full analytics', 'All platforms'] },
      { name: 'Agency', price: 79, features: ['Unlimited campaigns', 'White-label', 'API access'] }
    ]
  },

  // TIER 1: SaaS PRODUCTS (Subscriptions)
  {
    id: 'trial-revive',
    slug: 'trial-revive',
    name: 'TrialRevive',
    tagline: 'Recover Lost Trials',
    description: 'Diagnose why SaaS trial users abandon and generate personalized recovery playbooks. Turn 95% abandonment into recovered revenue.',
    features: [
      'AI abandonment classification',
      'Recovery playbook generation',
      'Drop-off pattern detection',
      'Integration with Segment/Mixpanel/Amplitude'
    ],
    price: 199,
    currency: 'USD',
    category: 'SaaS',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Starter', price: 199, features: ['Up to 1,000 trial users/month'] },
      { name: 'Growth', price: 499, features: ['5,000 trials', 'Slack alerts', 'A/B testing'] },
      { name: 'Scale', price: 999, features: ['Unlimited', 'Custom models', 'API access'] }
    ]
  },
  {
    id: 'compliance-ghost',
    slug: 'compliance-ghost',
    name: 'ComplianceGhost',
    tagline: 'SOC 2 on Autopilot',
    description: 'Automate SOC 2 audit evidence collection. Connect to your cloud infrastructure and capture screenshots/logs on schedule.',
    features: [
      'Automated evidence collection',
      'Control requirement mapping',
      'Scheduled screenshot capture',
      'Cloud infrastructure integration'
    ],
    price: 299,
    currency: 'USD',
    category: 'Security',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Starter', price: 299, features: ['Up to 50 controls'] },
      { name: 'Professional', price: 799, features: ['Up to 200 controls', 'Custom policies'] },
      { name: 'Enterprise', price: 1499, features: ['Unlimited controls', 'White-label reports'] }
    ]
  },
  {
    id: 'breaking-change',
    slug: 'breaking-change',
    name: 'BreakingChange',
    tagline: 'API Safety Net',
    description: 'Monitor third-party API changelogs and deprecation notices. Alert teams before production breaks.',
    features: [
      'API deprecation monitoring',
      'Breaking change alerts',
      'Changelog aggregation',
      'Integration impact analysis'
    ],
    price: 99,
    currency: 'USD',
    category: 'DevOps',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Starter', price: 99, features: ['Up to 10 APIs'] },
      { name: 'Pro', price: 249, features: ['Up to 50 APIs', 'Slack/PagerDuty alerts'] },
      { name: 'Enterprise', price: 499, features: ['Unlimited APIs', 'Custom webhooks'] }
    ]
  },
  {
    id: 'prompt-firewall',
    slug: 'prompt-firewall',
    name: 'Prompt Injection Firewall',
    tagline: 'Protect AI Apps',
    description: 'Protect AI-powered applications from prompt injection attacks. Scan inputs for adversarial patterns.',
    features: [
      'Real-time injection detection',
      'Output compromise monitoring',
      'Custom rule engine',
      'Integration with LLM APIs'
    ],
    price: 299,
    currency: 'USD',
    category: 'Security',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Starter', price: 299, features: ['Up to 100K requests/month'] },
      { name: 'Growth', price: 799, features: ['Up to 1M requests/month', 'Custom rules'] },
      { name: 'Enterprise', price: 1299, features: ['Unlimited requests', 'On-premise deployment'] }
    ]
  },
  {
    id: 'ai-cost-optimizer',
    slug: 'ai-cost-optimizer',
    name: 'AI Agent Cost Optimizer',
    tagline: 'Track LLM Spend',
    description: 'Per-conversation and per-agent cost visibility for AI deployments. Identify waste and enable budget controls.',
    features: [
      'Real-time cost tracking',
      'Per-agent/per-conversation analytics',
      'Budget alerts',
      'Provider cost comparison'
    ],
    price: 199,
    currency: 'USD',
    category: 'SaaS',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Starter', price: 199, features: ['Up to 10K API calls/month'] },
      { name: 'Growth', price: 499, features: ['Up to 100K calls', 'Cost forecasting'] },
      { name: 'Enterprise', price: 899, features: ['Unlimited calls', 'Custom dashboards'] }
    ]
  },
  {
    id: 'schema-drift',
    slug: 'schema-drift',
    name: 'Schema Drift Detector',
    tagline: 'Data Pipeline Guardian',
    description: 'Monitor upstream data sources for schema changes. Alert data teams before pipelines break.',
    features: [
      'Schema change detection',
      'Column type monitoring',
      'Pipeline impact analysis',
      'Automated alerts'
    ],
    price: 149,
    currency: 'USD',
    category: 'DevOps',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Starter', price: 149, features: ['Up to 10 data sources'] },
      { name: 'Professional', price: 399, features: ['Up to 50 sources', 'Slack integration'] },
      { name: 'Enterprise', price: 699, features: ['Unlimited sources', 'API access'] }
    ]
  },
  {
    id: 'vendor-scope',
    slug: 'vendor-scope',
    name: 'VendorScope',
    tagline: 'Vendor Risk Assessment',
    description: 'Automate vendor security assessments with pre-built intelligence on common SaaS tools.',
    features: [
      'Automated risk scoring',
      'Pre-built SaaS intelligence',
      'Custom risk frameworks',
      'Vendor documentation analysis'
    ],
    price: 249,
    currency: 'USD',
    category: 'Security',
    status: 'Coming Soon'
  },
  {
    id: 'competitive-intel',
    slug: 'competitive-intel',
    name: 'Competitive Feature Intelligence',
    tagline: 'Track Competitors',
    description: 'Automatically track competitor feature releases, pricing changes, and positioning shifts.',
    features: [
      'Feature release monitoring',
      'Pricing change alerts',
      'Changelog aggregation',
      'Positioning analysis'
    ],
    price: 149,
    currency: 'USD',
    category: 'SaaS',
    status: 'Coming Soon'
  },
  {
    id: 'incident-postmortem',
    slug: 'incident-postmortem',
    name: 'Incident Postmortem Generator',
    tagline: 'Auto-Generate Postmortems',
    description: 'Auto-generate incident postmortems from Slack threads, PagerDuty alerts, and deployment logs.',
    features: [
      'Slack thread aggregation',
      'PagerDuty integration',
      'AI narrative construction',
      'Action item extraction'
    ],
    price: 99,
    currency: 'USD',
    category: 'DevOps',
    status: 'Coming Soon'
  },
  {
    id: 'tech-debt',
    slug: 'tech-debt',
    name: 'Technical Debt Quantifier',
    tagline: 'Debt → Business Impact',
    description: 'Quantify technical debt by correlating code quality metrics with engineering velocity.',
    features: [
      'Code quality correlation',
      'Velocity impact analysis',
      'Business impact translation',
      'Refactoring prioritization'
    ],
    price: 249,
    currency: 'USD',
    category: 'DevOps',
    status: 'Coming Soon'
  },
  {
    id: 'oauth-token-manager',
    slug: 'oauth-token-manager',
    name: 'OAuth Token Manager',
    tagline: 'Prevent Zombie Automations',
    description: 'A standalone dashboard for Creators and Agencies to manage, monitor, and auto-refresh social media OAuth tokens.',
    features: [
      'Multi-Platform Auth',
      'Health Dashboard',
      'Auto-Refresh Daemon',
      'Secure API Access'
    ],
    price: 19,
    currency: 'USD',
    category: 'Micro-SaaS',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Monthly', price: 19, features: ['Up to 50 accounts'] },
      { name: 'Lifetime', price: 149, features: ['Unlimited accounts', 'Self-hosted option'] }
    ]
  },

  // TIER 2: MICRO-SAAS (Hybrid Pricing)
  {
    id: 'invoice-generator',
    slug: 'invoice-generator',
    name: 'Invoice Generator',
    tagline: 'Freelancer Invoicing',
    description: 'Simple, professional invoicing for freelancers and small businesses.',
    features: [
      'Unlimited invoices',
      '5 customizable templates',
      'Client management',
      'Payment tracking'
    ],
    price: 9,
    currency: 'USD',
    category: 'Micro-SaaS',
    status: 'In Development',
    pricingTiers: [
      { name: 'Monthly', price: 9, features: ['Unlimited invoices', '5 templates'] },
      { name: 'Lifetime', price: 79, features: ['All features forever', 'Future updates'] }
    ]
  },
  {
    id: 'pact-pull',
    slug: 'pact-pull',
    name: 'PactPull',
    tagline: 'Meeting Commitments Tracker',
    description: 'Extract actionable commitments from meeting recordings and convert them into tracked tasks.',
    features: [
      'Meeting transcription',
      'Commitment extraction',
      'Task creation automation',
      'Deadline tracking'
    ],
    price: 19,
    currency: 'USD',
    category: 'Micro-SaaS',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Monthly', price: 19, features: ['Up to 20 meetings/month'] },
      { name: 'Lifetime', price: 149, features: ['Unlimited meetings', 'Priority support'] }
    ]
  },
  {
    id: 'code-review-bias',
    slug: 'code-review-bias',
    name: 'Code Review Bias Detector',
    tagline: 'PR Quality Analysis',
    description: 'Analyze code review patterns to detect bias, inconsistency, and quality issues.',
    features: [
      'Review pattern analysis',
      'Bias detection',
      'Quality metrics',
      'Team insights'
    ],
    price: 29,
    currency: 'USD',
    category: 'Micro-SaaS',
    status: 'Coming Soon',
    pricingTiers: [
      { name: 'Monthly', price: 29, features: ['Up to 100 PRs/month'] },
      { name: 'Lifetime', price: 249, features: ['Unlimited PRs', 'Custom reports'] }
    ]
  },
  {
    id: 'browser-compliance',
    slug: 'browser-compliance',
    name: 'Browser Extension Compliance',
    tagline: 'IT Security Visibility',
    description: 'Give IT teams visibility into browser extensions across the organization and enforce compliance.',
    features: [
      'Extension inventory',
      'Risk scoring by permissions',
      'Compliance policy enforcement',
      'Real-time monitoring'
    ],
    price: 49,
    currency: 'USD',
    category: 'Micro-SaaS',
    status: 'Coming Soon'
  },

  // TIER 3: CONTENT PRODUCTS (One-Time)
  {
    id: 'n8n-templates',
    slug: 'n8n-templates',
    name: 'n8n Workflow Templates',
    tagline: 'Automate Enterprise Logic',
    description: 'Production-ready n8n workflows for serious businesses. Battle-tested automation patterns.',
    features: [
      'Social Media Auto-Posting',
      'Lead Enrichment Pipeline',
      'Customer Onboarding Automation',
      'Error Handling & Retry Logic'
    ],
    price: 49,
    currency: 'USD',
    category: 'Workflow',
    status: 'Available',
    stripePaymentLink: 'https://buy.stripe.com/test_n8n_templates'
  },
  {
    id: 'ai-prompt-templates',
    slug: 'ai-prompt-templates',
    name: 'AI Prompt Templates',
    tagline: 'Engineer Better Output',
    description: 'Curated library of high-performance prompts for GPT-4, Claude, and Gemini.',
    features: [
      '50+ Tested System Prompts',
      'Chain-of-Thought Patterns',
      'Marketing & Copywriting Pack',
      'Coding & Refactoring Assistants'
    ],
    price: 29,
    currency: 'USD',
    category: 'Template',
    status: 'Available',
    stripePaymentLink: 'https://buy.stripe.com/test_ai_prompts'
  },
  {
    id: 'cloud-ledger',
    slug: 'cloud-ledger',
    name: 'Cloud Ledger',
    tagline: 'Azure Waste Audit',
    description: 'Professional Azure audit tool to detect waste instantly. Read-only, secure, agent-free.',
    features: [
      'Full Resource Inventory',
      'Waste Detection (Idle VMs, Disks)',
      'Security Posture Overview',
      'Exportable Reports'
    ],
    price: 49,
    currency: 'USD',
    category: 'Cloud Tool',
    status: 'Available',
    stripePaymentLink: '/cloud-ledger'
  },

  // TIER 4: SPECIALIZED (Niche)
  {
    id: 'async-video',
    slug: 'async-video',
    name: 'Async Video Response',
    tagline: 'Eliminate Meetings',
    description: 'Threaded async video conversations. Reply to specific moments, eliminate unnecessary sync meetings.',
    features: [
      'Video threading',
      'Moment-specific replies',
      'Meeting elimination',
      'Async collaboration'
    ],
    price: 19,
    currency: 'USD',
    category: 'Micro-SaaS',
    status: 'Coming Soon'
  },
  {
    id: 'compliance-changelog',
    slug: 'compliance-changelog',
    name: 'Compliance Changelog',
    tagline: 'Regulatory Monitoring',
    description: 'Monitor regulatory changes, filter by relevance, and deliver plain-language summaries.',
    features: [
      'Federal & state monitoring',
      'Relevance filtering',
      'Plain-language summaries',
      'Compliance deadlines'
    ],
    price: 99,
    currency: 'USD',
    category: 'SaaS',
    status: 'Coming Soon'
  }
]

// Helper functions for filtering
export function getProductsByCategory(category: MarketplaceItem['category']) {
  return marketplaceItems.filter(item => item.category === category)
}

export function getProductsByStatus(status: MarketplaceItem['status']) {
  return marketplaceItems.filter(item => item.status === status)
}

export function getAvailableProducts() {
  return marketplaceItems.filter(item => item.status === 'Available')
}

export function getComingSoonProducts() {
  return marketplaceItems.filter(item => item.status === 'Coming Soon')
}
