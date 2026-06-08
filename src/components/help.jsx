"use client";
import React, { useState } from "react";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

export function HelpCenter() {
  const [role, setRole] = useState("Instructor");

  return (
    <div className="w-full min-h-screen bg-white">
      <nav className="p-6 flex justify-between items-center">
        <button className="flex text-sm font-bold gap-1 items-center cursor-pointer hover:opacity-70">
          <IoChevronBack />
          <span>Back to Skillora</span>
        </button>

        <div className="flex items-center gap-4">
          <img
            src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780726301/logomark_asxdew.svg"
            alt="skillora logo"
            className="w-6 h-6"
          />
          <span className="text-md font-bold">
            Skill<span className="text-blue-700">Ora</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780728036/Mask_group_txup0n.svg"
            alt="profile picture"
            className="w-9 h-9"
          />
          <div className="text-left">
            <h4 className="text-sm font-bold">David Smart</h4>
            <p className="text-gray-500 text-xs">Admin</p>
          </div>
        </div>
      </nav>

      <div className="w-full flex h-44 relative">
        <div className="bg-[#2563eb] w-[40%] flex justify-center items-center px-8 relative">
          <div className="absolute bg-white p-4 w-[280px] h-[100px]">
            <h2 className="text-lg font-bold mb-2">How may we help you?</h2>
            <div className="relative w-full">
              <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2  text-gray-500 text-sm" />
              <input
                type="text"
                placeholder="Search for solutions"
                className="w-full pl-8 pr-2 py-2 text-gray-500 text-xs rounded-md border border-gray-300 pl-8 pr-4 py-2"
              />
            </div>
          </div>
        </div>
        <div className="w-[60%] h-full">
          <img
            src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780731702/Rectangle_345_rht0so.svg"
            alt="icon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 gap-2">
        <button
          onClick={() => setRole("Learner")}
          className={`text-sm font-semibold w-30 h-10 rounded-md cursor-pointer transition-all border border-gray-400 ${
            role === "Learner" ? "bg-white text-black" : "hover:opacity-70"
          }`}
        >
          Learner
        </button>

        <button
          onClick={() => setRole("Instructor")}
          className={`text-sm font-semibold w-30 h-10 rounded-md cursor-pointer transition-all ${
            role === "Instructor"
              ? "bg-[#2563eb] text-white"
              : "hover:opacity-70"
          }`}
        >
          Instructor
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="grid grid-cols-3 gap-4">
          <button className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold curso-pointer hover:opacity-70">
            SkillOra Quality Checklist
          </button>

          <button className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold curso-pointer hover:opacity-70">
            How to become a Premuim Instructor
          </button>

          <button className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold curso-pointer hover:opacity-70">
            Instructor Revenue Share
          </button>

          <button className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold curso-pointer hover:opacity-70">
            Guidelines and Agreement deals with SkillOra
          </button>

          <button className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold curso-pointer hover:opacity-70">
            Promote your course with referral Links
          </button>

          <button className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold curso-pointer hover:opacity-70">
            Frequently Asked Questions
          </button>
        </div>
      </div>

      <div className="max-w-xl mt-8 px-4">
        <h2 className="text-md font-semibold">
          Select a topic to search for Help
        </h2>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-6 pb-16">
        <div className="grid grid-cols-3 gap-4">
          <div className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780845457/payment-02_im7qvk.svg"
                alt="icon"
                className="w-8 h-8"
              />

              <div className="">
                <h4 className="text-sm font-bold">Instructor payments</h4>
                <p className="text-xs mt-2">
                  Understand the revenue share and how to receieve paymnts
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780845569/tag-01_eseds2.svg"
                alt="icon"
                className="w-8 h-8"
              />

              <div className="">
                <h4 className="text-sm font-bold">Promotion</h4>
                <p className="text-xs mt-2">
                  Learn about the announcement and promotional tools.
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780845479/computer-video_avwnfv.svg"
                alt="icon"
                className="w-8 h-8"
              />

              <div className="">
                <h4 className="text-sm font-bold">Course building</h4>
                <p className="text-xs mt-2">Build your course curriculum.</p>
              </div>
            </div>
          </div>

          <div className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780845544/tools_veomex.svg"
                alt="icon"
                className="w-8 h-8"
              />

              <div className="">
                <h4 className="text-sm font-bold">Course Management</h4>
                <p className="text-xs mt-2">
                  Maintain your course and engage with students
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780845520/square-lock-01_cg8qfo.svg"
                alt="icon"
                className="w-8 h-8"
              />

              <div className="">
                <h4 className="text-sm font-bold">Trust and Safety</h4>
                <p className="text-xs mt-2">
                  Policy and Copyright questions and guidance
                </p>
              </div>
            </div>
          </div>

          <div className="border border-gray-400 rounded-md px-4 py-2 text-sm font-semibold">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780845490/contact-02_tktz6f.svg"
                alt="icon"
                className="w-8 h-8"
              />

              <div className="">
                <h4 className="text-sm font-bold">Contact Support</h4>
                <p className="text-xs mt-2">
                  Need more Help? Call Support: +234 800 123 4567 Email:
                  support@skillora.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
