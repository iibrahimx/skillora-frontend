import {
  LayoutDashboard,
  BarChart3,
  ShieldCheck,
  Users,
  ClipboardList,
  BookOpen,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

export const navigationItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Analytics Dashboard",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    label: "Compliance Monitoring",
    href: "/compliance",
    icon: ShieldCheck,
  },
  {
    label: "Employee Management",
    href: "/employees",
    icon: Users,
  },
  {
    label: "Assignment Management",
    href: "/assignments",
    icon: ClipboardList,
  },
  {
    label: "Learning Modules",
    href: "/learning",
    icon: BookOpen,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const footerItems = [
  {
    label: "Help",
    href: "/help",
    icon: HelpCircle,
  },
  {
    label: "Logout",
    href: "/logout",
    icon: LogOut,
  },
];
