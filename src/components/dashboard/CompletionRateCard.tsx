import { Info, TrendingUp, CheckCircle2 } from "lucide-react";

export default function CompletionRateCard() {
  return (
    <div className="flex h-[146px] flex-col rounded-2xl border border-[#e2e8f0] bg-[#EEF4FF] p-5 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[#2563EB]">Completion Rates</p>

        <Info size={14} className="text-[#94a3b8]" />
      </div>

      {/* Main Content */}
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#DBEAFE]">
          <CheckCircle2 size={30} className="text-[#2563EB]" />
        </div>

        <h2 className="text-[35px] font-bold leading-none text-[#0f172a]">
          70%
        </h2>
      </div>

      {/* Footer */}
      <div className="mt-2 flex items-center gap-2">
        <TrendingUp size={14} className="text-green-600" />

        <span className="text-sm font-semibold text-green-600">+7%</span>

        <span className="text-xs text-[#64748b]">vs last 7 days</span>
      </div>
    </div>
  );
}
