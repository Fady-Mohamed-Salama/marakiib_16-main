"use client";
import { useParams } from "next/navigation";
import { FaCogs, FaStar } from "react-icons/fa";
import Image from "next/image";
import BackArrow from "@/Components/BackArrow/BackArrow";
import { FiHeart } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useState, useRef } from "react";
import { FaLocationDot, FaHeart, FaUser, FaGasPump } from "react-icons/fa6";

import { LuMessageCircleMore } from "react-icons/lu";
const CarDetailsPage = () => {
  const { id } = useParams();

  const car = {
    id,
    name: "Tesla Model",
    type: "Electric",
    gallery: [
      "/images/car-1.png",
      "/images/car-2.png",
      "/images/car-3.png",
      "/images/car-4.png",
    ],
    fuel: "Electric",
    gear: "Automatic",
    people: "4 People",
    price: 80,
    oldPrice: 100,
    rating: 5.0,
    reviews: 125,
    description:
      "A car with high specs that are rented at an affordable price.",
    owner: {
      name: "Hela Quintin",
      avatar: "/images/user.png",
    },
    location: {
      address: "PQ6V+6H6, Madaba, Jordan",
      lat: 31.7167,
      lng: 35.7939,
    },
    CarFeatures: {
      Features: "Car Features",
      color: "Red",
      transmission: "Automatic",
      fuel: "Petrol",
    },
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const [liked, setLiked] = useState(false);

  return (
    <div className="max-w-5xl mx-auto px-4 py-2">
      <div className="flex justify-between items-center">
        <div className="bg-white flex items-center justify-center pt-1  border border-gray-50 shadow rounded-md  w-10 h-10 cursor-pointer">
          <BackArrow className="" />
        </div>

        <div
          onClick={() => setLiked(!liked)}
          className="bg-white flex items-center justify-center border border-gray-50 shadow rounded-md w-10 h-10 cursor-pointer 
                  transition-colors duration-300"
        >
          {liked ? (
            <FaHeart className="text-2xl text-red-500 transition-all duration-300" />
          ) : (
            <FiHeart className="text-2xl text-red-500 hover:fill-red-500 transition-all duration-300" />
          )}
        </div>
      </div>

      {/* السلايدر الرئيسي */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mt-2 rounded-2xl overflow-hidden"
      >
        {car.gallery.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-64 md:h-96 bg-gray-50 flex items-center justify-center">
              <Image
                src={img}
                alt={`Car ${i}`}
                width={600}
                height={400}
                className="object-contain h-full w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* النوجات تحت الصورة الكبيرة */}
      <div className="custom-pagination flex justify-center mt-2"></div>

      {/* سلايدر الصور الصغيرة */}
      <Swiper
        spaceBetween={5} // المسافة الافتراضية (موبايل صغير)
        slidesPerView={3} // 3 صور في الموبايل
        breakpoints={{
          640: {
            // من أول 640px وانت طالع
            spaceBetween: 5, // المسافة بين الصور
            slidesPerView: 4, // لو حابب تزود عدد الصور في الشاشات الأكبر
          },
          1024: {
            // شاشات أكبر (لابتوب/ديسكتوب)
            spaceBetween: 10,
            slidesPerView: 5, // تزود كمان الصور
          },
        }}
        className="mt-4"
      >
        {car.gallery.map((img, i) => (
          <SwiperSlide key={i}>
            <div
              onClick={() => {
                setCurrentIndex(i);
                swiperRef.current?.slideTo(i);
              }}
              className={`w-24 h-16 md:w-28 md:h-20 rounded-lg overflow-hidden cursor-pointer border-2 ${
                i === currentIndex ? "border-red-500" : "border-transparent"
              }`}
            >
              <Image
                src={img}
                alt={`Gallery ${i}`}
                width={112}
                height={80}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* معلومات العربية */}
      <div className="mt-6">
        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">{car.name}</h1>
            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
              {car.description}
            </p>
          </div>

          {/* Badge */}
          <div className="flex items-center justify-center">
            <span className="px-3 py-2 rounded-full bg-green-300 text-green-800 text-xs font-semibold">
              Available
            </span>
          </div>
        </div>

        {/* صاحب العربية */}
        <div className="flex justify-between items-center py-3 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-purple-200">
              {" "}
              {/* <Image
              src={car.owner.avatar}
              alt={car.owner.name}
              width={40}
              height={40}
              className="rounded-full"
            /> */}
            </div>
            <p className="font-semibold">{car.owner.name}</p>
          </div>
          <button className="w-9 h-9 rounded-full border border-red-600 flex items-center justify-center text-xl text-red-600">
            <span>
              <LuMessageCircleMore />
            </span>
          </button>
        </div>

        {/* location */}
        <div className="flex items-center gap-2 text-sm text-gray-700 py-6 border-b border-gray-300 ">
          <span className="text-red-600 text-lg">
            <FaLocationDot />
          </span>
          <p>{car.location.address}</p>
          <p>
            {car.location.lat}, {car.location.lng}
          </p>
        </div>

        {/*Car Features*/}

        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-3">Car Features</h2>
          <div className="flex gap-4 md:gap-8 overflow-x-auto">
            {/* Color */}
            <div className="flex flex-col items-center justify-center w-32 h-20 bg-gray-200 rounded-xl shadow-sm">
              <p className="text-gray-700 font-medium text-sm">Color</p>
              <span className="font-semibold text-base pt-1.5">
                {car.CarFeatures.color}
              </span>
            </div>

            {/* Transmission */}
            <div className="flex flex-col items-center justify-center w-32 h-20 bg-gray-200 rounded-xl shadow-sm">
              <p className="text-gray-700 font-medium text-sm">Transmission</p>
              <span className="font-semibold text-base pt-1.5">
                {car.CarFeatures.transmission}
              </span>
            </div>

            {/* Fuel */}
            <div className="flex flex-col items-center justify-center w-32 h-20 bg-gray-200 rounded-xl shadow-sm">
              <p className="text-gray-700 font-medium text-sm">Fuel</p>
              <span className="font-semibold text-base pt-1.5">
                {car.CarFeatures.fuel}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Reviews</h2>
            <button className="text-red-600 text-sm font-semibold">
              View All
            </button>
          </div>

          {/* No Reviews */}
          <div className="text-center py-6 text-gray-900 font-bold text-xl">
            No reviews yet
          </div>
        </div>
      </div>

      {/* Reviews */}
      {/* <div className="mt-8">
        <h2 className="text-lg font-semibold mb-3">Reviews</h2>
        <div className="space-y-3">
          <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-3">
            <Image
              src="/images/user.png"
              alt="Mr. Jack"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Mr. Jack</p>
              <div className="flex items-center text-yellow-500 text-sm">
                <FaStar /> <span className="ml-1">5.0</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                The rental car was clean, reliable, and the service was quick
                and efficient.
              </p>
            </div>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl flex items-start gap-3">
            <Image
              src="/images/user.png"
              alt="Robert"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">Robert</p>
              <div className="flex items-center text-yellow-500 text-sm">
                <FaStar /> <span className="ml-1">5.0</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                The rental car exceeded my expectations, great experience.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* السعر + زرار */}
      <div className="flex justify-between items-center mt-8  pt-4">
        <div>
          <p className="text-xl font-bold">
            ${car.price}.00
            <span className="text-gray-600 text-sm">/Day</span>
          </p>
        </div>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700">
          Rent Now
        </button>
      </div>
{/* 
      <div className="fixed bottom-0 left-0 w-full bg-white  shadow-md px-4 py-3 flex justify-between items-center">
        <p className="text-xl font-bold">
          ${car.price}.00
          <span className="text-gray-600 text-sm">/Day</span>
        </p>
        <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700">
          Rent Now
        </button>
      </div> */}
    </div>
  );
};

export default CarDetailsPage;
