import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
}

export default function SidebarItem({
  label,
  href,
  icon: Icon,
  active = false,
}: SidebarItemProps) {
  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 rounded-xl px-4 py-3
        transition-all duration-200
        ${
          active
            ? "bg-white text-[#3665CA] shadow-sm"
            : "text-white/80 hover:bg-white/10 hover:text-white"
        }
      `}
    >
      <Icon size={20} />
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
}
