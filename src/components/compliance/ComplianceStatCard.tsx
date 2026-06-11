import { Info, TrendingUp } from "lucide-react";
import ProgressRing from "../common/ProgressRing";
import Image from "next/image";

interface ComplianceStatCardProps {
  title: string;
  value: string;
  change: string;
  percentage?: number;
  icon?: string;
  color: string;
  bgColor: string;
}

export default function ComplianceStatCard({
  title,
  value,
  change,
  icon,
  color,
  bgColor,
  percentage,
}: ComplianceStatCardProps) {
  return (
    <div className="rounded-2xl flex flex-col justify-between border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-start gap-2">
        <p className="text-sm font-medium text-black">{title}</p>

        <Info size={19} className="text-slate-400" />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold" style={{ color }}>
            {value}
          </h2>
        </div>

        {percentage ? (
          <ProgressRing percentage={percentage} />
        ) : (
          <div
            className="flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              backgroundColor: bgColor,
            }}
          >
            {icon && <Image src={icon} alt={title} width={30} height={30} />}
          </div>
        )}
      </div>

      <div className="mt-4 flex items-start gap-1">
        <TrendingUp size={16} style={{ color }} />

        <span className="text-xs font-medium text-[#229E22]">{change}</span>

        <span className="text-xs text-black">vs May 12 - May 25, 2026</span>
      </div>
    </div>
  );
}
