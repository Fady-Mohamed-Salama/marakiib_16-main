"use client";

import React from "react";
import CarCard from "@/Components/ui/CarCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/Components/ui/Loader";
const CarsAvailable = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
  
    // جلب البيانات من الـ API
    useEffect(() => {
      const fetchCars = async () => {
        try {
          const response = await axios.get(
            "https://marakiib.com/api/public/cars/available",
            {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "Accept-Language": "en",
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
    }, []);
  
    if (loading) {
      return <Loader />;
    }
  return (
    <div className="bg-white py-6">
      <h1 className="text-lg text-black md:text-2xl font-semibold px-4 pb-3">
        Cars Available
      </h1>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10} // خليها 10px أو 12px عشان يكون فيه هواء
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 10 },
          340: { slidesPerView: 1.3, spaceBetween: 10 },
          380: { slidesPerView: 1.5, spaceBetween: 10 },
          420: { slidesPerView: 1.7, spaceBetween: 10 },
          480: { slidesPerView: 1.9, spaceBetween: 10 },
          560: { slidesPerView: 2.1, spaceBetween: 10 },
          640: { slidesPerView: 2.3, spaceBetween: 10 },
          768: { slidesPerView: 2.8, spaceBetween: 10 },
          1024: { slidesPerView: 3.2, spaceBetween: 10 },
          1280: { slidesPerView: 4, spaceBetween: 10 },
        }}
        className="pb-2"
      >
        {cars.map((car, index) => (
          <SwiperSlide key={index}>
            <CarCard car={car} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarsAvailable;
