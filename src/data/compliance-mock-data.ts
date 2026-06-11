import { ShieldCheck } from "lucide-react";

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
    icon: "/icons/overdue-mandatory-training.svg",
    color: "#EF4444",
    bgColor: "#FEECEC",
  },
  {
    title: "Employees at Risk",
    value: "63",
    change: "+12",
    icon: "/icons/employees-at-risk.svg",
    color: "#F59E0B",
    bgColor: "#FFF6E5",
  },
  {
    title: "Audit Readiness",
    value: "92%",
    change: "+5%",
    icon: "/icons/audit-readiness.svg",
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
    color: "#34ED34",
  },
  {
    department: "Human Resources",
    complianceRate: 91,
    trend: "up",
    change: 5,
    color: "#5B4FD1",
  },
  {
    department: "Information Technology",
    complianceRate: 88,
    trend: "up",
    change: 4,
    color: "#2E99FD",
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
    color: "#34EDE3",
  },
  {
    department: "Marketing",
    complianceRate: 75,
    trend: "up",
    change: 1,
    color: "#FF0000",
  },
  {
    department: "Customer Services",
    complianceRate: 73,
    trend: "neutral",
    change: 0,
    color: "#36361D",
  },
  {
    department: "Legal",
    complianceRate: 68,
    trend: "down",
    change: 3,
    color: "#C2D7F4",
  },
];

// ========= Audit Reports Mock Data =========

export const auditReports = [
  {
    id: "1",
    title: "Compliance Overview Report",
    description:
      "Summary of overall compliance status across the organization.",
    icon: "/icons/compliance-overview-report.svg",
    iconBgColor: "#FEF3C7",
  },

  {
    id: "2",
    title: "Mandatory Training Report",
    description: "Details of mandatory training and completion status.",
    icon: "/icons/mandatory-training-report.svg",
    iconBgColor: "#EEF4FF",
  },

  {
    id: "3",
    title: "Overdue Trainings Report",
    description: "List of overdue trainings by employee and department.",
    icon: "/icons/overdue-training-report.svg",
    iconBgColor: "#FFDBDB",
  },

  {
    id: "4",
    title: "Department Compliance Report",
    description: "Compliance status breakdown by department.",
    icon: "/icons/department-compliance-report.svg",
    iconBgColor: "#EEF4FF",
  },

  {
    id: "5",
    title: "Audit Readiness Report",
    description: "Summary of audit readiness and risk area.",
    icon: "/icons/audit-readiness-report.svg",
    iconBgColor: "#FEF3C7",
  },
];
