import { LucideIcon } from "lucide-react";

export interface EmployeeMetric {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export interface Employee {
  id: string;
  name: string;
  email: string;
  avatar: string;
  department: string;
  role: string;
  onboardingStatus: "Completed" | "In Progress" | "Not Started";
  onboardingDate: string;
  completedTraining: number;
  totalTraining: number;
  progress: number;
  status: "Active" | "Inactive";
}

export interface DepartmentSummary {
  department: string;
  employees: number;
  color: string;
  icon: LucideIcon;
}

export interface OnboardingSummary {
  completed: number;
  inProgress: number;
  notStarted: number;
}

export interface TrainingHistory {
  id: string;
  title: string;
  date: string;
  completionRate: number;
}

export interface RoleSummary {
  role: string;
  employees: number;
  status: "Active" | "Inactive";
}
