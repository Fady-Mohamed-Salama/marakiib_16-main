
"use client";

import Link from "next/link";
import { LuMessageCircleMore } from "react-icons/lu";
import { TbRoad } from "react-icons/tb";
import { HiOutlineBell } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { usePathname } from "next/navigation";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const pathname = usePathname();

  // دالة ترجع الكلاسات حسب الصفحة الحالية
  const getLinkClasses = (href) => {
    const isActive = pathname === href;
    return `flex items-center gap-2 transition ${
      isActive ? "text-red-500" : "text-white hover:text-red-500"
    }`;
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

        {/* <li className="border-b border-b-white pb-2">

          <Link href="/" onClick={onClose}>
            <span
              className={`flex items-center justify-center w-12 h-12 rounded-full transition ${
                pathname === "/" ? "bg-red-500" : "bg-white hover:bg-red-500"
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

        </li> */}

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
      </ul>

      {/* Sign In / Sign Up buttons */}
      <div className="mt-6 flex flex-col gap-3">
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

        <Link
          href="/signup"
          className={`px-3 py-2 rounded text-center transition ${
            pathname === "/signup"
              ? "bg-red-600 text-white"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
          onClick={onClose}
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default MobileMenu;
