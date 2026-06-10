import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";

const rows = [
  { rfq: "R238727", title: "Worm Shaft / Acme Screw", status: "Action Required", due: "Mar 21", files: 4 },
  { rfq: "RC45318", title: "Precision Housing Package", status: "Viewed", due: "Mar 18", files: 7 },
  { rfq: "R7D6BA5", title: "Roof Mount Front", status: "Pending", due: "Mar 26", files: 3 }
];

export default function PartnerDashboardPage() {
  return (
    <>
      <PageHeader
        eyebrow="Partner-facing demo"
        title="Partner Dashboard"
        description="A cleaner partner workcenter focused on active RFQs, required actions, quote visibility, and performance analytics without exposing internal AI selection logic."
        actions={
          <>
            <Link href="/partner/inbox" className="button">RFQ Inbox</Link>
            <Link href="/partner/rfqs/demo-workspace" className="button primary">Open Active RFQ</Link>
          </>
        }
      />

      <div className="stats">
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">Active RFQs</div><div className="stat-value">5</div><div className="stat-sub">Open opportunities</div></div><div className="stat-icon">📥</div></div></div>
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">Action Required</div><div className="stat-value">2</div><div className="stat-sub">Need quote or response</div></div><div className="stat-icon">⚠️</div></div></div>
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">Quote Turnaround</div><div className="stat-value">1.6d</div><div className="stat-sub">Average response time</div></div><div className="stat-icon">⏱️</div></div></div>
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">Win Rate</div><div className="stat-value">42%</div><div className="stat-sub">Trailing 30 days</div></div><div className="stat-icon">🏆</div></div></div>
      </div>

      <div className="dashboard-grid partner">
        <div className="card">
          <div className="card-header"><h3>Active RFQs</h3><p>Clear priority view of current RFQs, due dates, file counts, and next actions.</p></div>
          <div className="card-body">
            <table>
              <thead><tr><th>RFQ</th><th>Status</th><th>Files</th><th>Due</th><th>Action</th></tr></thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.rfq}>
                    <td><div className="row-title">{row.rfq}</div><div className="row-sub">{row.title}</div></td>
                    <td><span className={`pill ${row.status === "Action Required" ? "amber" : "blue"}`}>{row.status}</span></td>
                    <td>{row.files}</td>
                    <td>{row.due}</td>
                    <td><Link href="/partner/rfqs/demo-workspace" className="button small">Open</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          <div className="card">
            <div className="card-header"><h3>Performance Scorecard</h3><p>Partner-visible metrics that help suppliers understand their own RFQ performance.</p></div>
            <div className="card-body">
              <div className="grid-2" style={{ gap: 14 }}>
                <div className="metric-box"><div className="label">On-Time Delivery</div><div className="row-title">96%</div><div className="row-sub">Trailing 90 days</div></div>
                <div className="metric-box"><div className="label">Quality Acceptance</div><div className="row-title">98%</div><div className="row-sub">First-pass acceptance</div></div>
                <div className="metric-box"><div className="label">Response Rate</div><div className="row-title">89%</div><div className="row-sub">RFQs answered</div></div>
                <div className="metric-box"><div className="label">Awarded Revenue</div><div className="row-title">$184K</div><div className="row-sub">Last 90 days</div></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3>Feedback Center</h3><p>Actionable RFQ feedback without exposing internal supplier ranking logic.</p></div>
            <div className="card-body">
              <div className="list-card" style={{ marginBottom: 12 }}><div className="row-title">R238727 — pricing feedback pending</div><div className="row-sub">Confirm passivation sequence and cert package assumptions.</div></div>
              <div className="list-card" style={{ marginBottom: 12 }}><div className="row-title">RC45318 — lead time option requested</div><div className="row-sub">Customer may accept split delivery if expedite is possible.</div></div>
              <Link href="/partner/messages" className="button">Open Messages</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
