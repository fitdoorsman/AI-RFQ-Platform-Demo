export function SignOutButton({ callbackUrl }: { callbackUrl?: string }) {
  return <a className="button" href={callbackUrl ?? "/"}>Exit demo</a>;
}
