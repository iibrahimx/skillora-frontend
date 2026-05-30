import PageHeader from "@/components/common/PageHeader";
import DashboardStats from "./DashboardStats";
import DashboardCharts from "./DashboardCharts";

export default function DashboardScreen() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard Overview"
        subtitle="Track training performance and compliance across your workforce"
      />

      <DashboardStats />

      <DashboardCharts />
    </div>
  );
}
