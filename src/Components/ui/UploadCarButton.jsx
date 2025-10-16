"use client";

import Link from "next/link";
import { MdOutlineCloudUpload } from "react-icons/md";

const UploadCarButton = () => {
  return (
    <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-50  w-[90%] max-w-[450px]">
      <Link
        href="/upload-car"
        className="flex items-center bg-gray-50 justify-center gap-2 
                   w-full 
                   border-2 border-red-600 text-red-600 
                   px-6 py-3 rounded-lg font-semibold 
                   hover:bg-gray-100 hover:text-red-600 
                   transition-all duration-300"
      >
        <MdOutlineCloudUpload className="text-xl" />
        <span>Upload Car</span>
      </Link>
    </div>
  );
};

export default UploadCarButton;

