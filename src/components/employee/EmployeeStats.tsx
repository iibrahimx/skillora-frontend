import EmployeeStatCard from "./EmployeeStatCard";
import { employeeMetrics } from "@/data/employee-mock-data";
import { Department } from "@/types/department";
import { User } from "@/types/user";

interface EmployeeStatsProps {
  users: User[];
  departments: Department[];
}

export default function EmployeeStats({
  users,
  departments,
}: EmployeeStatsProps) {
  const employeeCount = users.filter((user) => user.role === "employee").length;
  const departmentCount = departments.length;

  const metrics = employeeMetrics.map((metric) => {
    if (metric.title === "Total Employees") {
      return {
        ...metric,
        value: employeeCount.toString(),
        subtitle: "Active Employee Accounts",
      };
    }

    if (metric.title === "Departments") {
      return {
        ...metric,
        value: departmentCount.toString(),
        subtitle: "Available Departments",
      };
    }

    return metric;
  });

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      {metrics.map((metric) => (
        <EmployeeStatCard key={metric.title} {...metric} />
      ))}
    </section>
  );
}
