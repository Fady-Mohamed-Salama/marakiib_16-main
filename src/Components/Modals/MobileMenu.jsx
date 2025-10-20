
"use client";

import Link from "next/link";
import { LuMessageCircleMore } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
import { HiOutlineBell } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/Contexts/AuthContext";
// import { MdGavel, MdHelpOutline, MdInfoOutline, MdOutlineMailOutline, MdPrivacyTip } from "react-icons/md";
import LogoutModal from "./LogoutModal";
import { useState } from "react";
// import { useAuth } from "@/Contexts/AuthContext";

const MobileMenu = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth(); 
  const pathname = usePathname();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const router = useRouter();
  
  if (!isOpen) return null;

  // دالة ترجع الكلاسات حسب الصفحة الحالية
  const getLinkClasses = (href) => {
    const isActive = pathname === href;
    return `flex items-center gap-2 transition ${
      isActive ? "text-red-500" : "text-white hover:text-red-500"
    }`;
  };

    const handleLogout = () => {
    logout(); // 🟢 من Context
    setShowLogoutModal(false);
    router.push("/signin"); // 🟢 بعد تسجيل الخروج يروح للصفحة دي
  };

  return (
    <div className="fixed top-0 right-0 w-[60%] h-full bg-black shadow-lg z-50 p-6 md:hidden flex flex-col">
      {/* Close button */}
      <div className="flex justify-end">
        <button
          className="text-black text-2xl cursor-pointer"
          onClick={onClose}
        >
          <IoMdClose className="w-10 h-10 rounded-full bg-gray-50 shadow-lg hover:bg-gray-100 transition-colors duration-300 hover:scale-110" />
        </button>
      </div>

      {/* Menu Links */}
      <ul className="flex flex-col gap-4 mt-6">
        <li className="border-b border-b-white pb-2">
          <Link href="/message" className={getLinkClasses("/message")} onClick={onClose}>
            <LuMessageCircleMore className="text-xl" />
            Message
          </Link>
        </li>

        <li className="border-b border-b-white pb-2">
          <Link href="/booking" className={getLinkClasses("/booking")} onClick={onClose}>
            <TbRoad className="text-xl" />
            Booking
          </Link>
        </li>



        <li className="border-b border-b-white pb-2">
          <Link href="/notification" className={getLinkClasses("/notification")} onClick={onClose}>
            <HiOutlineBell className="text-xl" />
            Notification
          </Link>
        </li>

        <li className="border-b border-b-white pb-2">
          <Link href="/profile" className={getLinkClasses("/profile")} onClick={onClose}>
            <FaRegUser className="text-xl" />
            Profile
          </Link>
        </li>
        {/* ///////////////// */}
        {/* <li className="border-b border-b-white pb-2">
          <Link
            href="/profile/About"
            className={getLinkClasses("/profile/About")}
            onClick={onClose}
          >
            <MdInfoOutline className="text-xl" />
          About
        </Link>
        </li>
        <li className="border-b border-b-white pb-2">
          <Link
            href="/profile/Contact"
            className={getLinkClasses("/profile/Contact")}
            onClick={onClose}
          >
            <MdOutlineMailOutline className="text-xl" />
            Contact
          </Link>
        </li>

        <li className="border-b border-b-white pb-2">
          <Link
            href="/profile/Terms"
            className={getLinkClasses("/profile/Terms")}
            onClick={onClose}
          >
            <MdGavel className="text-xl" />
            Terms & Conditions
          </Link>
        </li>
        <li className="border-b border-b-white pb-2">
          <Link
            href="/profile/Privacy-Policy"
            className={getLinkClasses("/profile/Privacy-Policy")}
            onClick={onClose}
          >
            <MdPrivacyTip className="text-xl" />
            Privacy Policy
          </Link>
        </li>
        <li className="border-b border-b-white pb-2">
          <Link
            href="/profile/faqs"
            className={getLinkClasses("/profile/faqs")}
            onClick={onClose}
          >
            <MdHelpOutline className="text-xl" />
            FAQ
          </Link>
        </li> */}
      </ul>

      {/* ✅ الجزء الخاص بتسجيل الدخول / الخروج */}
      <div className="mt-6 flex flex-col gap-3">
        {!user ? (
          <>
            <Link
              href="/signin"
              className={`px-3 py-2 rounded text-center transition ${
                pathname === "/signin"
                  ? "bg-red-600 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
              onClick={onClose}
            >
              Sign In
            </Link>

            {/* <Link
              href="/signup"
              className={`px-3 py-2 rounded text-center transition ${
                pathname === "/signup"
                  ? "bg-red-600 text-white"
                  : "bg-red-500 hover:bg-red-600 text-white"
              }`}
              onClick={onClose}
            >
              Sign Up
            </Link> */}
          </>
        ) : (
              <button
              onClick={() => setShowLogoutModal(true)}
              className="px-3 py-2 rounded font-semibold bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
        )}
      </div>

            <LogoutModal
              isOpen={showLogoutModal}
              onClose={() => setShowLogoutModal(false)}
              onConfirm={handleLogout}
            />


    </div>
  );
};

export default MobileMenu;
