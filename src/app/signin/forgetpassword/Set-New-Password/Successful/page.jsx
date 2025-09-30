"use client";

import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaCheck } from "react-icons/fa";

const Successful = () => {
  const router = useRouter();

  const handleContinue = () => {
    router.push("/signin"); // بيرجع لصفحة تسجيل الدخول
  };

  return (


    <div className="pt-10 flex items-center justify-center px-4">
      <div className="w-full bg-white">
        {/* Back Arrow */}
        <div>
          <BackArrow />
        </div>

        {/* Success Icon */}
        <div className="flex justify-center mt-16 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            className="w-24 h-24 text-black"
          >
            <path
              d="M50 2
             C60 6, 70 6, 78 14
             C86 22, 94 30, 96 40
             C98 50, 96 60, 90 70
             C84 80, 74 92, 62 96
             C50 100, 38 98, 28 92
             C18 86, 10 76, 6 64
             C2 52, 2 40, 6 28
             C10 16, 20 6, 32 4
             C44 2, 50 2, 50 2Z"
              fill="black"
            />
          </svg>

          {/* أيقونة الصح */}
          <FaCheck className="absolute text-white text-3xl mt-8" />
        </div>

        <div className="text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold text-red-600">Successful</h2>

          {/* Message */}
          <p className="text-gray-500 mt-2 px-4">
            Congratulations! Your password has been changed. <br />
            Click continue to login
          </p>
        </div>

        {/* Button */}
        <Button text="Update Password" type="submit" onClick={handleContinue} />
      </div>
    </div>
  );
};

export default Successful;
