"use client";

import { PiSlidersHorizontalLight } from "react-icons/pi";

export default function FilterButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-white border border-gray-200 rounded-xl p-2 flex-shrink-0"
    >
      <PiSlidersHorizontalLight className="text-gray-500 text-3xl" />
    </button>
  );
}
