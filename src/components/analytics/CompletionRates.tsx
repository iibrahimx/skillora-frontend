"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { completionData } from "./analytics-data";
import { Info } from "lucide-react";
// import { completionData } from '@/lib/data';

export default function CompletionRates() {
  const totalUsers = 1400;

  return (
    <section className="w-full h-full flex flex-col justify-between min-h-[390px] p-6">
      <div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-xl font-bold text-gray-950 tracking-tight">
              View Completion Rates
            </h2>
            <Info size={19} className="text-slate-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-6 items-center mt-4">
          <div className="sm:col-span-2 h-40 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={completionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={54}
                  outerRadius={72}
                  stroke="none"
                  dataKey="value"
                  strokeLinecap="round"
                  startAngle={90}
                  endAngle={-270}
                >
                  {completionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke={entry.color}
                      strokeWidth={1}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="sm:col-span-3 space-y-5 pl-2">
            {completionData.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between text-sm whitespace-nowrap"
              >
                <div className="flex items-center space-x-3">
                  <span
                    className="w-4 h-4 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="font-bold text-gray-900 text-base">
                    {item.name}
                  </span>
                </div>
                <span className="font-bold text-gray-900 text-base tabular-nums">
                  {item.value} (
                  {item.name === "In Progress"
                    ? "32"
                    : item.name === "Completed"
                      ? "78%"
                      : "5%"}
                  )
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-gray-300 flex justify-between items-center mt-2">
        <span className="text-gray-900 font-bold text-base">Total Users</span>
        <span className="text-xl font-bold text-gray-950 tabular-nums">
          {totalUsers}
        </span>
      </div>
    </section>
  );
}
