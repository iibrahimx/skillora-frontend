import SidebarItem from "./SidebarItem";
import { footerItems } from "@/constants/navigation";

export default function SidebarFooter() {
  return (
    <div className="border-t border-white/10 pt-4">
      <div className="flex flex-col gap-2">
        {footerItems.map((item) => (
          <SidebarItem
            key={item.label}
            label={item.label}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
}
