"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type QuoteRow = {
  id: string;
  partnerLabel: string;
  status: string;
  price: string | null;
};

export function AwardCloseActions({
  rfqId,
  currentStatus,
  quotes
}: {
  rfqId: string;
  currentStatus: string;
  quotes: QuoteRow[];
}) {
  const router = useRouter();
  const [selectedQuoteId, setSelectedQuoteId] = useState(quotes.find((q) => q.status === "Submitted")?.id ?? "");
  const [loading, setLoading] = useState<string | null>(null);

  async function patch(body: Record<string, unknown>, key: string) {
    setLoading(key);
    const res = await fetch(`/api/rfqs/${rfqId}/award-close`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    });
    setLoading(null);

    if (!res.ok) {
      const text = await res.text();
      window.alert(text || "Unable to update RFQ.");
      return;
    }

    router.refresh();
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Award / Close</h2>
      <div style={{ color: "var(--muted)", marginBottom: 12 }}>Current status: <strong>{currentStatus}</strong></div>

      <div className="field">
        <label>Winning Quote</label>
        <select value={selectedQuoteId} onChange={(e) => setSelectedQuoteId(e.target.value)}>
          <option value="">Select winning quote</option>
          {quotes.map((quote) => (
            <option key={quote.id} value={quote.id}>
              {quote.partnerLabel} {quote.price ? `— ${quote.price}` : ""}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12 }}>
        <button className="button primary" onClick={() => patch({ action: "award", winningQuoteId: selectedQuoteId }, "award")} disabled={loading === "award"}>
          {loading === "award" ? "Awarding..." : "Award RFQ"}
        </button>
        <button className="button" onClick={() => patch({ action: "close" }, "close")} disabled={loading === "close"}>
          {loading === "close" ? "Closing..." : "Close RFQ"}
        </button>
        <button className="button" onClick={() => patch({ action: "reopen" }, "reopen")} disabled={loading === "reopen"}>
          {loading === "reopen" ? "Reopening..." : "Reopen RFQ"}
        </button>
      </div>
    </div>
  );
}
