"use client";

import { useState } from "react";
import { X } from "lucide-react";

import { User } from "@/types/user";
import { Department } from "@/types/department";
import { useUpdateUser } from "@/hooks/useUpdateUser";

interface EditEmployeeModalProps {
  open: boolean;
  onClose: () => void;
  user: User | null;
  departments: Department[];
}

export default function EditEmployeeModal({
  open,
  onClose,
  user,
  departments,
}: EditEmployeeModalProps) {
  const updateUserMutation = useUpdateUser();

  const [formData, setFormData] = useState(() => ({
    name: "",
    email: "",
    department: "",
  }));

  const [initializedUserId, setInitializedUserId] = useState<string | null>(
    null
  );

  if (user && initializedUserId !== user._id) {
    setInitializedUserId(user._id);

    setFormData({
      name: user.name,
      email: user.email,
      department: user.department,
    });
  }

  if (!open || !user) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await updateUserMutation.mutateAsync({
        id: user._id,
        payload: {
          name: formData.name,
          email: formData.email,
          department: formData.department,
        },
      });

      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[580px] max-w-lg rounded-xl bg-white border border-gray-400 shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-gray-300 p-5">
          <h2 className="text-lg font-semibold">Edit Employee</h2>

          <button
            onClick={onClose}
            className="rounded p-1 hover:bg-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 p-5">
          <div>
            <label className="mb-1 block text-sm font-medium">Full Name</label>

            <input
              required
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>

            <input
              required
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium">Department</label>

            <select
              value={formData.department}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  department: e.target.value,
                }))
              }
              className="w-full rounded-md border border-slate-300 px-3 py-2"
            >
              {departments.map((department) => (
                <option key={department._id} value={department._id}>
                  {department.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={updateUserMutation.isPending}
              className="rounded-md bg-[#3665CA] px-4 py-2 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:bg-[#2850a9]"
            >
              {updateUserMutation.isPending ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
