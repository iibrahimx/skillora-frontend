import {
  Users,
  Building2,
  UserPlus,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  Monitor,
  Megaphone,
  HandCoins,
  Headphones,
  BadgeDollarSign,
  UserCog,
} from "lucide-react";

// ========= Employee Metrics Mock Data =========
export const employeeMetrics = [
  {
    title: "Total Employees",
    value: "128",
    subtitle: "+8 this month",
    icon: Users,
    color: "#0404FF",
    bgColor: "#EEF2FF",
  },

  {
    title: "Department",
    value: "8",
    subtitle: "Active Department",
    icon: Building2,
    color: "#22C55E",
    bgColor: "#EAFBF0",
  },

  {
    title: "Onboarding",
    value: "12",
    subtitle: "In Progress",
    icon: UserPlus,
    color: "#F59E0B",
    bgColor: "#FFF7E6",
  },

  {
    title: "Completed Training",
    value: "85%",
    subtitle: "This Year",
    icon: GraduationCap,
    color: "#9333EA",
    bgColor: "#F5EFFF",
  },

  {
    title: "Active Roles",
    value: "18",
    subtitle: "Across Organization",
    icon: ShieldCheck,
    color: "#0404FF",
    bgColor: "#EEF2FF",
  },
];

// ========= Department Summary Mock Data =========
export const departmentSummary = [
  {
    department: "Engineering",
    employees: 32,
    icon: Monitor,
    color: "#9333EA",
  },

  {
    department: "Product",
    employees: 18,
    icon: Briefcase,
    color: "#2563EB",
  },

  {
    department: "Marketing",
    employees: 14,
    icon: Megaphone,
    color: "#EF4444",
  },

  {
    department: "Sales",
    employees: 20,
    icon: BadgeDollarSign,
    color: "#22C55E",
  },

  {
    department: "Customer Success",
    employees: 16,
    icon: Headphones,
    color: "#16A34A",
  },

  {
    department: "Finance",
    employees: 10,
    icon: HandCoins,
    color: "#F59E0B",
  },

  {
    department: "HR",
    employees: 8,
    icon: UserCog,
    color: "#65A30D",
  },

  {
    department: "Operations",
    employees: 10,
    icon: Users,
    color: "#C026D3",
  },
];

// ========= Onboarding Summary Mock Data =========
export const onboardingSummary = {
  total: 128,
  completed: 78,
  inProgress: 12,
  notStarted: 38,
};

// ========= Training History Mock Data =========
export const trainingHistory = [
  {
    id: "1",
    title: "Security Awareness",
    date: "May 10, 2024",
    completionRate: 94,
  },

  {
    id: "2",
    title: "Code of Conduct",
    date: "May 10, 2024",
    completionRate: 91,
  },

  {
    id: "3",
    title: "Data Privacy",
    date: "May 10, 2024",
    completionRate: 87,
  },

  {
    id: "4",
    title: "Leadership Essentials",
    date: "May 10, 2024",
    completionRate: 80,
  },
];

// ========= Role Summary Mock Data =========
export const roleSummary = [
  {
    role: "Senior Developer",
    employees: 24,
    status: "Active",
  },

  {
    role: "Product Manager",
    employees: 12,
    status: "Active",
  },

  {
    role: "Marketing Specialist",
    employees: 10,
    status: "Active",
  },

  {
    role: "DevOps Engineer",
    employees: 8,
    status: "Active",
  },

  {
    role: "HR Executive",
    employees: 6,
    status: "Active",
  },
];
