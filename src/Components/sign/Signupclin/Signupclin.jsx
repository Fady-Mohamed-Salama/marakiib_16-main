"use client";

import React from "react";

import { useUserType } from "@/Contexts/UserTypeContext";
import SignupUser from "../signupUser/SignupUser";
import SignupVendor from "../signupVendor/SignupVendor";


const Signupclin = () => {
  const { userType } = useUserType();

  if (!userType) {
    return (
      <p className="text-center mt-10 text-red-600">
        Please select your account type from the Sign In page first.
      </p>
    );
  }

  return (
    <>
      {userType === "user" && <SignupUser />}
      {userType === "vendor" && <SignupVendor />}
    </>
  );
};

export default Signupclin;