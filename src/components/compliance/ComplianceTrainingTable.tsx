"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, Info } from "lucide-react";

type OverdueFilter = "all" | "0-15" | "16-30" | "31-60" | "60+";

const overdueTrainings = [
  {
    id: "1",
    title: "Code of Conduct",
    mandatoryFor: "All Employees",
    overdueDays: 15,
    employeesOverdue: 18,
  },
  {
    id: "2",
    title: "Information Security Awareness",
    mandatoryFor: "All Employees",
    overdueDays: 10,
    employeesOverdue: 14,
  },
  {
    id: "3",
    title: "Anti-Harassment Training",
    mandatoryFor: "All Employees",
    overdueDays: 7,
    employeesOverdue: 9,
  },
  {
    id: "4",
    title: "Data Privacy Essentials",
    mandatoryFor: "All Employees",
    overdueDays: 3,
    employeesOverdue: 6,
  },
  {
    id: "5",
    title: "Regulatory Compliance Basics",
    mandatoryFor: "Finance, HR, IT",
    overdueDays: 1,
    employeesOverdue: 5,
  },
];

export default function ComplianceTrainingTable() {
  const [activeFilter, setActiveFilter] = useState<OverdueFilter>("all");

  const filters: OverdueFilter[] = ["all", "0-15", "16-30", "31-60", "60+"];

  const filteredData = useMemo(() => {
    switch (activeFilter) {
      case "0-15":
        return overdueTrainings.filter(
          (item) => item.overdueDays >= 0 && item.overdueDays <= 15
        );

      case "16-30":
        return overdueTrainings.filter(
          (item) => item.overdueDays >= 16 && item.overdueDays <= 30
        );

      case "31-60":
        return overdueTrainings.filter(
          (item) => item.overdueDays >= 31 && item.overdueDays <= 60
        );

      case "60+":
        return overdueTrainings.filter((item) => item.overdueDays > 60);

      default:
        return overdueTrainings;
    }
  }, [activeFilter]);

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-black">
            Overdue Mandatory Trainings
          </h3>

          <Info size={16} className="text-slate-400" />
        </div>

        <button className="text-base font-medium text-[#3665CA] hover:text-[#3665CA]/60 cursor-pointer">
          View all
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 px-5 pb-5">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition-all cursor-pointer ${
              activeFilter === filter
                ? "bg-[#2563EB] text-white"
                : "bg-[#D9D9D9]/30 text-black"
            }`}
          >
            {filter === "all" ? "All" : `${filter} days`}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#D9D9D9]/30 text-left">
              <th></th>
              <th className="px-5 pl-2 py-4 text-xs font-semibold">
                Training Title
              </th>

              <th className="px-5 py-4 text-xs font-semibold">Mandatory For</th>

              <th className="px-5 py-4 text-xs font-semibold">Overdue By</th>

              <th className="px-5 py-4 text-xs font-semibold">
                Employees Overdue
              </th>

              <th className="px-5 py-4 text-xs font-semibold">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-black/5 text-xs fornt-normal"
              >
                <td className="px-2 py-4">
                  <AlertTriangle size={22} className="text-red-500" />
                </td>
                <td className="px-5 pl-2 py-4">
                  <div></div>
                  <p className="font-normal">{item.title}</p>
                </td>

                <td className="px-5 py-4 text-black">{item.mandatoryFor}</td>

                <td className="px-5 py-4 text-[#F23434]">
                  {item.overdueDays} days
                </td>

                <td className="px-5 py-4 fornt-normal">
                  {item.employeesOverdue}
                </td>

                <td className="px-5 py-4">
                  <button className="font-medium text-[#3665CA] hover:text-[#3665CA]/60 cursor-pointer">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center px-5 py-4 gap-4 text-xs">
        <span className="text-black">
          Showing 1 to {filteredData.length} of 24
        </span>

        <button className="font-medium text-[#3665CA] hover:text-[#3665CA]/60 cursor-pointer">
          View all
        </button>
      </div>
    </div>
  );
}
