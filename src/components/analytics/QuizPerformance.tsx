"use client";

import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   ResponsiveContainer,
//   LineChart,
//   Line,
// } from "recharts";
// import { Info } from 'lucide-react';
// import {
//   quizPerformanceData,
//   sparklineScores,
//   sparklineQuizzes,
//   sparklinePassRate,
// } from "./analytics-data";
import { Info } from "lucide-react";
import { useAnalytics } from "@/hooks/useAnalytics";

export default function QuizPerformance() {
  const { data: analyticsData } = useAnalytics();

  const analytics = analyticsData?.data;

  return (
    <section className="w-full h-full flex flex-col justify-between min-h-0 p-6">
      <div>
        <div className="flex items-center space-x-2 mb-5">
          <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
            Monitor Quiz Performance
          </h2>
          <Info size={19} className="text-slate-400" />
        </div>

        <div className="grid grid-cols-3 gap-3.5 mb-6">
          {[
            {
              title: "Average Score",
              value: `${analytics?.avgQuizScore ?? 0}%`,
              // data: sparklineScores,
              color: "#22c55e",
              bg: "bg-emerald-50/50",
            },
            {
              title: "Quizzes Taken",
              value: `${analytics?.totalAssignments ?? 0}`,
              // data: sparklineQuizzes,
              color: "#f97316",
              bg: "bg-orange-50/50",
            },
            {
              title: "Pass Rate",
              value: "--",
              // data: sparklinePassRate,
              color: "#a855f7",
              bg: "bg-purple-50/50",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} p-3 rounded-xl flex flex-col justify-between h-20 relative`}
            >
              <div>
                <span className="text-[11px] font-bold text-gray-700 block">
                  {item.title}
                </span>
                <span className="text-lg font-black text-gray-900 leading-none block mt-1">
                  {item.value}
                </span>
              </div>
              <div className="h-6 w-full absolute bottom-2 left-0 right-0 px-2">
                {/* <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={item.data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke={item.color}
                      strokeWidth={1.5}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer> */}
                <div className="h-6 flex items-center">
                  <span className="text-[10px] text-black/40">
                    No trend data
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="h-48 w-full relative pl-2">
        {/* <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={quizPerformanceData}
            margin={{ top: 25, right: 10, left: 10, bottom: 0 }}
            barGap={0}
          >
            <YAxis
              axisLine={{ stroke: "#6b7280", strokeWidth: 1.5 }}
              tick={false}
              width={2}
            />
            <XAxis
              dataKey="range"
              axisLine={{ stroke: "#6b7280", strokeWidth: 1.5 }}
              tickLine={false}
              tick={{
                fontSize: 10,
                fontWeight: 700,
                fill: "#374151",
              }}
              dy={8}
            />
            <Bar
              dataKey="count"
              fill="#6b21a8"
              radius={[8, 8, 0, 0]}
              barSize={52}
              label={{
                position: "top",
                className: "fill-gray-900 font-extrabold text-xs",
                offset: 10,
              }}
            />
          </BarChart>
        </ResponsiveContainer> */}
        <div className="h-full flex items-center justify-center">
          <span className="text-[30px] text-black/40">No trend data</span>
        </div>
      </div>
    </section>
  );
}
