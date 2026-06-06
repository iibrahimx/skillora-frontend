"use client";

import { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

export default function QuizCard() {
  const [questions, setQuestions] = useState(30);

  return (
    <div className="bg-white border border-gray-400 rounded-2xl p-4 shadow-sm h-[500px] flex flex-col">
      {/* Header */}
      <div className="flex items-start gap-3">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-800 text-xs font-medium text-white">
          2
        </div>

        <div>
          <h2 className="text-2xl font-bold text-black">
            AI Quiz Generation
          </h2>

          <p className="text-gray-500">
            Generate quizzes automatically using AI.
          </p>
        </div>
      </div>

      {/* Banner */}
      <div className="mt-2 flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-3 text-sm text-blue-400">
        <Sparkles size={17} />
        <span>
          AI will analyse your content and generate relevant, high quality quiz
          questions
        </span>
      </div>

      {/* Number of Questions */}
      <div className="mt-3 flex items-center justify-between">
        <label className="font-semibold text-gray-700">
          Number of Questions
        </label>

        <div className="flex items-center gap-6 rounded-lg bg-gray-100 px-5 py-2">
          <button
            onClick={() => setQuestions(Math.max(1, questions - 1))}
            className="text-lg"
          >
            -
          </button>

          <span className="font-medium">{questions}</span>

          <button
            onClick={() => setQuestions(questions + 1)}
            className="text-lg"
          >
            +
          </button>
        </div>
      </div>

      {/* Difficulty */}
      <div className="mt-6 flex items-center justify-between">
        <label className="font-semibold text-gray-900">
          Difficulty Level
        </label>

        <button className="flex items-center gap-4 rounded-lg bg-gray-100 px-5 py-2">
          <span className="text-sm font-medium">Easy</span>
          <ChevronDown size={18} />
        </button>
      </div>

      {/* Question Types */}
      <div className="mt-5 flex items-start justify-between">
        <label className="font-semibold text-gray-700">
          Question Types
        </label>

        <div className="flex gap-5 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="questionType"
              defaultChecked
              className="accent-blue-800"
            />
            Multiple Choice
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="questionType"
              className="accent-blue-800"
            />
            True or False
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="questionType"
              className="accent-blue-800"
            />
            Short Answer
          </label>
        </div>
      </div>

      {/* Explanations */}
      <div className="mt-5 flex items-center justify-between">
        <label className="font-semibold text-gray-700">
          Include Explanations
        </label>

        <div className="flex gap-7 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="explanation"
              defaultChecked
              className="accent-blue-800"
            />
            Yes
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="explanation"
              className="accent-blue-800"
            />
            No
          </label>
        </div>
      </div>

      {/* Generate Button */}
      <button className="mt-8 bg-[#294A93] text-white rounded-lg py-3 flex items-center justify-center gap-2 font-semibold hover:opacity-95">
        <Sparkles size={18} />
        Generate Quiz
      </button>
    </div>
  );
}