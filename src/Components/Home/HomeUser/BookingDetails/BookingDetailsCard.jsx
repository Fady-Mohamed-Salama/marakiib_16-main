"use client";
import BackArrow from "@/Components/BackArrow/BackArrow";
import { useState } from "react";

export default function BookingDetailsCard() {
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      phone,
      startDate,
      days,
    });

     setPhone("");
    setStartDate("");
    setDays("");
    // هنا تقدر تبعت الداتا للباك إند أو تعمل أي أكشن
  };

  return (
    <div className="bg-white flex flex-col items-center px-4">
      {/* Back button */}
      <div className="mt-2 w-full flex justify-start">
        <BackArrow className="bg-white flex items-center justify-center  border border-gray-50 shadow rounded-md  w-10 h-10 cursor-pointer" />
      </div>
      <div className="w-full md:max-w-md">
        {/* Title */}
        <h1 className="text-xl font-semibold text-center mb-6">
          Booking Details
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-md mx-auto">
          {/* Phone Number */}
          <div>
            <label className="block text-black font-medium mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300  rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-black font-medium mb-1">
              Select Start Date
            </label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Number of Days */}
          <div className="mt-8">
            <label className="block text-black font-medium mb-3">
              Number of days
            </label>
            <input
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="Number of days"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-3 font-medium text-base rounded-lg hover:bg-red-700"
            >
              Confirm Booking
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
