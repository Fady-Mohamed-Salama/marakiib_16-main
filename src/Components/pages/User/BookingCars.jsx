"use client";
import BackArrow from "@/Components/BackArrow/BackArrow";
import CardBooking from "@/Components/ui/CardBooking";
import React, { useEffect, useState } from "react";
import { useAuth } from "@/Contexts/AuthContext";
import api from "@/lib/api";
import Loader from "@/Components/ui/Loader";

const BookingCar = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { access_token } = useAuth();

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await api.get("/bookings", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`, // خزن التوكن عندك
          "Accept-Language": "en",
        },
      });
      setBookings(res.data.data || []);
      console.log(res.data.data || []);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleCancel = async (id) => {
    try {
      await api.post(
        `/bookings/${id}/cancel`,
        {}, // لو مفيش بيانات تبعتها في البودي، حط object فاضي
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
            "Accept-Language": "en",
          },
        }
      );

      fetchBookings(); // بعد الإلغاء حدّث القائمة
    } catch (error) {
      console.error("Error cancelling booking:", error.response?.data || error);
    }
  };

  return (
    <main className="bg-white p-4">
      <BackArrow />
      <h1 className="text-2xl font-bold mb-4 text-center">My Booking</h1>

      {loading ? (
        <div className="flex justify-center items-center text-center">
          <Loader />
        </div>
      ) : bookings.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {bookings.map((car) => (
            <CardBooking key={car.id} car={car} onCancel={handleCancel} />
          ))}
        </div>
      ) : (
        <div className="flex-1 flex flex-col justify-center items-center py-20">
          <h2 className="text-lg font-bold text-gray-700">No Booking</h2>
        </div>
      )}
    </main>
  );
};

export default BookingCar;
