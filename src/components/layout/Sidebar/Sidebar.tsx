import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  return (
    <aside className="flex min-h-screen w-72 flex-col bg-gradient-to-b from-blue-600 to-indigo-700 px-4">
      <SidebarHeader />

      <div className="flex flex-1 flex-col">
        <SidebarNav />

        <div className="mt-auto">
          <SidebarFooter />
        </div>
      </div>
    </aside>
  );
}
