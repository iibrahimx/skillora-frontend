"use client";

import { useMemo, useState } from "react";
import { Search, Filter, Download, Plus, MoreVertical } from "lucide-react";
import Image from "next/image";
import { User } from "@/types/user";
import { Department } from "@/types/department";
import { getInitials } from "@/lib/getInitials";

interface EmployeeTableProps {
  users: User[];
  departments: Department[];
}

export default function EmployeeTable({
  users,
  departments,
}: EmployeeTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const filteredEmployees = useMemo(() => {
    const employeesOnly = users.filter(
      (user) => user.role.toLowerCase() === "employee"
    );

    return employeesOnly.filter((employee) => {
      const search = searchTerm.toLowerCase();

      return (
        employee.name.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search) ||
        employee.role.toLowerCase().includes(search)
      );
    });
  }, [users, searchTerm]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmployees.length / itemsPerPage)
  );

  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const departmentMap = departments.reduce(
    (acc, department) => {
      acc[department._id] = department.name;
      return acc;
    },
    {} as Record<string, string>
  );

  const departmentIcons: Record<string, string> = {
    Administration: "/icons/operation.svg",
    Backend: "/icons/engineering.svg",
    "Frontend Development": "/icons/product.svg",
    "Virtual Assistant": "/icons/customer-success.svg",
  };

  return (
    <div className="h-full overflow-hidden rounded-xl border border-[#D9D9D9] bg-white flex flex-col">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#D9D9D9] p-4">
        <h3 className="text-sm font-semibold text-black">Employee List</h3>

        <div className="flex flex-wrap items-center gap-3">
          <div className="relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A0A0A0]"
            />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search employees..."
              className="h-9 w-[250px] rounded-md border border-[#D9D9D9] pl-10 pr-4 text-xs outline-none"
            />
          </div>

          <button className="flex h-9 items-center gap-2 rounded-md border border-[#D9D9D9] px-4 text-xs">
            <Filter size={16} />
            Filter
          </button>

          <button className="flex h-9 items-center gap-2 rounded-md border border-[#D9D9D9] px-4 text-xs">
            <Download size={16} />
            Export
          </button>

          <button className="flex h-9 items-center gap-2 rounded-md bg-[#3665CA] px-4 text-xs font-medium text-white">
            <Plus size={16} />
            Add Employee
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="flex-1 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#D9D9D9] bg-[#FAFAFA]">
              <th className="px-6 py-4 text-left text-xs font-semibold">
                Employee
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold">
                Department
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold">
                Role
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold">
                Onboarding Status
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold">
                Tracking
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold">
                Status
              </th>

              <th className="px-4 py-4 text-left text-xs font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedEmployees.map((employee) => {
              // const modules = employee.modules?.length ?? 0;
              // const assignments = employee.assignments?.length ?? 0;

              // const total = Math.max(assignments, 1);
              // const progress = Math.round((modules / total) * 100);

              return (
                <tr
                  key={employee._id}
                  className="border-b border-[#E5E5E5] hover:bg-[#FAFAFA]"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3665CA] text-xs font-semibold text-white">
                        {getInitials(employee.name)}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-black">
                          {employee.name}
                        </p>

                        <p className="text-xs text-[#666]">{employee.email}</p>
                      </div>
                    </div>
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src={
                          departmentIcons[
                            departmentMap[employee.department] ?? ""
                          ] || "/icons/department.svg"
                        }
                        alt="department"
                        width={14}
                        height={14}
                      />

                      <span className="text-xs">
                        {departmentMap[employee.department] ?? "Unknown"}
                      </span>
                    </div>
                  </td>

                  <td className="px-4 py-4 text-xs">{employee.role}</td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded px-2 py-1 text-xs ${
                        employee.onboardingStatus?.toLowerCase() === "completed"
                          ? "bg-[#EAFBF0] text-[#22A447]"
                          : employee.onboardingStatus?.toLowerCase() ===
                              "in progress"
                            ? "bg-[#FFF7E6] text-[#F59E0B]"
                            : "bg-[#F4F4F4] text-[#777]"
                      }`}
                    >
                      {employee.onboardingStatus ?? "Not Started"}
                    </span>
                  </td>

                  <td className="px-3 py-4">
                    {(() => {
                      const modules = employee.modules?.length ?? 0;
                      const assignments = employee.assignments?.length ?? 0;

                      const total = Math.max(assignments, 1);

                      const progress = Math.round((modules / total) * 100);

                      return (
                        <div className="space-y-1">
                          <p className="text-[10px] text-black">
                            {modules}/{assignments}
                          </p>

                          <div className="flex items-center gap-1.5">
                            <div className="h-1.5 w-16 rounded-full bg-[#E5E5E5]">
                              <div
                                className="h-full rounded-full"
                                style={{
                                  width: `${Math.min(progress, 100)}%`,
                                  backgroundColor:
                                    progress === 100
                                      ? "#16A34A"
                                      : progress >= 50
                                        ? "#0404FF"
                                        : "#F59E0B",
                                }}
                              />
                            </div>

                            <span className="text-[10px]">{progress}%</span>
                          </div>
                        </div>
                      );
                    })()}
                  </td>

                  <td className="px-4 py-4">
                    <span
                      className={`rounded px-2 py-1 text-xs ${
                        employee.isActive
                          ? "bg-[#EAFBF0] text-[#22A447]"
                          : "bg-[#FFE8E8] text-[#E53935]"
                      }`}
                    >
                      {employee.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-4 py-4">
                    <button className="cursor-pointer">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-[#D9D9D9] px-4 py-4">
        <p className="text-xs text-[#444]">
          Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
          {Math.min(currentPage * itemsPerPage, filteredEmployees.length)} of{" "}
          {filteredEmployees.length} employees
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="flex h-8 w-8 items-center justify-center rounded border border-[#D9D9D9]"
          >
            {"<"}
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`h-8 w-8 rounded text-xs ${
                currentPage === index + 1
                  ? "bg-[#3665CA] text-white"
                  : "border border-[#D9D9D9]"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="flex h-8 w-8 items-center justify-center rounded border border-[#D9D9D9]"
          >
            {">"}
          </button>
        </div>

        <select className="h-8 rounded border border-[#D9D9D9] px-2 text-xs">
          <option>8 per page</option>
        </select>
      </div>
    </div>
  );
}
