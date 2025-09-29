"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

const LanguagesPage = () => {
  const [selected, setSelected] = useState("en");

  const languages = [
    { code: "ar", name: "العربية", flag: "SA" }, // SA للسعودية
    { code: "en", name: "English", flag: "GB" }, // GB لإنجلترا
  ];

  return (
    <div className="bg-white flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* العنوان */}
        <h1 className="text-center text-xl sm:text-2xl font-bold text-red-600 mb-2">
          Choose the language
        </h1>
        <p className="text-center text-gray-500 mb-8 text-sm sm:text-base">
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </p>

        {/* قائمة اللغات */}
        <div className="space-y-4">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => setSelected(lang.code)}
              className={`flex items-center justify-between px-4 py-4 rounded-xl cursor-pointer border transition
                ${
                  selected === lang.code
                    ? "bg-gray-100 border-gray-300"
                    : "bg-white border-gray-200"
                }
              `}
            >
              {/* العلم + الاسم */}
              <div className="flex items-center gap-3">
                <ReactCountryFlag
                  countryCode={lang.flag}
                  svg
                  style={{ width: "2em", height: "2em" }}
                  title={lang.name}
                />
                <span className="text-lg font-medium text-gray-900">
                  {lang.name}
                </span>
              </div>

              {/* علامة الصح جوه دائرة */}
              {selected === lang.code && (
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-black">
                  <FaCheck className="text-white text-sm" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguagesPage;