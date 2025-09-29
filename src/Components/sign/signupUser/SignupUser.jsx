
"use client";
import React, { useReducer, useState } from "react";
import { useRouter } from "next/navigation";
import { initialState, reducer } from "./reducer";
import { validate } from "./validate";
import InputField from "../common/InputField";
import PasswordField from "../common/PasswordField";
import PhoneField from "../common/PhoneField";
import LicenseUpload from "../common/LicenseUpload";
import axios from "axios";
// icons
import { FaUser } from "react-icons/fa6";
import { MdEmail, MdHome } from "react-icons/md";
import Button from "@/Components/ui/Button";
import Link from "next/link";
import BackArrow from "@/Components/BackArrow/BackArrow";
// import { registerUser } from "@/Components/lib/api";

const SignupUser = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ validation
    const validationErrors = validate(state);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      // ✅ prepare formData
      const formData = new FormData();
      for (let key in state) {
        if (state[key] !== null && state[key] !== "") {
          formData.append(key, state[key]);
        }
      }

      // ✅ call API
      // const response = await registerUser(formData);

      const response = await axios.post(
        "https://marakiib.com/api/register",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response?.status === 201 || response?.status === 200) {
        // console.log("✅ Signup successful:", response.data["email"]);
        console.log("✅ Signup successful:", response.data.user.email);

        // reset form
        dispatch({ type: "RESET" });

        // TODO: خزن الـ token لو الباك إند بيرجع Token
        // localStorage.setItem("token", response.data.token);

        // روح لصفحة التفعيل
        // router.push("/signup/verifycode");
        router.push(`/signup/verifycode?email=${response.data.user.email}`);
      } else {
        console.error("❌ Signup failed:", response.data);
      }
    } catch (err) {
      console.error("🔥 Error:", err.response?.data || err.message);
    }
  };

  return (
    <div className="pt-5 pb-10 flex items-center justify-center px-4">
      <div className="w-full bg-white">
        {/* Back Arrow */}
        <BackArrow />
        <h2 className="text-2xl font-bold text-center text-red-600">
          Create Account
        </h2>
        <p className="text-gray-400 text-base md:text-lg text-center mt-2 w-full mx-auto">
          Sign up now and enjoy rental ease like never before.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-6 w-full max-w-md mx-auto space-y-4"
        >
          {/* Name */}
          <InputField
            icon={FaUser}
            type="text"
            placeholder="Name"
            value={state.name}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            error={errors.name}
          />

          {/* Email */}
          <InputField
            icon={MdEmail}
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            error={errors.email}
          />

          {/* Phone */}
          <PhoneField
            value={state.phone_number}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "phone_number", value })
            }
            error={errors.phone_number}
          />

          {/* Address */}
          <InputField
            icon={MdHome}
            type="text"
            placeholder="Address"
            value={state.address}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "address",
                value: e.target.value,
              })
            }
            error={errors.address}
          />

          {/* License Upload */}
          <LicenseUpload
            license={state.driving_license_image}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "driving_license_image",
                value: e.target.files[0],
              })
            }
            onRemove={() =>
              dispatch({
                type: "SET_FIELD",
                field: "driving_license_image",
                value: null,
              })
            }
            error={errors.driving_license_image}
          />

          {/* Password */}
          <PasswordField
            label="Password"
            value={state.password}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "password",
                value: e.target.value,
              })
            }
            showPassword={showPassword}
            togglePassword={() => setShowPassword(!showPassword)}
            error={errors.password}
          />

          {/* Confirm Password */}
          <PasswordField
            label="Confirm Password"
            value={state.password_confirmation}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "password_confirmation",
                value: e.target.value,
              })
            }
            showPassword={showConfirmPassword}
            togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
            error={errors.password_confirmation}
          />

          {/* Submit */}
          <Button text="Sign Up" type="submit" />
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-200" />
          <span className="px-2 text-black font-semibold text-sm">
            Or sign in with
          </span>
          <hr className="flex-1 border-gray-200" />
        </div>

        {/* Social Login */}
        <div className="flex justify-center gap-8">
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100">
            <img
              src="/images/facebook.png"
              alt="Facebook"
              className="w-6 h-6"
            />
          </button>
          <button className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100">
            <img src="/images/google.png" alt="Google" className="w-6 h-6" />
          </button>
        </div>

        {/* Sign In Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Do you have account?{" "}
          <Link href="/signin" className="text-red-600 underline font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupUser;
