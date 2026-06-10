export function StatusPill({ status }: { status: string }) {
  const lower = status.toLowerCase();
  let className = "pill";
  if (lower.includes("draft") || lower.includes("pending") || lower.includes("awaiting")) className += " amber";
  else if (lower.includes("submitted") || lower.includes("quoted") || lower.includes("awarded") || lower.includes("open") || lower.includes("new") || lower.includes("viewed")) className += " blue";
  else if (lower.includes("declined") || lower.includes("closed")) className += " red";
  else className += " soft";
  return <span className={className}>{status}</span>;
}
