// app/providers.jsx
"use client";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { useEffect } from "react";
import { setUser } from "@/Redux/userSlice";

export default function Providers({ children }) {
  // لو عايز تخلي الجلسة تبقى محفوظة بعد ري-لود:
  useEffect(() => {
    const raw = localStorage.getItem("auth");
    if (raw) {
      try {
        const data = JSON.parse(raw);
        if (data?.role) {
          // نعيد تحميل الحالة على الـ store
          store.dispatch(setUser(data));
        }
      } catch (e) {}
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
