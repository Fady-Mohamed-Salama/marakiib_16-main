"use client"; 
import React from "react";
import PromoCard from "@/Components/ui/PromoCard";
import GuastAvailable from "./guastAvailable";

const HomeGuast = () => {

  return (
    <div className="md:max-w-7xl mx-auto pt-2 pb-10 px-4">
      {/* Other content can go here */}
      <PromoCard />


      {/* Cars Available */}
      <GuastAvailable />
    </div>
  );
}

export default HomeGuast;