# RFQ Platform Live Demo Script

## 1. Internal user login
URL:
- `/auth/signin/internal`

Credentials:
- `internal@xometry.com`
- `Internal123!`

## 2. Open the internal dashboard
Show:
- RFQ Operations Dashboard
- active RFQs
- partner response overview
- top partners

Then open:
- `/internal/rfqs/demo-workspace`

Explain that this page is tied to the shared RFQ:
- `R238727`
- source quote `Q09-4686-9410`

Point out:
- routed partners
- quote response from Gremlin Works LLC
- same message thread the partner can see

## 3. Switch to partner
Sign out, then go to:
- `/auth/signin/partner`

Credentials:
- `partner@example.com`
- `Partner123!`

Then open:
- `/partner/inbox`
- `/partner/rfqs/demo-workspace`

## 4. Show the same RFQ from the partner side
Highlight:
- same RFQ number `R238727`
- same source quote `Q09-4686-9410`
- quote submission panel
- shared message thread
- why the partner was routed

## 5. Make the live handoff obvious
On the partner RFQ detail page:
- change the submitted quote value
- change the lead time
- click submit

Then:
- sign out
- sign back in as the internal user
- reopen `/internal/rfqs/demo-workspace`
- refresh the page

Show that the internal workspace now reflects the updated partner quote.

## 6. Close with security
Demonstrate:
- partner cannot access `/internal/*`
- internal user cannot access `/partner/*`

## Suggested talking point
“This shows the internal and partner portals operating on the same RFQ object, with partner quote updates visible back in the internal workspace.”
