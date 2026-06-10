import Link from "next/link";

export default function DemoSignInPage() {
  return (
    <div className="page-shell">
      <div className="card" style={{ maxWidth: 720, margin: "60px auto", padding: 28 }}>
        <h1 style={{ marginTop: 0 }}>AI Supplier Intelligence Demo</h1>
        <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Authentication is disabled for this hosted proof-of-concept. Choose the internal or partner experience below.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
          <Link className="button primary" href="/internal/dashboard">Internal Demo</Link>
          <Link className="button" href="/partner/dashboard">Partner Demo</Link>
        </div>
      </div>
    </div>
  );
}
