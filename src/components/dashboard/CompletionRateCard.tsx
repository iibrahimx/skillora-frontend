"use client";

import {
  BarChart,
  Bar,
  LabelList,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "May 12", rate: 52 },
  { day: "May 13", rate: 59 },
  { day: "May 14", rate: 62 },
  { day: "May 15", rate: 70 },
  { day: "May 16", rate: 80 },
  { day: "May 17", rate: 87 },
  { day: "May 18", rate: 76 },
];

export default function CompletionRateChart() {
  return (
    <div className="h-full min-w-0 overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#F2F0F0] p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-black">
          Completion Rate Over Time
        </h3>

        <select className="text-[15px] font-bold rounded-md border border-[#cbd5e1] px-3 py-2 text-sm">
          <option>Last 7 Days</option>
        </select>
      </div>

      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 0,
              left: -4,
              bottom: 0,
            }}
          >
            <CartesianGrid
              vertical={false}
              stroke="#e2e8f0"
              strokeDasharray="3 3"
            />
            <XAxis
              dataKey="day"
              interval={0}
              tick={{
                fontSize: 12,
                fill: "black",
              }}
            />
            <YAxis
              width={40}
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tickFormatter={(value) => `${value}%`}
              tick={{
                fontSize: 12,
                fill: "black",
              }}
            />
            <Tooltip />
            <Bar
              dataKey="rate"
              fill="#3665CA"
              radius={[6, 6, 0, 0]}
              maxBarSize={60}
            >
              <LabelList
                dataKey="rate"
                position="top"
                formatter={(value) => `${value}%`}
                className="fill-black font-semibold text-xs"
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
