
"use client";
import Image from "next/image";
// import { Star } from "lucide-react";

export default function CardBooking({ car }) {
  return (

    <div className="w-full max-w-md mx-auto md:max-w-3xl bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition overflow-hidden">
  <div className="flex items-center gap-4 p-4 sm:p-6 lg:p-8">
    {/* صورة العربية */}
    <div className="relative w-28 h-20 sm:w-36 sm:h-24 lg:w-48 lg:h-32 flex-shrink-0">
      <Image
        src={car.image}
        alt={car.name}
        fill
        className="object-contain"
      />
    </div>
{/*  className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold truncate max-w-[150px]" */}
    {/* تفاصيل العربية */}
    <div className="flex-1">
      <h2 className="font-bold text-base sm:text-lg lg:text-2xl truncate">{car.name}</h2>

      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold">
        From<br /> <span className="font-medium">{car.from}</span>
      </p>
      <p className="text-xs sm:text-sm lg:text-base text-gray-700 font-semibold">
        To :<br /> <span className="font-medium">{car.to}</span>
      </p>

      <p className="mt-1 font-bold text-gray-900 text-sm sm:text-base lg:text-lg">
        Total: ${car.total}
      </p>

      <div className="flex items-center gap-1 mt-1 font-semibold text-amber-500 text-xs sm:text-sm lg:text-base">
        <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500"></span>
        {car.status}
      </div>
    </div>
  </div>
</div>

  );
}


// ===============================

    // <div className="w-full max-w-md mx-auto overflow-hidden bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-lg transition">
    //   <div className="flex items-center justify-between gap-4 p-4">
    //     {/* صورة السيارة */}
    //     <div className="relative w-32 h-20 flex-shrink-0">
    //       <Image
    //         src={car.image}
    //         alt={car.name}
    //         fill
    //         className="object-contain"
    //       />
    //     </div>

    //     {/* تفاصيل السيارة */}
    //     <div className="flex flex-col justify-between truncate">
    //       <h2 className="font-semibold text-lg truncate">{car.name}</h2>

    //       <div className="flex items-center text-sm text-gray-600">
    //         <span className="flex items-center gap-1">
    //           {car.rating}
    //           {/* <Star className="w-4 h-4 text-orange-500 fill-orange-500" /> */}
    //         </span>
    //       </div>

    //       <p className="text-gray-900 font-semibold">{car.price}/Day</p>
    //     </div>
    //   </div>
    // </div>

    // -----------------------

    // <div className="w-full max-w-md mx-auto md:max-w-3xl bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transition overflow-hidden">
    //   <div className="flex items-center gap-4 p-4">
    //     {/* صورة العربية */}
    //     <div className="relative w-32 h-20 flex-shrink-0">
    //       <Image
    //         src={car.image}
    //         alt={car.name}
    //         fill
    //         className="object-contain"
    //       />
    //     </div>

    //     {/* تفاصيل العربية */}
    //     <div className="flex-1">
    //       <h2 className="font-bold text-lg">{car.name}</h2>

    //       <p className="text-sm text-gray-600">
    //         From<br /> <span className="font-medium">{car.from}</span>
    //       </p>
    //       <p className="text-sm text-gray-600">
    //         To: <br /> <span className="font-medium">{car.to}</span>
    //       </p>

    //       <p className="mt-1 font-bold text-gray-900">
    //         Total: ${car.total}
    //       </p>

    //       <div className="flex items-center gap-1 text-sm mt-1 font-semibold text-amber-500">
    //         <span className="w-2 h-2 rounded-full bg-orange-500"></span>
    //         {car.status}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    
    // -------------------------