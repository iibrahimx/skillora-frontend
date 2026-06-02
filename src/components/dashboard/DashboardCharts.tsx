import CompletionRateChart from "./CompletionRateCard";
import TrainingStatusChart from "./TrainingStatusChart";

export default function DashboardCharts() {
  return (
    <section className="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div className="min-w-0">
        <CompletionRateChart />
      </div>

      <div className="min-w-0">
        <TrainingStatusChart />
      </div>
    </section>
  );
}
