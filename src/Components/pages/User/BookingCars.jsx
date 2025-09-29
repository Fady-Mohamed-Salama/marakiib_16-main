import BackArrow from "@/Components/BackArrow/BackArrow";
import CardBooking from "@/Components/ui/CardBooking";
import React from "react";
const cars = [
  {
    name: "marakiib",
    image: "/images/car.png",
    from: "2025-11-23T10:00:00.000Z",
    to: "2025-11-25T10:00:00.000Z",
    total: 2200,
    status: "cancelled",
  },
  {
    name: "fady - Camry 2024",
    image: "/images/car.png",
    from: "2025-11-23T10:00:00.000Z",
    to: "2025-11-25T10:00:00.000Z",
    total: 110,
    status: "cancelled",
  },
  {
    name: "lksdj",
    image: "/images/car.png",
    from: "2025-11-23T10:00:00.000Z",
    to: "2025-11-25T10:00:00.000Z",
    total: 20,
    status: "cancelled",
  },
  {
    name: "sss - Camry 2023",
    image: "/images/car.png",
    from: "2025-11-23T10:00:00.000Z",
    to: "2025-11-25T10:00:00.000Z",
    total: 200,
    status: "cancelled",
  },
  {
    name: "car - Camry 2027",
    image: "/images/car.png",
    from: "2025-11-23T10:00:00.000Z",
    to: "2025-11-25T10:00:00.000Z",
    total: 300,
    status: "cancelled",
  },
];

const BookingCar = () => {
  return (
    <main className="bg-white p-4">
      <BackArrow />
      <h1 className="text-2xl font-bold mb-2 text-center">My Booking</h1>
      <div className=" space-y-4">
        {cars.length > 0 ? (
          cars.map((car, index) => <CardBooking key={index} car={car} />)
        ) : (
          <div className="flex-1 flex flex-col justify-center items-center py-20">
            <h2 className="text-lg font-bold text-gray-700">No Booking</h2>
          </div>
        )}
      </div>
    </main>
  );
};

export default BookingCar;
