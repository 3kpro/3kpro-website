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
  category: 'SaaS' | 'Micro-SaaS' | 'Middleware' | 'Workflow' | 'AI Tool' | 'Template' | 'Cloud Tool'
  stripePaymentLink?: string
  demoUrl?: string
  status: 'Available' | 'Coming Soon' | 'Beta'
}

export const marketplaceItems: MarketplaceItem[] = [
  {
    id: 'n8n-templates',
    slug: 'n8n-templates',
    name: 'n8n Workflow Templates',
    tagline: 'Automate Enterprise Logic',
    description: 'Production-ready n8n workflows for serious businesses. Includes Social Media Automation, Lead Enrichment, and CRM Synchronization patterns used by our own agency.',
    features: [
      'Social Media Auto-Posting Workflow',
      'Lead Enrichment Pipeline (Apollo -> CRM)',
      'Customer Onboarding Automation',
      'Error Handling & Retry Logic Included'
    ],
    price: 49,
    currency: 'USD',
    category: 'Workflow',
    status: 'Available'
  },
  {
    id: 'azure-optimizer',
    slug: 'azure-optimizer',
    name: 'Azure Optimizer',
    tagline: 'Slash Cloud Costs',
    description: 'Intelligent resource analysis tool that scans your Azure environment to identify unused resources, over-provisioned VMs, and optimization opportunities.',
    features: [
      'Idle Resource Detection',
      'VM Rightsizing Recommendations',
      'Storage Tier Optimization',
      'Cost-Savings Report Generator'
    ],
    price: 99,
    currency: 'USD',
    category: 'Cloud Tool',
    status: 'Coming Soon'
  },
  {
    id: 'ai-prompt-templates',
    slug: 'ai-prompt-templates',
    name: 'AI Prompt Templates',
    tagline: 'Engineer Better Output',
    description: 'A curated library of high-performance system instructions and few-shot prompts for GPT-4, Claude 3.5 Sonnet, and Gemini Pro. Optimized for coding, marketing, and analysis.',
    features: [
      '50+ Tested System Prompts',
      'Chain-of-Thought Patterns',
      'Marketing & Copywriting Pack',
      'Coding & Refactoring Assistants'
    ],
    price: 29,
    currency: 'USD',
    category: 'Template',
    status: 'Available'
  },
  {
    id: 'ai-prompt-generator',
    slug: 'ai-prompt-generator',
    name: 'AI Prompt Generator',
    tagline: 'Perfect Prompts, Instantly',
    description: 'Stop struggling with prompt engineering. This tool generates scientifically optimized system instructions based on your simple goal description.',
    features: [
      'Automatic Few-Shot Generation',
      'Persona & Context Injection',
      'Output Format Optimization (JSON/Markdown)',
      'Compatible with OpenAI, Anthropic & Google'
    ],
    price: 39,
    currency: 'USD',
    category: 'AI Tool',
    status: 'Beta'
  }
]
