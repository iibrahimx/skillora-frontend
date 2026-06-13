"use client";

import { X } from "lucide-react";
import { User } from "@/types/user";

interface ViewEmployeeModalProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
}

export default function ViewEmployeeModal({
  open,
  onClose,
  user,
}: ViewEmployeeModalProps) {
  if (!open || !user) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl bg-white shadow-xl border border-gray-500"
      >
        <div className="flex items-center justify-between border-b border-gray-300 p-5">
          <h2 className="text-lg font-semibold">Employee Details</h2>

          <button
            onClick={onClose}
            className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4 p-5 text-sm">
          <div>
            <p className="text-slate-500">Name</p>
            <p>{user.name}</p>
          </div>

          <div>
            <p className="text-slate-500">Email</p>
            <p>{user.email}</p>
          </div>

          <div>
            <p className="text-slate-500">Role</p>
            <p>{user.role}</p>
          </div>

          <div>
            <p className="text-slate-500">Status</p>
            <p>{user.isActive ? "Active" : "Inactive"}</p>
          </div>

          <div>
            <p className="text-slate-500">Onboarding Status</p>
            <p>{user.onboardingStatus ?? "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
