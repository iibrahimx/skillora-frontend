import { ShieldCheck, AlertCircle, Users } from "lucide-react";

// ========= Compliance Metrics Mock Data =========
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

// ========= Overdue Training Mock Data =========

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

// ========= Department Compliance Mock Data =========

export const departmentComplianceData = [
  {
    department: "Finance",
    complianceRate: 94,
    trend: "up",
    change: 6,
    color: "#3DDC3D",
  },
  {
    department: "Human Resources",
    complianceRate: 91,
    trend: "up",
    change: 5,
    color: "#635BFF",
  },
  {
    department: "Information Technology",
    complianceRate: 88,
    trend: "up",
    change: 4,
    color: "#3B82F6",
  },
  {
    department: "Operations",
    complianceRate: 82,
    trend: "up",
    change: 3,
    color: "#F59E0B",
  },
  {
    department: "Sales",
    complianceRate: 79,
    trend: "down",
    change: 2,
    color: "#2DD4BF",
  },
  {
    department: "Marketing",
    complianceRate: 75,
    trend: "up",
    change: 1,
    color: "#EF4444",
  },
  {
    department: "Customer Services",
    complianceRate: 73,
    trend: "neutral",
    change: 0,
    color: "#44403C",
  },
  {
    department: "Legal",
    complianceRate: 68,
    trend: "down",
    change: 3,
    color: "#CBD5E1",
  },
];
