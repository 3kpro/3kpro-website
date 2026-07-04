# Client Website Preview Process

Purpose: move a website lead from inquiry to payout without relying on memory, scattered chat context, or unpaid production work.

Public entrypoint: `https://3kpro.services/sitepreview`

Prospect preview example: `https://3kpro.services/sitepreview/horizon-lawn`

Payment entrypoint: `https://3kpro.services/pay`

## Tool Stack

- Website intake: `/sitepreview` structured request form.
- Lead follow-up: James direct email, phone, and Jeremy Telegram drafting workflow.
- CRM: HubSpot for contact, company, deal stage, follow-up date, preview URL, deposit status, and final balance.
- Payments: Stripe Quick Pay through `/pay` for deposit, invoice balance, or custom service payment.
- Prospect preview pages: reusable `/sitepreview/[slug]` route backed by `lib/sitePreviews.ts`; keep prospect pages `noindex`.
- MainBrain preview registry: mirror completed preview URLs in `C:\DEV\_3KPRO-GENERAL\MainBrain\PLAYBOOKS\Prospect_Preview_Registry.md` so Jeremy can find them through MainBrain memory search.
- Preview/build: local Next.js repo, Vercel preview deployments, production deploy only after explicit approval.
- Handoff: launch notes, owner instructions, credentials checklist, and follow-up task list.

## Pipeline

| Stage | Owner | Input | Output | Gate |
| --- | --- | --- | --- | --- |
| 1. Inquiry | James / Jeremy | Lead, website, service area, pain angle | CRM record and first response | Contact info captured |
| 2. Fit check | James / Jeremy | Current site, listings, offer, visible gaps | Fit / fix / build recommendation | Clear business angle |
| 3. Preview request | Client / James | `/sitepreview` form or pasted equivalent | Preview brief | Enough context to scope |
| 4. Preview creation | James | Preview brief or researched prospect | Prospect preview URL, concept, structure, quote path | No production promise yet |
| 5. Review call | James / Client | Preview and recommendation | Approved scope or closed lead | Client confirms direction |
| 6. Deposit | Client | `/pay` deposit link | Paid milestone | No build without deposit |
| 7. Build | James / 3KPRO | Approved scope | Working site, revisions, docs | Reviewable preview URL |
| 8. Final approval | Client | Vercel preview or staging URL | Launch approval | Explicit approval recorded |
| 9. Final balance | Client | `/pay` invoice/custom payment | Paid balance | No final handoff before payment unless approved |
| 10. Launch and payout | James | Domain/DNS/content approvals | Production launch and internal closeout | CRM updated, docs delivered |

## CRM Fields

- Contact name
- Email
- Phone
- Company
- Current website
- Service area
- Lead source
- Pain angle
- Preview status
- Preview URL
- Proposed package
- Quoted amount
- Deposit status
- Final balance status
- Next follow-up date
- Last touch summary

## Preview Brief Minimum

- Business name and contact.
- Current website or social profile.
- Core services and offer.
- Primary customer action: call, quote, booking, payment, or consultation.
- Service area.
- Competitors or style references if available.
- Timeline and urgency.
- Known constraints: domain ownership, hosting, logo, photos, access, budget.

## Read-The-Room Design Rule

The first viewport must communicate the prospect's business category before anyone reads the paragraphs.

- Match the visual system to the client, not to 3KPRO. Lawn care should feel like mowing, yards, sprinklers, crews, and estimate requests. A mobile mechanic should feel like roadside or driveway repair, tools, trucks, urgency, and booking.
- Do not reuse a tech-grid or dashboard aesthetic for local trade previews unless that is actually the client's brand.
- Use stock images only as honest placeholders when the client has no owned photos. Do not imply placeholder photos are the client's real work.
- Reject off-industry images. If the image looks like agriculture, corporate SaaS, construction, or generic lifestyle when the client is residential lawn care, it fails.
- Pair the hero and CTA with how the business makes money: request estimate, call now, book service, upload photos, schedule consultation, or pay deposit.
- The sales angle still matters, but it is secondary to immediate category clarity.

## Prospect Preview Page Rules

- Use a clean slug, for example `/sitepreview/horizon-lawn`.
- Do not claim affiliation with the prospect.
- Add a visible note when the page is a 3KPRO concept preview.
- Use only public facts unless the prospect provides private material.
- Keep the page `noindex` so it is a sales asset, not an indexed impersonation risk.
- Prefer business-safe language: "observed opportunity" instead of public shaming.
- Include the exact sales angle James will use: broken website, unclear quote path, inconsistent listings, weak service positioning, or missing trust proof.
- Pass the read-the-room gate: a stranger should know the business category in three seconds without reading body copy.
- Use industry-correct visuals and CTAs; replace generic placeholders before client delivery whenever better assets are available.

## Payment Rules

- Discovery and lightweight fit checks can happen before payment.
- A polished preview can be offered as a sales asset, but production build work starts only after the first paid milestone.
- Standard website deposit path starts at `$500`.
- Final balance should be paid before final production launch or immediately before final handoff unless James explicitly overrides it.
- Any override must be written in the CRM note.

## Client Scripts

### Inquiry Reply

Subject: Website preview next step

Hi [Name],

Thanks for reaching out. The cleanest next step is a focused website preview so we can confirm the best angle before turning this into a full build.

Please send the business name, current site, core services, service area, and the main action you want visitors to take. You can use this page:

https://3kpro.services/sitepreview

Once I have that, I will review the current web presence, identify the strongest opportunity, and come back with the recommended path.

Best,
James / 3KPRO

### Preview Ready

Subject: Website preview ready

Hi [Name],

I reviewed the current presence and put together the practical direction I would recommend. The main opportunity is [angle].

The next step would be [package / scope], starting with a deposit through Quick Pay so I can move from preview into production work:

https://3kpro.services/pay

If this direction looks right, reply with approval and I will lock the build path.

Best,
James / 3KPRO

### Follow-Up Call Script

Hi [Name], this is James with 3KPRO. I sent over the website preview direction yesterday. The short version is that I think your biggest opportunity is [angle]. I wanted to see if that matched what you are seeing in the business and whether it is worth turning into a focused build.

### Separation Note

Subject: Closing the loop

Hi [Name],

I wanted to close the loop on the website preview. It may be that you have this handled for now.

If timing changes, the recommended path is still [angle / package]. The main thing I would not leave unattended is [specific risk].

Best,
James / 3KPRO

## Definition Of Done

- Lead exists in HubSpot.
- Preview request or equivalent brief is captured.
- Pain angle is written in plain language.
- Read-the-room visual gate passes: category, service, and CTA are obvious in the first viewport, and no off-industry imagery remains.
- Preview or recommendation is sent.
- Preview URL is mirrored to the MainBrain prospect preview registry.
- Next action is either deposit, follow-up, or closed-lost.
- Payment status is recorded.
- Launch and handoff are not treated as complete until docs and CRM notes are updated.
