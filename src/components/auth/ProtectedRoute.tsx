"use client";

import { useAuthStore } from "@/store/auth-store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();

  const token = useAuthStore((state) => state.token);

  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  useEffect(() => {
    if (hasHydrated && !token) {
      router.replace("/sign-in");
    }
  }, [hasHydrated, token, router]);

  if (!hasHydrated) {
    return null;
  }

  if (!token) {
    return null;
  }

  return <>{children}</>;
}
