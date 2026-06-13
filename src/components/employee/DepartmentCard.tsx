import Image from "next/image";
import { Department } from "@/types/department";

interface DepartmentCardProps {
  departments: Department[];
}

export default function DepartmentCard({ departments }: DepartmentCardProps) {
  const departmentIcons: Record<
    string,
    {
      icon: string;
      color: string;
    }
  > = {
    Administration: {
      icon: "/icons/operation.svg",
      color: "#C026D3",
    },

    Backend: {
      icon: "/icons/engineering.svg",
      color: "#9333EA",
    },

    "Frontend Development": {
      icon: "/icons/product.svg",
      color: "#2563EB",
    },

    "Virtual Assistant": {
      icon: "/icons/customer-success.svg",
      color: "#16A34A",
    },
  };
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-black">Departments</h3>

        <button className="text-xs font-medium text-[#0000FF] cursor-pointer">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {departments.map((department) => {
          const metadata = departmentIcons[department.name];
          return (
            <div
              key={department._id}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={metadata?.icon ?? "/icons/department.svg"}
                  alt={department.name}
                  width={13}
                  height={13}
                />

                <span className="text-xs text-black">{department.name}</span>
              </div>

              <span className="text-xs text-black">
                {department.members.length}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
