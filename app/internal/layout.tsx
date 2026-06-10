import { InternalSidebar } from "@/components/layout/InternalSidebar";

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page-shell">
      <div className="two-col">
        <InternalSidebar />
        <div className="main-stack">{children}</div>
      </div>
    </div>
  );
}
