import { AlignLeft, CalendarDays, FileOutput } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <header className="border-b border-slate-200 pb-6">
      {/* Main container */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left Side */}
        <div className="flex items-start gap-3 min-w-0 flex-1">
          <AlignLeft size={38} className="mt-1 text-slate-900 shrink-0" />
          <div className="min-w-0 flex-1">
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-base text-slate-500">{subtitle}</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <div
            className="flex items-center gap-3 rounded-md border border-slate-300 bg-white px-4 py-2 
                shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="text-sm font-semibold text-slate-900 whitespace-nowrap">
              May 12 - May 25, 2026
            </span>
            <CalendarDays size={18} className="text-slate-700 shrink-0" />
          </div>

          <button
            className="flex items-center gap-3 rounded-md border border-slate-300 bg-white cursor-pointer 
                    px-4 py-2 font-semibold text-slate-900 shadow-sm transition-all duration-300 
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
