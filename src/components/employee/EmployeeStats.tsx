import EmployeeStatCard from "./EmployeeStatCard";
import { employeeMetrics } from "@/data/employee-mock-data";

export default function EmployeeStats() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
      {employeeMetrics.map((metric) => (
        <EmployeeStatCard key={metric.title} {...metric} />
      ))}
    </section>
  );
}
