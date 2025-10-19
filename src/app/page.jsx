"use client";

import HomeGuast from "@/Components/Home/HomeGuast/HomeGuast";
import { useAuth } from "@/Contexts/AuthContext";
import HomeCustomer from "@/Components/Home/HomeUser/HomeCustomer";
import HomeVendor from "@/Components/Home/HomeVendor/HomeVendor";

const Home = () => {
  const { role } = useAuth();

  return (
    <main>
      {/* {console.log("🚀 User role:", role)} */}
      {role === "customer" && <HomeCustomer />}
      {role === "private_renter" && <HomeVendor />}
      {role === "rental_office" && <HomeVendor />}

         {/* 🟢 لو مش أي واحدة من دول، يعرض HomeGuast */}
      {!["customer", "private_renter", "rental_office"].includes(role) && (
        <HomeGuast />
      )}
    

      {/* fallback لو الرول مش معروف */}
      {/* {role === "user"  && <HomeGuast />} */}
    </main>
  );

};

export default Home;