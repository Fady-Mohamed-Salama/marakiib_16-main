"use client"; 

import CarsAvailable from "@/Components/Home/HomeUser/CarsAvailable/CarsAvailable";
import PopularCar from "@/Components/Home/HomeUser/PopularCar/PopularCar";
import RecommendationCars from "@/Components/Home/HomeUser/RecommendationCars/RecommendationCars";
import FilterModal from "@/Components/Modals/FilterModal";
// import LocationSelector from "@/Components/Home/LocationSelector";
import FilterButton from "@/Components/ui/FilterButton";
import PromoCard from "@/Components/ui/PromoCard";
import SearchBar from "@/Components/ui/SearchBar";
import React, { useState } from "react";
const HomeCustomer = () => {
  const [location, setLocation] = useState("");
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const handleFilter = () => {
    setIsFilterModalOpen(true);
  };

  const closeFilterModal = () => {
    setIsFilterModalOpen(false);
  };
  return (
    <div className="md:max-w-7xl mx-auto pt-2 pb-10 px-4">
      {/* Location Selector */}
      {/* <div>
          <LocationSelector />
        </div> */}

      {/* Search Bar + Filter Button */}
      <div className="flex items-center gap-4 mt-2 w-full">
        {/* Search bar takes remaining width */}
        <SearchBar
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Search something here"
        />

        {/* Filter button fixed size */}
        <FilterButton onClick={handleFilter} />
      </div>

      {/* Filter Modal Component */}
      <FilterModal isOpen={isFilterModalOpen} onClose={closeFilterModal} />

      {/* Other content can go here */}
      <PromoCard />

      {/* Popular car */}
      <PopularCar />

      {/* Recommendation cars */}
      <RecommendationCars />

      {/* Cars Available */}
      <CarsAvailable />
    </div>
  );
}

export default HomeCustomer