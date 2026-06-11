import { Download } from "lucide-react";
import Image from "next/image";

interface AuditReportCardProps {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string;
}

export default function AuditReportCard({
  title,
  description,
  icon,
  iconBgColor,
}: AuditReportCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Icon */}
      <div
        className="mb-4 flex h-8 w-8 items-center justify-center"
        style={{
          backgroundColor: iconBgColor,
        }}
      >
        <Image src={icon} alt={title} width={28} height={28} />
      </div>

      {/* Content */}
      <h4 className="text-sm font-semibold text-black">{title}</h4>

      <p className="mt-2 flex-1 text-xs font-normal text-black/70">
        {description}
      </p>

      {/* Action */}
      <button className="mt-4 flex items-center gap-2 text-xs font-medium text-black hover:text-black/60">
        <Download size={20} />
        Download
      </button>
    </div>
  );
}
