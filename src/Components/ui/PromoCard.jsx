"use client";

import Image from "next/image";
import "./PromoCard.css";


const PromoCard = () => {
  return (
    <div
      className="relative bg-red-600 text-white rounded-2xl px-4 pt-4 md:px-6 md:pt-5 md:pb-4 lg:px-8 lg:pt-7 lg:pb-5 mt-6 overflow-hidden bg-radial-lines"
    >

      {/* texts */}
      <div className="relative z-10">
        <h1 className="font-semibold  text-base sm:text-2xl md:text-4xl lg:text-5xl">
          The Best Platform for Car Rental
        </h1>
        <p className="mt-2 md:mt-2 font-normal text-sm sm:text-base md:text-xl lg:text-2xl text-gray-100">
          Ease of doing a car rental safely and
          <br /> reliably. Of course at a low price.
        </p>

        {/* button and car image in the same line */}
        <div className="flex items-center justify-between">
          <button
            className="shrink-0 rounded-md bg-black text-white font-medium 
                              px-4 py-2 text-sm hover:bg-gray-900 transition
                              md:px-5 md:py-2.5 md:text-base
                              lg:px-6 lg:py-3 lg:text-lg"
          >
            Rental Car
          </button>
          <Image
            src="/images/car.png" 
            alt="Rental Car"
            width={196}
            height={56}
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 200px"
            className="shrink-0 object-contain h-auto 
                      w-45 sm:w-46 md:w-64 lg:w-80 xl:w-[25rem]"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default PromoCard;
