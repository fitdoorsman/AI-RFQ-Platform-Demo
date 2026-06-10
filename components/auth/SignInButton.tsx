"use client";

import { signIn } from "next-auth/react";

export function SignInButton({
  label,
  callbackUrl
}: {
  label: string;
  callbackUrl: string;
}) {
  return (
    <button className="button primary" onClick={() => signIn("okta", { callbackUrl })}>
      {label}
    </button>
  );
}
