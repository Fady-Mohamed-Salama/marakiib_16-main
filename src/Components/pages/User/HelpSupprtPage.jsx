"use client";
import BackArrow from "@/Components/BackArrow/BackArrow";
import React from "react";

const HelpSupportPage = () => {
  return (
    <div className="bg-white px-4 py-4 flex justify-center">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          {/* Back Arrow */}
          <BackArrow className=" flex items-center justify-center text-2xl cursor-pointer" />

          {/* Title */}
          <h1 className="font-semibold text-xl">Help & Support</h1>

          {/* Empty Div */}
          <div className="w-10"></div>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-950 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Please enter your name"
              className="w-full placeholder:font-medium placeholder:text-sm border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-950 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full placeholder:font-medium placeholder:text-sm border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-950 mb-1">
              Write a subject
            </label>
            <input
              type="text"
              placeholder="Write a subject"
              className="w-full placeholder:font-medium placeholder:text-sm border border-gray-300 rounded-xl px-3 py-3 focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-950 mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Type your message here"
              className="w-full placeholder:font-medium placeholder:text-sm border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 resize-none focus:ring-red-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-82 mx-auto bg-red-600 text-white py-3 rounded-xl font-medium hover:bg-red-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HelpSupportPage;
