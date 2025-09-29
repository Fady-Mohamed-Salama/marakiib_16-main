"use client";

import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";

// const handleSubmit = (e) => {
//   e.preventDefault();

//   // هنا تقدر تبعت الإيميل للسيرفر بالـ API
//   // fetch("/api/forgetpassword", { method: "POST", body: JSON.stringify({ email }) })

//   // بعد النجاح: روح لصفحة Verify
//   router.push("/signin/forgetpassword/Enter-code/Set-New-Password/Successful");
// };

const SetNewPassword = () => {
    const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    // هنا ممكن تبعت الداتا للسيرفر بالـ API
    // await fetch("/api/reset-password", {
    //   method: "POST",
    //   body: JSON.stringify({ newPassword }),
    // });

    // بعد النجاح → يروح للصفحة التانية
    router.push(
      "/signin/forgetpassword/Enter-code/Set-New-Password/Successful"
    );
  };



  return (
    <div className="pt-10 flex items-center justify-center px-2">
      <div className="w-full bg-white">
        {/* Back Arrow */}
        <div className="">
          <BackArrow />
        </div>
        <h2 className="text-2xl font-bold text-center text-red-600">
          Set A New Password
        </h2>
        <p className="text-gray-400 text-base md:text-lg text-center mt-2">
          Create a new password. Ensure it differs from previous ones for
          security.
        </p>

        {/* Form */}
        <form className="mt-6 w-full max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-900">
                New Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full h-12 px-4 mt-1 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full h-12 px-4 mt-1 rounded-lg bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-500"
              />
            </div>

            {/*Button set new password */}
            <Button text="Set New Password" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SetNewPassword;
