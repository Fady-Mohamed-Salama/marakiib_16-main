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
import { useState, useRef, useEffect } from "react";
import { FaLocationDot, FaHeart } from "react-icons/fa6";
import { LuMessageCircleMore } from "react-icons/lu";
import { useAuth } from "@/Contexts/AuthContext";
import axios from "axios";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [liked, setLiked] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef(null);
  const { access_token } = useAuth();

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const response = await axios.get(
          `https://marakiib.com/api/public/cars/${id}`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Accept-Language": "en",
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        console.log("Car detail response:", response.data);
        setCar(response.data.data);
      } catch (error) {
        console.error("❌ Error fetching car detail:", error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (!car)
    return <div className="text-center py-10 text-red-500">Car not found</div>;

  // صور الجاليري (صورة رئيسية + صور إضافية)
  const gallery = [car.main_image, ...(car.extra_images || [])];

  return (
    <div className="max-w-5xl mx-auto px-4 py-2">
      {/* زر رجوع + المفضلة */}
      <div className="flex justify-between items-center">
        <div className="bg-white flex items-center justify-center pt-1 border border-gray-50 shadow rounded-md w-10 h-10 cursor-pointer">
          <BackArrow />
        </div>

        <div
          onClick={() => setLiked(!liked)}
          className="bg-white flex items-center justify-center border border-gray-50 shadow rounded-md w-10 h-10 cursor-pointer transition-colors duration-300"
        >
          {liked ? (
            <FaHeart className="text-2xl text-red-500" />
          ) : (
            <FiHeart className="text-2xl text-red-500 hover:fill-red-500" />
          )}
        </div>
      </div>

      {/* السلايدر */}
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ el: ".custom-pagination", clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="mt-2 rounded-2xl overflow-hidden"
      >
        {gallery.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-64 md:h-96 bg-gray-50 flex items-center justify-center">
              <img
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

      <div className="custom-pagination flex justify-center mt-2"></div>

      {/* صور مصغرة */}
      <Swiper
        spaceBetween={5}
        slidesPerView={3}
        breakpoints={{
          640: { spaceBetween: 5, slidesPerView: 4 },
          1024: { spaceBetween: 10, slidesPerView: 5 },
        }}
        className="mt-4"
      >
        {gallery.map((img, i) => (
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
              <img
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

      {/* تفاصيل العربية */}
      <div className="mt-6">
        <div className="flex justify-between items-center pb-2 border-b border-gray-300">
          <div>
            <h1 className="text-xl md:text-2xl font-bold">
              {car.name}
            </h1>
            <p className="text-gray-500 text-sm mt-1">{car.description}</p>
            <p className="text-gray-500 text-sm mt-1">Model: {car.model}</p>
          </div>
          <div className="flex items-center justify-center">
            <span className="px-3 py-2 rounded-full bg-green-300 text-green-800 text-xs font-semibold">
              {car.is_active ? "Available" : "Not Available"}
            </span>
          </div>
        </div>

        {/* صاحب العربية */}
        <div className="flex justify-between items-center py-3 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center">
              {car.user?.avatar ? (
                <Image
                  src={car.user.avatar}
                  alt={car.user.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              ) : (
                <span className="text-sm font-bold">{car.user?.name?.[0]}</span>
              )}
            </div>
            <p className="font-semibold">{car.user?.name}</p>
          </div>
          <button className="w-9 h-9 rounded-full border border-red-600 flex items-center justify-center text-xl text-red-600">
            <LuMessageCircleMore />
          </button>
        </div>

        {/* location */}
        <div className="flex flex-col gap-2 text-sm text-gray-700 py-6 border-b border-gray-300">
          <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg">
              <FaLocationDot />
            </span>
            <p>{car.user?.address || "No address provided"}</p>
          </div>

          {/* <div className="flex items-center gap-2">
            <span className="text-red-600 text-lg">
              <FaLocationDot />
            </span>
            <p>
              {car.latitude}, {car.longitude}
            </p>
          </div> */}
        </div>

        {/* الخصائص */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-3">Car Features</h2>
          <div className="flex gap-4 md:gap-8 overflow-x-auto">
            {car.features?.map((feature) => (
              <div
                key={feature.feature_id}
                className="flex flex-col items-center justify-center w-32 h-20 bg-gray-200 rounded-xl shadow-sm"
              >
                <p className="text-gray-700 font-medium text-sm">
                  {feature.feature_name}
                </p>
                <span className="font-semibold text-base pt-1.5">
                  {feature.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Reviews</h2>
            <button className="text-red-600 text-sm font-semibold">
              View All
            </button>
          </div>

          {/* Show Reviews if Exist */}
          {car.reviews && car.reviews.length > 0 ? (
            <div className="space-y-3">
              {car.reviews.map((review, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-50 rounded-xl flex items-start gap-3"
                >
                  <img
                    src="/images/user.png"
                    alt={review.user?.name || "User"}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">
                      {review.user?.name || "Anonymous"}
                    </p>
                    <div className="flex items-center text-yellow-500 text-sm">
                      {Array.from({ length: review.rating }, (_, index) => (
                        <FaStar key={index} />
                      ))}
                      <span className="ml-1">{review.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-gray-600 text-sm mt-1">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // No Reviews
            <div className="text-center py-6 text-gray-900 font-bold text-xl">
              No reviews yet
            </div>
          )}
        </div>

        {/* السعر */}
        <div className="flex justify-between items-center mt-8 pt-4">
          <p className="text-xl font-bold">
            ${car.rental_price}
            <span className="text-gray-600 text-sm">/Day</span>
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700">
            Rent Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsPage;
