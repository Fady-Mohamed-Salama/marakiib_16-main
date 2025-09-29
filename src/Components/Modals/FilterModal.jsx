"use client";

import React from "react";

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-18 inset-0  bg-opacity-50 z-50 flex justify-end"
      onClick={onClose} // إغلاق عند الضغط على الخلفية
    >
      <div
        className="bg-white h-full overflow-y-auto p-6 w-[75%] md:w-[40%] lg:w-[30%]"
        // عرض افتراضي 400px للشاشات الكبيرة
        onClick={(e) => e.stopPropagation()} // منع الإغلاق عند الضغط داخل المدل
      >
        <button className="float-right text-2xl mb-4" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-bold mb-6 text-center">Search Filter</h2>
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Keyword
            </label>
            <input
              type="text"
              placeholder="Search for a car"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Min Price
            </label>
            <input
              type="number"
              placeholder="Enter minimum price"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Max Price
            </label>
            <input
              type="number"
              placeholder="Enter maximum price"
              className="w-full border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>
          <div>
            {/* <label className="block text-sm font-medium text-purple-700 mb-2">
              Nature of use
            </label> */}
            <div className="relative">
              <select
                className="
        w-full border border-gray-300 rounded-xl
        px-4 py-3
        text-gray-700
        bg-white
        focus:outline-none focus:ring-2 focus:ring-red-500
        appearance-none
        font-semibold text-base
      "
                defaultValue=""
              >
                <option
                  value=""
                  disabled
                  hidden
                  className=" text-sm font-medium text-purple-700"
                >
                  Nature of use
                </option>
                <option
                  className="py-3 px-2 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                  value="personal"
                >
                  Personal
                </option>
                <option
                  className="py-3 px-2 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                  value="commercial"
                >
                  Commercial
                </option>
                <option
                  className="py-3 px-2 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                  value="family"
                >
                  Family
                </option>
                <option
                  className="py-3 px-2 text-lg font-semibold text-gray-900 hover:bg-gray-100"
                  value="business"
                >
                  Business
                </option>
              </select>

              {/* السهم */}
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-700">Nearest to my location</span>
            <input type="checkbox" className="w-5 h-5 accent-red-600" />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-700">
              Available for long-term guarantee (Dhaman)?
            </span>
            <input type="checkbox" className="w-5 h-5 accent-red-600" />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white py-3 rounded-xl font-semibold hover:bg-red-700 transition mt-4"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default FilterModal;
