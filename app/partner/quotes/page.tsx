import { PageHeader } from "@/components/layout/PageHeader";
import { StatusPill } from "@/components/rfq/StatusPill";

const rows = [
  { rfq: "R238727", title: "Worm Shaft / Acme Screw", status: "Draft", price: "$18,450", lead: "10 business days", notes: "Expedite option pending" },
  { rfq: "RC45318", title: "Precision Housing Package", status: "Submitted", price: "$42,100", lead: "18 business days", notes: "Quoted per redacted package" },
  { rfq: "R7D6BA5", title: "Roof Mount Front", status: "Declined", price: "—", lead: "—", notes: "Capacity constraint" }
];

export default function PartnerQuotesPage() {
  return (
    <>
      <PageHeader eyebrow="Partner-facing demo" title="My Quotes" description="Submitted, draft, and declined RFQ responses." />
      <div className="card">
        <div className="card-header"><h3>Quote History</h3></div>
        <div className="card-body">
          <table>
            <thead><tr><th>RFQ</th><th>Status</th><th>Price</th><th>Lead Time</th><th>Notes</th></tr></thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.rfq}>
                  <td><div className="row-title">{row.rfq}</div><div className="row-sub">{row.title}</div></td>
                  <td><StatusPill status={row.status} /></td>
                  <td>{row.price}</td>
                  <td>{row.lead}</td>
                  <td>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
