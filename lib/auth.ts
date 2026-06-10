export async function getCurrentUser(role?: "internal" | "partner") {
  return {
    id: role === "partner" ? "partner-demo" : "internal-demo",
    role: role ?? "internal",
    name: role === "partner" ? "Demo Partner" : "Demo Internal User",
    email: role === "partner" ? "partner@example.com" : "internal@xometry.com",
    partnerId: "P5213",
    partnerDbId: "partner-demo"
  };
}
