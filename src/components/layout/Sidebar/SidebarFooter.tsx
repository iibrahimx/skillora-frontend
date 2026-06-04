"use client";

import SidebarItem from "./SidebarItem";
import { footerItems } from "@/constants/navigation";
import { usePathname } from "next/navigation";

export default function SidebarFooter() {
  const pathname = usePathname();

  return (
    <div className="border-t border-white/10 pt-4 pb-2 mt-2 xl:mt-8">
      <div className="flex flex-col gap-2">
        {footerItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            href={item.href}
            icon={item.icon}
            active={pathname === item.href}
          />
        ))}
      </div>
    </div>
  );
}
