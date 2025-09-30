"use client";
import { useAuth } from "@/Contexts/AuthContext";
import React from "react";
import Profilecustomer from "./Profilecustomer";
import ProfilePrivateRenter from "./ProfilePrivateRenter";

const ProfilePage = () => {
  const { role } = useAuth();
  return (
    <div>
      <main>
        {role === "customer" && <Profilecustomer />}
        {role === "private_renter" && <ProfilePrivateRenter />}
        {role === "rental_office" && <ProfilePrivateRenter />}

        {/* fallback لو الرول مش معروف */}
        {!role && <p className="text-center mt-10">Please sign in first.</p>}
      </main>
    </div>
  );
};

export default ProfilePage;