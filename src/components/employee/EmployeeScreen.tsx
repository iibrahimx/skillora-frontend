"use client";

import PageHeader from "@/components/common/PageHeader";
import EmployeeStats from "./EmployeeStats";
import DepartmentCard from "./DepartmentCard";
// import OnboardingStatusCard from "./OnboardingStatusCard";
import RoleManagementCard from "./RoleManagementCard";
import TrainingHistoryCard from "./TrainingHistoryCard";
import EmployeeTable from "./EmployeeTable";
import { useUsers } from "@/hooks/useUsers";
import { useDepartments } from "@/hooks/useDepartments";
import { useModules } from "@/hooks/useModules";
import { useAssignments } from "@/hooks/useAssignments";

export default function EmployeeScreen() {
  // const { data, isLoading, error } = useUsers();
  const { data } = useUsers();

  const { data: departmentsData } = useDepartments();

  const { data: modulesData } = useModules();

  const { data: assignmentsData } = useAssignments();

  return (
    <div className="space-y-8">
      <PageHeader
        title="Employee Management"
        subtitle="Manage your organization's most valuable asset - your people."
      />

      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[minmax(0,1fr)_220px] items-start">
        <div className="flex flex-col gap-4">
          <EmployeeStats
            users={data?.users ?? []}
            departments={departmentsData?.data ?? []}
            modules={modulesData?.data ?? []}
          />
          <div className="flex-1">
            <EmployeeTable
              users={data?.users ?? []}
              departments={departmentsData?.data ?? []}
            />
          </div>
        </div>

        <div className="space-y-4">
          <DepartmentCard departments={departmentsData?.data ?? []} />
          {/* <OnboardingStatusCard /> */}
          <TrainingHistoryCard assignments={assignmentsData?.data ?? []} />
          <RoleManagementCard users={data?.users ?? []} />
        </div>
      </section>
    </div>
  );
}
