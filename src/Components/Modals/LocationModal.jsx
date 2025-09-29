"use client";

import { FaLocationArrow } from "react-icons/fa";

export default function LocationModal({ isOpen, onClose, onAllow }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl w-[90%] max-w-sm p-6 text-center animate-fadeIn">
        {/* أيقونة */}
        <div className="flex justify-center mb-4">
          <FaLocationArrow className="text-blue-600 text-3xl" />
        </div>

        {/* العنوان */}
        <h2 className="text-base font-semibold text-gray-800 mb-2">
          Allow this app to access your device’s location?
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Your location will be used to show nearby services.
        </p>

        {/* الأزرار */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => {
              onAllow?.("while-using");
              onClose();
            }}
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Allow while using app
          </button>
          <button
            onClick={() => {
              onAllow?.("once");
              onClose();
            }}
            className="bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
          >
            Allow only this time
          </button>
          <button
            onClick={() => {
              onAllow?.("deny");
              onClose();
            }}
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
          >
            Don’t allow
          </button>
        </div>
      </div>
    </div>
  );
}
