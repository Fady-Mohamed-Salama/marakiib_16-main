

import { useUserType } from "@/Contexts/UserTypeContext";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdClose } from "react-icons/io";

const ShowModal = ({ isOpen, onClose }) => {
  const { setUserType } = useUserType();
  const router = useRouter();

  if (!isOpen) return null;

  const handleUserTypeSelection = (type) => {
    setUserType(type);
    onClose();
    router.push("/signup"); // بعد الاختيار يروح signup
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-end z-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-t-2xl p-6 relative animate-slide-up duration-700 ease-in-out">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-[52px] right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-110"
        >
          <IoMdClose className="text-2xl" />
        </button>

        {/* Modal title */}
        <h3 className="text-center font-bold text-lg mb-6">
          What type of account would you like to create?
        </h3>

        {/* Modal buttons */}
        <div className="space-y-3">
          <button
            onClick={() => handleUserTypeSelection("user")}
            className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            User
          </button>
          <button
            onClick={() => handleUserTypeSelection("vendor")}
            className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors duration-300"
          >
            Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowModal;

