"use client";

import React from "react";
import BackArrow from "@/Components/BackArrow/BackArrow";

const About = () => {
  return (
    <div className="bg-gray-50 py-5">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 🔹 السهم والعنوان في صف واحد */}
        <div className="flex items-center justify-center relative mb-8">
          <div className="absolute left-0">
            <BackArrow className="text-3xl" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center">
            About Marakiib
          </h1>
        </div>

        {/* المحتوى */}
        <div className="space-y-8 text-gray-800 leading-relaxed">
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              Who We Are
            </h2>
            <p>
              <span className="font-semibold text-red-600">Marakiib.com</span>{" "}
              is a trusted car rental marketplace based in the{" "}
              <strong>Hashemite Kingdom of Jordan</strong>, established in{" "}
              <strong>2018</strong>. We connect vehicle owners with customers
              looking to rent cars quickly, safely, and conveniently — all in
              one digital platform.
            </p>
            <p className="mt-2">
              Our mission is to simplify the car rental process by providing a
              transparent, secure, and efficient online system that benefits
              both car owners and renters.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              What We Do
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Enable vehicle owners to list their cars for rent safely and
                easily.
              </li>
              <li>
                Allow customers to browse, compare, and book cars online within
                minutes.
              </li>
              <li>
                Facilitate secure online payments between both parties through
                trusted gateways.
              </li>
              <li>
                Provide customer support, booking management, and fraud
                prevention tools.
              </li>
              <li>
                Charge a small commission on successful transactions to sustain
                our operations.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              Our Mission
            </h2>
            <p>
              At Marakiib, our goal is to revolutionize car rentals in Jordan
              and the region by making the process more transparent, accessible,
              and fair for everyone involved. We aim to empower individual car
              owners to generate income and help renters find affordable,
              verified vehicles with ease.
            </p>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              Our Vision
            </h2>
            <p>
              We envision Marakiib.com as the leading digital marketplace for
              car rentals in the Middle East — a platform that builds trust
              between users, promotes safety and reliability, and supports the
              growth of the sharing economy in Jordan and beyond.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              Why Choose Marakiib?
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Established platform with years of trusted service (since 2018).</li>
              <li>Secure online payment and booking system.</li>
              <li>Verified vehicle listings and transparent rental terms.</li>
              <li>Responsive customer support team.</li>
              <li>Competitive pricing and fair commissions.</li>
            </ul>
          </section>
          

        </div>
      </div>
    </div>
  );
};

export default About;
