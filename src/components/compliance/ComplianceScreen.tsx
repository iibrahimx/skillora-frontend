import PageHeader from "@/components/common/PageHeader";
import ComplianceStats from "./ComplianceStats";
import ComplianceTrainingTable from "./ComplianceTrainingTable";
import ComplianceDepartmentStatus from "./ComplianceDepartmentStatus";
import AuditReadyReports from "./AuditReadyReports";

export default function ComplianceScreen() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Compliance Monitoring"
        subtitle="Track compliance status, overdue trainings, and audit readiness across the organization."
      />

      <ComplianceStats />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <ComplianceTrainingTable />
        <ComplianceDepartmentStatus />
      </section>

      <AuditReadyReports />
    </div>
  );
}
