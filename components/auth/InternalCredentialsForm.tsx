"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function InternalCredentialsForm() {
  const router = useRouter();
  const [email, setEmail] = useState("internal@xometry.com");
  const [password, setPassword] = useState("Internal123!");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("internal-credentials", {
      email,
      password,
      redirect: false
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Invalid internal email or password.");
      return;
    }

    router.push("/internal/dashboard");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="field">
        <label>Internal Email Address</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
      </div>

      <div className="field" style={{ marginTop: 12 }}>
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
      </div>

      {error ? (
        <div style={{ marginTop: 12, color: "#b91c1c", fontWeight: 700 }}>
          {error}
        </div>
      ) : null}

      <button className="button primary" style={{ marginTop: 12 }} type="submit" disabled={loading}>
        {loading ? "Signing in..." : "Internal Sign In"}
      </button>
    </form>
  );
}
