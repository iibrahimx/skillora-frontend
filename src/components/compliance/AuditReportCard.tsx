import { Download } from "lucide-react";

interface AuditReportCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBgColor: string;
}

export default function AuditReportCard({
  title,
  description,
  icon: Icon,
  iconColor,
  iconBgColor,
}: AuditReportCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Icon */}
      <div
        className="mb-4 flex h-8 w-8 items-center justify-center rounded-md"
        style={{
          backgroundColor: iconBgColor,
        }}
      >
        <Icon
          size={28}
          style={{
            color: iconColor,
          }}
        />
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
