import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusPill } from "@/components/rfq/StatusPill";

const rows = [
  { rfq: "R238727", title: "Worm Shaft / Acme Screw", source: "Q09-4686-9410", due: "Mar 21", status: "Quoted", process: "Swiss-type Turning", material: "Stainless Steel 420 / 440C", finish: "Passivate, Through Harden" },
  { rfq: "RC45318", title: "Precision Housing Package", source: "Q77-8886-7206", due: "Mar 18", status: "Viewed", process: "CNC Machining", material: "Aluminum 7075-T651", finish: "Type II Anodize, Black" },
  { rfq: "R7D6BA5", title: "Roof Mount Front", source: "Q18-5524-3102", due: "Mar 26", status: "Pending", process: "CNC Turning", material: "6061-T6 Aluminum", finish: "Clear Anodize" }
];

export default function PartnerInboxPage() {
  const selected = rows[0];

  return (
    <>
      <PageHeader eyebrow="Partner-facing demo" title="RFQ Inbox" description="Review assigned RFQs, preview requirements, and open the RFQ detail workspace." />
      <div className="dashboard-grid partner">
        <div className="card">
          <div className="card-header">
            <h3>Assigned RFQs</h3>
            <p>Incoming RFQs currently routed to this partner.</p>
          </div>
          <div className="card-body">
            <table>
              <thead><tr><th>RFQ</th><th>Status</th><th>Due</th><th>Action</th></tr></thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.rfq}>
                    <td>
                      <div className="row-title">{row.rfq}</div>
                      <div className="row-sub">{row.title}</div>
                    </td>
                    <td><StatusPill status={row.status} /></td>
                    <td>{row.due}</td>
                    <td><Link className="button small" href={row.rfq === "R238727" ? "/partner/rfqs/demo-workspace" : "/partner/inbox"}>View RFQ</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header">
            <h3>RFQ Summary</h3>
            <p>Preview of the currently highlighted RFQ.</p>
          </div>
          <div className="card-body">
            <div className="summary-grid">
              <div className="metric-box"><div className="label">RFQ</div><div className="row-title">{selected.rfq}</div></div>
              <div className="metric-box"><div className="label">Source Quote</div><div className="row-title">{selected.source}</div></div>
              <div className="metric-box"><div className="label">Due</div><div className="row-title">{selected.due}</div></div>
            </div>
            <div className="metric-box" style={{ marginBottom: 12 }}><div className="label">Process</div><div className="row-title">{selected.process}</div></div>
            <div className="metric-box" style={{ marginBottom: 12 }}><div className="label">Material</div><div className="row-title">{selected.material}</div></div>
            <div className="metric-box" style={{ marginBottom: 12 }}><div className="label">Finish</div><div className="row-title">{selected.finish}</div></div>
            <div className="metric-box"><div className="label">Status</div><div><StatusPill status={selected.status} /></div></div>
          </div>
        </div>
      </div>
    </>
  );
}
