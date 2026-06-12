import { AlertCircle, Clock3, ChevronRight } from "lucide-react";

const alerts = [
  {
    title: "42 trainings are overdue",
    description: "These trainings require immediate attention.",
    bg: "#FDF2F2",
    iconColor: "#EF4444",
    isClock: false,
  },
  {
    title: "12 trainings due this week",
    description: "These trainings are due within the next 7 days.",
    bg: "#F0FDF4",
    iconColor: "#22C55E",
    isClock: false,
  },
  {
    title: "Great Job!",
    description: "Compliance percentage increased by 7%",
    bg: "#F5F3FF",
    iconColor: "#8B5CF6",
    isClock: true,
  },
];

export default function DashboardAlerts() {
  return (
    <div className="h-full rounded-xl border border-[#e2e8f0] bg-[#F2F0F0] p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-black">Recent Alerts</h3>

        <button className="text-sm font-bold text-[#3665CA]">View All</button>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-6">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl p-4"
            style={{
              backgroundColor: alert.bg,
            }}
          >
            <div className="flex items-center gap-3">
              {!alert.isClock ? (
                <AlertCircle size={20} style={{ color: alert.iconColor }} />
              ) : (
                <Clock3 size={20} style={{ color: alert.iconColor }} />
              )}

              <div>
                <p className="text-sm font-bold text-black">{alert.title}</p>

                <p className="text-[12px] text-slate-600">
                  {alert.description}
                </p>
              </div>
            </div>

            <ChevronRight size={20} className="text-slate-500" />
          </div>
        ))}
      </div>
    </div>
  );
}
