"use client";

import {
  Search,
  Heart,
  ShoppingCart,
  Bell,
  Menu,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function SettingsNavbar() {
  return (
    <header className="h-[70px] bg-white border-b border-gray-300 flex items-center justify-between px-5">
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-medium">Back to Dashboard</span>
        </Link>
      </div>

      <div className="w-[350px] h-10 border border-gray-300 rounded-full flex items-center px-4 gap-2">
        <Search className="w-4 h-4 text-gray-500" />
        <input
          type="text"
          placeholder="Search for anything"
          className="border-none outline-none flex-1 text-sm"
        />
      </div>

      <div className="flex gap-5 text-sm">
        <a href="#" className="text-gray-700 hover:text-blue-600">
          SkillOra Business
        </a>
        <a href="#" className="text-gray-700 hover:text-blue-600">
          Teach on SkillOra
        </a>
      </div>

      <div className="flex gap-4 text-lg cursor-pointer">
        <Heart className="w-5 h-5" />
        <ShoppingCart className="w-5 h-5" />
        <Bell className="w-5 h-5" />
      </div>

      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-sm font-semibold">JP</span>
        </div>
        <div>
          <h4 className="text-sm font-semibold">John Peace</h4>
          <small className="text-gray-500 text-xs">Admin</small>
        </div>
      </div>
    </header>
  );
}
