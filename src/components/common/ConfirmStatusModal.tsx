"use client";

interface ConfirmStatusModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  employeeName: string;
  activate: boolean;
}

export default function ConfirmStatusModal({
  open,
  onClose,
  onConfirm,
  employeeName,
  activate,
}: ConfirmStatusModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl bg-white p-6"
      >
        <h2 className="mb-3 text-lg font-semibold">
          {activate ? "Activate Employee" : "Deactivate Employee"}
        </h2>

        <p className="text-sm text-slate-600">
          Are you sure you want to {activate ? "activate" : "deactivate"}{" "}
          <strong>{employeeName}</strong>?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-md border border-gray-300 px-4 py-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-md bg-[#3665CA] px-4 py-2 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg cursor-pointer"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
