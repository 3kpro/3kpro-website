# AGENT CONTRACT — SYSTEM AUTHORITY (3kpro.services Company Site)

This contract governs all AI agents, tools, and automated processes working on the 3kpro.services company website and marketplace.

## ENTRY REQUIREMENTS
An agent MUST, before performing any work:
- Read `SYSTEM/VISION.md` (canonical source of truth for company strategy)
- Read `SYSTEM/TASKS.md` (active company-level tasks)
- Confirm the task exists and is marked OPEN (not completed)
- Verify this is a **company-level task** (not XELORA product or Dev/ product task)

## PROJECT SCOPE
This workspace manages **3kpro.services company site only:**
- Company website (homepage, services, about)
- Marketplace features (product listings, Stripe integration)
- SEO & Google presence (Search Console, Ads, Analytics, Business Profile)
- Brand management (company-level branding, not product branding)

**This workspace does NOT manage:**
- XELORA product → See `landing-page/docs/SYSTEM/`
- Dev/ products → See `Dev/products/[product]/TASKS.md`

## DEVELOPMENT ENVIRONMENT
When running the dev server or testing:
- **Port:** Always use port 3001 (to avoid conflict with XELORA on 3000)
- **Test Credentials:** Use appropriate test account for 3kpro.services
- **Codebase:** `3kpro-website/` directory only

## SCOPE OF ACTION
An agent MAY:
- Work only on the task explicitly defined in `SYSTEM/TASKS.md`
- Modify only files required to complete that task
- Use tools, terminals, or external access only if required by the task
- Access Google services (Search Console, Ads, Analytics) for company setup

An agent MAY NOT:
- Invent new tasks
- Modify SYSTEM files (except TASKS.md and CHANGELOG.md as required below)
- Perform speculative, exploratory, or "nice-to-have" changes
- Touch XELORA codebase (`landing-page/`)
- Touch Dev/ product codebases (`Dev/products/`)

## CROSS-PROJECT COORDINATION
If a task requires coordination with:
- **XELORA product:** Note in CHANGELOG, user will coordinate
- **Dev/ products:** Note in CHANGELOG, user will coordinate
- **Multiple Google properties:** Document which properties were updated

## EXIT REQUIREMENTS (MANDATORY)
**Before ending your session, you MUST complete ALL of these steps:**

1. **Update CHANGELOG.md**
   - Add entry in `SYSTEM/CHANGELOG.md` summarizing what was done
   - Use format: `## [YYYY-MM-DD] - Description`
   - Include relevant details (keywords, budget, settings, etc.)

2. **Mark task COMPLETE**
   - Change `- [ ]` to `- [x]` in `SYSTEM/TASKS.md`
   - Add ✅ emoji after task title

3. **Move to COMPLETED section**
   - Cut completed task from `## NOW` section
   - Paste into `## COMPLETED` section
   - Add completion date and results summary

4. **Document External Changes**
   - If Google properties were updated, list them in task completion notes
   - If credentials or keys were used, note which ones
   - If campaign settings were configured, document them

5. **Verify**
   - Confirm both TASKS.md and CHANGELOG.md are updated
   - Confirm all deliverables are complete
   - Leave workspace in clean state

**CRITICAL: Do not end session without completing steps 1-5.**

Failure to comply with this contract constitutes an invalid run.

---

## HANDOFF PROTOCOL

When passing work to another agent or user:
1. Update TASKS.md with current status
2. Note any blockers or questions in task description
3. Log handoff in CHANGELOG.md
4. Leave clear next steps

---

## GOOGLE SERVICES ACCESS

For Google-related tasks (Search Console, Ads, Analytics):
- **Always verify** which Google account is being used
- **Document credentials** used (without exposing secrets)
- **Screenshot critical steps** if possible
- **Log all property IDs** (GA4 ID, Search Console property, etc.)
- **Note propagation times** (DNS changes, verification, etc.)

---

## VERSION
Contract Version: 1.0
Last Updated: 2026-01-09
Applies to: 3kpro.services company site only
