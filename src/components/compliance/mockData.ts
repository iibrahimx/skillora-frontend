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

export const overdueTrainings = [
  {
    id: "1",
    title: "Code of Conduct",
    mandatoryFor: "All Employees",
    overdueDays: 15,
    employeesOverdue: 18,
  },
  {
    id: "2",
    title: "Information Security Awareness",
    mandatoryFor: "All Employees",
    overdueDays: 10,
    employeesOverdue: 14,
  },
  {
    id: "3",
    title: "Anti-Harassment Training",
    mandatoryFor: "All Employees",
    overdueDays: 7,
    employeesOverdue: 9,
  },
  {
    id: "4",
    title: "Data Privacy Essentials",
    mandatoryFor: "All Employees",
    overdueDays: 3,
    employeesOverdue: 6,
  },
  {
    id: "5",
    title: "Regulatory Compliance Basics",
    mandatoryFor: "Finance, HR, IT",
    overdueDays: 1,
    employeesOverdue: 5,
  },
];
