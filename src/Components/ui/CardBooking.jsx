// "use client";
// import Image from "next/image";
// import React from "react";

// const CardBooking = ({ car, onCancel }) => {
//   return (
//     <div className="border rounded-lg shadow-md p-4 flex gap-4 items-center bg-white">
//       {/* صورة العربية */}
//       <div className="w-28 h-20 flex-shrink-0 relative">
//         <Image
//           src={car.car?.image || "/images/car.png"}
//           alt={car.car?.name || "Car Image"}
//           fill
//           className="object-cover rounded-md"
//         />
//       </div>

//       {/* بيانات الحجز */}
//       <div className="flex-1">
//         <h2 className="font-bold text-lg">{car.car?.name}</h2>
//         <p className="text-sm text-gray-600">
//           From: {new Date(car.start_date).toLocaleDateString()}
//         </p>
//         <p className="text-sm text-gray-600">
//           To: {new Date(car.end_date).toLocaleDateString()}
//         </p>
//         <p className="text-sm font-semibold mt-1">
//           Total:$ {car.total}
//         </p>
//         <p
//           className={`text-sm mt-1 font-bold ${
//             car.status === "cancelled"
//               ? "text-red-600"
//               : car.status === "confirmed"
//               ? "text-green-600"
//               : "text-orange-500"
//           }`}
//         >
//           Status: {car.status}
//         </p>
//       </div>

//       {/* زرار Cancel */}
//       {car.status !== "cancelled" && (
//         <button
//           onClick={() => onCancel(car.id)}
//           className="px-3 py-1 bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
//         >
//           Cancel
//         </button>
//       )}
//     </div>
//   );
// };

// export default CardBooking;

// <div className="flex items-center gap-1 mt-1 font-semibold text-amber-500 text-xs sm:text-sm lg:text-base">
//   <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-500"></span>
//   {car.status}
// </div>

"use client";
import Image from "next/image";
import React from "react";

const CardBooking = ({ car, onCancel }) => {
  // نحدد اللون حسب الحالة
  const getStatusColor = (status) => {
    switch (status) {
      case "cancelled":
        return "bg-orange-500 text-amber-500";
      case "confirmed":
        return "bg-green-600 text-green-600";
      default:
        return "bg-orange-500 text-orange-500";
    }
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white">
      <div className="flex flex-col gap-4">
        {/* الجزء العلوي: الصورة على اليسار والبيانات على اليمين */}
        <div className="flex gap-4 items-start">
          {/* صورة العربية */}
          <div className="w-44 h-24 md:w-56 md:h-32 flex-shrink-0 relative">
            <Image
              src={car.car?.image || "/images/car.png"}
              alt={car.car?.name || "Car Image"}
              fill
              className="object-cover rounded-md"
            />
          </div>

          {/* بيانات الحجز */}
          <div className="flex-1 p-1">
            <h2 className="font-bold text-lg">{car.car?.name}</h2>
            <p className="text-sm text-gray-600">
              From: {new Date(car.start_date).toLocaleDateString()}
            </p>
            <p className="text-sm text-gray-600">
              To: {new Date(car.end_date).toLocaleDateString()}
            </p>
            <p className="text-sm font-semibold mt-1">Total: ${car.total}</p>

            {/* الحالة */}
            <div
              className={`flex items-center gap-1 mt-1 font-semibold text-sm sm:text-sm lg:text-base ${
                getStatusColor(car.status).split(" ")[1]
              }`}
            >
              <span
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  getStatusColor(car.status).split(" ")[0]
                }`}
              ></span>
              {car.status}
            </div>
          </div>
        </div>

        {/* زرار Cancel تحت الجزء العلوي */}
        <div className="flex items-center justify-center">
          {car.status !== "cancelled" && (
            <button
              onClick={() => onCancel(car.id)}
              className="px-3 py-2 font-medium bg-red-600 text-white text-sm rounded-md hover:bg-red-700"
            >
              Cancel Booking
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardBooking;