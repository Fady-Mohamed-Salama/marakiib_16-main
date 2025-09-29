"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";

const VerifyEmail = () => {
  const [code, setCode] = useState(["", "", "", "", ""]); // 5 خانات
  const inputsRef = useRef([]);
  const router = useRouter();

  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // لو كتب رقم ينتقل للبعده
    if (value && index < code.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      // يمسح اللي قبله وينقله هناك
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

    // بعد اللصق آخر input يتعمله focus
    inputsRef.current[Math.min(pasteData.length, code.length) - 1]?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(`Code entered: ${code.join("")}`);
    router.push("/signin/forgetpassword/Enter-code/Set-New-Password");
  };

  return (
    <div className="pt-10 flex items-center justify-center px-2">
      <div className="w-full  bg-white">
        {/* Back Arrow */}
        <div onClick={() => router.push("/signin/forgetpassword")}>
          <BackArrow />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-red-600 text-center mt-2">
          Check your Email
        </h2>
        <p className="text-gray-500 text-base md:text-lg text-center mt-2 w-full ">
          We sent a reset link to alpha...@gmail.com Enter 5 digit code that
          mentioned in the email
        </p>

        {/* Code Inputs */}
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
                className="w-14 h-14 border border-gray-200 rounded-lg text-center text-lg focus:outline-none  bg-gray-50"
              />
            ))}
          </div>

          {/* Resend Link */}
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

          {/* Verify Button */}
          <Button text="Verify Code" type="submit" />
        
        </form>
      </div>
    </div>
  );
};

export default VerifyEmail;
