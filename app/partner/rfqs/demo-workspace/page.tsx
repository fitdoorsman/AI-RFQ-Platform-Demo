import { PageHeader } from "@/components/layout/PageHeader";
import { StatusPill } from "@/components/rfq/StatusPill";

export default function PartnerDemoWorkspacePage() {
  return (
    <>
      <PageHeader
        eyebrow="Xometry partner portal"
        title="RFQ Detail"
        description="Review the RFQ, inspect the package, communicate with the internal RFQ owner, and submit pricing from the partner side."
        actions={
          <>
            <span className="button">R238727</span>
            <span className="button primary">Quoted</span>
          </>
        }
      />

      <div className="workspace-grid">
        <div style={{ display: "grid", gap: 24 }}>
          <div className="card">
            <div className="card-header">
              <h3>RFQ Summary</h3>
            </div>
            <div className="card-body">
              <div className="summary-grid">
                <div className="metric-box"><div className="label">RFQ</div><div className="row-title">R238727</div></div>
                <div className="metric-box"><div className="label">Source Quote</div><div className="row-title">Q09-4686-9410</div></div>
                <div className="metric-box"><div className="label">Due</div><div className="row-title">Mar 21</div></div>
              </div>
              <div className="grid-2">
                <div className="metric-box"><div className="label">Process</div><div className="row-title">Swiss-type Turning</div></div>
                <div className="metric-box"><div className="label">Route Status</div><div><StatusPill status="Quoted" /></div></div>
                <div className="metric-box"><div className="label">Material</div><div className="row-title">Stainless Steel 420 / 440C</div></div>
                <div className="metric-box"><div className="label">Finish</div><div className="row-title">Passivate, Through Harden</div></div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Requirements</h3>
              <p>Review requirements and line items before quoting.</p>
            </div>
            <div className="card-body">
              <div className="line-box">
                <div className="line-head"><div>Part Number</div><div>Quantity</div></div>
                <div className="line-row"><div className="line-cell">44170F</div><div className="line-cell">3100</div></div>
                <div className="line-row"><div className="line-cell">44108D</div><div className="line-cell">100</div></div>
              </div>
              <div className="grid-2" style={{ marginTop: 16 }}>
                <div className="metric-box">
                  <div className="label">Preview / Thumbnail</div>
                  <div style={{ height: 160, border: "1px solid var(--line)", borderRadius: 18, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted)", background: "#fff" }}>
                    STEP thumbnail preview
                  </div>
                </div>
                <div className="metric-box">
                  <div className="label">Files</div>
                  <div className="list-card" style={{ marginBottom: 10 }}>
                    <div className="row-title">worm_shaft_rev_c.step</div>
                    <div className="row-sub">3D model</div>
                  </div>
                  <div className="list-card">
                    <div className="row-title">inspection_package.pdf</div>
                    <div className="row-sub">Inspection package</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Messages</h3>
            </div>
            <div className="card-body">
              <div className="chat-thread">
                <div className="message-thread">
                  <div className="message"><div style={{ fontSize: 12, opacity: .75, marginBottom: 6 }}>Internal • today</div>Please quote passivate after heat treat.</div>
                  <div className="message partner"><div style={{ fontSize: 12, opacity: .75, marginBottom: 6 }}>Gremlin Works LLC • today</div>Confirmed. We will quote to that requirement.</div>
                </div>
              </div>
              <textarea style={{ marginTop: 12 }} placeholder="Reply to the internal RFQ owner" />
              <button className="button primary" style={{ marginTop: 10 }}>Send Message</button>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gap: 24 }}>
          <div className="card">
            <div className="card-header">
              <h3>Quote Status</h3>
            </div>
            <div className="card-body">
              <div className="metric-box" style={{ marginBottom: 12 }}>
                <div className="label">Current Status</div>
                <div><StatusPill status="Submitted" /></div>
              </div>
              <div className="metric-box">
                <div className="label">Reason Routed</div>
                <div className="row-title">Swiss-type Turning capability</div>
                <div className="row-sub" style={{ marginTop: 8 }}>ITAR certified • strong response history</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Submit Quote</h3>
            </div>
            <div className="card-body">
              <div className="field"><label>Submitted Price</label><input defaultValue="$18,450" /></div>
              <div className="field" style={{ marginTop: 12 }}><label>Lead Time</label><input defaultValue="10 business days" /></div>
              <div className="field" style={{ marginTop: 12 }}><label>Quote Notes</label><textarea defaultValue="Quoted per drawing and requirements." /></div>
              <button className="button primary" style={{ marginTop: 12 }}>Submit Quote</button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Xometry Feedback</h3>
              <p>Feedback visible to the partner for this submitted RFQ response.</p>
            </div>
            <div className="card-body">
              <div className="metric-box" style={{ marginBottom: 12 }}>
                <div className="label">Review Status</div>
                <div><StatusPill status="Needs revision" /></div>
              </div>
              <div className="list-card" style={{ marginBottom: 10 }}>
                <div className="row-title">Price Feedback</div>
                <div className="row-sub">Customer target is below current submitted pricing. Please review if there is any room to improve.</div>
              </div>
              <div className="list-card" style={{ marginBottom: 10 }}>
                <div className="row-title">Lead Time Feedback</div>
                <div className="row-sub">Current lead time is acceptable, but an expedited option would be helpful if available.</div>
              </div>
              <div className="list-card">
                <div className="row-title">Additional Notes</div>
                <div className="row-sub">Please confirm whether pricing assumes passivate after heat treat and standard certification package.</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3>Decline RFQ</h3>
              <p>A valid reason is required to decline this RFQ.</p>
            </div>
            <div className="card-body">
              <div className="field">
                <label>Reason</label>
                <select defaultValue="" required>
                  <option value="" disabled>Select a valid reason</option>
                  <option>Out of capacity</option>
                  <option>Not capable for process</option>
                  <option>Material unavailable</option>
                  <option>Lead time too tight</option>
                  <option>Quantities too low</option>
                  <option>Pricing not competitive</option>
                </select>
              </div>
              <div className="field" style={{ marginTop: 12 }}>
                <label>Additional Notes</label>
                <textarea placeholder="Provide supporting context for the selected decline reason" required />
              </div>
              <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 10 }}>
                A decline reason and supporting note are required before this RFQ can be declined.
              </div>
              <button className="button" style={{ marginTop: 12 }}>Confirm Decline</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
