"use client";
import React from "react";

const ExpiryDateField = ({ value, onChange, error }) => {
  return (
    <div>
      <input
        type="date"
        placeholder="Expiry Date"
        value={value}
        onChange={onChange}
        className={`w-full h-12 px-4 border rounded-lg text-sm outline-none ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default ExpiryDateField;
