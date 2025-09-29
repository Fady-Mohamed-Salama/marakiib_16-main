"use client";

import React from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";


export default function LogoutModal({ isOpen, onClose, onConfirm }) {
  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 bg-opacity-50 z-50">
      <div className="bg-white rounded-xl p-6 w-80 md:w-96 text-center shadow-lg relative">
        {/* أيقونة التحذير */}
        <div className="flex justify-center mb-3">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center">
            <span className="text-white text-3xl"><HiOutlineExclamationTriangle/></span>
          </div>
        </div>

        {/* العنوان */}
        <h2 className="text-lg font-semibold text-gray-900">
          Are you sure you want to Logout?
        </h2>
        <p className="text-gray-500 font-semibold text-sm mt-2">
          By doing this, your account will be deleted permanently.
        </p>

        {/* الأزرار */}
        <div className="flex gap-3 mt-5">
          <button
            onClick={onConfirm}
            className="flex-1 bg-gray-200 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-300"
          >
            Log out
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700"
          >
            Cancel
          </button>
        </div>

        {/* زر الإغلاق (X) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-900 hover:text-gray-800"
        >
            <IoMdClose className="text-2xl" />
        </button>
      </div>
    </div>,
    document.body
  );
}
