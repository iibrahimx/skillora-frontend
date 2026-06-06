"use client";

import {
  Globe,
  Lock,
  Shield,
  Users,
  Calendar,
  Rocket,
  X,
  ChevronDown,
} from "lucide-react";

export default function PublishTraining() {
  return (
    <div className="rounded-2xl border border-gray-300 bg-white p-6">
      {/* Header */}
      <div className="flex items-start gap-2 mb-7">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-800 text-xs text-white">
          4
        </div>

        <div>
          <h2 className="font-bold text-xl">Publish Training</h2>
          <p className="text-sm text-gray-500">
            Configure settings and publish your training.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* LEFT PANEL */}
        <div className="col-span-8">
          {/* Module Title */}
          <div className="mb-8 flex">
            <input
              placeholder="Input Module Title..."
              className="flex-1 border border-dashed border-gray-400 p-3 rounded-l-md"
            />

            <button className="border border-dashed border-gray-400 border-l-0 px-4 rounded-r-md flex items-center gap-2">
              Category
              <ChevronDown size={16} />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {/* Visibility */}
            <div>
              <h3 className="font-semibold">Visibility</h3>
              <p className="text-xs text-gray-500 mb-5">
                Choose who can access this training.
              </p>

              <div className="space-y-5">
                <label className="flex items-start gap-3">
                  <input type="radio" name="visibility" defaultChecked />
                  <Globe className="text-blue-600 mt-1" size={18} />
                  <div>
                    <p className="font-medium">Public</p>
                    <p className="text-xs text-gray-500">
                      Anyone in the organization
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input type="radio" name="visibility" />
                  <Lock className="text-green-600 mt-1" size={18} />
                  <div>
                    <p className="font-medium">Private</p>
                    <p className="text-xs text-gray-500">
                      Only selected audiences
                    </p>
                  </div>
                </label>

                <label className="flex items-start gap-3">
                  <input type="radio" name="visibility" />
                  <Shield className="text-gray-500 mt-1" size={18} />
                  <div>
                    <p className="font-medium">Restricted</p>
                    <p className="text-xs text-gray-500">Invite only</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Audience */}
            <div>
              <h3 className="font-semibold">Audience</h3>
              <p className="text-xs text-gray-500 mb-5">
                Select your target audience
              </p>

              <div className="flex items-center justify-between border rounded-md px-3 py-2">
                <div className="flex items-center gap-2">
                  <Users size={16} />
                  Managers
                </div>

                <X size={16} />
              </div>

              <button className="mt-5 text-blue-600 text-sm">
                + Add Audience
              </button>
            </div>

            {/* Schedule */}
            <div>
              <h3 className="font-semibold">Publish Schedule</h3>
              <p className="text-xs text-gray-500 mb-5">
                Choose when to publish
              </p>

              <div className="space-y-5">
                <label className="flex gap-3">
                  <input type="radio" name="schedule" defaultChecked />
                  <div>
                    <p className="font-medium">Publish Now</p>
                    <p className="text-xs text-gray-500">
                      Available immediately
                    </p>
                  </div>
                </label>

                <label className="flex gap-3">
                  <input type="radio" name="schedule" />

                  <div>
                    <p className="font-medium">Schedule for Later</p>

                    <div className="flex gap-2 mt-2">
                      <div className="border rounded px-4 py-1 flex items-center gap-2 text-xs">
                        <Calendar size={14} />
                        May 30, 2025
                      </div>

                      <select className="border rounded px-3 py-1 text-xs">
                        <option>10:00 AM</option>
                      </select>
                    </div>
                  </div>
                </label>

                <label className="flex gap-3">
                  <input type="radio" name="schedule" />
                  <div>
                    <p className="font-medium">Set Enrollment Window</p>
                    <p className="text-xs text-gray-500">
                      Set start and end dates
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-4 bg-gray-50 rounded-xl p-5">
          <h3 className="font-bold text-blue-700 mb-5">
            Training Summary
          </h3>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between" >
              <span className="font-semibold">Module Content</span>
              <span>3 files</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Quiz Questions</span>
              <span>20 (Medium)</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Reflection Prompts</span>
              <span>4 prompts</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Estimated Duration</span>
              <span>45 mins</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Created By</span>
              <span>John Peace</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Last Edited</span>
              <span>2 days ago</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Status</span>
              <span >Draft</span>
            </div>
          </div>

          <div className="mt-10 rounded-xl bg-white p-5 text-center">
            <Rocket
              className="mx-auto text-blue-700 mb-3"
              size={30}
            />

            <h4 className="font-bold">Ready to Publish?</h4>

            <p className="text-xs text-gray-500 mt-1">
              Your training will be live and learners will be notified.
            </p>

            <button className="mt-4 w-full rounded-lg bg-blue-800 py-3 text-white font-semibold">
              Publish Training
            </button>

            <p className="mt-2 text-xs text-gray-400">
              You can edit anytime after publishing
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}