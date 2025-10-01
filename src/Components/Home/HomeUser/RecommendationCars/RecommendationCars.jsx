"use client";

import React, { useEffect, useState } from "react";
import CarCard from "@/Components/ui/CarCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import axios from "axios";
import Loader from "@/Components/ui/Loader";
import { useAuth } from "@/Contexts/AuthContext";

const RecommendationCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const { access_token } = useAuth();

  // جلب البيانات من الـ API
useEffect(() => {
  if (!access_token) return; // استنى لما التوكن يبقى موجود

  const fetchCars = async () => {
    try {
      const response = await axios.get(
        "https://marakiib.com/api/customer/suggested-cars",
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      setCars(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("❌ Error fetching cars:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCars();
}, [access_token]); // 👈 أضفت access_token هنا


  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white py-6">
      <h1 className="text-lg text-black md:text-2xl font-semibold px-4 pb-3">
        Recommendation Cars
      </h1>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10}
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 10 },
          380: { slidesPerView: 1.5, spaceBetween: 10 },
          480: { slidesPerView: 1.9, spaceBetween: 10 },
          640: { slidesPerView: 2.3, spaceBetween: 10 },
          768: { slidesPerView: 2.8, spaceBetween: 10 },
          1024: { slidesPerView: 3.2, spaceBetween: 10 },
          1280: { slidesPerView: 4, spaceBetween: 10 },
        }}
        className="pb-2"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <CarCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RecommendationCars;
