"use client";

import { usePathname } from "next/navigation";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import {
  SettingsNavbar,
  SettingsSidebar,
} from "@/components/layout/SettingsLayout";
import { SidebarProvider } from "@/components/layout/Sidebar/SidebarContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSettingsPage = pathname === "/settings";

  if (isSettingsPage) {
    return (
      <div className="min-h-screen bg-gray-100">
        <SettingsNavbar />
        <div className="flex">
          <SettingsSidebar />
          <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
            {children}
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden">
      <SidebarProvider>
        <Sidebar />

        <main className="flex-1 overflow-y-auto">{children}</main>
      </SidebarProvider>
    </div>
  );
}
