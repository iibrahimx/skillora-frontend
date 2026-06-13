import Image from "next/image";
interface EmployeeStatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: string;
  color: string;
  bgColor: string;
}

export default function EmployeeStatCard({
  title,
  value,
  subtitle,
  icon,
  // color,
  bgColor,
}: EmployeeStatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-2 py-5 shadow-sm">
      <div className="flex items-start justify-start gap-2">
        <div
          className="flex h-10 w-12 items-center justify-center rounded-md"
          style={{
            backgroundColor: bgColor,
          }}
        >
          <Image src={icon} alt={title} width={17} height={17} />
        </div>
        <div className="flex flex-col items-start">
          <p className="text-xs font-medium text-black">{title}</p>

          <h2 className="mt-4 text-[24px] font-bold text-black">{value}</h2>

          <p className="mt-2 text-xs font-medium text-black">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}
