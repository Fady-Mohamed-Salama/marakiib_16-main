"use client";

import { FaUserCircle } from "react-icons/fa";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  MdOutlineAccountBalanceWallet,
  MdOutlinePrivacyTip,
  MdHeadphones,
  MdOutlineLogout,
  MdKeyboardArrowRight,
  MdOutlineModeEdit,
} from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import { useAuth } from "@/Contexts/AuthContext";
import LogoutModal from "@/Components/Modals/LogoutModal"; // 🟢 أنشئ الملف هنا

const SectionItem = ({ icon, title, onClick }) => (
  <div
    className="flex items-center justify-between py-2 cursor-pointer"
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-gray-300 bg-white flex items-center justify-center text-gray-700 text-xl md:text-2xl">
        {icon}
      </div>
      <span className="text-sm md:text-xl font-semibold text-black">
        {title}
      </span>
    </div>
    <span className="text-gray-600 text-3xl">
      <MdKeyboardArrowRight />
    </span>
  </div>
);

export default function ProfilePrivateRenter() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  if (!user) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }

  const handleLogout = () => {
    logout(); // 🟢 من Context
    setShowLogoutModal(false);
    router.push("/signin"); // 🟢 بعد تسجيل الخروج يروح للصفحة دي
  };

  return (
    <div className="bg-white">
      <div className="md:max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header */}
        <h2 className="text-xl md:text-2xl font-semibold text-center py-2">
          Profile
        </h2>

        {/* User Info */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {user.image ? (
              <Image
                src={user.image}
                alt="Profile"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            ) : (
              <FaUserCircle className="w-16 h-16 text-gray-400" />
            )}
            <div>
              <h3 className="font-semibold text-gray-900 text-xs md:text-lg">
                {user.name}
              </h3>
            </div>
          </div>
          <button
            onClick={() => router.push("/profile/Edit-profile")}
            className="flex flex-col cursor-pointer items-center text-red-500"
          >
            <MdOutlineModeEdit className="text-sm md:text-lg" />
            <span className="font-semibold text-sm md:text-lg">
              Edit profile
            </span>
          </button>
        </div>

        {/* General Section */}
        <div className="mt-4">
          <div className="bg-white cursor-pointer">
            <SectionItem
              onClick={() => router.push("/profile/E-Wallet")}
              icon={<MdOutlineAccountBalanceWallet />}
              title="E-Wallet"
            />
            <SectionItem
              icon={<CiGlobe />}
              title="Languages"
              onClick={() => router.push("/profile/Languages")}
            />
            <SectionItem
              icon={<MdOutlinePrivacyTip />}
              title="Privacy Policy"
            />
            <SectionItem
              icon={<MdHeadphones />}
              title="Help Support"
              onClick={() => router.push("/profile/Help-Support")}
            />
            <SectionItem
              icon={<MdOutlineLogout />}
              title="Log out"
              onClick={() => setShowLogoutModal(true)}
            />
          </div>
        </div>
      </div>

      {/* Logout Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}
