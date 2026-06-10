"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function MessageComposer({
  rfqId,
  senderType,
  senderId,
  placeholder = "Type a message"
}: {
  rfqId: string;
  senderType: "internal" | "partner";
  senderId: string;
  placeholder?: string;
}) {
  const router = useRouter();
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSend() {
    if (!body.trim()) return;
    setLoading(true);

    const res = await fetch(`/api/rfqs/${rfqId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ senderType, senderId, body: body.trim() })
    });

    setLoading(false);

    if (!res.ok) {
      window.alert("Unable to send message.");
      return;
    }

    setBody("");
    router.refresh();
  }

  return (
    <div style={{ marginTop: 12 }}>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder={placeholder}
        style={{ width: "100%", minHeight: 90, border: "1px solid var(--line)", borderRadius: 16, padding: "12px 14px" }}
      />
      <button className="button primary" style={{ marginTop: 10 }} onClick={onSend} disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </div>
  );
}
