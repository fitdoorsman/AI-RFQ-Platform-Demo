import { ReactNode } from "react";

export function PageHeader({ title, description, actions, eyebrow = "Demo workspace" }: { title: string; description?: string; actions?: ReactNode; eyebrow?: string }) {
  return (
    <div className="header-row">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        {description ? <p>{description}</p> : null}
      </div>
      {actions ? <div className="header-actions">{actions}</div> : null}
    </div>
  );
}
