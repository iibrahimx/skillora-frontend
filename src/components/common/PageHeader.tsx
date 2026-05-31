import { AlignLeft, FileOutput } from "lucide-react";
import DateRangePicker from "./DateRangePicker";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="border-b border-[#e2e8f0] pb-6">
      {/* Main container */}
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        {/* Left Side */}
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <AlignLeft size={38} className="mt-1 text-[#0f172a] shrink-0" />
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-[#0f172a] xl:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-base text-[#64748b]">{subtitle}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <DateRangePicker />

          <button
            className="flex items-center gap-3 rounded-md border border-[#cbd5e1] bg-white cursor-pointer 
                    px-4 py-2 font-semibold text-[#0f172a] shadow-sm transition-all duration-300 
                    hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap"
          >
            <FileOutput size={18} className="shrink-0" />
            <span>Export Reports</span>
          </button>
        </div>
      </div>
    </header>
  );
}
