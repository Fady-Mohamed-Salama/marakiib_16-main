"use client"
import UploadCarButton from "@/Components/ui/UploadCarButton";
import React from "react";
import GitUploadCars from "./GitUploadCars";


const HomeVendor = () => {
  return (
    <main className="md:max-w-7xl mx-auto pt-4 px-4">
      <UploadCarButton/>
      <GitUploadCars/>
    </main>
  );
};

export default HomeVendor;
