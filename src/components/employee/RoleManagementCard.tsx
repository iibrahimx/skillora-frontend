import { roleSummary } from "@/data/employee-mock-data";

export default function RoleManagementCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between px-3 py-3">
        <h3 className="text-sm font-semibold text-black">Role Management</h3>

        <button className="text-xs font-medium text-[#0404FF] cursor-pointer">
          View all
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-[#D9D9D9]">
            <th className="px-2 py-2 text-left text-[10px] font-semibold text-black">
              Role
            </th>

            <th className="px-2 py-2 text-left text-[10px] font-semibold text-black">
              Employees
            </th>

            <th className="px-2 py-2 text-left text-[10px] font-semibold text-black">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {roleSummary.map((role) => (
            <tr key={role.role} className="border-t border-black">
              <td className="px-2 py-2 text-[10px] text-black">{role.role}</td>

              <td className="px-6 py-2 text-[10px] text-black">
                {role.employees}
              </td>

              <td className="px-2 py-2">
                <span className="rounded bg-[#32B942]/30 px-2 py-1 text-[10px] text-[#33AE1A]">
                  {role.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="p-4 text-xs font-medium text-[#0404FF] cursor-pointer">
        + Add New Role
      </button>
    </div>
  );
}
