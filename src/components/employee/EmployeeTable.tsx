"use client";

import { useMemo, useState } from "react";
import { Search, Filter, Download, Plus, MoreVertical } from "lucide-react";
import Image from "next/image";
import { employees } from "@/data/employee-mock-data";

export default function EmployeeTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  // Filter function
  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) => {
      const search = searchTerm.toLowerCase();

      return (
        employee.name.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search) ||
        employee.role.toLowerCase().includes(search)
      );
    });
  }, [searchTerm]);

  // Pgination function
  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);

  const paginatedEmployees = filteredEmployees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="rounded-xl border border-[#D9D9D9] bg-white h-full flex flex-col">
      <div className="flex items-center justify-between border-b border-[#D9D9D9] p-4">
        <h3 className="text-sm font-semibold text-black">Employee List</h3>

        <div className="flex items-center gap-3">
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
              className="h-9 w-[230px] rounded-md border border-[#D9D9D9] pl-10 pr-4 text-xs outline-none"
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

          <button className="flex h-9 items-center gap-2 rounded-md bg-[#3665CA] px-4 text-xs font-medium text-white cursor-pointer">
            <Plus size={16} />
            Add Employee
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-b space-x-4 border-[#D9D9D9] bg-[#FAFAFA]">
              <th className="w-[170px] lg:w-[140px] px-6 py-4 text-left text-xs font-semibold">
                Employee
              </th>

              <th className="w-[120px] px-8 py-4 text-left text-xs font-semibold">
                Department
              </th>

              <th className="w-[90px] px-4 py-4 text-left text-xs font-semibold">
                Role
              </th>

              <th className="w-[100px] px-3 py-4 text-left text-xs font-semibold">
                Onboarding Status
              </th>

              <th className="w-[110px] px-3 py-4 text-left text-xs font-semibold">
                Tracking
              </th>

              <th className="w-[60px] px-2 py-4 text-left text-xs font-semibold">
                Status
              </th>

              <th className="w-[60px] px-2 py-4 text-left text-xs font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {paginatedEmployees.map((employee) => (
              <tr
                key={employee.id}
                className="border-b space-x-4 border-[#E5E5E5]"
              >
                <td className="px-3 py-4 w-[300px] lg:w-[140px]">
                  <div className="flex items-center justify-between gap-3 min-w-0">
                    <div className="relative flex-shrink-0 overflow-hidden rounded-full bg-[#F3F3F3]">
                      <Image
                        src={employee.avatar}
                        alt={employee.name}
                        width={38}
                        height={38}
                        className="object-cover"
                      />
                    </div>

                    <div className="w-full">
                      <p className="text-[10px] font-medium text-black">
                        {employee.name}
                      </p>

                      <p className="text-[8px] text-black">{employee.email}</p>
                    </div>
                  </div>
                </td>

                <td className="px-3 py-4">
                  <div className="ml-6 flex items-center gap-1.5">
                    <Image
                      src={employee.departmentIcon}
                      alt={employee.department}
                      width={11}
                      height={11}
                    />
                    <span className="whitespace-nowrap text-[10px] text-black">
                      {employee.department}
                    </span>
                  </div>
                </td>

                <td className="w-[90px] px-3 py-4 text-[10px]">
                  {employee.role}
                </td>

                <td className="px-3 py-4">
                  <div className="space-y-1">
                    <span
                      className={`rounded px-2 py-1 text-[10px] ${
                        employee.onboardingStatus === "Completed"
                          ? "bg-[#EAFBF0] text-[#22A447]"
                          : employee.onboardingStatus === "In Progress"
                            ? "bg-[#FFF7E6] text-[#F59E0B]"
                            : "bg-[#F4F4F4] text-[#777]"
                      }`}
                    >
                      {employee.onboardingStatus}
                    </span>
                    <p className="text-[10px] mt-1 text-black">
                      {employee.onboardingDate}
                    </p>
                  </div>
                </td>

                <td className="px-3 py-4">
                  <div className="space-y-1">
                    <p className="text-[10px] text-black">
                      {employee.completedTraining}/{employee.totalTraining}
                    </p>

                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-16 rounded-full bg-[#E5E5E5]">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${employee.progress}%`,
                            backgroundColor:
                              employee.progress === 100
                                ? "#16A34A"
                                : employee.progress >= 50
                                  ? "#0404FF"
                                  : "#F59E0B",
                          }}
                        />
                      </div>

                      <span className="text-[10px]">{employee.progress}%</span>
                    </div>
                  </div>
                </td>

                <td className="w-[60px] px-2 py-4">
                  <span
                    className={`rounded px-2 py-1 text-[10px] ${
                      employee.status === "Active"
                        ? "bg-[#EAFBF0] text-[#22A447]"
                        : "bg-[#FFE8E8] text-[#E53935]"
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>

                <td className="w-[60px] px-4 py-4">
                  <button className="cursor-pointer">
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

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
              className="flex h-8 w-8 items-center justify-center rounded border border-[#D9D9D9] cursor-pointer"
            >
              {"<"}
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`h-8 w-8 rounded text-xs cursor-pointer ${
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
              className="flex h-8 w-8 items-center justify-center rounded border border-[#D9D9D9] cursor-pointer"
            >
              {">"}
            </button>
          </div>

          <select className="h-8 rounded border border-[#D9D9D9] px-2 text-xs">
            <option>8 per page</option>
          </select>
        </div>
      </div>
    </div>
  );
}
