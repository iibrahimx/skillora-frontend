import { LucideIcon } from "lucide-react";

export interface ComplianceMetric {
  title: string;
  value: string;
  change: string;
  percentage: number;
  icon: LucideIcon;
  color: string;
  bgColor: string;
}

export interface OverdueTraining {
  id: string;
  title: string;
  mandatoryFor: string;
  overdueDays: number;
  employeesOverdue: number;
}

export type OverdueFilter = "all" | "0-15" | "16-30" | "31-60" | "60+";
