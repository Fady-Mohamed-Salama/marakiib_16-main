"use client"

import CarDetailsGuest from "@/Components/pages/User/CarDetailsGuest";
import CarDetailscustomer from "@/Components/pages/User/CarDetailscustomer";
import CarDetailsVendor from "@/Components/pages/User/CarDetailsVendor";
import { useAuth } from "@/Contexts/AuthContext";

const CarDetailsPage = () => {
    const { role } = useAuth();
  return (
    <div>
{/* 
      {role === "user" &&  <CarDetailsGuest />} */}
      {role === "customer" && <CarDetailscustomer />}
      {role === "private_renter" && <CarDetailsVendor />}
      {role === "rental_office" && <CarDetailsVendor />}

          {!["customer", "private_renter", "rental_office"].includes(role) && (
        <CarDetailsGuest />
      )}
    
    </div>
  );
};

export default CarDetailsPage;