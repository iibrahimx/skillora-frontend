import { Info, TrendingUp, TrendingDown, LucideIcon } from "lucide-react";

interface DashboardStatCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down";
  icon: LucideIcon;
  cardBg: string;
  titleColor: string;
  iconBg: string;
  iconColor: string;
}

export default function DashboardStatCard({
  title,
  value,
  change,
  trend,
  icon: Icon,
  cardBg,
  titleColor,
  iconBg,
  iconColor,
}: DashboardStatCardProps) {
  return (
    <div
      className={`flex h-[146px] flex-col rounded-xl border border-[#e2e8f0] p-5 shadow-sm ${cardBg}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className={`text-sm font-semibold ${titleColor}`}>{title}</p>

        <Info size={14} className="text-[#94a3b8]" />
      </div>

      {/* Main Content */}
      <div className="mt-4 flex items-center gap-4">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-full ${iconBg}`}
        >
          <Icon size={30} className={iconColor} />
        </div>

        <h2 className="text-[35px] font-bold leading-none text-[#0f172a]">
          {value}
        </h2>
      </div>

      {/* Footer */}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {trend === "up" ? (
          <TrendingUp size={14} className="text-[#1A881A]" />
        ) : (
          <TrendingDown size={14} className="text-[#FF0000]" />
        )}

        <span
          className={`text-sm font-semibold ${
            trend === "up" ? "text-[#1A881A]" : "text-[#FF0000]"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-#646464">vs last 7 days</span>
      </div>
    </div>
  );
}
