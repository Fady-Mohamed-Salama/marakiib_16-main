"use client";

import React from "react";
import Image from "next/image";
import SearchBar from "@/Components/ui/SearchBar";
import { useRouter } from "next/navigation";

// بيانات المحادثات
const chats = [
  {
    id: 1,
    name: "Hela Quintin",
    message: "Your car is on the way! It will arrive.......",
    time: "09:20 am",
    unread: 4,
    img: "/images/img.png",
    online: true,
  },
  {
    id: 2,
    name: "Hela Quintin",
    message: "Your car is on the way! It will arrive.......",
    time: "09:20 am",
    unread: 1,
    img: "/images/user2.jpg",
    online: true,
  },
  {
    id: 3,
    name: "Hela Quintin",
    message: "Your car is on the way! It will arrive.......",
    time: "09:20 am",
    unread: 434,
    img: "/images/user3.jpg",
    online: true,
  },
  {
    id: 4,
    name: "Hela Quintin",
    message: "Your car is on the way! It will arrive.......",
    time: "09:20 am",
    unread: 0,
    img: "/images/user4.jpg",
    online: true,
  },
  {
    id: 5,
    name: "Hela Quintin",
    message: "Your car is on the way! It will arrive.......",
    time: "09:20 am",
    unread: 0,
    img: "/images/user5.jpg",
    online: true,
  },
  {
    id: 6,
    name: "Hela Quintin",
    message: "Your car is on the way! It will arrive.......",
    time: "09:20 am",
    unread: 0,
    img: "/images/user6.jpg",
    online: true,
  },
];

const Message = () => {
    const router = useRouter();
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* العنوان */}
      <h2 className="text-xl font-semibold text-gray-800 mt-5">Chats</h2>

      {/* محرك البحث */}
      <div className="mt-4 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%]">
        <SearchBar
          placeholder="Search something here"
          inputClassName="text-2xl font-semibold" // ← هنا كبرت حجم الخط
        />
      </div>

      {/* قائمة المحادثات */}

      <div className="mt-6 w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] space-y-3">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => router.push(`/message/${chat.id}`)} // ⬅ عند الضغط نروح لصفحة المحادثة
            className="flex items-center justify-between bg-white p-3 rounded-xl shadow hover:shadow-md transition duration-200"
          >
            {/* صورة البروفايل + الحالة */}
            <div className="relative">
              <Image
                src={chat.img}
                alt={chat.name}
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              {chat.online && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
              )}
            </div>

            {/* اسم المستخدم والرسالة */}
            <div className="flex-1 ml-4">
              <h3 className="text-gray-800 font-medium">{chat.name}</h3>
              <p className="text-gray-500 text-sm truncate w-[150px] sm:w-[200px] md:w-[220px]">
                {chat.message}
              </p>
            </div>

            {/* وقت الرسالة وعدد الرسائل */}
            <div className="flex flex-col items-center space-y-1">
              {chat.unread > 0 && (
                <span
                  className={`flex items-center justify-center bg-red-500 text-white font-semibold rounded-full 
                    ${
                      chat.unread > 99
                        ? "w-8 h-8 text-xs" // للأرقام الكبيرة زي 434
                        : "w-6 h-6 text-[10px]"
                    }`}
                >
                  {chat.unread}
                </span>
              )}
              <p className="text-gray-400 text-xs">{chat.time}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Message;
