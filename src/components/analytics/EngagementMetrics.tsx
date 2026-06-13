"use client";

import React from "react";
// import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
// import { engagementTimeline } from "./analytics-data";

export default function EngagementMetrics() {
  return (
    <section className="w-full h-full flex flex-col justify-between rounded-xl p-6 min-h-[430px]">
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="text-xl font-bold text-gray-950 tracking-tight mb-4">
          Track Engagement Metrics
        </h2>

        <div className="w-full flex-1 h-48 mt-4 pr-2">
          {/* <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={engagementTimeline}
              margin={{ top: 10, right: 5, left: -25, bottom: 5 }}
            >
              <XAxis
                dataKey="date"
                axisLine={{ stroke: "#9ca3af", strokeWidth: 1.5 }}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fontWeight: 700,
                  fill: "#6b7280",
                }}
                dy={10}
              />
              <YAxis
                axisLine={{ stroke: "#9ca3af", strokeWidth: 1.5 }}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fontWeight: 700,
                  fill: "#6b7280",
                }}
                dx={-5}
                domain={[0, 2000]}
                ticks={[0, 500, 1000, 1500, 2000]}
                tickFormatter={(value) =>
                  value >= 1000 ? `${value / 1000}K` : value
                }
              />
              <Line
                type="monotone"
                dataKey="clicks"
                stroke="#2f60cf"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer> */}
          <div className="flex h-full items-center justify-center">
            <p className="text-xl text-gray-500">
              Engagement data not available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
