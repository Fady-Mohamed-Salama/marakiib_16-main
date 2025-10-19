"use client";

import React from "react";

import { useEffect, useState } from "react";
import Loader from "@/Components/ui/Loader";
import api from "@/lib/api";
import GuastCard from "./GuastCard";

const GuastAvailable = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // جلب البيانات من الـ API
  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true);
      try {
        const response = await api.get("/public/cars/available", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "en",
          },
        });
        const data =
          response?.data?.data || response?.data?.cars || response?.data || [];
        setCars(Array.isArray(data) ? data : []);

        console.log("🚗 Cars available:", data);
      } catch (error) {
        console.error("❌ Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="bg-white py-6">
      <h1 className="text-lg text-black md:text-2xl font-semibold px-4 pb-3">
        Available Cars
      </h1>

      {loading ? (
        <Loader />
      ) : (
        <div
          className="
            grid gap-6
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            px-4 sm:px-8 lg:px-16
          "
        >
          {Array.isArray(cars) &&
            cars.map((car) => (
              <div key={car.id}>
                <GuastCard car={car} />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default GuastAvailable;
