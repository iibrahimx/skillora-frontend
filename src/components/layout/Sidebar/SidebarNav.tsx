"use client";

import SidebarItem from "./SidebarItem";
import { navigationItems } from "@/constants/navigation";
import { usePathname } from "next/navigation";

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-2">
      {navigationItems.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
          active={pathname === item.href}
        />
      ))}
    </nav>
  );
}
