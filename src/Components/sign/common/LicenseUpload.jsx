import React from "react";

const LicenseUpload = ({ license, onChange, onRemove, error }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">
        Driving License
      </label>
      <div className="relative mt-1">
        {!license ? (
          <label className="flex items-center justify-center w-full h-40 border border-gray-300 rounded-xl cursor-pointer bg-white hover:bg-gray-50 transition">
            <span className="text-black text-sm font-medium">
              Tap to select Driving License Image
            </span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={onChange}
            />
          </label>
        ) : (
          <div className="relative w-full">
            <img
              src={URL.createObjectURL(license)}
              alt="Driving License Preview"
              className="w-full h-40 object-cover rounded-xl border"
            />
            <button
              type="button"
              onClick={onRemove}
              className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs"
            >
              Remove
            </button>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default LicenseUpload;
