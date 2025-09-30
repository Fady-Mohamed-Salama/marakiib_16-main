// "use client";

// import React, { useState } from "react";
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { IoMdLock } from "react-icons/io";
// import Link from "next/link";
// import BackArrow from "@/Components/BackArrow/BackArrow";
// import Button from "@/Components/ui/Button";
// // import { useUserType } from "@/Contexts/UserTypeContext";
// import ShowModal from "@/Components/Modals/ShowModal";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/Contexts/AuthContext";
// import api from "@/lib/api";
// // import axios from "axios";

// const Signin = () => {
//   // const { userType } = useUserType();
//   const { login } = useAuth();
//   const [showPassword, setShowPassword] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const router = useRouter();

//   // تحديث الحقول
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrorMessage("");
//   };

//   // إرسال الفورم
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrorMessage("");

//     try {
//       // const response = await api.post("/login", { ...formData, userType });

//           const response = await api.post(
//         "/login",
//         formData,
//         // {
//         //   headers: { Accept: "application/json" },
//         // }
//       );

//       if (response.status === 200) {
//         console.log("✅ Login Success:", response.data);

//         // ✅ خزن بيانات اليوزر فقط (الـ token في الكوكيز)
//         login(response.data.user, response.data.user.role);

//         router.push("/");
//       }
//     } catch (error) {
//       console.error("❌ Login Failed:", error);
//       setErrorMessage("Invalid email or password, please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="pt-4 flex items-center justify-center px-4">
//       <div className="w-full bg-white">
//         {/* Back Arrow */}
//         <BackArrow />

//         {/* Title */}
//         <h2 className="text-2xl font-bold text-center text-red-600">Sign In</h2>
//         <p className="text-gray-400 text-base md:text-lg text-center mt-2 mx-auto w-full ">
//           Sign in now and enjoy rental ease like never before.
//         </p>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md mx-auto">
//           <div className="space-y-4">
//             {/* Email */}
//             <div className="md:flex-1">
//               <label className="block text-sm font-medium text-gray-950">
//                 Email
//               </label>
//               <div className="relative flex items-center">
//                 <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 
//                     focus:outline-none focus:ring-2 focus:ring-red-600 
//                     placeholder:text-sm placeholder:text-gray-400 placeholder:font-medium text-base font-medium"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div className="md:flex-1">
//               <label className="block text-sm font-medium text-gray-950">
//                 Password
//               </label>
//               <div className="relative flex items-center">
//                 <IoMdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
//                 <input
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-50 
//                     focus:outline-none focus:ring-2 focus:ring-red-600 
//                     placeholder:text-sm placeholder:text-gray-400 text-base font-medium"
//                   required
//                 />

//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2"
//                 >
//                   {showPassword ? (
//                     <FaRegEyeSlash className="text-gray-500" />
//                   ) : (
//                     <FaRegEye className="text-gray-500" />
//                   )}
//                 </button>
//               </div>

//               {/* Forgot Password Link */}
//               <div className="flex justify-end mt-4">
//                 <Link
//                   href="/signin/forgetpassword"
//                   className="text-sm text-red-600 font-semibold"
//                 >
//                   Forgot Password?
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Error Message */}
//           {errorMessage && (
//             <p className="text-red-600 text-sm mt-3 text-center">
//               {errorMessage}
//             </p>
//           )}

//           {/* Sign in button */}
//           <Button
//             text={loading ? "Signing in..." : "Sign In"}
//             type="submit"
//             disabled={loading}
//             className="font-medium mt-4"
//           />
//         </form>

//         {/* Or Divider */}
//         <div className="flex items-center my-6">
//           <hr className="flex-1 border-gray-200" />
//           <span className="px-2 text-black font-semibold text-sm">
//             Or sign in with
//           </span>
//           <hr className="flex-1 border-gray-200" />
//         </div>

//         {/* Social Login */}
//         <div className="flex justify-center gap-8">
//           <button className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100">
//             <img
//               src="/images/facebook.png"
//               alt="Facebook Logo"
//               className="w-6 h-6"
//             />
//           </button>
//           <button className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100">
//             <img
//               src="/images/google.png"
//               alt="Google Logo"
//               className="w-6 h-6"
//             />
//           </button>
//         </div>

//         {/* Sign Up Link */}
//         <p className="text-center text-sm text-gray-600 mt-6">
//           Do you have account?{" "}
//           <button
//             onClick={() => setIsModalOpen(true)}
//             className="text-red-600 underline font-semibold"
//           >
//             Sign Up
//           </button>
//         </p>

//         {/* show modal */}
//         <ShowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       </div>
//     </div>
//   );
// };

// export default Signin;

"use client";

import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import Link from "next/link";
import BackArrow from "@/Components/BackArrow/BackArrow";
import Button from "@/Components/ui/Button";
// import { useUserType } from "@/Contexts/UserTypeContext";
import ShowModal from "@/Components/Modals/ShowModal";
import { useRouter } from "next/navigation";
import { useAuth } from "@/Contexts/AuthContext";
// import api from "@/Components/lib/api";
import axios from "axios";

const Signin = () => {
  // const { userType } = useUserType();
  const { login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  // تحديث الحقول
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrorMessage("");
  };

  // إرسال الفورم
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // const response = await api.post("/login", { ...formData, userType });

          const response = await axios.post(
        "https://marakiib.com/api/login",
        formData,
        {
          headers: { Accept: "application/json" },
        }
      );

      if (response.status === 200) {
        console.log("✅ Login Success:", response.data);

        // ✅ خزن بيانات اليوزر فقط (الـ token في الكوكيز)
        login(response.data.user, response.data.user.role);

        router.push("/");
      }
    } catch (error) {
      console.error("❌ Login Failed:", error);
      setErrorMessage("Invalid email or password, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-4 flex items-center justify-center px-4">
      <div className="w-full bg-white">
        {/* Back Arrow */}
        <BackArrow />

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-red-600">Sign In</h2>
        <p className="text-gray-400 text-base md:text-lg text-center mt-2 mx-auto w-full ">
          Sign in now and enjoy rental ease like never before.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 w-full max-w-md mx-auto">
          <div className="space-y-4">
            {/* Email */}
            <div className="md:flex-1">
              <label className="block text-sm font-medium text-gray-950">
                Email
              </label>
              <div className="relative flex items-center">
                <MdEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 
                    focus:outline-none focus:ring-2 focus:ring-red-600 
                    placeholder:text-sm placeholder:text-gray-400 placeholder:font-medium text-base font-medium"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="md:flex-1">
              <label className="block text-sm font-medium text-gray-950">
                Password
              </label>
              <div className="relative flex items-center">
                <IoMdLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-gray-50 
                    focus:outline-none focus:ring-2 focus:ring-red-600 
                    placeholder:text-sm placeholder:text-gray-400 text-base font-medium"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? (
                    <FaRegEyeSlash className="text-gray-500" />
                  ) : (
                    <FaRegEye className="text-gray-500" />
                  )}
                </button>
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-end mt-4">
                <Link
                  href="/signin/forgetpassword"
                  className="text-sm text-red-600 font-semibold"
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-sm mt-3 text-center">
              {errorMessage}
            </p>
          )}

          {/* Sign in button */}
          <Button
            text={loading ? "Signing in..." : "Sign In"}
            type="submit"
            disabled={loading}
            className="font-medium mt-4"
          />
        </form>

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
          <button className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100">
            <img
              src="/images/facebook.png"
              alt="Facebook Logo"
              className="w-6 h-6"
            />
          </button>
          <button className="flex items-center justify-center w-10 h-10 cursor-pointer rounded-full border border-gray-300 hover:bg-gray-100">
            <img
              src="/images/google.png"
              alt="Google Logo"
              className="w-6 h-6"
            />
          </button>
        </div>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Do you have account?{" "}
          <button
            onClick={() => setIsModalOpen(true)}
            className="text-red-600 underline font-semibold"
          >
            Sign Up
          </button>
        </p>

        {/* show modal */}
        <ShowModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
};

export default Signin;

