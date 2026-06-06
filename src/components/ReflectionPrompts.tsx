"use client";

import { Plus } from "lucide-react";

export default function ReflectionCard() {
  const prompts = [
    "What key knowledge did you imbibe from this module?",
    "How can it be used in the real world?",
    "What struck your attention the most and why?",
    "What solution can you now infer after this module ?",
    "What will you change if given the opportunity?",
  ];

  return (
    <div className="bg-white border border-gray-400 rounded-2xl p-4 shadow-sm h-[500px] flex flex-col">

      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="w-6 h-6 rounded-full bg-blue-700 text-white text-xs font-semibold flex items-center justify-center">
          3
        </div>

        <div>
          <h2 className="text-2xl font-bold leading-none">
            Reflection Prompts
          </h2>

          <p className="text-gray-500 text-xs mt-1">
            Add prompt to encourage deeper learning.
          </p>
        </div>
      </div>

      {/* Prompt List */}
      <div className="mt-2 flex-1 space-y-3">

        {prompts.map((prompt, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg px-4 py-3 flex items-center gap-3"
          >
            <div className="text-blue-800 text-3xl font-bold leading-none">
              ”
            </div>

            <p className="text-sm text-gray-800">
              {prompt}
            </p>
          </div>
        ))}

      </div>

      {/* Button */}
      <button className="mt-4 bg-[#294A93] text-white rounded-lg py-3 flex items-center justify-center gap-2 font-semibold hover:opacity-95">
        <Plus size={18} />
        Add Prompt
      </button>

    </div>
  );
}