"use client";

import { useAnalytics } from "@/hooks/useAnalytics";
import DashboardStatCard from "./DashboardStatCard";

export default function DashboardStats() {
  const { data, isLoading } = useAnalytics();

  const analytics = data?.data;

  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <DashboardStatCard
        title="Completion Rate"
        value={isLoading ? "..." : `${analytics?.completionRate ?? 0}%`}
        // value={`${analytics?.completionRate ?? 0}%`}
        change="+7%"
        trend="up"
        icon="/icons/completion-rate.svg"
        cardBg="bg-[#EEF4FF]"
        titleColor="text-[#3665CA]"
        iconBg="bg-#DBEAFE"
        iconColor="text-[#2563EB]"
      />

      <DashboardStatCard
        title="Active Learners"
        value={isLoading ? "..." : `${analytics?.activeUsers ?? 0}`}
        // value={`${analytics?.activeUsers ?? 0}`}
        change="+135%"
        trend="up"
        icon="/icons/active-learners.svg"
        cardBg="bg-[#F4FBF6]"
        titleColor="text-[#34A853]"
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />

      <DashboardStatCard
        title="Overdue Trainings"
        value={isLoading ? "..." : `${analytics?.overdueTraining ?? 0}`}
        // value={`${analytics?.overdueTraining ?? 0}`}
        change="-10%"
        trend="down"
        icon="/icons/overdue-trainings.svg"
        cardBg="bg-[#FBF7F2]"
        titleColor="text-[#A67C52]"
        iconBg="bg-orange-100"
        iconColor="text-orange-600"
      />

      {/* <DashboardStatCard
        title="Compliance Percentage"
        value="84%"
        change="+6%"
        trend="up"
        icon="/icons/compliance-percentage.svg"
        cardBg="bg-[#F7F3FF]"
        titleColor="text-[#7B61B3]"
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      /> */}
    </section>
  );
}
