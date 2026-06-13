"use client";

import { PieChart, Pie, Cell } from "recharts";
import { User } from "@/types/user";

interface OnboardingStatusCardProps {
  users: User[];
}

export default function OnboardingStatusCard({
  users,
}: OnboardingStatusCardProps) {
  const completed = users.filter(
    (user) => user.onboardingStatus?.toLowerCase() === "completed"
  ).length;

  const notStarted = users.filter(
    (user) => user.onboardingStatus?.toLowerCase() === "not started"
  ).length;

  const inProgress = users.filter(
    (user) => user.onboardingStatus?.toLowerCase() === "in progress"
  ).length;

  const total = users.length;

  const data = [
    {
      name: "Completed",
      value: completed,
      color: "#39D739",
    },
    {
      name: "In Progress",
      value: inProgress,
      color: "#D32F2F",
    },
    {
      name: "Not Started",
      value: notStarted,
      color: "#C9B800",
    },
  ];

  const getPercentage = (value: number) => {
    if (!total) return 0;

    return Math.round((value / total) * 100);
  };

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
            <Pie data={data} innerRadius={22} outerRadius={34} dataKey="value">
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-lg font-bold text-black">{total}</span>

            <span className="text-[10px] text-black">Total</span>
          </div>
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-center justify-between text-[10px]">
            <span>Completed</span>

            <span>
              {completed} ({getPercentage(completed)}%)
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px]">
            <span>In Progress</span>

            <span>
              {inProgress} ({getPercentage(inProgress)}%)
            </span>
          </div>

          <div className="flex items-center justify-between text-[10px]">
            <span>Not Started</span>

            <span>
              {notStarted} ({getPercentage(notStarted)}%)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
