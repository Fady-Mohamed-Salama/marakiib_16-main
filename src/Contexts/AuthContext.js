
"use client";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // 🟢 حالة لتخزين بيانات المستخدم
  const [role, setRole] = useState(null); // 🟢 حالة لتخزين الدور
  const [email, setEmail] = useState(null); // 🟢 حالة لتخزين الإيميل
  const [otp_code, setotp_code] = useState(null); // 🟢 حالة لتخزين otp_code

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedRole = sessionStorage.getItem("role");
    const storedEmail = sessionStorage.getItem("email");
    const storedotp_code = sessionStorage.getItem("otp_code");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedRole) setRole(storedRole);
    if (storedEmail) setEmail(storedEmail);
    if (storedotp_code) setotp_code(storedotp_code);
  }, []);

  const login = (userData, roleData) => {
    setUser(userData);
    setRole(roleData);
    sessionStorage.setItem("user", JSON.stringify(userData));
    sessionStorage.setItem("role", roleData);
  };

  const saveEmail = (userEmail) => {
    setEmail(userEmail);
    sessionStorage.setItem("email", userEmail);
  };

  const saveotp_code = (otp_codeCode) => {
    setotp_code(otp_codeCode);
    sessionStorage.setItem("otp_code", otp_codeCode);
  };

  const logout = () => {
    setUser(null);
    setRole(null);
    setEmail(null);
    setotp_code(null);
    sessionStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, role, email, otp_code, login, logout, saveEmail, saveotp_code }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
