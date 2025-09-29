"use client";

import { FiSearch } from "react-icons/fi";

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
  className = "",
}) {
  return (
    <div className={`flex items-center bg-white border border-gray-200 rounded-xl px-2 py-3 w-full`}>
      <FiSearch className="text-gray-500 text-2xl mr-2 shrink-0" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`flex-1 outline-none text-black font-semibold placeholder:text-gray-400  placeholder:font-medium text-ms ${className}`}
      />
    </div>
  );
}




{/* <div className="flex items-center bg-gray-100 border border-gray-300 rounded-full px-4 py-2 w-full max-w-md">
  <FiSearch className="text-gray-500 text-xl mr-2" />
  <input
    type="text"
    placeholder="Search..."
    className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
  />
</div> */}