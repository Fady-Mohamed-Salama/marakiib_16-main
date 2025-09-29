
"use client";

import React from "react";
import CarCard from "@/Components/ui/CarCard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/images/car.png",
    fuel: "90L",
    gear: "Manual",
    people: "2 People",
    price: 99.0,
  },
];

const RecommendationCars = () => {
  return (
    <div className="bg-white py-6">
      <h1 className="text-lg text-black md:text-2xl font-semibold px-4 pb-3">
        Recommendation Cars
      </h1>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10} // خليها 10px أو 12px عشان يكون فيه هواء
        breakpoints={{
          320: { slidesPerView: 1.2, spaceBetween: 10 },
          340: { slidesPerView: 1.3, spaceBetween: 10 },
          380: { slidesPerView: 1.5, spaceBetween: 10},
          420: { slidesPerView: 1.7, spaceBetween: 10},
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
}

export default RecommendationCars