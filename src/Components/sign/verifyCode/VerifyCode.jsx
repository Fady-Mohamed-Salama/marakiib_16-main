"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
import api from "@/lib/api";
import { useAuth } from "@/Contexts/AuthContext";

const VerifyCodeComponent = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]); // 6 خانات
  const [errorMsg, setErrorMsg] = useState(""); // رسالة الخطأ
  const inputsRef = useRef([]);
  const router = useRouter();
  const { login , email } = useAuth();
  // const searchParams = useSearchParams();
  // const email = searchParams.get("email");

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
    const otp_code = code.join("");

    try {
      const response = await api.post("/verify-otp", {
        email: email,
        otp_code: otp_code,
      });

      console.log("✅ Verify success:", response.data);
      setErrorMsg("");
      login(response.data.user, response.data.user.role);
      router.push("/");
    } catch (error) {
      console.error("❌ Verify failed:", error.response?.data || error.message);
      setErrorMsg(
        error.response?.data?.message || "الرمز الذي أدخلته غير صحيح."
      );
    }
  };

  return (
    <div className="pt-10 flex items-center justify-center px-2">
      <div className="w-full bg-white">
        <div onClick={() => router.push("/signin/forgetpassword")}>
          <BackArrow />
        </div>

        <h2 className="text-2xl font-bold text-red-600 text-center mt-2">
          Verify Code
        </h2>
        <p className="text-gray-500 text-base md:text-lg text-center mt-2 w-full ">
          Enter the OTP code that we just sent on your registered email
        </p>
        <p className="text-red-600 text-base md:text-lg text-center mt-2 w-full ">
          <strong>{email}</strong>
        </p>

        {/* لو فيه خطأ */}
        {errorMsg && (
          <p className="text-center text-red-500 mt-3">{errorMsg}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col items-center w-full"
        >
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
                className="w-14 h-14 border border-gray-200 rounded-lg text-center text-lg focus:outline-none bg-gray-50"
              />
            ))}
          </div>

          <p className="text-sm text-gray-900 mt-7">
            Didn’t receive the code?{" "}
            <button
              type="button"
              className="text-red-600 font-medium underline"
              onClick={() => alert("Code resent!")}
            >
              Resend Code
            </button>
          </p>

          <Button text="Verify" type="submit" className="mt-7" />
        </form>
      </div>
    </div>
  );
};

export default VerifyCodeComponent;
