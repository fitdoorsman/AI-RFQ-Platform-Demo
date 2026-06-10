import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";

const packageItems = [
  ["STEP files", "2 files transferred from GetSite", "Complete"],
  ["Drawings", "2 PDFs found from quote package", "Auto-added"],
  ["Specifications", "Material, finish, FAIR, CoC, and cert requirements identified", "Auto-added"],
  ["Redaction", "Customer logo, company name, CAGE code, drawing title block identifiers", "Ready"],
  ["Supplier Matching", "5 primary partners + 2 alternates selected", "Review"],
];

const matchedPartners = [
  { name: "Jarvis Precision", score: "97%", reason: "Aerospace CNC, AS9100, strong delivery confidence", selected: true },
  { name: "Aero Schwab", score: "94%", reason: "Tight tolerance experience and ITAR alignment", selected: true },
  { name: "Gremlin Works", score: "91%", reason: "Swiss turning and passivation fit", selected: true },
  { name: "JR Metal Works", score: "88%", reason: "Sheet metal and assembly support", selected: false },
];

export default function CreateRfqPage() {
  return (
    <>
      <PageHeader
        title="Create RFQ from GetSite Quote"
        eyebrow="AI package builder"
        description="Select Create RFQ and the system auto-builds the RFQ package, redacts customer information, recommends suppliers, and stages everything for review before sending."
        actions={
          <>
            <Link href="/internal/dashboard" className="button">Back to Dashboard</Link>
            <Link href="/internal/rfqs/demo-workspace" className="button primary">Create RFQ</Link>
          </>
        }
      />

      <div className="builder-grid">
        <div style={{ display: "grid", gap: 24 }}>
          <div className="card">
            <div className="card-header"><h3>Source GetSite Quote</h3><p>Demo quote selected from the active GetSite queue.</p></div>
            <div className="card-body">
              <div className="list-card" style={{ background: "var(--navy)", color: "#fff" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                  <div>
                    <div className="row-title" style={{ color: "#fff" }}>Q09-4686-9410</div>
                    <div className="row-sub" style={{ color: "#dbe7ff" }}>Worm Shaft / Acme Screw</div>
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "#dbe7ff" }}>GetSite Quote</div>
                </div>
              </div>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <div className="metric-box"><div className="label">Process</div><div className="row-title">Swiss-type Turning</div></div>
                <div className="metric-box"><div className="label">Material</div><div className="row-title">Stainless 420 / 440C</div></div>
                <div className="metric-box"><div className="label">Finish</div><div className="row-title">Passivate, Through Harden</div></div>
                <div className="metric-box"><div className="label">Lines</div><div className="row-title">44170F qty 3100<br/>44108D qty 100</div></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3>AI RFQ Package Builder</h3><p>Simulated automation showing what would be gathered before buyer approval.</p></div>
            <div className="card-body">
              {packageItems.map(([title, detail, status]) => (
                <div key={title} className="list-card" style={{ marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                    <div><div className="row-title">{title}</div><div className="row-sub">{detail}</div></div>
                    <span className="pill green">{status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          <div className="card">
            <div className="card-header"><h3>Redaction Review</h3><p>Customer-identifying information is removed before the RFQ package is released to suppliers.</p></div>
            <div className="card-body">
              <div className="grid-2">
                <div className="metric-box"><div className="label">Detected</div><div className="row-title">Customer logos</div><div className="row-sub">2 title blocks</div></div>
                <div className="metric-box"><div className="label">Detected</div><div className="row-title">Company names</div><div className="row-sub">4 drawing references</div></div>
                <div className="metric-box"><div className="label">Detected</div><div className="row-title">CAGE/Gage code</div><div className="row-sub">1 drawing field</div></div>
                <div className="metric-box"><div className="label">Detected</div><div className="row-title">Identifiers</div><div className="row-sub">Notes, title block, spec owner</div></div>
              </div>
              <div className="list-card" style={{ marginTop: 16, background: "#f8fafc" }}>
                <div className="row-title">Redacted package preview</div>
                <div className="row-sub">The demo keeps this simulated. In production this would require OCR, drawing parsing, file versioning, and a human review checkpoint.</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header"><h3>AI-Selected Suppliers</h3><p>Buyer can approve, remove, or add partners before pressing Send RFQ.</p></div>
            <div className="card-body">
              {matchedPartners.map((partner) => (
                <label key={partner.name} className="list-card" style={{ display: "flex", gap: 12, alignItems: "start", marginBottom: 12 }}>
                  <input type="checkbox" defaultChecked={partner.selected} style={{ width: "auto", marginTop: 4 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                      <div className="row-title">{partner.name}</div>
                      <span className="pill blue">{partner.score}</span>
                    </div>
                    <div className="row-sub">{partner.reason}</div>
                  </div>
                </label>
              ))}
              <div style={{ display: "flex", gap: 12, marginTop: 16, flexWrap: "wrap" }}>
                <button className="button">Add Partner</button>
                <button className="button">Save Draft</button>
                <Link href="/internal/rfqs/demo-workspace" className="button primary">Review & Send</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
