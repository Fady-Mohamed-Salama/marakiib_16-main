

"use client";
import Link from "next/link";
import { FaGasPump, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const GetCardsVendor = ({ car }) => {


  return (
    <Link href={`/car-details/${car.id}`} className="block">
      <div
        className="
          bg-white rounded-2xl p-3 sm:p-4 flex flex-col shadow-md
          border border-gray-200 hover:shadow-lg transition-all duration-300
          hover:-translate-y-1 w-full
        "
      >
        {/* Title */}
        <div className="mb-2">
          <h2 className="text-sm sm:text-base font-semibold text-gray-900 truncate">
            {car.name}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm">
            {car.categories?.[0]?.slug || "Car"}
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center mb-4">
          <img
            src={car.main_image}
            alt={car.name}
            className="
              w-full 
              h-24 sm:h-28 md:h-32 lg:h-36 
              object-cover rounded-lg
            "
          />
        </div>

        {/* Info */}
        <div
          className="
            flex justify-between text-gray-500 text-[10px] sm:text-xs md:text-sm mb-4
          "
        >
          <span className="flex items-center gap-1">
            <FaGasPump className="text-gray-400 text-[12px] sm:text-sm" />
            {car.features?.find((f) => f.feature_name === "Fuel")?.value || "N/A"}
          </span>

          <span className="flex items-center gap-1">
            <FaGear className="text-gray-400 text-[12px] sm:text-sm" />
            {car.features?.find((f) => f.feature_name === "Transmission")?.value || "N/A"}
          </span>

          <span className="flex items-center gap-1">
            <FaUser className="text-gray-400 text-[12px] sm:text-sm" />
            {car.features?.find((f) => f.feature_name === "Seats")?.value || "N/A"} Seats
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-100">
          <p className="text-xs sm:text-sm md:text-base font-bold text-gray-900">
            ${parseFloat(car.rental_price).toFixed(2)}
            <span className="text-gray-400 text-[10px] sm:text-xs"> /Day</span>
          </p>

    
        </div>
      </div>
    </Link>
  );
};

export default GetCardsVendor;
