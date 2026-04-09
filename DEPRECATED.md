# ⚠️ THIS REPO IS NOT THE LIVE WEBSITE

**As of 2026-04-09, the live Clínica Duerksen website is hosted inside the Paragu-AI (formerly Vete) multi-tenant platform.**

## Where to find the live site

- **Live URL:** https://paragu-ai.com/clinica-duerksen
- **Tenant config:** [Ai-Whisperers/Vete/web/.content_data/clinica-duerksen/](https://github.com/Ai-Whisperers/Vete/tree/main/web/.content_data/clinica-duerksen)
- **Deploy:** Docker Swarm on agentzero VPS, Traefik → paragu-ai.com

## Where to make changes

| Change type                         | Where                                              |
|-------------------------------------|----------------------------------------------------|
| Content (copy, services, pricing)   | `Vete/web/.content_data/clinica-duerksen/*.json`            |
| Brand (colors, fonts, logo)         | `Vete/web/.content_data/clinica-duerksen/theme.json`        |
| Domain routing                      | `Vete/web/.content_data/domains.json`              |
| Custom code / components            | `Vete/web/app/[clinic]/*` (shared across tenants)  |

## What this repo is for now

This repo was a standalone Next.js site deployed at duerksen.sunstein.cloud. The content (hero, services, FAQ, about, brand colors, contact info) has been extracted from `lib/constants.ts`, `components/home/*`, and `app/*/page.tsx` into the `clinica-duerksen` tenant in Ai-Whisperers/Vete. 45+ dental-specific pages (turismo-dental, calculadora, evaluacion-sonrisa, etc.) remain unmigrated and are tracked as follow-up work.

## Do not

- Do not deploy this repo standalone to production
- Do not treat this as the source of truth for website content
- Do not make content changes here expecting them to go live

---

_This repo is kept for history and non-website assets. Website-layer consolidation tracked in Ai-Whisperers/Vete PR #65 (merged)._
