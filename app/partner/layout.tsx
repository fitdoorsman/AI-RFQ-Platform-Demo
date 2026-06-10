import { PartnerSidebar } from "@/components/layout/PartnerSidebar";

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <div className="two-col">
        <PartnerSidebar />
        <div className="main-stack">{children}</div>
      </div>
    </div>
  );
}
