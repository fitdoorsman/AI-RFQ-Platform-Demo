import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { StatusPill } from "@/components/rfq/StatusPill";

const rfqs = [
  { rfq: "R238727", quote: "Q09-4686-9410", title: "Worm Shaft / Acme Screw", process: "Swiss-type Turning", status: "AI Review", partners: 5, match: "97%", due: "Mar 21" },
  { rfq: "R693E5", quote: "Q48-4630-0076", title: "Aerospace CNC + Sheet Metal Package", process: "CNC / Sheet Metal", status: "Package Ready", partners: 7, match: "94%", due: "Mar 26" },
  { rfq: "R0525D8", quote: "Q94-2350-4779", title: "Urgent Production Components", process: "CNC Machining", status: "Redaction", partners: 4, match: "91%", due: "Today" }
];

const partners = [
  { name: "Jarvis Precision", capability: "Aerospace CNC, 5-axis, AS9100", score: 97, status: "Top match" },
  { name: "Aero Schwab", capability: "Tight tolerance CNC, ITAR", score: 94, status: "Strong fit" },
  { name: "JR Metal Works", capability: "Sheet metal, weldments, assemblies", score: 88, status: "Backup" },
  { name: "Gremlin Works", capability: "Swiss turning, passivation", score: 86, status: "Responsive" }
];

export default function InternalDashboardPage() {
  return (
    <>
      <PageHeader
        title="AI Supplier Intelligence Command Center"
        description="Start RFQs from GetSite quotes, auto-build the partner package, redact customer identifiers, and review AI-selected suppliers before sending."
        eyebrow="Xometry internal portal"
        actions={
          <>
            <Link href="/partner/dashboard" className="button">Partner View</Link>
            <Link href="/internal/create-rfq" className="button primary">Create RFQ</Link>
          </>
        }
      />

      <div className="stats">
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">RFQs in AI Review</div><div className="stat-value">12</div><div className="stat-sub">Ready for human approval</div></div><div className="stat-icon">🤖</div></div></div>
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">Avg. Match Score</div><div className="stat-value">93%</div><div className="stat-sub">Across recommended partners</div></div><div className="stat-icon">🎯</div></div></div>
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">Auto-Redacted Files</div><div className="stat-value">46</div><div className="stat-sub">Logos, names, CAGE codes</div></div><div className="stat-icon">🛡️</div></div></div>
        <div className="stat-card"><div className="stat-top"><div><div className="stat-label">Manual Time Saved</div><div className="stat-value">8.4h</div><div className="stat-sub">Estimated this week</div></div><div className="stat-icon">⏱️</div></div></div>
      </div>

      <div className="dashboard-grid">
        <div className="card">
          <div className="card-header"><h3>AI RFQ Queue</h3><p>RFQs created from GetSite quotes and prepared for sourcing review.</p></div>
          <div className="card-body">
            <table>
              <thead><tr><th>RFQ</th><th>Status</th><th>AI Match</th><th>Partners</th><th>Due</th></tr></thead>
              <tbody>
                {rfqs.map((row) => (
                  <tr key={row.rfq}>
                    <td>
                      <div className="row-title"><Link href="/internal/rfqs/demo-workspace">{row.title}</Link></div>
                      <div className="row-sub">{row.rfq} • {row.quote} • {row.process}</div>
                    </td>
                    <td><StatusPill status={row.status} /></td>
                    <td><span className="pill green">{row.match}</span></td>
                    <td>{row.partners}</td>
                    <td>{row.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="card">
          <div className="card-header"><h3>Supplier Match Intelligence</h3><p>Recommendation logic stays internal; partners only see the RFQ package and their own performance metrics.</p></div>
          <div className="card-body">
            {partners.map((partner) => (
              <div key={partner.name} className="partner-response-card">
                <div className="response-top">
                  <div>
                    <div className="response-name">{partner.name}</div>
                    <div className="row-sub">{partner.capability}</div>
                  </div>
                  <span className="pill blue">{partner.status}</span>
                </div>
                <div className="progress-label">AI supplier match score</div>
                <div className="progress"><span style={{ width: `${partner.score}%` }} /></div>
                <div className="row-sub" style={{ marginTop: 8 }}>{partner.score}% confidence based on capability, quality, response rate, and fit.</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
