import React from "react";

export default function Button({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="w-full bg-indigo-600 text-white p-3 rounded-lg transition-all duration-300 hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg"
      {...props}
    >
      {children}
    </button>
  );
}
