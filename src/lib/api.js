// const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://marakiib.com/api";

// export default API_URL;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://marakiib.com/api",
//   withCredentials: true, // 🟢 مهم جداً عشان الكوكيز تتبعت
// });

// export default api;

// src/lib/api.js
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://marakiib.com/api",
//   headers: { Accept: "application/json" },
// });

// // 🟢 ضيف التوكن تلقائيًا
// api.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token"); // أو localStorage
//   if (token) {
//     config.headers.Authorization = token;
//   }
//   return config;
// });

// export default api;
// ================
// import axios from "axios";

// const api = axios.create({
//   baseURL: "https://marakiib.com/api",
//   headers: { Accept: "application/json" },
// });

// api.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");
//   if (token) config.headers.Authorization = token; // تأكّد إن token فيه "Bearer ..." لو السيرفر يحتاج
//   return config;
// });

// api.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     if (err.response?.status === 401) {
//       // التوكن انتهى أو غير صالح -> امسح الجلسة ووجّه المستخدم
//       sessionStorage.clear();
//       localStorage.removeItem("role");
//       window.location.href = "/signin";
//     }
//     return Promise.reject(err);
//   }
// );

// export default api;

// ==============================================
import axios from "axios";

const api = axios.create({
  baseURL: "https://marakiib.com/api",
  withCredentials: true,
  headers: { Accept: "application/json" },
});

// // 🟢 ضيف التوكن أوتوماتيك
// api.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     const token = sessionStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = token;
//     }
//   }
//   return config;
// });

export default api;
