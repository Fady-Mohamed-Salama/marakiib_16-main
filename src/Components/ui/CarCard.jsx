"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGasPump, FaUser, FaCogs } from "react-icons/fa";

export default function CarCard({ car ,id }) {
    const router = useRouter();
    const handleBooking = (e) => {
    e.preventDefault(); // عشان ما يفتحش لينك الكارد الأساسي
    router.push("/booking-details");
  };
  return (
<Link href={`/car-details/${id}`} className="block">
      <div
        className="bg-white rounded-2xl p-4 flex flex-col shadow-sm
  border border-gray-100 hover:shadow-md transition-all duration-300
  hover:-translate-y-1 w-full"
      >
        {/* Title */}
        <div className="mb-2">
          <h2 className="text-base font-semibold text-gray-900 truncate">
            {car.name}
          </h2>
          <p className="text-gray-400 text-xs">{car.type}</p>
        </div>
  
        {/* Image */}
        <div className="flex justify-center items-center mb-4">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-28  object-cover"
          />
        </div>
  
        {/* Info */}
        <div className="flex justify-between text-gray-500 text-xs sm:text-sm mb-4">
          <span className="flex items-center gap-1">
            <FaGasPump className="text-gray-400" /> {car.fuel}
          </span>
          <span className="flex items-center gap-1">
            <FaCogs className="text-gray-400" /> {car.gear}
          </span>
          <span className="flex items-center gap-1">
            <FaUser className="text-gray-400" /> {car.people}
          </span>
        </div>
  
        {/* Price + Button */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
          <p className="text-sm sm:text-base font-bold text-gray-900">
            ${car.price.toFixed(2)}
            <span className="text-gray-400 text-xs"> /Day</span>
          </p>
        
            <button
            onClick={handleBooking}
              className="bg-red-600 text-white text-xs font-semibold sm:text-sm px-3 py-2
              rounded-lg hover:bg-red-700 transition-colors"
            >
              Rental Now
            </button>
    
        </div>
      </div>
</Link>
  );
}
