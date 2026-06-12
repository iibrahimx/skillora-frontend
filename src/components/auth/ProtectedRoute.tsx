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

  useEffect(() => {
    if (!token) {
      router.replace("/sign-in");
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  return <>{children}</>;
}
