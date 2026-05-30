"use client";

import { CalendarDays } from "lucide-react";

export default function DateRangePicker() {
  const endDate = new Date();

  const startDate = new Date();
  startDate.setDate(endDate.getDate() - 13);

  const formatMonthDay = (date: Date) =>
    date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });

  const year = endDate.getFullYear();

  return (
    <button
      className="
        flex items-center gap-3
        rounded-md border border-[#cbd5e1]
        bg-white px-4 py-2
        shadow-sm
        transition-all duration-300
        hover:-translate-y-0.5
        hover:shadow-md
      "
    >
      <span className="whitespace-nowrap text-sm font-semibold text-[#0f172a]">
        {formatMonthDay(startDate)} - {formatMonthDay(endDate)}, {year}
      </span>

      <CalendarDays size={18} className="shrink-0 text-[#334155]" />
    </button>
  );
}
