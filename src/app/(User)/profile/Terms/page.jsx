"use client";

import React from "react";
import BackArrow from "@/Components/BackArrow/BackArrow";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 py-5">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* 🔹 السهم والعنوان في صف واحد */}
        <div className="flex items-center justify-center relative mb-8">
          <div className="absolute left-0">
            <BackArrow className="text-3xl" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 text-center">
            Terms & Conditions
          </h1>
        </div>

        {/* المحتوى */}
        <div className="space-y-8 text-gray-800 leading-relaxed">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-red-600">Marakiib.com</span>. By
            accessing or using our platform, you agree to comply with and be
            bound by these Terms and Conditions. Please read them carefully
            before using our services.
          </p>

          {/* 1. About Marakiib */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              1. About Marakiib
            </h2>
            <p>
              Marakiib.com is an intermediary car rental platform based in the{" "}
              <strong>Hashemite Kingdom of Jordan</strong>, established in{" "}
              <strong>2018</strong>. We connect vehicle owners (“Sellers”) and
              renters (“Buyers”) through a secure, easy-to-use digital system
              that supports online payments and booking management. Marakiib
              acts as a mediator and charges a commission for each completed
              transaction.
            </p>
          </section>

          {/* 2. Acceptance of Terms */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              2. Acceptance of Terms
            </h2>
            <p>
              By registering, accessing, or using Marakiib.com, you confirm that
              you have read, understood, and agreed to these Terms and
              Conditions, as well as our{" "}
              <a
                href="/privacy-policy"
                className="text-red-600 underline hover:text-red-700"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* 3. User Eligibility */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              3. User Eligibility
            </h2>
            <p>
              To use Marakiib.com, users must be at least 18 years old and hold
              a valid driver’s license. Users are responsible for ensuring that
              all information provided is accurate and up-to-date.
            </p>
          </section>

          {/* 4. Platform Role */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              4. Platform Role
            </h2>
            <p>
              Marakiib.com is an intermediary and does not own, operate, or
              directly rent vehicles. All rental agreements and payments occur
              between vehicle owners and renters. Marakiib is not liable for any
              disputes, damages, or losses arising from these transactions,
              except in cases related to payment processing errors.
            </p>
          </section>

          {/* 5. Payments and Commission */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              5. Payments and Commission
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                All payments are processed through secure, verified payment
                gateways.
              </li>
              <li>
                Marakiib.com charges a commission on each successful booking.
              </li>
              <li>
                Fees and commission rates are clearly stated before confirming a
                transaction.
              </li>
              <li>
                Refunds, if applicable, follow the platform’s cancellation and
                refund policy.
              </li>
            </ul>
          </section>

          {/* 6. User Responsibilities */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              6. User Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Provide accurate and complete information when registering.</li>
              <li>Use the platform only for lawful and legitimate purposes.</li>
              <li>
                Ensure that listed vehicles meet safety and licensing standards.
              </li>
              <li>
                Do not misuse, hack, or attempt to disrupt the platform or other
                users’ data.
              </li>
            </ul>
          </section>

          {/* 7. Liability */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              Marakiib.com is not responsible for any direct, indirect, or
              consequential damages arising from the use or inability to use the
              platform, including but not limited to disputes between renters
              and owners, vehicle damage, or payment delays.
            </p>
          </section>

          {/* 8. Account Suspension or Termination */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              8. Account Suspension or Termination
            </h2>
            <p>
              Marakiib.com reserves the right to suspend or terminate any
              account found in violation of our terms, or suspected of engaging
              in fraudulent or illegal activity, without prior notice.
            </p>
          </section>

          {/* 9. Intellectual Property */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              9. Intellectual Property
            </h2>
            <p>
              All content, trademarks, and materials on Marakiib.com are owned
              by or licensed to Marakiib. You may not copy, reproduce, or
              distribute any part of the platform without prior written consent.
            </p>
          </section>

          {/* 10. Governing Law */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              10. Governing Law
            </h2>
            <p>
              These Terms and Conditions are governed by and interpreted in
              accordance with the laws of the{" "}
              <strong>Hashemite Kingdom of Jordan</strong>. Any disputes will be
              subject to the exclusive jurisdiction of the Jordanian courts.
            </p>
          </section>

          {/* 11. Amendments */}
          <section>
            <h2 className="text-xl font-semibold text-red-600 mb-3">
              11. Amendments
            </h2>
            <p>
              Marakiib.com reserves the right to modify or update these Terms
              and Conditions at any time. Updates will be published on this page
              with a new “Last Updated” date. Continued use of the platform
              indicates your acceptance of any changes.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
