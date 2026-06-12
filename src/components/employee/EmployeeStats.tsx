import EmployeeStatCard from "./EmployeeStatCard";
import { employeeMetrics } from "@/data/employee-mock-data";
import { Department } from "@/types/department";
import { User } from "@/types/user";
import { Module } from "@/types/module";

interface EmployeeStatsProps {
  users: User[];
  departments: Department[];
  modules: Module[];
}

export default function EmployeeStats({
  users,
  departments,
  modules,
}: EmployeeStatsProps) {
  const employeeCount = users.filter((user) => user.role === "employee").length;
  const departmentCount = departments.length;
  const roleCount = new Set(users.map((user) => user.role)).size;
  const publishedModules = modules.filter(
    (module) => module.status === "published"
  ).length;

  const metrics = employeeMetrics
    .filter((metric) => metric.title !== "Onboarding")
    .map((metric) => {
      if (metric.title === "Total Employees") {
        return {
          ...metric,
          value: employeeCount.toString(),
          subtitle: "Active Employee Accounts",
        };
      }

      if (metric.title === "Department") {
        return {
          ...metric,
          value: departmentCount.toString(),
          subtitle: "Available Departments",
        };
      }

      if (metric.title === "Active Roles") {
        return {
          ...metric,
          value: roleCount.toString(),
          subtitle: "Assigned User Roles",
        };
      }

      if (metric.title === "Published Training") {
        return {
          ...metric,
          value: publishedModules.toString(),
          subtitle: "Available Learning Modules",
        };
      }

      return metric;
    });

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {metrics.map((metric) => (
        <EmployeeStatCard key={metric.title} {...metric} />
      ))}
    </section>
  );
}
