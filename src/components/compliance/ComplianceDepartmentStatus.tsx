"use client";

import {
  Building2,
  Users,
  Monitor,
  Settings,
  ShoppingBag,
  Megaphone,
  Headphones,
  Scale,
  TrendingUp,
  TrendingDown,
  Minus,
  Info,
} from "lucide-react";

import { departmentComplianceData } from "@/data/compliance-mock-data";

const icons = {
  Finance: Building2,
  "Human Resources": Users,
  "Information Technology": Monitor,
  Operations: Settings,
  Sales: ShoppingBag,
  Marketing: Megaphone,
  "Customer Services": Headphones,
  Legal: Scale,
};

export default function ComplianceDepartmentStatus() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2">
          <h3 className="text-base font-bold text-slate-900">
            Department Compliance Status
          </h3>

          <Info size={16} className="text-slate-400" />
        </div>

        <button className="font-medium text-sm text-[#3665CA] hover:text-[#3665CA]/60 cursor-pointer">
          View full report
        </button>
      </div>

      {/* Column Headers */}
      <div className="grid gap-4 justify-between grid-cols-[2fr_2fr_60px] bg-[#D9D9D9]/30 px-5 py-3 text-sm font-semibold">
        <span>Department</span>
        <span>Compliance Rate</span>
        <span>Trend</span>
      </div>

      {/* Rows */}
      {departmentComplianceData.map((department) => {
        const Icon = icons[department.department as keyof typeof icons];

        return (
          <div
            key={department.department}
            className="grid gap-4 justify-between grid-cols-[2fr_2fr_60px] items-center px-5 py-4"
          >
            {/* Department */}
            <div className="flex items-center gap-3">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{
                  backgroundColor: `${department.color}20`,
                }}
              >
                <Icon
                  size={16}
                  style={{
                    color: department.color,
                  }}
                />
              </div>

              <span className="text-sm font-normal">
                {department.department}
              </span>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3">
              <div className="h-2.5 flex-1 rounded-full bg-slate-200">
                <div
                  className="h-2.5 rounded-full bg-[#39D739]"
                  style={{
                    width: `${department.complianceRate}%`,
                  }}
                />
              </div>

              <span className="w-10 text-sm font-normal">
                {department.complianceRate}%
              </span>
            </div>

            {/* Trend */}
            <div className="flex items-center gap-2">
              {department.trend === "up" && (
                <TrendingUp size={18} className="text-green-500" />
              )}

              {department.trend === "down" && (
                <TrendingDown size={18} className="text-red-500" />
              )}

              {department.trend === "neutral" && (
                <Minus size={18} className="text-slate-500" />
              )}

              <span className="text-sm font-normal">{department.change}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
