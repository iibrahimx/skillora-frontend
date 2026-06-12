"use client";

import PageHeader from "@/components/common/PageHeader";
import EmployeeStats from "./EmployeeStats";
import DepartmentCard from "./DepartmentCard";
import OnboardingStatusCard from "./OnboardingStatusCard";
import RoleManagementCard from "./RoleManagementCard";
import TrainingHistoryCard from "./TrainingHistoryCard";
import EmployeeTable from "./EmployeeTable";
import { useUsers } from "@/hooks/useUsers";
import { useEffect } from "react";

export default function EmployeeScreen() {
  const { data, isLoading, error } = useUsers();

  useEffect(() => {
    if (data) {
      console.log("USERS:");
      console.log(data.users);
    }
  }, [data]);

  return (
    <div className="space-y-8">
      <PageHeader
        title="Employee Management"
        subtitle="Manage your organization's most valuable asset - your people."
      />

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_220px] items-start">
        <div className="flex flex-col gap-4">
          <EmployeeStats />
          <div className="flex-1">
            <EmployeeTable />
          </div>
        </div>

        <div className="space-y-4">
          <DepartmentCard />
          <OnboardingStatusCard />
          <TrainingHistoryCard />
          <RoleManagementCard />
        </div>
      </section>
    </div>
  );
}
