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
