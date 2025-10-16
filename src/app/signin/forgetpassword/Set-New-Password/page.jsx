"use client";
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
import { useAuth } from "@/Contexts/AuthContext";
// import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import api from "@/lib/api";

const Resetpassword = () => {
  const [password, setNewpassword] = useState("");
  const [password_confirmation, setpassword_confirmation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const { email } = useAuth();

  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const inputsRef = useRef([]);

  // states للـ show/hide
  const [showNewpassword, setShowNewpassword] = useState(false);
  const [showConfirmpassword, setShowConfirmpassword] = useState(false);

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputsRef.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, code.length);
    const newCode = pasteData.split("");
    for (let i = newCode.length; i < code.length; i++) {
      newCode.push("");
    }
    setCode(newCode);
    inputsRef.current[Math.min(pasteData.length, code.length) - 1]?.focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await api.post(
        "/reset-password",
        {
          email,
          otp_code: code.join(""),
          password,
          password_confirmation,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        setSuccess("✅ password reset successful!");

        router.push("/signin/forgetpassword/Set-New-Password/Successful");
      } else {
        setError("❌ Failed to reset password. Try again.");
      }
    } catch (error) {
      console.error("❌ Error resetting password:", error);

      if (error.response?.data?.message) {
        setError(`❌ ${error.response.data.message}`);
      } else {
        setError("❌ An unexpected error occurred. Please try again.");
      }
    }
  };
  // D:\MARAKIIB\marakiib_14-main\src\app\signin\forgetpassword\Set-New-Password\Successful
  const handleResend = async () => {
    try {
      const response = await axios.post(
        "https://marakiib.com/api/resend-otp",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      if (response.status === 200) {
        console.log("✅ Code resent successfully to your email.");
      }
    } catch (error) {
      console.error("❌ Error resending code:", error);
    }
  };

  return (
    <div className="pt-10 flex items-center justify-center px-4">
      <div className="w-full bg-white">
        <BackArrow />
        <h2 className="text-2xl font-bold text-center text-red-600">
          Set A New password
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Create a new password. Ensure it differs from previous ones for
          security.
        </p>

        {/* رسائل الخطأ والنجاح */}
        {error && (
          <div className="mt-4 text-red-600 font-medium text-center bg-red-100 border border-red-300 rounded-md p-2">
            {error}
          </div>
        )}
        {success && (
          <div className="mt-4 text-green-600 font-medium text-center bg-green-100 border border-green-300 rounded-md p-2">
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md mx-auto">
          <div className="space-y-4">
            <div className="w-full flex gap-4 justify-center">
              {code.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  value={digit}
                  ref={(el) => (inputsRef.current[index] = el)}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  onPaste={handlePaste}
                  className="w-9 h-9 md:w-14 md:h-14 border border-gray-200 rounded-lg text-center text-lg focus:outline-none focus:ring-2 focus:ring-red-600 bg-gray-50"
                />
              ))}
            </div>

            {/* New password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-900">
                New password
              </label>
              <input
                type={showNewpassword ? "text" : "password"}
                value={password}
                onChange={(e) => setNewpassword(e.target.value)}
                placeholder="********"
                required
                className="w-full px-3 py-3  rounded-xl bg-gray-50
                     focus:outline-none focus:ring-2 focus:ring-red-600
                     placeholder:text-sm placeholder:text-gray-400 text-base font-medium"
              />
              <button
                type="button"
                onClick={() => setShowNewpassword(!showNewpassword)}
                className="absolute right-3 top-9"
              >
                {showNewpassword ? (
                  <FaRegEyeSlash className="text-gray-500" />
                ) : (
                  <FaRegEye className="text-gray-500" />
                )}
              </button>
            </div>

            {/* Confirm password */}
            <div className="relative">
              <label className="block text-sm font-semibold text-gray-900">
                Confirm password
              </label>
              <input
                type={showConfirmpassword ? "text" : "password"}
                value={password_confirmation}
                onChange={(e) => setpassword_confirmation(e.target.value)}
                placeholder="********"
                required
                className="w-full px-3 py-3 rounded-xl bg-gray-50
                     focus:outline-none focus:ring-2 focus:ring-red-600
                     placeholder:text-sm placeholder:text-gray-400 text-base font-medium"
              />
              <button
                type="button"
                onClick={() => setShowConfirmpassword(!showConfirmpassword)}
                className="absolute right-3 top-9"
              >
                {showConfirmpassword ? (
                  <FaRegEyeSlash className="text-gray-500" />
                ) : (
                  <FaRegEye className="text-gray-500" />
                )}
              </button>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-900 mt-7">
                Didn’t receive the code?{" "}
                <button
                  type="button"
                  className="text-red-600 font-bold underline"
                  onClick={handleResend}
                >
                  Resend Code
                </button>
              </p>
            </div>

            <Button text="Set New password" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Resetpassword;
