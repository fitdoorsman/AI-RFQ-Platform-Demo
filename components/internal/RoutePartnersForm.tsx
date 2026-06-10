"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Partner = {
  id: string;
  partnerNumber: string;
  companyName: string;
  certifications: string[];
  capabilities: string[];
};

export function RoutePartnersForm({
  rfqId,
  partners
}: {
  rfqId: string;
  partners: Partner[];
}) {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  function toggle(id: string) {
    setSelected((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);
  }

  async function onRoute() {
    if (!selected.length) {
      window.alert("Select at least one partner.");
      return;
    }

    setLoading(true);
    const res = await fetch(`/api/rfqs/${rfqId}/route-partners`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ partnerIds: selected })
    });

    setLoading(false);

    if (!res.ok) {
      window.alert("Unable to route RFQ.");
      return;
    }

    router.refresh();
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Route Partners</h2>
      <div style={{ display: "grid", gap: 10 }}>
        {partners.map((partner) => (
          <label
            key={partner.id}
            className="list-card"
            style={{ display: "flex", justifyContent: "space-between", gap: 12, cursor: "pointer" }}
          >
            <div>
              <div style={{ fontWeight: 700 }}>
                {partner.partnerNumber} — {partner.companyName}
              </div>
              <div style={{ color: "var(--muted)", fontSize: 13, marginTop: 4 }}>
                {partner.capabilities.join(" • ")}
              </div>
              <div style={{ marginTop: 8 }}>
                {partner.certifications.map((cert) => (
                  <span key={cert} className="pill blue">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
            <input type="checkbox" checked={selected.includes(partner.id)} onChange={() => toggle(partner.id)} />
          </label>
        ))}
      </div>

      <button className="button primary" style={{ marginTop: 12 }} onClick={onRoute} disabled={loading}>
        {loading ? "Routing..." : "Send RFQ"}
      </button>
    </div>
  );
}
