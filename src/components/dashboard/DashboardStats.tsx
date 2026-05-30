import DashboardStatCard from "./DashboardStatCard";

import { CheckCircle2, Users, TriangleAlert, ShieldCheck } from "lucide-react";

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      <DashboardStatCard
        title="Completion Rates"
        value="70%"
        change="+7%"
        trend="up"
        icon={CheckCircle2}
        cardBg="bg-[#EEF4FF]"
        titleColor="text-[#3665CA]"
        iconBg="bg-#DBEAFE"
        iconColor="text-[#2563EB]"
      />

      <DashboardStatCard
        title="Active Learners"
        value="1,543"
        change="+135%"
        trend="up"
        icon={Users}
        cardBg="bg-[#F4FBF6]"
        titleColor="text-[#34A853]"
        iconBg="bg-green-100"
        iconColor="text-green-600"
      />

      <DashboardStatCard
        title="Overdue Trainings"
        value="32"
        change="-10%"
        trend="down"
        icon={TriangleAlert}
        cardBg="bg-[#FBF7F2]"
        titleColor="text-[#A67C52]"
        iconBg="bg-orange-100"
        iconColor="text-orange-600"
      />

      <DashboardStatCard
        title="Compliance Percentage"
        value="84%"
        change="+6%"
        trend="up"
        icon={ShieldCheck}
        cardBg="bg-[#F7F3FF]"
        titleColor="text-[#7B61B3]"
        iconBg="bg-purple-100"
        iconColor="text-purple-600"
      />
    </section>
  );
}
