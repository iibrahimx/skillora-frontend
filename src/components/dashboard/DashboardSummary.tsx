const summaryData = [
  {
    metric: "Completion Rate",
    thisWeek: "75%",
    lastWeek: "63%",
    change: "+7%",
    positive: true,
  },
  {
    metric: "Active Learners",
    thisWeek: "1,234",
    lastWeek: "975",
    change: "+120",
    positive: true,
  },
  {
    metric: "Overdue Trainings",
    thisWeek: "37",
    lastWeek: "28",
    change: "-8",
    positive: false,
  },
  {
    metric: "Compliance Percentage",
    thisWeek: "87%",
    lastWeek: "35%",
    change: "+12%",
    positive: true,
  },
  {
    metric: "Department Report",
    thisWeek: "24",
    lastWeek: "74%",
    change: "+35%",
    positive: true,
  },
];

export default function DashboardSummary() {
  return (
    <div className="h-full rounded-xl border border-[#e2e8f0] bg-[#F2F0F0] p-6 shadow-sm">
      <h3 className="mb-5 text-[15px] font-bold text-black">
        Overview Summary
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b text-[13px] border-slate-300">
              <th className="pb-3 text-left font-bold">Metric</th>

              <th className="pb-3 text-left font-bold">This Week</th>

              <th className="pb-3 text-left font-bold">Last Week</th>

              <th className="pb-3 text-left font-bold">Change</th>
            </tr>
          </thead>

          <tbody>
            {summaryData.map((row) => (
              <tr
                key={row.metric}
                className="text-[12px] font-medium border-b border-slate-200"
              >
                <td className="py-3">{row.metric}</td>

                <td className="py-3">{row.thisWeek}</td>

                <td className="py-3">{row.lastWeek}</td>

                <td
                  className={`py-3 font-medium ${
                    row.positive ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {row.change}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
