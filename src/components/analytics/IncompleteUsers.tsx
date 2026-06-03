"use client";

import { UserMinus, ArrowRight, Info } from "lucide-react";
import { incompleteUsers } from "./analytics-data";

export default function IncompleteUsers() {
  return (
    <section className="w-full h-full flex flex-col justify-between rounded-xl border border-gray-100 shadow-sm p-6 bg-[#D9D9D9] min-h-[430px]">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <h2 className="text-xl font-bold text-gray-950 tracking-tight">
              Identify Incomplete Users
            </h2>
            <Info size={19} className="text-slate-400" />
          </div>

          <div className="bg-[#EFC374] border border-[#c29853]/40 rounded-xl p-4 flex items-center space-x-4 mb-4">
            <div className="w-11 h-11 rounded-full bg-black/10 text-gray-900 flex items-center justify-center shrink-0">
              <UserMinus className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-xl font-extrabold text-gray-950">
                  194
                </span>
                <span className="text-sm font-bold text-gray-900">
                  Incomplete Users
                </span>
              </div>
              <p className="text-xs text-gray-700 font-semibold mt-0.5">
                17% of total users
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-gray-300 bg-gray-200/60 p-4">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-400 text-xs font-bold text-gray-700">
                  <th className="pb-3 font-bold">User</th>
                  <th className="pb-3 font-bold pl-2">Email</th>
                  <th className="pb-3 font-bold pl-2">Last Activity</th>
                  <th className="pb-3 font-bold text-right">Progress</th>
                </tr>
              </thead>
              <tbody className="text-xs text-gray-800 font-medium">
                {incompleteUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="border-b border-gray-300/40 last:border-none"
                  >
                    <td className="py-3.5 font-bold text-gray-900">
                      {user.name}
                    </td>
                    <td className="py-3.5 text-gray-600 pl-2">{user.email}</td>
                    <td className="py-3.5 text-gray-600 pl-2">
                      {user.lastActivity}
                    </td>
                    <td className="py-3.5 text-right font-bold text-gray-900">
                      {user.progress}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <button className="w-full flex items-center justify-center space-x-2 text-sm font-bold text-[#2f60cf] hover:text-[#1d4ed8] mt-6 transition-colors self-end">
          <span>View all Incomplete Users</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
