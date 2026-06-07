import PageHeader from "@/components/common/PageHeader";
import EmployeeStats from "./EmployeeStats";
import DepartmentCard from "./DepartmentCard";
import OnboardingStatusCard from "./OnboardingStatusCard";
import RoleManagementCard from "./RoleManagementCard";
import TrainingHistoryCard from "./TrainingHistoryCard";

export default function EmployeeScreen() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Employee Management"
        subtitle="Manage your organization's most valuable asset - your people."
      />

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          <EmployeeStats />
        </div>

        <div className="space-y-4">
          <DepartmentCard />
          <OnboardingStatusCard />
          <TrainingHistoryCard />
          <RoleManagementCard />
        </div>
      </section>
    </div>
  );
}
