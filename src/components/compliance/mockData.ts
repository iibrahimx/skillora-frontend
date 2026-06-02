import { ShieldCheck, AlertCircle, Users } from "lucide-react";

export const complianceMetrics = [
  {
    title: "Compliance Completion Rate",
    value: "86%",
    change: "+6%",
    percentage: 86,
    icon: ShieldCheck,
    color: "#2CAA36",
    bgColor: "#E8F7EA",
  },
  {
    title: "Overdue Mandatory Trainings",
    value: "24",
    change: "+8",
    icon: AlertCircle,
    color: "#EF4444",
    bgColor: "#FEECEC",
  },
  {
    title: "Employees at Risk",
    value: "63",
    change: "+12",
    icon: Users,
    color: "#F59E0B",
    bgColor: "#FFF6E5",
  },
  {
    title: "Audit Readiness",
    value: "92%",
    change: "+5%",
    icon: ShieldCheck,
    color: "#2563EB",
    bgColor: "#EEF4FF",
  },
];
