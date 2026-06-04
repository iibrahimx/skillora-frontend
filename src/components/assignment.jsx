"use client";
import Image from "next/image";
import React from "react";
export function AssignmentManagement() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center w-full border-b border-gray-400">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex flex-col gap-1 cursor-pointer hover:opacity-70"
          >
            <div className="h-[2px] w-5 bg-slate-700 rounded-full"></div>
            <div className="h-[2px] w-5 bg-slate-700 rounded-full"></div>
            <div className="h-[2px] w-3 bg-slate-700 rounded-full"></div>
          </button>
          <div>
            <h1 className="text-xl font-bold">Assignment Management</h1>
            <p className="text-xs">
              Create and assign training to the right audience
            </p>
          </div>
        </div>

        <button className="bg-[#4f46e5] text-white rounded-lg px-4 py-2 text-sm hover:opacity-70 cursor-pointer">
          + Create Assignment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start w-full">
        <div className="lg:col-span-8 space-y-6">
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex gap-3 mb-3 items-center">
              <Image
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780210149/Users_vdzepd.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-sm font-bold">1. Assign by Department</h3>
                <p className="text-xs text-gray-700">
                  Select one or more departments.
                </p>
              </div>
            </div>

            <div className="border border-gray-400 rounded-lg p-2 flex items center gap-2 justify-between w-full">
              <div className="flex flex-wrap gap-1 items center">
                <span className="flex items-center gap-2 text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded">
                  Engineering{" "}
                  <span className="cursor-pointer hover:text-purple-900">
                    x
                  </span>
                </span>

                <span className="flex items-center gap-1 text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded">
                  Product{" "}
                  <span className="cursor-pointer hover:text-purple-900">
                    x
                  </span>
                </span>

                <span className="flex items-center gap-2 text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded">
                  Design{" "}
                  <span className="cursor-pointer hover:text-purple-900">
                    x
                  </span>
                </span>

                <span className="flex items-center gap-2 text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded">
                  Customer Success{" "}
                  <span className="cursor-pointer hover:text-purple-900">
                    x
                  </span>
                </span>
              </div>
              <button type="button" className="text-xs px-2 cursor-pointer">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500">4 departments selected</p>
          </div>

          <div className="border border-gray-400 rounded-lg p-4">
            <div className="flex gap-2 mb-2">
              <Image
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780242417/Briefcase_igrkui.svg"
                alt="briefcase icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-sm font-bold">2. Assign by Role</h3>
                <p className="text-xs text-gray-700">
                  Select one or more roles.
                </p>
              </div>
            </div>

            <div className="border border-gray-400 rounded-lg p-2 flex flex-wrap items center gap-2 w-full">
              <div className="flex flex-wrap gap-1 items center">
                <span className="flex items-center gap-2 text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded-full">
                  Software Engineer{" "}
                  <span className="cursor-pointer hover:text-purple-900">
                    x
                  </span>
                </span>

                <span className="flex items-center gap-2 text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded-full">
                  UI/UX Designer{" "}
                  <span className="cursor-pointer hover:text-purple-900">
                    x
                  </span>
                </span>

                <span className="flex items-center gap-2 text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded-full">
                  Product Manager{" "}
                  <span className="cursor-pointer hover:text-purple-900">
                    x
                  </span>
                </span>
              </div>
              <button type="button" className="text-xs px-2 cursor-pointer">
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </button>
            </div>
            <p className="text-xs text-gray-500">3 roles selected</p>
          </div>

          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex gap-3 mb-3">
              <Image
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780243275/Group_rg0oc6.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-sm font-bold">3. Deadline & Reminders</h3>
                <p className="text-xs text-gray-700">
                  Set a due date, time and reminder preferences.
                </p>
              </div>
            </div>

            <div className="mt-3 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="flex items-center justify-between border border-gray-400 rounded-md px-3 py-2 text-xs">
                  <span className="flex items-center gap-2">
                    <span>
                      <Image
                        src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780444770/Vector_1_dtj9zp.svg"
                        alt="time icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </span>{" "}
                    11:59 PM
                  </span>

                  <button type="button" className="text-xs px-2 cursor-pointer">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-between border border-gray-400 rounded-md px-3 py-2 text-xs">
                  <span className="flex items-center gap-2">
                    <span>
                      <Image
                        src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780444820/Vector_1_1_ihoedf.svg"
                        alt="calender icon"
                        width={20}
                        height={20}
                        className="w-5 h-5"
                      />
                    </span>
                    May 28, 2026
                  </span>
                </div>

                <div className="flex items-center justify-between border border-gray-400 rounded-md px-3 py-2 text-xs">
                  (UTC +01:00) Lagos
                </div>
              </div>
            </div>
          </div>

          <div className="border border-gray-400 rounded-lg p-4 flex items-center gap-4 justify-between">
            <div className="flex gap-3 items-start">
              <Image
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780244220/Shield_x3qo54.svg"
                alt="icon"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div>
                <h3 className="text-sm font-bold">4. Mandatory Training</h3>
                <p className="text-xs text-gray-700">
                  Require learners to complete this training.
                </p>
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <label className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  defaultChecked
                  className="sr-only"
                ></input>
                <span className="bg-[#2d8b30] w-10 h-6 rounded-full relative">
                  <span className="w-4 h-4 bg-white rounded-full absolute top-1 left-6"></span>
                </span>

                <span className="text-sm font-semibold">Mandatory</span>
              </label>
              <button className="flex items-center gap-1 border border-gray-400 rounded-md px-2 py-1 text-xs">
                <Image
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780445061/Check_circle_cqw4qg.svg"
                  alt="checkbox icon"
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
                <span className="text-sm">Completion is required</span>
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 border border-gray-300 rounded-xl p-4">
          <div className="flex gap-3 mb-10 items-center">
            <div className="w-8 h-8">
              <Image
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780244968/SVGRepo_iconCarrier_nppmws.svg"
                alt="icon"
                width={32}
                height={32}
              />
            </div>
            <div>
              <h3 className="text-sm font-bold">Assignment Summary</h3>
              <p
                className="text-xs text-gray-700 whitespace-nowrap"
                style={{ margin: 0, paddingBottom: "8px" }}
              >
                Review your selection before assigning.
              </p>
            </div>
          </div>
          <div className="border-b border-gray-400 -mx-4 mb-2"></div>

          <div className="space-y-5">
            <div className="flex justify-between w-full items-center">
              <div className="flex gap-2 items-center">
                <Image
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780300631/Icon_bf8w08.svg"
                  alt="icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-xs font-semibold">Departments</span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-[#d8d6f9]">
                4 selected
              </span>
            </div>

            <div className="flex flex-wrap gap-2 w-full">
              <span className="bg-[#e8eeff] text-xs px-2 py-1 rounded">
                Engineering
              </span>
              <span className="bg-[#e8eeff] text-xs px-2 py-1 rounded">
                Product
              </span>
              <span className="bg-[#e8eeff] text-xs px-2 py-1 rounded">
                Design
              </span>
              <span className="bg-[#e8eeff] text-xs px-2 py-1 rounded">
                Customer Success
              </span>
            </div>

            <div className="border-b border-gray-400 -mx-4 my-2"></div>

            <div className="space-y-3">
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <Image
                    src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780470755/Icon_1_rdkvjo.svg"
                    alt="icon"
                    width={16}
                    height={16}
                    className="w-6 h-6"
                  />
                  <span className="text-xs font-semibold">Roles</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[#e8eeff]">
                  3 selected
                </span>
              </div>

              <div className="flex flex-wrap gap-2 w-full">
                <div className="flex gap-2">
                  <span className=" inline-flex items-center bg-[#e8eeff] text-xs px-2 py-1 rounded whitespace-nowrap">
                    Software Engineer
                  </span>

                  <span className="inline-flex items-center bg-[#e8eeff] text-xs px-2 py-1 rounded whitespace-nowrap">
                    Product Manager
                  </span>
                </div>
                <span className="bg-[#e8eeff] text-xs px-2 py-1 rounded">
                  UI/UX Designer
                </span>
              </div>
            </div>

            <div className="border-b border-gray-400 -mx-4 my-2"></div>

            <div className="space-y-3">
              <div className="flex gap-2 items-center">
                <Image
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780470812/Calendar_lxhbr6.svg"
                  alt="calender icon"
                  width={16}
                  height={16}
                  className="w-6 h-6"
                />
                <span className="text-xs font-semibold">Due Date & Time</span>
              </div>

              <div className="ml-5 pr-2 text-right space-y-1">
                <p className="text-xs font-semibold whitespace-nowrap">
                  May 28,2026 at 11:59 PM
                </p>
                <p className="text-xs text-gray-600 whitespace-nowrap">
                  (UTC +01:00)Lagos
                </p>
                <p className="text-xs text-gray-600 w-full whitespace-nowrap">
                  Reminders: 7 days before, 1 day before
                </p>
              </div>
            </div>

            <div className="border-b border-gray-400 -mx-4 my-2"></div>

            <div className=" flex items-center justify-between gap-2">
              <div className="flex gap-2 items-start">
                <Image
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780470871/Icon_2_fh3edo.svg"
                  alt="icon"
                  width={16}
                  height={16}
                  className="w-6 h-6"
                />
                <div>
                  <h3 className="text-xs font-semibold whitespace-nowrap">
                    Mandatory Training
                  </h3>
                </div>
              </div>

              <div className="flex flex-col items-end flex-shrink-0 pr-3 gap-3">
                <Image
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780477448/Group_196_1_vj2ebh.svg"
                  alt="check yes icon"
                  width={68}
                  height={24}
                  className="w-[68px] h-6 object-contain"
                />

                <div className="items-center flex text-right pr-1">
                  <span className="text-[10px] text-gray-600 whitespace-nowrap">
                    Completion is required
                  </span>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-400 -mx-4 my-2"></div>
            <div className="flex flex-col items-center gap-2">
              <button className="w-full bg-[#4f46e5] text-white text-sm rounded-md hover:opacity-70 cursor-pointer flex items-center justify-center gap-2 px-2 py-1">
                <Image
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780555335/Users_1_pzchmx.svg"
                  alt="icon"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                Assign Training
              </button>
              <div>
                <span className="flex">
                  <Image
                    src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780555335/Lock_uirmvl.svg"
                    alt="lock icon"
                    width={12}
                    height={12}
                    className="w-3 h-3"
                  />
                  <p className="text-[8px] text-gray-600">
                    Assignment will be sent to selected learners.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
