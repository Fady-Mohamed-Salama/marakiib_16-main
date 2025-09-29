"use client";

import React from "react";
import { IoMdWallet } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import "../../ui/PromoCard.css";
import BackArrow from "@/Components/BackArrow/BackArrow";

const Ewalletpage = () => {
  return (
    <div className="bg-gray-100 p-4 min-h-screen">
      <BackArrow />

      <div className="flex flex-col items-center bg-gray-100 ">
        {/* Card */}
        <div className="bg-radial-lines bg-red-600 text-white rounded-2xl shadow-lg p-5 w-full max-w-md h-52 mt-6">
          <div className="flex items-center gap-2 mb-3">
            <IoMdWallet className="text-3xl" />
          </div>
          <p className="text-xl mb-2 pt-5 font-semibold">Current balance</p>
          <p className="text-2xl font-bold pt-7">0.0 SAR</p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button className="bg-red-700 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-red-600">
            <IoAddSharp className="inline-block text-xl" /> إيداع
          </button>
          <button className="bg-red-600 text-white px-6 py-2 rounded-full font-medium shadow-md hover:bg-red-700">
            <IoIosArrowRoundUp className="inline-block text-xl" /> سحب
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ewalletpage;
