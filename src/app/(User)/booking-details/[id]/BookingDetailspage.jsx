"use client";

import BookingDetailsCard from "@/Components/Home/HomeUser/BookingDetails/BookingDetailsCard";
import { useAuth } from "@/Contexts/AuthContext";
import Link from "next/link";
import React from "react";

const BookingDetailspage = () => {
  const { access_token } = useAuth();

  // If the user is not logged in
  if (!access_token) {
    return (
      <div className="h-screen flex items-center justify-center px-2">
        <div className="flex flex-col items-center justify-center text-center px-2">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Please log in to view your booking details 🔒
          </h1>
          <p className="text-gray-600 mb-6">
            You need to sign in or create an account to continue.
          </p>
          <div className="flex gap-4">
            <Link
              href="/signin"
              className="px-6 py-2 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <BookingDetailsCard />
    </div>
  );
};

export default BookingDetailspage;
