
// "use client";
// import React, { createContext, useContext, useState, useEffect } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [role, setRole] = useState(null);
//   const [email, setEmail] = useState(null);
//   const [otp_code, setotp_code] = useState(null);
//   const [access_token, setAccessToken] = useState(null);

//   // 🟢 تسجيل الدخول
//   const login = (userData, roleData, accessToken) => {
//     setUser(userData);
//     setRole(roleData);
//     setAccessToken(accessToken);

//     localStorage.setItem("user", JSON.stringify(userData));
//     localStorage.setItem("role", roleData);
//     localStorage.setItem("access_token", accessToken);
//   };
//   const saveEmail = (newEmail) => {
//     setEmail(newEmail);
//     localStorage.setItem("email", newEmail);
//   };

//   // 🟢 تسجيل الخروج
//   const logout = () => {
//     setUser(null);
//     setRole(null);
//     setEmail(null);
//     setotp_code(null);
//     setAccessToken(null);

//     localStorage.clear();
//   };

//   // 🟢 تحميل البيانات من الـ localStorage عند فتح الصفحة
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedRole = localStorage.getItem("role");
//     const storedEmail = localStorage.getItem("email");
//     const storedOtp = localStorage.getItem("otp_code");
//     const storedToken = localStorage.getItem("access_token");

//     if (storedUser) setUser(JSON.parse(storedUser));
//     if (storedRole) setRole(storedRole);
//     if (storedEmail) setEmail(storedEmail);
//     if (storedOtp) setotp_code(storedOtp);
//     if (storedToken) setAccessToken(storedToken);
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         role,
//         email,
//         otp_code,
//         access_token,
//         login,
//         logout,
//         setEmail,
//         setotp_code,
//         saveEmail,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [email, setEmail] = useState(null);
  const [otp_code, setotp_code] = useState(null);
  const [access_token, setAccessToken] = useState(null);
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);

  // ✅ تسجيل الدخول
  const login = (userData, roleData, accessToken) => {
    setUser(userData);
    setRole(roleData);
    setAccessToken(accessToken);

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("role", roleData);
    localStorage.setItem("access_token", accessToken);
  };

  // ✅ حفظ الإيميل
  const saveEmail = (newEmail) => {
    setEmail(newEmail);
    localStorage.setItem("email", newEmail);
  };

  // ✅ تسجيل الخروج
  const logout = () => {
    setUser(null);
    setRole(null);
    setEmail(null);
    setotp_code(null);
    setAccessToken(null);
    setLocation(null);

    localStorage.clear();
  };

  // ✅ تحميل البيانات من localStorage عند فتح الصفحة
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedRole = localStorage.getItem("role");
    const storedEmail = localStorage.getItem("email");
    const storedOtp = localStorage.getItem("otp_code");
    const storedToken = localStorage.getItem("access_token");
    const storedLocation = localStorage.getItem("userLocation");

    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedRole) setRole(storedRole);
    if (storedEmail) setEmail(storedEmail);
    if (storedOtp) setotp_code(storedOtp);
    if (storedToken) setAccessToken(storedToken);
    if (storedLocation) setLocation(JSON.parse(storedLocation));
  }, []);

  // ✅ جلب موقع المستخدم وتخزينه
  // useEffect(() => {
  //   if (!location && navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (pos) => {
  //         const coords = {
  //           latitude: pos.coords.latitude,
  //           longitude: pos.coords.longitude,
  //         };
  //         setLocation(coords);
  //         localStorage.setItem("userLocation", JSON.stringify(coords));
  //       },
  //       (err) => {
  //         console.error("Error getting location:", err);
  //         setLocationError(err.message);
  //       }
  //     );
  //   }
  // }, [location]);
  useEffect(() => {
  if ("geolocation" in navigator) {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setLocationError(null);
      },
      (err) => {
        console.error("Error getting location:", err.code, err.message);
        if (err.code === 1) {
          alert("⚠️ من فضلك فعّل الموقع علشان نقدر نعرض مكانك الحالي على الخريطة");
        } else if (err.code === 2) {
          alert("📡 الموقع غير متاح حاليًا. حاول تاني.");
        } else if (err.code === 3) {
          alert("⏳ الطلب استغرق وقت طويل جدًا. أعد المحاولة.");
        }
        setLocationError(err.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );

    // 🧹 مهم جدًا: نوقف التتبع عند مغادرة الصفحة
    return () => navigator.geolocation.clearWatch(watchId);
  } else {
    alert("🚫 المتصفح لا يدعم تحديد الموقع الجغرافي.");
    setLocationError("Geolocation not supported by this browser.");
  }
}, []);


  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        email,
        otp_code,
        access_token,
        location,
        locationError,
        login,
        logout,
        setEmail,
        setotp_code,
        saveEmail,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
