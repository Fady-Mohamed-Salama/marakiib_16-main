// "use client";

// import { useState, useRef } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import axios from "axios";
// import BackArrow from "@/Components/BackArrow/BackArrow";
// import Button from "@/Components/ui/Button";
// import { useAuth } from "@/Contexts/AuthContext";

// const VerifyCodeComponent = () => {
//   const { login } = useAuth();
//   const [code, setCode] = useState(["", "", "", "", "", ""]); // 6 خانات
//   const [errorMsg, setErrorMsg] = useState(""); // رسالة الخطأ
//   const inputsRef = useRef([]);
//   const router = useRouter();

//   const searchParams = useSearchParams();
//   const email = searchParams.get("email");

//   const handleChange = (value, index) => {
//     if (value.length > 1) return;
//     const newCode = [...code];
//     newCode[index] = value;
//     setCode(newCode);

//     if (value && index < code.length - 1) {
//       inputsRef.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       const newCode = [...code];
//       newCode[index - 1] = "";
//       setCode(newCode);
//       inputsRef.current[index - 1].focus();
//     }
//   };

//   const handlePaste = (e) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData("text").slice(0, code.length);
//     const newCode = pasteData.split("");
//     for (let i = newCode.length; i < code.length; i++) {
//       newCode.push("");
//     }
//     setCode(newCode);
//     inputsRef.current[Math.min(pasteData.length, code.length) - 1]?.focus();
//   };
//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   const otp_code = code.join("");

//   try {
//     const response = await axios.post(
//       "https://marakiib.com/api/verify-otp",
//       {
//         email,
//         otp_code,
//       },
//       {
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("✅ Verify success:", response.data);

//     const { user, access_token, token_type } = response.data;

//     // 🟢 خزن البيانات في الكونتكست + السيشن
//     login(user, `${token_type} ${access_token}`, user.role);

//     // روح للصفحة الرئيسية أو الداشبورد
//     router.push("/");
//   } catch (error) {
//     console.error("❌ Verify failed:", error.response?.data || error.message);
//     setErrorMsg(
//       error.response?.data?.message || "الرمز الذي أدخلته غير صحيح."
//     );
//   }
// };

//   return (
//     <div className="pt-10 flex items-center justify-center px-2">
//       <div className="w-full bg-white">
//         <div onClick={() => router.push("/signin/forgetpassword")}>
//           <BackArrow />
//         </div>

//         <h2 className="text-2xl font-bold text-red-600 text-center mt-2">
//           Verify Code
//         </h2>
//         <p className="text-gray-500 text-base md:text-lg text-center mt-2 w-full ">
//           Enter the OTP code that we just sent on your registered email
//         </p>
//         <p className="text-red-600 text-base md:text-lg text-center mt-2 w-full ">
//           <strong>{email}</strong>
//         </p>

//         {/* لو فيه خطأ */}
//         {errorMsg && (
//           <p className="text-center text-red-500 mt-3">{errorMsg}</p>
//         )}

//         <form
//           onSubmit={handleSubmit}
//           className="mt-10 flex flex-col items-center w-full"
//         >
//           <div className="w-full flex gap-4 justify-center">
//             {code.map((digit, index) => (
//               <input
//                 key={index}
//                 type="text"
//                 maxLength={1}
//                 value={digit}
//                 ref={(el) => (inputsRef.current[index] = el)}
//                 onChange={(e) => handleChange(e.target.value, index)}
//                 onKeyDown={(e) => handleKeyDown(e, index)}
//                 onPaste={handlePaste}
//                 className="w-14 h-14 border border-gray-200 rounded-lg text-center text-lg focus:outline-none bg-gray-50"
//               />
//             ))}
//           </div>

//           <p className="text-sm text-gray-900 mt-7">
//             Didn’t receive the code?{" "}
//             <button
//               type="button"
//               className="text-red-600 font-medium underline"
//               onClick={() => alert("Code resent!")}
//             >
//               Resend Code
//             </button>
//           </p>

//           <Button text="Verify" type="submit" className="mt-7" />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default VerifyCodeComponent;

// ==================

"use client";

import { useState, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
// import api from ""; // ✅ استخدم api.js بدل axios مباشرة
import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
import { useAuth } from "@/Contexts/AuthContext";
import api from "@/lib/api";

const VerifyCodeComponent = () => {
  const { login } = useAuth();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const inputsRef = useRef([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  // تغيير كل خانة
  const handleChange = (value, index) => {
    if (value.length > 1) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  // الرجوع مع Backspace
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const newCode = [...code];
      newCode[index - 1] = "";
      setCode(newCode);
      inputsRef.current[index - 1].focus();
    }
  };

  // لصق الكود دفعة واحدة
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, code.length);
    const newCode = pasteData.split("");
    while (newCode.length < code.length) {
      newCode.push("");
    }
    setCode(newCode);
    inputsRef.current[Math.min(pasteData.length, code.length) - 1]?.focus();
  };

  // ✅ إرسال الكود
  const handleSubmit = async (e) => {
    e.preventDefault();
    const otp_code = code.join("");

    if (otp_code.length < 6) {
      setErrorMsg("Please enter the full 6-digit code.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await api.post("/verify-otp", {
        email,
        otp_code,
      });

      console.log("✅ Verify success:", response.data);
      const { user, access_token, token_type } = response.data;

      // 🟢 خزن البيانات (بنفس الترتيب الصحيح)
      login(user, user.role, `${token_type} ${access_token}`);

      router.push("/");
    } catch (error) {
      console.error("❌ Verify failed:", error.response?.data || error.message);
      setErrorMsg(
        error.response?.data?.message || "الرمز الذي أدخلته غير صحيح."
      );
    } finally {
      setLoading(false);
    }
  };

  // ✅ إعادة إرسال الكود
  const handleResend = async () => {
    if (!email) return;
    setResending(true);
    try {
      await api.post("/resend-otp", { email });
      alert("✅ Code resent successfully!");
    } catch (error) {
      console.error("❌ Resend failed:", error.response?.data || error.message);
      setErrorMsg("فشل إرسال الكود. حاول مرة أخرى.");
    } finally {
      setResending(false);
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
        <p className="text-gray-500 text-base md:text-lg text-center mt-2">
          Enter the OTP code we sent to:
        </p>
        <p className="text-red-600 text-lg text-center mt-2">
          <strong>{email}</strong>
        </p>

        {errorMsg && (
          <p className="text-center text-red-500 mt-3">{errorMsg}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col items-center w-full"
        >
          {/* 🔢 الخانات */}
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
              onClick={handleResend}
              disabled={resending}
            >
              {resending ? "Resending..." : "Resend Code"}
            </button>
          </p>

          <Button
            text={loading ? "Verifying..." : "Verify"}
            type="submit"
            disabled={loading}
            className="mt-7"
          />
        </form>
      </div>
    </div>
  );
};

export default VerifyCodeComponent;
