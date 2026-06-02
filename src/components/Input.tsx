import React from "react";

export default function Input(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return <input {...props} className="w-full border p-3 rounded-lg" />;
}
