"use client";

import {
  FaCar,
  FaMoneyBillWave,
  FaClock,
  FaExclamationCircle,
  FaTimesCircle,
  FaTag,
} from "react-icons/fa";

const notificationsToday = [
  {
    id: 1,
    title: "Car Booking Successful",
    time: "10:00 am",
    description:
      "Your car is ready! Check your email for the booking and pickup instructions. Safe travels!",
    icon: <FaCar className="text-gray-700 text-base" />,
    unread:  false,
  },
  {
    id: 2,
    title: "Payment Notification",
    time: "10:00 am",
    description: "Your payment was processed successfully! Enjoy your ride.",
    icon: <FaMoneyBillWave className="text-gray-700 text-base" />,
    unread: true,
  },
  {
    id: 3,
    title: "Car Pickup/Drop-off time",
    time: "09:00 am",
    description:
      "Pickup time confirmed! See you at [Time] for your car rental. Drop-off Time Confirmed! Please",
    icon: <FaClock className="text-gray-700 text-base" />,
    unread: true,
  },
];

const notificationsPrevious = [
  {
    id: 4,
    title: "Late Return Warning",
    time: "Yesterday",
    description:
      "Late Return Alert! Please return the car as soon as possible to avoid extra charges.",
    icon: <FaExclamationCircle className="text-gray-700 text-base" />,
    unread: false,
  },
  {
    id: 5,
    title: "Cancellation Notice",
    time: "Yesterday",
    description:
      "Your Reservation Has Been Canceled or Booking Cancelled Successfully.",
    icon: <FaTimesCircle className="text-gray-700 text-base" />,
    unread: false,
  },
  {
    id: 6,
    title: "Discount Notification",
    time: "Yesterday",
    description:
      "Congratulations! You've unlocked a 10% discount on your next rental.",
    icon: <FaTag className="text-gray-700 text-base" />,
    unread: false,
  },
];

const NotificationItem = ({ icon, title, time, description, unread }) => (
  <div
    className={`flex items-start gap-3 py-4 px-5 rounded-lg shadow-sm ${
      unread ? "bg-white" : "bg-gray-50"
    }`}
  >
    {/* Icon */}
    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
      {icon}
    </div>

    {/* Content */}
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <h4
          className={`text-sm ${
            unread ? "font-bold text-gray-900" : "font-medium text-gray-500"
          }`}
        >
          {title}
        </h4>
        <div className="flex items-center gap-1">
          <span
            className={`text-xs ${
              unread ? "text-gray-600 font-semibold" : "text-gray-400"
            }`}
          >
            {time}
          </span>
          {unread && (
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block"></span>
          )}
        </div>
      </div>
      <p
        className={`mt-1 text-xs ${
          unread ? "text-gray-700 font-medium" : "text-gray-400"
        }`}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function NotificationsPage() {
  // احسب عدد الرسائل الغير مقروءة
  const unreadCount = [...notificationsToday, ...notificationsPrevious].filter(
    (n) => n.unread
  ).length;

  return (
    <div className="bg-gray-50 min-h-screen py-6">
      <div className="max-w-md mx-auto bg-gray-50">
        {/* Header */}
        <h2 className="text-lg font-bold text-center">Notifications</h2>

        {/* Navigation Bar */}
        <div className="flex justify-between items-center mt-4 px-4">
          <span className="text-sm font-medium text-gray-700">
            All Notifications
          </span>
          <span className="text-sm font-medium text-blue-600">
            Unread ({unreadCount})
          </span>
        </div>

        {/* Today Section */}
        <div className="mt-6">
          <h3 className="text-gray-900 font-semibold text-sm mb-2 px-4">
            Today
          </h3>
          <div className="space-y-3">
            {notificationsToday.map((n) => (
              <NotificationItem key={n.id} {...n} />
            ))}
          </div>
        </div>

        {/* Previous Section */}
        <div className="mt-6">
          <h3 className="text-gray-700 font-semibold text-sm mb-2 px-4">
            Previous
          </h3>
          <div className="space-y-3">
            {notificationsPrevious.map((n) => (
              <NotificationItem key={n.id} {...n} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

