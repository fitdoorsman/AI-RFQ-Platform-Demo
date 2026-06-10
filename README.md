# AI Supplier Intelligence Platform Demo

This demo evolves the original RFQ Platform into an AI-powered supplier intelligence workflow for proof-of-concept discussions.

## Demo Concept

The workflow is designed around the future-state RFQ process:

1. GetSite quote is selected.
2. RFQ package is auto-created.
3. Drawings, STEP files, specs, and requirements are gathered.
4. Customer-identifying information is redacted.
5. AI recommends suppliers based on capability, performance, and fit.
6. Internal user reviews and overrides the partner list.
7. RFQ is sent to partners.
8. Partner dashboard shows active RFQs, quote actions, and performance analytics.

## Key Changes from Original RFQ Platform

- Added AI Supplier Intelligence command center
- Added GetSite quote-to-RFQ package builder flow
- Added redaction review concept
- Added AI supplier match scoring and partner override workflow
- Updated partner dashboard for clearer active RFQ visibility
- Removed partner-facing "Why You Were Chosen" logic
- Converted demo to mock/static data so it is easier to host on Vercel

## Local Run

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Hosted Demo

This version is designed to be easier for Vercel deployment because it does not require Prisma database setup or seed commands for the primary demo screens.

## Important Notes

This is a proof-of-concept UI demo. The AI supplier matching, GetSite integration, redaction workflow, and document automation are simulated for demo purposes. A production version would require approved integrations, secure document handling, audit logging, access controls, OCR/redaction validation, and internal security review.
