

"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [otp_code, setotp_code] = useState(null);
  const [access_token, setAccessToken] = useState(null);

  // 🟢 تسجيل الدخول
  const login = (userData, roleData, accessToken) => {
    setUser(userData);
    setRole(roleData);
    setAccessToken(accessToken);

    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("role", roleData);
    sessionStorage.setItem("access_token", accessToken);
  };

  // 🟢 تسجيل الخروج
  const logout = () => {
    setUser(null);
    setRole(null);
    setEmail(null);
    setotp_code(null);
    setAccessToken(null);

    sessionStorage.clear();
  };

  // 🟢 تحميل البيانات من الـ sessionStorage عند فتح الصفحة
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedRole = sessionStorage.getItem("role");
    const storedEmail = sessionStorage.getItem("email");
    const storedOtp = sessionStorage.getItem("otp_code");
    const storedToken = sessionStorage.getItem("access_token");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedRole) setRole(storedRole);
    if (storedEmail) setEmail(storedEmail);
    if (storedOtp) setotp_code(storedOtp);
    if (storedToken) setAccessToken(storedToken);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        email,
        otp_code,
        access_token,
        login,
        logout,
        setEmail,
        setotp_code,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
