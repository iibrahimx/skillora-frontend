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
      style={{
        backgroundColor: disabled ? "#818CF8" : "#4F46E5",
        color: "#FFFFFF",
      }}
      className={`w-full p-4 rounded-lg transition-all duration-300
        ${
          !disabled
            ? "hover:-translate-y-1 hover:shadow-lg cursor-pointer"
            : "opacity-70 cursor-not-allowed"
        }
        ${className}
      `}
    >
      {children}
    </button>
  );
}
