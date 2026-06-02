import { Info, TrendingUp } from "lucide-react";

interface ComplianceStatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
}

export default function ComplianceStatCard({
  title,
  value,
  change,
  icon: Icon,
  color,
  bgColor,
}: ComplianceStatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-start justify-between">
        <p className="text-sm font-medium text-black">{title}</p>

        <Info size={19} className="text-slate-400" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ color }}>
            {value}
          </h2>
        </div>

        <div
          className="flex h-14 w-14 items-center justify-center rounded-full"
          style={{ backgroundColor: bgColor }}
        >
          <Icon size={30} style={{ color }} />
        </div>
      </div>
      <div className="mt-4 flex items-start gap-1">
        <TrendingUp size={16} style={{ color }} />

        <span className="text-xs font-medium text-[#229E22]">{change}</span>

        <span className="text-xs text-black">vs May 12 - May 25, 2026</span>
      </div>
    </div>
  );
}
