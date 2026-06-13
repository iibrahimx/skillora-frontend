"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { Department } from "@/types/department";
import { useDepartments } from "@/hooks/useDepartments";
import { useCreateUser } from "@/hooks/useCreateUser";

interface AddEmployeeModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddEmployeeModal({
  open,
  onClose,
}: AddEmployeeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  const { data: departmentsData } = useDepartments();

  const createUserMutation = useCreateUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "employee",
    department: "",
  });

  const departments: Department[] = departmentsData?.data ?? [];

  useEffect(() => {
    if (!open) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const firstInput = modalRef.current?.querySelector(
      "input"
    ) as HTMLInputElement | null;

    firstInput?.focus();
  }, [open]);

  useEffect(() => {
    if (!open || !modalRef.current) return;

    const focusableElements = modalRef.current.querySelectorAll(
      'button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleTab);

    return () => {
      document.removeEventListener("keydown", handleTab);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await createUserMutation.mutateAsync(formData);

      setFormData({
        name: "",
        email: "",
        password: "",
        role: "employee",
        department: "",
      });

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="add-employee-title"
        onClick={(e) => e.stopPropagation()}
        className="w-[520px] flex flex-col rounded-2xl bg-white shadow-2xl overflow-hidden"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-3">
          <h2 id="add-employee-title" className="text-lg font-semibold">
            Add Employee
          </h2>

          <button
            onClick={onClose}
            className="rounded p-1 hover:bg-slate-100 cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-6 py-5"
        >
          <div className="space-y-5">
            <div>
              <label className="mb-1 block text-sm font-medium">
                Full Name
              </label>

              <input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none
                transition focus:border-[#3665CA] focus:ring-2 focus:ring-[#3665CA]/20"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Email</label>

              <input
                required
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none
                transition focus:border-[#3665CA] focus:ring-2 focus:ring-[#3665CA]/20"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Password</label>

              <input
                required
                type="password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    password: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none
                transition focus:border-[#3665CA] focus:ring-2 focus:ring-[#3665CA]/20"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">Role</label>

              <select
                value={formData.role}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    role: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none
                transition focus:border-[#3665CA] focus:ring-2 focus:ring-[#3665CA]/20"
              >
                <option value="employee">Employee</option>

                <option value="manager">Manager</option>

                <option value="admin">Admin</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium">
                Department
              </label>

              <select
                required
                value={formData.department}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    department: e.target.value,
                  })
                }
                className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none
                transition focus:border-[#3665CA] focus:ring-2 focus:ring-[#3665CA]/20"
              >
                <option value="">Select Department</option>

                {departments.map((department) => (
                  <option key={department._id} value={department._id}>
                    {department.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end gap-3 pt-5">
              <button
                type="button"
                onClick={onClose}
                className="rounded-lg border border-gray-300 px-4 py-2 font-medium
                hover:bg-gray-100 transition cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={createUserMutation.isPending}
                className="rounded-lg bg-[#3665CA] px-4 py-2.5 font-medium text-white hover:bg-[#2f57b3]
                disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
              >
                {createUserMutation.isPending
                  ? "Creating..."
                  : "Create Employee"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
