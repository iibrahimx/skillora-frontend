import { User } from "@/types/user";

interface RoleManagementCardProps {
  users: User[];
}

export default function RoleManagementCard({ users }: RoleManagementCardProps) {
  const roleCounts = users.reduce(
    (acc, user) => {
      acc[user.role] = (acc[user.role] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );

  const roles = Object.entries(roleCounts).map(([role, count]) => ({
    role,
    employees: count,
    status: "Active",
  }));

  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm py-2">
      <div className="flex items-center justify-between px-3 py-2">
        <h3 className="text-sm font-semibold text-black">Team Distribution</h3>

        <button className="text-xs font-medium text-[#0404FF] cursor-pointer">
          View all
        </button>
      </div>

      <table className="w-full">
        <thead>
          <tr className="bg-[#D9D9D9]">
            <th className="px-2 py-1 text-left text-[10px] font-semibold text-black">
              Role
            </th>

            <th className="px-2 py-1 text-left text-[10px] font-semibold text-black">
              Employees
            </th>

            <th className="px-2 py-1 text-left text-[10px] font-semibold text-black">
              Status
            </th>
          </tr>
        </thead>

        <tbody>
          {roles.map((role) => {
            const formattedRole =
              role.role === "admin" ? "Administrator" : "Employee";
            return (
              <tr key={role.role} className="border-t border-black">
                <td className="px-2 py-1 text-[10px] text-black">
                  {formattedRole}
                </td>

                <td className="px-6 py-1 text-[10px] text-black">
                  {role.employees}
                </td>

                <td className="px-2 py-1">
                  <span className="rounded bg-[#32B942]/30 px-2 py-1 text-[10px] text-[#33AE1A]">
                    {role.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* <button className="px-4 py-2 text-xs font-medium text-[#0404FF] cursor-pointer">
        + Add New Role
      </button> */}
    </div>
  );
}
