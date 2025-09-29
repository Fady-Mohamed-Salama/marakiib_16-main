"use client";
import { useAuth } from "@/Contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RequireAuth = ({ children, allowedRoles }) => {
  const { role, token, refreshUser, loading } = useAuth();
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const check = async () => {
      if (loading) return;

      if (!token) {
        router.push("/"); // 🟢 مش مسجل → رجع للهوم
        return;
      }

      try {
        const fresh = await refreshUser();
        const currentRole = fresh?.role || role;

        if (allowedRoles && !allowedRoles.includes(currentRole)) {
          router.push("/"); // 🟡 عنده حساب بس رول غلط → رجع للهوم
          return;
        }

        setChecking(false);
      } catch {
        router.push("/"); // توكن بايظ → رجع للهوم
      }
    };

    check();
  }, [token, loading]);

  if (checking || loading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return children;
};

export default RequireAuth;
