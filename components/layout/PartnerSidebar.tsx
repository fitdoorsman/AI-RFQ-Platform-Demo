"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@/components/auth/SignOutButton";

const links = [
  { href: "/partner/dashboard", label: "Dashboard" },
  { href: "/partner/inbox", label: "RFQ Inbox" },
  { href: "/partner/rfqs/demo-workspace", label: "RFQ Detail" },
  { href: "/partner/quotes", label: "My Quotes" },
  { href: "/partner/messages", label: "Messages" }
];

export function PartnerSidebar() {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div style={{ color: "var(--muted)", fontWeight: 700, fontSize: 13 }}>Partner Portal</div>
      <h2 style={{ margin: "8px 0 24px", lineHeight: 1.2 }}>Partner Workcenter</h2>
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
