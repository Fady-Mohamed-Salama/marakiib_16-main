"use client";
import React from "react";
import { MdFileCopy } from "react-icons/md";

const CommercialRegField = ({ value, onChange, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">
        Commercial Registration Number
      </label>
      <div className="relative flex items-center">
        <MdFileCopy className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
        <input
          type="text"
          placeholder="Commercial Registration Number"
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 
          focus:outline-none focus:ring-1 focus:ring-red-600 
          placeholder:text-sm placeholder:text-gray-400 text-base font-medium"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default CommercialRegField;
