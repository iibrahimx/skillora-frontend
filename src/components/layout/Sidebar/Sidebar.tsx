import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col bg-gradient-to-b from-blue-600 to-indigo-700 px-4">
      <SidebarHeader />

      <div className="flex-1">
        <SidebarNav />
      </div>

      <SidebarFooter />
    </aside>
  );
}
