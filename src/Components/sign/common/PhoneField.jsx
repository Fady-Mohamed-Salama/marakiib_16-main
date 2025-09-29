import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneField = ({ value, onChange, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">Phone Number</label>
      <PhoneInput
        country={"sa"}
        value={value}
        onChange={onChange}
        inputClass="!w-full !h-14 !pl-20 !pr-4 !text-base !rounded-xl !bg-gray-50 
        !border !border-gray-300 focus:!ring-1 focus:!ring-red-500 
        focus:!border-red-500 placeholder:!text-sm placeholder:!text-gray-400"
        buttonClass="!absolute !left-3 !top-1/2 !-translate-y-1/2 !border-0 !bg-transparent scale-125"
        containerClass="!w-full relative mt-1"
        dropdownClass="!bg-white !shadow-lg !border !border-gray-200 !rounded-lg"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PhoneField;
