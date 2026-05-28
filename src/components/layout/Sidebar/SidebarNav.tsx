import SidebarItem from "./SidebarItem";
import { navigationItems } from "@/constants/navigation";

export default function SidebarNav() {
  return (
    <nav className="flex flex-col gap-2">
      {navigationItems.map((item, index) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          href={item.href}
          icon={item.icon}
          active={index === 0}
        />
      ))}
    </nav>
  );
}
