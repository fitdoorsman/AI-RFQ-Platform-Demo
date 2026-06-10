# Engineering Handoff

## Goal
Convert this ready-to-go demo program into an integrated application with:
- Okta for internal auth
- ERP / quote / partner APIs
- persisted RFQ actions

## Immediate integration targets

### Auth
Replace:
- `auth.ts` internal demo credentials

With:
- Okta provider
- internal role mapping
- session enrichment as needed

### Data sources
Replace seeded or static data in:
- dashboards
- create RFQ page
- RFQ workspace
- partner inbox / detail / quotes / feedback

With:
- ERP partners
- quote source APIs
- RFQ persistence APIs
- file / thumbnail APIs

## Existing UX expectations already established
- quote seeds RFQ defaults
- process can be adjusted from a dropdown
- partner can quote, message, decline, and see feedback
- internal can review, award, and give feedback
- partner sees feedback on the RFQ they quoted
