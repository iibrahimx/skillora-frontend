import { complianceMetrics } from "@/data/compliance-mock-data";
import ComplianceStatCard from "./ComplianceStatCard";

export default function ComplianceStats() {
  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
      {complianceMetrics.map((metric) => (
        <ComplianceStatCard key={metric.title} {...metric} />
      ))}
    </section>
  );
}
