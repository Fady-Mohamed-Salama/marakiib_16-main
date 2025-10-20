"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
import { useAuth } from "@/Contexts/AuthContext";
import api from "@/lib/api";
// import { useAuth } from "@/Context/AuthContext";

const ForgetPasswordpage = () => {
  const [email, setEmail] = useState("");
  const router = useRouter();
  const { saveEmail } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(
        "/forgot-password", // ✅ صح
        { email },
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        console.log("✅ Email sent successfully. Check your inbox.");
        saveEmail(email);
        router.push("/signin/forgetpassword/Set-New-Password");
      }
    } catch (error) {
      console.error("❌ Error:", error);
    }
  };

  return (
    <div className="pt-10 flex items-center justify-center px-2 mb-80">
      <div className="w-full bg-white">
        <BackArrow />
        <h2 className="text-2xl font-bold text-center text-red-600">
          Forget Password
        </h2>
        <p className="text-gray-400 text-center mt-2">
          Please enter your email to reset the password.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 w-full max-w-3xl mx-auto px-4"
        >
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              required
              className="w-full px-4 py-3 mt-2 rounded-lg bg-gray-50  focus:outline-none focus:ring-2 focus:ring-red-600"
            />
          </div>

          <Button text="Reset Password" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ForgetPasswordpage;
