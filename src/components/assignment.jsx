"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { departmentComplianceData } from "./compliance/mockData";

// PR #35 - conflict resolved, ready for review
// Trigger CI re-run - PR #35
export function AssignmentManagement() {
  const [assignments, setAssignments] = useState([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const [departmentInput, setDepartmentInput] = useState([]);
  const [roleInput, setRoleInput] = useState([]);
  const [dueDateInput, setDueDateInput] = useState("");
  const [selectedDepts, setSelectedDepts] = useState([]);
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [reminders, setReminders] = useState(["7 days before", "1 day before"]);

  useEffect(() => {
    fetch("https://skillora-bi8e.onrender.com/api/assignments/getAssignments", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZhMjkzZjM3MTQyZWI0OWU3ZWFkMDcwNiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc4MTI1Nzc0MywiZXhwIjoxNzgxMzAwOTQzfQ.udLOSdYz0JgKcgVptguFygKyqvFX2bJN6va7L7I5h-M",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);
  return (
    <div className="p-8">
      <div className="flex justify-between items-center w-full border-b border-gray-400">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
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

        <button
          onClick={() => setOpen(true)}
          className="bg-[#4f46e5] text-white rounded-lg px-4 py-2 text-sm hover:opacity-70 cursor-pointer"
        >
          Create Assignment
        </button>

        {open && (
          <div className="flex items-center justify-center z-50 fixed inset-0 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 w-96">
              <h2 className="text-lg font-bold mb-4">Create Assignment</h2>

              <label className="block text-sm font-medium mb-1">
                Departments
              </label>
              <input
                type="text"
                placeholder="Enter departments"
                value={departmentInput}
                onChange={(e) => setDepartmentInput(e.target.value)}
                className="w-full border-gray-300 rounded px-3 py-2 mb-4"
              />

              <label className="block text-sm font-medium mb-1">Roles</label>
              <textarea
                placeholder="Enter roles"
                value={roleInput}
                onChange={(e) => setRoleInput(e.target.value)}
                className="w-full border-gray-300 rounded px-3 py-2 mb-4"
              />

              <label className="block text-sm font-medium mb-1">
                Due Date & Time
              </label>
              <input
                type="datetime-local"
                value={dueDateInput}
                onChange={(e) => setDueDateInput(e.target.value)}
                className="w-full border-gray-300 rounded px-3 py-2 mb-4"
              />

              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={() => {
                    const newAssignment = {
                      dept: departmentInput,
                      roles: rolesInput,
                      dueDate: dueDateInput,
                    };

                    setAssignments([...assignments, newAssignment]);
                    setSelectedDepts([departmentInput]);
                    setSelectedRoles([rolesInput]);
                    setDeadline([dueDateInput]);
                    setOpen(false);

                    setDepartmentInput("");
                    setRolesInput("");
                    setDueDateInput("");
                  }}
                  className="px-4 py-2 rounded bg-[#4f46e5] text-white hover:bg-[#4338ca]"
                >
                  Assign Training
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-6 items-start w-full">
        <div className="lg:col-span-8 space-y-6">
          <div className="border border-gray-300 rounded-lg p-4">
            <div className="flex gap-3 mb-3 items-center">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780210149/Users_vdzepd.svg"
                alt="icon"
                className="w-8 h-8"
              ></img>
              <div>
                <h3 className="text-sm font-bold">1. Assign by Department</h3>
                <p className="text-xs text-gray-700">
                  Select one or more departments.
                </p>
              </div>
            </div>

            <div className="border border-gray-400 rounded-lg p-2 w-full min-h-10 flex items-center justify-between">
              <div className="flex flex-wrap items-center gap-2 flex-1">
                {departmentInput.map((dept) => (
                  <span
                    key={dept}
                    className="text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded-full"
                  >
                    {dept}
                    <span
                      className="cursor-pointer ml-1"
                      onClick={() => {
                        let newArray = [];
                        for (let i = 0; i < departmentInput.length; i++) {
                          if (departmentInput[i] !== dept) {
                            newArray.push(departmentInput[i]);
                          }
                        }
                        setDepartmentInput(newArray);
                      }}
                    >
                      x
                    </span>
                  </span>
                ))}

                <select
                  value=""
                  onChange={(e) => {
                    if (
                      e.target.value !== "" &&
                      departmentInput.indexOf(e.target.value) === -1
                    ) {
                      setDepartmentInput(
                        departmentInput.concat(e.target.value)
                      );
                    }
                    e.target.value = "";
                  }}
                  className="outline-none bg-transparent text-sm flex-1"
                >
                  <option value="" disabled hidden></option>
                  <option value="Engineering">Engineering</option>
                  <option value="Product">Product</option>
                  <option value="Design">Design</option>
                  <option value="Customer Success">Customer Success</option>
                </select>
              </div>
            </div>
            {departmentInput.length > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                {departmentInput.length} department
                {departmentInput.length > 1 ? "s" : ""} selected
              </p>
            )}
          </div>

          <div className="border border-gray-400 rounded-lg p-4">
            <div className="flex gap-2 mb-2">
              <div>
                <h3 className="text-sm font-bold">2. Assign by Role</h3>
                <p className="text-xs text-gray-700">
                  Select one or more roles.
                </p>
              </div>
            </div>

            <div className="border border-gray-400 rounded-lg p-2 w-full min-h-10 flex items-center">
              <div className="flex flex-wrap items-center gap-2 flex-1">
                {roleInput.map((role) => (
                  <span
                    key={role}
                    className="text-purple-600 bg-[#d8d6f9] text-sm px-2 py-1 rounded-full"
                  >
                    {role}
                    <span
                      className="cursor-pointer ml-1"
                      onClick={() =>
                        setRoleInput(roleInput.filter((r) => r !== role))
                      }
                    >
                      x
                    </span>
                  </span>
                ))}
                <select
                  value=""
                  onChange={(e) => {
                    if (
                      e.target.value !== "" &&
                      roleInput.indexOf(e.target.value) === -1
                    ) {
                      setRoleInput([...roleInput, e.target.value]);
                    }
                    e.target.value = "";
                  }}
                  className="outline-none bg-transparent text-sm flex-1"
                >
                  <option value="" disabled hidden></option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="UI/UX Designer">UI/UX Designer</option>
                  <option value="Product Manager">Product Manager</option>
                  <option value="HR Manager">HR Manager</option>
                  <option value="Marketing Lead">Marketing Lead</option>
                </select>
              </div>
            </div>

            {roleInput.length > 0 && (
              <p className="text-sm text-gray-500 mt-1">
                {roleInput.length} role{roleInput.length > 1 ? "s" : ""}{" "}
                selected
              </p>
            )}
          </div>

          <div className="border border-gray-300 rounded-lg p-4 mb-4">
            <div className="flex gap-3 mb-3">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780243275/Group_rg0oc6.svg"
                alt="icon"
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
                <div className="flex items-center justify-between border-gray-400 rounded-md px-3 py-2 text-xs">
                  <span className="flex items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780444770/Vector_1_dtj9zp.svg"
                      alt="time"
                      className="w-5 h-5"
                    />
                    <select
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="bg-transparent outline-none cursor-pointer flex-1"
                    >
                      <option value="" disabled>
                        Select time
                      </option>
                      <option value="11:59 PM">11:59 PM</option>
                      <option value="12:00 PM">12:00 PM</option>
                    </select>
                  </span>
                </div>

                <div className="flex items-center justify-between border-gray-400 rounded-md px-3 py-2 text-xs">
                  <span className="flex items-center gap-2">
                    <img
                      src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780444820/Vector_1_1_ihoedf.svg"
                      alt="date"
                      className="w-5 h-5"
                    />
                    <input
                      type="date"
                      value={dueDateInput}
                      onChange={(e) => setDueDateInput(e.target.value)}
                      className="bg-transparent outline-none cursor-pointer flex-1"
                    />
                  </span>
                </div>

                <div className="flex items-center justify-between border-gray-400 rounded-md px-3 py-2 text-xs bg-gray-50">
                  (UTC +01:00) Lagos
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold mb-2"> Reminders</p>
                <div className="flex gap-4 text-xs">
                  {[
                    "7 days before deadline",
                    "1 day before deadline",
                    "On the day of deadline",
                  ].map((option) => (
                    <label
                      key={option}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={reminders.includes(option)}
                        onChange={(e) => {
                          if (e.target.checked)
                            setReminders([...reminders, option]);
                          else
                            setReminders(reminders.filter((r) => r !== option));
                        }}
                        className="w-4 h-4"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 border border-gray-300 rounded-xl px-4 py-4 sticky top-6">
          <div className="flex gap-3 mb-10 items-center">
            <div className="w-8 h-8">
              <img
                src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780244968/SVGRepo_iconCarrier_nppmws.svg"
                alt="icon"
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
                <img
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780300631/Icon_bf8w08.svg"
                  alt="icon"
                  className="w-6 h-6"
                ></img>
                <span className="text-xs font-semibold">Departments</span>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-[#d8d6f9]">
                {selectedDepts.length} selected
              </span>
            </div>
            <div className="flex flex-wrap gap-2 w-full">
              {selectedDepts.length === 0 ? (
                <span className="text-xs text-gray-500">None selected</span>
              ) : (
                selectedDepts.map((dept) => (
                  <span
                    key={dept}
                    className="bg-[#e8eeff] text-xs px-2 py-1 rounded"
                  >
                    {dept}
                  </span>
                ))
              )}
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
                  <img
                    src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780470755/Icon_1_rdkvjo.svg"
                    alt="icon"
                    className="w-6 h-6"
                  ></img>
                  <span className="text-xs font-semibold">Roles</span>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-[#e8eeff]">
                  {selectedRoles.length} selected
                </span>
              </div>

              <div className="flex flex-wrap gap-2 w-full">
                {selectedDepts.length === 0 ? (
                  <span className="text-xs text-gray-500">None selected</span>
                ) : (
                  selectedRoles.map((role) => (
                    <span
                      key={role}
                      className="bg-[#e8eeff] flex items-center text-xs px-2 py-1 rounded"
                    >
                      {role}
                    </span>
                  ))
                )}
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
                <img
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780470812/Calendar_lxhbr6.svg"
                  alt="calender icon"
                  className="w-6 h-6"
                ></img>
                <span className="text-xs font-semibold">Due Date & Time</span>
              </div>

              <div className="ml-5 pr-2 text-right space-y-1">
                <p className="text-xs font-semibold whitespace-nowrap">
                  {deadline
                    ? new Date(deadline).toLocaleString("en-US")
                    : "Not set"}
                </p>
                <p className="text-xs text-gray-600 whitespace-nowrap">
                  (UTC +01:00)Lagos
                </p>
                {reminders.length > 0 && (
                  <p className="text-xs text-gray-600 w-full whitespace-nowrap">
                    Reminders: {reminders.join(",")}{" "}
                  </p>
                )}
              </div>
            </div>

            <div className="border-b border-gray-400 -mx-4 my-2"></div>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => setOpen(true)}
                className="w-full bg-[#4f46e5] text-white text-sm rounded-md hover:opacity-70 cursor-pointer flex items-center justify-center gap-2 px-2 py-1"
              >
                <img
                  src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780555335/Users_1_pzchmx.svg"
                  alt="icon"
                  className="w-5 h-5"
                ></img>
                Assign Training
              </button>
              <div>
                <span className="flex">
                  <img
                    src="https://res.cloudinary.com/dtvriwhcw/image/upload/v1780555335/Lock_uirmvl.svg"
                    alt="lock icon"
                    className="w-3 h-3"
                  ></img>
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
