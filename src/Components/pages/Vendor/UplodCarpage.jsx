"use client";

import React, { useState, useRef } from "react";
import { FaImages } from "react-icons/fa";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const UploadCarPage = () => {
  const [mainImage, setMainImage] = useState(null);
  const [extraImages, setExtraImages] = useState([]);

  const mainInputRef = useRef(null);
  const extraInputRef = useRef(null);

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [selectedFeatures, setSelectedFeatures] = useState({
    color: "",
    transmission: "",
    fuel: "",
  });

  const colors = ["Black", "White", "Red"];
  const transmissions = ["Automatic", "Manual"];
  const fuels = ["Petrol", "Diesel", "Electric"];

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImage(URL.createObjectURL(file));
    }
  };

  const handleExtraImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const urls = files.map((file) => URL.createObjectURL(file));
      setExtraImages((prev) => [...prev, ...urls]);
    }
  };

  return (
    <div className="px-4 py-6 space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-semibold text-center text-black">
        Upload Car
      </h1>

      {/* Upload Images */}
      <section className="space-y-3">
        <h2 className="font-bold text-red-600">Upload Car Images</h2>

        {/* Main Image */}
        <div className="flex flex-col gap-2 border border-gray-200 rounded-lg py-3 px-2 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Main Image</span>
            <button
              type="button"
              className="bg-red-600 p-2 rounded-lg"
              onClick={() => mainInputRef.current.click()}
            >
              <MdOutlineAddAPhoto className="text-white w-6 h-6" />
            </button>
            <input
              type="file"
              accept="image/*"
              ref={mainInputRef}
              onChange={handleMainImageChange}
              className="hidden"
            />
          </div>
          {mainImage && (
            <img
              src={mainImage}
              alt="Main Car"
              className="w-full h-52 object-cover rounded-md border border-gray-50"
            />
          )}
        </div>

        {/* Extra Images */}
        <div className="flex flex-col gap-2 border border-gray-200 rounded-lg py-3 px-2 bg-white shadow-sm">
          <div className="flex items-center justify-between">
            <span className="font-semibold">Extra Images</span>
            <button
              type="button"
              className="bg-red-600 p-2 rounded-lg"
              onClick={() => extraInputRef.current.click()}
            >
              <FaImages className="text-white w-6 h-6" />
            </button>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={extraInputRef}
              onChange={handleExtraImagesChange}
              className="hidden"
            />
          </div>
          {extraImages.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {extraImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Extra ${idx}`}
                  className="h-24 w-full object-cover rounded-md border border-gray-50"
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Page Content in 2 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Basic Car Information */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Basic Car Information</h2>
            <input
              type="text"
              placeholder="Vehicle type/ class"
              className="w-full border border-gray-600 rounded-lg p-3 font-semibold outline-none placeholder:text-black placeholder:font-semibold"
            />
            <input
              type="text"
              placeholder="Car Model"
              className="w-full border border-gray-600 rounded-lg p-3 font-semibold outline-none placeholder:text-black placeholder:font-semibold"
            />
          </section>

          {/* Car Features */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Car Features</h2>
            <button
              onClick={() => setFeaturesOpen(true)}
              className="w-full border border-gray-300 rounded-lg p-3 text-left"
            >
              Select Car Features
            </button>
            {selectedFeatures.color ||
            selectedFeatures.transmission ||
            selectedFeatures.fuel ? (
              <div className="border border-red-500 bg-red-100 rounded-lg p-3 mt-2">
                <p className="font-semibold text-red-600">Selected Features:</p>
                <ul className="list-disc list-inside text-black">
                  {selectedFeatures.color && <li>{selectedFeatures.color}</li>}
                  {selectedFeatures.transmission && (
                    <li>{selectedFeatures.transmission}</li>
                  )}
                  {selectedFeatures.fuel && <li>{selectedFeatures.fuel}</li>}
                </ul>
              </div>
            ) : (
              <p className="border border-gray-300 rounded-lg p-3 text-gray-500">
                No features selected - Tap to select
              </p>
            )}
          </section>

          {/* Pricing Information */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Pricing Information</h2>
            <input
              type="number"
              placeholder="Enter the price per day"
              className="w-full border border-gray-600 rounded-lg p-3 font-semibold outline-none placeholder:text-black placeholder:font-semibold"
            />
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Status & Options */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Car Status & Options</h2>

            <div>
              <p className="font-semibold mb-2">
                Is the car available for long-term guarantee (Dhamaan)?
              </p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="guarantee"
                    className="accent-red-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="guarantee"
                    className="accent-red-600"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">
                Do you provide pick-up and delivery service?
              </p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pickup"
                    className="accent-red-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pickup"
                    className="accent-red-600"
                  />
                  No
                </label>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-2">Is car available?</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="available"
                    className="accent-red-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="available"
                    className="accent-red-600"
                  />
                  No
                </label>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Additional Information</h2>
            <select
              defaultValue=""
              className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none"
            >
              <option value="" disabled hidden>
                Plate Type
              </option>
              <option value="Private">Private</option>
              <option value="Commercial">Commercial</option>
              <option value="Government">Government</option>
            </select>
            <select className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none">
              <option value="" disabled hidden>
                Insurance Type
              </option>
              <option value="Comprehensive">Comprehensive</option>
              <option value="Third Party">Third Party</option>
              <option value="Full Coverage">Full Coverage</option>
            </select>
            <select className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none">
              <option value="" disabled hidden>
                Nature of use
              </option>
              <option value="Commercial">Commercial</option>
              <option value="Family">Family</option>
              <option value="Business">Business</option>
            </select>
          </section>

          {/* Category Selection */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Category Selection</h2>
            <select className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none">
              <option value="" disabled hidden>
                Select Category
              </option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>
              <option value="Pickup">Pickup</option>
            </select>
          </section>

          {/* Descriptions */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Descriptions</h2>
            <textarea
              placeholder="Description"
              className="w-full border border-gray-400 rounded-lg p-3 font-semibold outline-none placeholder:text-black placeholder:font-semibold"
              rows={3}
            ></textarea>
          </section>
        </div>
      </div>

      {/* Terms & Submit */}
      <section className="space-y-3">
        <h2 className="font-bold text-red-600">Terms & Submit</h2>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="w-4 h-4 accent-red-600" />
          <span>I accept the Terms & Conditions</span>
        </label>
        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold">
          Upload Now
        </button>
      </section>

      {/* Modal Features */}
      {featuresOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-end md:items-center md:justify-center z-50">
          <div className="bg-white w-full md:max-w-lg rounded-t-2xl md:rounded-2xl flex flex-col max-h-[80%]">
            <div className="flex justify-between items-center border-b border-gray-300 py-3 px-4 shrink-0 sticky top-0 bg-white z-10 rounded-t-2xl">
              <h3 className="text-lg font-bold text-red-600">
                Select Features
              </h3>
              <button onClick={() => setFeaturesOpen(false)}>
                <IoClose className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              {/* Color */}
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <p className="font-semibold text-red-600 bg-red-100 w-full p-3 text-lg">
                  Color
                </p>
                <div className="p-3">
                  {colors.map((c) => (
                    <label
                      key={c}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="color"
                        value={c}
                        checked={selectedFeatures.color === c}
                        onChange={() =>
                          setSelectedFeatures((prev) => ({ ...prev, color: c }))
                        }
                        className="w-4 h-4 accent-red-600"
                      />
                      <span className="text-gray-800">{c}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Transmission */}
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <p className="font-semibold text-red-600 bg-red-100 w-full p-3 text-lg">
                  Transmission
                </p>
                <div className="p-3">
                  {transmissions.map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="transmission"
                        checked={selectedFeatures.transmission === t}
                        onChange={() =>
                          setSelectedFeatures((prev) => ({
                            ...prev,
                            transmission: t,
                          }))
                        }
                        className="w-4 h-4 accent-red-600"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>

              {/* Fuel */}
              <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
                <p className="font-semibold text-red-600 bg-red-100 w-full p-3 text-lg">
                  Fuel Type
                </p>
                <div className="p-3">
                  {fuels.map((f) => (
                    <label
                      key={f}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="fuel"
                        checked={selectedFeatures.fuel === f}
                        onChange={() =>
                          setSelectedFeatures((prev) => ({ ...prev, fuel: f }))
                        }
                        className="w-4 h-4 accent-red-600"
                      />
                      {f}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-300 shrink-0 sticky bottom-0 bg-white z-10 rounded-b-2xl">
              <button
                onClick={() => setFeaturesOpen(false)}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
              >
                Confirm Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadCarPage;
