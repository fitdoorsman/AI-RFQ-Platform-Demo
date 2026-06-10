import { PageHeader } from "@/components/layout/PageHeader";

const messages = [
  { from: "Xometry", body: "Please confirm pricing assumes passivation after heat treat and standard cert package.", time: "Today 9:14 AM" },
  { from: "Partner", body: "Confirmed. We can quote to that requirement and include material certs and C of C.", time: "Today 9:32 AM" },
  { from: "Xometry", body: "An expedited option would be helpful if available.", time: "Today 10:05 AM" }
];

export default function PartnerMessagesPage() {
  return (
    <>
      <PageHeader eyebrow="Partner-facing demo" title="Messages" description="RFQ-specific partner conversations and feedback." />
      <div className="card">
        <div className="card-header"><h3>R238727 — Worm Shaft / Acme Screw</h3><p>Conversation tied to the active RFQ.</p></div>
        <div className="card-body">
          <div className="chat-thread">
            <div className="message-thread">
              {messages.map((message, index) => (
                <div key={index} className={`message ${message.from === "Partner" ? "partner" : ""}`}>
                  <div style={{ fontSize: 12, opacity: .75, marginBottom: 6 }}>{message.from} • {message.time}</div>
                  {message.body}
                </div>
              ))}
            </div>
          </div>
          <textarea style={{ marginTop: 12 }} placeholder="Reply to Xometry" />
          <button className="button primary" style={{ marginTop: 10 }}>Send Message</button>
        </div>
      </div>
    </>
  );
}
