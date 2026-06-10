import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: "internal" | "partner";
      partnerNumber?: string;
      partnerDbId?: string;
      groups?: string[];
    };
  }

  interface User {
    role?: "internal" | "partner";
    partnerNumber?: string;
    partnerDbId?: string;
    groups?: string[];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "internal" | "partner";
    partnerNumber?: string;
    partnerDbId?: string;
    groups?: string[];
  }
}
