import { RefreshCcw, Info } from "lucide-react";

import AuditReportCard from "./AuditReportCard";
import { auditReports } from "@/data/compliance-mock-data";
import DataTimestamp from "../common/DataTimestamp";

export default function AuditReadyReports() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="mb-1 px-6 pt-6">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-slate-900">
            Audit-Ready Report
          </h3>

          <Info size={19} className="text-slate-400" />
        </div>

        <p className="mt-1 text-sm text-slate-500">
          Download pre-configured reports for audits, compliance reviews, and
          management reporting.
        </p>
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 gap-5 px-6 py-2 md:grid-cols-2 xl:grid-cols-5">
        {auditReports.map((report) => (
          <AuditReportCard
            key={report.id}
            title={report.title}
            description={report.description}
            icon={report.icon}
            iconColor={report.iconColor}
            iconBgColor={report.iconBgColor}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-3 px-8 pb-3 text-xs text-black lg:flex-row lg:items-center lg:justify-between">
        <span>All times are shown in your local timezone.</span>

        <div className="flex items-center gap-6">
          <DataTimestamp />

          <button className="flex items-center gap-2 font-medium text-[#0404FF] hover:text-[#0404FF]/40 cursor-pointer">
            <RefreshCcw size={19} />
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}
