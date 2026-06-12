"use client";

import { onboardingSummary } from "@/data/employee-mock-data";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  {
    name: "Completed",
    value: onboardingSummary.completed,
    color: "#39D739",
  },
  {
    name: "In Progress",
    value: onboardingSummary.inProgress,
    color: "#D32F2F",
  },
  {
    name: "Not Started",
    value: onboardingSummary.notStarted,
    color: "#C9B800",
  },
];

export default function OnboardingStatusCard() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-sm font-bold text-black">Onboarding Status</h3>

        <button className="text-xs font-medium text-[#0404FF] cursor-pointer">
          View all
        </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="relative">
          <PieChart width={80} height={80}>
            <Pie
              data={data}
              innerRadius={22}
              outerRadius={34}
              paddingAngle={1}
              dataKey="value"
            >
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-black">
              {onboardingSummary.total}
            </span>

            <span className="text-[10px] text-black">Total</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between gap-2 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#39D739]" />

              <span>Completed</span>
            </div>

            <span>{onboardingSummary.completed} (61%)</span>
          </div>

          <div className="flex items-center justify-between gap-2 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#39D739]" />

              <span>In Progress</span>
            </div>

            <span>{onboardingSummary.inProgress} (9%)</span>
          </div>

          <div className="flex items-center justify-between gap-2 text-[10px]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#39D739]" />

              <span>Not Started</span>
            </div>

            <span>{onboardingSummary.notStarted} (30%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
