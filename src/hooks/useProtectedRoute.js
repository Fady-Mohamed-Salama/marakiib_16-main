// src/hooks/useProtectedRoute.js
import { useAuth } from "@/Contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const useProtectedRoute = () => {
  const { token } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/signin");
    }
  }, [token, router]);
};

export default useProtectedRoute;
  