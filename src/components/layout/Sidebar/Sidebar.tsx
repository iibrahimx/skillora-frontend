"use client";

import { useEffect } from "react";
import { useSidebar } from "./SidebarContext";
import SidebarHeader from "./SidebarHeader";
import SidebarNav from "./SidebarNav";
import SidebarFooter from "./SidebarFooter";

export default function Sidebar() {
  const { isOpen, closeSidebar } = useSidebar();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex min-h-screen w-72 flex-col bg-gradient-to-b from-blue-600 to-indigo-700 px-4">
        <SidebarHeader />

        <div className="flex flex-1 flex-col">
          <SidebarNav />

          <div className="mt-auto">
            <SidebarFooter />
          </div>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={closeSidebar}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute left-0 top-0 h-full w-72 overflow-y-auto bg-gradient-to-b from-blue-600 to-indigo-700 px-4 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <SidebarHeader />

          <div className="flex min-h-full flex-col">
            <SidebarNav />

            <div className="mt-auto">
              <SidebarFooter />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
