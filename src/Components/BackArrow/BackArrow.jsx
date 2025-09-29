"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { LuArrowLeft } from "react-icons/lu";
const BackArrow = ({ className }) => {
  const router = useRouter();
  return (
    <div>
      <button onClick={() => router.back()}>
        <LuArrowLeft className={`text-black text-2xl ${className}`} />
      </button>
    </div>
  );
};

export default BackArrow;

// className={`text-gray-900 text-2xl ${className}`}

// className="mb-2 text-gray-900 text-3xl cursor-pointer"
