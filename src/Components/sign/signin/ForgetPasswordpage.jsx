"use client";

import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ForgetPasswordpage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // هنا تقدر تبعت الإيميل للسيرفر بالـ API
    // fetch("/api/forgetpassword", { method: "POST", body: JSON.stringify({ email }) })

    // بعد النجاح: روح لصفحة Verify
    router.push("/signin/forgetpassword/Enter-code");
  };

  return (
    <div className="pt-10 flex items-center justify-center px-2">
      <div className="w-full bg-white">
        {/* Back Arrow */}
        <BackArrow />

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-red-600 w-full">
          Forget Password
        </h2>
        <p className="text-gray-400 text-base md:text-lg text-center mt-2 mx-auto w-full">
          Please enter your email to reset the password.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 w-full max-w-3xl mx-auto px-4"
        >
          <div className="space-y-4 md:space-y-0">
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Your Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@gmail.com"
                required
                className="w-full px-4 py-2 mt-2 rounded-lg bg-gray-50  focus:outline-none focus:ring-1 focus:ring-red-500  placeholder:text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Button Reset Password */}
            <Button text="Reset Password" type="submit" />

          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordpage;
