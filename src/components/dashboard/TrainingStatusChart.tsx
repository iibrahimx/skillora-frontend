"use client";

import { useAnalytics } from "@/hooks/useAnalytics";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function TrainingStatusChart() {
  const { data: analyticsData } = useAnalytics();

  const analytics = analyticsData?.data;

  const data = [
    {
      name: "Completed",
      value: analytics?.completedPercentage ?? 0,
      color: "#2CAA36",
    },
    {
      name: "In Progress",
      value: analytics?.inProgressPercentage ?? 0,
      color: "#C2BB33",
    },
    {
      name: "Not Started",
      value: analytics?.notStartedPercentage ?? 0,
      color: "#BB2929",
    },
  ];

  return (
    <div className="h-full min-w-0 overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#F2F0F0] p-6 shadow-sm">
      <h3 className="mb-2 text-[15px] font-bold text-black">
        Training Status Distribution
      </h3>

      <div className="flex h-[300px] items-center justify-start gap-4">
        <div className="relative h-[240px] w-[200px] flex-shrink-0">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                innerRadius={70}
                outerRadius={92}
                dataKey="value"
              >
                {data.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[15px] text-black">Completed Training</span>

            <span className="text-[32px] font-bold">
              {analytics?.completedPercentage ?? 0}%
            </span>
          </div>
        </div>

        <div className="min-w-0 space-y-4">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex flex-row  items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: item.color,
                  }}
                />

                <span className="text-xs xl:text-base min-w-0 font-medium text-black">
                  {item.name}
                </span>
              </div>

              <span className="text-xs xl:text-base shrink-0 font-semibold text-black">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
