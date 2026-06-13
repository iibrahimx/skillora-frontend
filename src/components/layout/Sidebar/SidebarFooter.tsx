"use client";

import SidebarItem from "./SidebarItem";
import { footerItems } from "@/constants/navigation";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth-store";
import { LogOut } from "lucide-react";

export default function SidebarFooter() {
  const pathname = usePathname();
  const router = useRouter();
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();

    router.push("/sign-in");
  };

  return (
    <div className="border-t border-white/10 pb-2 xl:mt-8">
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

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-white/80 transition-all duration-200 hover:bg-white/10 hover:text-white cursor-pointer"
        >
          <LogOut size={20} />

          <span className="text-xs font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
