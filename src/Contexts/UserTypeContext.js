"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const UserTypeContext = createContext();

export const useUserType = () => useContext(UserTypeContext);

export const UserTypeProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);

  // لما المكون يتحمّل، نقرا الاختيار من localStorage
  useEffect(() => {
    const storedType = localStorage.getItem("role");
    if (storedType) setUserType(storedType);
  }, []);

  // كل مرة userType يتغير، نخزن في localStorage
  useEffect(() => {
    if (userType) localStorage.setItem("role", userType);
  }, [userType]);

  return (
    <UserTypeContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserTypeContext.Provider>
  );
};
