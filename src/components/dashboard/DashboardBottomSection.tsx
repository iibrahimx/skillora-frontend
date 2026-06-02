import DashboardSummary from "./DashboardSummary";
import DashboardAlerts from "./DashboardAlerts";

export default function DashboardBottomSection() {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.6fr_1.2fr] items-stretch">
      <div className="min-w-0">
        <DashboardSummary />
      </div>

      <div className="min-w-0">
        <DashboardAlerts />
      </div>
    </section>
  );
}
