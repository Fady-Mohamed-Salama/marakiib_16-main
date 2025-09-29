"use client";

import { useAuth } from "@/Contexts/AuthContext";
import HomeCustomer from "@/Components/Home/HomeUser/HomeCustomer";
import HomeVendor from "@/Components/Home/HomeVendor/HomeVendor";

const Home = () => {
  const { role } = useAuth();

  return (
    <main>
      {role === "customer" && <HomeCustomer />}
      {role === "private_renter" && <HomeVendor />}
      {role === "rental_office" && <HomeVendor />}

      {/* fallback لو الرول مش معروف */}
      {!role && <p className="text-center mt-10">Please sign in first.</p>}
    </main>
  );

};

export default Home;
