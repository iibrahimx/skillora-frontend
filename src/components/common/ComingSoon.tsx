"use client";

import { Construction, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <Construction size={80} className="mb-6 text-slate-900" />

      <h1 className="mb-3 text-3xl font-bold text-blue-600">{title}</h1>

      <h2 className="mb-2 text-xl font-semibold text-slate-700">Coming Soon</h2>

      <p className="mb-8 max-w-md text-slate-500">
        This feature is currently under development and will be available in a
        future update.
      </p>

      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700 cursor-pointer"
      >
        <ArrowLeft size={18} />
        Go Back
      </button>
    </div>
  );
}
