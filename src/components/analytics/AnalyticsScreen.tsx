import PageHeader from "@/components/common/PageHeader";
// import CompletionRateChart from "../dashboard/CompletionRateCard";
import CompletionRates from "./CompletionRates";
import QuizPerformance from "./QuizPerformance";
import EngagementMetrics from "./EngagementMetrics";
import IncompleteUsers from "./IncompleteUsers";
import ExportReportBlock from "./ExportReportBlock";

export default function AnalyticsScreen() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Analytics Dashboard"
        // subtitle=""
      />

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <CompletionRates />
        <QuizPerformance />
      </section>

      <section className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <EngagementMetrics />
        <IncompleteUsers />
      </section>

      <ExportReportBlock />
    </div>
  );
}
