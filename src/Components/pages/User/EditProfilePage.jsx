"use client";
import { FaCamera, FaUserCircle } from "react-icons/fa";
import Image from "next/image";
import BackArrow from "@/Components/BackArrow/BackArrow";
import { useAuth } from "@/Contexts/AuthContext";

export default function EditProfilePage() {
    const { user,  } = useAuth();

  if (!user) {
    return (
      <div className="flex justify-center items-center">
        <p className="text-gray-600">Loading profile...</p>
      </div>
    );
  }
  return (
    <div className="bg-white px-4 py-6 md:px-8 lg:px-16">
      <div className="md:max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-6">
          <BackArrow />
          <h1 className="flex-1 text-center text-lg font-bold">Profile</h1>
          <div className="w-6" />
        </div>
      <div className=" md:max-w-md mx-auto">
        {/* Profile Picture */}
        <div className="flex justify-center mb-6 relative">
          <div className="relative">
            {user.image ? (
              <Image
                src={user.image}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full object-cover"
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-4xl text-white">
                  <FaUserCircle className="w-16 h-16 text-gray-400" />
              </div>
            )}
            {/* زر التعديل فوق الصورة */}
            <button className="absolute bottom-0 right-0 bg-white border border-gray-400 rounded-full p-2 shadow">
              <FaCamera className="text-gray-600 text-sm" />
            </button>
          </div>
        </div>

        {/* User Name */}
        <h2 className="text-center font-semibold text-lg mb-6">
          {user.firstName} {user.name}
        </h2>

        {/* Form Inputs */}
        <div className="flex flex-col gap-4 mb-8">
          <input
            type="text"
            defaultValue={user.name}
            className="w-full py-4 px-3 rounded-2xl border font-semibold bg-white border-gray-400 text-sm focus:outline-none"
          />
          <input
            type="email"
            defaultValue={user.email}
            className="w-full py-4 px-3 rounded-2xl border font-semibold bg-white border-gray-400 text-sm focus:outline-none"
          />
          <input
            type="tel"
            defaultValue={user.phone_number}
            className="w-full py-4 px-3 rounded-2xl border font-semibold bg-white border-gray-400 text-sm focus:outline-none"
          />
        </div>

        {/* Save Button */}
        <button className="w-full bg-red-600 text-white py-3 rounded-md font-medium hover:bg-red-700 transition">
          Save Edit
        </button>
        </div>
      </div>
    </div>
  );
}
