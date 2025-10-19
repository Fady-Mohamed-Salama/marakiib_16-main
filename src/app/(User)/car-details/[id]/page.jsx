"use client"

import CarDetailsGuest from "@/Components/pages/User/CarDetailsGuest ";
import CarDetailsPage from "@/Components/pages/User/CarDetailsPage";
import CarDetailsVendor from "@/Components/pages/User/CarDetailsVendor";
import { useAuth } from "@/Contexts/AuthContext";

const CarDetails = () => {
    const { role } = useAuth();
  return (
    <div>

      {role === "user" &&  <CarDetailsGuest />}
      {role === "customer" && <CarDetailsPage />}
      {role === "private_renter" && <CarDetailsVendor />}
      {role === "rental_office" && <CarDetailsVendor />}

    </div>
  );
};

export default CarDetails;
