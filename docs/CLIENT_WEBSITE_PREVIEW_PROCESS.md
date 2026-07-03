# Client Website Preview Process

Purpose: move a website lead from inquiry to payout without relying on memory, scattered chat context, or unpaid production work.

Public entrypoint: `https://3kpro.services/sitepreview`

Payment entrypoint: `https://3kpro.services/pay`

## Tool Stack

- Website intake: `/sitepreview` structured request form.
- Lead follow-up: James direct email, phone, and Jeremy Telegram drafting workflow.
- CRM: HubSpot for contact, company, deal stage, follow-up date, preview URL, deposit status, and final balance.
- Payments: Stripe Quick Pay through `/pay` for deposit, invoice balance, or custom service payment.
- Preview/build: local Next.js repo, Vercel preview deployments, production deploy only after explicit approval.
- Handoff: launch notes, owner instructions, credentials checklist, and follow-up task list.

## Pipeline

| Stage | Owner | Input | Output | Gate |
| --- | --- | --- | --- | --- |
| 1. Inquiry | James / Jeremy | Lead, website, service area, pain angle | CRM record and first response | Contact info captured |
| 2. Fit check | James / Jeremy | Current site, listings, offer, visible gaps | Fit / fix / build recommendation | Clear business angle |
| 3. Preview request | Client / James | `/sitepreview` form or pasted equivalent | Preview brief | Enough context to scope |
| 4. Preview creation | James | Preview brief | Concept, structure, quote path | No production promise yet |
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
- Preview or recommendation is sent.
- Next action is either deposit, follow-up, or closed-lost.
- Payment status is recorded.
- Launch and handoff are not treated as complete until docs and CRM notes are updated.
