

"use client";

import React, { useState, useRef, useEffect, useReducer } from "react";
import { FaImages } from "react-icons/fa";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import api from "@/lib/api";
import { initialState, reducer } from "./ReducerUplodcar";
import { FaRegCalendar } from "react-icons/fa6";
import { useAuth } from "@/Contexts/AuthContext";
import axios from "axios";

const UploadCarPage = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { access_token } = useAuth();
  // console.log("Access Token:", access_token);
  const [mainImagePreview, setMainImagePreview] = useState(null);
  const [extraImagesPreviews, setExtraImagesPreviews] = useState([]);

  const [categories, setCategories] = useState([]);

  const mainInputRef = useRef(null);
  const extraInputRef = useRef(null);

  const [featuresOpen, setFeaturesOpen] = useState(false);
  // public/features  // Fetch features from API
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const res = await api.get("/public/features");
        dispatch({ type: "SET_FEATURES_DATA", payload: res.data.data });
      } catch (error) {
        console.error("Error fetching features:", error);
      }
    };
    fetchFeatures();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get("/public/categories");
        setCategories(res.data.data);
        dispatch({ type: "SET_CATEGORIES", payload: res.data.data });
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleMainImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMainImagePreview(URL.createObjectURL(file));
      dispatch({ type: "SET_MAIN_IMAGE", payload: file });
    }
  };

  const handleExtraImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setExtraImagesPreviews((prev) => [...prev, ...newPreviews]);
      dispatch({ type: "SET_EXTRA_IMAGES", payload: files });
    }
  };

  const handleFeatureSelect = (slug, value) => {
    dispatch({ type: "SELECT_FEATURE", payload: { key: slug, value } });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!state.termsAccepted) {
      alert("Please accept the terms & conditions");
      return;
    }

    // Collect feature value IDs if needed (assuming backend expects values, adjust if IDs)
    const featuresData = state.featuresData;
    const featureValueIds = Object.entries(state.selectedFeatures).reduce(
      (acc, [slug, value]) => {
        const feature = featuresData.find((f) => f.slug === slug);
        if (feature) {
          const valObj = feature.values.find(
            (v) =>
              v.translations?.find((t) => t.locale === "en")?.value === value
          );
          if (valObj) acc.push(valObj.id);
        }
        return acc;
      },
      []
    );

    const categoryIds = Array.isArray(state.category_ids)
      ? state.category_ids
      : [state.category_ids];

    const formData = new FormData();
    // Append all fields from state
    formData.append("name[en]", state.name);
    formData.append("name[ar]", state.name);
    formData.append("slug", state.name);
    formData.append("color", state.color);
    formData.append("engine_type", state.engine_type);
    formData.append("model", state.model);
    formData.append("rental_price", state.rental_price);
    formData.append(
      "long_term_guarantee",
      state.long_term_guarantee ? "1" : "0"
    );
    formData.append("pickup_delivery", state.pickup_delivery ? "1" : "0");
    formData.append("is_active", state.isActive ? "1" : "0");
    formData.append("latitude", state.latitude);
    formData.append("longitude", state.longitude);
    formData.append("availability_start", state.availability_start);
    formData.append("availability_end", state.availability_end);

    formData.append("image_alt[en]", state.name);
    formData.append("image_alt[ar]", state.name);
    featureValueIds.forEach((id) => formData.append("feature_value_ids[]", id));
    formData.append("meta_description[en]", state.description);
    formData.append("meta_description[ar]", state.description);
    formData.append("car_type_id", state.car_type_id);
    formData.append("plate_type", state.plate_type);

    categoryIds.forEach((id) => formData.append("category_ids[]", id));

    formData.append("meta_title[en]", `Rent ${state.name} ${state.model}`);
    formData.append("meta_title[ar]", `إيجار ${state.name} ${state.model}`);
    formData.append("image_alt[en]", `${state.name} ${state.model}`);
    formData.append("image_alt[ar]", `${state.name} ${state.model}`);
    formData.append("insurance_type[en]", state.insurance_type);
    formData.append("insurance_type[ar]", state.insurance_type);

    formData.append("usage_nature[en]", state.usage_nature);
    formData.append("usage_nature[ar]", state.usage_nature);
    formData.append("description[en]", state.description);
    formData.append("description[ar]", state.description);
    formData.append("terms_accepted", state.termsAccepted ? "1" : "0");

    // Images
    if (state.main_image) {
      formData.append("main_image", state.main_image);
    }
    state.extra_images.forEach((file, index) => {
      formData.append(`extra_images[${index}]`, file);
    });

    for (let [key, value] of formData.entries()) {
      if (value instanceof File) {
        console.log(`${key}: File -> ${value.name}`);
      } else {
        console.log(`${key}:`, value);
      }
    }

    try {
  const response = await axios.post(
    "https://marakiib.com/api/cars",
    formData,
    {
      headers: {
        Accept: "application/json",
        // احذف السطر ده: "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  console.log("Upload successful:", response.data);
} catch (error) {
  console.error("Error uploading car:", error);
  // أضف لوگ إضافي للتشخيص
  if (error.response) {
    console.error("Response error:", error.response.data);
  } else if (error.request) {
    console.error("Request error (CORS/network):", error.request);
  }
}

    // try {
    //   const response = await axios.post(
    //     "https://marakiib.com/api/cars",
    //     formData,
    //     {
    //       headers: {
    //         Accept: "application/json",
    //         Authorization: `Bearer ${access_token}`, // خزن التوكن عندك
    //       },
    //     }
    //   );
    //   console.log("Upload successful:", response.data);

    //   // Reset form if needed
    // } catch (error) {
    //   console.error("Error uploading car:", error);
    // }
  };
  const today = new Date().toISOString().split("T")[0];
  return (
    <form
      className="px-4 py-6 space-y-6 max-w-6xl mx-auto"
      onSubmit={handleSubmit}
    >
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
          {mainImagePreview && (
            <img
              src={mainImagePreview}
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
          {state.extra_images.length > 0 && (
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {extraImagesPreviews.map((img, idx) => (
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
              value={state.name}
              onChange={(e) =>
                dispatch({ type: "SET_NAME", payload: e.target.value })
              }
              className="w-full border border-gray-600 rounded-lg p-3 font-semibold outline-none placeholder:text-black placeholder:font-semibold"
            />
            <input
              type="text"
              value={state.model}
              onChange={(e) =>
                dispatch({ type: "SET_MODEL", payload: e.target.value })
              }
              placeholder="Car Model"
              className="w-full border border-gray-600 rounded-lg p-3 font-semibold outline-none placeholder:text-black placeholder:font-semibold"
            />
          </section>

          {/* Car Features */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Car Features</h2>
            <button
              type="button"
              onClick={() => setFeaturesOpen(true)}
              className="w-full border border-gray-300 rounded-lg p-3 text-left"
            >
              Select Car Features
            </button>

            {Object.keys(state.selectedFeatures).length > 0 ? (
              <div className="border border-red-500 bg-red-100 rounded-lg p-3 mt-2">
                <p className="font-semibold text-red-600 mb-1">
                  Selected Features:
                </p>
                <ul className="list-disc list-inside text-black">
                  {Object.entries(state.selectedFeatures).map(
                    ([key, value]) => (
                      <li key={key}>
                        <span className="capitalize font-semibold">
                          {key}:{" "}
                        </span>
                        {value}
                      </li>
                    )
                  )}
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
              value={state.rental_price}
              onChange={(e) =>
                dispatch({ type: "SET_RENTAL_PRICE", payload: e.target.value })
              }
              placeholder="Enter the price per day"
              className="w-full border border-gray-600 rounded-lg p-3 font-semibold outline-none placeholder:text-black placeholder:font-semibold"
            />
          </section>

          {/* Dates - أصلح onChange وأضفت min */}
          {/* <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-900">
              Start Date
            </label>
            <div className="relative flex items-center">
              <FaRegCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="date"
                value={state.availability_start}
                min={today}
                onChange={(e) =>
                  dispatch({
                    type: "SET_AVAILABILITY_START",
                    payload: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600 text-sm text-gray-600 font-medium"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-900">
              End Date
            </label>
            <div className="relative flex items-center">
              <FaRegCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="date"
                value={state.availability_end}
                min={state.availability_start || today}
                onChange={(e) =>
                  dispatch({
                    type: "SET_AVAILABILITY_END",
                    payload: e.target.value,
                  })
                }
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-50 focus:outline-none focus:ring-1 focus:ring-red-600 text-sm text-gray-600 font-medium"
              />
            </div>
          </div> */}
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
                    value="yes"
                    checked={state.long_term_guarantee === true}
                    onChange={() =>
                      dispatch({
                        type: "SET_LONG_TERM_GUARANTEE",
                        payload: true,
                      })
                    }
                    className="accent-red-600"
                  />
                  Yes
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="guarantee"
                    value="no"
                    checked={state.long_term_guarantee === false}
                    onChange={() =>
                      dispatch({
                        type: "SET_LONG_TERM_GUARANTEE",
                        payload: false,
                      })
                    }
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
                    value="yes"
                    checked={state.pickup_delivery === true}
                    onChange={() =>
                      dispatch({
                        type: "SET_PICKUP_DELIVERY",
                        payload: true,
                      })
                    }
                    className="accent-red-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="pickup"
                    value="no"
                    checked={state.pickup_delivery === false}
                    onChange={() =>
                      dispatch({
                        type: "SET_PICKUP_DELIVERY",
                        payload: false,
                      })
                    }
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
                    value="yes"
                    checked={state.isActive === true}
                    onChange={() =>
                      dispatch({
                        type: "SET_IS_ACTIVE",
                        payload: true,
                      })
                    }
                    className="accent-red-600"
                  />
                  Yes
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="available"
                    value="no"
                    checked={state.isActive === false}
                    onChange={() =>
                      dispatch({
                        type: "SET_IS_ACTIVE",
                        payload: false,
                      })
                    }
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
              value={state.plate_type}
              onChange={(e) =>
                dispatch({ type: "SET_PLATE_TYPE", payload: e.target.value })
              }
              className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none"
            >
              <option value="" disabled hidden>
                Plate Type
              </option>
              <option value="Private">Private</option>
              <option value="Commercial">Commercial</option>
              <option value="Government">Government</option>
            </select>
            <select
              value={state.insurance_type}
              onChange={(e) =>
                dispatch({
                  type: "SET_INSURANCE_TYPE",
                  payload: e.target.value,
                })
              }
              className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none"
            >
              <option value="" disabled hidden>
                Insurance Type
              </option>
              <option value="Comprehensive">Comprehensive</option>
              <option value="Third Party">Third Party</option>
              <option value="Full Coverage">Full Coverage</option>
            </select>
            <select
              value={state.usage_nature} //usage_nature
              onChange={(e) =>
                dispatch({ type: "SET_USAGE_NATURE", payload: e.target.value })
              }
              className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none"
            >
              <option value="" disabled hidden>
                Nature of use
              </option>
              <option value="personal">Personal</option>
              <option value="commercial">Commercial</option>
              <option value="family">Family</option>
              <option value="business">Business</option>
            </select>
          </section>

          {/* Category Selection */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Category Selection</h2>

            <select
              value={state.category_ids}
              onChange={(e) =>
                dispatch({ type: "SET_CATEGORY_IDS", payload: e.target.value })
              }
              className="w-full border border-gray-400 rounded-lg p-3 font-semibold bg-white outline-none"
            >
              <option value="" disabled hidden>
                Select Category
              </option>
              {categories.length > 0 ? (
                categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))
              ) : (
                <option disabled>Loading categories...</option>
              )}
            </select>
          </section>

          {/* Descriptions */}
          <section className="space-y-3">
            <h2 className="font-bold text-red-600">Descriptions</h2>
            <textarea
              placeholder="Description"
              value={state.description}
              onChange={(e) =>
                dispatch({ type: "SET_DESCRIPTION", payload: e.target.value })
              }
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
          <input
            type="checkbox"
            checked={state.termsAccepted}
            onChange={(e) =>
              dispatch({
                type: "SET_TERMS_ACCEPTED",
                payload: e.target.checked,
              })
            }
            className="w-4 h-4 accent-red-600"
          />
          <span>I accept the Terms & Conditions</span>
        </label>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
        >
          Upload Now
        </button>
      </section>

      {/* Modal Features */}
      {featuresOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-end md:items-center md:justify-center z-50">
          <div className="bg-white w-full md:max-w-lg rounded-t-2xl md:rounded-2xl flex flex-col max-h-[80%]">
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-300 py-3 px-4 sticky top-0 bg-white z-10 rounded-t-2xl">
              <h3 className="text-lg font-bold text-red-600">
                Select Features
              </h3>
              <button type="button" onClick={() => setFeaturesOpen(false)}>
                <IoClose className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Features List */}
            <div className="flex-1 overflow-y-auto p-4">
              {state.featuresData && state.featuresData.length > 0 ? (
                state.featuresData.map((feature) => (
                  <div
                    key={feature.id}
                    className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <p className="font-semibold text-red-600 bg-red-100 w-full p-3 text-lg">
                      {feature.slug.charAt(0).toUpperCase() +
                        feature.slug.slice(1)}
                    </p>

                    <div className="p-3">
                      {feature.values && feature.values.length > 0 ? (
                        feature.values.map((val, idx) => {
                          // ✅ Extract English value only
                          const enValue =
                            val.translations?.find((t) => t.locale === "en")
                              ?.value || "";

                          return (
                            <label
                              key={idx}
                              className="flex items-center gap-2 mb-2 cursor-pointer"
                            >
                              <input
                                type="radio"
                                name={feature.slug}
                                value={enValue}
                                checked={
                                  state.selectedFeatures[feature.slug] ===
                                  enValue
                                }
                                onChange={() =>
                                  handleFeatureSelect(feature.slug, enValue)
                                }
                                className="w-4 h-4 accent-red-600"
                              />
                              <span className="text-gray-800">{enValue}</span>
                            </label>
                          );
                        })
                      ) : (
                        <p className="text-gray-400 italic">No values found</p>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500">Loading features...</p>
              )}
            </div>

            {/* Confirm Button */}
            <div className="p-4 border-t border-gray-300 sticky bottom-0 bg-white z-10 rounded-b-2xl">
              <button
                type="button"
                onClick={() => setFeaturesOpen(false)}
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold"
              >
                Confirm Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default UploadCarPage;
