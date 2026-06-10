"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function EditRfqForm({
  rfq
}: {
  rfq: {
    id: string;
    title: string;
    process: string;
    material: string;
    finish: string;
    notes: string | null;
    status: string;
  };
}) {
  const router = useRouter();
  const [form, setForm] = useState({
    title: rfq.title,
    process: rfq.process,
    material: rfq.material,
    finish: rfq.finish,
    notes: rfq.notes ?? "",
    status: rfq.status
  });
  const [loading, setLoading] = useState(false);

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSave() {
    setLoading(true);
    const res = await fetch(`/api/rfqs/${rfq.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    setLoading(false);

    if (!res.ok) {
      window.alert("Unable to save RFQ.");
      return;
    }

    router.refresh();
  }

  return (
    <div className="card">
      <h2 style={{ marginTop: 0 }}>Edit RFQ</h2>
      <div className="grid-2">
        <div className="field">
          <label>Title</label>
          <input value={form.title} onChange={(e) => update("title", e.target.value)} />
        </div>
        <div className="field">
          <label>Status</label>
          <select value={form.status} onChange={(e) => update("status", e.target.value)}>
            <option value="Draft Ready">Draft Ready</option>
            <option value="Distributed">Distributed</option>
            <option value="Closed">Closed</option>
            <option value="Awarded">Awarded</option>
          </select>
        </div>
        <div className="field">
          <label>Process</label>
          <input value={form.process} onChange={(e) => update("process", e.target.value)} />
        </div>
        <div className="field">
          <label>Material</label>
          <input value={form.material} onChange={(e) => update("material", e.target.value)} />
        </div>
        <div className="field">
          <label>Finish</label>
          <input value={form.finish} onChange={(e) => update("finish", e.target.value)} />
        </div>
        <div className="field" style={{ gridColumn: "1 / -1" }}>
          <label>Notes</label>
          <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} />
        </div>
      </div>
      <button className="button primary" style={{ marginTop: 12 }} onClick={onSave} disabled={loading}>
        {loading ? "Saving..." : "Save RFQ Changes"}
      </button>
    </div>
  );
}
