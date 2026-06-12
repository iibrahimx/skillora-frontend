import Sidebar from "@/components/layout/Sidebar/Sidebar";
import { SidebarProvider } from "@/components/layout/Sidebar/SidebarContext";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-slate-50 overflow-hidden">
        <SidebarProvider>
          <Sidebar />

          <main className="flex-1 overflow-y-auto">{children}</main>
        </SidebarProvider>
      </div>
    </ProtectedRoute>
  );
}
