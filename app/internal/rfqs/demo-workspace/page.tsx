import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusPill } from "@/components/rfq/StatusPill";

const suppliers = [
  { name: "Jarvis Precision", score: 97, status: "Selected", notes: "Aerospace CNC, AS9100, strong delivery confidence" },
  { name: "Aero Schwab", score: 94, status: "Selected", notes: "Tight tolerance capability and ITAR alignment" },
  { name: "Gremlin Works", score: 91, status: "Selected", notes: "Swiss turning and passivation fit" },
  { name: "JR Metal Works", score: 88, status: "Alternate", notes: "Backup option for sheet metal/assembly support" }
];

const files = [
  { name: "44170F_redacted_drawing.pdf", type: "Drawing", status: "Redacted" },
  { name: "44108D_redacted_drawing.pdf", type: "Drawing", status: "Redacted" },
  { name: "worm_shaft_rev_c.step", type: "STEP", status: "Attached" },
  { name: "rfq_requirements_summary.pdf", type: "Specs", status: "Generated" }
];

export default function DemoWorkspacePage() {
  return (
    <>
      <PageHeader
        title="AI Review & Send Workspace"
        eyebrow="Human approval checkpoint"
        description="Review the auto-created RFQ package, verify redactions, adjust the partner route list, and send only after approval."
        actions={
          <>
            <span className="button">R238727</span>
            <span className="button primary">Ready to Send</span>
          </>
        }
      />

      <div className="workspace-grid">
        <div style={{ display: "grid", gap: 24 }}>
          <div className="card">
            <div className="card-header"><h3>GetSite Quote Summary</h3><p>Imported source quote details become the starting point for the RFQ package.</p></div>
            <div className="card-body">
              <div className="grid-2">
                <div className="metric-box"><div className="label">Source Quote</div><div className="row-title">Q09-4686-9410</div></div>
                <div className="metric-box"><div className="label">RFQ</div><div className="row-title">R238727</div></div>
                <div className="metric-box"><div className="label">Process</div><div className="row-title">Swiss-type Turning</div></div>
                <div className="metric-box"><div className="label">Material</div><div className="row-title">Stainless Steel 420 / 440C</div></div>
                <div className="metric-box"><div className="label">Finish</div><div className="row-title">Passivate, Through Harden</div></div>
                <div className="metric-box"><div className="label">AI Confidence</div><div className="row-title">94%</div></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3>AI Package Builder Output</h3><p>Drawings, models, specifications, and partner instructions assembled before send.</p></div>
            <div className="card-body">
              <table>
                <thead><tr><th>File</th><th>Type</th><th>Status</th></tr></thead>
                <tbody>{files.map((file) => <tr key={file.name}><td><div className="row-title">{file.name}</div></td><td>{file.type}</td><td><StatusPill status={file.status} /></td></tr>)}</tbody>
              </table>
              <div className="list-card" style={{ marginTop: 16 }}>
                <div className="row-title">Partner instructions generated</div>
                <div className="row-sub">Please quote per redacted drawings and attached requirements. Confirm lead time, cert package, passivation sequence, and any exceptions. Partial quote acceptable.</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3>Redaction Checkpoint</h3><p>Simulated redaction review before release to suppliers.</p></div>
            <div className="card-body">
              <div className="grid-3">
                <div className="metric-box"><div className="label">Removed</div><div className="row-title">Customer logos</div><div className="row-sub">2 files</div></div>
                <div className="metric-box"><div className="label">Removed</div><div className="row-title">Company name</div><div className="row-sub">Title block + notes</div></div>
                <div className="metric-box"><div className="label">Removed</div><div className="row-title">CAGE/Gage code</div><div className="row-sub">1 field</div></div>
              </div>
              <div className="field" style={{ marginTop: 16 }}><label>Reviewer Notes</label><textarea defaultValue="Redaction preview approved. No visible customer identifiers remain in the partner package." /></div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          <div className="card">
            <div className="card-header"><h3>Partner Route Review</h3><p>AI recommends the route list, but sourcing keeps final control.</p></div>
            <div className="card-body">
              {suppliers.map((supplier) => (
                <div key={supplier.name} className="list-card" style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div>
                      <div className="row-title">{supplier.name}</div>
                      <div className="row-sub">{supplier.notes}</div>
                    </div>
                    <div style={{ textAlign: "right" }}><span className="pill blue">{supplier.score}%</span><br/><StatusPill status={supplier.status} /></div>
                  </div>
                  <div className="progress-label">Supplier match</div><div className="progress"><span style={{ width: `${supplier.score}%` }} /></div>
                </div>
              ))}
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <button className="button">Add Partner</button>
                <button className="button">Remove Selected</button>
                <button className="button">Edit Package</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3>Review & Send</h3><p>Final approval before the RFQ is released to partners.</p></div>
            <div className="card-body">
              <div className="list-card" style={{ marginBottom: 12 }}><div className="row-title">RFQ package complete</div><div className="row-sub">4 files attached, 3 partner instructions generated.</div></div>
              <div className="list-card" style={{ marginBottom: 12 }}><div className="row-title">Redaction complete</div><div className="row-sub">Customer identifiers removed from drawings and specifications.</div></div>
              <div className="list-card" style={{ marginBottom: 12 }}><div className="row-title">Partner list reviewed</div><div className="row-sub">3 selected partners and 1 alternate staged for routing.</div></div>
              <div className="field"><label>Internal Send Note</label><textarea defaultValue="Send as urgent review. Request pricing, lead time, cert confirmation, and exceptions by Friday." /></div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 14 }}>
                <Link href="/partner/dashboard" className="button primary">Send RFQ</Link>
                <button className="button">Save Draft</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
