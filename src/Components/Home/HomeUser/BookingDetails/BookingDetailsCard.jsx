"use client";
import BackArrow from "@/Components/BackArrow/BackArrow";
import { useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useAuth } from "@/Contexts/AuthContext";

export default function BookingDetailsCard() {
  const { id } = useParams(); // car_id من ال URL
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [days, setDays] = useState("");
  const [message, setMessage] = useState(null); // للرسائل (نجاح/خطأ)
  const [loading, setLoading] = useState(false);
  const { access_token } = useAuth();
  const router = useRouter();


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null); // امسح الرسائل القديمة
    setLoading(true);

    try {
      // حساب end_date بناءً على startDate + days
      const start = new Date(startDate);
      const end = new Date(start);
      end.setDate(start.getDate() + parseInt(days));

      const payload = {
        car_id: id, // car ID جاي من URL
        start_date: `${start.toISOString().slice(0, 19).replace("T", " ")}`,
        end_date: `${end.toISOString().slice(0, 19).replace("T", " ")}`,
        contact_number: phone,
        extra_options: [] // تقدر تبعتها من فورم لو عندك
      };

      // ابعت الـ request
      const res = await axios.post(
        "https://marakiib.com/api/bookings",
        payload,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`, // خزن التوكن عندك
            "Accept-Language": "en",
          },
        }
      );

      setMessage({ type: "success", text: "Booking submitted successfully 🎉" });

      setTimeout(() => {
        router.push("/"); // بعد ثانيتين روح لصفحة الحجوزات
      }, 2000);

      // تفريغ الفورم
      setPhone("");
      setStartDate("");
      setDays("");

    } catch (error) {
      console.error(error.response?.data || error.message);
      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Failed to submit booking. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white flex flex-col items-center px-4">
      {/* Back button */}
      <div className="mt-2 w-full flex justify-start">
        <BackArrow className="bg-white flex items-center justify-center border border-gray-50 shadow rounded-md w-10 h-10 cursor-pointer" />
      </div>
      <div className="w-full md:max-w-md">
        {/* Title */}
        <h1 className="text-xl font-semibold text-center mb-6">
          Booking Details
        </h1>

        {/* رسائل الخطأ/النجاح */}
        {message && (
          <div
            className={`mb-4 p-3 rounded-lg text-center ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5 max-w-md mx-auto"
        >
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
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
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
              required
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
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-3 font-medium text-base rounded-lg text-white ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {loading ? "Submitting..." : "Confirm Booking"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
