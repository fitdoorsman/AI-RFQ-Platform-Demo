"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { StatusPill } from "@/components/rfq/StatusPill";

type RouteRow = {
  id: string;
  status: string;
  rfq: {
    id: string;
    rfqNumber: string;
    title: string;
    sourceQuote: { quoteNumber: string };
    process: string;
    material: string;
  };
};

export function PartnerInboxTable({ routes }: { routes: RouteRow[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");

  const filtered = useMemo(() => {
    return routes.filter((route) => {
      const haystack = `${route.rfq.rfqNumber} ${route.rfq.sourceQuote.quoteNumber} ${route.rfq.title} ${route.rfq.process} ${route.rfq.material}`
        .toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase());
      const matchesStatus = status === "all" ? true : route.status === status;
      return matchesQuery && matchesStatus;
    });
  }, [routes, query, status]);

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
          <option value="Sent">Sent</option>
          <option value="Viewed">Viewed</option>
          <option value="Pending">Pending</option>
          <option value="Quoted">Quoted</option>
          <option value="Declined">Declined</option>
        </select>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>RFQ</th>
            <th>Source Quote</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((route) => (
            <tr key={route.id}>
              <td>
                <div style={{ fontWeight: 700 }}>{route.rfq.rfqNumber}</div>
                <div style={{ color: "var(--muted)", fontSize: 13 }}>{route.rfq.title}</div>
              </td>
              <td>{route.rfq.sourceQuote.quoteNumber}</td>
              <td><StatusPill status={route.status} /></td>
              <td><Link className="button" href={`/partner/rfqs/${route.rfq.id}`}>Open</Link></td>
            </tr>
          ))}
          {!filtered.length ? (
            <tr><td colSpan={4} style={{ color: "var(--muted)" }}>No RFQs found.</td></tr>
          ) : null}
        </tbody>
      </table>
    </>
  );
}
