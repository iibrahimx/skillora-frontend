import { departmentSummary } from "@/data/employee-mock-data";

export default function DepartmentCard() {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-black">Departments</h3>

        <button className="text-xs font-medium text-[#0000FF] cursor-pointer">
          View all
        </button>
      </div>

      <div className="space-y-3">
        {departmentSummary.map((department) => {
          const Icon = department.icon;

          return (
            <div
              key={department.department}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Icon
                  size={13}
                  style={{
                    color: department.color,
                  }}
                />

                <span className="text-xs text-black">
                  {department.department}
                </span>
              </div>

              <span className="text-sm text-black">{department.employees}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
