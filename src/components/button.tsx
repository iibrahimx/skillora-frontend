import React from "react";

export default function Button({
  children,
  className = "",
  disabled,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`w-full bg-indigo-700 text-black p-4 rounded-lg transition-all duration-300
        ${!disabled ? "hover:bg-indigo-700 hover:text-white hover:-translate-y-1 hover:shadow-lg cursor-pointer" : "opacity-70 cursor-not-allowed"}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
