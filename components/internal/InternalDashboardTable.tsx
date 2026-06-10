"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { StatusPill } from "@/components/rfq/StatusPill";
import { formatDate } from "@/lib/utils";
import type { RFQ } from "@/types/models";

export function InternalDashboardTable({ rfqs }: { rfqs: RFQ[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return rfqs.filter((rfq) => {
      const matchesQuery = `${rfq.rfqNumber} ${rfq.sourceQuoteNumber} ${rfq.title} ${rfq.process} ${rfq.material}`
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesStatus = status === "all" ? true : rfq.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [rfqs, query, status]);

  return (
    <>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 14 }}>
        <input
          placeholder="Search RFQ, source quote, title, process, material"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ flex: 1, minWidth: 280, border: "1px solid var(--line)", borderRadius: 16, padding: "12px 14px" }}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ border: "1px solid var(--line)", borderRadius: 16, padding: "12px 14px", minWidth: 180 }}
        >
          <option value="all">All statuses</option>
          <option value="Draft Ready">Draft Ready</option>
          <option value="Distributed">Distributed</option>
          <option value="Closed">Closed</option>
          <option value="Awarded">Awarded</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>RFQ</th>
            <th>Source Quote</th>
            <th>Status</th>
            <th>Due</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((rfq) => (
            <tr key={rfq.id}>
              <td>
                <div style={{ fontWeight: 700 }}>{rfq.rfqNumber}</div>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>{rfq.title}</div>
              </td>
              <td>{rfq.sourceQuoteNumber}</td>
              <td><StatusPill status={rfq.status} /></td>
              <td>{formatDate(rfq.dueDate)}</td>
              <td><Link className="button" href={`/internal/rfqs/${rfq.id}`}>Open</Link></td>
            </tr>
          ))}
          {!filtered.length ? (
            <tr><td colSpan={5} style={{ color: "var(--muted)" }}>No RFQs found.</td></tr>
          ) : null}
        </tbody>
      </table>
    </>
  );
}
