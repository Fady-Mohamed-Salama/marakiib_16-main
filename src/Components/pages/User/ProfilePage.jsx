"use client";
import { useAuth } from "@/Contexts/AuthContext";
import Profilecustomer from "./Profilecustomer";
import ProfilePrivateRenter from "./ProfilePrivateRenter";
import RequireAuth from "@/Components/RequireAuth/RequireAuth";

const ProfilePage = () => {
  const { role } = useAuth();

  return (
    <RequireAuth allowedRoles={["customer", "private_renter", "rental_office"]}>
      <main>
        {role === "customer" && <Profilecustomer />}
        {(role === "private_renter" || role === "rental_office") && (
          <ProfilePrivateRenter />
        )}
      </main>
    </RequireAuth>
  );
};

export default ProfilePage;

