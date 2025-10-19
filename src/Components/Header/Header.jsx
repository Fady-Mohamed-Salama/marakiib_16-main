"use client";

import Link from "next/link";
import React, { useState } from "react";
import { LuMessageCircleMore } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
// import { HiOutlineBell } from "react-icons/hi2";
import { FaChevronDown, FaRegUser } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import MobileMenu from "../Modals/MobileMenu";
// import { usePathname } from "next/navigation";
import { usePathname, useRouter } from "next/navigation"; // ✅ هنحتاج useRouter
import { useAuth } from "@/Contexts/AuthContext"; // ✅ استدعاء الكونتكست
import LogoutModal from "../Modals/LogoutModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
    const [showPages, setShowPages] = useState(false);

   const router = useRouter();
  const { user, logout } = useAuth(); // ✅ استدعاء الكونتكست



    const [showLogoutModal, setShowLogoutModal] = useState(false);
  // Function to determine active link classes
  const getLinkClasses = (href) => {
    const isActive = pathname === href;
    return `flex flex-col items-center transition ${
      isActive ? "text-red-500" : "text-white hover:text-red-500"
    }`;
  };


    const handleLogout = () => {
    logout(); // 🟢 من Context
    setShowLogoutModal(false);
    router.push("/signin"); // 🟢 بعد تسجيل الخروج يروح للصفحة دي
  };


  return (
    <header className="bg-gray-950 px-2 md:px-1 sticky top-0 z-50">
      <div className="md:max-w-7xl mx-auto flex items-center justify-between h-[70px]">
        <Link href="/">
          <img
            src="/images/Logo.png"
            className="h-32 w-auto"
            alt="Marakiib Logo"
          />
        </Link>

        {/* Navigation Tabs */}
        <nav className="hidden md:flex justify-around items-center gap-6 lg:gap-10">
          <Link href="/message" className={getLinkClasses("/message")}>
            <LuMessageCircleMore className="text-xl lg:text-2xl" />
            <span className="text-sm font-medium">Message</span>
          </Link>

          <Link href="/booking" className={getLinkClasses("/booking")}>
            <TbRoad className="text-xl lg:text-2xl" />
            <span className="text-sm font-medium">Booking</span>
          </Link>
          {/* Central Logo Link */}
          <Link href="/" className={getLinkClasses("/")}>
            <span
              className={`flex items-center justify-center w-12 h-12 rounded-full transition ${
                pathname === "/" ? "bg-red-500" : "bg-white hover:bg-red-600"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122 109"
                width={22}
                height={22}
                className={`${
                  pathname === "/"
                    ? "fill-white w-full"
                    : "fill-black hover:fill-white w-full"
                }`}
              >
                <g transform="translate(0,109) scale(0.05,-0.05)" stroke="none">
                  <path
                    d="M1170 2158 c-507 -74 -750 -446 -750 -1150 0 -516 -70 -706 -320
        -874 -92 -62 -98 -71 -67 -96 108 -90 297 7 421 217 122 207 132 261 145 745
        15 599 90 763 418 925 l132 65 467 6 467 6 -6 -456 -7 -457 -65 -133 c-161
        -326 -354 -420 -888 -432 l-373 -8 -10 -53 c-6 -29 -17 -69 -25 -88 -36 -93
        810 -36 1031 70 408 195 520 466 520 1270 l0 465 -485 -2 c-267 -2 -539 -11
        -605 -20z"
                  />
                  <path
                    d="M1550 1636 c-132 -86 -310 -199 -395 -249 -170 -102 -173 -108 -55
        -147 117 -38 117 -36 -62 -270 -89 -117 -159 -216 -155 -220 4 -4 111 60 237
        142 127 82 286 182 355 223 149 88 150 90 33 127 l-92 28 194 256 c107 141
        191 259 187 262 -4 3 -115 -65 -247 -152z"
                  />
                </g>
              </svg>
              
            </span>
          </Link>

          {/* <Link
            href="/notification"
            className={getLinkClasses("/notification")}
          >
            <HiOutlineBell className="text-xl lg:text-2xl" />
            <span className="text-sm font-medium">Notification</span>
          </Link> */}

          <Link href="/profile" className={getLinkClasses("/profile")}>
            <FaRegUser className="text-xl lg:text-2xl" />
            <span className="text-sm font-medium">Profile</span>
          </Link>


                    {/* Pages Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowPages(!showPages)}
              className="flex flex-col items-center text-white hover:text-red-500 transition"
            >
              <FaChevronDown className="text-xs mb-1" />
              <span className="text-sm font-medium">Pages</span>
            </button>

            {showPages && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                <Link
                  href="/profile/About"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setShowPages(false)}
                >
                  About
                </Link>
                <Link
                  href="/profile/Contact"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setShowPages(false)}
                >
                  Contact
                </Link>
                <Link
                  href="/profile/Terms"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setShowPages(false)}
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/profile/Privacy-Policy"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setShowPages(false)}
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/profile/faqs"
                  className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                  onClick={() => setShowPages(false)}
                >
                  FAQs
                </Link>
              </div>
            )}
          </div>
        </nav>

        
        {/* ✅ Auth Buttons */}
        <nav className="hidden md:block">
          {!user ? (
            <ul className="flex space-x-2 lg:space-x-4">
              <li>
                <Link
                  href="/signin"
                  className={`px-2 py-2 lg:px-3 lg:py-2 rounded transition ${
                    pathname === "/signin"
                      ? "bg-red-600 text-white"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                >
                  Sign In
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/signup"
                  className={`px-2 py-2 lg:px-3 lg:py-2 rounded transition ${
                    pathname === "/signup"
                      ? "bg-red-600 text-white"
                      : "bg-red-500 hover:bg-red-600 text-white"
                  }`}
                >
                  Sign Up
                </Link>
              </li> */}
            </ul>
          ) : (
            <button
              onClick={() => setShowLogoutModal(true)}
              className="px-3 py-2 rounded font-semibold bg-red-600 text-white hover:bg-red-700 transition"
            >
              Logout
            </button>
          )}
        </nav>

            

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white text-3xl cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IoMdClose /> : <FiMenu />}
          </button>
        </div>
      </div>


        <LogoutModal
                isOpen={showLogoutModal}
                onClose={() => setShowLogoutModal(false)}
                onConfirm={handleLogout}
              />

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
};

export default Header;

