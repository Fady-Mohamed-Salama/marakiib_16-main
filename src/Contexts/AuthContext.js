// "use client";
// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(
//     typeof window !== "undefined" ? sessionStorage.getItem("token") : null
//   );

//   const login = (userData, userRole, userToken) => {
//     setUser(userData);
//     setRole(userRole);
//     setToken(userToken);
//     sessionStorage.setItem("token", userToken);
//     sessionStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("role", userRole);
//   };

//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     setToken(null);
//     sessionStorage.clear();
//   };

//   return (
//     <AuthContext.Provider value={{ user, role, token, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// ===========\

"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [token, setToken] = useState(null);

  // 🟢 استرجاع البيانات من التخزين عند أول تحميل
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    const storedRole = localStorage.getItem("role");
    const storedToken = sessionStorage.getItem("token");

    if (storedUser && storedRole && storedToken) {
      setUser(JSON.parse(storedUser));
      setRole(storedRole);
      setToken(storedToken);
    }
  }, []);

  // ✅ تسجيل الدخول
  const login = (userData, userRole, userToken) => {
    setUser(userData);
    setRole(userRole);
    setToken(userToken);

    sessionStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", userRole);
    sessionStorage.setItem("token", userToken);
  };

  // 🚪 تسجيل الخروج
  const logout = () => {
    setUser(null);
    setRole(null);
    setToken(null);
    sessionStorage.clear();
    localStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ user, role, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

// ========================================

// "use client";
// import React, { createContext, useContext, useEffect, useState } from "react";
// import api from "@/lib/api"; // ملف api.js اللي عملناه

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [token, setToken] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // عند أول تحميل: نقرأ من التخزين المحلي
//   useEffect(() => {
//     const storedUser = sessionStorage.getItem("user");
//     const storedToken = sessionStorage.getItem("token");
//     const storedRole = localStorage.getItem("role");

//     if (storedToken) setToken(storedToken);
//     if (storedUser) setUser(JSON.parse(storedUser));
//     if (storedRole) setRole(storedRole);
//     setLoading(false);

//     // مزامنة بين تبويبات المتصفح (لو تغيرنا في تبويب تاني)
//     const onStorage = (e) => {
//       if (e.key === "token" || e.key === "user" || e.key === "role") {
//         // بسيط: نعيد تحميل الصفحة عشان نضمن حالة متسقة
//         // أو تقدر تحدث الstate هنا بدون reload
//         window.location.reload();
//       }
//     };
//     window.addEventListener("storage", onStorage);
//     return () => window.removeEventListener("storage", onStorage);
//   }, []);

//   // تسجيل الدخول
//   const login = (userData, userRole, userToken) => {
//     setUser(userData);
//     setRole(userRole);
//     setToken(userToken);

//     sessionStorage.setItem("user", JSON.stringify(userData));
//     sessionStorage.setItem("token", userToken);
//     localStorage.setItem("role", userRole);
//   };

//   // تسجيل الخروج
//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     setToken(null);
//     sessionStorage.clear();
//     localStorage.removeItem("role");
//     // توجه لصفحة تسجيل الدخول
//     if (typeof window !== "undefined") window.location.href = "/signin";
//   };

//   // تحديث بيانات المستخدم من السيرفر (مهم للتحقق من تغيّر الرول)
//   const refreshUser = async () => {
//     try {
//       const res = await api.get("/me"); // endpoint يجب أن يعيد بيانات المستخدم بما فيها role
//       const userData = res.data;
//       setUser(userData);
//       setRole(userData.role);
//       sessionStorage.setItem("user", JSON.stringify(userData));
//       localStorage.setItem("role", userData.role);
//       return userData;
//     } catch (err) {
//       // لو التوكن انتهى أو مش صالح -> logout
//       logout();
//       throw err;
//     }
//   };

//   return (
//     <AuthContext.Provider value={{ user, role, token, loading, login, logout, refreshUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
