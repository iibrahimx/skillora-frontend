"use client";

import { useState } from "react";
import { Pen } from "lucide-react";

export default function Settings() {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mfaEnabled, setMfaEnabled] = useState(false);

  const handleChangePassword = () => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill all password fields");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert("Password changed successfully");
    setNewPassword("");
    setConfirmPassword("");
  };

  const handleEnableMFA = () => {
    setMfaEnabled(!mfaEnabled);
    alert(
      !mfaEnabled
        ? "Multi-factor Authentication Enabled"
        : "Multi-factor Authentication Disabled"
    );
  };

  const handleEditEmail = () => {
    document.getElementById("email-input")?.focus();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg">
      <div className="text-center py-9 border-b border-gray-200">
        <h2 className="text-3xl font-bold mb-2">Account</h2>
        <p className="text-gray-600 text-sm">
          Edit your account settings and change your password here.
        </p>
      </div>

      <div className="p-9 px-10">
        <label className="block mb-2 mt-4 font-semibold text-sm">Email:</label>

        <div className="flex gap-3 mb-5">
          <input
            id="email-input"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 border border-gray-300 rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleEditEmail}
            className="w-12 h-12 border border-blue-500 rounded-lg bg-white text-blue-500 hover:bg-blue-50 transition-colors"
          >
            <Pen className="w-4 h-4 mx-auto" />
          </button>
        </div>

        <label className="block mb-2 mt-4 font-semibold text-sm">
          New password
        </label>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block mb-2 mt-4 font-semibold text-sm">
          Confirm new password
        </label>
        <input
          type="password"
          placeholder="Re-type new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={handleChangePassword}
          className="bg-blue-600 text-white border-none py-3 px-6 rounded-lg cursor-pointer text-sm hover:bg-blue-700 transition-colors"
        >
          Change password
        </button>

        <div className="mt-8 border border-gray-200 rounded-lg p-5 flex justify-between items-center gap-5">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">
              Multi-factor Authentication
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Increase your account security by requiring that a code emailed to
              you be entered when you log in. For more information on how
              Multi-factor Authentication works, refer to our Help Center.
            </p>
          </div>

          <button
            onClick={handleEnableMFA}
            className={`bg-blue-600 text-white border-none py-3 px-7 rounded-lg cursor-pointer text-sm hover:bg-blue-700 transition-colors whitespace-nowrap ${
              mfaEnabled ? "bg-gray-500 hover:bg-gray-600" : ""
            }`}
          >
            {mfaEnabled ? "Disable" : "Enable"}
          </button>
        </div>
      </div>
    </div>
  );
}
