
"use client";
import BackArrow from "@/Components/BackArrow/BackArrow";
import CardBooking from "@/Components/ui/CardBooking";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "@/Contexts/AuthContext";

const BookingCar = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const { access_token } = useAuth();

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://marakiib.com/api/bookings", {
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
      await axios.post(
        `https://marakiib.com/api/bookings/${id}/cancel`,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`, // خزن التوكن عندك
            "Accept-Language": "en",
          },
        }
      );
      fetchBookings();
    } catch (error) {
      console.error("Error cancelling booking:", error);
    }
  };

  return (
    <main className="bg-white p-4">
      <BackArrow />
      <h1 className="text-2xl font-bold mb-4 text-center">My Booking</h1>

      {loading ? (
        <p className="text-center">Loading bookings...</p>
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
