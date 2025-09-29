import React from "react";
import { IoMdLock } from "react-icons/io";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const PasswordField = ({ label, value, onChange, showPassword, togglePassword, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <div className="relative flex items-center">
        <IoMdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
        <input
          type={showPassword ? "text" : "password"}
          placeholder={label}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-50 
          focus:outline-none focus:ring-1 focus:ring-red-600 
          placeholder:text-sm placeholder:text-gray-400 text-base font-medium"
        />
        <button
          type="button"
          onClick={togglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2"
        >
          {showPassword ? <FaRegEyeSlash className="text-gray-500" /> : <FaRegEye className="text-gray-500" />}
        </button>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default PasswordField;
