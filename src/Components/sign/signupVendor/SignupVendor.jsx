"use client";

import React, { useState } from "react";
import BackArrow from "@/Components/BackArrow/BackArrow";
import Link from "next/link";
import PrivateRenter from "./PrivateRenter";
import RentalOffice from "./RentalOffice";

const SignupVendor = () => {
  const [activeTab, setActiveTab] = useState("renter");

  return (
    <div className="pt-5 pb-10 flex items-center justify-center px-2">
      <div className="w-full bg-white">
        {/* Back Arrow */}
        <BackArrow />

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-red-600">
          Create Account
        </h2>
        <p className="text-gray-400 text-base md:text-lg text-center mt-2 w-full mx-auto">
          Sign up now and enjoy rental ease like never before.
        </p>

        {/* Tabs */}
        <div className="flex justify-center mt-6">
          <div className="flex w-full md:w-96 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("renter")}
              className={`flex-1 py-2 rounded-md font-semibold transition ${
                activeTab === "renter"
                  ? "bg-red-600 text-white shadow"
                  : "bg-transparent text-black"
              }`}
            >
              Private Renter
            </button>
            <button
              onClick={() => setActiveTab("owner")}
              className={`flex-1 py-2 rounded-md font-semibold transition ${
                activeTab === "owner"
                  ? "bg-red-600 text-white shadow"
                  : "bg-transparent text-black"
              }`}
            >
              Rental Office
            </button>
          </div>
        </div>

        {/* Form */}

        <div className="mt-6">
          {activeTab === "renter" && <PrivateRenter />}
          {activeTab === "owner" && <RentalOffice />}
        </div>

        {/* Or Divider */}
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

        {/* Sign Up Link */}
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

export default SignupVendor;

// <form
//   onSubmit={handleSubmit}
//   className="mt-6 w-full max-w-3xl mx-auto px-4 md:px-0"
// >
//   {/* <input type="text" name="role" value="customer" className="hidden" disabled /> */}
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//     {/* Name */}
//     <InputField
//       icon={FaUser}
//       type="text"
//       placeholder="Name"
//       value={state.name}
//       onChange={(e) => handleFieldChange("name", e.target.value)}
//       error={errors.name}
//     />

//     {/* Email */}
//     <InputField
//       icon={MdEmail}
//       type="email"
//       placeholder="Email"
//       value={state.email}
//       onChange={(e) => handleFieldChange("email", e.target.value)}
//       error={errors.email}
//     />

//     {/* Phone */}
//     <PhoneField
//       value={state.phone}
//       onChange={(value) => handleFieldChange("phone", value)}
//       error={errors.phone}
//     />

//     {/* License Upload */}
//     <div className="md:col-span-2">
//       <label className="block text-sm font-semibold text-gray-900">
//         {activeTab === "renter" ? "National ID" : "Office License"}
//       </label>
//       <div className="flex gap-3">
//         <div className="flex items-center justify-between w-full h-12 px-4 bg-gray-50 text-gray-500 text-sm rounded-lg">
//           {fileSelected ? (
//             <span className="text-green-600 font-semibold">
//               Image Selected ✅
//             </span>
//           ) : activeTab === "renter" ? (
//             "Upload National ID"
//           ) : (
//             "Upload Office License"
//           )}
//         </div>

//         <button
//           type="button"
//           onClick={openFilePicker}
//           className="bg-red-600 text-white h-12 w-[200px] rounded-lg hover:bg-red-700 flex items-center justify-center"
//         >
//           Upload Now
//         </button>

//         <input
//           ref={fileInputRef}
//           type="file"
//           className="hidden"
//           onChange={handleFileChange}
//         />
//       </div>
//       {errors.license && (
//         <p className="text-red-500 text-xs mt-1">{errors.license}</p>
//       )}
//     </div>

//     {/* Car License Expiry Date */}
//     <div className="md:flex-1">
//       <label className="block text-sm font-medium text-gray-900">
//         Car License Expiry Date
//       </label>
//       <div className="relative flex items-center">
//         <FaRegCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//         <input
//           type="date"
//           placeholder="Date"
//           value={state.expiryDate}
//           onChange={(e) =>
//             handleFieldChange("expiryDate", e.target.value)
//           }
//           className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600 text-sm text-gray-600 font-medium"
//         />
//       </div>
//       {errors.expiryDate && (
//         <p className="text-red-500 text-xs mt-1">{errors.expiryDate}</p>
//       )}
//     </div>

//     {/* Commercial Registration (only for owners) */}
//     {activeTab === "owner" && (
//       <div className="md:flex-1">
//         <label className="block text-sm font-medium text-gray-900">
//           Commercial Registration Number
//         </label>
//         <div className="relative flex items-center">
//           <MdFileCopy className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
//           <input
//             type="text"
//             placeholder="Commercial Registration Number"
//             value={state.commercialReg}
//             onChange={(e) =>
//               handleFieldChange("commercialReg", e.target.value)
//             }
//             className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600 text-base font-medium"
//           />
//         </div>
//         {errors.commercialReg && (
//           <p className="text-red-500 text-xs mt-1">
//             {errors.commercialReg}
//           </p>
//         )}
//       </div>
//     )}

//     {/* Password */}
//     <PasswordField
//       label="Password"
//       value={state.password}
//       onChange={(e) => handleFieldChange("password", e.target.value)}
//       showPassword={showPassword}
//       togglePassword={() => setShowPassword(!showPassword)}
//       error={errors.password}
//     />

//     {/* Confirm Password */}
//     <PasswordField
//       label="Confirm Password"
//       value={state.confirmPassword}
//       onChange={(e) =>
//         handleFieldChange("confirmPassword", e.target.value)
//       }
//       showPassword={showConfirmPassword}
//       togglePassword={() =>
//         setShowConfirmPassword(!showConfirmPassword)
//       }
//       error={errors.confirmPassword}
//     />
//   </div>

//   {/* Submit */}
//   <Button text="Sign Up" type="submit" className="font-medium" />
// </form>
