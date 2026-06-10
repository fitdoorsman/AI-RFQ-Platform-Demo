"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const reasons = [
  "Out of capacity",
  "Not capable",
  "Lead time too tight",
  "Material issue",
  "Pricing not competitive",
  "Unable to meet requirements"
];

export function DeclineReasonForm({
  rfqId,
  partnerId
}: {
  rfqId: string;
  partnerId: string;
}) {
  const router = useRouter();
  const [reason, setReason] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit() {
    if (!reason) {
      window.alert("Please select a valid decline reason.");
      return;
    }

    setLoading(true);
    const res = await fetch("/api/partner-quotes/decline", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rfqId, partnerId, reason, notes })
    });

    setLoading(false);

    if (!res.ok) {
      window.alert("Unable to decline RFQ.");
      return;
    }

    router.refresh();
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Decline RFQ</h2>
      <div className="field">
        <label>Reason</label>
        <select value={reason} onChange={(e) => setReason(e.target.value)}>
          <option value="">Select a reason</option>
          {reasons.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="field" style={{ marginTop: 12 }}>
        <label>Notes</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>

      <button className="button" style={{ marginTop: 12 }} onClick={onSubmit} disabled={loading}>
        {loading ? "Declining..." : "Confirm Decline"}
      </button>
    </div>
  );
}
