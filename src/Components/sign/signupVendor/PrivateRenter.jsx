"use client";

import React, { useReducer, useRef, useState } from "react";
import InputField from "../common/InputField";
import PhoneField from "../common/PhoneField";
import PasswordField from "../common/PasswordField";
import { useRouter } from "next/navigation";
import reducer, { initialStatePrivateRenter } from "./reducer";
import validate from "./validate";
import { FaRegCalendar } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Button from "@/Components/ui/Button";
import { useAuth } from "@/Contexts/AuthContext";
import api from "@/lib/api";
import Loader from "@/Components/ui/Loader";

const PrivateRenter = () => {
  const { saveEmail } = useAuth();
  const [state, dispatch] = useReducer(reducer, initialStatePrivateRenter);
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fileSelected, setFileSelected] = useState(false);
  const fileInputRef = useRef(null);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  // تحديث أي حقل
  const handleFieldChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value });
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  // لما المستخدم يرفع صورة
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileSelected(true);
      handleFieldChange("car_license_image", file); // ✅ نفس المفتاح بتاع initialState
    }
  };

  // فتح file picker
  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  // إرسال الفورم
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // ✅ تحقق من الفالديشن
    const validationErrors = validate(state);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }
    setErrors({});

    console.log("🔹 State Object:", state);

    try {
      const formData = new FormData();

      // مر على كل الفيلدز وحطهم في formData
      for (let key in state) {
        if (state[key] !== null && state[key] !== "") {
          formData.append(key, state[key]);
        }
      }
      const response = await api.post("/register", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response?.status === 201 || response?.status === 200) {
        saveEmail(response.data.user.email);
        console.log("✅ Signup successful:", response.data.user);
        dispatch({ type: "RESET", payload: initialStatePrivateRenter });
        router.push(`/signup/verifycode`);
      } else {
        console.error("❌ Signup failed:", response.data);
        setLoading(false);
      }
    } catch (err) {
      console.error("❌ Error:", err.response?.data || err);
      setLoading(false);
    }
     finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 w-full max-w-3xl mx-auto px-4 md:px-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {/* Name */}
        <InputField
          icon={FaUser}
          type="text"
          placeholder="Name"
          value={state.name}
          onChange={(e) => handleFieldChange("name", e.target.value)}
          error={errors.name}
        />

        {/* Email */}
        <InputField
          icon={MdEmail}
          type="email"
          placeholder="Email"
          value={state.email}
          onChange={(e) => handleFieldChange("email", e.target.value)}
          error={errors.email}
        />

        {/* Phone */}
        <PhoneField
          value={state.phone_number}
          onChange={(value) => handleFieldChange("phone_number", value)}
          error={errors.phone_number}
        />

        {/* Address */}
        <InputField
          type="text"
          placeholder="Address"
          value={state.address}
          onChange={(e) => handleFieldChange("address", e.target.value)}
          error={errors.address}
        />

        {/* License Upload */}
        <div className="md:col-span-2">
          <label className="block text-sm font-semibold text-gray-900">
            Driving License
          </label>
          <div className="flex gap-3">
            <div className="flex items-center justify-between w-full h-12 px-4 bg-gray-50 text-gray-500 text-sm rounded-lg">
              {fileSelected ? (
                <span className="text-green-600 font-semibold">
                  Image Selected ✅
                </span>
              ) : (
                <span>Upload Driving License</span>
              )}
            </div>

            <button
              type="button"
              onClick={openFilePicker}
              className="bg-red-600 text-white h-12 w-[200px] rounded-lg hover:bg-red-700 flex items-center justify-center"
            >
              Upload Now
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
          {errors.car_license_image && (
            <p className="text-red-500 text-xs mt-1">
              {errors.car_license_image}
            </p>
          )}
        </div>

        {/* Expiry Date */}
        <div className="md:flex-1">
          <label className="block text-sm font-medium text-gray-900">
            Car License Expiry Date
          </label>
          <div className="relative flex items-center">
            <FaRegCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <input
              type="date"
              value={state.car_license_expiry_date}
              onChange={(e) =>
                handleFieldChange("car_license_expiry_date", e.target.value)
              }
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600 text-sm text-gray-600 font-medium"
            />
          </div>
          {errors.car_license_expiry_date && (
            <p className="text-red-500 text-xs mt-1">
              {errors.car_license_expiry_date}
            </p>
          )}
        </div>

        {/* Password */}
        <PasswordField
          label="Password"
          value={state.password}
          onChange={(e) => handleFieldChange("password", e.target.value)}
          showPassword={showPassword}
          togglePassword={() => setShowPassword(!showPassword)}
          error={errors.password}
        />

        {/* Confirm Password */}
        <PasswordField
          label="Confirm Password"
          value={state.password_confirmation}
          onChange={(e) =>
            handleFieldChange("password_confirmation", e.target.value)
          }
          showPassword={showConfirmPassword}
          togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          error={errors.password_confirmation}
        />
      </div>

      {/* Submit */}
      <Button text={loading ? <Loader /> : "Sign Up"} type="submit" className="font-medium" />
    </form>
  );
};

export default PrivateRenter;
  