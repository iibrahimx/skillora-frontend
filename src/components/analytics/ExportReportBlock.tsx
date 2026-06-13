"use client";

import React from "react";
import {
  FileText,
  FileSpreadsheet,
  FileCode,
  Presentation,
} from "lucide-react";

const reportTypes = [
  {
    name: "PDF Report",
    // desc: "Download PDF",
    desc: "Coming Soon",
    icon: FileText,
    bg: "bg-[#7A7A7A]/50 text-red-600 border-red-100",
  },
  {
    name: "Excel Report",
    // desc: "Download Excel",
    desc: "Coming Soon",
    icon: FileSpreadsheet,
    bg: "bg-[#7A7A7A]/50 text-emerald-600 border-emerald-100",
  },
  {
    name: "CSV Report",
    // desc: "Download CSV",
    desc: "Coming Soon",
    icon: FileCode,
    bg: "bg-[#7A7A7A]/50 text-slate-700 border-slate-200",
  },
  {
    name: "PPT Report",
    // desc: "Download PPT",
    desc: "Coming Soon",
    icon: Presentation,
    bg: "bg-[#7A7A7A]/50 text-orange-600 border-orange-100",
  },
];

export default function ExportReportBlock() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
      {reportTypes.map((report) => {
        const Icon = report.icon;
        return (
          <button
            disabled
            key={report.name}
            className={`flex items-center space-x-4 p-4 rounded-xl border text-left
              transition-all group shadow-sm
              disabled:cursor-not-allowed
              disabled:opacity-60
              disabled:hover:scale-100
              ${report.bg}`}
          >
            <div
              aria-disabled
              className="p-2.5 rounded-lg bg-white shadow-sm group-hover:shadow-md transition-all"
            >
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                {report.name}
              </h3>
              <p className="text-xs text-[#7A7A7A] font-medium mt-0.5">
                {report.desc}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
