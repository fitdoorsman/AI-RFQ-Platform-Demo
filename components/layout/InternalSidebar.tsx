"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@/components/auth/SignOutButton";

const links = [
  { href: "/internal/dashboard", label: "Command Center" },
  { href: "/internal/create-rfq", label: "Create RFQ" },
  { href: "/internal/rfqs/demo-workspace", label: "AI Review & Send" },
  { href: "/internal/rfqs/demo", label: "Classic Workspace" }
];

export function InternalSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div style={{ color: "var(--muted)", fontWeight: 700, fontSize: 13 }}>Xometry</div>
      <h2 style={{ margin: "8px 0 24px", lineHeight: 1.2 }}>AI Supplier Intelligence</h2>
      <nav className="nav-stack">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className={`nav-link ${pathname === link.href ? "active" : ""}`}>
            {link.label}
          </Link>
        ))}
      </nav>
      <div style={{ marginTop: 24 }}><SignOutButton callbackUrl="/" /></div>
    </aside>
  );
}
