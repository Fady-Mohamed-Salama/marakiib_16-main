"use client";

import { useState } from "react";
import { FiMapPin } from "react-icons/fi";
import { LuChevronDown } from "react-icons/lu";

export default function LocationSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(null);

  // Get user location
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setLocation(coords);

        // 👇 Open Google Maps
        const url = `https://www.google.com/maps?q=${coords.lat},${coords.lng}`;
        window.open(url, "_blank");

        setIsOpen(false);
      },
      () => {
        alert("Unable to retrieve your location");
      }
    );
  };

  return (
    <div>
      {/* Main Button */}
      <div
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 cursor-pointer py-4 w-fit"
      >
        <FiMapPin className="text-gray-800 text-2xl" />
        <p className="text-gray-800 font-semibold">
          {location
            ? `Lat: ${location.lat.toFixed(2)}, Lng: ${location.lng.toFixed(2)}`
            : "Location"}
        </p>
        <LuChevronDown className="text-gray-500 text-xl" />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-[90%] max-w-sm">
            <h2 className="text-lg font-semibold mb-4">
              📍 Do you want to open your location in Google Maps?
            </h2>
            <button
              onClick={handleGetLocation}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Yes, open Google Maps
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-2 w-full bg-gray-200 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
