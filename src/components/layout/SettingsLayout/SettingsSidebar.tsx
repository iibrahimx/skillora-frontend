"use client";

import { useState } from "react";

const menuItems = [
  "View public profile",
  "Profile",
  "Photo",
  "Account Security",
  "Subscriptions",
  "Payment methods",
  "Privacy",
  "Notification Preferences",
  "API clients",
  "Close account",
];

export default function SettingsSidebar() {
  const [activeItem, setActiveItem] = useState("Account Security");

  return (
    <aside className="w-[250px] bg-white border-r border-gray-300">
      <div className="text-center py-8 px-5">
        <div className="w-[90px] h-[90px] rounded-full bg-gray-300 mx-auto mb-4 flex items-center justify-center">
          <span className="text-2xl font-bold">JP</span>
        </div>
        <h3 className="text-xl font-bold">John Peace</h3>
      </div>

      <ul className="list-none">
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActiveItem(item)}
            className={`px-4 py-3 cursor-pointer text-sm transition-colors ${
              activeItem === item
                ? "bg-[#9c9cc5] text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
