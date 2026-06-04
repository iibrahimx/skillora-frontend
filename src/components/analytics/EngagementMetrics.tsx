"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  Clock,
  Activity,
  MessageSquare,
  MousePointerClick,
  ArrowUp,
} from "lucide-react";
import { engagementMetrics, engagementTimeline } from "./analytics-data";

const iconMap = {
  time: Clock,
  sessions: Activity,
  interaction: MessageSquare,
  clicks: MousePointerClick,
};
const bgMap = {
  time: "bg-indigo-50 text-indigo-600",
  sessions: "bg-emerald-50 text-emerald-600",
  interaction: "bg-pink-50 text-pink-600",
  clicks: "bg-orange-50 text-orange-600",
};

export default function EngagementMetrics() {
  return (
    <section className="w-full h-full flex flex-col justify-between rounded-xl p-6 min-h-[430px]">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-950 tracking-tight mb-4">
            Track Engagement Metrics
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
            {engagementMetrics.map((metric) => {
              const Icon = iconMap[metric.type];
              return (
                <div
                  key={metric.title}
                  className={`p-3 rounded-xl flex flex-col items-center justify-between text-center ${bgMap[metric.type]}`}
                >
                  <Icon className="w-4 h-4 opacity-90" />
                  <span className="text-[10px] font-bold text-gray-500 my-1.5 block min-h-[24px] leading-tight">
                    {metric.title}
                  </span>
                  <span className="text-xl font-extrabold tracking-tight text-gray-900">
                    {metric.value}
                  </span>
                  <div className="flex items-center space-x-0.5 text-[11px] font-extrabold mt-1">
                    <ArrowUp className="w-3 h-3 stroke-[3]" />
                    <span>{metric.change}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full h-48 mt-4 pr-2">
          <ResponsiveContainer width="100%" height="100%">
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
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
