"use client";

import BackArrow from "@/Components/BackArrow/BackArrow";
import CarCard from "@/Components/ui/CarCard";

export default function FavoriteCarspage() {
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
  ];

  return (
    
    <div className="min-h-screen bg-white px-4 py-6">
  <div className="md:max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center relative mb-6">
          <div className="absolute left-0">
            <BackArrow  className="text-2xl"/>
          </div>
          <h1 className="text-lg md:text-2xl font-bold text-center">Favorite</h1>
        </div>
    
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
  </div>
    </div>

  );
}
